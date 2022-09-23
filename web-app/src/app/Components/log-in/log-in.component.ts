import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { PostService } from 'src/app/Services/Post/post.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

/**
 * Users can register themselves and log in with their accounts
 * on this component
 */
export class LogInComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName1: '',
    lastName2: '',
    isAdmin: false,
    email: '',
    password: '',
    classSection: '',
    proposedCourses: []
  }

  validation = {
    status: ''
  }

  constructor(private router: Router, 
    private cookieSvc: CookieService, 
    private postSvc: PostService) { }

  ngOnInit(): void { }

  /**
   * Called when the button of the log in form is clicked
   */
  logIn() {
    this.postSvc.logIn(this.user).subscribe(
      res => {
        this.validation = res;
        if (this.validation.status == "OK") {
          alert("Inicio de sesión exitoso");
          this.cookieSvc.set('email', this.user.email);

          //TODO: route to corresponding component
          if (this.user.isAdmin) {

          }
          else {

          }
        }
        else {
          alert("Inicio de sesión fallido");
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
