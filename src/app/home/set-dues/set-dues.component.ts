import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-set-dues',
  templateUrl: './set-dues.component.html',
  styleUrls: ['./set-dues.component.scss']
})
export class SetDuesComponent implements OnInit {

  user!: firebase.default.User;
  apartmentID: any;
  hashmap!: Map<String, String>;

  constructor(
    private auth: AuthService,
    private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  setDues(frm: { value: { duesAmount: string}}){

    this.auth.getUserState()
      .subscribe( user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          console.log(items)
          //apartman id yi al aidteı düzenle
        });
        
    })
  }
}
