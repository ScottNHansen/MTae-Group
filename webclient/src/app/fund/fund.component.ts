import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import * as wijmo from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGrid2 from 'wijmo/wijmo.angular2.grid';
import * as wjcXlsx from 'wijmo/wijmo.grid.xlsx';
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcAnimation from 'wijmo/wijmo.chart.animation';

// import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
// import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
// import { WjChartAnimationModule } from 'wijmo/wijmo.angular2.chart.animation';

import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { SubscriptionActivityView } from '../business/subscription-activity-View';
import { ActivitySummaryByMonth } from '../business/activitySummaryByMonth';
import { ChartSeries } from '../business/ChartSeries';
import { InstrumentAnalytic, InstrumentAnalyticType } from '../business/instrumentAnalytic';
import { Instrument } from '../business/instrument';
import { PageHeaderComponent } from '../common/page-header/page-header.component';

@Component({
    selector: 'fund',
    styles: [String(require('./fund.component.css'))],
    templateUrl: './fund.component.html'
})

export class FundComponent implements OnInit, AfterViewInit {

    @ViewChild(PageHeaderComponent) pageHeader: PageHeaderComponent;
    @ViewChild('animation') animation: wjcAnimation.ChartAnimation;

    private activeRoute: string;


    private symbol: string;
    private instrument: Instrument = new Instrument();
    private duration: number = 2000;
    private easing: wjcAnimation.Easing = wjcAnimation.Easing.Linear;
    private errorMessage: string;

    @ViewChild('chart') chart: wjcChart.FlexChart;

    constructor(protected DataService: DataService, private userService: UserService) {

    }

    ngOnInit() {
        // this.userService.checkCredentials();

        // let previousPoint:ChartSeries;
        // let year:number = 2015;
        // let month:number = 1
        // for(let i = 0; i < 100; i++) {
        //     month += 1;
        //     if (month > 12) {
        //         year+=1;
        //         month=1;
        //     }
        //     let chartSeries:ChartSeries = new ChartSeries();
        //     chartSeries.Period=new Date(year,month);

        //     if (!previousPoint) {
        //         chartSeries.Value = 100;           
        //     }
        //     else {
        //         chartSeries.Value = previousPoint.Value + this.generateRandomInteger(-10,10);
        //     }

        //     this.series.push(chartSeries);

        //     previousPoint = chartSeries;

        // }
    }
    ngAfterViewInit() {
        this.pageHeader.pageIcon = 'fa fa-chevron-circle-down'

        this.chart.legend.position = wjcChart.Position.Bottom;

        this.animation.animationMode = wjcAnimation.AnimationMode.Point;
        this.animation.duration = 1500;

        this.symbol = 'RNSIX';
        this.instrument = new Instrument();
        this.instrument.Name = 'RiverNorth Strategic Income';

        this.pageHeader.activePageTitle = 'Fund Performance - ' + this.instrument.Name;
        this.activeRoute = 'Overview'

        this.createChart('Investment Growth of $100', InstrumentAnalyticType.InvestmentGrowth, ['RNSIX', 'LBUSTRUU'])

    }
    menuClick(route: string) {
        this.activeRoute = route;
        switch (route) {
            case 'InvestmentGrowth':
                this.createChart('Investment Growth of $100', InstrumentAnalyticType.InvestmentGrowth, ['RNSIX', 'LBUSTRUU'])
                break;
        }
        // this.createChart('Investment Growth of $100', InstrumentAnalyticType.InvestmentGrowth, ['GFY', 'GIM'])

    }
    isActiveRoute(route: string) {
        console.log('isActiveRoute - ' + route + '(' + this.activeRoute + ')')
        return route === this.activeRoute;
    }
    refresh(symbol: string, instrumentAnalyticType: InstrumentAnalyticType) {

    }

    createChart(title: string, instrumentAnalyticType: InstrumentAnalyticType, symbols: string[]) {
        this.chart.series.clear();

        this.chart.header = title;

        for (let symbol of symbols) {
            let series: wjcChart.Series = this.addSeries(this.chart, symbol, 'TradeDate', 'Value', wjcChart.ChartType.Line);

            let instrumentAnalytics: InstrumentAnalytic[];
            let data: wijmo.ObservableArray;
            this.DataService.getInstrumentAnalytics(symbol, instrumentAnalyticType)
                .subscribe(result => instrumentAnalytics = result,
                error => this.errorMessage = <any>error,
                () => {
                    data = new wijmo.ObservableArray(instrumentAnalytics);
                    series.itemsSource = data;
                    // this.chart.itemsSource = data;
                });

        }
    }
    addSeries(chart: wjcChart.FlexChart, name: string, bindingX: string, binding: string, chartType: wjcChart.ChartType): wjcChart.Series {
        let s1 = new wjcChart.Series();
        s1.name = name;
        s1.bindingX = bindingX;
        s1.binding = binding;
        s1.chartType = chartType
        chart.series.push(s1);

        return s1;

    }
    generateRandomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}