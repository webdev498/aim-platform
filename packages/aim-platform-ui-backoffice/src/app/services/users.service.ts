import { Injectable } from '@angular/core';
import {PlatformsService} from "../platforms/platforms.service";

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
  constructor(public platforms: PlatformsService) {

  }
  get(id: string) {
    let result = {
      "request": "https://94il37of59.execute-api.us-east-1.amazonaws.com/dev/users/36736f1f-1ff6-48c9-a144-e6ae4c88c2c7s",
      "id": "f4263b97-da83-46cd-b581-bd675a94f742",
      "type": "platform",
      "content": {
        "platforms": [
          {
            "id": "f4263b97-da83-46cd-b581-bd675a94f742",
            "landing": "",
            "default": true
          },
          {
            "id": "7f936171-9f2c-45bc-813c-c01bb09c481b",
            "landing": "/sites"
          }
        ]
      }
    };
    this.platforms.data = result.content.platforms;
  }
}
