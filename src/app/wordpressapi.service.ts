import { Injectable } from '@angular/core';
import { HttpClient ,} from '@angular/common/http';
import { map } from 'rxjs';


let myapi = "http://localhost/wordpress/wp-json/mobileapi/";

let loginUrl = "http://localhost/wordpress/wp-json/jwt-auth/v1/token";

@Injectable({
  providedIn: 'root'
})
export class WordpressapiService {

  constructor(private httpClient:HttpClient) { }

getdata(endpoint:any){

 return this.httpClient.get(myapi + endpoint).pipe(map((data) =>  data));

}
senddata(endpoint:any,data:any){

  return this.httpClient.post(myapi + endpoint, data).pipe(map((data) =>  data));

}


}
