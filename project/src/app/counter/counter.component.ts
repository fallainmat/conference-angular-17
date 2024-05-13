import {
  ChangeDetectionStrategy,
  Component,
  computed, DestroyRef,
  effect,
  inject, Injector,
  Signal,
  signal, untracked,
  WritableSignal
} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {BehaviorSubject, interval, map, Observable, repeatWhen, tap} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NewNasaService} from "../core/new/new-nasa.service";
import {CounterChildComponent} from "./components/counter-child/counter-child.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe,
    NgIf,
    CounterChildComponent
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  injector: Injector = inject(Injector);
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
/*  showCount = signal(false);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `Le count est ${this.count()}.`;
    } else {
      return 'Je ne veux plus voir ce count';
    }
  });*/
  countObs$ = new BehaviorSubject(0);
  doubleCountObs$: Observable<number> = this.countObs$.pipe(map(value => value * 2));
  countObs: number = 0;

  stopCount: boolean = false;

  displayChild = false;

  constructor() {
    this.countObs$.pipe(takeUntilDestroyed()).subscribe(value => {
      this.countObs = value
    });

    effect(() => {
      console.log(this.count());
    });
  }

  incrementValue() {
    this.count.update((value) => value + 1);
    this.countObs$.next(this.countObs + 1);

    effect(() => {
      this.injector.get(NewNasaService).getListOfDailyImages(new Date()).subscribe();
    }, { injector: this.injector });
  }

  decrementValue() {
    this.count.update((value) => value - 1);
    this.countObs$.next(this.countObs - 1);
  }

  resetValue() {
    this.count.set(0);
    this.countObs$.next(0)
  }

/*  changeConditionalDouble() {
    this.showCount.update((value) => !value);
  }*/

/*  changeStopCount() {
    this.stopCount = !this.stopCount
  }*/
  changeDisplayChild() {
    this.displayChild = !this.displayChild;
  }
}
