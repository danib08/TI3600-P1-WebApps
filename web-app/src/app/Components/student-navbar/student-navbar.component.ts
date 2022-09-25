import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})

/**
 * Navbar component for the students
 */
export class StudentNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
