export const MOCK_DATA_TYPES = {
  "b552c079-b7bb-4f0c-8fbd-6af6283e2391": {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "id": "b552c079-b7bb-4f0c-8fbd-6af6283e2391",
      "module": "sites",
      "formId": "DAF02ED4-22DA-4225-A9E2-1881D03DC98D",
      "schema": {
        "type": "site",
        "properties": {
          "url": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "aliases": {
            "type": "array"
          },
        },
        "required": [ "url" ]
      }
    }
  },

  "12b87a31-90ee-4448-97e6-d76b8f9e0ab8": {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "id": "12b87a31-90ee-4448-97e6-d76b8f9e0ab8",
      "module": "companies",
      "formId": "DAF02ED4-22DA-4225-A9E2-1881D03DC98D-COMP",
      "schema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "id": "http://platform.aimmedia.com/companies/#Company",
        "type": "object",
        "x-mock": {
          "count": 20
        },
        "properties": {
          "status": {
            "$ref": "http://platform.aimmedia.com/#Status"
          },
          "title": {
            "type": "string",
            "x-faker": "company.companyName"
          },
          "primaryContact": {
            "type": "object",
            "x-chance": "platform.newContact"
          },
          "primaryOffice": {
            "$ref": "#Office",
            "x-chance": "platform.officeId"
          },
          "contacts": {
            "type": "array",
            "items": {
              "type": "object",
              "x-chance": "platform.newContact"
            }
          },
          "offices": {
            "type": "array",
            "items": {
              "$ref": "#Office",
              "x-chance": "platform.newOffice"
            }
          },
          "channels": {
            "$ref": "http://platform.aimmedia.com/#KeyValueList",
            "description": "KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key",
            "x-chance": "platform.channels"
          }
        },
        "required": ["status","title"],
        "definitions": {
          "Office": {
            "id": "#Office",
            "type": "object",
            "x-chance": "platform.newOffice",
            "properties": {
              "title": {
                "type": "string",
                "x-chance": "platform.officeName"
              },
              "primaryContact": {
                "type": "string",
                "x-chance": "platform.newContact"
              },
              "contacts": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-chance": "platform.newContact"
                }
              },
              "address": {
                "$ref": "http://platform.aimmedia.com/#Address",
                "x-chance": "platform.address"
              },
              "channels": {
                "$ref": "http://platform.aimmedia.com/#KeyValueList",
                "description": "KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key",
                "x-chance": "platform.channels"
              }
            }
          }
        }
      }
    }
  }
}
