import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private http: HttpClient,
    public service: ApiServiceService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email_Id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      jwtToken: new FormControl(''),
    });
  }
  register() {
    this.service.register(this.registerForm.value).subscribe(
      (res) => {
        alert('Registration Successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration Failed. Please check your email and password.');
        console.error(error);
      }
    );
  }
  goToRegister() {
    this.router.navigate(['/login']);
  }
}
