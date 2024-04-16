import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/bs-dropdown.module';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';



@NgModule({
  declarations: [
    AuthNavbarComponent,
    AuthSidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AuthNavbarComponent,
    AuthSidebarComponent
  ]
})
export class SharedsModule { }
