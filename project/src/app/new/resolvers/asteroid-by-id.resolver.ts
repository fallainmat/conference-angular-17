import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {NewNasaService} from "../../core/new/new-nasa.service";
import {AsteroidModel} from "../../core/model/nasa.model";

export const asteroidByIdResolver: ResolveFn<AsteroidModel | null> = (route, _) => {
  return inject(NewNasaService).getAsteroidById(route.params['id']);
};
