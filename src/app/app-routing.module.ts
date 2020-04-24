import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // tslint:disable-next-line: max-line-length
  { path: 'personal-profile', loadChildren: () => import('./personal-profile/personal-profile.module').then( m => m.PersonalProfilePageModule)},
  {
    path: 'personal-profile',
    loadChildren: () => import('./personal-profile/personal-profile.module').then( m => m.PersonalProfilePageModule)
  },
  {
    path: 'technical-skills',
    loadChildren: () => import('./technical-skills/technical-skills.module').then( m => m.TechnicalSkillsPageModule)
  },
  {
    path: 'soft-skills',
    loadChildren: () => import('./soft-skills/soft-skills.module').then( m => m.SoftSkillsPageModule)
  },
  {
    path: 'personal-project',
    loadChildren: () => import('./personal-project/personal-project.module').then( m => m.PersonalProjectPageModule)
  },
  {
    path: 'team-project',
    loadChildren: () => import('./team-project/team-project.module').then( m => m.TeamProjectPageModule)
  },
  {
    path: 'extra-curriculum-activities',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./extra-curriculum-activities/extra-curriculum-activities.module').then( m => m.ExtraCurriculumActivitiesPageModule)
  },
  {
    path: 'contact-information',
    loadChildren: () => import('./contact-information/contact-information.module').then( m => m.ContactInformationPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
