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
wjcInput=require('wijmo/wijmo.input'),
wjcCore=require('wijmo/wijmo'),
core_1=require('@angular/core'),
core_2=require('@angular/core'),
core_3=require('@angular/core'),
common_1=require('@angular/common'),
forms_1=require('@angular/forms'),
wijmo_angular2_directiveBase_1=require('wijmo/wijmo.angular2.directiveBase'),
wjComboBox_outputs=['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', ],
WjComboBox=function(_super)
{
function WjComboBox(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'selectedValue';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
this.selectedIndexChangedNg = new core_1.EventEmitter(!1);
this.selectedIndexChangePC = new core_1.EventEmitter(!1);
this.selectedItemChangePC = new core_1.EventEmitter(!1);
this.selectedValueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjComboBox, _super), WjComboBox.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjComboBox.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjComboBox.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjComboBox.meta = {
outputs: wjComboBox_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue']
}
}, WjComboBox.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-combo-box', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', ], outputs: wjComboBox_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjComboBox
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjComboBox.ctorParameters = [{
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
}, ], WjComboBox
}(wjcInput.ComboBox),
wjAutoComplete_outputs,
WjAutoComplete,
wjCalendar_outputs,
WjCalendar,
wjColorPicker_outputs,
WjColorPicker,
wjInputMask_outputs,
WjInputMask,
wjInputColor_outputs,
WjInputColor,
wjMultiSelect_outputs,
WjMultiSelect,
wjInputNumber_outputs,
WjInputNumber,
wjInputDate_outputs,
WjInputDate,
wjInputTime_outputs,
WjInputTime,
wjInputDateTime_outputs,
WjInputDateTime,
wjListBox_outputs,
WjListBox,
wjMenu_outputs,
WjMenu,
wjMenuItem_outputs,
WjMenuItem,
WjMenuItemTemplateDir,
wjMenuSeparator_outputs,
WjMenuSeparator,
wjItemTemplate_outputs,
WjItemTemplate,
wjPopup_outputs,
WjPopup,
WjContextMenu,
wjCollectionViewNavigator_outputs,
WjCollectionViewNavigator,
wjCollectionViewPager_outputs,
WjCollectionViewPager,
moduleExports,
WjInputModule;
exports.WjComboBox = WjComboBox;
wjAutoComplete_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', ];
WjAutoComplete = function(_super)
{
function WjAutoComplete(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'selectedValue';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
this.selectedIndexChangedNg = new core_1.EventEmitter(!1);
this.selectedIndexChangePC = new core_1.EventEmitter(!1);
this.selectedItemChangePC = new core_1.EventEmitter(!1);
this.selectedValueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjAutoComplete, _super), WjAutoComplete.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjAutoComplete.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjAutoComplete.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjAutoComplete.meta = {
outputs: wjAutoComplete_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue']
}
}, WjAutoComplete.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-auto-complete', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'delay', 'maxItems', 'minLength', 'cssMatch', 'itemsSourceFunction', 'searchMemberPath', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', ], outputs: wjAutoComplete_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjAutoComplete
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjAutoComplete.ctorParameters = [{
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
}, ], WjAutoComplete
}(wjcInput.AutoComplete);
exports.WjAutoComplete = WjAutoComplete;
wjCalendar_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', 'displayMonthChangedNg: displayMonthChanged', 'displayMonthChangePC: displayMonthChange', 'formatItemNg: formatItem', ];
WjCalendar = function(_super)
{
function WjCalendar(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
this.displayMonthChangedNg = new core_1.EventEmitter(!1);
this.displayMonthChangePC = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjCalendar, _super), WjCalendar.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjCalendar.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjCalendar.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjCalendar.meta = {
outputs: wjCalendar_outputs, changeEvents: {
valueChanged: ['value'], displayMonthChanged: ['displayMonth']
}
}, WjCalendar.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-calendar', template: "", inputs: ['wjModelProperty', 'isDisabled', 'monthView', 'showHeader', 'itemFormatter', 'itemValidator', 'displayMonth', 'firstDayOfWeek', 'max', 'min', 'selectionMode', 'isReadOnly', 'value', ], outputs: wjCalendar_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjCalendar
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjCalendar.ctorParameters = [{
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
}, ], WjCalendar
}(wjcInput.Calendar);
exports.WjCalendar = WjCalendar;
wjColorPicker_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ];
WjColorPicker = function(_super)
{
function WjColorPicker(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjColorPicker, _super), WjColorPicker.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjColorPicker.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjColorPicker.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjColorPicker.meta = {
outputs: wjColorPicker_outputs, changeEvents: {valueChanged: ['value']}
}, WjColorPicker.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-color-picker', template: "", inputs: ['wjModelProperty', 'isDisabled', 'showAlphaChannel', 'showColorString', 'palette', 'value', ], outputs: wjColorPicker_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjColorPicker
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjColorPicker.ctorParameters = [{
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
}, ], WjColorPicker
}(wjcInput.ColorPicker);
exports.WjColorPicker = WjColorPicker;
wjInputMask_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'rawValueChangePC: rawValueChange', 'valueChangePC: valueChange', ];
WjInputMask = function(_super)
{
function WjInputMask(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.rawValueChangePC = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjInputMask, _super), WjInputMask.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputMask.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputMask.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputMask.meta = {
outputs: wjInputMask_outputs, changeEvents: {valueChanged: ['rawValue', 'value']}
}, WjInputMask.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-input-mask', template: "", inputs: ['wjModelProperty', 'isDisabled', 'mask', 'isRequired', 'promptChar', 'placeholder', 'rawValue', 'value', ], outputs: wjInputMask_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputMask
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjInputMask.ctorParameters = [{
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
}, ], WjInputMask
}(wjcInput.InputMask);
exports.WjInputMask = WjInputMask;
wjInputColor_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ];
WjInputColor = function(_super)
{
function WjInputColor(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjInputColor, _super), WjInputColor.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputColor.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputColor.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputColor.meta = {
outputs: wjInputColor_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], valueChanged: ['value']
}
}, WjInputColor.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-input-color', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'showAlphaChannel', 'value', 'text', ], outputs: wjInputColor_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputColor
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjInputColor.ctorParameters = [{
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
}, ], WjInputColor
}(wjcInput.InputColor);
exports.WjInputColor = WjInputColor;
wjMultiSelect_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'checkedItemsChangedNg: checkedItemsChanged', 'checkedItemsChangePC: checkedItemsChange', ];
WjMultiSelect = function(_super)
{
function WjMultiSelect(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'selectedValue';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
this.selectedIndexChangedNg = new core_1.EventEmitter(!1);
this.selectedIndexChangePC = new core_1.EventEmitter(!1);
this.selectedItemChangePC = new core_1.EventEmitter(!1);
this.selectedValueChangePC = new core_1.EventEmitter(!1);
this.checkedItemsChangedNg = new core_1.EventEmitter(!1);
this.checkedItemsChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjMultiSelect, _super), WjMultiSelect.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjMultiSelect.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjMultiSelect.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjMultiSelect.meta = {
outputs: wjMultiSelect_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], checkedItemsChanged: ['checkedItems']
}
}, WjMultiSelect.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-multi-select', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'checkedMemberPath', 'maxHeaderItems', 'headerFormat', 'headerFormatter', 'itemsSource', 'checkedItems', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', ], outputs: wjMultiSelect_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMultiSelect
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjMultiSelect.ctorParameters = [{
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
}, ], WjMultiSelect
}(wjcInput.MultiSelect);
exports.WjMultiSelect = WjMultiSelect;
wjInputNumber_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', 'textChangedNg: textChanged', 'textChangePC: textChange', ];
WjInputNumber = function(_super)
{
function WjInputNumber(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjInputNumber, _super), WjInputNumber.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputNumber.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputNumber.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputNumber.meta = {
outputs: wjInputNumber_outputs, changeEvents: {
valueChanged: ['value'], textChanged: ['text']
}
}, WjInputNumber.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-input-number', template: "", inputs: ['wjModelProperty', 'isDisabled', 'showSpinner', 'max', 'min', 'step', 'isRequired', 'placeholder', 'inputType', 'format', 'isReadOnly', 'value', 'text', ], outputs: wjInputNumber_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputNumber
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjInputNumber.ctorParameters = [{
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
}, ], WjInputNumber
}(wjcInput.InputNumber);
exports.WjInputNumber = WjInputNumber;
wjInputDate_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ];
WjInputDate = function(_super)
{
function WjInputDate(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjInputDate, _super), WjInputDate.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputDate.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputDate.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputDate.meta = {
outputs: wjInputDate_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], valueChanged: ['value']
}
}, WjInputDate.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-input-date', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'selectionMode', 'format', 'mask', 'max', 'min', 'inputType', 'itemValidator', 'itemFormatter', 'text', 'value', ], outputs: wjInputDate_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputDate
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjInputDate.ctorParameters = [{
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
}, ], WjInputDate
}(wjcInput.InputDate);
exports.WjInputDate = WjInputDate;
wjInputTime_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ];
WjInputTime = function(_super)
{
function WjInputTime(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
this.selectedIndexChangedNg = new core_1.EventEmitter(!1);
this.selectedIndexChangePC = new core_1.EventEmitter(!1);
this.selectedItemChangePC = new core_1.EventEmitter(!1);
this.selectedValueChangePC = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjInputTime, _super), WjInputTime.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputTime.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputTime.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputTime.meta = {
outputs: wjInputTime_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], valueChanged: ['value']
}
}, WjInputTime.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-input-time', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'max', 'min', 'step', 'format', 'mask', 'inputType', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', 'value', ], outputs: wjInputTime_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputTime
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjInputTime.ctorParameters = [{
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
}, ], WjInputTime
}(wjcInput.InputTime);
exports.WjInputTime = WjInputTime;
wjInputDateTime_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ];
WjInputDateTime = function(_super)
{
function WjInputDateTime(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjInputDateTime, _super), WjInputDateTime.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjInputDateTime.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjInputDateTime.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjInputDateTime.meta = {
outputs: wjInputDateTime_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], valueChanged: ['value']
}
}, WjInputDateTime.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-input-date-time', template: "", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'selectionMode', 'format', 'mask', 'max', 'min', 'inputType', 'itemValidator', 'itemFormatter', 'timeMax', 'timeMin', 'timeStep', 'timeFormat', 'text', 'value', ], outputs: wjInputDateTime_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjInputDateTime
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjInputDateTime.ctorParameters = [{
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
}, ], WjInputDateTime
}(wjcInput.InputDateTime);
exports.WjInputDateTime = WjInputDateTime;
wjListBox_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'formatItemNg: formatItem', 'itemsChangedNg: itemsChanged', 'itemCheckedNg: itemChecked', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'checkedItemsChangedNg: checkedItemsChanged', 'checkedItemsChangePC: checkedItemsChange', ];
WjListBox = function(_super)
{
function WjListBox(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'selectedValue';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
this.itemsChangedNg = new core_1.EventEmitter(!1);
this.itemCheckedNg = new core_1.EventEmitter(!1);
this.selectedIndexChangedNg = new core_1.EventEmitter(!1);
this.selectedIndexChangePC = new core_1.EventEmitter(!1);
this.selectedItemChangePC = new core_1.EventEmitter(!1);
this.selectedValueChangePC = new core_1.EventEmitter(!1);
this.checkedItemsChangedNg = new core_1.EventEmitter(!1);
this.checkedItemsChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjListBox, _super), WjListBox.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjListBox.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjListBox.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjListBox.meta = {
outputs: wjListBox_outputs, changeEvents: {
selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], checkedItemsChanged: ['checkedItems']
}
}, WjListBox.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-list-box', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isContentHtml', 'maxHeight', 'selectedValuePath', 'itemFormatter', 'displayMemberPath', 'checkedMemberPath', 'itemsSource', 'selectedIndex', 'selectedItem', 'selectedValue', 'checkedItems', ], outputs: wjListBox_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjListBox
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjListBox.ctorParameters = [{
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
}, ], WjListBox
}(wjcInput.ListBox);
exports.WjListBox = WjListBox;
wjMenu_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'isDroppedDownChangingNg: isDroppedDownChanging', 'isDroppedDownChangedNg: isDroppedDownChanged', 'isDroppedDownChangePC: isDroppedDownChange', 'textChangedNg: textChanged', 'textChangePC: textChange', 'formatItemNg: formatItem', 'selectedIndexChangedNg: selectedIndexChanged', 'selectedIndexChangePC: selectedIndexChange', 'selectedItemChangePC: selectedItemChange', 'selectedValueChangePC: selectedValueChange', 'itemClickedNg: itemClicked', 'valueChangePC: valueChange', ];
WjMenu = function(_super)
{
function WjMenu(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'selectedValue';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangingNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangedNg = new core_1.EventEmitter(!1);
this.isDroppedDownChangePC = new core_1.EventEmitter(!1);
this.textChangedNg = new core_1.EventEmitter(!1);
this.textChangePC = new core_1.EventEmitter(!1);
this.formatItemNg = new core_1.EventEmitter(!1);
this.selectedIndexChangedNg = new core_1.EventEmitter(!1);
this.selectedIndexChangePC = new core_1.EventEmitter(!1);
this.selectedItemChangePC = new core_1.EventEmitter(!1);
this.selectedValueChangePC = new core_1.EventEmitter(!1);
this.itemClickedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.itemsSource = new wjcCore.ObservableArray;
this.selectedIndex = 0
}
return __extends(WjMenu, _super), WjMenu.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit();
this._attachToControl();
this._updateHeader()
}, WjMenu.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjMenu.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy();
this.listBox.formatItem.removeHandler(this._fmtItem, this);
this.listBox.loadingItems.removeHandler(this._loadingItems, this)
}, Object.defineProperty(WjMenu.prototype, "value", {
get: function()
{
return this._value
}, set: function(value)
{
this._value = value;
value != null && (this.selectedValue = value, this._updateHeader())
}, enumerable: !0, configurable: !0
}), WjMenu.prototype.ngOnChanges = function(changes)
{
var headerChange=changes.header;
headerChange && (this._definedHeader = headerChange.currentValue, this._updateHeader())
}, WjMenu.prototype.ngAfterContentInit = function()
{
this.value = this.value
}, WjMenu.prototype.onItemClicked = function(e)
{
this.value = this.selectedValue;
_super.prototype.onItemClicked.call(this, e)
}, WjMenu.prototype.refresh = function(fullUpdate)
{
fullUpdate === void 0 && (fullUpdate = !0);
_super.prototype.refresh.call(this, fullUpdate);
this._updateHeader()
}, WjMenu.prototype._attachToControl = function()
{
this.listBox.formatItem.addHandler(this._fmtItem, this);
this.listBox.loadingItems.addHandler(this._loadingItems, this);
this.invalidate()
}, WjMenu.prototype._loadingItems = function(s)
{
for (var itemEl, items=s.hostElement.getElementsByClassName('wj-listbox-item'), i=items.length - 1; i >= 0; i--)
itemEl = items[i],
itemEl.textContent = ''
}, WjMenu.prototype._fmtItem = function(s, e)
{
var itemEl,
contentRoot;
e.data instanceof WjMenuItem && (itemEl = e.item, itemEl.textContent = '', contentRoot = e.data.contentRoot, contentRoot && itemEl.appendChild(contentRoot))
}, WjMenu.prototype._updateHeader = function()
{
var selItem,
currentValue,
contentRoot;
this.header = this._definedHeader || '';
selItem = this.selectedItem;
this.value != null && selItem && this.displayMemberPath && (currentValue = null, selItem instanceof WjMenuItem && (contentRoot = selItem.contentRoot, currentValue = contentRoot ? contentRoot.innerHTML : selItem[this.displayMemberPath]), currentValue != null && (this.header += ': <b>' + currentValue + '</b>'))
}, WjMenu.meta = {
outputs: wjMenu_outputs, changeEvents: {
isDroppedDownChanged: ['isDroppedDown'], textChanged: ['text'], selectedIndexChanged: ['selectedIndex', 'selectedItem', 'selectedValue'], itemClicked: ['value']
}
}, WjMenu.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-menu', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'isDroppedDown', 'showDropDownButton', 'autoExpandSelection', 'placeholder', 'dropDownCssClass', 'isAnimated', 'isReadOnly', 'isRequired', 'displayMemberPath', 'selectedValuePath', 'headerPath', 'isContentHtml', 'isEditable', 'maxDropDownHeight', 'maxDropDownWidth', 'itemFormatter', 'header', 'commandParameterPath', 'commandPath', 'isButton', 'itemsSource', 'text', 'selectedIndex', 'selectedItem', 'selectedValue', 'value', ], outputs: wjMenu_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMenu
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjMenu.ctorParameters = [{
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
}, ], WjMenu
}(wjcInput.Menu);
exports.WjMenu = WjMenu;
wjMenuItem_outputs = ['initialized', ];
WjMenuItem = function()
{
function WjMenuItem(elRef, injector, parentCmp, viewContainerRef, domRenderer)
{
this.viewContainerRef = viewContainerRef;
this.domRenderer = domRenderer;
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'itemsSource';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this._ownerMenu = behavior.parentBehavior.directive
}
return WjMenuItem.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit();
var ownerMenu=this._ownerMenu;
ownerMenu.itemsSource.length == 1 && ownerMenu.selectedIndex < 0 && (ownerMenu.selectedIndex = 0);
ownerMenu.displayMemberPath || (ownerMenu.displayMemberPath = 'header');
ownerMenu.selectedValuePath || (ownerMenu.selectedValuePath = 'value');
ownerMenu.commandPath || (ownerMenu.commandPath = 'cmd');
ownerMenu.commandParameterPath || (ownerMenu.commandParameterPath = 'cmdParam')
}, WjMenuItem.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjMenuItem.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjMenuItem.meta = {
outputs: wjMenuItem_outputs, siblingId: 'menuItemDir'
}, WjMenuItem.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-menu-item', template: "<template [wjMenuItemTemplateDir]><ng-content></ng-content></template>", inputs: ['wjProperty', 'value', 'cmd', 'cmdParam', ], outputs: wjMenuItem_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMenuItem
})
}, ]
}, ]
}, ], WjMenuItem.ctorParameters = [{
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
}, {
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, ], WjMenuItem
}();
exports.WjMenuItem = WjMenuItem;
WjMenuItemTemplateDir = function()
{
function WjMenuItemTemplateDir(viewContainerRef, templateRef, elRef, injector, domRenderer, menuItem, menuSeparator)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.elRef = elRef;
this.domRenderer = domRenderer;
this.ownerItem = menuItem || menuSeparator;
this.ownerItem.templateDir = this
}
return WjMenuItemTemplateDir.prototype.ngAfterContentInit = function()
{
var self=this;
setTimeout(function()
{
var rootEl=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(null, self.viewContainerRef, self.templateRef, self.domRenderer).rootElement;
self.contentRoot = rootEl;
self.ownerItem.contentRoot = rootEl;
self.ownerItem._ownerMenu.listBox.invalidate();
self.ownerItem._ownerMenu.invalidate()
}, 0)
}, WjMenuItemTemplateDir.decorators = [{
type: core_2.Directive, args: [{
selector: '[wjMenuItemTemplateDir]', inputs: ['wjMenuItemTemplateDir']
}, ]
}, ], WjMenuItemTemplateDir.ctorParameters = [{
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.TemplateRef, decorators: [{
type: core_3.Inject, args: [core_2.TemplateRef, ]
}, {type: core_2.Optional}, ]
}, {
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, {
type: WjMenuItem, decorators: [{
type: core_3.Inject, args: [WjMenuItem, ]
}, {type: core_2.Optional}, ]
}, {
type: WjMenuSeparator, decorators: [{
type: core_3.Inject, args: [core_2.forwardRef(function()
{
return WjMenuSeparator
}), ]
}, {type: core_2.Optional}, ]
}, ], WjMenuItemTemplateDir
}();
exports.WjMenuItemTemplateDir = WjMenuItemTemplateDir;
wjMenuSeparator_outputs = ['initialized', ];
WjMenuSeparator = function(_super)
{
function WjMenuSeparator(elRef, injector, parentCmp, viewContainerRef, domRenderer)
{
_super.call(this, elRef, injector, parentCmp, viewContainerRef, domRenderer)
}
return __extends(WjMenuSeparator, _super), WjMenuSeparator.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-menu-separator', template: "<template [wjMenuItemTemplateDir]><div class=\"wj-state-disabled\" style=\"width:100%;height:1px;background-color:lightgray\"></div></template>", inputs: ['wjProperty', ], outputs: wjMenuSeparator_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjMenuSeparator
})
}, ]
}, ]
}, ], WjMenuSeparator.ctorParameters = [{
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
}, {
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, ], WjMenuSeparator
}(WjMenuItem);
exports.WjMenuSeparator = WjMenuSeparator;
wjItemTemplate_outputs = ['initialized', ];
WjItemTemplate = function()
{
function WjItemTemplate(elRef, injector, parentCmp, viewContainerRef, templateRef, domRenderer, cdRef)
{
this.viewContainerRef = viewContainerRef;
this.templateRef = templateRef;
this.domRenderer = domRenderer;
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.ownerControl = behavior.parentBehavior.directive;
this.listBox = WjItemTemplate._getListBox(this.ownerControl);
this._cdRef = cdRef
}
return WjItemTemplate.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit();
this._attachToControl()
}, WjItemTemplate.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjItemTemplate.prototype.ngOnDestroy = function()
{
var ownerControl=this.ownerControl,
listBox=this.listBox;
listBox && (listBox.formatItem.removeHandler(this._fmtItem, this), listBox.loadingItems.removeHandler(this._loadingItems, this));
ownerControl && ownerControl.invalidate()
}, WjItemTemplate.prototype._attachToControl = function()
{
this.listBox.formatItem.addHandler(this._fmtItem, this);
this.listBox.loadingItems.addHandler(this._loadingItems, this);
this.ownerControl.invalidate()
}, WjItemTemplate.prototype._loadingItems = function()
{
this.viewContainerRef.clear()
}, WjItemTemplate.prototype._fmtItem = function(s, e)
{
var itemEl=e.item,
viewRef;
itemEl.textContent = '';
viewRef = this._instantiateTemplate(itemEl);
viewRef.context.control = s;
viewRef.context.item = e.data;
viewRef.context.itemIndex = e.index;
e.index === this.listBox.collectionView.items.length - 1 && this._cdRef.detectChanges()
}, WjItemTemplate.prototype._instantiateTemplate = function(parent)
{
return wijmo_angular2_directiveBase_1.WjDirectiveBehavior.instantiateTemplate(parent, this.viewContainerRef, this.templateRef, this.domRenderer).viewRef
}, WjItemTemplate._getListBox = function(ownerControl)
{
return ownerControl ? ownerControl instanceof wjcInput.ListBox ? ownerControl : ownerControl.listBox : null
}, WjItemTemplate.meta = {
outputs: wjItemTemplate_outputs, parentRefProperty: 'owner'
}, WjItemTemplate.decorators = [{
type: core_2.Directive, args: [{
selector: '[wjItemTemplate]', inputs: ['wjItemTemplate', ], outputs: wjItemTemplate_outputs, exportAs: 'wjItemTemplate', providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjItemTemplate
})
}, ]
}, ]
}, ], WjItemTemplate.ctorParameters = [{
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
}, {
type: core_2.ViewContainerRef, decorators: [{
type: core_3.Inject, args: [core_2.ViewContainerRef, ]
}, ]
}, {
type: core_2.TemplateRef, decorators: [{
type: core_3.Inject, args: [core_2.TemplateRef, ]
}, {type: core_2.Optional}, ]
}, {
type: core_2.Renderer, decorators: [{
type: core_3.Inject, args: [core_2.Renderer, ]
}, ]
}, {
type: core_3.ChangeDetectorRef, decorators: [{
type: core_3.Inject, args: [core_3.ChangeDetectorRef, ]
}, ]
}, ], WjItemTemplate
}();
exports.WjItemTemplate = WjItemTemplate;
wjPopup_outputs = ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'showingNg: showing', 'shownNg: shown', 'hidingNg: hiding', 'hiddenNg: hidden', ];
WjPopup = function(_super)
{
function WjPopup(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.showingNg = new core_1.EventEmitter(!1);
this.shownNg = new core_1.EventEmitter(!1);
this.hidingNg = new core_1.EventEmitter(!1);
this.hiddenNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjPopup, _super), WjPopup.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPopup.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPopup.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPopup.prototype.ngOnChanges = function(changes)
{
var ownerChange=changes.owner;
ownerChange && this.modal == null && (this.modal = this.owner ? !1 : !0)
}, WjPopup.prototype.dispose = function()
{
this.isVisible && (this.hiding.removeAllHandlers(), this.fadeOut = !1, this.hide());
_super.prototype.dispose.call(this)
}, WjPopup.meta = {outputs: wjPopup_outputs}, WjPopup.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-popup', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'owner', 'showTrigger', 'hideTrigger', 'fadeIn', 'fadeOut', 'dialogResultEnter', 'modal', ], outputs: wjPopup_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPopup
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjPopup.ctorParameters = [{
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
}, ], WjPopup
}(wjcInput.Popup);
exports.WjPopup = WjPopup;
WjContextMenu = function()
{
function WjContextMenu(elRef)
{
this.elRef = elRef
}
return WjContextMenu.prototype.onContextMenu = function(e)
{
var menu=this.wjContextMenu,
dropDown=menu.dropDown;
menu && dropDown && !wjcCore.closest(e.target, '[disabled]') && (e.preventDefault(), menu.owner = this.elRef.nativeElement, menu.selectedIndex = -1, menu.onIsDroppedDownChanging(new wjcCore.CancelEventArgs) && (wjcCore.showPopup(dropDown, e), menu.onIsDroppedDownChanged(), dropDown.focus()))
}, WjContextMenu.decorators = [{
type: core_2.Directive, args: [{
selector: '[wjContextMenu]', inputs: ['wjContextMenu'], exportAs: 'wjContextMenu', host: {'(contextmenu)': 'onContextMenu($event)'}
}, ]
}, ], WjContextMenu.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, ], WjContextMenu
}();
exports.WjContextMenu = WjContextMenu;
wjCollectionViewNavigator_outputs = ['initialized', ];
WjCollectionViewNavigator = function()
{
function WjCollectionViewNavigator(elRef, injector, parentCmp)
{
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return WjCollectionViewNavigator.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjCollectionViewNavigator.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjCollectionViewNavigator.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjCollectionViewNavigator.meta = {outputs: wjCollectionViewNavigator_outputs}, WjCollectionViewNavigator.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-collection-view-navigator', template: "<div class=\"wj-control wj-content wj-pager\">\n                <div class=\"wj-input-group\">\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToFirst()\"\n                           [disabled]=\"!cv || cv?.currentPosition <= 0\">\n                            <span class=\"wj-glyph-left\" style=\"margin-right: -4px;\"></span>\n                            <span class=\"wj-glyph-left\"></span>\n                         </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                       <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToPrevious()\"\n                           [disabled]=\"!cv || cv?.currentPosition <= 0\">\n                            <span class=\"wj-glyph-left\"></span>\n                       </button>\n                    </span>\n                    <input type=\"text\" class=\"wj-form-control\" value=\"\n                       {{cv?.currentPosition + 1 | number}} / {{cv?.itemCount | number}}\n                       \" disabled />\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToNext()\"\n                           [disabled]=\"!cv || cv?.currentPosition >= cv?.itemCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                           (click)=\"cv.moveCurrentToLast()\"\n                           [disabled]=\"!cv || cv?.currentPosition >= cv?.itemCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                            <span class=\"wj-glyph-right\" style=\"margin-left: -4px;\"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>", inputs: ['wjModelProperty', 'cv', ], outputs: wjCollectionViewNavigator_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjCollectionViewNavigator
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjCollectionViewNavigator.ctorParameters = [{
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
}, ], WjCollectionViewNavigator
}();
exports.WjCollectionViewNavigator = WjCollectionViewNavigator;
wjCollectionViewPager_outputs = ['initialized', ];
WjCollectionViewPager = function()
{
function WjCollectionViewPager(elRef, injector, parentCmp)
{
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return WjCollectionViewPager.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjCollectionViewPager.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjCollectionViewPager.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjCollectionViewPager.meta = {outputs: wjCollectionViewPager_outputs}, WjCollectionViewPager.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-collection-view-pager', template: "<div class=\"wj-control wj-content wj-pager\" >\n                <div class=\"wj-input-group\">\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToFirstPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex <= 0\">\n                            <span class=\"wj-glyph-left\" style=\"margin-right: -4px;\"></span>\n                            <span class=\"wj-glyph-left\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                    <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToPreviousPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex <= 0\">\n                            <span class=\"wj-glyph-left\"></span>\n                        </button>\n                    </span>\n                    <input type=\"text\" class=\"wj-form-control\" value=\"\n                        {{cv?.pageIndex + 1 | number}} / {{cv?.pageCount | number}}\n                    \" disabled />\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToNextPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex >= cv?.pageCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                        </button>\n                    </span>\n                    <span class=\"wj-input-group-btn\" >\n                        <button class=\"wj-btn wj-btn-default\" type=\"button\"\n                            (click)=\"cv.moveToLastPage()\"\n                            [disabled]=\"!cv || cv?.pageIndex >= cv?.pageCount - 1\">\n                            <span class=\"wj-glyph-right\"></span>\n                            <span class=\"wj-glyph-right\" style=\"margin-left: -4px;\"></span>\n                        </button>\n                    </span>\n                </div>\n            </div>", inputs: ['wjModelProperty', 'cv', ], outputs: wjCollectionViewPager_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjCollectionViewPager
})
}, {
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
}, ]
}, ], WjCollectionViewPager.ctorParameters = [{
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
}, ], WjCollectionViewPager
}();
exports.WjCollectionViewPager = WjCollectionViewPager;
moduleExports = [WjComboBox, WjAutoComplete, WjCalendar, WjColorPicker, WjInputMask, WjInputColor, WjMultiSelect, WjInputNumber, WjInputDate, WjInputTime, WjInputDateTime, WjListBox, WjMenu, WjMenuItem, WjMenuSeparator, WjItemTemplate, WjPopup, WjContextMenu, WjCollectionViewNavigator, WjCollectionViewPager];
WjInputModule = function()
{
function WjInputModule(){}
return WjInputModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.concat([WjMenuItemTemplateDir]), exports: moduleExports.slice()
}, ]
}, ], WjInputModule.ctorParameters = [], WjInputModule
}();
exports.WjInputModule = WjInputModule