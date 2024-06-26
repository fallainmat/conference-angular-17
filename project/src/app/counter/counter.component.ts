import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Injector,
  OnInit,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {BehaviorSubject, map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CounterChildComponent} from "./components/counter-child/counter-child.component";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NewNasaService} from "../core/new/new-nasa.service";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe,
    CounterChildComponent,
    MatAnchor,
    MatIcon,
    MatToolbar,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);


  showCount = signal(false);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `Le count est ${this.count()}.`;
    } else {
      return 'Je ne vois plus ce count';
    }
  });

  stopCount: boolean = false;
  injector: Injector = inject(Injector);
  displayChild = false;

  countObs$ = new BehaviorSubject(0);
  doubleCountObs$: Observable<number> = this.countObs$.pipe(map(value => value * 2));
  countObs: number = 0;


  comptutedActivated = false;
  effectActivated = false;

  constructor() {
    this.countObs$.pipe(takeUntilDestroyed()).subscribe(value => {
      this.countObs = value
    });

  }

  ngOnInit() {
    effect(() => {
      console.log(this.count);
      this.injector.get(NewNasaService).getDailyImageByDate('2021-10-10').subscribe(), {allowSignalWrites: true}
      ;
    }, {injector: this.injector});
  }

  incrementValue() {
    this.count.update((value) => value + 1);
    this.countObs$.next(this.countObs + 1);
  }

  decrementValue() {
    this.count.update((value) => value - 1);
    this.countObs$.next(this.countObs - 1);
  }

  resetValue() {
    this.count.set(0);
    this.countObs$.next(0)
  }

  changeConditionalDouble() {
    this.showCount.update((value) => !value);
  }

  changeStopCount() {
    this.stopCount = !this.stopCount
  }
  changeDisplayChild() {
    this.displayChild = !this.displayChild;
  }
}
