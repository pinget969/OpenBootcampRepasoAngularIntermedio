import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
     //nos dice en que ruta estamos.
    route: ActivatedRouteSnapshot,
    //nos devuelve un estado.
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    let token = sessionStorage.getItem('token');
    if(token){
      return true
    }else{
      this.router.navigate(['login']);
      return false;
    }
    return true;    //True : carga la ruta / false : no carga la ruta

  }
  
}
