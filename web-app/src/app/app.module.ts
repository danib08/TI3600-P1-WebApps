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

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    StudentNavbarComponent,
    RegisterClubComponent,
    MyClubsComponent,
    AllClubsComponent
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
