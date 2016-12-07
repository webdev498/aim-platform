import { Injectable } from '@angular/core';

class  User {
  id: number;
  userName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  mobile: string;
  firstName: string = "";
  lastName: string = "";
}
@Injectable()
export class UsersService {
  current: User = new User();
  constructor() {

  }

}
