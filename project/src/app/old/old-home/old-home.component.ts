import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsteroidModel, NasaService} from "../../core/nasa.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {OldCardComponent} from "../components/old-card/old-card.component";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-old-home',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    OldCardComponent,
    NgForOf
  ],
  templateUrl: './old-home.component.html',
  styleUrl: './old-home.component.scss'
})
export class OldHomeComponent implements OnInit, OnDestroy {
  asteroid$: Observable<AsteroidModel[]> = this.nasaService.asteroid$;
  nbAsteroid$: Observable<number> = this.nasaService.nbAsteroid$;


  sub = new Subscription();


  constructor(private nasaService: NasaService) {
  }

  ngOnInit() {
    this.sub.add(this.nasaService.getListOfAsteroids().subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
