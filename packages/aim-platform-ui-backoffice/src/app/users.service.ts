import { Injectable } from '@angular/core';

class  User {
  id: number;
  userName: string = 'Joe';
  email: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  mobile: string;
  firstName: string = "Joe";
  lastName: string = "User";
}
@Injectable()
export class UsersService {
  current: User = new User();
  constructor() {

  }

}
