import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { RatingComponent } from './components/rating/rating.component';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';

@NgModule({
	declarations: [AppComponent, MainLayoutComponent, SideNavComponent, AllShowsContainerComponent, ShowListComponent, ShowListComponent, ShowCardComponent, RatingComponent, TopRatedContainerComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule, MatIconModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
