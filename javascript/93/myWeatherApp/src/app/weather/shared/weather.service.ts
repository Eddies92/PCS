import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Weather } from

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(): Observable<Weather> {
    return this.httpClient.get<BlogServerProps[]>(`api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=c300b6d9f13cbe4cdfb35654b132a1ae`)
      .pipe(map(r =>
        r.map(weather => ({
          temp: weather.temp,
          description: weather.weather.description,
        }))));
  }
}
