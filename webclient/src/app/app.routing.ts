import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedemptionActivityComponent } from './redemption-activity/redemption-activity.component';
import { SubscriptionActivityComponent } from './subscription-activity/subscription-activity.component';
import { LoginComponent} from './login/login.component';
import { DashBoardComponent} from './dashboard/dashboard.component';
import { FundComponent} from './fund/fund.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'redemptionactivity', component: RedemptionActivityComponent },
  { path: 'subscriptionactivity', component: SubscriptionActivityComponent },
  { path: 'fund', component: FundComponent },
  { path: '**', redirectTo:'' }
];

export const routing = RouterModule.forRoot(routes,{ useHash: true });