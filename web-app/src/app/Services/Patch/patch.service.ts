import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Service for the PATCH requests to the API
 */
export class PatchService {
  private baseURL = "https://sleepy-beach-86002.herokuapp.com/api/"

  constructor(private http: HttpClient) { }

  /**
   * Handles errors thrown by the backend API
   * @param error - an HttpErrorRespose object
   * @returns an ErrorObservable with an user-friendly message
   */
   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

   //TODO: add patch method

}
