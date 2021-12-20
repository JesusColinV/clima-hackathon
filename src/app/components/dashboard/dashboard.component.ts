import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  url='https://cdn.iconscout.com/icon/free/png-256/weather-192-461761.png'
  mycity:string;
  loading:boolean;
  temperatura:number;
  humedad:number;
  clima:string;
  query:boolean;
  showerror:boolean;

  constructor(private _weatherservice: WeatherService) { 
    this.showerror=false;
    this.mycity='';
    this.loading=false;
    this.temperatura=0;
    this.humedad=0;
    this.clima='';
    this.query=false;
  }

  ngOnInit(): void {
  }

  getmyweather(){
    this.loading=true;
    this._weatherservice.getWeather(this.mycity).subscribe(data => {
      console.log(data);
      this.query=true;
      this.temperatura=data.main.temp - 273;
      this.humedad=data.main.humidity;
      this.clima=data.weather[0].main;

    this.loading=false;
    },error =>{
      this.loading = false;
      this.error();
    })
  }

  error(){
    this.showerror=true;
    setTimeout(()=>{
      this.showerror=false;
      this.mycity='';
      this.query=false;
    },900)
  }

}
