import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterClubComponent } from './Components/register-club/register-club.component';
import { MyClubsComponent } from './Components/my-clubs/my-clubs.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'register-club', component: RegisterClubComponent },
  { path: 'my-clubs', component: MyClubsComponent },
  { path: '**', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
