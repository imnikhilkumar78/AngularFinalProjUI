import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private apiService: ApiServiceService, public router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.apiService.isLoggedIn !== true) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
