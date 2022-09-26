import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from 'src/app/Models/user';
import { Course } from 'src/app/Models/course';

@Injectable({
  providedIn: 'root'
})

/**
 * Service for the GET requests to the API
 */
export class GetService {
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

  /**
   * GET request to authenticate users by email and password  
   * @param email - the user input email 
   * @param pass - the user input password
   * @returns API response
   */
  logIn(email: string, pass: string): Observable<HttpResponse<User>> {
    return this.http.get<User>(
      this.baseURL + "users/" + email, { params: {password: pass}, observe: 'response' })
        .pipe(
          catchError(this.handleError)
      );
  }

  /**
   * GET user information based on email
   * @param email - email of the desired user
   * @returns API response
   */
  getUser(email: string): Observable<HttpResponse<User>> {
    return this.http.get<User>(
      this.baseURL + "users/" + email, { observe: 'response' })
        .pipe(
          catchError(this.handleError)
      );
  }
  
  /**
   * GET all suggested courses on the database
   * @returns API response
   */
  getCourses(): Observable<HttpResponse<Course[]>> {
    return this.http.get<Course[]>(
      this.baseURL + "courses", { observe: 'response' })
        .pipe(
          catchError(this.handleError)
      );
  }
}
