import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"thankyou",component:ThankyouComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
