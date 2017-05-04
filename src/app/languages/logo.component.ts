import { Component, Input } from '@angular/core';

import { Language } from "./shared/language.service";

@Component({
  selector: 'osc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() language: Language;
}
