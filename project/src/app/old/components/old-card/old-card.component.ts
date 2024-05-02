import {Component, Input} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {AsteroidModel} from "../../../core/nasa.service";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-old-card',
  standalone: true,
  imports: [
    NgIf,
    JsonPipe,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink
  ],
  templateUrl: './old-card.component.html',
  styleUrl: './old-card.component.scss'
})
export class OldCardComponent {
  @Input({required: true}) asteroid!: AsteroidModel;
}
