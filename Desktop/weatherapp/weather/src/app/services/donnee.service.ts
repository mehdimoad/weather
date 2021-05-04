import {Injectable} from '@angular/core' 
import {HttpClient} from '@angular/common/http' 

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather' 
let apiKey: String = "d1f1192c61bff34c70979e832a2dbab3" 

@Injectable ({ 
  providedIn: 'root' 
}) 
export class DonneeService { 

  constructor (private http: HttpClient) {} 

  load (city: String) { 
    return this.http.get (serviceUrl + '?q=' + city + '&APPID=' + apiKey) 
  } 

  getIconUrl (icon: String) { 
    return 'http://openweathermap.org/img/w/' + icon + ".png" 
  } 
}