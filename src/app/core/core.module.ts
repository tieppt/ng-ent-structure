import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { coreRoutes } from './constants/routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes),
    HttpClientModule, // only import once to prevent multiple instances of HttpClient service.
  ]
})
export class CoreModule { }
