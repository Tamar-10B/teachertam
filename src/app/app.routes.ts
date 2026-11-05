import { Routes } from '@angular/router';

import { Welcome } from './components/welcome/welcome';
import { Kurikulumebi } from './components/kurikulumebi/kurikulumebi';
import { Page } from './components/page/page';

export const routes: Routes = [

  // მთავარი გვერდი
  {
    path: '',
    component: Welcome
  },

  // ინგლისური კურიკულუმები
  {
    path: 'english/curriculums',
    component: Kurikulumebi,
    data: { subjectId: 'english' }
  },

  // გერმანული კურიკულუმები
  {
    path: 'german/curriculums',
    component: Kurikulumebi,
    data: { subjectId: 'german' }
  },

  // რუსული კურიკულუმები
  {
    path: 'russian/curriculums',
    component: Kurikulumebi,
    data: { subjectId: 'russian' }
  },

  // რუბრიკები
  {
    path: ':subject/rubrics',
    component: Page
  },

  // ინტეგრირებული
  {
    path: ':subject/integrated',
    component: Page
  },

  // შემოქმედებითი
  {
    path: ':subject/creative',
    component: Page
  },

  // გეგმები
  {
    path: ':subject/plans',
    component: Page
  },

  // უცნობი მისამართი
  {
    path: '**',
    redirectTo: ''
  }

];