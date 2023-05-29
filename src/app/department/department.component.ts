import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
interface Department {
  departmentId: number;
  departmentName: string;
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  constructor(private service: ApiServiceService, private router: Router) {}
  ngOnInit(): void {
    this.getDepartments();
  }
  getDepartments() {
    this.service.getDepartmentsList().subscribe((data) => {
      console.log(data);
      this.departments = data;
    });
    console.log(this.departments);
  }
  addDepartment() {
    this.router.navigate(['/add-department']);
  }
  editDepartment(id) {
    localStorage.setItem('departmentid', id);
    this.router.navigate(['/edit-department']);
  }
  deleteDepartment(id: number) {
    console.log(id);
    this.service.deleteDepartment(id).subscribe((data) => {
      alert(data.toString());
      this.getDepartments();
    });
  }
}
