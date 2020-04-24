import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraCurriculumActivitiesPage } from './extra-curriculum-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraCurriculumActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraCurriculumActivitiesPageRoutingModule {}
