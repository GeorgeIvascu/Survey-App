import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  survey:any;
  answers:[{id:0, q: '', a:[]}];
  start: boolean = false;
  selectedOption:[];

  constructor(private data: DataShareService) { }

  ngOnInit() {
    this.data.currentObj.subscribe(obj => this.survey = obj)
    //console.log(this.survey + "de la ala");
    //this.answers = this.survey.q.a.split(" ");

    this.answers = this.survey.q.map(obj => {
      var ans = {id:0, q:'', a:[]}
      ans.q = obj.qq;
      ans.a = obj.a.split(" ");
      ans.id = obj.id;
      //console.log(ans)
      return ans;
    })
  }

  startSurvey(){
    this.start = true;
    console.log(this.answers)
  }

  submit(){
    console.log(this.selectedOption)
  }

}
