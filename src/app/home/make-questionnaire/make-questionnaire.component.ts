import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-questionnaire',
  templateUrl: './make-questionnaire.component.html',
  styleUrls: ['./make-questionnaire.component.scss']
})
export class MakeQuestionnaireComponent implements OnInit {

  addAnswerPressed: boolean = false;

  answer1Visibility: boolean = false;
  answer2Visibility: boolean = false;
  answer3Visibility: boolean = false;
  answer4Visibility: boolean = false;
  answer5Visibility: boolean = false;
  openAnswerCount = 0

  constructor() { }

  ngOnInit(): void {

  }
  
  makeQuestionnaire(frm: { value: { question: string}}){
    if(!this.addAnswerPressed){
      //anketi veri tabanına yolla
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
