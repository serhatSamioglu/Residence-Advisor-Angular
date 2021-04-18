import { Component, OnInit } from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AuthService } from '../../auth/auth.service';

interface User {
  apartmentID: string
  email: string
  firstname: string
  lastname: string
  role: string
}

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent implements OnInit {

  user!: firebase.default.User;
  apartmentID: any;
  now: Date = new Date()
  
  constructor(
    private auth: AuthService,
    private db: AngularFirestore,
    public datepipe: DatePipe) {
      setInterval(() => {
        this.now = new Date();
      }, 1);
    }

  ngOnInit(): void {
  }
  
  createAnnouncement(frm: { value: { announcement: string}}){
    this.auth.getUserState()
      .subscribe( async user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          const tempUser = items as User
          //apartmanın altına aidat bilgisini yolla
          this.apartmentID = tempUser.apartmentID

          let latest_date =this.datepipe.transform(this.now, 'yyyy-MM-dd-hh-mm-ss');
          
          this.db.collection('Announcements').doc(this.apartmentID).collection(latest_date).doc('duyuru').set({
            context: frm.value.announcement
          })
        });
     })
  }

}
