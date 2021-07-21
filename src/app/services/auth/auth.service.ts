import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from 'src/app/pages/login-container/login-form/login-form.component';
import { UserFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public registerUser(userFormData: UserFormData): Observable<UserFormData> {
    return this.http.post<UserFormData>('https://tv-shows.infinum.academy/users', userFormData);
  }

  public loginUser(loginData: LoginData): Observable<LoginData>{
    return this.http.post<LoginData>('https://tv-shows.infinum.academy/users/sign_in', loginData);
  }
}
