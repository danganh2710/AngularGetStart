import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListCompnent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListCompnent },
      { path: 'product/:id',canActivate:[ProductGuardService], component: ProductDetailComponent },
    ]),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
