import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { GetService } from 'src/app/Services/Get/get.service';
import { PostService } from 'src/app/Services/Post/post.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormGroupName, NgForm } from '@angular/forms';

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

  emailInput: string = '';
  passInput: string = '';

  private loggedUser: User = {
    firstName: '',
    lastName1: '',
    lastName2: '',
    isAdmin: false,
    email: '',
    password: '',
    classSection: '',
    proposedCourses: [],
    wantedCourses: []
  }

  newUser: User = {
    firstName: '',
    lastName1: '',
    lastName2: '',
    isAdmin: false,
    email: '',
    password: '',
    classSection: '',
    proposedCourses: [],
    wantedCourses: []
  }

  constructor(private router: Router, 
    private cookieSvc: CookieService, 
    private getSvc: GetService,
    private postSvc: PostService) { }

  ngOnInit(): void { }

  /**
   * Called when the button of the log in form is clicked
   */
  logIn(form: NgForm) {
    this.getSvc.logIn(this.emailInput, this.passInput)
      .subscribe(resp => {
        if (resp.status == 200) {
          this.loggedUser = { ...resp.body! };
          this.cookieSvc.set('email', this.loggedUser.email);
          
          //TODO: route to corresponding component
          if (this.loggedUser.isAdmin) {

          }
          else {

          }
        }
      })
      form.resetForm();
  }

  /**
   * Called when the button of the sign up form is clicked
   */
  signUp() {
    /**console.log(this.user);
    this.postSvc.signUp(this.user).subscribe(
      res => {
        this.validation = res;
        if (this.validation.status == "OK") {
          alert("Registro exitoso");
          this.router.navigate(["**"]);
        }
        else {
          alert("Registro fallido");
        }
      },
      error => {
        console.log(error);
      }
    );*/
  }
}