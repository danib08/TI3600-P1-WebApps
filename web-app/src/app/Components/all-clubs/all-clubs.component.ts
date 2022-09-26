import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CookieService } from 'ngx-cookie-service';
import { GetService } from 'src/app/Services/Get/get.service';
import { PatchService } from 'src/app/Services/Patch/patch.service';

@Component({
  selector: 'app-all-clubs',
  templateUrl: './all-clubs.component.html',
  styleUrls: ['./all-clubs.component.css']
})
export class AllClubsComponent implements OnInit {

  allCourses: Course[] = [];
  list: Course[] = [];
 
  constructor(private getSvc: GetService,
    private patchSvc: PatchService,
    private cookieSvc: CookieService) { }

  ngOnInit(): void {
    this.getCourses();
  }

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

  /**
   * Subscribes the user to a specific course
   * @param courseName - name of the course
   * @param $event - mouse click
   */
  subscribe(courseName: string,  $event: MouseEvent){
    ($event.target as HTMLButtonElement).disabled = true;
    let email = this.cookieSvc.get('email');

    this.patchSvc.subscribeToCourse(courseName, email)
      .subscribe(resp => {
        if (resp.status == 200) {
          alert("Interés dado satisfactoriamente.");
        }
      })
  }
}
