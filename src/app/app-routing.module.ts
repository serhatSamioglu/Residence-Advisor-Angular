import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CreateApartmentComponent } from './home/create-apartment/create-apartment.component';
import { SetDuesComponent } from './home/set-dues/set-dues.component';
import { CreateAnnouncementComponent } from './home/create-announcement/create-announcement.component';
import { AssignJanitorComponent } from './home/assign-janitor/assign-janitor.component';
import { ApartmentInfoComponent } from './home/apartment-info/apartment-info.component';
import { ApartmentPaymentsComponent } from './home/apartment-payments/apartment-payments.component';
import { MakeQuestionnaireComponent } from './home/make-questionnaire/make-questionnaire.component';
import { ListQuestionnairesComponent } from './home/list-questionnaires/list-questionnaires.component';


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
    path: 'assignJanitor',
    component: AssignJanitorComponent
  },
  {
    path: 'apartmentInfo',
    component: ApartmentInfoComponent
  },
  {
    path: 'apartmentPayments',
    component: ApartmentPaymentsComponent
  },
  {
    path: 'makeQuestionnaire',
    component: MakeQuestionnaireComponent
  },
  {
    path: 'listQuestionnaires',
    component: ListQuestionnairesComponent
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