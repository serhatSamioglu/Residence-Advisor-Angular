import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CreateApartmentComponent } from './home/create-apartment/create-apartment.component';
import { SetDuesComponent } from './home/set-dues/set-dues.component';
import { CreateAnnouncementComponent } from './home/create-announcement/create-announcement.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'createApartment',
    component: CreateApartmentComponent
  },
  {
    path: 'setDues',
    component: SetDuesComponent
  },
  {
    path: 'createAnnouncement',
    component: CreateAnnouncementComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }