import { Injectable } from '@angular/core';
import {Location} from './travelloc';
import { HttpClient , HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Book } from './book';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TravelService {
_url_="http://localhost:8080/user/mybooking";
_url='http://localhost:8080/user/result';
url_='http://localhost:8080/user/booking';
jrny: any;
authToken: any;
email="";
total_price="";
source="";
destination="";
hashqr="";
arrtime="";
name="";
reachTime="";
distance="";
tottime="";

  constructor(private http: HttpClient) { }
  
  bookinfo(book: Book)
  {
   return this.http.post<any>(this.url_, book)
   .pipe(catchError(this.errorHandle))
  }
  errorHandle(error: HttpErrorResponse)
  {
    return throwError(error);
  }

 journey(book: Book)
  {
   return this.http.post<any>(this._url_, book)
   .pipe(catchError(this.errorHandle))
  }  

  loc(location: Location)
  {
     let headers = new HttpHeaders;
     this.loadToken();
    headers.append('Authorization',this.authToken); 
    headers.append('Content-Type','application/json');
    return this.http.post<any>(this._url, location);
  }
  loadToken()
  {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }
}
