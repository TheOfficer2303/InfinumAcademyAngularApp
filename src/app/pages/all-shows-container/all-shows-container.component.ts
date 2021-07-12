import {
	Component,
	OnInit,
	ChangeDetectionStrategy
} from '@angular/core';
import { Show } from 'src/app/services/show/show.model';



@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllShowsContainerComponent implements OnInit {

	mockData: Array < any > = [{
			title: 'The Office',
			description: 'Some text',
			average_rating: 5,
			image_url: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg'
		},
		{
			title: 'Južni Vetar',
			description: 'Some text',
			average_rating: 3,
			image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SzwV858xAjuiODRgfP2SKTjHcjQIb6os9tIC2Vu4OyrJQmqaZ3Y11pesuGFuSYB65Qc&usqp=CAU'
		},
		{
			title: 'La Casa de Papel',
			description: 'Some text',
			average_rating: 5,
			image_url: 'https://www.avoir-alire.com/IMG/arton42400.png'
		},
		{
			title: 'South Park',
			description: 'Some text',
			average_rating: 4,
			image_url: 'https://southparkstudios.mtvnimages.com/uri/mgid:arc:content:shared.southpark.us.en:17ba224c-7a62-4a92-be6c-3144b6d80a48?quality=0.7'
		}
	]

  shows: Array<Show>;
  
	ngOnInit(): void {
    this.shows = this.mockData.map((show) => {
			show = new Show(show);
			console.log(show.ratingInPercentage())
      return show;
    })
		console.log(this.shows)
  }

}
