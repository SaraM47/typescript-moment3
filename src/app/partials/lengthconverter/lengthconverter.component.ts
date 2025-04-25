import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-length-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lengthconverter.component.html',
  styleUrls: ['./lengthconverter.component.css']
})
export class LengthConverterComponent {
  meters: number = 0;
  feet: number = 0;

  convertToFeet() {
    this.feet = this.meters * 3.28084;
  }

  convertToMeters() {
    this.meters = this.feet / 3.28084;
  }
}
