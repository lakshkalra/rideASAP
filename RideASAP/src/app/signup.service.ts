import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  _url='http://localhost:8080/user/register';
  constructor(private http:HttpClient) { }
  enroll(user: User)
  {
    return this.http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
  
  }
