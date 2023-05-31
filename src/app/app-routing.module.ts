import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  {
    path: 'department',
    component: DepartmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-department',
    component: AddDepartmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-student',
    component: EditStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-department',
    component: EditDepartmentComponent,
    canActivate: [AuthGuard],
  },

  { path: 'login', component: LoginComponent },
  { path: 'userRegister', component: UserRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
