import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { AuthData } from '../interfaces/auth-data.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authData: AuthData | null = this.authService.getAuthData();

    let finalRequest: HttpRequest<unknown> = request;

    if (authData) {
      finalRequest = request.clone({
        headers: new HttpHeaders({
          'access-token': authData['access-token'],
	        client: authData.client,
	        uid: authData.uid,  
        })
      })  
    }

    return next.handle(finalRequest);
  }
}
