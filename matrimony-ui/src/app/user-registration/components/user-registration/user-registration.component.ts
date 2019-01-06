import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  public userTypes: string[];
  constructor() { }

  ngOnInit() {
    this.userTypes = [
      'District Officer',
      'Block Officer',
      'Admin'
    ]
  }

}
