import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    producUrl:string='./api/products/products.json';
    constructor(private _httpClient: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this.producUrl)
        .do(data=>console.log(data))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage =''
        return Observable.throw(errorMessage);
    }
}