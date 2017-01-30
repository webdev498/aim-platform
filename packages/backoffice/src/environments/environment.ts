// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'api/',
  domain: null, // can be static or the result of a function
  /*
  // static example
  domain: 'mobile.showmanagement.com',
  // function example
  domain: () => { return document.location.host }
  */
  api: {
    basePath: 'https://ucujwanpi8.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    region: "us-east-1",
    identityPoolId: "us-east-1:417d081c-d1b7-4cdf-a0f9-be5081383458",
    userPoolId: "us-east-1_iFYpXMKEQ",
    clientId: "688f6oh799cdip8g1r9dm6c9s5",
  }
};
