import { Component, OnInit, } from '@angular/core';
import { Http, Response } from '@angular/http';
import {NewsService} from '../news.service';
import {RootObject,Article} from './articles';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bbc-display',
  templateUrl: './bbc-display.component.html',
  styleUrls: ['./bbc-display.component.css'],
  providers:[NewsService]
})
export class BbcDisplayComponent implements OnInit {

  // Array to hold data returned from the api call
  News : Article[];
  errorMessage : any;
  constructor(private _newsService : NewsService) { 
    
    
  }
  
  
  ngOnInit() {
    // Code that links to the news service and calls the get news method that returns data from news api and adds it to the news array wich is then used to display data in the html
    this._newsService.getNews().subscribe(News => {this.News = News.articles, console.log(this.News) }, error => this.errorMessage = <any>error ,);
  
   
    }

}
