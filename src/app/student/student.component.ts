import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

interface Student {
  studentId: number;
  studentName: string;
  studentCourse: string;
  studentSpecialization: string;
  percentage: number;
  departmentId: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  constructor(private service: ApiServiceService, public router: Router) {}
  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.service.getStudentsList().subscribe((data) => {
      console.log(data);
      this.students = data;
    });
    console.log(this.students);
  }
  addStudent() {
    this.router.navigate(['/add-student']);
  }
  editStudent(id) {
    this.router.navigate(['/edit-student']);
    localStorage.setItem('studentid', id);
  }
  deleteStudent(id: number) {
    console.log(id);
    this.service.deleteStudent(id).subscribe((data) => {
      alert(data.toString());
      this.getStudents();
    });
  }
}
