import { Injectable } from '@angular/core';


export class Company {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  fax: string;
  logo: string;
  description: string;
  headerImage1: string;
  headerImage2: string;
  headerImage3: string;
  twitterUrl: string;
  facebookUrl: string;
}

@Injectable()
export class CompaniesService {

  constructor() { }

}
