import { NgModule } from '@angular/core';
import { ProductListCompnent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { ShareModule } from '../shared/share.module';
import { ProductRoutingModule } from './/product-routing.module';

@NgModule({
  imports: [
    ShareModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListCompnent,
    ProductDetailComponent
  ],
  providers: [
    ProductService, 
    ProductGuardService]
})
export class ProductModule { }
