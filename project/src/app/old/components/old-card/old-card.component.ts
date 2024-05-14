import { JsonPipe } from "@angular/common";
import { Component, Input } from '@angular/core';
import { MatButton } from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import { RouterLink } from "@angular/router";
import { DailyImageModel } from "../../../core/model/nasa.model";

@Component({
  selector: 'app-old-card',
  standalone: true,
  imports: [
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
  @Input({ required: true }) dailyImage!: DailyImageModel;
}
