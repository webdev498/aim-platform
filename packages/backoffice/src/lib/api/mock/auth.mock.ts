export const MOCK_AUTH = {
  config: {
    "statusCode": 200,
    //"statusText": "Dummy error",
    "headers": {
      "Content-Type": "application/json"
    },
    //delay: 3500, // take 12 seconds to respond to the auth/config request ... cause, why not
    "body": {
      type: "cognito",
      value: {
        region: 'us-east-1',
        userPoolId: "us-east-1_iFYpXMKEQ",
        clientId: "688f6oh799cdip8g1r9dm6c9s5",
        identityPoolID: "us-east-1:417d081c-d1b7-4cdf-a0f9-be5081383458"
      }
    }
  }
}
