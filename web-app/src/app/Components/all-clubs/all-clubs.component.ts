import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CookieService } from 'ngx-cookie-service';
import { GetService } from 'src/app/Services/Get/get.service';

@Component({
  selector: 'app-all-clubs',
  templateUrl: './all-clubs.component.html',
  styleUrls: ['./all-clubs.component.css']
})
export class AllClubsComponent implements OnInit {

  allCourses: Course[] = [];
  list: Course[] = [];
 
  constructor(private getSvc: GetService,
    private cookieSvc: CookieService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  //TODO: check if proposedBy is being sent and displayed

  /**
   * Gets a list of all of the registered courses
   */
  getCourses() {
    this.getSvc.getCourses()
      .subscribe(resp => {
        if (resp.status == 200) {
          this.list = { ...resp.body! };
          this.setCourses();
        }
      })
  }

  /**
   * Sets list of all courses by looping through the
   * API response object
   */
  setCourses() {
    for (let i = 0; i < Object.keys(this.list).length; i++) {
      this.allCourses.push(this.list[i])
    }
  }

  subscribe(courseName: string,  $event: MouseEvent){
    ($event.target as HTMLButtonElement).disabled = true;

    //TODO: call patch method to subscribe to course
  }
}
