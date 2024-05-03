import {Component, input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {AsteroidModel} from "../../core/model/nasa.model";

@Component({
  selector: 'app-new-detail',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgIf,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './new-detail.component.html',
  styleUrl: './new-detail.component.scss'
})
export class NewDetailComponent {
  asteroid = input.required<AsteroidModel>();
}
