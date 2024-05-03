import {computed, Injectable, signal} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AsteroidModel, BodiesModel} from "../model/nasa.model";

@Injectable({
  providedIn: 'root'
})
export class NewNasaService {
  asteroids = signal<AsteroidModel[]>([]);
  nbAsteroid = computed(() => this.asteroids()?.length);

  constructor(private httpClient: HttpClient) {
  }

  getListOfAsteroids(): Observable<void> {
    return this.httpClient.get<BodiesModel>('https://api.le-systeme-solaire.net/rest/bodies').pipe(
      map((res) => {
        this.asteroids.set(res.bodies);
      }));
  }

  getAsteroidById(id: string): Observable<AsteroidModel> {
    return this.httpClient.get<AsteroidModel>(`https://api.le-systeme-solaire.net/rest/bodies/${id}`);
  }
}
