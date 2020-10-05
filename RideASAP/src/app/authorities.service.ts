import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { from } from 'rxjs';
import {Authority} from './Authorites';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoritiesService {
  _url='http://localhost:8080/authorities/register';
  constructor(private http:HttpClient) { }
  enroll(authority: Authority)
  {
    return this.http.post<any>(this._url, authority)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }

}
