import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';


const routes: Routes = [
{
  path:"home",
  component:HomepageComponent
},
{
  path:"",
  component:LoginComponent
},
{
  path:"register",
  component:SiginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
