import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

interface User {
  apartmentID: string
  email: string
  firstname: string
  lastname: string
  role: string
}//TODO: eksik parametre var ise ne oluyor kontrol et

interface Apartment {
  apartmentName: string
  apartmentQR: string
  duesAmount: string
  latitude : any
  longitude: any
}

@Component({
  selector: 'app-apartment-info',
  templateUrl: './apartment-info.component.html',
  styleUrls: ['./apartment-info.component.scss']
})
export class ApartmentInfoComponent implements OnInit {

  apartmentName: any;
  apartmentID: any;
  apartmentDues: any;
  apartmentQR: any;

  user!: firebase.default.User;

  latitude : any;
  longitude: any;

  constructor(
    private auth: AuthService,
    private db: AngularFirestore) { }

  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe( async user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          const tempUser = items as User
          //apartmanın altına aidat bilgisini yolla
          this.apartmentID = tempUser.apartmentID

          this.db.collection('Apartments').doc(this.apartmentID).valueChanges().subscribe(items => {
            const tempApartment = items as Apartment
            this.apartmentName = tempApartment.apartmentName
            this.apartmentDues = tempApartment.duesAmount
            this.apartmentQR = tempApartment.apartmentQR
            this.latitude = tempApartment.latitude
            this.longitude = tempApartment.longitude
          });
        });
     })
  }

}
