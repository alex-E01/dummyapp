import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse,} from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) {}

  getData(url: any) {

    return this.http.get(url).pipe(map((data) => data));

  }
  
  
}
