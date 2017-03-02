import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../business/user';

@Component({
  selector: 'login',
  styles: [String(require('./login.css'))],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public message: string;
  public submitted: boolean;
  public form: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.userService.logout();
  }
  loginClick() {

    if (this.form.valid) {
      this.submitted = true;
      console.log(this.form.value);
      let user = new User();
      user.name = this.form.controls['email'].value;
      this.userService.login(user);
      this.router.navigate(['/dashboard/']);
      return;
    }

    this.message = 'Invalid login'

  }
}