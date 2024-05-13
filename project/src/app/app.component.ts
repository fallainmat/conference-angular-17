import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatTabGroup, MatTabNav} from "@angular/material/tabs";
import {OldHomeComponent} from "./old/old-home/old-home.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabGroup, OldHomeComponent, MatTabNav, RouterLink, MatToolbar, RouterLinkActive, MatAnchor, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'change de logo mais pas que !';
}
