import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  SERVICE_URL = 'https://store-backbone.herokuapp.com/api/categories';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.SERVICE_URL, category, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError<Category>('Adding category'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
