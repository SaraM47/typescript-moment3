import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './temperatureconverter.component.html',
  styleUrls: ['./temperatureconverter.component.css']
})
export class TemperatureConverterComponent {
  celsius: number = 0;
  fahrenheit: number = 32;

  convertToFahrenheit() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }

  convertToCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5/9;
  }
}
