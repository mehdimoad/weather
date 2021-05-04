import { Component, Output, EventEmitter } from '@angular/core';
import {DonneeService } from '../../services/donnee.service'
import { Weather } from '../../app.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()
  weather: Weather = new Weather()
  city: String = ""

  constructor(private weatherData: DonneeService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.wind = data['wind']['speed']
      this.weather.humidite = data['main']['humidity']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)
      this.weather.temp_max = Math.round((data['main']['temp_max'] - 273.15)*1.8 + 32)
      this.weather.temp_min = Math.round((data['main']['temp_min'] - 273.15)*1.8 + 32)
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])

      this.onSelection.emit(this.weather)
    })
  }
}