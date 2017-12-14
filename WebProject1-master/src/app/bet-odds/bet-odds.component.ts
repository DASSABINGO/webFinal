import { Component, OnInit, Input } from '@angular/core';
import { ICompany } from './sites'
@Component({
  selector: 'app-bet-odds',
  templateUrl: './bet-odds.component.html',
  styleUrls: ['./bet-odds.component.css'],
  inputs: ['sites']
})
export class BetOddsComponent implements OnInit {

  constructor() { }

  // array to hold sites which his passed down from a parent component
 sites: ICompany;

  


  ngOnInit() {
  }

}
