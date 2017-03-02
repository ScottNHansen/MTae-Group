import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import * as wijmo from 'wijmo/wijmo';
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcAnimation from 'wijmo/wijmo.chart.animation';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { ActivitySummaryByMonth } from '../business/activitySummaryByMonth';
import { PageHeaderComponent } from '../common/page-header/page-header.component';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashBoardComponent implements OnInit, AfterViewInit {

    @ViewChild(PageHeaderComponent) pageHeader: PageHeaderComponent;
    @ViewChild('animation') animation: wjcAnimation.ChartAnimation;

    private duration: number = 500;
    private easing: wjcAnimation.Easing = wjcAnimation.Easing.Linear;
    private data: wijmo.ObservableArray;
    private errorMessage: string;

    private activities: ActivitySummaryByMonth[];
    // private data2: any[] = [{Period: new Date('2016-01'),Subscriptions:800000,Redemptions:400000},
    //                         {Period: new Date('2016-02'),Subscriptions:400000,Redemptions:200000},
    //                         {Period: new Date('2016-03'),Subscriptions:200000,Redemptions:400000},
    //                         {Period: new Date('2016-04'),Subscriptions:1200000,Redemptions:600000},
    //                         {Period: new Date('2016-05'),Subscriptions:800000,Redemptions:1200000},
    //                         {Period: new Date('2016-06'),Subscriptions:100000,Redemptions:100000},
    //                         {Period: new Date('2016-07'),Subscriptions:1400000,Redemptions:600000},
    //                         {Period: new Date('2016-08'),Subscriptions:700000,Redemptions:200000},
    //                         {Period: new Date('2016-09'),Subscriptions:400000,Redemptions:700000},
    //                         {Period: new Date('2016-10'),Subscriptions:300000,Redemptions:600000},
    //                         {Period: new Date('2016-11'),Subscriptions:200000,Redemptions:800000},
    //                         {Period: new Date('2016-12'),Subscriptions:700000,Redemptions:400000}
    //                         ];

    private _groupWidth = '70%';

    itemsSource: any[];
    @ViewChild('chart') chart: wjcChart.FlexChart;

    constructor(protected DataService: DataService, private userService: UserService) {
        console.log('Constructor:dashboard');
    }

    ngOnInit() {
        console.log('dashboard : OnInit');
        this.userService.checkCredentials();
    }
    ngAfterViewInit() {
        this.pageHeader.activePageTitle = 'Dashboard';
        this.pageHeader.pageIcon = 'fa fa-chevron-circle-down';

        this.chart.legend.position = wjcChart.Position.Bottom;
        this.chart.header = 'Monthly Activity';

        let s1 = new wjcChart.Series();
        s1.name = 'Subscriptions';
        s1.bindingX = 'Period';
        s1.binding = 'Subscriptions';
        s1.chartType = wjcChart.ChartType.Column;
        this.chart.series.push(s1);

        let s2 = new wjcChart.Series();
        s2.name = 'Redemptions';
        s2.bindingX = 'Period';
        s2.binding = 'Redemptions';
        this.chart.series.push(s2);

        // this.chart.itemsSource = this.data2;
        this.refresh();

        console.log(this.chart.series);
    }
    refresh() {
        this.chart.itemsSource = null;
        this.DataService.getActivtySummaryByMonth()
            .subscribe(result => this.activities = result,
            error => this.errorMessage = <any>error,
            () => {

                this.data = new wijmo.ObservableArray(this.activities);
                this.chart.itemsSource = this.data;
                // console.log(this.activities[0]);
                // console.log(this.data.items[0]);
            });
    }
}
