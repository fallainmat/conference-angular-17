import {Component, input, model} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [MatButton],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.scss'
})
export class InputChildComponent {
  checked = model(false);
  disabled = input(false);

  toggle() {
    this.checked.set(!this.checked());
  }
}
