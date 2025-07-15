import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      duration: ' 6 weeks',
      descriptionShort: '',
      descriptionLong: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      workProcess: 'We used the tool Trello to divide our project into several sections and distributed the tasks among ourselves. Once a section was completed, we tested it together and uploaded it to GitHub. We made sure that each function was easy to read, performed only one task, and had an appropriate name.',
      teamExperience: 'We were a team of three people. I was responsible for the dashboard and the add task section. We met several times a week in meetings to discuss our progress and resolve any issues.',
      technologies: ['angular', 'typescript', 'firebase'],
      imagePath: '/assets/img/projects/join.png',
      liveTestUrl: 'https://dabubble.example.com',
      githubUrl: 'https://github.com/StefanNagel0/Join',
      isExpanded: true
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      duration: '4 weeks',
      descriptionShort: '',
      descriptionLong: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      workProcess: 'I organized myself using the Kanban tool Trello. I divided the project into many small sections and worked through them step by step, testing as I went.',
      learningExperience: 'In this project, I was able to deepen my JavaScript, HTML, CSS skills and above all, learn object-oriented programming. I really enjoyed working on the project.',
      technologies: ['javascript', 'html', 'css'],
      imagePath: '/assets/img/projects/el_pollo_loco.png',
      liveTestUrl: 'https://sharkie.example.com',
      githubUrl: 'https://github.com/StefanNagel0/El-Pollo-Loco',
      isExpanded: false
    },
    {
      id: 3,
      title: 'Pokedex',
      duration: '1 week',
      descriptionShort: '',
      descriptionLong: 'A simple Pokedex application that allows users to search for Pokémon and view their details. It uses the PokéAPI to fetch data.',
      workProcess: 'I used Trello to stay organized. I worked with the PokéAPI and integrated it into my project. Additionally, I divided the project into smaller sections to avoid having tasks that were too large all at once.',
      learningExperience: ' learned how APIs work and how to integrate their data into my project. Additionally, I was able to improve my JavaScript, HTML, and CSS skills.',
      technologies: ['html', 'css', 'javascript'],
      imagePath: '/assets/img/projects/pokedex.png',
      liveTestUrl: 'https://join.example.com',
      githubUrl: 'https://github.com/StefanNagel0/Pokedex',
      isExpanded: false
    },
    {
      id: 4,
      title: 'Ongoing Project',
      duration: 'In progress',
      descriptionShort: '',
      descriptionLong: 'The project is a scalable SaaS platform for managing transport orders, route planning, and driver operations. Companies can create orders, assign vehicles, and plan tours, while drivers use a mobile app to track their current routes and complete deliveries. The system supports driver onboarding via invite links, automated invoice generation in custom company design, and a flexible subscription model. Built using Angular, Firebase, and Capacitor to ensure a modern and mobile-first experience.',
      workProcess: '',
      learningExperience: '',
      technologies: ['angular', 'typescript', 'firebase'],
      imagePath: '/assets/img/projects/ongoing.png',
      liveTestUrl: '#',
      githubUrl: '#',
      isExpanded: false
    }
  ];

  toggleProject(projectId: number): void {
    this.projects = this.projects.map(project => {
      if (project.id === projectId) {
        return { ...project, isExpanded: true };
      } else {
        return { ...project, isExpanded: false };
      }
    });
  }
}
