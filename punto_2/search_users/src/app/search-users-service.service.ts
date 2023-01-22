import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users} from './classes/users'

import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchUsersServiceService {

  private apiUrl = environment.apihithub

  constructor(private http: HttpClient) {}

  getUsers(username: string): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiUrl}/${username}`);
  }
}
