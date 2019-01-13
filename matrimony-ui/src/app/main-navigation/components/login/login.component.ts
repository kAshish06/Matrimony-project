import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface LoginDetail {
  userName: string,
  password: string
}

@Component({
  selector: 'matr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()
  public loginDialogCloseEvent = new EventEmitter<string>();

  @Output()
  public loginDetailsSubmitEvent = new EventEmitter<LoginDetail>();

  public loginFormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  public login() {
    this.loginDetailsSubmitEvent.emit(this.loginFormGroup.value);
  }
  public close() {
    this.loginDialogCloseEvent.emit('login dialog closed');
  }
}
