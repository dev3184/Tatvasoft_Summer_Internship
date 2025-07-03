import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent {
  studentName = '';
  studentList: string[] = [];

  addStudent() {
    if (this.studentName.trim()) {
      this.studentList.push(this.studentName.trim());
      this.studentName = '';
    }
  }
}
