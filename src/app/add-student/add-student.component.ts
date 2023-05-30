import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  addStudentForm: FormGroup;

  constructor(private router: Router, private service: ApiServiceService) {}
  ngOnInit(): void {
    this.addStudentForm = new FormGroup({
      studentName: new FormControl('', Validators.required),
      studentCourse: new FormControl('', Validators.required),
      studentSpecialization: new FormControl('', Validators.required),
      percentage: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required),
    });
  }
  addStudent() {
    console.log(this.addStudentForm.value);
    this.service.createStudent(this.addStudentForm.value).subscribe((res) => {
      alert('Student Added Successfully');
    });
    this.router.navigate(['/student']);
  }
}
