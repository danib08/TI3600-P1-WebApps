import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/Services/Get/get.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

/**
 * Admins can see the number of courses per category in this component
 */
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  list: Category[] = [];

  constructor(private getSvc: GetService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  /**
   * Gets list of categories and number of courses
   */
     getCategories() {
      this.getSvc.getCategoriesStats()
        .subscribe(resp => {
          if (resp.status == 200) {
            this.list = { ...resp.body! };
            this.setCategories();
          }
        })
    }
  
    /**
     * Sets list of categories and number of courses by looping 
     * through the API response object
     */
     setCategories() {
      for (let i = 0; i < Object.keys(this.list).length; i++) {
        this.categories.push(this.list[i])
      }
    }
}
