import { MOCK_AUTH } from './auth.mock';
import { MOCK_USERS } from './users.mock';
import { MOCK_PLATFORMS }  from './platforms.mock';
import { MOCK_DATA_TYPES } from './data-types';
import { MOCK_DATA } from './data.mock';

import * as _ from 'lodash';

import { MOCK_SITES } from './data.mock';
import { MOCK_COMPANIES } from './data.mock';
import { MOCK_FORMS } from './data.mock';

export const MOCK_API_DATA = {
  auth: MOCK_AUTH,
  platforms: MOCK_PLATFORMS,
  users: MOCK_USERS,
  data: MOCK_DATA,
  dataTypes: MOCK_DATA_TYPES,
};

/*
 * Here we create a root element for each "data type" so we can access them via calls like /sites, or /forms
 * these would eventually be replaced with calls to something like /data?typeId={dataTypeId} where dataTypeId may be "site" or a GUID representing the "site" for the current platform/app
 */
MOCK_API_DATA['sites'] = {};
_.map(MOCK_SITES, (value, key, collection) => {
  MOCK_API_DATA['sites'][key] = _.set(value, '____root', 'sites');
});

MOCK_API_DATA['companies'] = {};
_.map(MOCK_COMPANIES, (value, key, collection) => {
  MOCK_API_DATA['companies'][key] = _.set(value, '____root', 'companies');
});

MOCK_API_DATA['forms'] = {};
_.map(MOCK_FORMS, (value, key, collection) => {
  MOCK_API_DATA['forms'][key] = _.set(value, '____root', 'forms');
});
