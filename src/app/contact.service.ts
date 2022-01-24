import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL = "http://springbootbackend-env.eba-drkff5tv.us-east-1.elasticbeanstalk.com/contact";
  constructor(private httpClient : HttpClient) { }
  
  getContactList():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseURL}`);
  } 

  createContact(contact:Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,contact);
  }

  getContactById(id : number): Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseURL}/${id}`);
  }

  updateContact(id : number, contact:Contact): Observable<Contact>{
    return this.httpClient.put<Contact>(`${this.baseURL}/${id}`,contact);
  }

  deleteContact(id : number): Observable<Contact>{
    return this.httpClient.delete<Contact>(`${this.baseURL}/${id}`);
  }
}
