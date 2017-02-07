export class DataType {
    id?: string;
    versionId?: string;
    platformId?: string;
    module?: string;
    moduleId?: string;
    type?: string;
    formId?: string;
    createdAt?: number;
    createBy?: string;
    modifiedAt?: number;
    modifiedById?: string;
    deletedAt?: number;
    deletedBy?: string;
    content?: {
        [key: string]: any
    };
}
export class Module {
    id?: string;
    versionId?: string;
    platformId?: string;
    module?: string;
    createdAt?: number
    createBy?: string
    modifiedAt?: number;
    modifiedById?: string;
    deletedAt?: number
    deletedBy?: string;
    content?: {
        [key: string]: any
    };
}
export class ModulesItemValue {
    id: string;
    active: boolean;
    title?: string;
}
export class Platform {
    id?: string;
    versionId?: string;
    createdAt?: number;
    createBy?: string;
    modifiedAt?: number;
    modifiedById?: string
    deletedAt?: number;
    deletedBy?: string;
    content?: {
        modules?: {
        [key: string]: any
    };
    };
}
export class User {
    id?: string;
    versionId?: string;
    createdAt?: number;
    createBy?: string;
    modifiedAt?: number;
    modifiedById?: string;
    deletedAt?: number
    deletedBy?: string;
    content: {
        email: string;
        firstName?: string;
        lastName?: string;
        defaults?: {
            [key: string]: any
        };
        notifications?: {
            [key: string]: any
        }[];
        platforms?: {
        [key: string]: any
    };
    };
}

export class Data<T> {
    id: string;
    versionId: string;
    platformId: string;
    module: string;
    moduleId: string;
    dataType: string
    dataTypeId: string
    createdAt: number; // date-time
    createdById: string;
    modifiedAt: number;
    modifiedById: string;
    deletedAt?: number;
    deletedBy?: string;
    content: T;
    autoloaded: any[];
}

export class Address {
    /**
     * Optional user-defined name of the Address, for example 'Home' or 'Work'
     */
    name?: string;
    line1?: string;
    line2?: string;
    line3?: string;
    city?: string;
    stateOrProvince?: string;
    postalCode?: string;
    country?: string;
    geoLocation?: GeoLocation;
}
export class AuthConfig {
    type?: string;
}
export class Empty {
}
export class Error {
    code?: number;
    message?: string;
    errors?: Errors[];
}
export class Errors {
    code?: number;
    message?: string;
    params?: string;
    dataPath?: string;
    schemaPath?: string;
}
export class FormField {
    id: string;
    type: string;
    required?: boolean;
    title?: string;
    hint?: string;
    /**
     * This is a key/value list of field specific attributes
     */
    attributes?: {
        [key: string]: any
    };
    /**
     * This is a key/value list of field specific options
     */
    options?: {
        fields?: FormField[];
        placeholder?: string;
        values?: KeyValueList;
    };
}
export class FormFieldGroup {
    id: string;
    title?: string;
    options?: {
        columns?: number;
        layout?: "vertical" | "horizontal";
    };
    actions?: {
        save?: boolean;
        cancel?: boolean;
    };
    fields: FormField[];
}
export class GeoLocation {
    latitude: string;
    longitude: string;
}
export type KeyValueList = {
    key: string;
    value: any;
}[];
export class Measurement {
    type?: "length" | "weight" | "volume";
    name: string;
    value: number;
    unit: string;
    source?: {
        value?: number;
        unit?: string;
    };
}
export class Office {
    title?: string;
    primaryContact?: string;
    contacts?: string[];
    address?: Address;
    /**
     * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
     */
    channels?: KeyValueList;
}
export type Status = "active" | "inactive" | "pending" | "unknown";
export class Blog {
    status: Status;
    title: string;
    bodyFormat: string;
    body: string;
    render?: string;
}
export class Boat {
    status: Status;
    offeredById?: string;
    contactIds?: string[];
    address?: Address;
    description?: string;
    categories?: {
        name?: string;
        slug?: string;
    }[];
    salesClass: "new" | "used";
    class: string;
    /**
     * A reference to the Make/Manufactuter
     */
    make: string;
    model: string;
    modelYear: number;
    price?: number;
    hidePrice?: boolean;
    hullType?: string;
    length: Measurement[];
    weight?: Measurement[];
    volume?: Measurement[];
}
export class Company {
    status: Status;
    title: string;
    primaryContact?: Contact;
    primaryOffice?: Office;
    contacts?: Contact[];
    offices?: Office[];
    /**
     * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
     */
    channels?: KeyValueList;
}

export class Contact {
    status: Status;
    displayName?: string;
    firstName: string;
    lastName: string;
    prefix?: string;
    suffix?: string;
    companyId?: string;
    officeId?: string;
    address?: Address;
    /**
     * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
     */
    channels: KeyValueList;
}

export class Form {
    /**
     * This is a valid JSON Schema v4 representation of the model the form uses
     */
    schema: {
    };
    fieldDisplay: {
        type?: "panel";
        options?: {
            columns?: number;
        };
    };
    fieldGroups: FormFieldGroup[];
}
export class Result {
}
export class Location {
}
export class Map {
}
export class Section {
}
export class Gallery {
}
export class Media {
}
export class Product {
}
export class Service {
}
export class Show {
}
export class Venue {
}
export class Domain {
    title?: string;
    description?: string;
    fqdn?: string;
    siteDataId?: string;
    siteDataTypeId?: string;
}
export class Path {
    title?: string;
    description?: string;
    path: string;
    redirect?: {
        code?: number;
        url?: string;
    };
    handler?: {
        module?: {
            id?: string;
            title?: string;
        };
        /**
         * The action that needs to be run
         */
        action?: string;
        /**
         * Can be a single string value or an encoded json object
         */
        value?: string;
    };
}
export class Site {
    title?: string;
    description?: string;
    domain?: {
        id?: string;
        fqdn?: string;
    };
    routing?: {
        pattern?: string;
    }[];
    routingCache?: {
        /**
         * Used for the compiled regex of the pattern for the routes, speed things up a little
         */
        forwardRoutes?: {
            regex?: string;
        }[];
        /**
         * Used for the creating forward routing urls
         */
        reverseRoutes?: {
            [key: string]: any
        };
        /**
         * Used to store the checkSum of the routing array, check to see if we need to rebuild cache
         */
        checkSum?: string;
        /**
         * Will be used to store the regex compiled list of available routes
         */
        forwardRoutesCompiled?: string;
    };
}
export class Template {
    title?: string;
    description?: string;
    path?: string;
    engine?: string;
    content?: string;
    compiled?: string;
}
export class Auth {
}
export class Pool {
}
