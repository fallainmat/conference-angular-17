import {Component, input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AsteroidModel} from "../../../core/model/nasa.model";

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgIf,
    RouterLink
  ],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.scss'
})
export class NewCardComponent {
  asteroid = input.required<AsteroidModel>();
}
