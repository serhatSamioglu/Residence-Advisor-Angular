import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

interface User {
  apartmentID: string
  email: string
  firstname: string
  lastname: string
  role: string
}

@Component({
  selector: 'app-assign-janitor',
  templateUrl: './assign-janitor.component.html',
  styleUrls: ['./assign-janitor.component.scss']
})
export class AssignJanitorComponent implements OnInit {

  user!: firebase.default.User;
  articlesCollection: AngularFirestoreCollection<User>;

  constructor(private auth: AuthService,
    private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  assignJanitor(frm: { value: { janitorID: string}}){
    this.db.doc('Users/'+frm.value.janitorID).update({
      role: "Janitor"
    })
  }
}


