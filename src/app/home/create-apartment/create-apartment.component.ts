import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.scss']
})
export class CreateApartmentComponent implements OnInit {

  apartmentID: any;
  apartmentQR: any;

  user!: firebase.default.User;

  constructor(
    private auth: AuthService,
    private db: AngularFirestore ) {}

  ngOnInit(): void {
  }

  createApartment(frm: { value: { apartmentName: string}}){
    console.log(frm.value.apartmentName)
    // id ve qr yaratma
    this.apartmentID = uuid.v4()
    this.apartmentQR = uuid.v4()

    // apartman altına o apartmanın bilgileri veri tabanına yollanıyor
    this.db.doc('Apartments/'+this.apartmentID).set({
      apartmentName: frm.value.apartmentName,
      apartmentQR: this.apartmentQR,
      apartmentID: this.apartmentID, 
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

    //id ve qr kodu ekrana bas
    
    //creta butonunu kapat
  }

}
