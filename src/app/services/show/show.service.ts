import { Injectable } from '@angular/core';
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private mockData: Array < any > = [{
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

  public getShows(): Array<Show> {
      return this.mockData.map((show: IRawShow) => {
        return new Show(show)
      })
  }

  public getTopRatedShows(): Array<Show> {
      return this.getShows().filter(show => show.averageRating > 4)
  }

  public getShowById(id: string): Show | undefined {
    return this.getShows().find((show: Show) => show.id === id) 
  }
}
