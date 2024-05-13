import {AsyncPipe, JsonPipe} from "@angular/common";
import {Component, computed, input, Signal, signal, WritableSignal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DailyImageModel} from "../../core/model/nasa.model";
import {toSignal, toObservable} from "@angular/core/rxjs-interop";
import {map, Observable, tap} from "rxjs";
import {NewNasaService} from "../../core/new/new-nasa.service";


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
  testDailyImage = toSignal(this.newNasaService.getDailyImageByDate(this.newNasaService.formatISODate(new Date())));
  testDailyImage$: Observable<string | undefined>;

  constructor(private newNasaService: NewNasaService) {
    this.testDailyImage$ = toObservable(this.testDailyImage).pipe(map((test) => test?.url));
  }
}
