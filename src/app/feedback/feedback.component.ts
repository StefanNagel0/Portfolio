import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feedback } from './feedback.model';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedbacks: Feedback[] = [
    {
      name: 'Kevin K.',
      text: 'You’ve got it! Your code is clean, well-organized, and structured – it clearly shows what youre capable of. Your explanations are also clear and authentic.',
      linkedInProfile: '#'
    },
    {
      name: 'Didi N.',
      text: 'You write clear, well-thought-out, readable, and structured code. Youre very helpful, reliable, and explain problems in a simple and understandable way.',
      linkedInProfile: '#'
    }
  ];
}
