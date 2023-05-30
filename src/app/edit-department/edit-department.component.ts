import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent implements OnInit {
  editDepartmentForm: FormGroup;
  constructor(private router: Router, private service: ApiServiceService) {}
  ngOnInit(): void {
    this.editDepartmentForm = new FormGroup({
      departmentId: new FormControl('', Validators.required),
      departmentName: new FormControl('', Validators.required),
    });
  }
  editDepartment() {
    const gotdepartmentId = localStorage.getItem('departmentid');
    this.editDepartmentForm.get('departmentId').setValue(gotdepartmentId);
    console.log(this.editDepartmentForm.value);
    this.service
      .editDepartment(this.editDepartmentForm.value)
      .subscribe((res) => {
        alert('Details Edited Successfully');
      });
    this.router.navigate(['/department']);
  }
}
