import { Component, OnInit } from '@angular/core';
import { TopThree } from 'src/app/Models/top-three'; 
import { GetService } from 'src/app/Services/Get/get.service';

@Component({
  selector: 'app-top-three',
  templateUrl: './top-three.component.html',
  styleUrls: ['./top-three.component.css']
})

/**
 * Admins can see the top three students with the most course suggestions
 */
export class TopThreeComponent implements OnInit {

  students: TopThree[] = [];
  list: TopThree[] = [];

  constructor(private getSvc: GetService) { }

  ngOnInit(): void {
    this.getTopThree();
  }

  /**
   * Gets list of top five three students
   */
   getTopThree() {
    this.getSvc.getTopThree()
      .subscribe(resp => {
        if (resp.status == 200) {
          this.list = { ...resp.body! };
          this.setStudents();
        }
      })
  }

  /**
   * Sets list of top three students by looping through the
   * API response object
   */
   setStudents() {
    for (let i = 0; i < Object.keys(this.list).length; i++) {
      this.students.push(this.list[i])
    }
  }


}
