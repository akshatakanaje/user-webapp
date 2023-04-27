import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
//AuthGuard: we can generate any guard to protect the url if ur required data value is there, it will open that url otherwise
//that url will be blocked.
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.isLoggedIn()) {
        this.router.navigate(['/auth/login']);
      }
    return this.authService.isLoggedIn();
  }
  
} 
