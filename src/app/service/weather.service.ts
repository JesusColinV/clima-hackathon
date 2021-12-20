import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  api='https://api.openweathermap.org/data/2.5/weather?q='
  key='&appid=2232c6964026b41bc560e3fd462697ed'

  constructor(private http:HttpClient) { }

  getWeather(ciudad:string):Observable<any>{
    const URL = this.api+ciudad+this.key;
    return this.http.get(URL);
  }
}
