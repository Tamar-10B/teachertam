import { Routes } from '@angular/router';

import { Welcome } from './components/welcome/welcome';
import { Page } from './components/page/page';

export const routes: Routes = [

  // Welcome Page
  {
    path: '',
    component: Welcome
  },

  // English
  {
    path: 'english/curriculums',
    component: Page,
    data: { title: 'ინგლისური - კურიკულუმები' }
  },
  {
    path: 'english/rubrics',
    component: Page,
    data: { title: 'ინგლისური - რუბრიკები' }
  },
  {
    path: 'english/integrated',
    component: Page,
    data: { title: 'ინგლისური - ინტეგრირებული' }
  },
  {
    path: 'english/creative',
    component: Page,
    data: { title: 'ინგლისური - შემოქმედებითი' }
  },
  {
    path: 'english/plans',
    component: Page,
    data: { title: 'ინგლისური - გეგმები' }
  },

  // German
  {
    path: 'german/curriculums',
    component: Page,
    data: { title: 'გერმანული - კურიკულუმები' }
  },
  {
    path: 'german/rubrics',
    component: Page,
    data: { title: 'გერმანული - რუბრიკები' }
  },
  {
    path: 'german/integrated',
    component: Page,
    data: { title: 'გერმანული - ინტეგრირებული' }
  },
  {
    path: 'german/creative',
    component: Page,
    data: { title: 'გერმანული - შემოქმედებითი' }
  },
  {
    path: 'german/plans',
    component: Page,
    data: { title: 'გერმანული - გეგმები' }
  },

  // Russian
  {
    path: 'russian/curriculums',
    component: Page,
    data: { title: 'რუსული - კურიკულუმები' }
  },
  {
    path: 'russian/rubrics',
    component: Page,
    data: { title: 'რუსული - რუბრიკები' }
  },
  {
    path: 'russian/integrated',
    component: Page,
    data: { title: 'რუსული - ინტეგრირებული' }
  },
  {
    path: 'russian/creative',
    component: Page,
    data: { title: 'რუსული - შემოქმედებითი' }
  },
  {
    path: 'russian/plans',
    component: Page,
    data: { title: 'რუსული - გეგმები' }
  },

  // Unknown routes
  {
    path: '**',
    redirectTo: ''
  }

];