import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchMap} from "rxjs";
import {OldNasaService} from "../../core/old/old-nasa.service";
import { AsyncPipe, JsonPipe } from "@angular/common";

@Component({
  selector: 'app-old-detail',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe
],
  templateUrl: './old-detail.component.html',
  styleUrl: './old-detail.component.scss'
})
export class OldDetailComponent implements OnInit, OnDestroy {
  dailyImageByDate$ = this.nasaService.dailyImageByDate$;
  sub = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private nasaService: OldNasaService) {

  }

  ngOnInit() {
    this.sub.add(this.activatedRoute.params.pipe(
      switchMap((params) => {
        const {date} = params;
        return this.nasaService.getDailyImageByDate(date);
      })
    ).subscribe());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
