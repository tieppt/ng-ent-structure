import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureARoutes } from './constants/routes';
import { FeatureAComponent } from './feature-a.component';

@NgModule({
  declarations: [FeatureAComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(featureARoutes),
  ]
})
export class FeatureAModule { }
