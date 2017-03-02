import * as wjcOlap from 'wijmo/wijmo.olap';
import { EventEmitter, AfterViewInit } from '@angular/core';
import { ElementRef, Injector } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { IWjComponentMetadata } from 'wijmo/wijmo.angular2.directiveBase';
export declare class WjPivotGrid extends wjcOlap.PivotGrid implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjModelProperty: string;
    gotFocusNg: EventEmitter<{}>;
    lostFocusNg: EventEmitter<{}>;
    beginningEditNg: EventEmitter<{}>;
    cellEditEndedNg: EventEmitter<{}>;
    cellEditEndingNg: EventEmitter<{}>;
    prepareCellForEditNg: EventEmitter<{}>;
    formatItemNg: EventEmitter<{}>;
    resizingColumnNg: EventEmitter<{}>;
    resizedColumnNg: EventEmitter<{}>;
    autoSizingColumnNg: EventEmitter<{}>;
    autoSizedColumnNg: EventEmitter<{}>;
    draggingColumnNg: EventEmitter<{}>;
    draggedColumnNg: EventEmitter<{}>;
    sortingColumnNg: EventEmitter<{}>;
    sortedColumnNg: EventEmitter<{}>;
    resizingRowNg: EventEmitter<{}>;
    resizedRowNg: EventEmitter<{}>;
    autoSizingRowNg: EventEmitter<{}>;
    autoSizedRowNg: EventEmitter<{}>;
    draggingRowNg: EventEmitter<{}>;
    draggedRowNg: EventEmitter<{}>;
    deletingRowNg: EventEmitter<{}>;
    loadingRowsNg: EventEmitter<{}>;
    loadedRowsNg: EventEmitter<{}>;
    rowEditStartingNg: EventEmitter<{}>;
    rowEditStartedNg: EventEmitter<{}>;
    rowEditEndingNg: EventEmitter<{}>;
    rowEditEndedNg: EventEmitter<{}>;
    rowAddedNg: EventEmitter<{}>;
    groupCollapsedChangedNg: EventEmitter<{}>;
    groupCollapsedChangingNg: EventEmitter<{}>;
    itemsSourceChangedNg: EventEmitter<{}>;
    selectionChangingNg: EventEmitter<{}>;
    selectionChangedNg: EventEmitter<{}>;
    scrollPositionChangedNg: EventEmitter<{}>;
    updatingViewNg: EventEmitter<{}>;
    updatedViewNg: EventEmitter<{}>;
    updatingLayoutNg: EventEmitter<{}>;
    updatedLayoutNg: EventEmitter<{}>;
    pastingNg: EventEmitter<{}>;
    pastedNg: EventEmitter<{}>;
    pastingCellNg: EventEmitter<{}>;
    pastedCellNg: EventEmitter<{}>;
    copyingNg: EventEmitter<{}>;
    copiedNg: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class WjPivotChart extends wjcOlap.PivotChart implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjModelProperty: string;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class WjPivotPanel extends wjcOlap.PivotPanel implements OnInit, OnDestroy, AfterViewInit {
    static readonly meta: IWjComponentMetadata;
    private _wjBehaviour;
    isInitialized: boolean;
    initialized: EventEmitter<{}>;
    wjModelProperty: string;
    itemsSourceChangedNg: EventEmitter<{}>;
    viewDefinitionChangedNg: EventEmitter<{}>;
    updatingViewNg: EventEmitter<{}>;
    updatedViewNg: EventEmitter<{}>;
    constructor(elRef: ElementRef, injector: Injector, parentCmp: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class WjOlapModule {
}
