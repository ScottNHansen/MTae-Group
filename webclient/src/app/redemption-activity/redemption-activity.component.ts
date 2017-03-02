import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import * as wijmo from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGrid2 from 'wijmo/wijmo.angular2.grid';
import * as wjcXlsx from 'wijmo/wijmo.grid.xlsx';

import { DataService } from '../services/data.service';
import { RedemptionActivityView } from '../business/redemptionActivityView';
import { PageHeaderComponent } from '../common/page-header/page-header.component';

@Component({
    selector: 'redemption-activity',
    templateUrl: './redemption-activity.component.html'
})

export class RedemptionActivityComponent implements OnInit, AfterViewInit {

    @ViewChild('flex') flex: wjcGrid2.WjFlexGrid;
    @ViewChild(PageHeaderComponent) pageHeader: PageHeaderComponent;

    private title: string = 'Redemption Activity';

    private activities: RedemptionActivityView[];
    private data: wijmo.ObservableArray;
    private errorMessage: string;

    private _filter = '';
    private _toFilter: any;
    private _thisFilterFunction: wijmo.IPredicate;

    constructor(protected DataService: DataService) {
        console.log('Constructor:RedmeptionActivity');
    }

    ngOnInit() {
        console.log('Redemption Activity : OnInit');

        this.flex.headersVisibility = wjcGrid.HeadersVisibility.Column;
        this.flex.selectionMode = wjcGrid.SelectionMode.Row;

        // this.flex.rows.defaultSize = 16;
        // this.flex.columnHeaders.rows.defaultSize = 18;
        this.flex.itemFormatter = this.itemFormatter;
        this.flex.isReadOnly = true;
        this.flex.selectionMode = wjcGrid.SelectionMode.ListBox;
        this._thisFilterFunction = this._filterFunction.bind(this);

        this.refresh();
    }
    ngAfterViewInit() {
        this.pageHeader.activePageTitle = 'Redemption Activity';
        this.pageHeader.pageIcon = 'fa fa-chevron-circle-down'
    }
    refreshButtonClick() {
        this.refresh();
    }

    refresh() {
        this.flex.itemsSource = null;
        this.DataService.getRedemptionActivities()
            .subscribe(activities => this.activities = activities,
            error => this.errorMessage = <any>error,
            () => {
                this.data = new wijmo.ObservableArray(this.activities);
                this.flex.itemsSource = this.data;
                // console.log(this.activities[0]);
                // console.log(this.data.items[0]);
            });

    }
    itemFormatter = (panel: wjcGrid.GridPanel, r: number, c: number, cell: HTMLElement) => {
        if (panel.cellType == wjcGrid.CellType.Cell) {
            var col = panel.columns[c];

            // console.log("ItemFormatter - " + col.name);
            switch (col.name) {
                case 'Amount':
                    if (panel.getCellData(r, c, false) < 0) {
                        cell.style.color = 'red';
                    }
                    break;
            }
        }
    }

    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        if (this._filter != value) {
            this._filter = value;
            this._applyFilter();
        }
    }
    // ICollectionView filter function
    private _filterFunction(item: any) {
        var f = this.filter;
        if (f && item) {

            // split string into terms to enable multi-field searches such as 'us gadget red'
            var terms = f.toUpperCase().split(' ');

            // look for any term in any string field
            for (var i = 0; i < terms.length; i++) {
                var termFound = false;
                for (var key in item) {
                    var value = item[key];
                    if (wijmo.isString(value) && value.toUpperCase().indexOf(terms[i]) > -1) {
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
        var self = this;
        this._toFilter = setTimeout(function () {
            self._toFilter = null;
            if (self.flex) {
                var cv = self.flex.collectionView;
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
        // wjcXlsx.FlexGridXlsxConverter.save(this.flex, { includeColumnHeaders: true, includeCellStyles: true }, 'FlexGrid.xlsx');
    }
}