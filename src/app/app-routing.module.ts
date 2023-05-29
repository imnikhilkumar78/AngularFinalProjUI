import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'edit-student', component: EditStudentComponent },
  { path: 'edit-department', component: EditDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
