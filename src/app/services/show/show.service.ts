import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { IShowResponse } from 'src/app/interfaces/showResponse.interface';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

 constructor(private http: HttpClient) { }

  public getShows(): Observable<Array<Show>> {
    return this.http.get<{ body: { showResponse: IShowResponse }}>('https://tv-shows.infinum.academy/shows').pipe(
      map((response) => {
        return response.body.showResponse.shows.map((rawShowData: IRawShow) => {
          return new Show(rawShowData);
        })
      })
    )
  }

  public getTopRatedShows(): Observable<Array<Show>> {
    return this.http.get<{ body: { showResponse: IShowResponse }}>('https://tv-shows.infinum.academy/shows').pipe(
      map((response) => {
        return response.body.showResponse.shows.map((rawShowData: IRawShow) => {
          return new Show(rawShowData);
        })
      })
    )
  }

  public getShowById(id: string | null): Observable<Show | null> {
    return this.http.get<{ body: { post: IRawShow }}>(`https://tv-shows.infinum.academy/shows/${id}`).pipe(
      map((response) => {
        return new Show(response.body.post)
      })
    )
  }
}