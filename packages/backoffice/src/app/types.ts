export interface MenuItem {
  title: string;
  routerLink?: any[];
  iconClass?: string;
  position?: number;
  collapsed?: boolean;
  children?: MenuItem[];
}

export interface Menu {
  [sectionName: string]: MenuItem[];
}

export interface ModuleConfig {
  position?: number;
  menu?: Menu;

  // these should be set by the ApiSer
  id?: string; //

  // additional properties
  [propName: string]: any;
}

export interface Module {
  active: boolean;
  id: string;
  title: string;

  // additional properties
  [propName: string]: any;
}

export interface ModuleDict {
  // list of
  [moduleName: string]: Module;
}

export interface Platform {
  id: string;
  title?: string;
  content: {
    modules: ModuleDict,
    [propName: string]: any;
  }
  [propName: string]: any;
}

export interface AuthConfig {
  type: string;
  value: any;
}
