import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  {
    path: 'feature-a',
    loadChildren: () => import('@ng-ent/feature-a/feature-a.module').then(m => m.FeatureAModule)
  },
  {
    path: 'feature-b',
    loadChildren: () => import('@ng-ent/feature-b/feature-b.module').then(m => m.FeatureBModule)
  }
];
