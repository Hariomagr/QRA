import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NominateComponent } from './nominate/nominate.component';
import { ReviewComponent } from './review/review.component';
import { ApprovedComponent } from './approved/approved.component';
import { WithdrawnComponent } from './withdrawn/withdrawn.component';
const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nominate',
    component: NominateComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'approved',
    component: ApprovedComponent
  },
  {
    path: 'withdrawn',
    component: WithdrawnComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent, LoginComponent, NominateComponent, ReviewComponent, ApprovedComponent, WithdrawnComponent
]
