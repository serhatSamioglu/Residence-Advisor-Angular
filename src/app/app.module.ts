import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { DatePipe } from '@angular/common'

import { environment } from 'src/environments/environment';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateApartmentComponent } from './home/create-apartment/create-apartment.component';
import { QRCodeModule } from 'angularx-qrcode';
import { SetDuesComponent } from './home/set-dues/set-dues.component';
import { CreateAnnouncementComponent } from './home/create-announcement/create-announcement.component';
import { AssignJanitorComponent } from './home/assign-janitor/assign-janitor.component';
import { ApartmentInfoComponent } from './home/apartment-info/apartment-info.component';
import { ApartmentPaymentsComponent } from './home/apartment-payments/apartment-payments.component';
import { MakeQuestionnaireComponent } from './home/make-questionnaire/make-questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    CreateApartmentComponent,
    SetDuesComponent,
    CreateAnnouncementComponent,
    AssignJanitorComponent,
    ApartmentInfoComponent,
    ApartmentPaymentsComponent,
    MakeQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp( environment.firebase),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAmslh5qOhwJtKFY5H5piKIXznviPH0c1o",
      authDomain: "residence-advisor-265f1.firebaseapp.com",
      projectId: "residence-advisor-265f1",
      storageBucket: "residence-advisor-265f1.appspot.com",
      messagingSenderId: "472833501463",
      appId: "1:472833501463:web:731310aa6961fc562d2f52",
      measurementId: "G-Q4M061PVCF"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    QRCodeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }