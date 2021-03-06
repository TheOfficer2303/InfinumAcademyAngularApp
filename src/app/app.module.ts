import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { ShowDetailComponent } from './pages/show-details-container/components/show-detail/show-detail.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { RegistrationFormComponent } from './pages/registration-container/components/registration-form/registration-form.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/login-form/login-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ReviewFormComponent } from './pages/show-details-container/components/review-form/review-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { LogoComponent } from './components/logo/logo.component';
import {MatMenuModule} from '@angular/material/menu';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DragndropDirective } from './directives/dragndrop.directive';

@NgModule({
	declarations: [AppComponent, MainLayoutComponent, SideNavComponent, AllShowsContainerComponent, ShowListComponent, ShowListComponent, ShowCardComponent, RatingComponent, TopRatedContainerComponent, ShowDetailsContainerComponent, ShowDetailComponent, ErrorMessageComponent, ReviewListComponent, ReviewComponent, RegistrationContainerComponent, RegistrationFormComponent, AuthLayoutComponent, LoginContainerComponent, LoginFormComponent, ReviewFormComponent, LogoComponent, MyProfileComponent, DragndropDirective],
	imports: [MatMenuModule, MatFormFieldModule, HttpClientModule, BrowserModule, MatRadioModule, MatButtonModule,MatSnackBarModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule, MatIconModule, MatProgressBarModule, AppRoutingModule, MatInputModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthErrorInterceptor,
		multi: true,
		}],
	bootstrap: [AppComponent],
})
export class AppModule {}