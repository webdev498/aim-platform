export const MOCK_FORMS = {
  'form-id-1': {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      id: 'form-id-1',
      platformId: "2fd8f0b3-c050-4413-8a3a-1e632acfd4b7",
      type: 'contact',
      content: {
        // Json Schema, cause Michael's Funny :)
        schema: {
          type: "contact",
          properties: {
            first_name: {
              type: 'string',
            },
            middle_name: {
              type: 'string',
              maximum: 1,
            },
            last_name: {
              type: 'string',
            },
            address: {
              type: 'object',
              properties: {
                street1: {
                  type: 'string',
                },
                street2: {
                  type: 'string',
                },
                city: {
                  type: 'string',
                },
                state: {
                  type: 'string',
                  maximum: 2,
                },
                postalCode: {
                  type: 'string',
                  maximum: 10,
                }
              },
              required: ['postalCode'],
            }
          },
          required: [ 'first_name', 'last_name', 'address', 'employer' ]
        },
        fieldDisplay: {
          type: 'panel',
          options: {
            columns: 3,
          },
        },
        fieldGroups: [
          {
            id: 'fieldGroup-1',
            title: 'Contact Details',
            options: {
              columns: 3,
              layout: 'horizontal',
            },
            actions: {
              save: true,
              cancel: true,
            },
            description: "Suspendisse sed urna ante. Vestibulum tincidunt nunc nunc, ac blandit tellus tincidunt non. Etiam quis turpis mauris. Suspendisse id leo ac neque venenatis dapibus. Nam ullamcorper vitae nibh et efficitur.",
            fields: [
              {
                id: 'fieldset-1',
                type: 'fieldset',
                title: 'Name',
                options: {
                  columns: 1,
                  description: 'Suspendisse sed urna ante. Vestibulum tincidunt nunc nunc, ac blandit tellus tincidunt non.',
                  fields: [
                    {
                      id: 'content.first_name',
                      type: 'text',
                      required: true,
                      title: 'First Name',
                      hint: 'Your First Name',
                      attributes: {
                        minlength: 5,
                        maxlength: 20,
                      },
                      options: {
                        placeholder: 'Enter your First Name',
                      }
                    },
                    {
                      id: 'content.middle_name',
                      type: 'text',
                      title: 'Middle Initial',
                      tooltip: 'Only accepts one character',
                      attributes: {
                        maxlength: 1,
                      },
                      options: {
                        placeholder: 'Enter your Middle Name',
                      }
                    },
                    {
                      id: 'content.last_name',
                      type: 'text',
                      required: true,
                      title: 'Last Name',
                      options: {
                        placeholder: 'Enter your Last Name',
                      }
                    },
                    {
                      id: 'content.marital_status',
                      type: 'radio',
                      title: 'Marital Status',
                      options: {
                        values: [
                          {value:'Maried'},
                          {value:'Single'},
                          {value:'Divorced'},
                          {value:'Other'},
                        ],
                      }
                    },
                    {
                      id: 'content.terms_of_service',
                      type: 'checkbox',
                      title: "Terms of Service",
                      required: true,
                      hint: "Read the <a href=\"http://www.google.com/\">terms of service here</a>",
                      options: {
                        placeholder: "I agree to the Terms of Service.",
                      },
                    }
                  ]
                },
              },
              {
                id: 'fieldset-2',
                type: 'fieldset',
                title: 'Address',
                options: {
                  columns: 2,
                  fields: [
                    {
                      id: "content.address.street1",
                      type: "text",
                      title: "Street Address",
                      options: {
                        placeholder: "Street Address",
                      }
                    },
                    {
                      id: "content.address.street2",
                      type: "text",
                      title: "Suite / Apt.",
                      disabled: true,
                      options: {
                        placeholder: "Suite, Apt #",
                      }
                    },
                    {
                      id: "content.address.city",
                      type: "text",
                      title: "City",
                      options: {
                        placeholder: "City",
                      }
                    },
                    {
                      id: "content.address.state",
                      title: "State",
                      type: "SelectComponent",
                      options: {
                        placeholder: "Select your State",
                        values: [
                          {
                            "value": "AL",
                            "title": "Alabama"
                          }, {
                            "value": "AK",
                            "title": "Alaska"
                          }, {
                            "value": "AZ",
                            "title": "Arizona"
                          }, {
                            "value": "AR",
                            "title": "Arkansas"
                          }, {
                            "value": "CA",
                            "title": "California"
                          }, {
                            "value": "CO",
                            "title": "Colorado"
                          }, {
                            "value": "CT",
                            "title": "Connecticut"
                          }, {
                            "value": "DE",
                            "title": "Delaware"
                          }, {
                            "value": "DC",
                            "title": "District Of Columbia"
                          }, {
                            "value": "FL",
                            "title": "Florida"
                          }, {
                            "value": "GA",
                            "title": "Georgia"
                          }, {
                            "value": "HI",
                            "title": "Hawaii"
                          }, {
                            "value": "ID",
                            "title": "Idaho"
                          }, {
                            "value": "IL",
                            "title": "Illinois"
                          }, {
                            "value": "IN",
                            "title": "Indiana"
                          }, {
                            "value": "IA",
                            "title": "Iowa"
                          }, {
                            "value": "KS",
                            "title": "Kansas"
                          }, {
                            "value": "KY",
                            "title": "Kentucky"
                          }, {
                            "value": "LA",
                            "title": "Louisiana"
                          }, {
                            "value": "ME",
                            "title": "Maine"
                          }, {
                            "value": "MD",
                            "title": "Maryland"
                          }, {
                            "value": "MA",
                            "title": "Massachusetts"
                          }, {
                            "value": "MI",
                            "title": "Michigan"
                          }, {
                            "value": "MN",
                            "title": "Minnesota"
                          }, {
                            "value": "MS",
                            "title": "Mississippi"
                          }, {
                            "value": "MO",
                            "title": "Missouri"
                          }, {
                            "value": "MT",
                            "title": "Montana"
                          }, {
                            "value": "NE",
                            "title": "Nebraska"
                          }, {
                            "value": "NV",
                            "title": "Nevada"
                          }, {
                            "value": "NH",
                            "title": "New Hampshire"
                          }, {
                            "value": "NJ",
                            "title": "New Jersey"
                          }, {
                            "value": "NM",
                            "title": "New Mexico"
                          }, {
                            "value": "NY",
                            "title": "New York"
                          }, {
                            "value": "NC",
                            "title": "North Carolina"
                          }, {
                            "value": "ND",
                            "title": "North Dakota"
                          }, {
                            "value": "OH",
                            "title": "Ohio"
                          }, {
                            "value": "OK",
                            "title": "Oklahoma"
                          }, {
                            "value": "OR",
                            "title": "Oregon"
                          }, {
                            "value": "PA",
                            "title": "Pennsylvania"
                          }, {
                            "value": "RI",
                            "title": "Rhode Island"
                          }, {
                            "value": "SC",
                            "title": "South Carolina"
                          }, {
                            "value": "SD",
                            "title": "South Dakota"
                          }, {
                            "value": "TN",
                            "title": "Tennessee"
                          }, {
                            "value": "TX",
                            "title": "Texas"
                          }, {
                            "value": "UT",
                            "title": "Utah"
                          }, {
                            "value": "VT",
                            "title": "Vermont"
                          }, {
                            "value": "VA",
                            "title": "Virginia"
                          }, {
                            "value": "WA",
                            "title": "Washington"
                          }, {
                            "value": "WV",
                            "title": "West Virginia"
                          }, {
                            "value": "WI",
                            "title": "Wisconsin"
                          }, {
                            "value": "WY",
                            "title": "Wyoming"
                          }
                        ]
                      }
                    },
                    {
                      id: "content.address.postalCode",
                      type: "text",
                      required: true,
                      title: "Zip / Postal Code",
                    }
                  ]
                }
              }
            ]
          },
          {
            id: 'fieldGroup-2',
            title: 'Employment Details',
            /// optional
            /*
            options: {
              columns: 3,
            },*/
            actions: {
              save: true,
              cancel: true,
            },
            fields: [
              {
                id: 'field-1',
                type: 'fieldset',
                title: null,
                options: {
                  description: null, // optional
                  fields: [
                    {
                      id: "content.employer.name",
                      type: "TextComponent",
                      title: "Employer Name",
                      hint: 'Their Full Name',
                    },
                    {
                      id: "content.employer.telephone",
                      type: "TextComponent",
                      title: "Employer Phone",
                    },
                  ],
                }
              },
              {
                id: 'fieldset-2',
                type: 'fieldset',
                options: {
                  columns: 2,
                  fields: [
                    {
                      id: 'content.employer.marital_status',
                      type: 'radio',
                      title: 'Marital Status',
                      options: {
                        values: [
                          {value:'Maried'},
                          {value:'Single'},
                          {value:'Divorced'},
                          {value:'Other'},
                        ],
                      }
                    },
                  ]
                }
              },
              {
                id: 'fieldset-3',
                type: 'fieldset',
                options: {
                  columns: 1,
                  fields: [
                    {
                      id: 'content.employer.terms_of_service',
                      type: 'checkbox',
                      title: "Terms of Service",
                      required: true,
                      hint: "Read the <a href=\"http://www.google.com/\">terms of service here</a>",
                      options: {
                        placeholder: "I agree to the Terms of Service.",
                      },
                    }
                  ],
                },
              },
            ]
          }
        ],
      }
    }
  },
  'DAF02ED4-22DA-4225-A9E2-1881D03DC98D': {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      id: 'DAF02ED4-22DA-4225-A9E2-1881D03DC98D',
      platformId: "af818b70-c8db-11e6-9d9d-cec0c932ce01",
      type: 'site',
      content: {
        // Json Schema, cause Michael's Funny :)
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
        fieldDisplay: {
          type: 'panel',
          options: {
            columns: 3,
          },
        },
        fieldGroups: [
          {
            id: 'fieldGroup-1',
            title: 'Site Details',
            options: {
              columns: 3,
              layout: 'vertical',
            },
            actions: {
              save: true,
              cancel: true,
            },
            description: "Configure your site",
            fields: [
              {
                id: 'fieldset-1',
                type: 'fieldset',
                //title: 'Name',
                options: {
                  columns: 1,
                  //description: 'Suspendisse sed urna ante. Vestibulum tincidunt nunc nunc, ac blandit tellus tincidunt non.',
                  fields: [
                    {
                      id: 'title',
                      type: 'text',
                      required: true,
                      title: 'Site Title',
                    },
                    {
                      id: 'content.url',
                      type: 'text',
                      required: true,
                      title: 'URL',
                      hint: 'The fully qualifed URL, http://www.example.com',
                      attributes: {
                        //minlength: 5,
                        //maxlength: 20,
                      },
                      options: {
                        placeholder: 'http://www.example.com',
                      }
                    },
                    {
                      id: 'content.description',
                      type: 'text',
                      title: 'Site Description',
                      //tooltip: 'Only accepts one character',
                      attributes: {
                        //maxlength: 1,
                      },
                      options: {
                        placeholder: 'Site Description',
                      }
                    },
                  ]
                },
              },
            ]
          },
        ],
      }
    }
  },
};

