import { Injectable } from '@angular/core';

@Injectable()
export class PlatformsService {
  data: any[];
  constructor() {
    // TODO: replace with api call
    this.data = [
      {
        "id": "f4263b97-da83-46cd-b581-bd675a94f742",
        "landing": "dashboard",
        "default": true
      },
      {
        "id": "7f936171-9f2c-45bc-813c-c01bb09c481b",
        "landing": "sites"
      }
    ];
  }
  get(id) {

  }
  list() {

  }
}
