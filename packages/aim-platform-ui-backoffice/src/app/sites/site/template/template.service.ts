import { Injectable } from '@angular/core';

export class Template {
  id: string;
  name: string;
  value: string;
  description: string;
  site: string;
}

@Injectable()
export class TemplateService {

  constructor() { }

}
