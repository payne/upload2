import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadTableComponent} from "./upload-table/upload-table.component";
import {AboutComponent} from "./about/about.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'upload-table', component: UploadTableComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
