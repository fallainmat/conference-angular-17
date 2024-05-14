import {Component, input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {DailyImageModel} from "../../../core/model/nasa.model";
import {AsyncPipe, JsonPipe} from "@angular/common";

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
    RouterLink,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.scss'
})
export class NewCardComponent {
  dailyImage = input.required<DailyImageModel>()
}
