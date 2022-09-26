import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Course } from 'src/app/Models/course';
import { CookieService } from 'ngx-cookie-service';
import { GetService } from 'src/app/Services/Get/get.service';

@Component({
  selector: 'app-my-clubs',
  templateUrl: './my-clubs.component.html',
  styleUrls: ['./my-clubs.component.css']
})

/**
 * Students are able to see all of the courses they have submitted
 */
export class MyClubsComponent implements OnInit {

  myCourses: Course[] = [];

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
    private cookieSvc: CookieService) { }

  ngOnInit(): void {
    this.retrieveInfo();
  }

  /**
   * Gets list of courses submitted by the student 
   */
  retrieveInfo() {
    this.getSvc.getUser(this.cookieSvc.get('email'))
      .subscribe(resp => {
        if (resp.status == 200) {
          this.loggedUser = { ...resp.body! };
          this.myCourses = this.loggedUser.proposedCourses;
        }
      })
  }
}