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
  selector: 'app-make-questionnaire',
  templateUrl: './make-questionnaire.component.html',
  styleUrls: ['./make-questionnaire.component.scss']
})
export class MakeQuestionnaireComponent implements OnInit {

  user!: firebase.default.User;
  apartmentID: any;
  now: Date = new Date()

  addAnswerPressed: boolean = false;

  answer1Visibility: boolean = false;
  answer2Visibility: boolean = false;
  answer3Visibility: boolean = false;
  answer4Visibility: boolean = false;
  answer5Visibility: boolean = false;
  openAnswerCount = 0

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
  
  makeQuestionnaire(frm: { value: { question: string, answer1: string, answer2: string, answer3: string, answer4: string, answer5: string}}){
    var answers
    var answersVoteCount
    if(frm.value.answer5!=undefined && frm.value.answer5!=''){
      answers={"answer1": frm.value.answer1,"answer2": frm.value.answer2,
      "answer3": frm.value.answer3,"answer4": frm.value.answer4,"answer5": frm.value.answer5}
      answersVoteCount={"answer1Count": 0,"answer2Count": 0,
      "answer3Count": 0,"answer4Count": 0,"answer5Count": 0}
    }else if(frm.value.answer4!=undefined && frm.value.answer4!=''){
      answers={"answer1": frm.value.answer1,"answer2": frm.value.answer2,
      "answer3": frm.value.answer3,"answer4": frm.value.answer4}
      answersVoteCount={"answer1Count": 0,"answer2Count": 0,
      "answer3Count": 0,"answer4Count": 0}
    }else if(frm.value.answer3!=undefined && frm.value.answer3!=''){
      answers={"answer1": frm.value.answer1,"answer2": frm.value.answer2,
      "answer3": frm.value.answer3}
      answersVoteCount={"answer1Count": 0,"answer2Count": 0,
      "answer3Count": 0}
    }else if(frm.value.answer2!=undefined && frm.value.answer2!=''){
      answers={"answer1": frm.value.answer1,"answer2": frm.value.answer2}  
      answersVoteCount={"answer1Count": 0,"answer2Count": 0} 
    }else if(frm.value.answer1!=undefined && frm.value.answer1!=''){
      answers={"answer1": frm.value.answer1}
      answersVoteCount={"answer1Count": 0}
    }
    
    if(!this.addAnswerPressed){
      //anketi veri tabanına yolla
      this.auth.getUserState()
      .subscribe( async user => {
        this.user = user!;

        //yönetici altına yaratılan apartmanın id si yollanıyor  
        //TODO: uid bilgisi geldikten sonra bu işlemin yapılması lazım
        this.db.collection('Users').doc(this.user.uid).valueChanges().subscribe(items => {
          const tempUser = items as User
          //apartmanın altına aidat bilgisini yolla
          this.apartmentID = tempUser.apartmentID

          let release_date =this.datepipe.transform(this.now, 'yyyy-MM-dd-hh-mm-ss');
          
          this.db.collection('Questionnaires'+this.apartmentID).doc(release_date).set({
            question: frm.value.question,
            answers,
            answersVoteCount,
            release_date
          })
        });
     })

    }else{
      this.addAnswerPressed=false
    }
  }

  addAnswer(){
    this.addAnswerPressed = true
    this.openAnswerCount++
    if(this.openAnswerCount==1){
      this.answer1Visibility = true
    }else if(this.openAnswerCount==2){
      this.answer2Visibility = true
    }else if(this.openAnswerCount==3){
      this.answer3Visibility = true
    }else if(this.openAnswerCount==4){
      this.answer4Visibility = true
    }else if(this.openAnswerCount==5){
      this.answer5Visibility = true
    }
  }

}
