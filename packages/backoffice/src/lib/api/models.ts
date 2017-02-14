export type Status = "approved" | "draft" | "pending" | "revision" | "deleted" | "rejected";
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
export class Auth {
    [name: string]: any;
    id?: string; // uuid
    status?: Status;
    revisionId?: string; // uuid
    platformId: string; // uuid
    createdAt?: number; // timestamp
    createdById?: string; // uuid
    modifiedAt?: number; // timestamp
    modifiedById?: string; // uuid
    deletedAt?: number; // timestamp
    deletedById?: string; // uuid
    content: {
    };
    link?: Link;
}
export class AuthConfig {
    type?: string;
}

export class Data<T> {
    [name: string]: any;
    id?: string; // uuid
    status?: Status;
    revisionId?: string; // uuid
    platformId: string; // uuid
    module?: string;
    moduleId: string; // uuid
    dataType?: string;
    dataTypeId: string; // uuid
    createdAt?: number; // timestamp
    createdById?: string; // uuid
    modifiedAt?: number; // timestamp
    modifiedById?: string; // uuid
    deletedAt?: number; // timestamp
    deletedById?: string; // uuid
    content: T;
    clonedFromId?: string; // uuid
    link?: Link;
    autoloaded: any[];
}
export class DataType {
    [name: string]: any;
    id?: string | null; // uuid
    status?: Status;
    revisionId?: string | null; // uuid
    platformId: string | null; // uuid
    module?: string | null;
    moduleId: string | null; // uuid
    dataType?: string | null;
    createdAt?: number | null; // timestamp
    createdById?: string | null; // uuid
    modifiedAt?: number | null; // timestamp
    modifiedById?: string | null; // uuid
    deletedAt?: number | null; // timestamp
    deletedById?: string | null; // uuid
    content: DataTypeContent;
}
export class DataTypeContent {
    formId?: string; // uuid
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
export class Platform {
    [name: string]: any;
    id?: string; // uuid
    status?: Status;
    revisionId?: string; // uuid
    createdAt?: number; // timestamp
    createdById?: string; // uuid
    modifiedAt?: number; // timestamp
    modifiedById?: string; // uuid
    deletedAt?: number; // timestamp
    deletedById?: string; // uuid
    content: {
        modules?: {
        };
    };
}
export class User {
    [name: string]: any;
    id?: string; // uuid
    status?: Status;
    revisionId?: string; // uuid
    authId?: string; // uuid
    createdAt?: number; // timestamp
    createdById?: string; // uuid
    modifiedAt?: number; // timestamp
    modifiedById?: string; // uuid
    deletedAt?: number; // timestamp
    deletedById?: string; // uuid
    content: UserData;
}
export class UserData {
    email: string;
    firstName?: string;
    lastName?: string;
    prefix?: string;
    suffix?: string;
    lastLoggedInAt?: string; // date-time
    defaults?: {
    };
    notifications?: any[];
    platforms?: {
    };
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
export class Link {
    from?: LinkItems;
    to?: LinkItems;
}
export class LinkItems {
    auth?: string /* uuid */ [];
    data?: {
    };
    dataType?: string /* uuid */ [];
    module?: string /* uuid */ [];
    platform?: string /* uuid */ [];
    user?: string /* uuid */ [];
}
export class ListNested {
    title: string;
    alias?: string[];
    order?: number;
}
export class Measurement {
    type?: "length" | "weight" | "volume";
    title?: string;
    value: number;
    unit: string;
    source?: {
        value?: number;
        unit?: string;
    };
}
export class Module {
    [name: string]: any;
    id?: string; // uuid
    status?: Status;
    revisionId?: string; // uuid
    platformId: string; // uuid
    module?: string;
    createdAt?: number; // timestamp
    createdById?: string; // uuid
    modifiedAt?: number; // timestamp
    modifiedById?: string; // uuid
    deletedAt?: number; // timestamp
    deletedById?: string; // uuid
    content: {
    };
}
export class ModulesItemValue {
    id: string;
    active: boolean;
    title?: string;
    dataTypes?: {
    };
}

export namespace Forms {
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
}

export namespace Companies {
    export class Company {
        title: string;
        primaryContact?: {
        };
        primaryOffice?: Office;
        contacts?: {
        }[];
        offices?: Office[];
        /**
         * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
         */
        channels?: KeyValueList;
    }
    export class Contact {
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
    export class Office {
        title?: string;
        primaryContact?: {
        };
        contacts?: {
        }[];
        address?: Address;
        /**
         * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
         */
        channels?: KeyValueList;
    }
}

export namespace Blogs {
    export class Blog {
        title: string;
        bodyFormat: string;
        body: string;
        render?: string;
    }
}
export namespace Boats {
    export class Boat {
        offeredById?: string;
        address?: Address;
        description?: string;
        categories?: string[];
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
        length: {
            overall?: Measurement;
            beam?: Measurement;
            draft?: Measurement;
            other?: Measurement[];
        };
        weight?: {
            other?: Measurement[];
        };
        volume?: {
            other?: Measurement[];
        };
    }
}

export namespace Maps {
    export class Location {
    }
    export class Map {
    }
    export class Section {
    }
}
export namespace Media {
    export class Gallery {
    }
    export class Media {
    }
}
export namespace Pages {
    export class Page {
    }
}
export namespace Products {
    export class Product {
    }
}
export namespace Services {
    export class Service {
    }
}
export namespace Shows {
    export class Show {
    }
    export class Venue {
    }
}
export namespace Sites {
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
        primaryDomain?: string;
        domains?: string[];
        primaryTemplateId?: string;
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
    export class Template {
        title?: string;
        description?: string;
        path?: string;
        engine?: string;
        content?: string;
        compiled?: string;
    }
}

export namespace Taxonomies {
    export class Taxonomy {
        [name: string]: any;
        title?: string;
        description?: string;
        /**
         * This enabled the list to be loaded into autocomplete system endpoint
         */
        autocomplete?: boolean;
        listType?: "system" | "flat" | "nested";
    }
}

export namespace Users {
    export class Notification {
    }
}

