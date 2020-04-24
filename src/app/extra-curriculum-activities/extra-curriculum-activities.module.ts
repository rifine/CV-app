import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtraCurriculumActivitiesPageRoutingModule } from './extra-curriculum-activities-routing.module';

import { ExtraCurriculumActivitiesPage } from './extra-curriculum-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtraCurriculumActivitiesPageRoutingModule
  ],
  declarations: [ExtraCurriculumActivitiesPage]
})
export class ExtraCurriculumActivitiesPageModule {}
