import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})

/**
 * Service for the POST requests to the API
 */
export class PostService {
  private baseURL = "https://bases.free.beeceptor.com/"

  constructor(private http: HttpClient) { }

  /**
   * POSTS the user to the API to verify its login
   * @param user - the user object
   * @returns API response
   */
  logIn(user: User): Observable<any> {
    return this.http.post<User>(this.baseURL + "login", user);
  }
}
