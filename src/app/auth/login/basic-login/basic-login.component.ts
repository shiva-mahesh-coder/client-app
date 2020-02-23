import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, NgModel } from '@angular/forms';

import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  signinForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    
    private router: Router
  ) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    this.signinForm = this.fb.group({
      email: ['admin@gm.com', Validators.required],
      password: ['admin', Validators.required]
    });
  }
  get f() {
    return this.signinForm.controls;
  }
  GetLogin() {
    
    if (this.f.email.value.toLowerCase() == "admin@gm.com" && this.f.password.value == "admin") {
      this.router.navigate(['/dashboard']);
    }
    }

}
