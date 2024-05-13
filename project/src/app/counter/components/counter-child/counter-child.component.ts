import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-counter-child',
  standalone: true,
  imports: [],
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.scss'
})
export class CounterChildComponent {
  timer = signal(0);
  timerEffect = effect((onCleanup) => {
    const timerId = setInterval(() => {
      console.log(this.timer());
    }, 1000);

    onCleanup(() => {
      clearInterval(timerId)
    });
  }, { manualCleanup: true });

  stopSetInterval() {
    this.timerEffect.destroy()
  }
}
