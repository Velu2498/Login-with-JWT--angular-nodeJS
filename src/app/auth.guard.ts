import { Injectable } from "@angular/core";
import { ServeService } from "./serve.service";
import {Router} from'@angular/router'

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private r :Router){}
  // private r:Router
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      console.log(ServeService.auth)
      if(ServeService.auth){ 
        console.log("tkyrsxxhrfxrfx")
        return true;
      }
      else{ 
        console.log("feadzxyrhfxrfx,ujtj")
        this.r.navigate(['/error'])   
      return false
     }
      
    // return true;
  }
}
