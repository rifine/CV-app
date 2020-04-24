import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExtraCurriculumActivitiesPage } from './extra-curriculum-activities.page';

describe('ExtraCurriculumActivitiesPage', () => {
  let component: ExtraCurriculumActivitiesPage;
  let fixture: ComponentFixture<ExtraCurriculumActivitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraCurriculumActivitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtraCurriculumActivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
