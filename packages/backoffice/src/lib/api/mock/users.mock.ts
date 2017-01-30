export const MOCK_USERS = {
  'dhiggins': {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "id": "dhiggins",
      "title": "David",
      "description": "Senior Engineer",
      "createAt": 1482185419,
      "createBy": null,
      "modifiedAt": 1482185419,
      "modifiedBy": "dhiggins",
      "deletedAt": null,
      "deletedBy": null,
      "content": {
        "firstName": "David",
        "lastName": "Higgins",
        "defaults": {
          "platform": "91da1820-e335-11e6-98d0-818de223eef9"
        },
        "notifications": [
          {
            icon: 'glyphicon glyphicon-download fa-lg',
            created: '2017-01-21',
            message: "1 new user just signed up! Check out<a href=\"#\">Monica Smith</a>'s account.",
          },
          {
            icon: 'glyphicon glyphicon-upload fa-lg',
            created: '2017-01-19',
            message: "2.1.0-pre-alpha just released.",
          }
        ],
        "platforms": {
          "af818b70-c8db-11e6-9d9d-cec0c932ce01": {
            "id": "91da1820-e335-11e6-98d0-818de223eef9",
            "title": "Show Management",
            "defaults": {
              "module": "sites"
            }
          }
        }
      }
    }
  }
}
