import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent implements OnInit {
  contactForm: FormGroup;
  emailClicked = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  ngOnInit() {
    this.contactForm.valueChanges.subscribe(() => {
    });

    this.contactForm.get('name')?.valueChanges.subscribe(() => {
      this.contactForm.get('name')?.markAsDirty();
    });
    
    this.contactForm.get('email')?.valueChanges.subscribe(() => {
      this.contactForm.get('email')?.markAsDirty();
    });
    
    this.contactForm.get('message')?.valueChanges.subscribe(() => {
      this.contactForm.get('message')?.markAsDirty();
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      
      this.contactForm.reset();
      
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsUntouched();
        control?.markAsPristine();
      });
      
      this.contactForm.get('privacy')?.setValue(false);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
