import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  addDepartmentForm: FormGroup;
  constructor(private router: Router, private service: ApiServiceService) {}
  ngOnInit(): void {
    this.addDepartmentForm = new FormGroup({
      departmentName: new FormControl('', Validators.required),
    });
  }
  addDepartment() {
    this.service
      .createDepartment(this.addDepartmentForm.value)
      .subscribe((res) => {
        alert('Department Added Successfully');
      });
    this.router.navigate(['/department']);
  }
}
