import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthData } from 'src/app/interfaces/auth-data.interface';
import { IUserResponse } from 'src/app/interfaces/userResponse.interface';
import { LoginData } from 'src/app/pages/login-container/login-form/login-form.component';
import { UserFormData } from 'src/app/pages/registration-container/components/registration-form/registration-form.component';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';

export enum ApiPaths {
  Register = '/users',
  Login = '/users/sign_in',
  Shows = '/shows',
  TopRatedShows = '/shows/top_rated'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authDataKey = 'authData';
  private baseURL = environment.baseUrl;

  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(this.getAuthData()));
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();
  
  constructor(private http: HttpClient, private storageService: StorageService) { }

  public registerUser(userFormData: UserFormData): Observable<any> {
    return this.authenticate(userFormData, ApiPaths.Register);
  }

  public logIn(loginData: LoginData): Observable<any> {
    return this.authenticate(loginData, ApiPaths.Login);
  }

  public authenticate(data: LoginData | UserFormData, path: string): Observable<any> {
    return this.http.post<IUserResponse>(this.baseURL + path, data, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        console.log(response)
        const accessToken: string | null = response.headers.get('access-token') 
        const client: string | null = response.headers.get('client') 
        const uid: string | null = response.headers.get('uid') 

        if (client && accessToken && uid) {
          this.saveAuthData({ 'access-token': accessToken, client, uid });
          this._isLoggedIn$.next(true);
        }
      })
    );
  }

  public logOut() {
    this.storageService.delete(this.authDataKey);
    this._isLoggedIn$.next(false);
  }

  public getAuthData(): AuthData | null {
    return this.storageService.get(this.authDataKey)
  }

  public saveAuthData(authData: AuthData): void {
    this.storageService.add(this.authDataKey, authData)
  }
}
