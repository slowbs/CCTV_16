import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
