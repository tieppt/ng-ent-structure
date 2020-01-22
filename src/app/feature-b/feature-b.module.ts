import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureBRoutes } from './constants/routes';
import { FeatureBComponent } from './feature-b.component';

@NgModule({
  declarations: [FeatureBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(featureBRoutes),
  ]
})
export class FeatureBModule { }
