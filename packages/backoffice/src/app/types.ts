export class MenuItem {
  title: string;
  routerLink?: any[];
  iconClass?: string;
  position?: number;
  collapsed?: boolean;
  children?: MenuItem[];
}

export class Menu {
  [sectionName: string]: MenuItem[];
}

export class ModuleConfig {
  position?: number;
  menu?: Menu;

  // these should be set by the ApiSer
  id?: string; //

  // additional properties
  [propName: string]: any;
}

export class Module {
  active: boolean;
  id: string;
  title: string;

  // additional properties
  [propName: string]: any;
}

export class ModuleDict {
  // list of
  [moduleName: string]: Module;
}

export class Platform {
  id: string;
  title?: string;
  content: {
    modules: ModuleDict,
    [propName: string]: any;
  }
  [propName: string]: any;
}