export const MOCK_FORMS_OPTIONS = {
  'state': [
    {
      "value": "AL",
      "title": "Alabama"
    }, {
      "value": "AK",
      "title": "Alaska"
    }, {
      "value": "AZ",
      "title": "Arizona"
    }, {
      "value": "AR",
      "title": "Arkansas"
    }, {
      "value": "CA",
      "title": "California"
    }, {
      "value": "CO",
      "title": "Colorado"
    }, {
      "value": "CT",
      "title": "Connecticut"
    }, {
      "value": "DE",
      "title": "Delaware"
    }, {
      "value": "DC",
      "title": "District Of Columbia"
    }, {
      "value": "FL",
      "title": "Florida"
    }, {
      "value": "GA",
      "title": "Georgia"
    }, {
      "value": "HI",
      "title": "Hawaii"
    }, {
      "value": "ID",
      "title": "Idaho"
    }, {
      "value": "IL",
      "title": "Illinois"
    }, {
      "value": "IN",
      "title": "Indiana"
    }, {
      "value": "IA",
      "title": "Iowa"
    }, {
      "value": "KS",
      "title": "Kansas"
    }, {
      "value": "KY",
      "title": "Kentucky"
    }, {
      "value": "LA",
      "title": "Louisiana"
    }, {
      "value": "ME",
      "title": "Maine"
    }, {
      "value": "MD",
      "title": "Maryland"
    }, {
      "value": "MA",
      "title": "Massachusetts"
    }, {
      "value": "MI",
      "title": "Michigan"
    }, {
      "value": "MN",
      "title": "Minnesota"
    }, {
      "value": "MS",
      "title": "Mississippi"
    }, {
      "value": "MO",
      "title": "Missouri"
    }, {
      "value": "MT",
      "title": "Montana"
    }, {
      "value": "NE",
      "title": "Nebraska"
    }, {
      "value": "NV",
      "title": "Nevada"
    }, {
      "value": "NH",
      "title": "New Hampshire"
    }, {
      "value": "NJ",
      "title": "New Jersey"
    }, {
      "value": "NM",
      "title": "New Mexico"
    }, {
      "value": "NY",
      "title": "New York"
    }, {
      "value": "NC",
      "title": "North Carolina"
    }, {
      "value": "ND",
      "title": "North Dakota"
    }, {
      "value": "OH",
      "title": "Ohio"
    }, {
      "value": "OK",
      "title": "Oklahoma"
    }, {
      "value": "OR",
      "title": "Oregon"
    }, {
      "value": "PA",
      "title": "Pennsylvania"
    }, {
      "value": "RI",
      "title": "Rhode Island"
    }, {
      "value": "SC",
      "title": "South Carolina"
    }, {
      "value": "SD",
      "title": "South Dakota"
    }, {
      "value": "TN",
      "title": "Tennessee"
    }, {
      "value": "TX",
      "title": "Texas"
    }, {
      "value": "UT",
      "title": "Utah"
    }, {
      "value": "VT",
      "title": "Vermont"
    }, {
      "value": "VA",
      "title": "Virginia"
    }, {
      "value": "WA",
      "title": "Washington"
    }, {
      "value": "WV",
      "title": "West Virginia"
    }, {
      "value": "WI",
      "title": "Wisconsin"
    }, {
      "value": "WY",
      "title": "Wyoming"
    }
  ],
};



// State Options Text Format
/*
AL|Alabama
AK|Alaska
AZ|Arizona
AR|Arkansas
CA|California
CO|Colorado
CT|Connecticut
DE|Delaware
DC|District Of Columbia
FL|Florida
GA|Georgia
HI|Hawaii
ID|Idaho
IL|Illinois
IN|Indiana
IA|Iowa
KS|Kansas
KY|Kentucky
LA|Louisiana
ME|Maine
MD|Maryland
MA|Massachusetts
MI|Michigan
MN|Minnesota
MS|Mississippi
MO|Missouri
MT|Montana
NE|Nebraska
NV|Nevada
NH|New Hampshire
NJ|New Jersey
NM|New Mexico
NY|New York
NC|North Carolina
ND|North Dakota
OH|Ohio
OK|Oklahoma
OR|Oregon
PA|Pennsylvania
RI|Rhode Island
SC|South Carolina
SD|South Dakota
TN|Tennessee
TX|Texas
UT|Utah
VT|Vermont
VA|Virginia
WA|Washington
WV|West Virginia
WI|Wisconsin
WY|Wyoming
*/

