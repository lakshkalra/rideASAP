import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {AuthSignin} from './Authsignin';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthsignService {

  _url='http://localhost:8080/authorities/login';
  constructor(private http:HttpClient) { }
  Check(authsignin: AuthSignin)
  {
   return this.http.post<any>(this._url, authsignin)
   .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
}
