import {Component, signal} from '@angular/core';
import {CounterChildComponent} from "../counter/components/counter-child/counter-child.component";
import {InputChildComponent} from "./components/input-child/input-child.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CounterChildComponent,
    InputChildComponent,
    MatButton
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  checked = signal(false);
  disabled = signal(false);
}
