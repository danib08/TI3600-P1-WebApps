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
 
  constructor(private getSvc: GetService,
    private cookieSvc: CookieService) { }

  ngOnInit(): void {
    this.getCourses(); //TODO: uncomment and test
  }

  /**
   * Gets a list of all of the registered courses
   */
  getCourses() {
    this.getSvc.getCourses()
      .subscribe(resp => {
        if (resp.status == 200) {
          this.allCourses = { ...resp.body! };
          console.log(this.allCourses);
        }
      })
  }

  subscribe(courseName: string,  $event: MouseEvent){
    ($event.target as HTMLButtonElement).disabled = true;

    //TODO: call patch method to subscribe to course
  }
}
