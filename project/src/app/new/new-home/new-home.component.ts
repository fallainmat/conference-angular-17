import {Component, DestroyRef, inject, OnInit, Signal} from '@angular/core';
import {NewNasaService} from "../../core/new/new-nasa.service";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {OldCardComponent} from "../../old/components/old-card/old-card.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AsteroidModel} from "../../core/model/nasa.model";

@Component({
  selector: 'app-new-home',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    OldCardComponent,
    JsonPipe
  ],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss'
})
export class NewHomeComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  newNasaService = inject(NewNasaService);

  asteroids: Signal<AsteroidModel[]> = this.newNasaService.asteroids;
  nbAsteroid = this.newNasaService.nbAsteroid;

  ngOnInit() {
    this.newNasaService.getListOfAsteroids().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
