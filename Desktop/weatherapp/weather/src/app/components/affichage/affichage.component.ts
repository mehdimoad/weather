import { Component } from '@angular/core'
import { Weather } from '../../app.component'

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent {
  weather: Weather = {
    city: "Los Angeles",
    conditions: "Sunny",
    temperature: 70,
    icon: "",
    wind: 0, 
    humidite: 0,
    temp_max: 0,
    temp_min:0,
  }

  update(weather: Weather) {
    this.weather = weather
  }
}
