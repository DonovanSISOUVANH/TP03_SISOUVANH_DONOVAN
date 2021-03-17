import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirstService {


  constructor(private httpClient : HttpClient) { 

  }

  URL : string = ""
  public getProduits () : Observable<any> {
    return this.httpClient.get<any> (environment.baseUrl)
  }
}
