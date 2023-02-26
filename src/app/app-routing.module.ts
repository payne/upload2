import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadTableComponent} from "./upload-table/upload-table.component";

const routes: Routes = [
  { path: 'upload-table', component: UploadTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
