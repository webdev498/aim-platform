export const MOCK_DATA_TYPES = {
  'D491F305-AF9E-497F-80C3-83A4E7329C1D': {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      id: "D491F305-AF9E-497F-80C3-83A4E7329C1D",
      module: "sites",
      formId: "DAF02ED4-22DA-4225-A9E2-1881D03DC98D",
      schema: {
        type: "site",
        properties: {
          url: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          aliases: {
            type: 'array',
          },
        },
        required: [ 'url' ]
      },
    }
  }
}
