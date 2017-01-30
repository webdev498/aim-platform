import { Injectable, Output, EventEmitter } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'primeng/primeng';

import * as _ from 'lodash';
declare let jQuery: any;

import { ApiService } from './api.service';
import { AuthConfig, ModuleConfig, Platform, Menu, MenuItem } from 'app/types';

import { Config as SitesConfig } from 'app/sites/config';
import { Config as DashboardConfig } from 'app/dashboard/config';

export const MODULE_CONFIGS = {
  'sites': SitesConfig,
  'dashboard': DashboardConfig,
}

@Injectable()
export class AppConfig {
  config = {
    name: 'BackOffice',
    title: 'BackOffice',
    copyright: 'Copyright © 2016 Show Management an Active Interest Media company. All Rights Reserved.',
    version: '0.0.0-dev',
    /**
     * Whether to print and alert some log information
     */
    debug: true,
    /**
     * In-app constants
     */
    settings: {
      colors: {
        'white': '#fff',
        'black': '#000',
        'gray-light': '#999',
        'gray-lighter': '#eee',
        'gray': '#666',
        'gray-dark': '#343434',
        'gray-darker': '#222',
        'gray-semi-light': '#777',
        'gray-semi-lighter': '#ddd',
        'brand-primary': '#5d8fc2',
        'brand-success': '#64bd63',
        'brand-warning': '#f0b518',
        'brand-danger': '#dd5826',
        'brand-info': '#5dc4bf'
      },
      screens: {
        'xs-max': 543,
        'sm-min': 544,
        'sm-max': 767,
        'md-min': 768,
        'md-max': 991,
        'lg-min': 992,
        'lg-max': 1199,
        'xl-min': 1200
      },
      navCollapseTimeout: 2500
    },

    /**
     * Application state. May be changed when using.
     * Synced to Local Storage
     */
    state: {
      /**
       * whether navigation is static (prevent automatic collapsing)
       */
      'nav-static': false
    },
  };

  _resizeCallbacks = [];
  _screenSizeCallbacks = {
    xs: {enter: [], exit: []},
    sm: {enter: [], exit: []},
    md: {enter: [], exit: []},
    lg: {enter: [], exit: []},
    xl: {enter: [], exit: []}
  };

  @Output() messageReceived = new EventEmitter();
  public postMessage(message: Message) {
    this.messageReceived.emit(message);
  }

  private _auth: AuthConfig = null;
  get auth(): AuthConfig {
    return this._auth;
  }

  set auth(v: AuthConfig) {
    this._auth = v;
  }

  private _menu: Menu;
  get menu(): Menu {
    if(!this._menu) this._menu = {};
    return this._menu;
  }

  set menu(v: Menu) {
    let menu = v;
    _.map(menu, (items, section) => {
      menu[section] = this.sortMenu(items);
    });
    this._menu = menu;
  }

  private sortMenu(items: MenuItem[]): MenuItem[] {
    let sorted = _.sortBy(items, ['position']);
    _.map(sorted, (item, key) => {
      if(item.children) {
        item.children = this.sortMenu(item.children);
      }
    });
    return sorted;
  }

  private _platform: Platform = null;
  get platform(): Platform {
    return this._platform;
  }

  set platform(v: Platform) {
    let $menu = _.clone(this.menu);
    _.map(v.content.modules, ($module, $moduleName) => {
      if(_.has(MODULE_CONFIGS, $moduleName)) {
        let config = _.get(MODULE_CONFIGS, $moduleName) as ModuleConfig;
        let menu = config.menu;
        // get a copy of all the module menus
        _.map(menu, (menuItem, sectionName) => {
          if(!_.has($menu, sectionName)) _.set($menu, sectionName, []);
          _.set($menu, sectionName, _.concat($menu[sectionName], menuItem));
        });
        console.log('AppConfig:set platform, parent: ', $menu);
      }
    });
    this.menu = $menu;
    this._platform = v;
  }

  constructor() {
    console.log('AppConfig:ctor');
    this._initResizeEvent();
    this._initOnScreenSizeCallbacks();
  }

  getConfig(): Object {
    return this.config;
  }

  isScreen(size): boolean {
    let screenPx = window.innerWidth;
    return (screenPx >= this.config.settings.screens[size + '-min'] || size === 'xs')
      && (screenPx <= this.config.settings.screens[size + '-max'] || size === 'xl');
  }

