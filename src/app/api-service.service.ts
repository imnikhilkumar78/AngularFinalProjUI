import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  readonly apiUrl = 'https://localhost:7110/api/';
  constructor(private http: HttpClient, public router: Router) {}

  getStudentsList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Student');
  }
  deleteStudent(studentId: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.apiUrl + 'Student/DeleteStudent?id=' + studentId,
      httpOptions
    );
  }

  createStudent(studentData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'Student',
      studentData,
      httpOptions
    );
  }
  editStudent(studentData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'Student/Update',
      studentData,
      httpOptions
    );
  }

  //Department
  getDepartmentsList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Department');
  }
  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.apiUrl + 'Department/DeleteDepartment?id=' + deptId,
      httpOptions
    );
  }

  createDepartment(departmentData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'Department',
      departmentData,
      httpOptions
    );
  }

  editDepartment(DeptData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'Department/UpdateDepartment',
      DeptData,
      httpOptions
    );
  }
  login(user): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    localStorage.setItem('userDetails', user);
    return this.http.post<any>(this.apiUrl + 'User/Login', user, httpOptions);
  }
  register(user): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post<any>(this.apiUrl + 'User', user, httpOptions);
  }

  //For Guard will return true if userLoggedIn
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('userDetails');
    return user !== null ? true : false;
  }
  logOut() {
    localStorage.removeItem('userDetails');
    alert('Signed Out Successfully');
    this.router.navigate(['/login']);
  }
}
