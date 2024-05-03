import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DailyImageModel } from "../model/nasa.model";

@Injectable({
  providedIn: 'root'
})
export class OldNasaService {
  dailyImages$ = new BehaviorSubject<DailyImageModel[]>([]);
  nbdailyImages$ = this.dailyImages$.pipe(map((dailyImages) => dailyImages.length));
  dailyImageByDate$ = new BehaviorSubject<DailyImageModel | null>(null);

  constructor(private httpClient: HttpClient) {
  }

  getListOfDailyImages(start_date: Date): Observable<void> {
    const start_date_string: string = this.formatISODate(start_date);
    return this.httpClient.get<DailyImageModel[]>(`https://api.nasa.gov/planetary/apod?start_date=${start_date_string}&api_key=vyY7J1VHRVQFwV5Oe67GbGjUZ4n1RR0ik0A76tJM`).pipe(
      map((res) => {
        this.dailyImages$.next(res)
      }));
  }

  getDailyImageByDate(date: string): Observable<void> {
    return this.httpClient.get<DailyImageModel>(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=vyY7J1VHRVQFwV5Oe67GbGjUZ4n1RR0ik0A76tJM`).pipe(
      map((res) => {
        this.dailyImageByDate$.next(res)
      })
    );
  }
  private formatISODate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
