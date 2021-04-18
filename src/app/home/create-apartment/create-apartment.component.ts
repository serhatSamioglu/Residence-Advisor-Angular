import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {DatePipe, formatDate} from '@angular/common';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.scss']
})
export class CreateApartmentComponent implements OnInit {

  apartmentID: any;
  apartmentQR: any;
  apartmentElectricityPayment: any;

  user!: firebase.default.User;

  now: Date = new Date()

  constructor(
    private auth: AuthService,
    private db: AngularFirestore,
    public datepipe: DatePipe ) {
      setInterval(() => {
        this.now = new Date();
      }, 1);
    }

  ngOnInit(): void {
  }

  createApartment(frm: { value: { apartmentName: string}}){
    // id ve qr yaratma
    this.apartmentID = uuid.v4()
    this.apartmentQR = uuid.v4()
    this.apartmentElectricityPayment = Math.floor(Math.random() * 100) + 50;//50-150 arası bir fature degeri

    // apartman altına o apartmanın bilgileri veri tabanına yollanıyor
    this.db.doc('Apartments/'+this.apartmentID).set({
      apartmentName: frm.value.apartmentName,
      apartmentQR: this.apartmentQR,
      apartmentID: this.apartmentID, 
      apartmentElectricityPayment: this.apartmentElectricityPayment,
      apartmentBudget: 0,
      apartmentCreationDate: this.datepipe.transform(this.now, 'yyyy-MM-dd'),
    })

    //giriş yapmış kullanıcı değişkene atılıyor
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.doc('Users/'+this.user.uid).update({
        apartmentID: this.apartmentID
        })
      })
          
    //creta butonunu kapat
  }

}
