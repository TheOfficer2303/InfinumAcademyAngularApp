import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ILink } from 'src/app/interfaces/links.interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

 public links: Array<ILink> = [
   {
     url: '',
     title: 'All shows'
   },
   {
     url: 'top-rated',
     title: 'Top Rated'
   }
 ]


}
