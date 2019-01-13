import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'matr-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  private showLoginDialog = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public navigateToRegistration() {
    console.log('navigateToRegistration')
    this.router.navigateByUrl('/registration');
  }

  public navigateToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  public openLoginDialog() {
    this.showLoginDialog = true;
  }

  public startLogin(ev) {
    console.log(ev);
  }
  public closeLoginDialog() {
    this.showLoginDialog = false;
  }
}
