import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config} from '../../core/config/config';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  SERVICE_URL = 'localhost:3000/api/categories';
  constructor(
    private http: HttpClient
    ) { }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.SERVICE_URL)
    .pipe(retry(3), catchError(this.handleError) );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
