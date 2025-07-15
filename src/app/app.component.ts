import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AtfComponent } from "./atf/atf.component";
import { MenubarComponent } from "./menubar/menubar.component";
import { WhymeComponent } from "./whyme/whyme.component";
import { MyskillsComponent } from "./myskills/myskills.component";
import { ProjectsComponent } from './projects/projects.component';
import { FeedbackComponent } from "./feedback/feedback.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AtfComponent, MenubarComponent, WhymeComponent, MyskillsComponent, ProjectsComponent, FeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
