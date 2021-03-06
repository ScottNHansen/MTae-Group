﻿/*
    *
    * Wijmo Library 5.20163.259
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";
var __extends=this && this.__extends || function(d, b)
{
function __()
{
this.constructor = d
}
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p]);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
},
wjcChartAnnotation=require('wijmo/wijmo.chart.annotation'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
wjFlexChartAnnotationLayer_outputs=['initialized', ],
WjFlexChartAnnotationLayer=function(_super)
{
function WjFlexChartAnnotationLayer(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationLayer, _super), WjFlexChartAnnotationLayer.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationLayer.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationLayer.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationLayer.meta = {outputs: wjFlexChartAnnotationLayer_outputs}, WjFlexChartAnnotationLayer.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-layer', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', ], outputs: wjFlexChartAnnotationLayer_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationLayer
})
}, ]
}, ]
}, ], WjFlexChartAnnotationLayer.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationLayer
}(wjcChartAnnotation.AnnotationLayer),
wjFlexChartAnnotationText_outputs,
WjFlexChartAnnotationText,
wjFlexChartAnnotationEllipse_outputs,
WjFlexChartAnnotationEllipse,
wjFlexChartAnnotationRectangle_outputs,
WjFlexChartAnnotationRectangle,
wjFlexChartAnnotationLine_outputs,
WjFlexChartAnnotationLine,
wjFlexChartAnnotationPolygon_outputs,
WjFlexChartAnnotationPolygon,
wjFlexChartAnnotationCircle_outputs,
WjFlexChartAnnotationCircle,
wjFlexChartAnnotationSquare_outputs,
WjFlexChartAnnotationSquare,
wjFlexChartAnnotationImage_outputs,
WjFlexChartAnnotationImage,
moduleExports,
WjChartAnnotationModule;
exports.WjFlexChartAnnotationLayer = WjFlexChartAnnotationLayer;
wjFlexChartAnnotationText_outputs = ['initialized', ];
WjFlexChartAnnotationText = function(_super)
{
function WjFlexChartAnnotationText(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationText, _super), WjFlexChartAnnotationText.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationText.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationText.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationText.meta = {outputs: wjFlexChartAnnotationText_outputs}, WjFlexChartAnnotationText.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-text', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationText_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationText
})
}, ]
}, ]
}, ], WjFlexChartAnnotationText.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationText
}(wjcChartAnnotation.Text);
exports.WjFlexChartAnnotationText = WjFlexChartAnnotationText;
wjFlexChartAnnotationEllipse_outputs = ['initialized', ];
WjFlexChartAnnotationEllipse = function(_super)
{
function WjFlexChartAnnotationEllipse(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationEllipse, _super), WjFlexChartAnnotationEllipse.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationEllipse.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationEllipse.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationEllipse.meta = {outputs: wjFlexChartAnnotationEllipse_outputs}, WjFlexChartAnnotationEllipse.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-ellipse', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationEllipse_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationEllipse
})
}, ]
}, ]
}, ], WjFlexChartAnnotationEllipse.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationEllipse
}(wjcChartAnnotation.Ellipse);
exports.WjFlexChartAnnotationEllipse = WjFlexChartAnnotationEllipse;
wjFlexChartAnnotationRectangle_outputs = ['initialized', ];
WjFlexChartAnnotationRectangle = function(_super)
{
function WjFlexChartAnnotationRectangle(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationRectangle, _super), WjFlexChartAnnotationRectangle.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationRectangle.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationRectangle.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationRectangle.meta = {outputs: wjFlexChartAnnotationRectangle_outputs}, WjFlexChartAnnotationRectangle.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-rectangle', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationRectangle_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationRectangle
})
}, ]
}, ]
}, ], WjFlexChartAnnotationRectangle.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationRectangle
}(wjcChartAnnotation.Rectangle);
exports.WjFlexChartAnnotationRectangle = WjFlexChartAnnotationRectangle;
wjFlexChartAnnotationLine_outputs = ['initialized', ];
WjFlexChartAnnotationLine = function(_super)
{
function WjFlexChartAnnotationLine(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationLine, _super), WjFlexChartAnnotationLine.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationLine.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationLine.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationLine.meta = {outputs: wjFlexChartAnnotationLine_outputs}, WjFlexChartAnnotationLine.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-line', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationLine_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationLine
})
}, ]
}, ]
}, ], WjFlexChartAnnotationLine.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationLine
}(wjcChartAnnotation.Line);
exports.WjFlexChartAnnotationLine = WjFlexChartAnnotationLine;
wjFlexChartAnnotationPolygon_outputs = ['initialized', ];
WjFlexChartAnnotationPolygon = function(_super)
{
function WjFlexChartAnnotationPolygon(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationPolygon, _super), WjFlexChartAnnotationPolygon.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationPolygon.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationPolygon.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationPolygon.meta = {outputs: wjFlexChartAnnotationPolygon_outputs}, WjFlexChartAnnotationPolygon.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-polygon', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationPolygon_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationPolygon
})
}, ]
}, ]
}, ], WjFlexChartAnnotationPolygon.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationPolygon
}(wjcChartAnnotation.Polygon);
exports.WjFlexChartAnnotationPolygon = WjFlexChartAnnotationPolygon;
wjFlexChartAnnotationCircle_outputs = ['initialized', ];
WjFlexChartAnnotationCircle = function(_super)
{
function WjFlexChartAnnotationCircle(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationCircle, _super), WjFlexChartAnnotationCircle.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationCircle.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationCircle.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationCircle.meta = {outputs: wjFlexChartAnnotationCircle_outputs}, WjFlexChartAnnotationCircle.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-circle', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationCircle_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationCircle
})
}, ]
}, ]
}, ], WjFlexChartAnnotationCircle.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationCircle
}(wjcChartAnnotation.Circle);
exports.WjFlexChartAnnotationCircle = WjFlexChartAnnotationCircle;
wjFlexChartAnnotationSquare_outputs = ['initialized', ];
WjFlexChartAnnotationSquare = function(_super)
{
function WjFlexChartAnnotationSquare(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationSquare, _super), WjFlexChartAnnotationSquare.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationSquare.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationSquare.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationSquare.meta = {outputs: wjFlexChartAnnotationSquare_outputs}, WjFlexChartAnnotationSquare.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-square', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationSquare_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationSquare
})
}, ]
}, ]
}, ], WjFlexChartAnnotationSquare.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationSquare
}(wjcChartAnnotation.Square);
exports.WjFlexChartAnnotationSquare = WjFlexChartAnnotationSquare;
wjFlexChartAnnotationImage_outputs = ['initialized', ];
WjFlexChartAnnotationImage = function(_super)
{
function WjFlexChartAnnotationImage(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartAnnotationImage, _super), WjFlexChartAnnotationImage.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationImage.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationImage.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationImage.meta = {outputs: wjFlexChartAnnotationImage_outputs}, WjFlexChartAnnotationImage.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-annotation-image', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: wjFlexChartAnnotationImage_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationImage
})
}, ]
}, ]
}, ], WjFlexChartAnnotationImage.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartAnnotationImage
}(wjcChartAnnotation.Image);
exports.WjFlexChartAnnotationImage = WjFlexChartAnnotationImage;
moduleExports = [WjFlexChartAnnotationLayer, WjFlexChartAnnotationText, WjFlexChartAnnotationEllipse, WjFlexChartAnnotationRectangle, WjFlexChartAnnotationLine, WjFlexChartAnnotationPolygon, WjFlexChartAnnotationCircle, WjFlexChartAnnotationSquare, WjFlexChartAnnotationImage];
WjChartAnnotationModule = function()
{
function WjChartAnnotationModule(){}
return WjChartAnnotationModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnnotationModule.ctorParameters = [], WjChartAnnotationModule
}();
exports.WjChartAnnotationModule = WjChartAnnotationModule