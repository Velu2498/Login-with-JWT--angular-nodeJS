import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { AuthGuard } from './auth.guard';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
{
  path:"home",
  canActivate : [AuthGuard],
  component:HomepageComponent
},
{
  path:"",
  component:LoginComponent
},
{
  path:"register",
  component:SiginComponent
},
{
  path:"error",
  component:Error404Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
