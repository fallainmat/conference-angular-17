import { inject } from "@angular/core";
import { ResolveFn } from '@angular/router';
import { DailyImageModel } from "../../core/model/nasa.model";
import { NewNasaService } from "../../core/new/new-nasa.service";

export const dailyImageDate: ResolveFn<DailyImageModel | null> = (route, _) => {
  return inject(NewNasaService).getDailyImageByDate(route.params['date']);
};
