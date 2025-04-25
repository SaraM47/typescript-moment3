import { Component } from '@angular/core';
import { LengthConverterComponent } from '../../partials/lengthconverter/lengthconverter.component';
import { TemperatureConverterComponent } from '../../partials/temperatureconverter/temperatureconverter.component';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [LengthConverterComponent, TemperatureConverterComponent],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent { }
