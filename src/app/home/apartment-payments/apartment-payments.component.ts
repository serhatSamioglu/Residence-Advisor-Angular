import { Component, OnInit } from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore} from '@angular/fire/firestore';

interface User {
  apartmentID: string
  email: string
  firstname: string
  lastname: string
  role: string
}//TODO: eksik parametre var ise ne oluyor kontrol et

interface Apartment {
  apartmentCreationDate: string,
  apartmentElectricityPayment: number,
  apartmentBudget: number,
}

@Component({
  selector: 'app-apartment-payments',
  templateUrl: './apartment-payments.component.html',
  styleUrls: ['./apartment-payments.component.scss']
})
export class ApartmentPaymentsComponent implements OnInit {

  now: Date = new Date()

  user!: firebase.default.User;

  debtElectricityPayment: number;
  apartmentBudget: number;

  apartmentElectricityPayment: number;

  constructor(public datepipe: DatePipe,
    private auth: AuthService,
    private db: AngularFirestore) { 
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit(): void {
    //this.getApartmentCreationDate()
    /*this.auth.getUserState()
      .subscribe( async user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          const tempUser = items as User
          //apartmanın altına aidat bilgisini yolla
          var apartmentID = tempUser.apartmentID

          this.db.collection('Apartments').doc(apartmentID).valueChanges().subscribe(items => {
            const tempApartment = items as Apartment
            this.apartmentElectricityPayment = tempApartment.apartmentElectricityPayment
            this.apartmentBudget = tempApartment.apartmentBudget

            var date1:any = new Date(tempApartment.apartmentCreationDate);
            var date2:any = new Date(this.datepipe.transform(this.now, 'yyyy-MM-dd'));
            var dayDifference:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

            this.debtElectricityPayment = Math.round(dayDifference/30)*this.apartmentElectricityPayment
          });
        });
     }) */
    
  }

  /*getApartmentCreationDate(){
    this.auth.getUserState()
      .subscribe( async user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          const tempUser = items as User
          //apartmanın altına aidat bilgisini yolla
          var apartmentID = tempUser.apartmentID

          this.db.collection('Apartments').doc(apartmentID).valueChanges().subscribe(items => {
            const tempApartment = items as Apartment
            this.apartmentElectricityPayment = tempApartment.apartmentElectricityPayment
            this.apartmentBudget = tempApartment.apartmentBudget
            this.calculateDayDifference(tempApartment.apartmentCreationDate)
          });
        });
     })
  }

  calculateDayDifference(apartmentCreationDate: string){
    var date1:any = new Date('2021-4-12');
    var date2:any = new Date(this.datepipe.transform(this.now, 'yyyy-MM-dd'));
    var dayDifference:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

    this.debtElectricityPayment = Math.round(dayDifference/30)*this.apartmentElectricityPayment
  }*/

  /*payApartmentElectricity(){
    console.log('basildi')
  }*/

}
