import {AsyncPipe, JsonPipe} from "@angular/common";
import {Component, computed, input, Signal, signal, WritableSignal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DailyImageModel} from "../../core/model/nasa.model";


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
    AsyncPipe,
    JsonPipe,
    MatProgressSpinnerModule
],
  templateUrl: './new-detail.component.html',
  styleUrl: './new-detail.component.scss'
})
export class NewDetailComponent {
  dailyImage = input.required<DailyImageModel>();
}
