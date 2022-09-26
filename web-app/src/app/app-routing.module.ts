import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterClubComponent } from './Components/register-club/register-club.component';
import { MyClubsComponent } from './Components/my-clubs/my-clubs.component';
import { AllClubsComponent } from './Components/all-clubs/all-clubs.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { TopThreeComponent } from './Components/top-three/top-three.component';
import { TopFiveComponent } from './Components/top-five/top-five.component';
import { BottomFiveComponent } from './Components/bottom-five/bottom-five.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'register-club', component: RegisterClubComponent },
  { path: 'my-clubs', component: MyClubsComponent },
  { path: 'all-clubs', component: AllClubsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'top-three', component: TopThreeComponent },  
  { path: 'top-five', component: TopFiveComponent },
  { path: 'bottom-five', component: BottomFiveComponent },  
  { path: '**', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
