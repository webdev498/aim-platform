import { CognitoUtil } from './cognito.service';

export * from './auth.service';
export * from './basic.service';
export * from './cognito.service';
export * from './guards';

export const PROVIDERS = [
  CognitoUtil,
]
