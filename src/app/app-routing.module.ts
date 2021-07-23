import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';


const routes: Routes = [
  {
  	path: '',
  	component: MainLayoutComponent,
    children: [
      { path: '', component: AllShowsContainerComponent },
      { path: 'top-rated', component: TopRatedContainerComponent },
      { path: 'show/:id', component: ShowDetailsContainerComponent }
    ],
    canActivate: [AppGuard]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'register', component: RegistrationContainerComponent },
      { path: 'login', component: LoginContainerComponent }
    ]
  },
  {
  	path: '**',
  	redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }