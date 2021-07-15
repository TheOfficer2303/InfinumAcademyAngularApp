import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators'
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private mockData: Array<IRawShow> = [{
    title: 'The Office',
    description: 'Some text',
    averageRating: 5,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
    id: '1'
  },
  {
    title: 'Južni Vetar',
    description: 'Some text',
    averageRating: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SzwV858xAjuiODRgfP2SKTjHcjQIb6os9tIC2Vu4OyrJQmqaZ3Y11pesuGFuSYB65Qc&usqp=CAU',
    id: '2'
  },
  {
    title: 'La Casa de Papel',
    description: 'Some text',
    averageRating: 5,
    imageUrl: 'https://www.avoir-alire.com/IMG/arton42400.png',
    id: '3'
  },
  {
    title: 'South Park',
    description: 'Some text',
    averageRating: 4,
    imageUrl: 'https://southparkstudios.mtvnimages.com/uri/mgid:arc:content:shared.southpark.us.en:17ba224c-7a62-4a92-be6c-3144b6d80a48?quality=0.7',
    id: '4'
  }
]

  private get shows(): Array<Show> {
    return this.mockData.map((show: IRawShow) => {
      return new Show(show)
    })
}

  getShows(): Observable<Array<Show>> {
    return of(this.shows).pipe(delay(1000 + Math.random() * 1000))
}

  getTopRatedShows(): Observable<Array<Show>> {
      return this.getShows().pipe(map((shows: Array<Show>) => shows.filter((show: Show) => show.averageRating > 4)));
  }

  // getShowById(id: string): Show | undefined {
  //   return this.shows.find((show: Show) => show.id === id) 
  // }

  getShowById(id: string): Observable<Show | null> {
    return this.getShows().pipe(map((shows: Array<Show>) => shows.find((show: Show) => show.id === id) || null));
  }
}
