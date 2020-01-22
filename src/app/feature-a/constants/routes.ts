import { Routes } from '@angular/router';
import { FeatureAComponent } from '../feature-a.component';

export const featureARoutes: Routes = [{
  path: '',
  component: FeatureAComponent,
  children: [
    {
      path: 'child',
      loadChildren: () => import('@ng-ent/feature-a-child/feature-a-child.module').then(m => m.FeatureAChildModule)
    }
  ]
}];
