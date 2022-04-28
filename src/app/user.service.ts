import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseUrl = 'http://localhost:8081/';
  constructor(private httpClient: HttpClient,private router:Router) { }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`+'getAllUsers');
  }

  createUser(user: User): Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl}`+'addUser', user);
  }

  getUserById(id: number): Observable<User>
  {
    return this.httpClient.get<User>(`${this.baseUrl}`+'getById/'+`${id}`);
    
  }

 updateUser(id:number,user:User):Observable<any>{
   return this.httpClient.put(`${this.baseUrl}`+'updateUser/'+`${id}`,user);
 }

  deleteUser(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}`+'delete/'+`${id}`);
  }
}
