import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private http: HttpClient,
    public service: ApiServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email_Id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      jwtToken: new FormControl(''),
    });
  }

  login() {
    this.service.login(this.loginForm.value).subscribe(
      (res) => {
        alert('Login Successfully');
        this.router.navigate(['/home']);
      },
      (error) => {
        alert('Login Failed. Please check your email and password.');
        console.error(error);
      }
    );
  }
  goToLogin() {
    this.router.navigate(['/userRegister']);
  }
}
