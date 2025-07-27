import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MenubarComponent {
  activeLanguage: string = 'DE';
  activeMenuItem: string = 'Why me'; 

  setActiveLanguage(language: string) {
    this.activeLanguage = language;
  }

  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
    
    // Mapping der Menüpunkte zu den IDs der Abschnitte
    const sectionMap: {[key: string]: string} = {
      'Why me': 'whyme',
      'Skills': 'skills',
      'Projects': 'projects',
      'Contact': 'contact'
    };
    
    const sectionId = sectionMap[menuItem];
    if (sectionId) {
      this.scrollToSection(sectionId);
    }
  }
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const start = window.pageYOffset;
    const target = element.getBoundingClientRect().top + window.pageYOffset - offset;
    let distance = target - start;
    const duration = 900;

    // Wenn die Distanz zu klein ist, erzwinge trotzdem eine Animation
    if (Math.abs(distance) < 10) {
      distance = distance >= 0 ? 30 : -30; // min. 30px Bewegung
    }

    // Feder-Parameter nach Vorgabe
    const mass = 1;
    const stiffness = 100;
    const damping = 15;

    function spring(t: number): number {
      const omega = Math.sqrt(stiffness / mass);
      const zeta = damping / (2 * Math.sqrt(stiffness * mass));
      if (zeta < 1) {
        const omegaD = omega * Math.sqrt(1 - zeta * zeta);
        return 1 - Math.exp(-zeta * omega * t) *
          (Math.cos(omegaD * t) + (zeta * omega / omegaD) * Math.sin(omegaD * t));
      } else {
        return 1 - (1 + omega * t) * Math.exp(-omega * t);
      }
    }

    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      const springValue = spring(t);
      const current = start + distance * springValue;

      window.scrollTo(0, current);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        window.scrollTo(0, target); // Am Ende exakt auf Ziel
      }
    }

    requestAnimationFrame(animate);
  }
}
