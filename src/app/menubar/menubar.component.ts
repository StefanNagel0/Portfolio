import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  activeLanguage: string = 'DE'; // Standard-Sprache
  activeMenuItem: string = 'Why me'; // Standard aktives Menu-Item

  setActiveLanguage(language: string) {
    this.activeLanguage = language;
  }

  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
  }
}
