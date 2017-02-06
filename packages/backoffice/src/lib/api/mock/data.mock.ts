export const MOCK_SITES = require('./data/sites.mock.json');
export const MOCK_COMPANIES = require('./data/companies.mock.json');
export const MOCK_FORMS  = require('./data/forms.mock.json');
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

_.map(MOCK_SITES, (value, key) => {
  DATA[key] = value;
});

console.log('data.mock, companies', MOCK_COMPANIES);
_.each(MOCK_COMPANIES, (value, key) => {
  console.log('data.mock, map companies', key, value);
  DATA[key] = value;
});

_.map(MOCK_FORMS, (value, key) => {
  DATA[key] = value;
});

export const MOCK_DATA = DATA;
