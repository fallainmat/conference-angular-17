import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface AsteroidModel {
  id: string,
  name: string,
  englishName: string,
  isPlanet: true,
  moons: [
    {
      moon: string,
      rel: string
    }
  ],
  semimajorAxis: 0,
  perihelion: 0,
  aphelion: 0,
  eccentricity: 0,
  inclination: 0,
  mass: {
    massValue: 0,
    massExponent: 0
  },
}

interface BodiesModel {
  bodies: AsteroidModel[];
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  asteroid$ = new BehaviorSubject<AsteroidModel[]>([]);
  nbAsteroid$ = new BehaviorSubject<number>(0);
  asteroidById$ = new BehaviorSubject<AsteroidModel | null>(null);

  constructor(private httpClient: HttpClient) {
  }

  getListOfAsteroids(): Observable<void> {
    return this.httpClient.get<BodiesModel>('https://api.le-systeme-solaire.net/rest/bodies').pipe(
      map((res) => {
        this.asteroid$.next(res.bodies)
        this.nbAsteroid$.next(res.bodies.length)
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
