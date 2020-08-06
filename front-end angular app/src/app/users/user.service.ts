import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './userModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  storeUsers(obj: object){
    // if (localStorage.info) { // if info stored previously in local data
    //   let storedData = JSON.parse(localStorage.getItem("info")); // storedData is an array of obj
    //   storedData.push(obj);
    //   localStorage.setItem('info', JSON.stringify(storedData));
    // } else localStorage.setItem('info', JSON.stringify([obj])); // storing array for 1st time
    console.log('haan',obj);
    this.http.post(this._url, obj).toPromise().then(data=>console.log('ata',data));
  
  }

  fetchUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url);

    // return JSON.parse(localStorage.getItem("info")); // returning an array of objects
  }
}
