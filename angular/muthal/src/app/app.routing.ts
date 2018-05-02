import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
//   { path: 'currency', component: CurrencyComponent },
//   { path: 'movie', component: MovieComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true
});
