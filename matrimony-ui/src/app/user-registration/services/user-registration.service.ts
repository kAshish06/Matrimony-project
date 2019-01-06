import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class UserRegistrationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUserTypes() {
    const userTypes = [
      'Candidate',
      'Center Officer',
      'District Officer',
      'Administrator'
    ];
    const userTypeObs = Observable.create((observer: any) => {
      observer.next(userTypes);
      observer.complete();
    });
    return userTypeObs;
    // return this.httpClient
    //   .get('api/registration/userTypes');

  }

  public registerNewUser(userDetails) {
    return this.httpClient
      .post(
        '',
        userDetails
      )
  }
}
