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

  questionnaires = new Array<any>();
  
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

        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          const tempUser = items as User
          
          this.db.collection("Questionnaires"+tempUser.apartmentID)
          .get().toPromise().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                let singleData = { 
                question: doc.data()["question"] as String,
                release_date: doc.data()["release_date"] as String,
                answers: doc.data()["answers"] as [[String:String]],
                answersVoteCount: doc.data()["answersVoteCount"] as [[String:number]] } 

                this.questionnaires.push(singleData)
            });
          });
        });
     })
  }
}