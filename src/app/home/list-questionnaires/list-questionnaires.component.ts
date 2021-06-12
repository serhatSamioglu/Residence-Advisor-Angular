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
interface Anket {
  answersVoteCount: Map<String,number>
  answers: Map<String,String>
  release_date: String
  question: String
}
@Component({
  selector: 'app-list-questionnaires',
  templateUrl: './list-questionnaires.component.html',
  styleUrls: ['./list-questionnaires.component.scss']
})
export class ListQuestionnairesComponent implements OnInit {

  user!: firebase.default.User;

  questionnaires = new Array<any>();

  collectables = [
    {description: 'A very rare copy of "jQuery for Dummies"', type: 'Book'},
    {description: 'The first Letter ever written', type: 'Piece of Paper'},
    {description: 'A photograph showing nothing', type: 'Photo'},
    {description: 'A box with all sold Zunes', type: 'Garbage'}
  ];
  
  onAddToCollection(item: any) {
    let answers: String = "\n"+item.question+" ("+item.release_date+")"+"\n"+"\n"
    if(item.answers.answer1!=undefined){
      answers+="Answer1 = "+item.answers.answer1+" :Count = "+item.answersVoteCount.answer1Count+"\n"
    }if(item.answers.answer2!=undefined){
      answers+="Answer2 = "+item.answers.answer2+" :Count = "+item.answersVoteCount.answer2Count+"\n"
    }if(item.answers.answer3!=undefined){
      answers+="Answer3 = "+item.answers.answer3+" :Count = "+item.answersVoteCount.answer3Count+"\n"
    }if(item.answers.answer4!=undefined){
      answers+="Answer4 = "+item.answers.answer4+" :Count = "+item.answersVoteCount.answer4Count+"\n"
    }if(item.answers.answer5!=undefined){
      answers+="Answer5 = "+item.answers.answer5+" :Count = "+item.answersVoteCount.answer5Count+"\n"
    }
    alert(answers);
  }

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
          
          this.db.collection("Questionnaires"+tempUser.apartmentID)
          .get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                /*const tempDoc = doc.data() as Anket
                this.anketler.push(tempDoc)
                console.log(this.anketler);
                console.log("----");*/

                let singleData = { 
                question: doc.data()["question"] as String,
                release_date: doc.data()["release_date"] as String,
                answers: doc.data()["answers"] as [[String:String]],
                answersVoteCount: doc.data()["answersVoteCount"] as [[String:number]] } 

                this.questionnaires.push(singleData)
                /*console.log(doc.data());
                console.log("----");
                console.log(doc.data()["question"] as String)
                console.log("----");
                let answers = doc.data()["answers"] as [[String:any]]
                console.log(answers);
                console.log("----");
                console.log(answers["answer1"] as String)
                console.log("****");*/
            });
          });
        });
     })

    /*this.db.collection("deneme2")
    .get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const tempDoc = doc.data() as Anket
          console.log(doc.data());
          console.log("----");
          let userNotifications = doc.data()["cevaplar"] as [[String:any]]

          console.log(userNotifications["cevap1"] as String)
          console.log("*****");
      });
    });*/


  }
}