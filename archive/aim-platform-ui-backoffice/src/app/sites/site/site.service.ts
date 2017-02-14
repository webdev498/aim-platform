import { Injectable } from '@angular/core';

export class Site {
  id: string;
  name: string;
  domain: string;
  description: string;
  alias: string;
}

@Injectable()
export class SiteService {
  constructor() { }
  get(id) {
    let site = new Site();
    site.id = id;
    return site;
  }
}
