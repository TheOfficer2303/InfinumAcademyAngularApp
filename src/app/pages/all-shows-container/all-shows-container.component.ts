import {
	Component,
	OnInit,
	ChangeDetectionStrategy
} from '@angular/core';
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';



@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllShowsContainerComponent implements OnInit {

	// mockData: Array < any > = [{
	// 		title: 'The Office',
	// 		description: 'Some text',
	// 		average_rating: 5,
	// 		image_url: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg'
	// 	},
	// 	{
	// 		title: 'Južni Vetar',
	// 		description: 'Some text',
	// 		average_rating: 3,
	// 		image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SzwV858xAjuiODRgfP2SKTjHcjQIb6os9tIC2Vu4OyrJQmqaZ3Y11pesuGFuSYB65Qc&usqp=CAU'
	// 	},
	// 	{
	// 		title: 'La Casa de Papel',
	// 		description: 'Some text',
	// 		average_rating: 5,
	// 		image_url: 'https://www.avoir-alire.com/IMG/arton42400.png'
	// 	},
	// 	{
	// 		title: 'South Park',
	// 		description: 'Some text',
	// 		average_rating: 4,
	// 		image_url: 'https://southparkstudios.mtvnimages.com/uri/mgid:arc:content:shared.southpark.us.en:17ba224c-7a62-4a92-be6c-3144b6d80a48?quality=0.7'
	// 	}
	// ]

	constructor(private showService: ShowService) {}
  shows: Array<Show>;
  
	ngOnInit() {
    this.shows = this.showService.getShows();
		
  }

}
