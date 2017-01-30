import { Component } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html'
})
export class DashboardComponent {
  constructor(private userService: UserService) { }
}
