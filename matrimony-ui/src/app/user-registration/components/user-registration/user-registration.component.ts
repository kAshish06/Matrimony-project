import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { UserRegistrationService } from '../../services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  public userTypes: string[];
  public registrationFormGroup = new FormGroup({
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    userType: new FormControl('')
  });
  constructor(
    private userRegistrationService: UserRegistrationService
  ) { }

  ngOnInit() {
    this.userRegistrationService.getUserTypes()
      .subscribe((userTypes: string[]) => {
        this.userTypes = userTypes;
      });
  }

  public registerUser() {
    console.log(this.registrationFormGroup);
    // this.userRegistrationService.registerNewUser(this.registrationFormGroup.value)
    //   .subscribe((usrRegistrationResponse) => {

    //   },
    //   (error) => {
    //     //do proper error handling, show error to user
    //   });
  }
}
