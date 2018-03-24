import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let id = +route.url[1].path;
    let idMap = +route.paramMap.get('id');
    console.log(id);
    console.log(idMap);
    if (id < 1 || isNaN(id)) {
      alert('invalid route');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
  constructor(private router: Router) { }
}
