import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { StudentNavbarComponent } from './Components/student-navbar/student-navbar.component';
import { RegisterClubComponent } from './Components/register-club/register-club.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    StudentNavbarComponent,
    RegisterClubComponent
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
