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
"use strict";function tryGetModuleWijmoGridDetail(){var n,t;return(n=window.wijmo)&&(t=n.grid)&&t.detail}function tryGetModuleWijmoGridMultirow(){var n,t;return(n=window.wijmo)&&(t=n.grid)&&t.multirow}var wjcXlsx=require('wijmo/wijmo.xlsx'),wjcCore=require('wijmo/wijmo'),wjcGrid=require('wijmo/wijmo.grid'),wjcSelf=require('wijmo/wijmo.grid.xlsx'),FlexGridXlsxConverter;window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.xlsx=wjcSelf;FlexGridXlsxConverter=function(){function n(){}return n.export=function(n,t){wjcCore._deprecated('FlexGridXlsxConverter.export','FlexGridXlsxConverter.save');var i=this.toWorkbookOM(n,t);return wjcXlsx.XlsxConverter.export(i)},n.import=function(n,t,i,r){wjcCore._deprecated('FlexGridXlsxConverter.import','FlexGridXlsxConverter.load');var u=wjcXlsx.XlsxConverter.import(n);this.fromWorkbookOM(u,t,i,r)},n.toWorkbookOM=function(n,t){wjcCore._deprecated('FlexGridXlsxConverter.toWorkbookOM','FlexGridXlsxConverter.save');var i={sheets:[],creator:'',created:new Date,lastModifiedBy:'',modified:new Date,activeWorksheet:0},r,u;if(t&&t.activeWorksheet!=null&&t.activeWorksheet>0&&(i.activeWorksheet=t.activeWorksheet),wjcCore.isArray(n))for(r=0;r<n.length;r++)u=n[r],this._exportFlexGrid(u,i,t);else this._exportFlexGrid(n,i,t);return i},n.fromWorkbookOM=function(n,t,i,r){wjcCore._deprecated('FlexGridXlsxConverter.fromWorkbookOM','FlexGridXlsxConverter.load');var ii=i?i.includeColumnHeader:!0,v=i?i.includeColumnHeader:!0,bt=1,k=0,u=0,o=0,nt,tt,l,it,p,y,rt,vt,d,kt,e,h,dt,w,ut,s,ft,et,gt,yt,c,ot,b,a,ni,st,f,pt,wt,ht,ti,g,ct=!1,lt={},at;if(t.itemsSource=null,t.columns.clear(),t.rows.clear(),t.frozenColumns=0,t.frozenRows=0,n.sheets.length!==0)for(r&&(bt=n.sheets.length);k<bt;k++){for(pt={},wt={},o=0,it=[],ht=[],h=n.sheets[k],ii&&(o=1,h.rows.length<=1&&(v=!1,o=0),vt=h.rows[0]),w=this._getColumnCount(h.rows),dt=this._getRowCount(h.rows,w),gt=h.summaryBelow,k>0&&(ni=document.createElement('div'),t=new wjcGrid.FlexGrid(ni)),l=h.columns||h.cols,u=0;u<w;u++)t.columns.push(new wjcGrid.Column),!l[u]||(isNaN(+l[u].width)||(t.columns[u].width=+l[u].width),l[u].visible||l[u].visible==undefined||(t.columns[u].visible=!!l[u].visible),l[u].style&&!!l[u].style.wordWrap&&(t.columns[u].wordWrap=l[u].style.wordWrap));for(;o<dt;o++){if(ut=!1,at=!0,e=h.rows[o],e)for(ft=o+1;ft<h.rows.length;)if(et=h.rows[ft],et){(isNaN(e.groupLevel)&&!isNaN(et.groupLevel)||!isNaN(e.groupLevel)&&e.groupLevel<et.groupLevel)&&(ut=!0);break}else ft++;for(ut&&!gt?(c&&(c.isCollapsed=ct),c=new wjcGrid.GroupRow,c.isReadOnly=!1,ct=e.collapsed==null?!1:e.collapsed,c.level=isNaN(e.groupLevel)?0:e.groupLevel,lt[c.level]=ct,this._checkParentCollapsed(lt,c.level)&&c._setFlag(wjcGrid.RowColFlags.ParentCollapsed,!0),t.rows.push(c)):(yt=new wjcGrid.Row,e&&this._checkParentCollapsed(lt,e.groupLevel)&&yt._setFlag(wjcGrid.RowColFlags.ParentCollapsed,!0),t.rows.push(yt)),!e||!e.height||isNaN(e.height)||(t.rows[v?o-1:o].height=e.height),u=0;u<w;u++)if(e){if(s=e.cells[u],a=s?s.formula:undefined,a&&a[0]!=='='&&(a='='+a),a=a?this._parseToFlexSheetFormula(a):undefined,t.setCellData(v?o-1:o,u,a&&r?a:this._getItemValue(s)),!ut&&s&&s.value!=null&&s.value!==''&&this._setColumn(it,u,s),st=o*w+u,f=s?s.style:undefined,f){if(at=at&&!!f.wordWrap,ti=this._getItemType(s),f.hAlign)g=wjcXlsx.Workbook._parseHAlignToString(wjcCore.asEnum(f.hAlign,wjcXlsx.HAlign));else switch(ti){case wjcCore.DataType.Number:g='right';break;case wjcCore.DataType.Boolean:g='center';break;default:g='left'}pt[st]={fontWeight:f.font&&f.font.bold?'bold':'none',fontStyle:f.font&&f.font.italic?'italic':'none',textDecoration:f.font&&f.font.underline?'underline':'none',textAlign:g,fontFamily:f.font&&f.font.family?f.font.family:'',fontSize:f.font&&f.font.size?f.font.size+'px':'',color:f.font&&f.font.color?f.font.color:'',backgroundColor:f.fill&&f.fill.color?f.fill.color:'',format:wjcXlsx.Workbook._parseExcelFormat(s)};f.font&&ht.indexOf(f.font.family)===-1&&ht.push(f.font.family)}if(s&&wjcCore.isNumber(s.rowSpan)&&wjcCore.isNumber(s.colSpan))for(nt=o;nt<o+s.rowSpan;nt++)for(tt=u;tt<u+s.colSpan;tt++)st=nt*w+tt,wt[st]=new wjcGrid.CellRange(o,u,o+s.rowSpan-1,u+s.colSpan-1)}else t.setCellData(v?o-1:o,u,''),this._setColumn(it,u,undefined);e&&(this._checkParentCollapsed(lt,e.groupLevel)||e.visible||e.visible==undefined||(t.rows[v?o-1:o].visible=e.visible),t.rows[v?o-1:o].wordWrap=!!e.style&&!!e.style.wordWrap||at)}for(c&&(c.isCollapsed=ct),h.frozenPane&&(ot=h.frozenPane.columns,wjcCore.isNumber(ot)&&!isNaN(ot)&&(t.frozenColumns=ot),b=h.frozenPane.rows,wjcCore.isNumber(b)&&!isNaN(b)&&(t.frozenRows=v&&b>0?b-1:b)),u=0;u<t.columnHeaders.columns.length;u++)p=it[u],y=t.columns[u],y.isRequired=!1,v?(d=vt?vt.cells[u]:undefined,d&&d.value?(kt=wjcXlsx.Workbook._parseExcelFormat(d),rt=wjcCore.Globalize.format(d.value,kt)):rt=this._numAlpha(u)):rt=this._numAlpha(u),y.header=rt,p&&(p.dataType===wjcCore.DataType.Boolean&&(y.dataType=p.dataType),y.format=p.format,y.align=p.hAlign,y.wordWrap=y.wordWrap||p.wordWrap);r&&(t.wj_sheetInfo={name:h.name,visible:h.visible!==!1,styledCells:pt,mergedRanges:wt,fonts:ht});r&&k>0&&r.push(t)}},n.save=function(n,t,i){var r=this._saveFlexGridToWorkbook(n,t);return i&&r.save(i),r},n.saveAsync=function(n,t,i,r,u){var f=this._saveFlexGridToWorkbook(n,t);return f.saveAsync(i,r,u),f},n.load=function(n,t,i){var r,u,f=this;if(t instanceof Blob)u=new FileReader,u.onload=function(){var t=wjcXlsx.Workbook._base64EncArr(new Uint8Array(u.result));r=new wjcXlsx.Workbook;r.load(t);f._loadToFlexGrid(n,r,i)},u.readAsArrayBuffer(t);else if(t instanceof wjcXlsx.Workbook)f._loadToFlexGrid(n,t,i);else{if(t instanceof ArrayBuffer)t=wjcXlsx.Workbook._base64EncArr(new Uint8Array(t));else if(!wjcCore.isString(t))throw'Invalid workbook.';r=new wjcXlsx.Workbook;r.load(t);f._loadToFlexGrid(n,r,i)}},n.loadAsync=function(n,t,i,r,u){var f,e,o=this;if(t instanceof Blob)e=new FileReader,e.onload=function(){var t=wjcXlsx.Workbook._base64EncArr(new Uint8Array(e.result));f=new wjcXlsx.Workbook;f.loadAsync(t,function(t){o._loadToFlexGrid(n,t,i);r&&r(t)},u)},e.readAsArrayBuffer(t);else if(t instanceof wjcXlsx.Workbook)o._loadToFlexGrid(n,t,i),r&&r(t);else{if(t instanceof ArrayBuffer)t=wjcXlsx.Workbook._base64EncArr(new Uint8Array(t));else if(!wjcCore.isString(t))throw'Invalid workbook.';f=new wjcXlsx.Workbook;f.loadAsync(t,function(t){o._loadToFlexGrid(n,t,i);r&&r(t)},u)}},n._exportFlexGrid=function(n,t,i){var b=[],e=[],f={columns:[],rows:[],summaryBelow:!1},g=i?i.includeColumnHeaders!=null?i.includeColumnHeaders:i.includeColumnHeader!=null?i.includeColumnHeader:!0:!0,p=i?i.includeRowHeaders!=null?i.includeRowHeaders:!1:!1,y=i?i.includeCellStyles!=null?i.includeCellStyles:i.needGetCellStyle!=null?i.needGetCellStyle:!0:!0,c=i?i.includeColumns:null,o,l,s,r,u,v,a,k,nt,w,d=0,tt=0,h=0;if(v=n.wj_sheetInfo,f.name=v?v.name:'',f.visible=v?v.visible!==!1:!0,f.style={font:{size:14}},f.columns=[],!v&&y&&(a=document.createElement('div'),a.style.visibility='hidden',n.hostElement.appendChild(a)),p){for(r=0;r<n.rowHeaders.rows.length;r++)for(e[r]=[],f.columns[r]=[],u=0;u<n.rowHeaders.columns.length;u++)l=n._getBindingColumn(n.rowHeaders,r,n.rowHeaders.columns[u]),s=this._getColumnSetting(l,n.columnHeaders.columns.defaultSize),e[r][u]=s,f.columns[r][u]=s;h=u}if(g&&n.columnHeaders.rows.length>0){for(r=0;r<n.columnHeaders.rows.length;r++){for(e[r]||(e[r]=[]),f.columns[r]||(f.columns[r]=[]),u=0;u<n.columnHeaders.columns.length;u++)l=n._getBindingColumn(n.rowHeaders,r,n.columnHeaders.columns[u]),s=this._getColumnSetting(l,n.columnHeaders.columns.defaultSize),e[r][h+u]=s,(!c||c(l))&&f.columns[r].push(s);h=0;o={};p&&(h=this._parseFlexGridRowToSheetRow(n.topLeftCells,o,r,0,e,y,a,!1,0,c));this._parseFlexGridRowToSheetRow(n.columnHeaders,o,r,h,e,y,a,!1,0,c);o.cells.length>0&&(b[r]=o)}tt=r}else for(e[0]||(e[0]=[]),f.columns[r]||(f.columns[r]=[]),u=0;u<n.columnHeaders.columns.length;u++)l=n.columnHeaders.columns[u],s=this._getColumnSetting(l,n.columnHeaders.columns.defaultSize),e[0][h+u]=s,(!c||c(l))&&f.columns[r].push(s);for(f.columns=e,r=0;r<n.cells.rows.length;r++)h=0,o={},k=n.rows[r],w=k instanceof wjcGrid.GroupRow,w&&(nt=wjcCore.tryCast(k,wjcGrid.GroupRow),d=nt.level+1),p&&(h=this._parseFlexGridRowToSheetRow(n.rowHeaders,o,r,0,e,y,a,w,d,c)),this._parseFlexGridRowToSheetRow(n.cells,o,r,h,e,y,a,w,d,c),o.cells.length>0&&(b[tt+r]=o);f.rows=b;f.frozenPane={rows:g?n.frozenRows+n.columnHeaders.rows.length:n.frozenRows,columns:p?n.frozenColumns+n.rowHeaders.columns.length:n.frozenColumns};t.sheets.push(f);!v&&y&&n.hostElement.removeChild(a)},n._saveFlexGridToWorkbook=function(n,t){var k=new wjcXlsx.Workbook,o=new wjcXlsx.WorkSheet,d=new wjcXlsx.WorkbookFrozenPane,it=t&&t.includeColumnHeaders!=null?t.includeColumnHeaders:!0,b=t&&t.includeRowHeaders!=null?t.includeRowHeaders:!1,v=t&&t.includeCellStyles!=null?t.includeCellStyles:!0,ft=t?t.activeWorksheet:null,s=t?t.includeColumns:null,u,c,y,l,a,f,i,r,g,h,w,rt,p,nt=0,tt=0,ut=0,e=0;if(g=n.wj_sheetInfo,o.name=t?t.sheetName:'',o.visible=t?t.sheetVisible!==!1:!0,f=[],!g&&v&&(h=document.createElement('div'),h.style.visibility='hidden',n.hostElement.appendChild(h)),b){for(i=0;i<n.rowHeaders.rows.length;i++)for(f[i]=[],r=0;r<n.rowHeaders.columns.length;r++)y=n._getBindingColumn(n.rowHeaders,i,n.rowHeaders.columns[r]),l=this._getColumnSetting(y,n.columnHeaders.columns.defaultSize),f[i][r]=l,i===0&&(a=new wjcXlsx.WorkbookColumn,a._deserialize(l),o._addWorkbookColumn(a,r));e=r}if(it&&n.columnHeaders.rows.length>0){for(i=0;i<n.columnHeaders.rows.length;i++){for(f[i]||(f[i]=[]),r=0;r<n.columnHeaders.columns.length;r++)y=n._getBindingColumn(n.columnHeaders,i,n.columnHeaders.columns[r]),l=this._getColumnSetting(y,n.columnHeaders.columns.defaultSize),f[i][e+r]=l,i===0&&(!s||s(y))&&(a=new wjcXlsx.WorkbookColumn,a._deserialize(l),o._addWorkbookColumn(a));e=0;u={};c=new wjcXlsx.WorkbookRow;b&&(e=this._parseFlexGridRowToSheetRow(n.topLeftCells,u,i,0,f,v,h,!1,0,s));this._parseFlexGridRowToSheetRow(n.columnHeaders,u,i,e,f,v,h,!1,0,s);u.cells.length>0&&(c._deserialize(u),o._addWorkbookRow(c,i))}tt=i}else for(f[0]||(f[0]=[]),r=0;r<n.columnHeaders.columns.length;r++)y=n._getBindingColumn(n.columnHeaders,0,n.columnHeaders.columns[r]),l=this._getColumnSetting(y,n.columnHeaders.columns.defaultSize),f[0][e+r]=l,(!s||s(y))&&(a=new wjcXlsx.WorkbookColumn,a._deserialize(l),o._addWorkbookColumn(a));for(i=0;i<n.cells.rows.length;i++)(e=0,u={},c=new wjcXlsx.WorkbookRow,w=n.rows[i],w instanceof wjcGrid._NewRowTemplate)||(p=w instanceof wjcGrid.GroupRow,p&&(rt=wjcCore.tryCast(w,wjcGrid.GroupRow),nt=rt.level+1),b&&(e=this._parseFlexGridRowToSheetRow(n.rowHeaders,u,i,0,f,v,h,p,nt,s)),this._parseFlexGridRowToSheetRow(n.cells,u,i,e,f,v,h,p,nt,s),u.cells.length>0&&(c._deserialize(u),o._addWorkbookRow(c,tt+i)));for(ut=n.cells.rows.length,i=0;i<n.columnFooters.rows.length;i++)e=0,u={},c=new wjcXlsx.WorkbookRow,w=n.columnFooters.rows[i],p=w instanceof wjcGrid.GroupRow,b&&(e=this._parseFlexGridRowToSheetRow(n.rowHeaders,u,i,0,f,v,h,p,0,s)),this._parseFlexGridRowToSheetRow(n.columnFooters,u,i,e,f,v,h,p,0,s),u.cells.length>0&&(c._deserialize(u),o._addWorkbookRow(c,tt+ut+i));return d.rows=it?n.frozenRows+n.columnHeaders.rows.length:n.frozenRows,d.columns=b?n.frozenColumns+n.rowHeaders.columns.length:n.frozenColumns,o.frozenPane=d,k._addWorkSheet(o),!g&&v&&n.hostElement.removeChild(h),k.activeWorksheet=ft,k},n._loadToFlexGrid=function(n,t,i){var gt=i&&i.includeColumnHeaders!=null?i.includeColumnHeaders:!0,a=i&&i.includeColumnHeaders!=null?i.includeColumnHeaders:!0,lt=i&&i.sheetIndex!=null&&!isNaN(i.sheetIndex)?i.sheetIndex:0,ni=i?i.sheetName:null,ti=i?i.sheetVisible:!0,ii=i&&(i.sheetIndex!=null&&!isNaN(i.sheetIndex)||i.sheetName!=null||i.sheetVisible!=null),r=0,e=0,d,g,c,nt,y,v,tt,at,b,wt,f,s,bt,p,it,o,rt,ut,kt,vt,h,ft,w,l,et,u,yt,pt,ot,dt,k,st=!1,ht={},ct;if(n.itemsSource=null,n.columns.clear(),n.rows.clear(),n.frozenColumns=0,n.frozenRows=0,yt={},pt={},e=0,nt=[],ot=[],lt<0||lt>=t.sheets.length)throw'The sheet index option is out of the sheet range of current workbook.';if(s=t.sheets[lt],s.rows!=null){for(gt&&(e=1,s.rows.length<=1&&(a=!1,e=0),at=s.rows[0]),p=this._getColumnCount(s.rows),bt=this._getRowCount(s.rows,p),kt=s.summaryBelow,c=s.columns||s.cols,r=0;r<p;r++)n.columns.push(new wjcGrid.Column),!c[r]||(isNaN(+c[r].width)||(n.columns[r].width=+c[r].width),c[r].visible||c[r].visible==undefined||(n.columns[r].visible=!!c[r].visible),c[r].style&&!!c[r].style.wordWrap&&(n.columns[r].wordWrap=c[r].style.wordWrap));for(;e<bt;e++){if(it=!1,ct=!0,f=s.rows[e],f)for(rt=e+1;rt<s.rows.length;)if(ut=s.rows[rt],ut){(isNaN(f.groupLevel)&&!isNaN(ut.groupLevel)||!isNaN(f.groupLevel)&&f.groupLevel<ut.groupLevel)&&(it=!0);break}else rt++;for(it&&!kt?(h&&(h.isCollapsed=st),h=new wjcGrid.GroupRow,h.isReadOnly=!1,st=f.collapsed==null?!1:f.collapsed,h.level=isNaN(f.groupLevel)?0:f.groupLevel,ht[h.level]=st,this._checkParentCollapsed(ht,h.level)&&h._setFlag(wjcGrid.RowColFlags.ParentCollapsed,!0),n.rows.push(h)):(vt=new wjcGrid.Row,f&&this._checkParentCollapsed(ht,f.groupLevel)&&vt._setFlag(wjcGrid.RowColFlags.ParentCollapsed,!0),n.rows.push(vt)),!f||!f.height||isNaN(f.height)||(n.rows[a?e-1:e].height=f.height),r=0;r<p;r++)if(f){if(o=f.cells[r],l=o?o.formula:undefined,l&&l[0]!=='='&&(l='='+l),l=l?this._parseToFlexSheetFormula(l):undefined,n.setCellData(a?e-1:e,r,l&&ii?l:this._getItemValue(o)),it||this._setColumn(nt,r,o),et=e*p+r,u=o?o.style:undefined,u){if(ct=ct&&!!u.wordWrap,dt=this._getItemType(o),u.hAlign)k=wjcXlsx.Workbook._parseHAlignToString(wjcCore.asEnum(u.hAlign,wjcXlsx.HAlign));else switch(dt){case wjcCore.DataType.Number:k='right';break;case wjcCore.DataType.Boolean:k='center';break;default:k='left'}yt[et]={fontWeight:u.font&&u.font.bold?'bold':'none',fontStyle:u.font&&u.font.italic?'italic':'none',textDecoration:u.font&&u.font.underline?'underline':'none',textAlign:k,fontFamily:u.font&&u.font.family?u.font.family:'',fontSize:u.font&&u.font.size?u.font.size+'px':'',color:u.font&&u.font.color?u.font.color:'',backgroundColor:u.fill&&u.fill.color?u.fill.color:'',format:wjcXlsx.Workbook._parseExcelFormat(o)};u.font&&ot.indexOf(u.font.family)===-1&&ot.push(u.font.family)}if(o&&wjcCore.isNumber(o.rowSpan)&&o.rowSpan>0&&wjcCore.isNumber(o.colSpan)&&o.colSpan>0&&(o.rowSpan>1||o.colSpan>1))for(d=e;d<e+o.rowSpan;d++)for(g=r;g<r+o.colSpan;g++)et=d*p+g,pt[et]=new wjcGrid.CellRange(e,r,e+o.rowSpan-1,r+o.colSpan-1)}else n.setCellData(a?e-1:e,r,''),this._setColumn(nt,r,undefined);f&&(this._checkParentCollapsed(ht,f.groupLevel)||f.visible||f.visible==undefined||(n.rows[a?e-1:e].visible=f.visible),n.rows[a?e-1:e].wordWrap=!!f.style&&!!f.style.wordWrap||ct)}for(h&&(h.isCollapsed=st),s.frozenPane&&(ft=s.frozenPane.columns,wjcCore.isNumber(ft)&&!isNaN(ft)&&(n.frozenColumns=ft),w=s.frozenPane.rows,wjcCore.isNumber(w)&&!isNaN(w)&&(n.frozenRows=a&&w>0?w-1:w)),r=0;r<n.columnHeaders.columns.length;r++)y=nt[r],v=n.columns[r],v.isRequired=!1,a?(b=at?at.cells[r]:undefined,b&&b.value?(wt=wjcXlsx.Workbook._parseExcelFormat(b),tt=wjcCore.Globalize.format(b.value,wt)):tt=this._numAlpha(r)):tt=this._numAlpha(r),v.header=tt,y&&(y.dataType===wjcCore.DataType.Boolean&&(v.dataType=y.dataType),v.format=y.format,v.align=y.hAlign,v.wordWrap=v.wordWrap||y.wordWrap);n.wj_sheetInfo={name:ni||s.name,visible:ti===!0?!0:s.visible!==!1,styledCells:yt,mergedRanges:pt,fonts:ot}}},n._parseFlexGridRowToSheetRow=function(n,t,i,r,u,f,e,o,s,h){var w,l,k,c,a,v,nt,rt,tt,d,et,p,b,ut,ft,it,y,st=!1,ot,g,ht;for(w=n.grid,it=w.wj_sheetInfo,l=n.rows[i],ht=l.recordIndex!=null?l.recordIndex:0,t.cells||(t.cells=[]),t.visible=l.isVisible,t.height=l.renderHeight||n.rows.defaultSize,t.groupLevel=o?s-1:s,o&&(t.collapsed=l.isCollapsed),l.wordWrap&&(t.style={wordWrap:l.wordWrap}),(l.constructor===wjcGrid.Row||l.constructor===wjcGrid._NewRowTemplate||tryGetModuleWijmoGridDetail()&&l.constructor===tryGetModuleWijmoGridDetail().DetailRow||tryGetModuleWijmoGridMultirow()&&l.constructor===tryGetModuleWijmoGridMultirow()._MultiRow)&&(st=!0),c=0;c<n.columns.length;c++)if(ft=1,ut=1,g=!1,ot=w._getBindingColumn(n,i,n.columns[c]),b=null,it&&n===w.cells?(et=i*n.columns.length+c,it.mergedRanges&&(b=it.mergedRanges[et]),it.styledCells&&(p=it.styledCells[et])):f&&(p=this._getCellStyle(n,e,i,c)||{}),b||(b=w.getMergedRange(n,i,c,!1)),b?i===b.topRow&&c===b.leftCol&&(ut=b.bottomRow-b.topRow+1,ft=this._getColSpan(n,b,h),g=!0):g=!0,!h||h(ot))if(k=u[ht][c+r],st||o?(v=g?n.getCellData(i,c,!0):null,nt=g?n.getCellData(i,c,!1):null,tt=!1,v&&wjcCore.isString(v)&&v.length>1&&v[0]==='='&&(tt=!0),y=wjcCore.isDate(nt),a=p&&p.format?wjcXlsx.Workbook._parseCellFormat(p.format,y):k&&k.style&&k.style.format?wjcXlsx.Workbook._parseCellFormat(k.style.format,y):null,a||(y?a='m/d/yyyy':wjcCore.isNumber(nt)&&!ot.dataMap?a=wjcCore.isInt(nt)?'#,##0':'#,##0.00':tt?(d=v.toLowerCase(),d==='=now()'?(a='m/d/yyyy h:mm',y=!0):d==='=today()'||d.substring(0,d.indexOf('('))==='=date'?(a='m/d/yyyy',y=!0):d.substring(0,d.indexOf('('))==='=time'&&(a='h:mm AM/PM',y=!0)):a='General')):(v=g?w.columnHeaders.getCellData(0,c,!0):null,a='General'),n===w.cells&&o&&l.hasChildren&&c===w.columns.firstVisibleIndex){if(v?rt=v:g&&(rt=l.getGroupHeader().replace(/<\/?\w+>/g,'')),rt==null&&!p)continue;y=wjcCore.isDate(rt);t.cells.push({value:rt,isDate:y,formula:tt?this._parseToExcelFormula(v,y):null,colSpan:ft,rowSpan:ut,style:this._extend(this._parseCellStyle(p),{format:a,font:{bold:!0},hAlign:wjcXlsx.HAlign.Left,indent:s-1})})}else t.cells.push({value:tt?undefined:a==='General'?v:nt,isDate:y,formula:tt?this._parseToExcelFormula(v,y):null,colSpan:c<w.columns.firstVisibleIndex?1:ft,rowSpan:ut,style:this._extend(this._parseCellStyle(p),{format:a,hAlign:p&&p.textAlign?wjcXlsx.Workbook._parseStringToHAlign(p.textAlign):wjcCore.isDate(nt)&&k.style.hAlign==null?wjcXlsx.HAlign.Left:wjcCore.asEnum(k.style.hAlign,wjcXlsx.HAlign,!0),vAlign:ut>1?n===w.cells?wjcXlsx.VAlign.Top:wjcXlsx.VAlign.Center:null})});return r+c},n._parseCellStyle=function(n){var t=n&&n.fontSize?+n.fontSize.substring(0,n.fontSize.indexOf('px')):null;return isNaN(t)&&(t=null),{font:{bold:n&&n.fontWeight&&(n.fontWeight==='bold'||!isNaN(+n.fontWeight)&&+n.fontWeight>=700),italic:n&&n.fontStyle&&n.fontStyle==='italic',underline:n&&n.textDecoration&&n.textDecoration==='underline',family:n?this._parseToExcelFontFamily(n.fontFamily):null,size:t,color:n&&n.color?n.color:null},fill:{color:n&&n.backgroundColor?n.backgroundColor:null},borders:n?this._parseBorder(n):null,hAlign:n&&n.textAlign?wjcXlsx.Workbook._parseStringToHAlign(n.textAlign):null}},n._parseBorder=function(n){var t,i;for(var r in{Left:0,Right:0,Top:0,Bottom:0})i=this._parseEgdeBorder(n,r),i&&(t||(t={}),t[r.toLowerCase()]=i);return t},n._parseEgdeBorder=function(n,t){var i,u='border'+t+'Color',r=n['border'+t+'Style'],f;if(r&&r!=='none'&&r!=='hidden'){i={};r=r.toLowerCase();switch(r){case'dotted':i.style=wjcXlsx.BorderStyle.Dotted;break;case'dashed':i.style=wjcXlsx.BorderStyle.Dashed;break;case'double':i.style=wjcXlsx.BorderStyle.Double;break;default:i.style=wjcXlsx.BorderStyle.Thin}n[u]&&(f=new wjcCore.Color(n[u]),i.color=f.toString())}return i},n._parseToExcelFontFamily=function(n){var t;return n&&(t=n.split(','),t&&t.length>0&&(n=t[0].replace(/\"|\'/g,''))),n},n._parseToExcelFormula=function(n,t){var r=n.substring(1,n.indexOf('(')).toLowerCase(),i;switch(r){case'ceiling':case'floor':n=n.substring(0,n.lastIndexOf(')'))+', 1)';break;case'text':i=n.substring(n.lastIndexOf(','),n.lastIndexOf('\"'));i=wjcXlsx.Workbook._parseCellFormat(i.substring(i.lastIndexOf('\"')+1),t);n=n.substring(0,n.lastIndexOf(',')+1)+'\"'+i+'\")'}return n},n._parseToFlexSheetFormula=function(n){var r=n.substring(1).match(/\W+(\w+)\(/),i,u,f,e,t;u=r&&r.length===2?r[1]:n.substring(1,n.indexOf('('));f=n.indexOf(u);switch(u.toLowerCase()){case'ceiling':case'floor':n=n.substring(0,n.lastIndexOf(','))+')';break;case'text':i=n.substring(f);t=i.substring(i.indexOf('\"'),i.lastIndexOf('\"'));t=t.substring(t.lastIndexOf('\"')+1);e=t.indexOf('0')>-1?0:'';t=wjcXlsx.Workbook._parseExcelFormat({value:e,style:{format:t}});t=t.replace(/m+/g,function(n){return n.toUpperCase()}).replace(/Y+/g,function(n){return n.toLowerCase()}).replace(/M+:?|:?M+/gi,function(n){return n.indexOf(':')>-1?n.toLowerCase():n});n=n.substring(0,f)+i.substring(0,i.indexOf('\"')+1)+t+'\")'}return n},n._getColumnSetting=function(n,t){var i=n.renderWidth;return i=i||t,{autoWidth:!0,width:i,visible:n.visible,style:{format:n.format?wjcXlsx.Workbook._parseCellFormat(n.format,n.dataType===wjcCore.DataType.Date):'',hAlign:wjcXlsx.Workbook._parseStringToHAlign(this._toExcelHAlign(n.getAlignment())),wordWrap:n.wordWrap}}},n._toExcelHAlign=function(n){return(n=n?n.trim().toLowerCase():n,!n)?n:n.indexOf('center')>-1?'center':n.indexOf('right')>-1||n.indexOf('end')>-1?'right':n.indexOf('justify')>-1?'justify':'left'},n._getColumnCount=function(n){for(var u=0,t=0,i,r=0;r<n.length;r++)i=n[r]&&n[r].cells?n[r].cells:[],i&&i.length>0&&(t=i.length,wjcCore.isInt(i[t-1].colSpan)&&i[t-1].colSpan>1&&(t=t+i[t-1].colSpan-1),t>u&&(u=t));return u},n._getRowCount=function(n,t){for(var u=n.length,r=u-1,e=0,f,o,i;e<t;e++)n:for(;r>=0;r--)if(f=n[r],o=f&&f.cells?f.cells:[],i=o[e],i&&(i.value!=null&&i.value!==''||wjcCore.isInt(i.rowSpan)&&i.rowSpan>1)){wjcCore.isInt(i.rowSpan)&&i.rowSpan>1&&r+i.rowSpan>u&&(u=r+i.rowSpan);break n}return u},n._numAlpha=function(n){var t=Math.floor(n/26)-1;return(t>-1?this._numAlpha(t):'')+String.fromCharCode(65+n%26)},n._getItemType=function(n){return n===undefined||n===null||n.value===undefined||n.value===null||isNaN(n.value)?undefined:wjcCore.getType(n.value)},n._setColumn=function(n,t,i){var u,f,e,r=n[t];r?(u=this._getItemType(i),r.dataType!==u&&r.dataType===wjcCore.DataType.Boolean&&u!==wjcCore.DataType.Boolean&&(r.dataType=u),i&&i.value!=null&&i.value!==''&&(f=wjcXlsx.Workbook._parseExcelFormat(i),f&&r.format!==f&&f!=='General'&&(r.format=f)),i&&i.style&&(i.style.hAlign&&(e=wjcXlsx.Workbook._parseHAlignToString(wjcCore.asEnum(i.style.hAlign,wjcXlsx.HAlign))),r.wordWrap=r.wordWrap&&!!i.style.wordWrap),e||u!==wjcCore.DataType.Number||(e='right'),r.hAlign=e):n[t]={dataType:this._getItemType(i),format:wjcXlsx.Workbook._parseExcelFormat(i),hAlign:'',wordWrap:!0}},n._getItemValue=function(n){if(n===undefined||n===null||n.value===undefined||n.value===null)return undefined;var t=n.value;return wjcCore.isNumber(t)&&isNaN(t)?'':t instanceof Date&&isNaN(t.getTime())?'':t},n._getCellStyle=function(n,t,i,r){try{this._resetCellStyle(t);n.grid.cellFactory.updateCell(n,i,r,t)}catch(u){return undefined}return window.getComputedStyle(t)},n._resetCellStyle=function(n){for(var t in n.style)typeof n.style[t]=='string'&&isNaN(+t)&&(n.style[t]='')},n._extend=function(n,t){var i,r;for(i in t)r=t[i],wjcCore.isObject(r)&&n[i]?wjcCore.copy(n[i],r):n[i]=r;return n},n._checkParentCollapsed=function(n,t){var i=!1;return Object.keys(n).forEach(function(r){n[r]===!0&&i===!1&&!isNaN(t)&&+r<t&&(i=!0)}),i},n._getColSpan=function(n,t,i){for(var u=0,r=t.leftCol;r<=t.rightCol;r++)(!i||i(n.columns[r]))&&u++;return u},n}();exports.FlexGridXlsxConverter=FlexGridXlsxConverter