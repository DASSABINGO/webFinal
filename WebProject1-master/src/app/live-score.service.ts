import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {RootObject} from './live-score-display/scores'
import { observable } from 'rxjs/symbol/Observable';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class LiveScoreService {

  private apiURL = "http://livescore-api.com/api-client/scores/live.json?key=eg9me9nt70S5Vich&secret=jgqx6PA676oMGoGUFPhTYFn6FfcBypTR";
  results : string[];
constructor(private _http:HttpClient) {
 }

getScores():Observable<RootObject>{
return this._http.get<RootObject>(this.apiURL).do(data=>console.log('all:  ' + JSON.stringify(data)))
.catch(this.HandleError);

}

private HandleError(err: HttpErrorResponse){
 console.log(err.message);
 return Observable.throw(err.message);
}


}
