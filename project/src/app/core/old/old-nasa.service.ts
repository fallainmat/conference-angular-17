import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AsteroidModel, BodiesModel} from "../model/nasa.model";

@Injectable({
  providedIn: 'root'
})
export class OldNasaService {
  asteroid$ = new BehaviorSubject<AsteroidModel[]>([]);
  nbAsteroid$ = this.asteroid$.pipe(map((asteroids) => asteroids.length));
  asteroidById$ = new BehaviorSubject<AsteroidModel | null>(null);

  constructor(private httpClient: HttpClient) {
  }

  getListOfAsteroids(): Observable<void> {
    return this.httpClient.get<BodiesModel>('https://api.le-systeme-solaire.net/rest/bodies').pipe(
      map((res) => {
        this.asteroid$.next(res.bodies)
      }));
  }

  getAsteroidById(id: string): Observable<void> {
    return this.httpClient.get<AsteroidModel>(`https://api.le-systeme-solaire.net/rest/bodies/${id}`).pipe(
      map((res) => {
        this.asteroidById$.next(res)
      })
    );
  }
}
