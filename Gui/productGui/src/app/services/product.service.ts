import { Product } from '../model/product';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiProductUrl = environment.host;
  constructor(public http:HttpClient) {

   }
  handleError(error: HttpErrorResponse) {
    let errorMessage ;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error when ask to creat product: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessageError when ask to creat product: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getProducts(): Observable<any[]> {

    return this.http.get<Product[]>(this.apiProductUrl + '/products').pipe(catchError(this.handleError));
  }
  deleteProduct(product:Product):Observable<void>{
    return this.http.delete<void>(this.apiProductUrl+'/product/'+product.id).pipe(catchError(this.handleError))
  }

  updateProduct(prod:Product):Observable<Product>{
    return this.http.put<Product>(this.apiProductUrl+"/product/"+prod.id,prod);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(this.apiProductUrl+"/product/"+id);
  }

  searchProductByKeyword(keyword:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.apiProductUrl+"/search/products?mc="+keyword);
  }

  saveProduct(product:Product):Observable<Product>{

    return this.http.post<Product>(this.apiProductUrl+"/products/",product);
  }
}
