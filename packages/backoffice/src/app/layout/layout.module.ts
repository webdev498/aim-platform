import 'jquery-slimscroll';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { TooltipModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { GrowlModule, MessagesModule } from 'primeng/primeng';

import { UiModule } from 'lib/ui';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Sidebar } from './sidebar/sidebar.component';
import { Navbar } from './navbar/navbar.component';
import { ChatSidebar } from './chat-sidebar/chat-sidebar.component';
import { ChatMessage } from './chat-sidebar/chat-message/chat-message.component';
import { SearchPipe } from './pipes/search.pipe';
import { NotificationLoad } from './notifications/notifications-load.directive';
import { Notifications } from './notifications/notifications.component';


@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    GrowlModule, MessagesModule,
    UiModule,
    FormsModule,
    LayoutRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    LayoutComponent,
    Sidebar,
    Navbar,
    ChatSidebar,
    SearchPipe,
    Notifications,
    NotificationLoad,
    ChatMessage
  ],
})
export class LayoutModule {
}
