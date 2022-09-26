import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Course } from 'src/app/Models/course';
import { CookieService } from 'ngx-cookie-service';
import { GetService } from 'src/app/Services/Get/get.service';
import { PostService } from 'src/app/Services/Post/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-club',
  templateUrl: './register-club.component.html',
  styleUrls: ['./register-club.component.css']
})

/**
 * Students submit their course suggestions in this component
 */
export class RegisterClubComponent implements OnInit {

  newCourse: Course = {
    name: '',
    category: '',
    interestedStudents: 0,
    proposedBy: {
      firstName: '',
      lastName1: '',
      lastName2: '',
      email: ''
    }
  }

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

  constructor(private getSvc: GetService,
    private postSvc: PostService,
    private cookieSvc: CookieService) { }

  ngOnInit(): void {
  }

  /**
   * Called when the course registration form is submitted 
   * @param form - form reference from the html file
   */
  submitCourse(form: NgForm) {
    this.getSvc.getUser(this.cookieSvc.get('email'))
      .subscribe(resp => {
        if (resp.status == 200) {
          this.loggedUser = { ...resp.body! };
          this.postCourse(this.loggedUser, form); 
        }
      })
  }

  /**
   * Posts the new course to the API
   * @param user - the logged user
   * @param form - form from the html file
   */
  postCourse(user: User, form: NgForm) {
    this.newCourse.proposedBy.email = user.email;
    this.newCourse.proposedBy.firstName = user.firstName;
    this.newCourse.proposedBy.lastName1 = user.lastName1;
    this.newCourse.proposedBy.lastName2 = user.lastName2;

    this.postSvc.postCourse(this.newCourse)
      .subscribe(resp => {
        if (resp.status == 200) {
          alert("Registro de curso exitoso");         
        }
      })
    form.resetForm();
  }
}
