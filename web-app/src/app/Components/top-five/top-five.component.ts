import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { GetService } from 'src/app/Services/Get/get.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})

/**
 * Admins can see the top five most subscribed courses here
 */
export class TopFiveComponent implements OnInit {

  courses: Course[] = [];
  list: Course[] = [];

  constructor(private getSvc: GetService) { }

  ngOnInit(): void {
    this.getTopFive();
  }

  /**
   * Gets list of top five suggested courses
   */
  getTopFive() {
    this.getSvc.getTopFiveCourses()
      .subscribe(resp => {
        if (resp.status == 200) {
          this.list = { ...resp.body! };
          this.setCourses();
        }
      })
  }

  /**
   * Sets list of top five courses by looping through the
   * API response object
   */
   setCourses() {
    for (let i = 0; i < Object.keys(this.list).length; i++) {
      this.courses.push(this.list[i])
    }
  }
}