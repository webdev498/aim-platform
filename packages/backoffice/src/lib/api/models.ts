export namespace Modules {
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
        geoLocation?: {
        };
    }
    export class App {
    }
    export class Auth {
    }
    export class AuthConfig {
        type?: string;
    }
    export class Blog {
        title?: string;
        bodyFormat?: string;
        body?: string;
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
        primaryContactId?: string;
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
        displayName?: string | null;
        firstName: string | null;
        lastName: string | null;
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
    export class Domain {
        title?: string | null;
        description?: string | null;
        fqdn?: string;
        siteDataId?: string;
        siteDataTypeId?: string;
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
    export class Gallery {
    }
    export class GeoLocation {
        latitude: string;
        longitude: string;
    }
    export type KeyValueList = {
        key: string;
        value: null | boolean | {
        } | any[] | number | string;
    }[];
    export class Location {
    }
    export class Map {
    }
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
    export class Media {
    }
    export class Office {
        title?: string;
        primaryContactId?: string;
        contacts?: Contact[];
        address?: any;
        /**
         * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
         */
        channels?: KeyValueList;
    }
    export class Page {
    }
    export class Path {
        title?: string | null;
        description?: string | null;
        path: string;
        redirect?: {
        } | null;
        handler?: {
        } | null;
    }
    export class Pool {
    }
    export class Product {
    }
    export class Result {
    }
    export class Section {
    }
    export class Service {
    }
    export class Show {
    }
    export class Site {
        title?: string | null;
        description?: string | null;
        domain?: {
            id?: string | null;
            fqdn?: string | null;
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
    export type Status = "active" | "inactive" | "pending" | "unknown";
    export class Template {
        title?: string | null;
        description?: string | null;
        path?: string;
        engine?: string;
        content?: string;
        compiled?: string;
    }
    export class User {
    }
    export class Venue {
    }
}
