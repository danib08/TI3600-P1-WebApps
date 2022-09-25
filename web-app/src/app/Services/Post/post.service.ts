import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from 'src/app/Models/user';
import { Course } from 'src/app/Models/course';

@Injectable({
  providedIn: 'root'
})

/**
 * Service for the POST requests to the API
 */
export class PostService {
  private baseURL = "http://localhost:3000/api/"

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
   * POSTS the user to the API to register it on the database
   * @param user - the user object
   * @returns API response
   */
  signUp(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.baseURL + "users", user, { observe: 'response'})
      .pipe(catchError(this.handleError));
  }

  /**
   * POSTS the course suggestion to the API to register it on the database
   * @param course - the course object
   * @returns API response
   */
  postCourse(course: Course): Observable<HttpResponse<Course>> {
    return this.http.post<Course>(this.baseURL + "courses", course, { observe: 'response'})
      .pipe(catchError(this.handleError));
  }

}
