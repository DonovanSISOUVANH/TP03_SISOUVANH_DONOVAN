import { Component, OnInit } from '@angular/core';
import {Observable, of, from} from 'rxjs';
import { FirstService } from '../service/first.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  observable$ : Observable<string>;
  tabData : Array<String> = [];
  subscribe : any;

  observable2$ : Observable<Array<string>> = of (["Eau","Pain","Steak","Frites","Yaourt"])
  observable3$ : Observable<any> = null;
  
  constructor(private firstService  : FirstService) { }

  ngOnInit(): void {
    this.observable$ = new Observable(
      observer => {
        observer.next ("Data 1");
        observer.next ("Data 2");
        observer.next ("Data 3");
        observer.complete();
      }
    )

    this.observable3$ = from ([
      {"title":"Eau","prix": 4},
      {"title":"Pain","prix": 1},
      {"title":"Steak","prix": 6},
      {"title":"Frite","prix": 3},
    ]
    )
  }

  onClick(){

    if (this.subscribe){
      this.subscribe.unsubscribe();
    }

    this.subscribe = this.observable$.subscribe (
      {
      next : value => {this.tabData.push(value)},
      complete : () => {console.log ("complete")},
      error : err => {console.log(err)}
      }
    )
  }

  onClickBackEnd(){
    this.observable3$ = this.firstService.getProduits ();
  }
}
