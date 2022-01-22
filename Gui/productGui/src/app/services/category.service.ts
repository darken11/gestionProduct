import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.host;

  constructor(private httpClient:HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage ;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error when ask to creat category: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessageError when ask to creat category: ${error.message}`;
    }

    return throwError(errorMessage);
  }

  getAllCategory():Observable<Category[]>{
   return this.httpClient.get<Category[]>(this.apiUrl+'/categories');
  }
  getCategory(id:number):Observable<Category>{
    return this.httpClient.get<Category>(this.apiUrl+'/categories/'+id);
  }
  deleteCategory(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl+'/categories/'+id);
  }
  updateCategory(cat:Category):Observable<Category>{
    return this.httpClient.put<Category>(this.apiUrl+'/categories/'+cat.id, cat).pipe(catchError(this.handleError));

  }
  createCategory(cat:Category):Observable<Category>{

    return this.httpClient.post<Category>(this.apiUrl+'/categories',cat).pipe(catchError(this.handleError));
  }
}
