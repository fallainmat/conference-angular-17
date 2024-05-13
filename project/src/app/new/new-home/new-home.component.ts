import { AsyncPipe, JsonPipe, NgForOf, NgIf } from "@angular/common";
import { Component, DestroyRef, inject, OnInit, Signal } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DailyImageModel } from "../../core/model/nasa.model";
import { NewNasaService } from "../../core/new/new-nasa.service";
import { OldCardComponent } from "../../old/components/old-card/old-card.component";
import { NewCardComponent } from "../components/new-card/new-card.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    selector: 'app-new-home',
    standalone: true,
    templateUrl: './new-home.component.html',
    styleUrl: './new-home.component.scss',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        OldCardComponent,
        JsonPipe,
        NewCardComponent,
        MatProgressSpinnerModule,
        MatGridListModule
    ]
})
export class NewHomeComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  newNasaService = inject(NewNasaService);

  dailyImages: Signal<DailyImageModel[]> = this.newNasaService.dailyImages;
  nbImage = this.newNasaService.nbdailyImages;

  ngOnInit() {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    this.newNasaService.getListOfDailyImages(date).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
