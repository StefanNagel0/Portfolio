import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {

  skillsLogos: string[] = [
    '/assets/img/skills_logos/angular.png',
    '/assets/img/skills_logos/typescript.png',
    '/assets/img/skills_logos/javascript.png',
    '/assets/img/skills_logos/html.png',
    '/assets/img/skills_logos/css.png',
    '/assets/img/skills_logos/firebase.png',
    '/assets/img/skills_logos/rest_api.png',
    '/assets/img/skills_logos/git.png',
    '/assets/img/skills_logos/material_design.png',
    '/assets/img/skills_logos/scrum.png'    
  ];
}
