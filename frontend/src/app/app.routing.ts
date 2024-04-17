import { Routes, RouterModule } from "@angular/router";
import { AppURL } from "./app.url";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { Test1Component } from "./components/test1/test1.component";
import { Test2Component } from "./components/test2/test2.component";

const RouteLists: Routes = [
    { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
    { path: AppURL.Login, component: LoginComponent },
    { path: AppURL.Register, component: RegisterComponent },
    // { path: AppURL.Authen, loadChildren: 'authentication/authentication.module#AuthenticationModule'}
    { path: AppURL.Authen, loadChildren: () => import('./authentication/authentication.module').then(x => x.AuthenticationModule)},
    { path: AppURL.Test1, component: Test1Component},
    { path: AppURL.Test2, component: Test2Component}
    
];

export const AppRouting = RouterModule.forRoot(RouteLists);
