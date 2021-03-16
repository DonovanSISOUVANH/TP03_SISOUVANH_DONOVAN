import { Component, OnInit } from '@angular/core';
import {Observable, of, from} from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  observable$ : Observable<string>;
  tabData : Array<String> =[];
  subscribe : any;

  observable2$ : Observable<Array<string>> = of (["Eau","Pain","Steak","Frites","Yaourt"])

  constructor() { }

  ngOnInit(): void {
    this.observable$ = new Observable(
      observer => {
        observer.next ("Data 1");
        observer.next ("Data 2");
        observer.next ("Data 3");
        observer.complete();
      }
    )
  }

  onClick(){

    if (this.subscribe){
      this.subscribe.unsubscribe();
    }

    this.subscribe = this.observable2$.subscribe (
      {
      next : value => {this.tabData.push(value)},
      complete : () => {console.log ("complete")},
      error : err => {console.log(err)}
      }
    )
  }
}
