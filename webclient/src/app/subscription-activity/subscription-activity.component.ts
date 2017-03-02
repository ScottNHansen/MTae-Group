import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import * as wijmo from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcXlsx from 'wijmo/wijmo.grid.xlsx';
import * as wjcGrid2 from 'wijmo/wijmo.angular2.grid';

import { DataService } from '../services/data.service';
import { SubscriptionActivityView } from '../business/subscription-activity-View';
import { PageHeaderComponent } from '../common/page-header/page-header.component';

@Component({
    selector: 'subscription-activity',
    templateUrl: './subscription-activity.component.html'
})

export class SubscriptionActivityComponent implements OnInit, AfterViewInit {

    @ViewChild('flex') flex: wjcGrid2.WjFlexGrid;
    @ViewChild(PageHeaderComponent) pageHeader: PageHeaderComponent;

    private title: string = 'subscription Activity';

    private activities: SubscriptionActivityView[];
    private data: wijmo.ObservableArray;
    private errorMessage: string;

    private _filter = '';
    private _toFilter: any;
    private _thisFilterFunction: wijmo.IPredicate;

    constructor(protected DataService: DataService) {
        console.log('Constructor:SubscriptionnActivity');
    }

    ngOnInit() {
        console.log('subscription Activity : OnInit');

        this.flex.headersVisibility = wjcGrid.HeadersVisibility.Column;
        this.flex.selectionMode = wjcGrid.SelectionMode.Row;

        // this.flex.rows.defaultSize = 16;
        // this.flex.columnHeaders.rows.defaultSize = 18;
        // this.flex.itemFormatter = this.itemFormatter;
        this.flex.isReadOnly = true;
        this.flex.selectionMode = wjcGrid.SelectionMode.ListBox;
        this._thisFilterFunction = this._filterFunction.bind(this);

        this.refresh();
    }
    ngAfterViewInit() {
        this.pageHeader.activePageTitle = 'Subscription Activity';
        this.pageHeader.pageIcon = 'fa fa-chevron-circle-up';
    }
    refreshButtonClick() {
        this.refresh();
    }

    refresh() {
        this.flex.itemsSource = null;
        this.DataService.getSubscriptionActivities()
            .subscribe(activities => this.activities = activities,
            error => this.errorMessage = <any>error,
            () => {
                this.data = new wijmo.ObservableArray(this.activities);
                this.flex.itemsSource = this.data;
                // console.log(this.activities[0]);
                // console.log(this.data.items[0]);
            });
    }

    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        if (this._filter !== value) {
            this._filter = value;
            this._applyFilter();
        }
    }
    // ICollectionView filter function
    private _filterFunction(item: any) {
        let f = this.filter;
        if (f && item) {

            // split string into terms to enable multi-field searches such as 'us gadget red'
            let terms = f.toUpperCase().split(' ');

            // look for any term in any string field
            for (let i = 0; i < terms.length; i++) {
                let termFound = false;
                for (let key in item) {
                    if (wijmo.isString(item[key]) && item[key].toUpperCase().indexOf(terms[i]) > -1) {
                        termFound = true;
                        break;
                    }
                }

                // fail if any of the terms is not found
                if (!termFound) {
                    return false;
                }
            }
        }

        // include item in view
        return true;
    }

    // apply filter (applied on a 500 ms timeOut)
    protected _applyFilter() {
        if (this._toFilter) {
            clearTimeout(this._toFilter);
        }
        let self = this;
        this._toFilter = setTimeout(function () {
            self._toFilter = null;
            if (self.flex) {
                let cv = self.flex.collectionView;
                if (cv) {
                    if (cv.filter != self._thisFilterFunction) {
                        cv.filter = self._thisFilterFunction;
                    } else {
                        cv.refresh();
                    }
                }
            }
        }, 300);
    }
    protected exportExcelClick() {
        wjcXlsx.FlexGridXlsxConverter.save(this.flex, { includeColumnHeaders: true, includeCellStyles: true }, 'FlexGrid.xlsx');
    }

}
