import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactInfo } from '../contact/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    configUrl= '/api/contact';
    headers = new HttpHeaders({'Content-Type': 'application/json'});
    
    constructor(private http: HttpClient) {
    }

    postData(parameter: ContactInfo) {
        return this.http.post(this.configUrl, parameter);
    }

}
