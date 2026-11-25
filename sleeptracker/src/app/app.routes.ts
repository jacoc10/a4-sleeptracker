import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then( m => m.HomePage)
      },
      {
        path: 'log',
        loadComponent: () => import('./log/log.page').then( m => m.LogPage)
      },
      {
        path: 'logged',
        loadComponent: () => import('./logged/logged.page').then( m => m.LoggedPage)
      },
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
]
