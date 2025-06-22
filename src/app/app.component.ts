import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from "./atf/atf.component";
import { MenubarComponent } from "./menubar/menubar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AtfComponent, MenubarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
