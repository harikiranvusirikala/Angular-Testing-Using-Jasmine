import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 



  constructor(private http:HttpClient) { }



getUsers():Observable<any>{
  return this.http.get<any>('assets/db.json').pipe(map((data:any) => data.users))
}

getMobileData():Observable<any>{
  return this.http.get<any>('assets/mobiles.json').pipe(map((data:any) => data.mobiles))
}



}
