import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthData } from 'src/app/interfaces/auth-data.interface';
import { IUserResponse } from 'src/app/interfaces/userResponse.interface';
import { LoginData } from 'src/app/pages/login-container/login-form/login-form.component';
import { UserFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authDataKey = 'authData';

  constructor(private http: HttpClient, private storage: StorageService) { }

  public registerUser(userFormData: UserFormData): Observable<any> {
    return this.http.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users', userFormData, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        console.log(response)
        const accessToken: string | null = response.headers.get('access-token') 
        const client: string | null = response.headers.get('client') 
        const uid: string | null = response.headers.get('uid') 

        // console.log(response.headers)
        if (client && accessToken && uid) {
          this.saveAuthData({ 'access-token': accessToken, client, uid });
        }
      })
    );
  }

  public logIn(loginData: LoginData): Observable<any>{
    return this.http.post<IUserResponse>('https://tv-shows.infinum.academy/users/sign_in', loginData, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        console.log(response)
        const accessToken: string | null = response.headers.get('access-token') 
        const client: string | null = response.headers.get('client') 
        const uid: string | null = response.headers.get('uid') 

        // console.log(response.headers)
        if (client && accessToken && uid) {
          this.saveAuthData({ 'access-token': accessToken, client, uid });
        }
      })
    );
  }

  public getAuthData(): AuthData | null {
    return this.storage.get(this.authDataKey)
  }

  public saveAuthData(authData: AuthData): void {
    this.storage.add(this.authDataKey, authData)
  }
}
