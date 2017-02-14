import { ModuleConfig, Menu } from 'app/types';

export const Config: ModuleConfig = {
  menu: {
    'main': [{
      title: 'Companies',
      //routerLink: ['sites'],
      iconClass: 'fa fa-sitemap', // TODO change later
      collapsed: false,
      children: [
        {
          title: 'All Companies',
          routerLink: ['companies'],
          position: 0,
        }
      ]
    }],
  }
};
