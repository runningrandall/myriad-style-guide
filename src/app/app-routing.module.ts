import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypographyComponent } from './typography/typography.component';
import { ColorsComponent } from './colors/colors.component';
import { OverviewComponent } from './overview/overview.component';
import { LayoutComponent } from './layout/layout.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
      path: 'typography',
      component: TypographyComponent,
      data: {
          title: 'Typography'
      }
  },
  {
      path: 'colors',
      component: ColorsComponent,
      data: {
          title: 'Colors'
      }
  },
  {
      path: 'overview',
      component: OverviewComponent,
      data: {
          title: 'Myriad Style Guide'
      }
  },
  {
      path: 'layout',
      component: LayoutComponent,
      data: {
          title: 'Layout'
      }
  },
  {
      path: 'get-started',
      component: GetStartedComponent,
      data:{
          title: 'Getting Started'
      }
  },
  {
      path: 'components',
      component: ComponentsComponent,
      data:{
          title: 'Components'
      }
  },
  {
      path: '',
      redirectTo: '/overview',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [
    TypographyComponent,
    ColorsComponent,
    OverviewComponent,
    LayoutComponent,
    GetStartedComponent,
    ComponentsComponent
];
