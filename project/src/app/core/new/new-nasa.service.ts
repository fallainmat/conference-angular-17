import { HttpClient } from "@angular/common/http";
import {computed, Injectable, signal} from '@angular/core';
import { map, Observable } from "rxjs";
import { DailyImageModel } from "../model/nasa.model";

@Injectable({
  providedIn: 'root'
})
export class NewNasaService {
  dailyImages = signal<DailyImageModel[]>([]);
  nbdailyImages = computed(() => this.dailyImages()?.length);
  api_key = 'vyY7J1VHRVQFwV5Oe67GbGjUZ4n1RR0ik0A76tJM';
  constructor(private httpClient: HttpClient) {
  }

  getListOfDailyImages(start_date: Date): Observable<void> {
    const start_date_string: string = this.formatISODate(start_date);
    return this.httpClient.get<DailyImageModel[]>(`https://api.nasa.gov/planetary/apod?start_date=${start_date_string}&api_key=${this.api_key}`).pipe(
      map((res) => {
        this.dailyImages.set(res);
      }));
  }

  getDailyImageByDate(date: string): Observable<DailyImageModel> {
    return this.httpClient.get<DailyImageModel>(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${this.api_key}`);
  }

  private formatISODate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
