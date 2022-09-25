import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { GetService } from 'src/app/Services/Get/get.service';
import { PostService } from 'src/app/Services/Post/post.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';

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
   * Called when the log in form is submitted 
   * @param form - form reference from the html
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
            this.router.navigate(["register-club"]);
          }
        }
      })
      form.resetForm();
  }

  /**
   * Called when the registration form is submitted 
   * @param form - form reference from the html
   */
  signUp(form: NgForm) {
    this.postSvc.signUp(this.newUser)
      .subscribe(resp => {
        if (resp.status == 200) {
          alert("Registro exitoso");         
          this.router.navigate(["login"]);
        }
      })
      form.resetForm();
  }
}