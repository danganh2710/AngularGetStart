import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'welcome', component: WelcomeComponent }
    ])
  ],
  declarations: [
    WelcomeComponent
  ],
  exports:[
    WelcomeComponent
  ]

})
export class WelcomeModule { }
