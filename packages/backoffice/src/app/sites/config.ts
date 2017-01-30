import { ModuleConfig, Menu } from 'app/types';

export const Config: ModuleConfig = {
  menu: {
    'main': [{
      title: 'Sites',
      //routerLink: ['sites'],
      iconClass: 'fa fa-sitemap',
      collapsed: false,
      children: [
        {
          title: 'Templates',
          routerLink: ['sites'],
        },
        {
          title: 'All Sites',
          routerLink: ['sites'],
          position: 0,
        },
        {
          title: 'Pages',
          routerLink: ['sites'],
        }
      ]
    }],
  }
};
