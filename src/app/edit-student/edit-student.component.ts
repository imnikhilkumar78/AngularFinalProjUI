import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  editStudentForm: FormGroup;
  constructor(private router: Router, private service: ApiServiceService) {}
  ngOnInit(): void {
    this.editStudentForm = new FormGroup({
      studentId: new FormControl('', Validators.required),
      studentName: new FormControl('', Validators.required),
      studentCourse: new FormControl('', Validators.required),
      studentSpecialization: new FormControl('', Validators.required),
      percentage: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required),
    });
  }
  editStudent() {
    const gotStudentId = localStorage.getItem('studentid');
    this.editStudentForm.get('studentId').setValue(gotStudentId);
    console.log(this.editStudentForm.value);
    this.service.editStudent(this.editStudentForm.value).subscribe((res) => {
      alert('Details Edited Successfully');
    });
  }
}
