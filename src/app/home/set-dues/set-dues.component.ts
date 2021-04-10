import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface User {
  apartmentID: string
  email: string
  firstname: string
  lastname: string
  role: string
}

@Component({
  selector: 'app-set-dues',
  templateUrl: './set-dues.component.html',
  styleUrls: ['./set-dues.component.scss']
})
export class SetDuesComponent implements OnInit {

  user!: firebase.default.User;
  apartmentID: any;

  constructor(
    private auth: AuthService,
    private db: AngularFirestore) {}

  ngOnInit(): void { }

  setDues(frm: { value: { duesAmount: string}}){

    this.auth.getUserState()
      .subscribe( async user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          const tempUser = items as User
          //apartmanın altına aidat bilgisini yolla
          this.db.doc('Apartments/'+tempUser.apartmentID).update({
            duesAmount: frm.value.duesAmount
            })
        });
     })
    
  }
}
