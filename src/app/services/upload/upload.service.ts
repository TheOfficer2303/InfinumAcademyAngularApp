import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from 'src/app/enums/ApiPaths.enum';
import { IUserResponse } from 'src/app/interfaces/userResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public upload(image: File): Observable<any> {
    let form = new FormData();
    form.append('image', image);
  
    return this.http.put<IUserResponse>(`${this.baseUrl}${ApiPaths.Users}`, form , { observe: 'response' });
  }
}
