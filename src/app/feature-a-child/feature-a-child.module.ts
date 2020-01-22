import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureAChildRoutes } from './constants/routes';
import { FeatureAChildComponent } from './feature-a-child.component';

@NgModule({
  declarations: [FeatureAChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(featureAChildRoutes),
  ]
})
export class FeatureAChildModule { }