  getScreenSize(): string {
    let screenPx = window.innerWidth;
    if (screenPx <= this.config.settings.screens['xs-max']) { return 'xs'; }
    if ((screenPx >= this.config.settings.screens['sm-min'])
      && (screenPx <= this.config.settings.screens['sm-max'])) { return 'sm'; }
    if ((screenPx >= this.config.settings.screens['md-min'])
      && (screenPx <= this.config.settings.screens['md-max'])) { return 'md'; }
    if ((screenPx >= this.config.settings.screens['lg-min'])
      && (screenPx <= this.config.settings.screens['lg-max'])) { return 'lg'; }
    if (screenPx >= this.config.settings.screens['xl-min']) { return 'xl'; }
  }

  onScreenSize(size, fn, /* Boolean= */ onEnter): void {
    onEnter = typeof onEnter !== 'undefined' ? onEnter : true;
    if (typeof size === 'object') {
      for (let i = 0; i < size.length; i++) {
        this._screenSizeCallbacks[size[i]][onEnter ? 'enter' : 'exit'].push(fn);
      }
    } else {
      this._screenSizeCallbacks[size][onEnter ? 'enter' : 'exit'].push(fn);
    }

  }

  changeColor(color, ratio, darker): string {
    let pad = function (num, totalChars): number {
      let padVal = '0';
      num = num + '';
      while (num.length < totalChars) {
        num = padVal + num;
      }
      return num;
    };
    // Trim trailing/leading whitespace
    color = color.replace(/^\s*|\s*$/, '');

    // Expand three-digit hex
    color = color.replace(
      /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
      '#$1$1$2$2$3$3'
    );

    // Calculate ratio
    let difference = Math.round(ratio * 256) * (darker ? -1 : 1),
    // Determine if input is RGB(A)
      rgb = color.match(new RegExp('^rgba?\\(\\s*' +
        '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
        '\\s*,\\s*' +
        '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
        '\\s*,\\s*' +
        '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
        '(?:\\s*,\\s*' +
        '(0|1|0?\\.\\d+))?' +
        '\\s*\\)$'
        , 'i')),
      alpha = !!rgb && rgb[4] !== null ? rgb[4] : null,

    // Convert hex to decimal
      decimal = !!rgb ? [rgb[1], rgb[2], rgb[3]] : color.replace(
        /^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,
        function (): string {
          return parseInt(arguments[1], 16) + ',' +
            parseInt(arguments[2], 16) + ',' +
            parseInt(arguments[3], 16);
        }
      ).split(/,/);

    // Return RGB(A)
    return !!rgb ?
    'rgb' + (alpha !== null ? 'a' : '') + '(' +
    Math[darker ? 'max' : 'min'](
      parseInt(decimal[0], 10) + difference, darker ? 0 : 255
    ) + ', ' +
    Math[darker ? 'max' : 'min'](
      parseInt(decimal[1], 10) + difference, darker ? 0 : 255
    ) + ', ' +
    Math[darker ? 'max' : 'min'](
      parseInt(decimal[2], 10) + difference, darker ? 0 : 255
    ) +
    (alpha !== null ? ', ' + alpha : '') +
    ')' :
      // Return hex
      [
        '#',
        pad(Math[darker ? 'max' : 'min'](
          parseInt(decimal[0], 10) + difference, darker ? 0 : 255
        ).toString(16), 2),
        pad(Math[darker ? 'max' : 'min'](
          parseInt(decimal[1], 10) + difference, darker ? 0 : 255
        ).toString(16), 2),
        pad(Math[darker ? 'max' : 'min'](
          parseInt(decimal[2], 10) + difference, darker ? 0 : 255
        ).toString(16), 2)
      ].join('');
  }

  lightenColor(color, ratio): any {
    return this.changeColor(color, ratio, false);
  }

  darkenColor(color, ratio): any {
    return this.changeColor(color, ratio, true);
  }

  max(array): any {
    return Math.max.apply(null, array);
  }

  min(array): any {
    return Math.min.apply(null, array);
  }

  _initResizeEvent(): void {
    let resizeTimeout;

    jQuery(window).on('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        jQuery(window).trigger('sn:resize');
      }, 100);
    });
  }

  _initOnScreenSizeCallbacks(): void  {
    let resizeTimeout,
      prevSize = this.getScreenSize();

    jQuery(window).resize(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        let size = this.getScreenSize();
        if (size !== prevSize) { // run only if something changed
          // run exit callbacks first
          this._screenSizeCallbacks[prevSize].exit.forEach((fn) => {
            fn(size, prevSize);
          });
          // run enter callbacks then
          this._screenSizeCallbacks[size].enter.forEach((fn) => {
            fn(size, prevSize);
          });
          console.log('screen changed. new: ' + size + ', old: ' + prevSize);
        }
        prevSize = size;
      }, 100);
    });
  }
}

