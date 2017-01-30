import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppConfig } from 'app/app.config';
import { UserService } from 'app/user.service';
import { PlatformsService } from "./platforms.service";

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['platforms.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'platforms-page app'
  }
})
export class PlatformsComponent implements OnInit {


  platforms: any[];
  constructor(private platformsService: PlatformsService, private userService: UserService, private appConfig: AppConfig, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      if(params['select']) {
        this.platformsService.getPlatforms().subscribe(platforms => {
          this.platforms = platforms;
          console.log('PlatformsComponent, platforms', this.platforms);
        });
      } else {
        let user = this.userService.user;
        if(user.defaults.platform) {
          this.platformsService.getPlatform(user.defaults.platform).subscribe(platform => {
            let routePath = ['/app', platform.id];
            if(user.platforms[platform.id] && user.platforms[platform.id].defaults && user.platforms[platform.id].defaults.module) {
              routePath.push(user.platforms[platform.id].defaults.module);
            }
            this.router.navigate(routePath);
          },
          (err) => {
            // if we get an error, load all platforms
            this.platformsService.getPlatforms().subscribe(platforms => {
              this.platforms = platforms;
              console.log('PlatformsComponent, platforms', this.platforms);
            });
          },
          () => {
            // do nothing on complete
          })
        }
      }
    });
  }

  isDefault(platform: any) {
    // need to lookup the users default platform
    return true;
  }

}
