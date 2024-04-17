import { Component } from '@angular/core';
declare const App : any;

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {

  ngOnInit(): void {
    App.initialLoadPage();
  }
}
