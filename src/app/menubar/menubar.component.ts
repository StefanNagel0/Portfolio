import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  activeLanguage: string = 'DE';
  activeMenuItem: string = 'Why me'; 

  setActiveLanguage(language: string) {
    this.activeLanguage = language;
  }

  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
  }
}
