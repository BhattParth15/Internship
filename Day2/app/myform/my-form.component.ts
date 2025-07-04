
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,  // ✅ required for 'imports'
  imports: [FormsModule, CommonModule],
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'] // ✅ FIXED
})
export class MyFormComponent {
  studentName: string = '';
  studentMail: string = '';
  submitted: boolean = false;

  students: { name: string; email: string }[] = [];

  submitForm() {
      this.students.push({
        name: this.studentName,
        email: this.studentMail
      });
      this.submitted = true;
      this.studentName = '';
      this.studentMail = '';
  }
}


