import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators'
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { IShowResponse } from 'src/app/interfaces/showResponse.interface';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

 constructor(private http: HttpClient) { }

  public getShows(): Observable<Array<Show>> {
    return this.http.get<any>('https://tv-shows.infinum.academy/shows').pipe(
      tap((response) => {
        console.log(response)
      }),
      map((response) => {
        return response.shows.map((rawShowData: IRawShow) => {
          return new Show(rawShowData);
        })
      })
    )
  }

  public getTopRatedShows(): Observable<Array<Show>> {
    return this.http.get<any>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
      tap((response) => {
        console.log(response)
      }),
      map((response) => {
        return response.shows.map((rawShowData: IRawShow) => {
          return new Show(rawShowData);
        })
      })
    )
  }

  public getShowById(id: string | null): Observable<Show | null> {
    return this.http.get<any>(`https://tv-shows.infinum.academy/shows/${id}`).pipe(
      tap((response) => {
        console.log(response)
      }),
      map((response) => {
        return new Show(response.show)
      })
    )
  }
}