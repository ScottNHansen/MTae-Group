import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// wijmo components
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartAnimationModule } from 'wijmo/wijmo.angular2.chart.animation';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RedemptionActivityComponent } from './redemption-activity/redemption-activity.component';
import { SubscriptionActivityComponent } from './subscription-activity/subscription-activity.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { FundComponent } from './fund/fund.component';

import { LoginComponent } from './login/login.component';

import { PageHeaderComponent } from './common/page-header/page-header.component';

import { DataService } from './services/data.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    WjCoreModule,
    WjGridModule,
    WjChartModule,
    WjChartAnimationModule,
    WjInputModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RedemptionActivityComponent,
    SubscriptionActivityComponent,
    LoginComponent,
    DashBoardComponent,
    FundComponent,
    PageHeaderComponent
  ],
  providers: [
    DataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
