import { ModuleConfig } from 'app/types';

export const Config: ModuleConfig = {
  position: 0,
  menu: {
    'main': [
      {
        title: 'Dashboard',
        //routerLink: ['dashboard'],
        iconClass: 'fa fa-desktop',
        position: 0,
        children: [
          {
            title: 'Graphs',
            //iconClass: 'fa'
            routerLink: ['dashboard'],
            position: 1,
          },
          {
            title: 'Widgets',
            iconClass: 'fa fa-desktop',
            routerLink: ['dashboard'],
            position: 0,
          },
        ]
      },
    ]
  },
}
