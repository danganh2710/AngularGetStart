import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Observable } from "rxjs/Observable";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListCompnent implements OnInit {
    pageTitle: string = 'Angular 5!';
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 5;
    listFilter: IProduct[];
    products: IProduct[];

    constructor(private _productService: ProductService) {

    }

    private _filterBy: string;

    get filterBy(): string {
        return this._filterBy;
    }

    set filterBy(value: string) {
        this._filterBy = value;
        if (this.filterBy) {
            this.listFilter = this.products.filter(p => p.productName.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) !== -1);
        }
        else {
            this.listFilter = this.products;
        }

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => {
                    this.products = products;
                    this.listFilter = products;
                }
            );
    };

    onNotify(value) {
        console.log(value);
    }
}