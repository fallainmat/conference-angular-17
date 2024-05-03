import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Observable, Subscription } from "rxjs";
import { DailyImageModel } from "../../core/model/nasa.model";
import { OldNasaService } from "../../core/old/old-nasa.service";
import { OldCardComponent } from "../components/old-card/old-card.component";

@Component({
  selector: 'app-old-home',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    OldCardComponent,
    NgForOf,
    MatGridListModule
  ],
  templateUrl: './old-home.component.html',
  styleUrl: './old-home.component.scss'
})
export class OldHomeComponent implements OnInit, OnDestroy {
  dailyImages$: Observable<DailyImageModel[]> = this.nasaService.dailyImages$;
  nbdailyImages$: Observable<number> = this.nasaService.nbdailyImages$;

  sub = new Subscription();

  constructor(private nasaService: OldNasaService) {
  }

  ngOnInit() {
    var date = new Date();
    date.setMonth(date.getMonth() - 1);
    this.sub.add(this.nasaService.getListOfDailyImages(date).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
