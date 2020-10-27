import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  titles = ['Test Survey', 'Earth and Rotation Survey', 'Microservices Survey', 'Cats Adoption Survey'];

  surveys = [
    {title:'Test Survey', description: 'This survey is just for testing. Good luck!', 
    q:[{id:1, qq:'Select just one', a:'Yes No'}, {id:2, qq:'How you doin?', a:'Great Meh'}, {id:3, qq:'How long since?', a:'Alot 1Year 2Years'}, {id:4, qq:'Are you still looking?', a:'Yes No Confidential'}]},
    
    {title:'Cats Survey', description: 'Survey to find if you are fit to own a cat. Good luck!', 
    q:[{id:1, qq:'First time?', a:'Yes No'}, {id:2, qq:'Nervous?', a:'Sure Maybe'}, {id:3, qq:'Do you want a cat?', a:'Yep Nope'}]}
  ]

  rules = ['Check the "I understand the rules" field below.',
  'Select a survey from the right-side list.', '5 minute countdown timer.', 
  '10 single-answer questions.', 'After submitting, the data is sent to the server.',
  'If you press cancel, all the data is lost.'];

  agree: boolean;

  constructor(private router: Router, private data: DataShareService) { }

  ngOnInit() {
  }

  openSurvey(item){
    this.router.navigateByUrl(`${item.title}`)
    //console.log(item)
    this.data.sendObject(item);
  }

}
