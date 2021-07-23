import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ILink } from 'src/app/interfaces/links.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  constructor(private authService: AuthService, private router: Router) { }

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

  public logOut() {
    this.authService.logOut()
    this.router.navigate(['/login'])
  }

}
