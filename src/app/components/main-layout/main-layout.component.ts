import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

interface ILayout {
	isSmall: boolean;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent  { 
  public layout$: Observable<ILayout>

  constructor(breakpointObserver: BreakpointObserver,private authService: AuthService, private router: Router) {
		this.layout$ = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
      map(({ matches }) => {
        return {
          isSmall: matches
        }
      })
    )
	}

  public logOut() {
    this.authService.logOut()
    this.router.navigate(['/login'])
  }

}
