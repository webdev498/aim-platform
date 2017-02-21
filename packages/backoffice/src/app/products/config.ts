import { ModuleConfig, Menu } from 'app/types';

export const Config: ModuleConfig = {
  menu: {
    'main': [{
      title: 'Products',
      //routerLink: ['sites'],
      iconClass: 'fa fa-cubes', // TODO change later
      collapsed: false,
      children: [
        {
          title: 'All Products',
          routerLink: ['products'],
          position: 0,
        }
      ]
    }],
  }
};
