import { observable } from 'rxjs/symbol/observable';
import { SportsBetService } from '../sports-bet.service';
import { BetOddsComponent } from '../bet-odds/bet-odds.component';
import { Component, OnInit } from '@angular/core';
import { ITeams } from '../bet-row/teams'
import {ICompany} from '../bet-odds/sites'
import {   RootObject, Game } from '../bet-row/bets';
import { Http, Response, } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-bet-row',
  templateUrl: './bet-row.component.html',
  styleUrls: ['./bet-row.component.css'],
  providers:[SportsBetService]
})
export class BetRowComponent implements OnInit {

 events : Game[];
 errorMessage :string;
 apiUrl : 'https://api.the-odds-api.com/v2/odds/?apiKey=5ab3e77933c9548bbf89f62de3847c31&sport=NBA&region=uk';

  

 
/* company: ICompany[] =[ {
  "companyName": 'Ladbrokes',
  "oddsTeam1": 1.1,
  "oddsTeam2": 1.9
},
  {
    "companyName": 'Paddy Power',
    "oddsTeam1": 1.1,
    "oddsTeam2": 1.9
  }]
  team: ITeams[] =
  [
    
    {
      "team1": 'Everton',
      "team2": 'Liverpool',
      "startTime":'3:00pm',
      "sites" : [ {
        "companyName": 'Ladbrokes',
        "oddsTeam1": 1.1,
        "oddsTeam2": 1.9
      },
        {
          "companyName": 'Paddy Power',
          "oddsTeam1": 1.1,
          "oddsTeam2": 1.9
        }]
      
    },
    {
      "team1": 'Arsenal',
      "team2": 'Tottenham',
      "startTime":'5:00pm',
      "sites" : [ {
        "companyName": 'Ladbrokes',
        "oddsTeam1": 1.0,
        "oddsTeam2": 2.5
      },
        {
          "companyName": 'Paddy Power',
          "oddsTeam1": .9,
          "oddsTeam2": 1.9
        }]
      
    }
  ];*/

    constructor(private _SportsBetService : SportsBetService,private Http:HttpClient){
     // this.getEvents();
      //this.getData();
     // console.log("here   " + this.events)
     //console.log(this.events)
     
   
    }
    getData(){
      return this.Http.get('https://api.the-odds-api.com/v2/odds/?apiKey=5ab3e77933c9548bbf89f62de3847c31&sport=NBA&region=uk')
      .map((res: Response) =>res.json());


    }
    getEvents(){
      this.getData().subscribe(data => {console.log(data);
      this.events =data})
    }


   
  ngOnInit() {
    


  this._SportsBetService.getEvents().subscribe(events => {this.events = events.games, console.log(events) }, error => this.errorMessage = <any>error);

  //this.Http.get<RootObject>('https://api.the-odds-api.com/v2/odds/?apiKey=b92c351a74a8322855270141761d6e5a&sport=NBA&region=uk').subscribe(data => {
  //  console.log(data), this.events = data , console.log(this.events);
  //});
  
  // this.events = this._SportsBetService.getProducts();

  }
  

}
