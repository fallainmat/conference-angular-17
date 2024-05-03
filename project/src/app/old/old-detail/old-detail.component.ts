import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchMap} from "rxjs";
import {NasaService} from "../../core/nasa.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-old-detail',
  standalone: true,
  imports: [
    NgIf,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './old-detail.component.html',
  styleUrl: './old-detail.component.scss'
})
export class OldDetailComponent implements OnInit, OnDestroy {
  asteroidById$ = this.nasaService.asteroidById$;
  sub = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private nasaService: NasaService) {

  }

  ngOnInit() {
    this.sub.add(this.activatedRoute.params.pipe(
      switchMap((params) => {
        const {id} = params;
        return this.nasaService.getAsteroidById(id);
      })
    ).subscribe());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
