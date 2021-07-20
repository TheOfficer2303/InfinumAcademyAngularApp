import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public registerUser(userFormData: UserFormData): Observable<UserFormData> {
    console.log(userFormData)
    return this.http.post<UserFormData>('https://tv-shows.infinum.academy/users', userFormData);
  }
}
