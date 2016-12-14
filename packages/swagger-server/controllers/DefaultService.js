'use strict';

exports.appsAppIdAuthConfigGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "authConfig" : "{}",
  "authType" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appsAppIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.appsAppIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "appId" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appsAppIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appId (String)
  * saveAppsItem (SaveAppsItem)
  **/
  // no response value expected for this operation
  res.end();
}

exports.appsDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deleteApps (DeleteApps)
  **/
  // no response value expected for this operation
  res.end();
}

exports.appsFindByDomainAppDomainGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appDomain (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "appId" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  * offset (String)
  * limit (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.appsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * saveApps (SaveApps)
  **/
  // no response value expected for this operation
  res.end();
}

exports.appsPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * saveApps (SaveApps)
  **/
  // no response value expected for this operation
  res.end();
}

exports.authConfigGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "authType" : "cognito",
  "authConfig" : {
    "poolId" : "us-east-1_iFYpXMKEQ",
    "clientId" : "6ti7q7tdgq9gnbo9u05v5o0jq6"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dataDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * deleteData (DeleteData)
  **/
  // no response value expected for this operation
  res.end();
}

exports.dataDataIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dataId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.dataDataIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dataId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "relationships" : [ {
    "dataId" : "aeiou",
    "dataType" : "aeiou",
    "dataTypeId" : "aeiou"
  } ],
  "deletedAt" : "aeiou",
  "dataId" : "aeiou",
  "modifiedAt" : "aeiou",
  "dataType" : "aeiou",
  "dataTypeId" : "aeiou",
  "createAt" : "aeiou",
  "content" : "{}"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dataDataIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dataId (String)
  * saveDataItem (SaveDataItem)
  **/
  // no response value expected for this operation
  res.end();
}

exports.dataFindByTypeDataTypeIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dataTypeId (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dataGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * limit (String)
  * dataTypeId (String)
  * platformId (String)
  * offset (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dataPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * saveData (SaveData)
  **/
  // no response value expected for this operation
  res.end();
}

exports.dataPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * saveData (SaveData)
  **/
  // no response value expected for this operation
  res.end();
}

exports.dataTypesDataTypeIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dataTypeId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "dataType" : "aeiou",
  "dataTypeId" : "aeiou",
  "description" : "aeiou",
  "platformId" : "aeiou",
  "title" : "aeiou",
  "fields" : [ {
    "fieldHint" : "aeiou",
    "fieldName" : "aeiou",
    "fieldValidation" : {
      "validationType" : "aeiou",
      "validationRegEx" : "aeiou",
      "validationError" : "aeiou"
    },
    "fieldId" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dataTypesFindByPlatformPlatformIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dataTypesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = "";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupsDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupsGroupIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.groupsPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsFindByDomainGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdApprovalsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdBoatsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdClientsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdDashboardGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdDfaGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdEventsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdFormsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdMapsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdMediaGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdNewsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdPagesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdProductsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdReportsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdShowsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.platformsPlatformIdSitesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * platformId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.rootGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersFindByEmailGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersUserIdProfileGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.usersUserIdProfilePUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

