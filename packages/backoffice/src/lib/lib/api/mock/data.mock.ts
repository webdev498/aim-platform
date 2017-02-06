import { MOCK_SITES } from './data/sites.mock';
import { MOCK_COMPANIES } from './data/companies.mock';
import { MOCK_FORMS } from './data/forms.mock';
import * as _ from 'lodash';

let DATA = {
  "object-1": {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "id": "1234-1234-1234-1234",
      "type": "user",
      "content": {
        "username": "dhiggins",
        "password": "password",
        "first_name": "David",
        "middle_name": "P",
        "last_name": "Higgins",
        "address": {
          "street1": "123 Pineview Ln",
          "street2": "#232",
          "city": "Oakcrest",
          "state": "NJ",
          "postalCode": "12345",
        },
        "telephone": "1-123-456-7890",
        "fax": "1-123-456-7890",
      }
    }
  }
}

_.map(MOCK_SITES, (value, key, collection) => {
  DATA[key] = value;
});

_.map(MOCK_COMPANIES, (value, key, collection) => {
  DATA[key] = value;
});

_.map(MOCK_FORMS, (value, key, collection) => {
  DATA[key] = value;
});

export const MOCK_DATA = DATA;
