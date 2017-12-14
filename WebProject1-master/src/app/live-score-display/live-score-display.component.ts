import { Component, OnInit, } from '@angular/core';
import { Http, Response } from '@angular/http';
import {LiveScoreService} from '../live-score.service';
import {RootObject,Match} from './scores';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-live-score-display',
  templateUrl: './live-score-display.component.html',
  styleUrls: ['./live-score-display.component.css'],
  providers :[LiveScoreService]
})
export class LiveScoreDisplayComponent implements OnInit {

  matches : Match[];
  errorMessage : any;
  constructor(private _liveScoreService : LiveScoreService) { 
    
    
  }
  
  
  ngOnInit() {
    this._liveScoreService.getScores().subscribe(scores => {this.matches = scores.data.match, console.log(this.matches) }, error => this.errorMessage = <any>error ,);
  
   
    }
}
