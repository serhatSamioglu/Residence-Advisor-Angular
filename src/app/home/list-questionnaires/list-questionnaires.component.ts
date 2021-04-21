import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface User {
  apartmentID: string
  email: string
  firstname: string
  lastname: string
  role: string
}

@Component({
  selector: 'app-list-questionnaires',
  templateUrl: './list-questionnaires.component.html',
  styleUrls: ['./list-questionnaires.component.scss']
})
export class ListQuestionnairesComponent implements OnInit {

  user!: firebase.default.User;

  questionnaires: any[];


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
          
          //this.db.collection('Questionnaires/'+tempUser.apartmentID+'/2021-04-21-09-42-21').valueChanges().subscribe((questionnaires) => this.questionnaires = questionnaires);
          this.db.doc('Questionnaires/'+tempUser.apartmentID).valueChanges().subscribe((questionnaires) => this.questionnaires = questionnaires);
        });
     })
  }

}
