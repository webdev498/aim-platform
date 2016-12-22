import { Component, OnInit } from '@angular/core';
import {PlatformsService} from "./platforms.service";

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  constructor(public platforms: PlatformsService) { }

  ngOnInit() {
  }

}
