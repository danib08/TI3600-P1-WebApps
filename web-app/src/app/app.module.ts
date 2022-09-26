import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { StudentNavbarComponent } from './Components/student-navbar/student-navbar.component';
import { RegisterClubComponent } from './Components/register-club/register-club.component';
import { MyClubsComponent } from './Components/my-clubs/my-clubs.component';
import { AllClubsComponent } from './Components/all-clubs/all-clubs.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';
import { TopThreeComponent } from './Components/top-three/top-three.component';
import { TopFiveComponent } from './Components/top-five/top-five.component';
import { BottomFiveComponent } from './Components/bottom-five/bottom-five.component';
import { CategoriesComponent } from './Components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    StudentNavbarComponent,
    RegisterClubComponent,
    MyClubsComponent,
    AllClubsComponent,
    AdminNavbarComponent,
    TopThreeComponent,
    TopFiveComponent,
    BottomFiveComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
