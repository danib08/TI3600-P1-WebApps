import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/Services/Get/get.service';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {


  constructor(private getSvc: GetService) { }

  ngOnInit(): void {
    this.getTopFive();
  }

  getTopFive() {
    
  }

}
