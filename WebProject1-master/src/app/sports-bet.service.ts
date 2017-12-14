import { observable } from 'rxjs/symbol/Observable';
import { ITeams } from './bet-row/teams';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { RootObject } from './bet-row/bets';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SportsBetService {

    private apiURL = "http://localhost:3000/db";
    results : string[];
  constructor(private _http:HttpClient) {
   }

  getEvents():Observable<RootObject>{
 return this._http.get<RootObject>(this.apiURL).do(data=>console.log('all:  ' + JSON.stringify(data)))
 .catch(this.HandleError);

  }

private HandleError(err: HttpErrorResponse){
   console.log(err.message);
   return Observable.throw(err.message);
  }

}
