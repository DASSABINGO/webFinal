import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {RootObject} from './bbc-display/articles'
import { observable } from 'rxjs/symbol/Observable';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class NewsService {

  private apiURL = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=230b614583ab4f0dbe02d4e2b66c267e";
  results : string[];
constructor(private _http:HttpClient) {
 }

getNews():Observable<RootObject>{
return this._http.get<RootObject>(this.apiURL).do(data=>console.log('all:  ' + JSON.stringify(data)))
.catch(this.HandleError);

}

private HandleError(err: HttpErrorResponse){
 console.log(err.message);
 return Observable.throw(err.message);
}

}
