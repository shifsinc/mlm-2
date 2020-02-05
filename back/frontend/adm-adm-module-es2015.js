(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm-adm-module"],{

/***/ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js ***!
  \*********************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class ScrollbarHelper {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    /**
     * @return {?}
     */
    getWidth() {
        /** @type {?} */
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        /** @type {?} */
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        /** @type {?} */
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        /** @type {?} */
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
}
ScrollbarHelper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ScrollbarHelper.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
    /**
     * @param {?} element
     * @return {?}
     */
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
}
DimensionsHelper.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @return {?}
     */
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    /**
     * @return {?}
     */
    onInputChange() {
        this.columnInputChanges.next();
    }
}
ColumnChangesService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableFooterTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableFooterTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-footer-template]' },] }
];
/** @nocollapse */
DataTableFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
    /**
     * @param {?} element
     * @param {?} zone
     */
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.runCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    /**
     * @return {?}
     */
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.isVisible = true;
            this.visible.emit(true);
        }));
    }
    /**
     * @return {?}
     */
    runCheck() {
        /** @type {?} */
        const check = (/**
         * @return {?}
         */
        () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.timeout = setTimeout((/**
                     * @return {?}
                     */
                    () => check()), 50);
                }));
            }
        });
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => check()));
    }
}
VisibilityDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[visibilityObserver]' },] }
];
/** @nocollapse */
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
VisibilityDirective.propDecorators = {
    isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.visible',] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        // we only want to drag the inner header text
        /** @type {?} */
        const isDragElm = ((/** @type {?} */ (event.target))).classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            /** @type {?} */
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            /** @type {?} */
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.onMouseup(ev)));
            /** @type {?} */
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.move(ev, mouseDownPos)));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    /**
     * @param {?} event
     * @param {?} mouseDownPos
     * @return {?}
     */
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        /** @type {?} */
        const x = event.clientX - mouseDownPos.x;
        /** @type {?} */
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
DraggableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[draggable]' },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DraggableDirective.propDecorators = {
    dragEventTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/** @type {?} */
const MouseEvent = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global))))
    .MouseEvent));
/** @type {?} */
const KeyboardEvent = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global))))
    .KeyboardEvent));
/** @type {?} */
const Event = (/** @type {?} */ ((((/** @type {?} */ ((typeof window !== 'undefined' && window)))) || ((/** @type {?} */ (global)))).Event));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResizeableDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const renderer2 = this.renderer;
        /** @type {?} */
        const node = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(node, 'resize-handle');
        }
        else {
            renderer2.addClass(node, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, node);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
    }
    /**
     * @return {?}
     */
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        /** @type {?} */
        const isHandle = ((/** @type {?} */ (event.target))).classList.contains('resize-handle');
        /** @type {?} */
        const initialWidth = this.element.clientWidth;
        /** @type {?} */
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            /** @type {?} */
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.onMouseup()));
            /** @type {?} */
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => this.move(e, initialWidth, mouseDownScreenX)));
            this.subscription.add(mouseMoveSub);
        }
    }
    /**
     * @param {?} event
     * @param {?} initialWidth
     * @param {?} mouseDownScreenX
     * @return {?}
     */
    move(event, initialWidth, mouseDownScreenX) {
        /** @type {?} */
        const movementX = event.screenX - mouseDownScreenX;
        /** @type {?} */
        const newWidth = initialWidth + movementX;
        /** @type {?} */
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        /** @type {?} */
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
ResizeableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            },] }
];
/** @nocollapse */
ResizeableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ResizeableDirective.propDecorators = {
    resizeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderableDirective {
    /**
     * @param {?} differs
     * @param {?} document
     */
    constructor(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.differ = differs.find({}).create();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.draggables.forEach((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    updateSubscriptions() {
        /** @type {?} */
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            /** @type {?} */
            const subscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            });
            /** @type {?} */
            const unsubscribe = (/**
             * @param {?} __0
             * @return {?}
             */
            ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            });
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    /**
     * @return {?}
     */
    onDragStart() {
        this.positions = {};
        /** @type {?} */
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            /** @type {?} */
            const elm = dragger.element;
            /** @type {?} */
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onDragging({ element, model, event }) {
        /** @type {?} */
        const prevPos = this.positions[model.prop];
        /** @type {?} */
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onDragEnd({ element, model, event }) {
        /** @type {?} */
        const prevPos = this.positions[model.prop];
        /** @type {?} */
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    /**
     * @param {?} model
     * @param {?} event
     * @return {?}
     */
    isTarget(model, event) {
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        const x = event.x || event.clientX;
        /** @type {?} */
        const y = event.y || event.clientY;
        /** @type {?} */
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            /** @type {?} */
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el === pos.element))) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    /**
     * @private
     * @return {?}
     */
    createMapDiffs() {
        return this.draggables.toArray().reduce((/**
         * @param {?} acc
         * @param {?} curr
         * @return {?}
         */
        (acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }), {});
    }
}
OrderableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[orderable]' },] }
];
/** @nocollapse */
OrderableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
OrderableDirective.propDecorators = {
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    targetChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DraggableDirective, { descendants: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    /**
     * @return {?}
     */
    get press() {
        return this.pressing;
    }
    /**
     * @return {?}
     */
    get isLongPress() {
        return this.isLongPressing;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        /** @type {?} */
        const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe((/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => this.onMouseup()));
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((/**
             * @param {?} mouseEvent
             * @return {?}
             */
            (mouseEvent) => this.onMouseMove(mouseEvent))));
            this.loop(event);
        }), this.duration);
        this.loop(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            /** @type {?} */
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            /** @type {?} */
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }), 50);
        }
    }
    /**
     * @return {?}
     */
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    /**
     * @return {?}
     */
    onMouseup() {
        this.endPress();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
LongPressDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[long-press]' },] }
];
LongPressDirective.propDecorators = {
    pressEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pressModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    longPressStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    press: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.press',] }],
    isLongPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.longpress',] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollerComponent {
    /**
     * @param {?} ngZone
     * @param {?} element
     * @param {?} renderer
     */
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            /** @type {?} */
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    /**
     * @param {?} offsetY
     * @return {?}
     */
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScrolled(event) {
        /** @type {?} */
        const dom = (/** @type {?} */ (event.currentTarget));
        requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        }));
    }
    /**
     * @return {?}
     */
    updateOffset() {
        /** @type {?} */
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
}
ScrollerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-scroller',
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
ScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ScrollerComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableGroupHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DatatableGroupHeaderTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngx-datatable-group-header-template]'
            },] }
];
/** @nocollapse */
DatatableGroupHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     * @param {?} group
     * @return {?}
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     * @return {?}
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     * @return {?}
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableGroupHeaderDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-group-header' },] }
];
DatatableGroupHeaderDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Always returns the empty string ''
 * @return {?}
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 * @param {?} prop
 * @return {?}
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param {?} row array of values
 * @param {?} index numeric index
 * @return {?} any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    /** @type {?} */
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param {?} obj object containing the field
 * @param {?} fieldName field name string
 * @return {?}
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    /** @type {?} */
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    /** @type {?} */
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    /** @type {?} */
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} prop
 * @return {?}
 */
function optionalGetterForProp(prop) {
    return prop && ((/**
     * @param {?} row
     * @return {?}
     */
    row => getterForProp(prop)(row, prop)));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param {?} rows
 *
 * @param {?=} from
 * @param {?=} to
 * @return {?}
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        /** @type {?} */
        const nodeById = {};
        /** @type {?} */
        const l = rows.length;
        /** @type {?} */
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        // that's the root node
        /** @type {?} */
        const uniqIDs = rows.reduce((/**
         * @param {?} arr
         * @param {?} item
         * @return {?}
         */
        (arr, item) => {
            /** @type {?} */
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }), []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            /** @type {?} */
            let parent = 0;
            /** @type {?} */
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        /** @type {?} */
        let resolvedRows = [];
        nodeById[0].flatten((/**
         * @return {?}
         */
        function () {
            resolvedRows = [...resolvedRows, this.row];
        }), true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    /**
     * @param {?=} row
     */
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    /**
     * @param {?} f
     * @param {?} recursive
     * @return {?}
     */
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                /** @type {?} */
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 * @param {?} str
 * @return {?}
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, (/**
     * @param {?} a
     * @param {?} b
     * @param {?} c
     * @return {?}
     */
    function (a, b, c) {
        return b.trim() + c.toUpperCase();
    }));
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 * @param {?} str
 * @return {?}
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, (/**
     * @param {?} match
     * @return {?}
     */
    match => ` ${match}`)).replace(/^./, (/**
     * @param {?} match
     * @return {?}
     */
    match => match.toUpperCase()));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 * @return {?}
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sets the column defaults
 * @param {?} columns
 * @return {?}
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    /** @type {?} */
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 * @param {?} templates
 * @return {?}
 */
function translateTemplates(templates) {
    /** @type {?} */
    const result = [];
    for (const temp of templates) {
        /** @type {?} */
        const col = {};
        /** @type {?} */
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ColumnMode = {
    standard: 'standard',
    flex: 'flex',
    force: 'force',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SelectionType = {
    single: 'single',
    multi: 'multi',
    multiClick: 'multiClick',
    cell: 'cell',
    checkbox: 'checkbox',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SortType = {
    single: 'single',
    multi: 'multi',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ContextmenuType = {
    header: 'header',
    body: 'body',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnHeaderDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnHeaderDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-header-template]' },] }
];
/** @nocollapse */
DataTableColumnHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnCellDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-cell-template]' },] }
];
/** @nocollapse */
DataTableColumnCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnCellTreeToggle {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellTreeToggle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngx-datatable-tree-toggle]' },] }
];
/** @nocollapse */
DataTableColumnCellTreeToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableColumnDirective {
    /**
     * @param {?} columnChangesService
     */
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    /**
     * @return {?}
     */
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    /**
     * @return {?}
     */
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    /**
     * @return {?}
     */
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-column' },] }
];
/** @nocollapse */
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
DataTableColumnDirective.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    flexGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resizeable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    comparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    canAutoResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerCheckboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cellClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTreeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeLevelIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _cellTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cellTemplate',] }],
    _cellTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _headerTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['headerTemplate',] }],
    _headerTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _treeToggleTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeToggleTemplate',] }],
    _treeToggleTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableRowDetailTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
DatatableRowDetailTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngx-datatable-row-detail-template]'
            },] }
];
/** @nocollapse */
DatatableRowDetailTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     * @param {?} row
     * @return {?}
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     * @return {?}
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     * @return {?}
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableRowDetailDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-row-detail' },] }
];
DatatableRowDetailDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableFooterDirective {
    /**
     * @return {?}
     */
    get template() {
        return this._templateInput || this._templateQuery;
    }
}
DatatableFooterDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngx-datatable-footer' },] }
];
DatatableFooterDirective.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the columns by pin.
 * @param {?} cols
 * @return {?}
 */
function columnsByPin(cols) {
    /** @type {?} */
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 * @param {?} groups
 * @param {?} all
 * @return {?}
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
function columnTotalWidth(columns, prop) {
    /** @type {?} */
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            /** @type {?} */
            const has = prop && c[prop];
            /** @type {?} */
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 * @param {?} columns
 * @param {?=} prop
 * @return {?}
 */
function columnsTotalWidth(columns, prop) {
    /** @type {?} */
    let totalWidth = 0;
    for (const column of columns) {
        /** @type {?} */
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
/**
 * @param {?} val
 * @return {?}
 */
function columnsByPinArr(val) {
    /** @type {?} */
    const colsByPinArr = [];
    /** @type {?} */
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     * @return {?}
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param {?} details
     * @return {?}
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        /** @type {?} */
        const isFn = typeof rowHeight === 'function';
        /** @type {?} */
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        /** @type {?} */
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            /** @type {?} */
            const row = rows[i];
            /** @type {?} */
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            /** @type {?} */
            const expanded = rowExpansions.get(row);
            if (row && expanded === 1) {
                if (isDetailFn) {
                    /** @type {?} */
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     * @param {?} scrollY
     * @return {?}
     */
    getRowIndex(scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     * @param {?} atRowIndex
     * @param {?} byRowHeight
     * @return {?}
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        /** @type {?} */
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     * @param {?} atIndex
     * @return {?}
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        /** @type {?} */
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     * @param {?} atIndexA
     * @param {?} atIndexB
     * @return {?}
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     * @private
     * @param {?} sum
     * @return {?}
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length)
            return 0;
        /** @type {?} */
        let pos = -1;
        /** @type {?} */
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        /** @type {?} */
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            /** @type {?} */
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cache = {};
/** @type {?} */
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    /** @type {?} */
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    /** @type {?} */
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    /** @type {?} */
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
/** @type {?} */
const prefix = ((ɵ0))();
/**
 * @param {?} property
 * @return {?}
 */
function getVendorPrefixedName(property) {
    /** @type {?} */
    const name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// browser detection and prefixing tools
/** @type {?} */
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
/** @type {?} */
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
/** @type {?} */
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
/** @type {?} */
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
/** @type {?} */
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
/** @type {?} */
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
/**
 * @param {?} styles
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new Map();
        this.rowExpansions = new Map();
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (/**
         * @param {?=} row
         * @param {?=} index
         * @return {?}
         */
        (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            /** @type {?} */
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : ((/** @type {?} */ (rowHeight)));
        });
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        (index, row) => {
            /** @type {?} */
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rows(val) {
        this._rows = val;
        this.rowExpansions.clear();
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get rows() {
        return this._rows;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        this._columns = val;
        /** @type {?} */
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offset(val) {
        this._offset = val;
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get offset() {
        return this._offset;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get rowCount() {
        return this._rowCount;
    }
    /**
     * @return {?}
     */
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    /**
     * @return {?}
     */
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     * @return {?}
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     * @return {?}
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     * @return {?}
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            }));
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            }));
        }
    }
    /**
     * Called once, before the instance is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     * @param {?=} offset
     * @return {?}
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            /** @type {?} */
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     * @param {?} event
     * @return {?}
     */
    onBodyScroll(event) {
        /** @type {?} */
        const scrollYPos = event.scrollYPos;
        /** @type {?} */
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     * @param {?} direction
     * @return {?}
     */
    updatePage(direction) {
        /** @type {?} */
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     * @return {?}
     */
    updateRows() {
        const { first, last } = this.indexes;
        /** @type {?} */
        let rowIndex = first;
        /** @type {?} */
        let idx = 0;
        /** @type {?} */
        const temp = [];
        this.rowIndexes.clear();
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            /** @type {?} */
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                /** @type {?} */
                const group = this.groupedRows[rowIndex];
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                /** @type {?} */
                const row = this.rows[rowIndex];
                if (row) {
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     * @param {?} row
     * @return {?}
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return (/** @type {?} */ (this.rowHeight));
    }
    /**
     * @param {?} group the group with all rows
     * @return {?}
     */
    getGroupHeight(group) {
        /** @type {?} */
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     * @param {?} row
     * @return {?}
     */
    getRowAndDetailHeight(row) {
        /** @type {?} */
        let rowHeight = this.getRowHeight(row);
        /** @type {?} */
        const expanded = this.rowExpansions.get(row);
        // Adding detail row height if its expanded.
        if (expanded === 1) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * \@memberOf DataTableBodyComponent
     * @param {?} rows the row that needs to be placed in the 2D space.
     * @return {?} the CSS3 style to be applied
     *
     */
    getRowsStyles(rows) {
        /** @type {?} */
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                /** @type {?} */
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            /** @type {?} */
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * \@memberOf DataTableBodyComponent
     * @return {?} the CSS3 style to be applied
     *
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        /** @type {?} */
        const styles = { position: 'absolute' };
        /** @type {?} */
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     * @return {?}
     */
    hideIndicator() {
        setTimeout((/**
         * @return {?}
         */
        () => (this.loadingIndicator = false)), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     * @return {?}
     */
    updateIndexes() {
        /** @type {?} */
        let first = 0;
        /** @type {?} */
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                /** @type {?} */
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     * @return {?}
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: this.rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     * @return {?}
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        /** @type {?} */
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     * @param {?} row
     * @return {?}
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        /** @type {?} */
        let expanded = this.rowExpansions.get(row);
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            /** @type {?} */
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        expanded = expanded ^= 1;
        this.rowExpansions.set(row, expanded);
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     * @param {?} expanded
     * @return {?}
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions.clear();
        /** @type {?} */
        const rowExpanded = expanded ? 1 : 0;
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        for (const row of this.rows) {
            this.rowExpansions.set(row, rowExpanded);
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     * @return {?}
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     * @param {?} group
     * @return {?}
     */
    stylesByGroup(group) {
        /** @type {?} */
        const widths = this.columnGroupWidths;
        /** @type {?} */
        const offsetX = this.offsetX;
        /** @type {?} */
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            /** @type {?} */
            const totalDiff = widths.total - bodyWidth;
            /** @type {?} */
            const offsetDiff = totalDiff - offsetX;
            /** @type {?} */
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     * @param {?} row
     * @return {?}
     */
    getRowExpanded(row) {
        if (this.rowExpansions.size === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.set(group, 1);
            }
        }
        /** @type {?} */
        const expanded = this.rowExpansions.get(row);
        return expanded === 1;
    }
    /**
     * Gets the row index given a row
     * @param {?} row
     * @return {?}
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
}
DataTableBodyComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-body',
                template: `
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'datatable-body'
                }
            }] }
];
/** @nocollapse */
DataTableBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    emptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bodyWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    bodyHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    detailToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [ScrollerComponent, { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableHeaderComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._columns) {
                /** @type {?} */
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        }));
    }
    /**
     * @return {?}
     */
    get innerWidth() {
        return this._innerWidth;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    /**
     * @return {?}
     */
    get headerHeight() {
        return this._headerHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        this._columns = val;
        /** @type {?} */
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        }));
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    /**
     * @return {?}
     */
    get offsetX() {
        return this._offsetX;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout((/**
         * @return {?}
         */
        () => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            /** @type {?} */
            const column = this._columns.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.$$id === model.$$id));
            if (column) {
                column.dragging = false;
            }
        }), 5);
    }
    /**
     * @return {?}
     */
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onColumnReordered({ prevIndex, newIndex, model }) {
        /** @type {?} */
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            /** @type {?} */
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            /** @type {?} */
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getColumn(index) {
        /** @type {?} */
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        /** @type {?} */
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        /** @type {?} */
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */
    calcNewSorts(column, prevValue, newValue) {
        /** @type {?} */
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        /** @type {?} */
        const sorts = this.sorts.map((/**
         * @param {?} s
         * @param {?} i
         * @return {?}
         */
        (s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        }));
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    /**
     * @return {?}
     */
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        this.cd.detectChanges();
    }
    /**
     * @param {?} group
     * @return {?}
     */
    calcStylesByGroup(group) {
        /** @type {?} */
        const widths = this._columnGroupWidths;
        /** @type {?} */
        const offsetX = this.offsetX;
        /** @type {?} */
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            const totalDiff = widths.total - this.innerWidth;
            /** @type {?} */
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
}
DataTableHeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-header',
                template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                host: {
                    class: 'datatable-header'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
DataTableHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderComponent.propDecorators = {
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dealsWithGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    headerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Throttle a function
 * @param {?} func
 * @param {?} wait
 * @param {?=} options
 * @return {?}
 */
function throttle(func, wait, options) {
    options = options || {};
    /** @type {?} */
    let context;
    /** @type {?} */
    let args;
    /** @type {?} */
    let result;
    /** @type {?} */
    let timeout = null;
    /** @type {?} */
    let previous = 0;
    /**
     * @return {?}
     */
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return (/**
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        /** @type {?} */
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    });
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 * @param {?} duration
 * @param {?=} options
 * @return {?}
 */
function throttleable(duration, options) {
    return (/**
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: (/**
             * @return {?}
             */
            function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            })
        };
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Calculates the Total Flex Grow
 * @param {?} columns
 * @return {?}
 */
function getTotalFlexGrow(columns) {
    /** @type {?} */
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @return {?}
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    /** @type {?} */
    const columnsWidth = columnsTotalWidth(allColumns);
    /** @type {?} */
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    /** @type {?} */
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 * @param {?} colsByGroup
 * @param {?} maxWidth
 * @param {?} totalFlexGrow
 * @return {?}
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    /** @type {?} */
    const hasMinWidth = {};
    /** @type {?} */
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        /** @type {?} */
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    /** @type {?} */
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 * @param {?} allColumns
 * @param {?} expectedWidth
 * @param {?} startIdx
 * @param {?} allowBleed
 * @param {?=} defaultColWidth
 * @return {?}
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    /** @type {?} */
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter((/**
     * @param {?} c
     * @return {?}
     */
    c => {
        return c.canAutoResize !== false;
    }));
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    /** @type {?} */
    let additionWidthPerColumn = 0;
    /** @type {?} */
    let exceedsWindow = false;
    /** @type {?} */
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    /** @type {?} */
    let remainingWidth = expectedWidth - contentWidth;
    /** @type {?} */
    const columnsProcessed = [];
    /** @type {?} */
    const remainingWidthLimit = 1;
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                /** @type {?} */
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 * @param {?} columnsToResize
 * @param {?} columnsProcessed
 * @return {?}
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        /** @type {?} */
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 * @param {?} allColumns
 * @param {?=} defaultColWidth
 * @return {?}
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    /** @type {?} */
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SortDirection = {
    asc: 'asc',
    desc: 'desc',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the next sort direction
 * @param {?} sortType
 * @param {?} current
 * @return {?}
 */
function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || (isNaN(parseFloat(b)) || !isFinite(b))) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 * @param {?} rows
 * @param {?} columns
 * @param {?} dirs
 * @return {?}
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     * @type {?}
     */
    const rowToIndexMap = new Map();
    rows.forEach((/**
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    (row, index) => rowToIndexMap.set(row, index)));
    /** @type {?} */
    const temp = [...rows];
    /** @type {?} */
    const cols = columns.reduce((/**
     * @param {?} obj
     * @param {?} col
     * @return {?}
     */
    (obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }), {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    /** @type {?} */
    const cachedDirs = dirs.map((/**
     * @param {?} dir
     * @return {?}
     */
    dir => {
        /** @type {?} */
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    }));
    return temp.sort((/**
     * @param {?} rowA
     * @param {?} rowB
     * @return {?}
     */
    function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            /** @type {?} */
            const propA = valueGetter(rowA, prop);
            /** @type {?} */
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            /** @type {?} */
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatatableComponent {
    /**
     * @param {?} scrollbarHelper
     * @param {?} dimensionsHelper
     * @param {?} cd
     * @param {?} element
     * @param {?} differs
     * @param {?} columnChangesService
     * @param {?} configuration
     */
    constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * \@memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => x);
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
        }
    }
    /**
     * Rows that are displayed in the table.
     * @param {?} val
     * @return {?}
     */
    set rows(val) {
        this._rows = val;
        if (val) {
            this._internalRows = [...val];
        }
        // auto sort on new updates
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // recalculate sizes/etc
        this.recalculate();
        if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
        this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     * @return {?}
     */
    get rows() {
        return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     * @param {?} val
     * @return {?}
     */
    set groupRowsBy(val) {
        if (val) {
            this._groupRowsBy = val;
            if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
        }
    }
    /**
     * @return {?}
     */
    get groupRowsBy() {
        return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        if (val) {
            this._internalColumns = [...val];
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
        }
        this._columns = val;
    }
    /**
     * Get the columns.
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     * @param {?} val
     * @return {?}
     */
    set limit(val) {
        this._limit = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the limit.
     * @return {?}
     */
    get limit() {
        return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     * @param {?} val
     * @return {?}
     */
    set count(val) {
        this._count = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the count.
     * @return {?}
     */
    get count() {
        return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     * @param {?} val
     * @return {?}
     */
    set offset(val) {
        this._offset = val;
    }
    /**
     * @return {?}
     */
    get offset() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     * @return {?}
     */
    get isFixedHeader() {
        /** @type {?} */
        const headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? (/** @type {?} */ (headerHeight)) !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     * @return {?}
     */
    get isFixedRow() {
        return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     * @return {?}
     */
    get isVertScroll() {
        return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     * @return {?}
     */
    get isVirtualized() {
        return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     * @return {?}
     */
    get isHorScroll() {
        return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     * @return {?}
     */
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     * @return {?}
     */
    get isCheckboxSelection() {
        return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     * @return {?}
     */
    get isCellSelection() {
        return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     * @return {?}
     */
    get isSingleSelection() {
        return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     * @return {?}
     */
    get isMultiSelection() {
        return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     * @return {?}
     */
    get isMultiClickSelection() {
        return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     * @param {?} val
     * @return {?}
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     * @return {?}
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     * @return {?}
     */
    get allRowsSelected() {
        /** @type {?} */
        let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
        if (this.selectAllRowsOnPage) {
            /** @type {?} */
            const indexes = this.bodyComponent.indexes;
            /** @type {?} */
            const rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
        }
        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     * @return {?}
     */
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            this.recalculate();
            // emit page for virtual server-side kickoff
            if (this.externalPaging && this.scrollbarV) {
                this.page.emit({
                    count: this.count,
                    pageSize: this.pageSize,
                    limit: this.limit,
                    offset: 0
                });
            }
        }));
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     * @return {?}
     */
    ngAfterContentInit() {
        this.columnTemplates.changes.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        v => this.translateColumns(v)));
        this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     * @param {?} val
     * @return {?}
     */
    translateColumns(val) {
        if (val) {
            /** @type {?} */
            const arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param {?} originalArray the original array passed via parameter
     * @param {?} groupBy
     * @return {?}
     */
    groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        /** @type {?} */
        const map = new Map();
        /** @type {?} */
        let i = 0;
        originalArray.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        }));
        /** @type {?} */
        const addGroup = (/**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        (key, value) => {
            return { key, value };
        });
        // convert map back to a simple array of objects
        return Array.from(map, (/**
         * @param {?} x
         * @return {?}
         */
        x => addGroup(x[0], x[1])));
    }
    /*
       * Lifecycle hook that is called when Angular dirty checks a directive.
       */
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = [...this.rows];
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     * @return {?}
     */
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
    }
    /**
     * Window resize handler to update sizes.
     * @return {?}
     */
    onWindowResize() {
        this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     * @param {?=} columns
     * @param {?=} forceIdx
     * @param {?=} allowBleed
     * @return {?}
     */
    recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
        if (!columns)
            return undefined;
        /** @type {?} */
        let width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     * @return {?}
     */
    recalculateDims() {
        /** @type {?} */
        const dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            /** @type {?} */
            let height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     * @return {?}
     */
    recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     * @param {?} __0
     * @return {?}
     */
    onBodyPage({ offset }) {
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    /**
     * The body triggered a scroll event.
     * @param {?} event
     * @return {?}
     */
    onBodyScroll(event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     * @param {?} event
     * @return {?}
     */
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    }
    /**
     * Recalculates the sizes of the page
     * @param {?=} val
     * @return {?}
     */
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            const size = Math.ceil(this.bodyHeight / ((/** @type {?} */ (this.rowHeight))));
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    }
    /**
     * Calculates the row count.
     * @param {?=} val
     * @return {?}
     */
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    onColumnContextmenu({ event, column }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     * @param {?} __0
     * @return {?}
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
    }
    /**
     * The header triggered a column resize event.
     * @param {?} __0
     * @return {?}
     */
    onColumnResize({ column, newValue }) {
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        /** @type {?} */
        let idx;
        /** @type {?} */
        const cols = this._internalColumns.map((/**
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        (c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        }));
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    /**
     * The header triggered a column re-order event.
     * @param {?} __0
     * @return {?}
     */
    onColumnReorder({ column, newValue, prevValue }) {
        /** @type {?} */
        const cols = this._internalColumns.map((/**
         * @param {?} c
         * @return {?}
         */
        c => {
            return Object.assign({}, c);
        }));
        if (this.swapColumns) {
            /** @type {?} */
            const prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                /** @type {?} */
                const movedCol = cols[prevValue];
                for (let i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                /** @type {?} */
                const movedCol = cols[prevValue];
                for (let i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    /**
     * The header triggered a column sort event.
     * @param {?} event
     * @return {?}
     */
    onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     * @param {?} event
     * @return {?}
     */
    onHeaderSelect(event) {
        if (this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            /** @type {?} */
            const first = this.bodyComponent.indexes.first;
            /** @type {?} */
            const last = this.bodyComponent.indexes.last;
            /** @type {?} */
            const allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            /** @type {?} */
            const allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
    }
    /**
     * A row was selected from body
     * @param {?} event
     * @return {?}
     */
    onBodySelect(event) {
        this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     * @param {?} event
     * @return {?}
     */
    onTreeAction(event) {
        /** @type {?} */
        const row = event.row;
        // TODO: For duplicated items this will not work
        /** @type {?} */
        const rowIndex = this._rows.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        r => r[this.treeToRelation] === event.row[this.treeToRelation]));
        this.treeAction.emit({ row, rowIndex });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        subscription => subscription.unsubscribe()));
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     * @private
     * @return {?}
     */
    listenForColumnInputChanges() {
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.columnTemplates) {
                this.columnTemplates.notifyOnChanges();
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
}
DatatableComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-datatable',
                template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;-webkit-transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            }] }
];
/** @nocollapse */
DatatableComponent.ctorParameters = () => [
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: DimensionsHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ColumnChangesService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['configuration',] }] }
];
DatatableComponent.propDecorators = {
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    swapColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectAllRowsOnPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeFromRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeToRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tableContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isFixedHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-header',] }],
    isFixedRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-row',] }],
    isVertScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-vertical',] }],
    isVirtualized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.virtualized',] }],
    isHorScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-horz',] }],
    isSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.selectable',] }],
    isCheckboxSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.checkbox-selection',] }],
    isCellSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.cell-selection',] }],
    isSingleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.single-selection',] }],
    isMultiSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-selection',] }],
    isMultiClickSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-click-selection',] }],
    columnTemplates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DataTableColumnDirective,] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailDirective, { static: false },] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderDirective, { static: false },] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableFooterDirective, { static: false },] }],
    bodyComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableBodyComponent, { static: false },] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableHeaderComponent, { static: false },] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    throttleable(5),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:returntype", void 0)
], DatatableComponent.prototype, "onWindowResize", null);
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableHeaderCellComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    /**
     * @return {?}
     */
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get sorts() {
        return this._sorts;
    }
    /**
     * @return {?}
     */
    get columnCssClasses() {
        /** @type {?} */
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                /** @type {?} */
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    /** @type {?} */
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        /** @type {?} */
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    /**
     * @return {?}
     */
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    /**
     * @return {?}
     */
    get minWidth() {
        return this.column.minWidth;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this.column.maxWidth;
    }
    /**
     * @return {?}
     */
    get width() {
        return this.column.width;
    }
    /**
     * @return {?}
     */
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    /**
     * @param {?} sorts
     * @return {?}
     */
    calcSortDir(sorts) {
        if (sorts && this.column) {
            /** @type {?} */
            const sort = sorts.find((/**
             * @param {?} s
             * @return {?}
             */
            (s) => {
                return s.prop === this.column.prop;
            }));
            if (sort)
                return sort.dir;
        }
    }
    /**
     * @return {?}
     */
    onSort() {
        if (!this.column.sortable)
            return;
        /** @type {?} */
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    /**
     * @param {?} sortDir
     * @return {?}
     */
    calcSortClass(sortDir) {
        if (sortDir === SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn`;
        }
    }
}
DataTableHeaderCellComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-header-cell',
                template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
                host: {
                    class: 'datatable-header-cell'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
DataTableHeaderCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderCellComponent.propDecorators = {
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.title',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    /**
     * @return {?}
     */
    get curPage() {
        return this.offset + 1;
    }
}
DataTableFooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
DataTableFooterComponent.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTablePagerComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    get count() {
        return this._count;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @return {?}
     */
    get totalPages() {
        /** @type {?} */
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    /**
     * @return {?}
     */
    canPrevious() {
        return this.page > 1;
    }
    /**
     * @return {?}
     */
    canNext() {
        return this.page < this.totalPages;
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.selectPage(this.page - 1);
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.selectPage(this.page + 1);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    /**
     * @param {?=} page
     * @return {?}
     */
    calcPages(page) {
        /** @type {?} */
        const pages = [];
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = this.totalPages;
        /** @type {?} */
        const maxSize = 5;
        /** @type {?} */
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: (/** @type {?} */ (((/** @type {?} */ (num)))))
            });
        }
        return pages;
    }
}
DataTablePagerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-pager',
                template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
DataTablePagerComponent.propDecorators = {
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressBarComponent {
}
ProgressBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-progress',
                template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Keys = {
    up: 38,
    down: 40,
    return: 13,
    escape: 27,
    left: 37,
    right: 39,
};
Keys[Keys.up] = 'up';
Keys[Keys.down] = 'down';
Keys[Keys.return] = 'return';
Keys[Keys.escape] = 'escape';
Keys[Keys.left] = 'left';
Keys[Keys.right] = 'right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableBodyRowComponent {
    /**
     * @param {?} differs
     * @param {?} scrollbarHelper
     * @param {?} cd
     * @param {?} element
     */
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set innerWidth(val) {
        if (this._columns) {
            /** @type {?} */
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    get innerWidth() {
        return this._innerWidth;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    /**
     * @return {?}
     */
    get offsetX() {
        return this._offsetX;
    }
    /**
     * @return {?}
     */
    get cssClass() {
        /** @type {?} */
        let cls = 'datatable-body-row';
        if (this.isSelected) {
            cls += ' active';
        }
        if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
        }
        if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
        }
        if (this.rowClass) {
            /** @type {?} */
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                /** @type {?} */
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    /**
     * @return {?}
     */
    get columnsTotalWidths() {
        return this._columnGroupWidths.total;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * @return {?}
     */
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    /**
     * @param {?} group
     * @return {?}
     */
    calcStylesByGroup(group) {
        /** @type {?} */
        const widths = this._columnGroupWidths;
        /** @type {?} */
        const offsetX = this.offsetX;
        /** @type {?} */
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            /** @type {?} */
            const totalDiff = widths.total - bodyWidth;
            /** @type {?} */
            const offsetDiff = totalDiff - offsetX;
            /** @type {?} */
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isTargetRow = event.target === this._element;
        /** @type {?} */
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    recalculateColumns(val = this.columns) {
        this._columns = val;
        /** @type {?} */
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    /**
     * @return {?}
     */
    onTreeAction() {
        this.treeAction.emit();
    }
}
DataTableBodyRowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-body-row',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
            }] }
];
/** @nocollapse */
DataTableBodyRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DataTableBodyRowComponent.propDecorators = {
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnsTotalWidths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
    onMouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableRowWrapperComponent {
    /**
     * @param {?} cd
     * @param {?} differs
     */
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this._expanded = false;
        this.rowDiffer = differs.find({}).create();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get rowIndex() {
        return this._rowIndex;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    /**
     * @return {?}
     */
    getGroupHeaderStyle() {
        /** @type {?} */
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
}
DataTableRowWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || (!groupHeader || !groupHeader.template)">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
                host: {
                    class: 'datatable-row-wrapper'
                }
            }] }
];
/** @nocollapse */
DataTableRowWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
];
DataTableRowWrapperComponent.propDecorators = {
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    detailRowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataTableBodyCellComponent {
    /**
     * @param {?} element
     * @param {?} cd
     */
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get group() {
        return this._group;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get rowHeight() {
        return this._rowHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get rowIndex() {
        return this._rowIndex;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get column() {
        return this._column;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get row() {
        return this._row;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    /**
     * @return {?}
     */
    get sorts() {
        return this._sorts;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get treeStatus() {
        return this._treeStatus;
    }
    /**
     * @return {?}
     */
    get columnCssClasses() {
        /** @type {?} */
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                /** @type {?} */
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    /** @type {?} */
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true) {
                            cls += ` ${k}`;
                        }
                    }
                }
            }
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    /**
     * @return {?}
     */
    get width() {
        return this.column.width;
    }
    /**
     * @return {?}
     */
    get minWidth() {
        return this.column.minWidth;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this.column.maxWidth;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.checkValueUpdates();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    /**
     * @return {?}
     */
    checkValueUpdates() {
        /** @type {?} */
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            /** @type {?} */
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            /** @type {?} */
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.isFocused = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.isFocused = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isTargetCell = event.target === this._element;
        /** @type {?} */
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    /**
     * @param {?} sorts
     * @return {?}
     */
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        /** @type {?} */
        const sort = sorts.find((/**
         * @param {?} s
         * @return {?}
         */
        (s) => {
            return s.prop === this.column.prop;
        }));
        if (sort) {
            return sort.dir;
        }
    }
    /**
     * @param {?} html
     * @return {?}
     */
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    /**
     * @return {?}
     */
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    /**
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    calcLeftMargin(column, row) {
        /** @type {?} */
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
}
DataTableBodyCellComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-body-cell',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
            }] }
];
/** @nocollapse */
DataTableBodyCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyCellComponent.propDecorators = {
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true },] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dblclick', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selected
 * @param {?} row
 * @param {?} comparefn
 * @return {?}
 */
function selectRows(selected, row, comparefn) {
    /** @type {?} */
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
/**
 * @param {?} selected
 * @param {?} rows
 * @param {?} index
 * @param {?} prevIndex
 * @param {?} comparefn
 * @return {?}
 */
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    /** @type {?} */
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        /** @type {?} */
        const row = rows[i];
        /** @type {?} */
        const greater = i >= prevIndex && i <= index;
        /** @type {?} */
        const lesser = i <= prevIndex && i >= index;
        /** @type {?} */
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Model() { }
if (false) {}
class DataTableSelectionComponent {
    constructor() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        /** @type {?} */
        const chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        const multi = this.selectionType === SelectionType.multi;
        /** @type {?} */
        const multiClick = this.selectionType === SelectionType.multiClick;
        /** @type {?} */
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    /**
     * @param {?} model
     * @param {?} index
     * @return {?}
     */
    onActivate(model, index) {
        const { type, event, row } = model;
        /** @type {?} */
        const chkbox = this.selectionType === SelectionType.checkbox;
        /** @type {?} */
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (((/** @type {?} */ (event))).keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onKeyboardFocus(model) {
        const { keyCode } = (/** @type {?} */ (model.event));
        /** @type {?} */
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            /** @type {?} */
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    focusRow(rowElement, keyCode) {
        /** @type {?} */
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    /**
     * @param {?} rowElement
     * @param {?} keyCode
     * @return {?}
     */
    getPrevNextRow(rowElement, keyCode) {
        /** @type {?} */
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            /** @type {?} */
            let focusElement;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    /**
     * @param {?} cellElement
     * @param {?} rowElement
     * @param {?} keyCode
     * @param {?} cellIndex
     * @return {?}
     */
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        /** @type {?} */
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            /** @type {?} */
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                /** @type {?} */
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    /**
     * @param {?} row
     * @param {?} selected
     * @return {?}
     */
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        /** @type {?} */
        const rowId = this.rowIdentity(row);
        return selected.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            /** @type {?} */
            const id = this.rowIdentity(r);
            return id === rowId;
        }));
    }
}
DataTableSelectionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-selection',
                template: `
    <ng-content></ng-content>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
DataTableSelectionComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ISummaryColumn() { }
if (false) {}
/**
 * @param {?} cells
 * @return {?}
 */
function defaultSumFunc(cells) {
    /** @type {?} */
    const cellsWithValues = cells.filter((/**
     * @param {?} cell
     * @return {?}
     */
    cell => !!cell));
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some((/**
     * @param {?} cell
     * @return {?}
     */
    cell => typeof cell !== 'number'))) {
        return null;
    }
    return cellsWithValues.reduce((/**
     * @param {?} res
     * @param {?} cell
     * @return {?}
     */
    (res, cell) => res + cell));
}
/**
 * @param {?} cells
 * @return {?}
 */
function noopSumFunc(cells) {
    return null;
}
class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    /**
     * @private
     * @return {?}
     */
    updateInternalColumns() {
        this._internalColumns = this.columns.map((/**
         * @param {?} col
         * @return {?}
         */
        col => (Object.assign({}, col, { cellTemplate: col.summaryTemplate }))));
    }
    /**
     * @private
     * @return {?}
     */
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter((/**
         * @param {?} col
         * @return {?}
         */
        col => !col.summaryTemplate))
            .forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => {
            /** @type {?} */
            const cellsFromSingleColumn = this.rows.map((/**
             * @param {?} row
             * @return {?}
             */
            row => row[col.prop]));
            /** @type {?} */
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        }));
    }
    /**
     * @private
     * @param {?} column
     * @return {?}
     */
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }] }
];
DataTableSummaryRowComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
}
NgxDatatableModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                declarations: [
                    DataTableFooterTemplateDirective,
                    VisibilityDirective,
                    DraggableDirective,
                    ResizeableDirective,
                    OrderableDirective,
                    LongPressDirective,
                    ScrollerComponent,
                    DatatableComponent,
                    DataTableColumnDirective,
                    DataTableHeaderComponent,
                    DataTableHeaderCellComponent,
                    DataTableBodyComponent,
                    DataTableFooterComponent,
                    DataTablePagerComponent,
                    ProgressBarComponent,
                    DataTableBodyRowComponent,
                    DataTableRowWrapperComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableBodyCellComponent,
                    DataTableSelectionComponent,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DatatableFooterDirective,
                    DatatableGroupHeaderTemplateDirective,
                    DataTableSummaryRowComponent
                ],
                exports: [
                    DatatableComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableColumnDirective,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DataTableFooterTemplateDirective,
                    DatatableFooterDirective,
                    DataTablePagerComponent,
                    DatatableGroupHeaderTemplateDirective
                ]
            },] }
];
/**
 * Interface definition for INgxDatatableConfig global configuration
 * @record
 */
function INgxDatatableConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ClickType = {
    single: 'single',
    double: 'double',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column Type
 * @record
 */
function TableColumn() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SortPropDir() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 * @param {?} x
 * @param {?} y
 * @return {?}
 */
function elementsFromPoint(x, y) {
    /** @type {?} */
    const elements = [];
    /** @type {?} */
    const previousPointerEvents = [];
    /** @type {?} */
    let current;
    // TODO: window.getComputedStyle should be used with inferred type (Element)
    /** @type {?} */
    let i;
    /** @type {?} */
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=swimlane-ngx-datatable.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/adm.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/adm.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <app-sidebar></app-sidebar>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <div class=\"main-panel\">\n      <div class=\"content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <!--<app-footer></app-footer>-->\n  </div>\n  <!--<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n      <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li class=\"header-title\"> Sidebar Background</li>\n        <li class=\"adjustments-line\">\n          <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n            <div class=\"badge-colors text-center\">\n              <span class=\"badge filter badge-primary active\" data-color=\"primary\"></span>\n              <span class=\"badge filter badge-info\" data-color=\"blue\"></span>\n              <span class=\"badge filter badge-success\" data-color=\"green\"></span>\n            </div>\n            <div class=\"clearfix\"></div>\n          </a>\n        </li>\n        <li class=\"adjustments-line text-center color-change\">\n          <span class=\"color-label\">LIGHT MODE</span>\n          <span class=\"badge light-badge mr-2\"></span>\n          <span class=\"badge dark-badge ml-2\"></span>\n          <span class=\"color-label\">DARK MODE</span>\n        </li>\n        <li class=\"button-container\">\n          <a href=\"https://www.creative-tim.com/product/black-dashboard\" target=\"_blank\"\n            class=\"btn btn-primary btn-block btn-round\">Download Now</a>\n          <a href=\"https://demos.creative-tim.com/black-dashboard/docs/1.0/getting-started/introduction.html\"\n            target=\"_blank\" class=\"btn btn-default btn-block btn-round\">\n            Documentation\n          </a>\n        </li>\n        <li class=\"header-title\">Thank you for 95 shares!</li>\n        <li class=\"button-container text-center\">\n          <button id=\"twitter\" class=\"btn btn-round btn-info\"><i class=\"fab fa-twitter\"></i> &middot; 45</button>\n          <button id=\"facebook\" class=\"btn btn-round btn-info\"><i class=\"fab fa-facebook-f\"></i> &middot; 50</button>\n          <br>\n          <br>\n          <a class=\"github-button\" href=\"https://github.com/creativetimofficial/black-dashboard\"\n            data-icon=\"octicon-star\" data-size=\"large\" data-show-count=\"true\"\n            aria-label=\"Star ntkme/github-buttons on GitHub\">Star</a>\n        </li>\n      </ul>\n    </div>\n  </div>-->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/footer/footer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            Creative Tim\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            About Us\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:void(0)\" class=\"nav-link\">\n            Blog\n          </a>\n        </li>\n      </ul>\n      <div class=\"copyright\">\n        ©\n        <script>\n          document.write(new Date().getFullYear())\n        </script>2019 construido por \n        <a href=\"javascript:void(0)\" target=\"_blank\">Ventun</a>\n      </div>\n    </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/navbar/navbar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/navbar/navbar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar sticky-top navbar-expand-lg\" data=\"blue\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle d-inline\">\n                <button type=\"button\" class=\"navbar-toggler\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n            <a class=\"navbar-brand\" style=\"top: 0;\">\n                <img src=\"/assets/img/ventun.png\">\n            </a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n            <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navigation\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"search-bar input-group\">\n                    <button class=\"btn btn-link\" id=\"search-button\" data-toggle=\"modal\" data-target=\"#searchModal\"><i\n                            class=\"tim-icons icon-zoom-split\"></i>\n                        <span class=\"d-lg-none d-md-block\">Empresas</span>\n                    </button>\n                </li>\n                <li class=\"dropdown nav-item\">\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n                        <div class=\"notification d-none d-lg-block d-xl-block\"></div>\n                        <i class=\"tim-icons icon-sound-wave\"></i>\n                        <p class=\"d-lg-none\">\n                            Notifications\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-menu-right dropdown-navbar\">\n                        <li class=\"nav-link\"><a href=\"#\" class=\"nav-item dropdown-item\">Mike John responded to your\n                                email</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">You have 5 more\n                                tasks</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Your friend\n                                Michael is in town</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Another\n                                notification</a></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\">Another one</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"dropdown nav-item\">\n                    <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n                        <div class=\"photo\">\n                            <img src=\"{{urlGlobal}}{{perfil}}\" alt=\"Profile Photo\">\n                        </div>\n                        <b class=\"caret d-none d-lg-block d-xl-block\"></b>\n                        <p class=\"d-lg-none\">\n                            Log out\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-navbar\">\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" class=\"nav-item dropdown-item\"\n                                routerLink=\"/profile\" routerLinkActive=\"active\">Perfil</a></li>\n                        <li class=\"dropdown-divider\"></li>\n                        <li class=\"nav-link\"><a href=\"javascript:void(0)\" (click)=\"cerrarSesion();\"\n                                class=\"nav-item dropdown-item\" routerLink=\"/sign/login\" routerLinkActive=\"active\">Cerrar\n                                Sessión</a></li>\n                    </ul>\n                </li>\n                <li class=\"separator d-lg-none\"></li>\n            </ul>\n        </div>\n    </div>\n    <app-toast></app-toast>\n</nav>\n<div class=\"modal modal-search fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"searchModal\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\" style=\"\">\n                        <label class=\"input-group-text\" style=\"background-color: var(--primary);width: 80px;\" for=\"listaEquipos\">Equipo</label>\n                    </div>\n                    <select class=\"custom-select\" id=\"listaEquipos\" name=\"listaEquipos\" #listaEquipos=\"ngModel\" [(ngModel)]=\"name\">\n                        <option [ngValue]=\"undefined\" selected>Elige un Equipo...</option>\n                        <option *ngFor=\"let equipo of lista\" [(ngValue)]=\"equipo._id\">{{equipo.companyName}}</option>\n                    </select>\n                </div>\n                <!--<input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"SEARCH\">\n                <a class=\"btn btn-primary\" (click)=\"verificar();\">Verificar datos</a>-->\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"tim-icons icon-simple-remove\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/sidebar/sidebar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/sidebar/sidebar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\n    <div class=\"logo\">\n      <a class=\"simple-text logo-mini\">\n        <div class=\"logo-img\" (click)=\"minimizeSidebar()\">\n            <img src=\"./assets/img/logos/logo-ventun.png\" />\n        </div>\n      </a>\n      <a href=\"http://ventun.com/\" class=\"simple-text logo-normal\">\n        MLM\n      </a>\n    </div>\n  \n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n          <!--If is a single link-->\n          <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n            <i class=\"tim-icons {{ menuitem.icontype }}\"></i>\n            <p>{{ menuitem.title }}</p>\n          </a>\n          <!--If it have a submenu-->\n          <a\n            data-toggle=\"collapse\"\n            href=\"#{{ menuitem.collapse }}\"\n            *ngIf=\"menuitem.type === 'sub'\"\n            (click)=\"\n              myFunc($event, menuitem);\n                (menuitem.isCollapsed = !menuitem.isCollapsed)\n            \"\n            [attr.aria-expanded]=\"!menuitem.isCollapsed\"\n          >\n            <i class=\"tim-icons {{ menuitem.icontype }}\"></i>\n            <p>{{ menuitem.title }}<b class=\"caret\"></b></p>\n          </a>\n  \n          <!--Display the submenu items-->\n          <div\n            id=\"{{ menuitem.collapse }}\"\n            class=\"collapse\"\n            *ngIf=\"menuitem.type === 'sub'\"\n          >\n            <ul class=\"nav\">\n              <li\n                routerLinkActive=\"active\"\n                *ngFor=\"let childitem of menuitem.children\"\n              >\n                <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                  <span class=\"sidebar-mini-icon\">{{ childitem.ab }}</span>\n                  <span class=\"sidebar-normal\">{{ childitem.title }}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/tools/show-errors/show-errors.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/tools/show-errors/show-errors.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"shouldShowErrors()\" class=\"roedor\">\n    <p class=\"globito\" *ngFor=\"let error of listOfErrors()\">{{error}}</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <h2>Mis Asociados</h2>\n    <div class=\"col-4 col-md-3\" style=\"margin: 10px; float: left;\" *ngFor=\"let item of asociados\">\n        <span>{{item.profile.ci}} {{item.profile.expedido | expedido: ListDepts}}</span>\n        <div class=\"row ficha\" [routerLink]=\"['/descendenciaFicha', item._id]\" [routerLinkActive]=\"['linkActivo']\">\n            <div class=\"col-4\">\n                <ng-container *ngIf=\"item.profile?.photo; then conFoto; else sinFoto\"></ng-container>\n                <ng-template #conFoto>\n                    <img class=\"foto\" src=\"{{urlGlobal}}{{item.profile.photo}}\" srcset=\"{{urlGlobal}}{{item.profile.photo}} 100w\" alt=\"Foto de Perfil\">\n                </ng-template>\n                <ng-template #sinFoto>\n                    <img class=\"foto\" src=\"assets/img/noPicture.png\" srcset=\"assets/img/noPicture.png 200w\" alt=\"Sin foto de Perfil\">\n                </ng-template>\n            </div>\n            <div class=\"col-8\">\n                <p hidden>{{item._id}}</p>\n                <span class=\"row\">{{item.profile.firstName}} {{item.profile.lastNameP}}\n                    {{item.profile.lastNameM}}</span>\n                <span class=\"row\">{{item.contact?.phone}}</span>\n                <span class=\"row\">{{item.contact?.email}}</span>\n                <div class=\"row\" style=\"border-top: 1px solid red;\">\n                    <div class=\"col-4\"><span>1200bs</span></div>\n                    <div class=\"col-4\">\n                        <span>5 </span>\n                        <i class=\"fas fa-long-arrow-alt-right\" style=\"color: green;\"></i>\n                    </div>\n                    <div class=\"col-4\">\n                        <span>6 </span>\n                        <i class=\"fas fa-long-arrow-alt-down\" style=\"color: green;\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-list/descendencia-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-list/descendencia-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <h2 class=\"col-12 col-md-4 card-title\">Mis Asociados</h2>\n            <div class=\"col-12 col-md-8 toolbar\">\n                <button type=\"button\" class=\"btn-simple btn btn-info float-right\" (click)=\"exportFunction($event)\"><i\n                        class=\"fas fa-file-excel\"></i> Exportar a Excel</button>\n                <button type=\"button\" class=\"btn-simple btn btn-success float-right\"\n                    (click)=\"refreshFunction($event)\"><i class=\"fas fa-sync-alt\"></i> Actualizar Lista</button>\n                <button type=\"button\" class=\"btn-simple btn btn-primary float-right\" [routerLink]=\"['/invitacion']\"\n                    [routerLinkActive]=\"['linkActivo']\"><i class=\"fas fa-plus\"></i> Nueva Invitación</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"dataTables_wrapper\">\n            <div class=\"row\">\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_length\">\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Mostrar</label>\n                        <select name=\"datatable_length\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\"\n                            (change)=\"entriesChange($event)\" style=\"width: 100px;\">\n                            <option value=\"10\" [selected]=\"entries==10\">10</option>\n                            <option value=\"25\" [selected]=\"entries==25\">25</option>\n                            <option value=\"-1\" [selected]=\"entries==-1\">All</option>\n                        </select>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> asociados </label>\n                    </div>\n                </div>\n\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"dataTables_length\" id=\"datatable_status\">\n                        <i class=\"fas fa-filter float-left\" style=\"margin: 10px 0;\"></i>\n                        <label class=\"float-left\" style=\"margin: 10px;\"> Estado</label>\n                        <select name=\"datatable_status\" aria-controls=\"datatable\"\n                            class=\"form-control float-left align-middle form-control-md\" (change)=\"statusChange($event)\"\n                            style=\"width: 100px;\">\n                            <option value=\"1\" [selected]=\"estado==1\">Activo</option>\n                            <option value=\"0\" [selected]=\"estado==0\">Inactivo</option>\n                            <option value=\"2\" [selected]=\"estado==2\">Eliminado</option>\n                            <option value=\"3\" [selected]=\"estado==3\">Deudor</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-12 col-md-4\">\n                    <div id=\"datatable_filter\" class=\"dataTables_filter form-control-md\">\n                        <label>\n                            <input type=\"search\" class=\"form-control\" style=\"width: 100%;\" placeholder=\"Buscar...\"\n                                aria-controls=\"datatable\" (keyup)=\"filterTable($event)\" />\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <ngx-datatable class=\"bootstrap selection-cell\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\n                [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"entries != -1 ? entries:undefined\"\n                (activate)=\"onActivate($event)\" [rows]=\"temp\" [loadingIndicator]=\"isLoading\"\n                [treeFromRelation]=\"parentId\" [treeToRelation]=\"id\" (treeAction)=\"onTreeAction($event)\">\n\n                <ngx-datatable-column name=\"C.I.\" [isTreeColumn]=\"true\" prop=\"profile.ci\" [treeLevelIndent]=\"20\">{{ci}}\n\n                    <ng-template ngx-datatable-tree-toggle let-tree=\"cellContext\">\n                        <button [disabled]=\"tree.treeStatus === 'disabled'\" (click)=\"tree.onTreeAction()\">\n                            <span *ngIf=\"tree.treeStatus === 'loading'\">\n                                <i class=\"fas fa-spinner fa-spin\"></i>\n                            </span>\n                            <span *ngIf=\"tree.treeStatus === 'collapsed'\">\n                                <i class=\"fas fa-level-up-alt\"></i>\n                            </span>\n                            <span *ngIf=\"tree.treeStatus === 'expanded'\">\n                                <i class=\"fas fa-level-down-alt\"></i>\n                            </span>\n                            <span *ngIf=\"tree.treeStatus === 'disabled'\">\n                                <i class=\"fas fa-skull-crossbones\"></i>\n                            </span>\n                        </button>\n                    </ng-template>\n\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Nombre\" prop=\"profile.firstName\">{{firstName}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Apellido Paterno\" prop=\"profile.lastNameP\">{{lastNameP}}\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Apellido Materno\" prop=\"profile.lastNameM\">{{lastNameM}}\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Fecha\" prop=\"date\">{{date}}</ngx-datatable-column>\n                <ngx-datatable-column name=\"Estado\">\n                    <ng-template ngx-datatable-cell-template let-row=\"row\">\n                        <ng-container *ngIf=\"row.estado; else elseTemplate\">\n                            Activo\n                        </ng-container>\n                        <ng-template #elseTemplate>\n                            Inactivo\n                        </ng-template>\n                    </ng-template>\n                </ngx-datatable-column>\n\n\n                <ngx-datatable-column [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\n                    [resizeable]=\"false\">\n                    <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n                        let-selectFn=\"selectFn\">\n                        Acciones\n                    </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\n                        let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n                        <a href=\"#\" class=\"btn btn-round btn-warning btn-icon btn-sm edit\"\n                            (click)=\"editFunction($event)\">\n                            <i class=\"fas fa-user-edit\" style=\"margin-top: 7px;\"></i>\n                        </a>\n                        <a href=\"#\" class=\"btn btn-round btn-danger btn-icon btn-sm remove\"\n                            (click)=\"deleteFunction($event)\"><i class=\"fas fa-times\" style=\"margin-top: 7px;\"></i></a>\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-profile/descendencia-profile.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-profile/descendencia-profile.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-user card\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\">Asociado {{title}}</h4>\n    </div>\n    <div class=\"card-body\">\n        <ul class=\"nav nav-pills\">\n            <li class=\"nav-item\">\n                <a href=\"#resumen\" data-toggle=\"pill\" class=\"nav-link active\">Resumen</a>\n            </li>\n            <li class=\"nav-item\">\n                <a href=\"#cuotas\" data-toggle=\"pill\" class=\"nav-link\">Cuotas</a>\n            </li>\n        </ul>\n\n        <div class=\"tab-content\" id=\"descendenciaTab\">\n            <div class=\"tab-pane fade show active container\" id=\"resumen\" role=\"tabpanel\" aria-labelledby=\"resumen-tab\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h4>Información Personal</h4>\n                        <div class=\"row\">\n                            <label for=\"ci\">C.I.</label>\n                            <span id=\"ci\" name=\"ci\">{{person.profile?.ci}} {{person.profile?.expedido | expedido: ListDepts}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"nombre\">Nombre</label>\n                            <span id=\"nombre\" name=\"nombre\">{{person.profile?.lastNameP}} {{person.profile?.lastNameM}}\n                                {{person.profile?.firstName}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"fecha\">Fecha de Naciemiento</label>\n                            <span id=\"fecha\" name=\"fecha\">{{person.profile?.birthDate | date: 'shortDate'}}</span>\n                        </div>\n                        <br>\n                        <h4>Datos de Contacto</h4>\n                        <div class=\"row\">\n                            <label for=\"phone\">Teléfono</label>\n                            <span id=\"phone\" name=\"phone\">{{person.contact?.phone}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"email\">e-mail</label>\n                            <span id=\"email\" name=\"email\">{{person.contact?.email}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"web\">Página web</label>\n                            <span id=\"web\" name=\"web\">{{person.contact?.web}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"country\">País</label>\n                            <span id=\"country\" name=\"country\">{{person.contact?.address?.country | nombre: ListDepts}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"state\">Departamento</label>\n                            <span id=\"state\" name=\"state\">{{person.contact?.address?.state.id | nombre: ListDepts}}</span><!--valor en lugar de id-->\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"city\">Ciudad</label>\n                            <span id=\"city\" name=\"city\">{{person.contact?.address?.city.id | nombre: ListDepts}}</span><!--valor en lugar de id-->\n                        </div>\n                        <div class=\"row\">\n                            <label for=\"especificLocation\">Dirección</label>\n                            <span id=\"especificLocation\"\n                                name=\"especificLocation\">{{person.contact?.address?.especificLocation}}</span>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <label for=\"foto\">Fotografía</label>\n                        </div>\n                        <div class=\"row\">\n                            <img id=\"foto\" style=\"width: 250px\" name=\"foto\" class=\"foto\" src=\"{{urlGlobal}}{{person.profile?.photo}}\"\n                                srcset=\"{{urlGlobal}}{{person.profile?.photo}} 200w\" alt=\"Sin foto de Perfil\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"cuotas\" role=\"tabpanel\" aria-labelledby=\"cuotas-tab\">\n\n                <div class=\"row\">\n                    <div class=\"update ml-auto mr-auto\">\n                        <button class=\"btn btn-primary\" (click)=\"saveService()\">Save</button>\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"cancelStaff()\">Cancel</button>\n                        <a href=\"#profile\" class=\"nav-link btn btn-primary\">Profile</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"container-fluid\">\n    <div class=\"col-4 col-md-3\" style=\"margin: 10px; float: left;\" *ngFor=\"let item of asociados\">\n        <div class=\"row ficha\" (click)=\"verAsociado(item._id)\">\n            <!--[routerLink]=\"['/descendenciaFicha', item._id]\" [routerLinkActive]=\"['linkActivo']\">-->\n            <div class=\"col-4\">\n                <ng-container *ngIf=\"item.profile?.photo; then conFoto; else sinFoto\"></ng-container>\n                <ng-template #conFoto>\n                    <img class=\"foto\" src=\"{{urlGlobal}}{{item.profile.photo}}\" srcset=\"{{urlGlobal}}{{item.profile.photo}} 100w\"\n                        alt=\"Foto de Perfil\">\n                </ng-template>\n                <ng-template #sinFoto>\n                    <img class=\"foto\" src=\"assets/img/noPicture.png\" srcset=\"assets/img/noPicture.png 200w\"\n                        alt=\"Sin foto de Perfil\">\n                </ng-template>\n            </div>\n            <div class=\"col-8\">\n                <p hidden>{{item._id}}</p>\n                <span class=\"row\">{{item.profile.firstName}} {{item.profile.lastNameP}}\n                    {{item.profile.lastNameM}}</span>\n                <span class=\"row\">{{item.contact?.phone}}</span>\n                <span class=\"row\">{{item.contact?.email}}</span>\n                <div class=\"row\" style=\"border-top: 1px solid red;\">\n                    <div class=\"col-4\"><span>1200bs</span></div>\n                    <div class=\"col-4\">\n                        <span>5 </span>\n                        <i class=\"fas fa-long-arrow-alt-right\" style=\"color: green;\"></i>\n                    </div>\n                    <div class=\"col-4\">\n                        <span>6 </span>\n                        <i class=\"fas fa-long-arrow-alt-down\" style=\"color: green;\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/invitation-list/invitation-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/invitation-list/invitation-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"row\">\n      <h2 class=\"col-12 col-md-4 card-title\">Lista de Invitados</h2>\n      <div class=\"col-12 col-md-8 toolbar\">\n        <button type=\"button\" class=\"btn-simple btn btn-info float-right\" (click)=\"exportFunction($event)\"><i\n            class=\"fas fa-file-excel\"></i> Exportar a Excel</button>\n        <button type=\"button\" class=\"btn-simple btn btn-success float-right\" (click)=\"refreshFunction($event)\"><i\n            class=\"fas fa-sync-alt\"></i> Actualizar Lista</button>\n        <button type=\"button\" class=\"btn-simple btn btn-primary float-right\" [routerLink]=\"['/invitacion']\"\n          [routerLinkActive]=\"['linkActivo']\"><i class=\"fas fa-plus\"></i> Nueva Invitación</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"dataTables_wrapper\">\n      <div class=\"row\">\n        <div class=\"col-6 col-md-4\">\n          <div class=\"dataTables_length\" id=\"datatable_length\">\n            <label class=\"float-left\" style=\"margin: 10px;\"> Mostrar</label>\n            <select name=\"datatable_length\" aria-controls=\"datatable\"\n              class=\"form-control float-left align-middle form-control-md\" (change)=\"entriesChange($event)\"\n              style=\"width: 100px;\">\n              <option value=\"10\" [selected]=\"entries==10\">10</option>\n              <option value=\"25\" [selected]=\"entries==25\">25</option>\n              <option value=\"-1\" [selected]=\"entries==-1\">All</option>\n            </select>\n            <label class=\"float-left\" style=\"margin: 10px;\"> invitaciones </label>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-4\">\n          <div class=\"dataTables_length\" id=\"datatable_status\">\n            <i class=\"fas fa-filter float-left\" style=\"margin: 10px 0;\"></i>\n            <label class=\"float-left\" style=\"margin: 10px;\"> Estado</label>\n            <select name=\"datatable_status\" aria-controls=\"datatable\"\n              class=\"form-control float-left align-middle form-control-md\" (change)=\"statusChange($event)\"\n              style=\"width: 100px;\">\n              <option value=\"1\" [selected]=\"estado==1\">Activo</option>\n              <option value=\"0\" [selected]=\"estado==0\">Inactivo</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div id=\"datatable_filter\" class=\"dataTables_filter form-control-md\">\n            <label>\n              <input type=\"search\" class=\"form-control\" style=\"width: 100%;\" placeholder=\"Buscar...\"\n                aria-controls=\"datatable\" (keyup)=\"filterTable($event)\" />\n            </label>\n          </div>\n        </div>\n      </div>\n      <!--\n          <ngx-datatable-column name=\"My Custom Column Header\" prop=\"client\">\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\n          <strong>{{ value.clientCode }} </strong> - {{ value.clientName }}\n        </ng-template>\n      </ngx-datatable-column>\n      -->\n      <ngx-datatable class=\"bootstrap selection-cell\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\" [limit]=\"entries != -1 ? entries:undefined\" (activate)=\"onActivate($event)\" [rows]=\"temp\" [loadingIndicator]=\"isLoading\">\n\n        <ngx-datatable-column name=\"C.I.\" prop=\"profile.ci\">{{ci}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Nombre\" prop=\"profile.firstName\">{{firstName}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Apellido Paterno\" prop=\"profile.lastNameP\">{{lastNameP}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Apellido Materno\" prop=\"profile.lastNameM\">{{lastNameM}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Fecha\" prop=\"date\">{{date}}</ngx-datatable-column>\n        <ngx-datatable-column name=\"Estado\">\n          <ng-template ngx-datatable-cell-template let-row=\"row\">\n            <ng-container *ngIf=\"row.estado; else elseTemplate\">\n              Activo\n            </ng-container>\n            <ng-template #elseTemplate>\n              Inactivo\n            </ng-template>\n          </ng-template>\n        </ngx-datatable-column>\n\n\n        <ngx-datatable-column [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\" [resizeable]=\"false\">\n          <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\n            let-selectFn=\"selectFn\">\n            Acciones\n          </ng-template>\n          <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\n            let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n            <a href=\"#\" class=\"btn btn-round btn-warning btn-icon btn-sm edit\" (click)=\"editFunction($event)\">\n              <i class=\"fas fa-user-edit\" style=\"margin-top: 7px;\"></i>\n            </a>\n            <a href=\"#\" class=\"btn btn-round btn-danger btn-icon btn-sm remove\" (click)=\"deleteFunction($event)\"><i\n                class=\"fas fa-times\" style=\"margin-top: 7px;\"></i></a>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </div>\n\n  </div>\n  <!-- end content-->\n</div>\n<!--  end card  -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/invitation/invitation.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/invitation/invitation.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"form-sign center z-depth-4\">\n    <!--<img src=\"assets/img/logos/v.png\" alt=\"Ventun\">-->\n    <h2 class=\"center\">Invitación</h2>\n    <hr>\n    <form (ngSubmit)=\"onRegister()\" name=\"contextForm\" #contextForm=\"ngForm\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"ci\">CI</label>\n          <input type=\"text\" class=\"form-control\" name=\"ci\" #ci=\"ngModel\" [(ngModel)]=\"invitation.profile.ci\" id=\"ci\"\n            placeholder=\"Cédula de Identidad\" required>\n          <app-show-errors [control]=\"ci\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"expedido\" class=\"control-label\">Expedido en:</label>\n          <select class=\"form-control\" name=\"expedido\" id=\"expedido\" #expedido=\"ngModel\"\n            [(ngModel)]=\"invitation.profile.expedido\" required aria-hidden=\"true\">\n            <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n            <option *ngFor='let littleDepa of depasCI' [ngValue]=\"littleDepa._id\">\n              {{littleDepa.name}}\n            </option>\n          </select>\n          \n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <a class=\"btn btn-warning\" style=\"margin-top: 28px;\" (click)=\"verificarUsuario()\">Verificar</a>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"nombre\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"invitation.profile.firstName\"\n            id=\"nombre\" placeholder=\"Nombre Invitado\" required>\n          <app-show-errors [control]=\"nombre\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"apellidos\">Apellido Paterno</label>\n          <input type=\"text\" class=\"form-control\" name=\"apellidoP\" #apellido=\"ngModel\"\n            [(ngModel)]=\"invitation.profile.lastNameP\" id=\"apellidoP\" placeholder=\"Apellido Paterno\" required>\n          <app-show-errors [control]=\"apellidoP\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"apellidos\">Apellido Materno</label>\n          <input type=\"text\" class=\"form-control\" name=\"apellidoM\" #apellido=\"ngModel\"\n            [(ngModel)]=\"invitation.profile.lastNameM\" id=\"apellidoM\" placeholder=\"Apellido Materno\" required>\n          <app-show-errors [control]=\"apellidoM\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"gender\">Sexo</label>\n          <select class=\"form-control\" id=\"gender\" name=\"gender\" #gender=\"ngModel\" \n            [(ngModel)]=\"invitation.profile.gender\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option [ngValue]=\"0\">\n              Hombre\n            </option>\n            <option [ngValue]=\"1\">\n              Mujer\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"birthDate\">Fecha de Nacimiento</label>\n          <input type=\"date\" class=\"form-control\" name=\"birthDate\" #birthDate=\"ngModel\"\n            [(ngModel)]=\"invitation.profile.birthDate\" id=\"birthDate\" placeholder=\"Fecha de Nacimiento\">\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"phone\">Teléfono</label>\n          <input type=\"phone\" class=\"form-control\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"invitation.contact.phone\"\n            id=\"phone\" placeholder=\"Número Telefónico\" required>\n          <app-show-errors [control]=\"phone\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"email\">e-mail</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"invitation.contact.email\"\n            id=\"email\" placeholder=\"Correo Electrónico\">\n          <app-show-errors [control]=\"email\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\" hidden>\n          <label for=\"password\">Contraseña</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\"\n            [(ngModel)]=\"invitation.password\" id=\"password\" placeholder=\"Contraseña\">\n          <app-show-errors [control]=\"password\" class=\"show-err\"></app-show-errors>\n        </div>\n      </div>\n\n\n      <div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"local\" class=\"control-label\">País</label>\n\n            <select class=\"form-control\" name=\"local\" id=\"local\" #local=\"ngModel\"\n              [(ngModel)]=\"invitation.contact.address.country\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectedValue($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleLocal of ListLOCMain' [ngValue]=\"littleLocal._id\">\n                {{littleLocal.name}}\n              </option>\n            </select>\n\n            <app-show-errors [control]=\"local\" class=\"show-err\"></app-show-errors>\n          </div>\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"depaMini\" class=\"control-label\">Departamento</label>\n            <select class=\"form-control\" name=\"depaMini\" id=\"depaMini\" #depaMini=\"ngModel\"\n              [(ngModel)]=\"invitation.contact.address.state\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectDepartamento($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleDepa of listDepa' [ngValue]=\"littleDepa._id\">\n                {{littleDepa.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"depaMini\" class=\"show-err\"></app-show-errors>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"cityMini\" class=\"control-label\">Ciudad</label>\n            <select class=\"form-control\" name=\"cityMini\" id=\"cityMini\" #cityMini=\"ngModel\"\n              [(ngModel)]=\"invitation.contact.address.city\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectCiudad($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleCiudad of listCiudad' [ngValue]=\"littleCiudad._id\">\n                {{littleCiudad.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"cityMini\" class=\"show-err\"></app-show-errors>\n          </div>\n\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"zonaMini\" class=\"control-label\">Zona</label>\n            <select class=\"form-control\" name=\"zonaMini\" id=\"zonaMini\" #zonaMini=\"ngModel\"\n              [(ngModel)]=\"invitation.contact.address.zone\" required aria-hidden=\"true\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleZona of listZona' [ngValue]=\"littleZona._id\">\n                {{littleZona.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"zonaMini\" class=\"show-err\"></app-show-errors>\n          </div><!---->\n          <div class=\"form-group col-md-8 campoFormulario\">\n            <label class=\"control-label\">\n              Street\n            </label>\n            <input name=\"streetDirecction\" class=\"form-control\" id=\"streetDirecction\" type=\"text\" required\n              #streetDirecction=\"ngModel\" [(ngModel)]=\"invitation.contact.address.especificLocation\">\n          </div>\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"codePostal\" class=\"control-label\">Zip Code</label>\n            <input type=\"text\" placeholder=\"Code Postal\" class=\"form-control\" name=\"codePostal\" id=\"codePostal\"\n              #codePostal=\"ngModel\" [(ngModel)]=\"invitation.contact.codePostal\" minlength=\"4\" >\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"compania\">Compañía</label>\n          <select class=\"form-control\" id=\"companyName\" name=\"companyName\" #companyName=\"ngModel\" \n            [(ngModel)]=\"job.companyName\" required (ngModelChange)=\"updateSelectEquipo($event)\">\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option *ngFor='let item of this.ListCompany' [ngValue]=\"item._id\">\n              {{item.name}}\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"tipo\">Rol</label>\n          <select class=\"form-control\" id=\"typeAccount\" name=\"typeAccount\" #typeAccount=\"ngModel\" \n            [(ngModel)]=\"job.typeAccount\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option *ngFor='let item of this.ListRol' [ngValue]=\"item._id\">\n              {{item.name}}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12\">\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input id=\"acuerdo\" name=\"acuerdo\" type=\"checkbox\" #acuerdo=\"ngModel\"\n                class=\"form-control form-check-input\" [(ngModel)]=\"invitation.estado\" required>\n              <span class=\"form-check-sign\">Estoy de acuerdo con Términos de Servicio y Política de Privacidad</span>\n            </label>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contextForm.invalid\">Invitar</button>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/main/main.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/main/main.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header \">\n        <div class=\"row\">\n          <div class=\"col-sm-6 text-left\">\n            <h5 class=\"card-category\">Total</h5>\n            <h2 class=\"card-title\">Cuentas</h2>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"btn-group btn-group-toggle float-right\" data-toggle=\"buttons\">\n              <label class=\"btn btn-sm btn-primary btn-simple active\" id=\"0\">\n                <input type=\"radio\" name=\"options\" checked>\n                <span class=\"d-none d-sm-block d-md-block d-lg-block d-xl-block\">Accounts</span>\n                <span class=\"d-block d-sm-none\">\n                  <i class=\"tim-icons icon-single-02\"></i>\n                </span>\n              </label>\n              <label class=\"btn btn-sm btn-primary btn-simple\" id=\"1\">\n                <input type=\"radio\" class=\"d-none d-sm-none\" name=\"options\">\n                <span class=\"d-none d-sm-block d-md-block d-lg-block d-xl-block\">Purchases</span>\n                <span class=\"d-block d-sm-none\">\n                  <i class=\"tim-icons icon-gift-2\"></i>\n                </span>\n              </label>\n              <label class=\"btn btn-sm btn-primary btn-simple\" id=\"2\">\n                <input type=\"radio\" class=\"d-none\" name=\"options\">\n                <span class=\"d-none d-sm-block d-md-block d-lg-block d-xl-block\">Sessions</span>\n                <span class=\"d-block d-sm-none\">\n                  <i class=\"tim-icons icon-tap-02\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"chartBig1\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header\">\n        <h5 class=\"card-category\">Ventas</h5>\n        <h3 class=\"card-title\"><i class=\"tim-icons icon-bell-55 text-primary\"></i> 763,215</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"chartLinePurple\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header\">\n        <h5 class=\"card-category\">Cobros diarios</h5>\n        <h3 class=\"card-title\"><i class=\"tim-icons icon-delivery-fast text-info\"></i> 3,500€</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"CountryChart\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card card-chart\">\n      <div class=\"card-header\">\n        <h5 class=\"card-category\">Cantidad de Asociados</h5>\n        <h3 class=\"card-title\"><i class=\"tim-icons icon-send text-success\"></i> 12,100K</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"chart-area\">\n          <canvas id=\"chartLineGreen\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card card-tasks\">\n      <div class=\"card-header \">\n        <h6 class=\"title d-inline\">Asociados(5)</h6>\n        <p class=\"card-category d-inline\">today</p>\n        <div class=\"dropdown\">\n          <button type=\"button\" class=\"btn btn-link dropdown-toggle btn-icon\" data-toggle=\"dropdown\">\n            <i class=\"tim-icons icon-settings-gear-63\"></i>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#pablo\">Action</a>\n            <a class=\"dropdown-item\" href=\"#pablo\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#pablo\">Something else</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body \">\n        <div class=\"table-full-width table-responsive\">\n          <table class=\"table\">\n            <tbody>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Update the Documentation</p>\n                  <p class=\"text-muted\">Dwuamish Head, Seattle, WA 8:47 AM</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">GDPR Compliance</p>\n                  <p class=\"text-muted\">The GDPR is a regulation that requires businesses to protect the personal data\n                    and privacy of Europe citizens for transactions that occur within EU member states.</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Solve the issues</p>\n                  <p class=\"text-muted\">Fifty percent of all respondents said they would be more likely to shop at a\n                    company </p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Release v2.0.0</p>\n                  <p class=\"text-muted\">Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Export the processed files</p>\n                  <p class=\"text-muted\">The report also shows that consumers will not easily forgive a company once a\n                    breach exposing their personal data occurs. </p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </td>\n                <td>\n                  <p class=\"title\">Arival at export process</p>\n                  <p class=\"text-muted\">Capitol Hill, Seattle, WA 12:34 AM</p>\n                </td>\n                <td class=\"td-actions text-right\">\n                  <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-link\" data-original-title=\"Edit Task\">\n                    <i class=\"tim-icons icon-pencil\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card \">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\"> Simple Table</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table tablesorter \" id=\"\">\n            <thead class=\" text-primary\">\n              <tr>\n                <th>\n                  Name\n                </th>\n                <th>\n                  Country\n                </th>\n                <th>\n                  City\n                </th>\n                <th class=\"text-center\">\n                  Salary\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Dakota Rice\n                </td>\n                <td>\n                  Niger\n                </td>\n                <td>\n                  Oud-Turnhout\n                </td>\n                <td class=\"text-center\">\n                  $36,738\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Minerva Hooper\n                </td>\n                <td>\n                  Curaçao\n                </td>\n                <td>\n                  Sinaai-Waas\n                </td>\n                <td class=\"text-center\">\n                  $23,789\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Sage Rodriguez\n                </td>\n                <td>\n                  Netherlands\n                </td>\n                <td>\n                  Baileux\n                </td>\n                <td class=\"text-center\">\n                  $56,142\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Philip Chaney\n                </td>\n                <td>\n                  Korea, South\n                </td>\n                <td>\n                  Overland Park\n                </td>\n                <td class=\"text-center\">\n                  $38,735\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Doris Greene\n                </td>\n                <td>\n                  Malawi\n                </td>\n                <td>\n                  Feldkirchen in Kärnten\n                </td>\n                <td class=\"text-center\">\n                  $63,542\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Mason Porter\n                </td>\n                <td>\n                  Chile\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-center\">\n                  $78,615\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Jon Porter\n                </td>\n                <td>\n                  Portugal\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-center\">\n                  $98,615\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/profile/profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/profile/profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <div class=\"form-sign center z-depth-4\">\n    <!--<img src=\"assets/img/logos/v.png\" alt=\"Ventun\">-->\n    <h2 class=\"center\">Información Personal</h2>\n    <hr>\n    <form (ngSubmit)=\"onUpdate()\" name=\"contextForm\" #contextForm=\"ngForm\" *ngIf=\"perfil\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"ci\">CI</label>\n          <input type=\"text\" class=\"form-control\" name=\"ci\" #ci=\"ngModel\" [(ngModel)]=\"perfil.profile.ci\" id=\"ci\"\n            placeholder=\"Cédula de Identidad\" required>\n          <app-show-errors [control]=\"ci\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"expedido\" class=\"control-label\">Expedido en:</label>\n          <select class=\"form-control\" name=\"expedido\" id=\"expedido\" #expedido=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.expedido\" required aria-hidden=\"true\">\n            <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n            <option *ngFor='let littleDepa of depasCI' [ngValue]=\"littleDepa._id\">\n              {{littleDepa.name}}\n            </option>\n          </select>\n          \n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"firstName\">Nombre</label>\n          <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstName=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.firstName\" id=\"firstName\" placeholder=\"Nombre Usuario\" required>\n          <app-show-errors [control]=\"firstName\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"lastNameP\">Apellido Paterno</label>\n          <input type=\"text\" class=\"form-control\" name=\"lastNameP\" #lastNameP=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.lastNameP\" id=\"lastNameP\" placeholder=\"Apellido Paterno\" required>\n          <app-show-errors [control]=\"lastNameP\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"lastNameM\">Apellido Materno</label>\n          <input type=\"text\" class=\"form-control\" name=\"lastNameM\" #lastNameM=\"ngModel\"\n            [(ngModel)]=\"perfil.profile.lastNameM\" id=\"lastNameM\" placeholder=\"Apellido Materno\" required>\n          <app-show-errors [control]=\"lastNameM\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"gender\">Sexo</label>\n          <select class=\"form-control\" id=\"gender\" name=\"gender\" #gender=\"ngModel\" tabindex=\"-1\"\n            [(ngModel)]=\"perfil.profile.gender\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option [ngValue]=\"0\">\n              Hombre\n            </option>\n            <option [ngValue]=\"1\">\n              Mujer\n            </option>\n          </select>\n        </div>\n        <!--\n          <input type=\"date\" id=\"bday\" name=\"bday\" max=today min=\"1919-01-01\" class=\"form-control\" #bday=\"ngModel\"\n              [ngModel]=\"mySeller.xCurrent.profile.birthDate | date:'yyyy-MM-dd'\"\n              (ngModelChange)=\"mySeller.xCurrent.profile.birthDate = $event\">\n        -->\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"birthDate\">Fecha de Nacimiento</label>\n          <input type=\"date\" class=\"form-control\" name=\"birthDate\" #birthDate=\"ngModel\"\n            [ngModel]=\"perfil.profile.birthDate\" (ngModelChange)=\"perfil.profile.birthDate = $event\"\n            id=\"birthDate\" placeholder=\"Fecha de Nacimiento\">\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"phone\">Teléfono</label>\n          <input type=\"phone\" class=\"form-control\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"perfil.contact.phone\"\n            id=\"phone\" placeholder=\"Número Telefónico\" required>\n          <app-show-errors [control]=\"phone\" class=\"show-err\"></app-show-errors>\n        </div>\n        <div class=\"form-group col-6 col-md-4\">\n          <label for=\"email\">e-mail</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"perfil.contact.email\"\n            id=\"email\" placeholder=\"Correo Electrónico\">\n          <app-show-errors [control]=\"email\" class=\"show-err\"></app-show-errors>\n        </div>\n      </div>\n\n\n      <div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"local\" class=\"control-label\">País</label>\n\n            <select class=\"form-control\" name=\"local\" id=\"local\" #local=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.country\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectedValue($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleLocal of ListLOCMain' [ngValue]=\"littleLocal._id\">\n                {{littleLocal.name}}\n              </option>\n            </select>\n\n            <app-show-errors [control]=\"local\" class=\"show-err\"></app-show-errors>\n          </div>\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"depaMini\" class=\"control-label\">Departamento</label>\n            <select class=\"form-control\" name=\"depaMini\" id=\"depaMini\" #depaMini=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.state.id\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectDepartamento($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleDepa of listDepa' [ngValue]=\"littleDepa._id\">\n                {{littleDepa.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"depaMini\" class=\"show-err\"></app-show-errors>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n            <label for=\"cityMini\" class=\"control-label\">Ciudad</label>\n            <select class=\"form-control\" name=\"cityMini\" id=\"cityMini\" #cityMini=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.city.id\" required aria-hidden=\"true\"\n              (ngModelChange)=\"updateSelectCiudad($event)\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleCiudad of listCiudad' [ngValue]=\"littleCiudad._id\">\n                {{littleCiudad.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"cityMini\" class=\"show-err\"></app-show-errors>\n          </div>\n\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"zonaMini\" class=\"control-label\">Zona</label>\n            <select tabindex=\"-1\" class=\"form-control\" name=\"zonaMini\" id=\"zonaMini\" #zonaMini=\"ngModel\"\n              [(ngModel)]=\"perfil.contact.address.zone.id\" required aria-hidden=\"true\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleZona of listZona' [ngValue]=\"littleZona._id\">\n                {{littleZona.name}}\n              </option>\n            </select>\n            <app-show-errors [control]=\"zonaMini\" class=\"show-err\"></app-show-errors>\n          </div>\n          <div class=\"form-group col-md-8 campoFormulario\">\n            <label class=\"control-label\">\n              Street\n            </label>\n            <input name=\"streetDirecction\" class=\"form-control\" id=\"streetDirecction\" type=\"text\" required\n              #streetDirecction=\"ngModel\" [(ngModel)]=\"perfil.contact.address.especificLocation\">\n          </div>\n          <div class=\"form-group col-md-4 campoFormulario\">\n            <label for=\"codePostal\" class=\"control-label\">Zip Code</label>\n            <input type=\"text\" placeholder=\"Code Postal\" class=\"form-control\" name=\"codePostal\" id=\"codePostal\"\n              #codePostal=\"ngModel\" [(ngModel)]=\"perfil.contact.codePostal\" minlength=\"4\" required>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-row\">\n        <div class=\"col-6\">\n          <div class=\"form-group\">\n            <label>Imagen Personal</label>\n            <div class=\"fileupload fileupload-new\" data-provides=\"fileupload\"><input type=\"hidden\">\n              <div class=\"fileupload-new thumbnail\"><img class=\"e2e-inner-html-interpolated\" alt=\"\"\n                  src=\"{{urlGlobal}}{{urlImage}}\" style=\"width: 200px\">\n              </div>\n              <div class=\"fileupload-preview fileupload-exists thumbnail\" style=\"line-height: 10px;\"></div>\n              <div class=\"user-edit-image-buttons\">\n                <span class=\"btn btn-azure btn-file\">\n                  <app-upload [mostrar]='mostrar' [title]=\"title_upload\" [path]=\"path_server\"\n                    (desdeElHijo)=\"recibeDeHijo($event);\">\n                  </app-upload>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"estado\">Estado</label>\n          <select class=\"form-control\" id=\"estado\" name=\"estado\" #estado=\"ngModel\" tabindex=\"-1\"\n            [(ngModel)]=\"perfil.estado\" required>\n            <option [ngValue]=undefined selected>Elija una Opción</option>\n            <option [ngValue]=\"1\">\n              Activo\n            </option>\n            <option [ngValue]=\"0\">\n              Inactivo\n            </option>\n          </select>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contextForm.invalid\">Modificar Usuario</button>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/staff-list/staff-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/staff-list/staff-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form id=\"fSeller\" name=\"fSeller\" #fSeller='ngForm' *ngIf=\"job\">\n  <div class=\"form-group col-md-6\">\n    <label for=\"ciMain\">ciMain</label>\n    <input type=\"text\" class=\"form-control\" name=\"ciMain\" #ciMain=\"ngModel\" [(ngModel)]=\"job.ciMain\"\n      id=\"ciMain\" placeholder=\"Apellidos\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"companyName\">companyName</label>\n    <input type=\"text\" class=\"form-control\" name=\"companyName\" #companyName=\"ngModel\" [(ngModel)]=\"job.companyName\"\n      id=\"companyName\" placeholder=\"Apellidos\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"typeAccount\">typeAccount</label>\n    <input type=\"text\" class=\"form-control\" name=\"typeAccount\" #typeAccount=\"ngModel\" [(ngModel)]=\"job.typeAccount\"\n      id=\"typeAccount\" placeholder=\"Apellidos\">\n  </div>\n  <button class=\"btn btn-primary\" (click)=\"guardar()\">GUARDAR</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/toast/toast.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/toast/toast.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}} alert-dismissable\">\n        {{alert.message}}\n        <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n    </div>-->\n<div aria-live=\"polite\" aria-atomic=\"true\" style=\"position: relative;\" attr.id=\"{{idx}}\">\n    <div style=\"position: absolute; top: 40px; right: 0;\">\n\n        <div class=\"toast {{tipoAlert}}\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-delay=\"2000\">\n            <div class=\"toast-header\">\n                <strong class=\"mr-auto\">{{title}}</strong>\n                <small class=\"text-muted\">just now</small>\n                <button type=\"button\" class=\"ml-2 mb-1 close\" data-dismiss=\"toast\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"toast-body\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/upload/upload.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/upload/upload.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"divMainFile\">\n  <h1 *ngIf=\"title_upload\">{{title_upload}}</h1>\n  <input class=\"custom-control {{muestraUP}}\" type=\"file\" name=\"imageUp\" id=\"imageUp\" (change)=\"onFileSelected($event)\" style=\"z-index: 0!important;\">\n\n  <div class=\"card text-center float-left  {{muestraMIDDLE}}\">\n    <div id=\"card-body\" class=\"card-body\">\n      <div class=\"card text-white cardCompleto float-left\" *ngFor=\"let item of datosImagen; let i=index\">\n        <img src=\"{{item.src}}\" class=\"figure-img img-fluid rounded img-thumbnail\" alt=\"{{item.dataName}}\"\n          style=\"max-width: 164!important; max-height: 224px; margin: 20px 10px;\">\n        <div class=\"card-img-overlay\">\n          <p class=\"card-text\">{{item.dataName}}</p>\n          <a href=\"#\" class=\"btn btn-round btn-warning btn-icon\" (click)=\"deleteFunction($event, item.dataName)\"\n            style=\"margin-top: 15%;\">\n            <i class=\"fas fa-times\" style=\"margin-top: 7px;\"></i>\n          </a>\n        </div>\n        <div class='progress'>\n          <div id='pbFile{{item.dataName}}' class='progress-bar progress-bar-striped bg-success' role='progressbar'\n            aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>\n        </div>\n      </div>\n    </div>\n    <hr style=\"clear: both;\">\n    <div class=\"card-footer text-muted {{muestraDOWN}}\" *ngIf=\"mostrar==true\">\n      <input class=\"btn btn-outline-primary\" type=\"button\" value=\"Subir Imagen\" (click)=\"onUpload()\">\n      <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Cancelar\" (click)=\"onCancel()\">\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/adm/adm-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/adm/adm-routing.module.ts ***!
  \*******************************************/
/*! exports provided: AdmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmRoutingModule", function() { return AdmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm.component */ "./src/app/adm/adm.component.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/adm/views/main/main.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/adm/views/profile/profile.component.ts");
/* harmony import */ var _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/staff-list/staff-list.component */ "./src/app/adm/views/staff-list/staff-list.component.ts");
/* harmony import */ var _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/invitation/invitation.component */ "./src/app/adm/views/invitation/invitation.component.ts");
/* harmony import */ var _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/descendencia-ficha/descendencia-ficha.component */ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts");
/* harmony import */ var _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/descendencia-profile/descendencia-profile.component */ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts");
/* harmony import */ var _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/invitation-list/invitation-list.component */ "./src/app/adm/views/invitation-list/invitation-list.component.ts");
/* harmony import */ var _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/descendencia-list/descendencia-list.component */ "./src/app/adm/views/descendencia-list/descendencia-list.component.ts");












const routes = [
    {
        path: '', component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"], children: [
            { path: '', component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }
        ]
    },
    //{ path: '', redirectTo: 'main', pathMatch: 'full' },
    {
        path: 'main',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }]
    },
    {
        path: 'profile',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] }]
    },
    {
        path: 'job',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_6__["StaffListComponent"] }]
    },
    {
        path: 'invitacion',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__["InvitationComponent"] }]
    },
    {
        path: 'invitacion/:_id',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__["InvitationComponent"] }]
    },
    {
        path: 'invitacionLista',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_10__["InvitationListComponent"] }]
    },
    {
        path: 'descendenciaFicha',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_8__["DescendenciaFichaComponent"] }]
    },
    {
        path: 'descendenciaFicha/:id',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_9__["DescendenciaProfileComponent"] }]
    },
    {
        path: 'descendenciaLista',
        component: _adm_component__WEBPACK_IMPORTED_MODULE_3__["AdmComponent"],
        children: [{ path: '', component: _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_11__["DescendenciaListComponent"] }]
    }
];
let AdmRoutingModule = class AdmRoutingModule {
};
AdmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdmRoutingModule);



/***/ }),

/***/ "./src/app/adm/adm.component.css":
/*!***************************************!*\
  !*** ./src/app/adm/adm.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS9hZG0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adm/adm.component.ts":
/*!**************************************!*\
  !*** ./src/app/adm/adm.component.ts ***!
  \**************************************/
/*! exports provided: AdmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmComponent", function() { return AdmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdmComponent = class AdmComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/adm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adm.component.css */ "./src/app/adm/adm.component.css")).default]
    })
], AdmComponent);



/***/ }),

/***/ "./src/app/adm/adm.module.ts":
/*!***********************************!*\
  !*** ./src/app/adm/adm.module.ts ***!
  \***********************************/
/*! exports provided: AdmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmModule", function() { return AdmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _adm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adm-routing.module */ "./src/app/adm/adm-routing.module.ts");
/* harmony import */ var _adm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adm.component */ "./src/app/adm/adm.component.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/adm/layouts/navbar/navbar.component.ts");
/* harmony import */ var _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/sidebar/sidebar.component */ "./src/app/adm/layouts/sidebar/sidebar.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/adm/layouts/footer/footer.component.ts");
/* harmony import */ var _modules_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/modules.module */ "./src/app/modules/modules.module.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/adm/views/main/main.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/adm/views/profile/profile.component.ts");
/* harmony import */ var _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/staff-list/staff-list.component */ "./src/app/adm/views/staff-list/staff-list.component.ts");
/* harmony import */ var _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/invitation/invitation.component */ "./src/app/adm/views/invitation/invitation.component.ts");
/* harmony import */ var _tools_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tools/show-errors/show-errors.component */ "./src/app/adm/tools/show-errors/show-errors.component.ts");
/* harmony import */ var _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/descendencia-ficha/descendencia-ficha.component */ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts");
/* harmony import */ var _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/descendencia-profile/descendencia-profile.component */ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts");
/* harmony import */ var _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/descendencia-list/descendencia-list.component */ "./src/app/adm/views/descendencia-list/descendencia-list.component.ts");
/* harmony import */ var _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/invitation-list/invitation-list.component */ "./src/app/adm/views/invitation-list/invitation-list.component.ts");
/* harmony import */ var _pipes_expedido_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pipes/expedido.pipe */ "./src/app/pipes/expedido.pipe.ts");
/* harmony import */ var _pipes_nombre_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pipes/nombre.pipe */ "./src/app/pipes/nombre.pipe.ts");






















let AdmModule = class AdmModule {
};
AdmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _adm_component__WEBPACK_IMPORTED_MODULE_6__["AdmComponent"],
            _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _views_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
            _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _views_staff_list_staff_list_component__WEBPACK_IMPORTED_MODULE_13__["StaffListComponent"],
            _views_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_14__["InvitationComponent"],
            _tools_show_errors_show_errors_component__WEBPACK_IMPORTED_MODULE_15__["ShowErrorsComponent"],
            _views_descendencia_ficha_descendencia_ficha_component__WEBPACK_IMPORTED_MODULE_16__["DescendenciaFichaComponent"],
            _views_descendencia_profile_descendencia_profile_component__WEBPACK_IMPORTED_MODULE_17__["DescendenciaProfileComponent"],
            _views_invitation_list_invitation_list_component__WEBPACK_IMPORTED_MODULE_19__["InvitationListComponent"],
            _views_descendencia_list_descendencia_list_component__WEBPACK_IMPORTED_MODULE_18__["DescendenciaListComponent"],
            _pipes_expedido_pipe__WEBPACK_IMPORTED_MODULE_20__["ExpedidoPipe"],
            _pipes_nombre_pipe__WEBPACK_IMPORTED_MODULE_21__["NombrePipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
            _adm_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmRoutingModule"],
            _modules_modules_module__WEBPACK_IMPORTED_MODULE_10__["ModulesModule"]
        ]
    })
], AdmModule);



/***/ }),

/***/ "./src/app/adm/layouts/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adm/layouts/footer/footer.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adm/layouts/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adm/layouts/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/adm/layouts/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/adm/layouts/navbar/navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adm/layouts/navbar/navbar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adm/layouts/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adm/layouts/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");



let NavbarComponent = class NavbarComponent {
    constructor() {
        this.lista = [];
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalVars"].filesDomain;
    }
    ngOnInit() {
        this.lista = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalConfigurations"]['userCompany'];
        this.perfil = localStorage.getItem('photo');
    }
    verificar() {
        console.log(src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_2__["globalConfigurations"]['userCompany']);
    }
    cerrarSesion() {
        localStorage.clear();
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/adm/layouts/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/adm/layouts/sidebar/sidebar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/adm/layouts/sidebar/sidebar.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adm/layouts/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/adm/layouts/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var misc = {
    sidebar_mini_active: true
};
//Menu Items
const ROUTES = [
    {
        path: "/main",
        title: "Tablero",
        type: "link",
        icontype: "icon-components"
    },
    {
        path: "/objetivo",
        title: "Objetivos",
        type: "link",
        icontype: "icon-badge"
    },
    {
        path: "/",
        title: "Descendencia",
        type: "sub",
        icontype: "icon-single-02",
        collapse: "descendencia",
        isCollapsed: true,
        children: [
            { path: "descendenciaFicha", title: "Fichas", type: "link", ab: "DF" },
            { path: "descendenciaLista", title: "Lista", type: "link", ab: "DL" }
        ]
    },
    {
        path: "/",
        title: "Invitacion",
        type: "sub",
        icontype: "icon-single-02",
        collapse: "invitacion",
        isCollapsed: true,
        children: [
            { path: "invitacion", title: "Nueva Invitación", type: "link", ab: "II" },
            { path: "invitacionLista", title: "Lista de Invitaciones", type: "link", ab: "IL" }
        ]
    } /*,
    {
      path: "/mensaje",
      title: "Mensajes",
      type: "link",
      icontype: "icon-badge"
    },
    {
      path: "/job",
      title: "Job",
      type: "link",
      icontype: "icon-badge"
    },
    {
      path: "/ingreso",
      title: "Ingresos",
      type: "link",
      icontype: "icon-badge"
    },
    {
      path: "/",
      title: "Reportes",
      type: "sub",
      icontype: "icon-badge",
      collapse: "reporte",
      isCollapsed: true,
      children: [
        { path: "reporte1", title: "Reporte 1", type: "link", ab: "R1" },
        { path: "reporte2", title: "Reporte 2", type: "link", ab: "R2" },
        { path: "reporte3", title: "Reporte 3", type: "link", ab: "R3" },
        { path: "reporte4", title: "Reporte 4", type: "link", ab: "R4" }
      ]
    },
    {
      path: "/comision",
      title: "Comisión",
      type: "link",
      icontype: "icon-badge"
    }*/
];
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if (new Date().getTime() - start > milliseconds) {
                break;
            }
        }
    }
    myFunc(event, menuitem) {
        event.preventDefault();
        event.stopPropagation();
        this.sleep(10);
        if (menuitem.isCollapsing === undefined) {
            menuitem.isCollapsing = true;
            // menuitem.isCollapsed = !menuitem.isCollapsed;
            var element = event.target;
            while (element.getAttribute("data-toggle") != "collapse" &&
                element != document.getElementsByTagName("html")[0]) {
                element = element.parentNode;
            }
            element = element.parentNode.children[1];
            if (element.classList.contains("collapse") &&
                !element.classList.contains("show")) {
                element.classList = "before-collapsing";
                var style = element.scrollHeight;
                element.classList = "collapsing";
                setTimeout(function () {
                    element.setAttribute("style", "height:" + style + "px");
                }, 1);
                setTimeout(function () {
                    element.classList = "collapse show";
                    element.removeAttribute("style");
                    menuitem.isCollapsing = undefined;
                }, 350);
            }
            else {
                var style = element.scrollHeight;
                setTimeout(function () {
                    element.setAttribute("style", "height:" + (style + 20) + "px");
                }, 3);
                setTimeout(function () {
                    element.classList = "collapsing";
                }, 3);
                setTimeout(function () {
                    element.removeAttribute("style");
                }, 20);
                setTimeout(function () {
                    element.classList = "collapse";
                    menuitem.isCollapsing = undefined;
                }, 400);
            }
        }
    }
    minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add('sidebar-mini');
            misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    }
    showSidebarMessage(message) {
        /*this.toastr.show(
          '<span class="now-ui-icons ui-1_bell-53"></span>', message,
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
          }
        );*/
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/layouts/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/adm/layouts/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/adm/tools/show-errors/show-errors.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/adm/tools/show-errors/show-errors.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".roedor{\r\n    color: red;\r\n}\r\n.globito{\r\n    color: red !important; \r\n    margin-left: 5px;\r\n    font-size: 0.75rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3Rvb2xzL3Nob3ctZXJyb3JzL3Nob3ctZXJyb3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtL3Rvb2xzL3Nob3ctZXJyb3JzL3Nob3ctZXJyb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9lZG9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uZ2xvYml0b3tcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/adm/tools/show-errors/show-errors.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/adm/tools/show-errors/show-errors.component.ts ***!
  \****************************************************************/
/*! exports provided: ShowErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowErrorsComponent", function() { return ShowErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var ShowErrorsComponent_1;


let ShowErrorsComponent = ShowErrorsComponent_1 = class ShowErrorsComponent {
    constructor() { }
    ngOnInit() {
    }
    shouldShowErrors() {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    }
    listOfErrors() {
        //console.log('esto mandamos al directiva show erros:', this.control);
        return Object.keys(this.control.errors)
            .map(field => this.getMessage(field, this.control.errors[field]));
    }
    getMessage(type, params) {
        return ShowErrorsComponent_1.errorMessages[type](params);
    }
};
ShowErrorsComponent.errorMessages = {
    'required': () => 'Este campo es requerido.',
    'minlength': (params) => 'La cantidad mínima de caracteres es de ' + params.requiredLength + '.',
    'maxlength': (params) => 'La cantidad máxima de caracteres es de ' + params.requiredLength + '.',
    'pattern': (params) => 'The required pattern is: ' + 'mail@ejemplo.com',
    'email': () => 'El formato de correo es: mail@ejemplo.com',
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'crisCode': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowErrorsComponent.prototype, "control", void 0);
ShowErrorsComponent = ShowErrorsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-errors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-errors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/tools/show-errors/show-errors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-errors.component.css */ "./src/app/adm/tools/show-errors/show-errors.component.css")).default]
    })
], ShowErrorsComponent);



/***/ }),

/***/ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n.foto {\r\n    margin: 5px 0;\r\n}\r\n\r\n.ficha {\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    border-left: 4px solid silver;\r\n    padding-right: 4px;\r\n}\r\n\r\n.ficha:hover {\r\n    border: 1px solid silver;\r\n    box-shadow: 0 0 10px silver;\r\n    transition-duration: 300ms;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2Rlc2NlbmRlbmNpYS1maWNoYS9kZXNjZW5kZW5jaWEtZmljaGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hZG0vdmlld3MvZGVzY2VuZGVuY2lhLWZpY2hhL2Rlc2NlbmRlbmNpYS1maWNoYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZm90byB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uZmljaGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHNpbHZlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmZpY2hhOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHNpbHZlcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.ts ***!
  \******************************************************************************/
/*! exports provided: DescendenciaFichaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendenciaFichaComponent", function() { return DescendenciaFichaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");






let DescendenciaFichaComponent = class DescendenciaFichaComponent {
    constructor(connexion, _router) {
        this.connexion = connexion;
        this._router = _router;
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
        this.ListDepts = [];
        this.asociados = [];
    }
    ngOnInit() {
        this.connexion.get_dataWithParams('location', '?owner=5e14d611d235a7103c0ba4f6').subscribe(reslo => {
            this.ListDepts = reslo;
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.person = new src_app_models_person__WEBPACK_IMPORTED_MODULE_2__["person"]();
        let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
        this.connexion.get_dataWithParamsOne('personAssociated', '?userID=' + localStorage.getItem('code').substr(1) + '&companyName=' + myCompanyName[0].companyName).subscribe(regis => {
            this.person = regis[0];
            this.asociados = regis[0].associated;
            console.log(regis[0].associated);
        }, error => {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.', errorMessage.status);
                    break;
            }
        });
    }
};
DescendenciaFichaComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DescendenciaFichaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-descendencia-ficha',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./descendencia-ficha.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./descendencia-ficha.component.css */ "./src/app/adm/views/descendencia-ficha/descendencia-ficha.component.css")).default]
    })
], DescendenciaFichaComponent);



/***/ }),

/***/ "./src/app/adm/views/descendencia-list/descendencia-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-list/descendencia-list.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9kZXNjZW5kZW5jaWEtbGlzdC9kZXNjZW5kZW5jaWEtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adm/views/descendencia-list/descendencia-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-list/descendencia-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: DescendenciaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendenciaListComponent", function() { return DescendenciaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





let DescendenciaListComponent = class DescendenciaListComponent {
    constructor(cnx, ruta, router, toastService, cd) {
        this.cnx = cnx;
        this.ruta = ruta;
        this.router = router;
        this.toastService = toastService;
        this.cd = cd;
        this.entries = 10;
        this.status = 1;
        this.isLoading = true;
        this.temp = [];
    }
    ngOnInit() {
        this.myID = localStorage.getItem('code').substr(1);
        this.obtenerDatos(1, this.myID);
    }
    entriesChange($event) {
        this.entries = $event.target.value;
    }
    statusChange($event) {
        this.status = $event.target.value;
        this.obtenerDatos(this.status, this.myID);
    }
    obtenerDatos(state, id) {
        this.isLoading = true;
        let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
        this.cnx.get_dataWithParams('personAssociated', '?userID=' + id + '&companyName=' + myCompanyName[0].companyName + '&estado=' + state).subscribe(myAds => {
            this.rows = myAds[0].associated;
            setTimeout(() => {
                this.isLoading = false;
            }, 1500);
            this.temp = myAds[0].associated.map((prop, key) => {
                return Object.assign({}, prop, { treeStatus: 'collapsed', parentId: null, id: key });
            });
        });
        this.isLoading = false;
    }
    filterTable($event) {
        let val = $event.target.value.toString().toLowerCase();
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key]) {
                    try {
                        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
                            return true;
                        }
                    }
                    catch (error) {
                        console.log(d[key], error);
                    }
                }
            }
            return false;
        });
    }
    refreshFunction(event) {
        event.preventDefault();
        this.obtenerDatos(this.status, this.myID);
    }
    exportFunction(event) {
        event.preventDefault();
        this.error('Espacio Insuficiente en el Disco', 'MLM Export');
    }
    success(message, title) {
        this.toastService.success(message, title);
    }
    error(message, title) {
        this.toastService.error(message, title);
    }
    onActivate(event) {
        this.activeRow = event.row;
    }
    onTreeAction(event) {
        const index = event.rowIndex;
        const row = event.row;
        if (row.treeStatus === 'collapsed') {
            row.treeStatus = 'loading';
            let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
            this.cnx.get_dataWithParams('personAssociated', '?userID=' + row._id + '&companyName=' + myCompanyName[0].companyName + '&estado=' + row.estado).subscribe(myTreeAssoc => {
                console.log('myAdsmyAds', myTreeAssoc);
                //this.rows = myTreeAssoc[0].associated;
                let data = myTreeAssoc[0].associated.map((prop, key) => {
                    return Object.assign({}, prop, { treeStatus: 'collapsed', parentId: row.id, id: key });
                });
                this.temp = [...this.temp, ...data];
            });
            row.treeStatus = 'expanded';
            this.cd.detectChanges();
        }
        else {
            row.treeStatus = 'collapsed';
            this.rows = [...this.rows];
            this.cd.detectChanges();
        }
    }
};
DescendenciaListComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DescendenciaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-descendencia-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./descendencia-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-list/descendencia-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./descendencia-list.component.css */ "./src/app/adm/views/descendencia-list/descendencia-list.component.css")).default]
    })
], DescendenciaListComponent);



/***/ }),

/***/ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-profile/descendencia-profile.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul.nav-pills {\r\n    margin-bottom: 50px;\r\n}\r\n\r\nul.nav-pills .active{\r\n    box-shadow: 0px 5px 35px 0px #ffffff4d;\r\n}\r\n\r\nli.nav-item {\r\n    background-color: var(--gray-dark);\r\n    margin-right: 20px;\r\n    border-radius: 0.25rem;\r\n    -webkit-border-radius: 0.25rem;\r\n    -moz-border-radius: 0.25rem;\r\n    -ms-border-radius: 0.25rem;\r\n    -o-border-radius: 0.25rem;\r\n}\r\n\r\nspan {\r\n    color: white;\r\n    text-align: left;\r\n}\r\n\r\n.foto {\r\n    margin: 5px 0;\r\n}\r\n\r\n.ficha {\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    border-left: 4px solid silver;\r\n    padding-right: 4px;\r\n}\r\n\r\n.ficha:hover {\r\n    border: 1px solid silver;\r\n    box-shadow: 0 0 10px silver;\r\n    transition-duration: 300ms;\r\n}\r\n\r\n#resumen label {\r\n    width: 200px;\r\n    margin: 5px 0;\r\n    font-size: 1.1em;\r\n}\r\n\r\n#resumen span {\r\n    margin: 5px 0;\r\n    font-size: 1.1em;\r\n}\r\n\r\n#resumen .row {\r\n    margin: 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtL3ZpZXdzL2Rlc2NlbmRlbmNpYS1wcm9maWxlL2Rlc2NlbmRlbmNpYS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9kZXNjZW5kZW5jaWEtcHJvZmlsZS9kZXNjZW5kZW5jaWEtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwubmF2LXBpbGxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbnVsLm5hdi1waWxscyAuYWN0aXZle1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzNXB4IDBweCAjZmZmZmZmNGQ7XHJcbn1cclxuXHJcbmxpLm5hdi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5mb3RvIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5maWNoYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgc2lsdmVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uZmljaGE6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggc2lsdmVyO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbn1cclxuXHJcbiNyZXN1bWVuIGxhYmVsIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4jcmVzdW1lbiBzcGFuIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG59XHJcblxyXG4jcmVzdW1lbiAucm93IHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/adm/views/descendencia-profile/descendencia-profile.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DescendenciaProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescendenciaProfileComponent", function() { return DescendenciaProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");






let DescendenciaProfileComponent = class DescendenciaProfileComponent {
    constructor(connexion, ruta, _router) {
        this.connexion = connexion;
        this.ruta = ruta;
        this._router = _router;
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
        this.ListDepts = [];
        this.asociados = [];
    }
    ngOnInit() {
        this.connexion.get_data('location').subscribe(reslo => {
            this.ListDepts = reslo;
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.person = new src_app_models_person__WEBPACK_IMPORTED_MODULE_4__["person"]();
        this.cargarDatos(this.ruta.snapshot.params['id']);
        console.log(this.ruta.snapshot.params['id']);
    }
    cargarDatos(id) {
        let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
        this.connexion.get_dataWithParamsOne('personAssociated', '?userID=' + id + '&companyName=' + myCompanyName[0].companyName).subscribe(regis => {
            this.person = regis[0];
            this.asociados = regis[0].associated;
        }, error => {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.', errorMessage.status);
                    break;
            }
        });
    }
    verAsociado(event) {
        this._router.navigate(['/descendenciaFicha/' + event]);
        this.cargarDatos(event);
    }
};
DescendenciaProfileComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DescendenciaProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-descendencia-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./descendencia-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/descendencia-profile/descendencia-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./descendencia-profile.component.css */ "./src/app/adm/views/descendencia-profile/descendencia-profile.component.css")).default]
    })
], DescendenciaProfileComponent);



/***/ }),

/***/ "./src/app/adm/views/invitation-list/invitation-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adm/views/invitation-list/invitation-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9pbnZpdGF0aW9uLWxpc3QvaW52aXRhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/adm/views/invitation-list/invitation-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adm/views/invitation-list/invitation-list.component.ts ***!
  \************************************************************************/
/*! exports provided: InvitationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationListComponent", function() { return InvitationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





let InvitationListComponent = class InvitationListComponent {
    constructor(cnx, router, toastService) {
        this.cnx = cnx;
        this.router = router;
        this.toastService = toastService;
        this.entries = 10;
        this.status = 1;
        this.isLoading = true;
        this.temp = [];
    }
    ngOnInit() {
        this.obtenerDatos(this.status);
    }
    entriesChange($event) {
        this.entries = $event.target.value;
    }
    statusChange($event) {
        this.status = $event.target.value;
        this.obtenerDatos(this.status);
    }
    obtenerDatos(state) {
        this.isLoading = true;
        let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
        this.cnx.get_dataWithParams('invitation', '?estado=' + state + '&ciMain=' + localStorage.getItem('code').substr(1) + '&companyName=' + myCompanyName[0].companyName).subscribe(myAds => {
            this.rows = myAds;
            setTimeout(() => {
                this.isLoading = false;
            }, 1500);
            this.temp = myAds.map((prop, key) => {
                return Object.assign({}, prop, { id: key });
            });
        });
        this.isLoading = false;
    }
    filterTable($event) {
        let val = $event.target.value.toString().toLowerCase();
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key]) {
                    try {
                        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
                            return true;
                        }
                    }
                    catch (error) {
                        console.log(d[key], error);
                    }
                }
            }
            return false;
        });
    }
    editFunction($event) {
        $event.preventDefault();
        this.router.navigate(['/invitacion/' + this.activeRow._id]);
    }
    refreshFunction(event) {
        event.preventDefault();
        this.obtenerDatos(this.status);
    }
    exportFunction(event) {
        event.preventDefault();
        this.error('Espacio Insuficiente en el Disco', 'MLM Export');
    }
    success(message, title) {
        this.toastService.success(message, title);
    }
    error(message, title) {
        this.toastService.error(message, title);
    }
    onActivate(event) {
        this.activeRow = event.row;
    }
};
InvitationListComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
InvitationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invitation-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invitation-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/invitation-list/invitation-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invitation-list.component.css */ "./src/app/adm/views/invitation-list/invitation-list.component.css")).default]
    })
], InvitationListComponent);



/***/ }),

/***/ "./src/app/adm/views/invitation/invitation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adm/views/invitation/invitation.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9pbnZpdGF0aW9uL2ludml0YXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adm/views/invitation/invitation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adm/views/invitation/invitation.component.ts ***!
  \**************************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_invitation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/invitation */ "./src/app/models/invitation.ts");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








let InvitationComponent = class InvitationComponent {
    constructor(connexion, _router, route, toastService) {
        this.connexion = connexion;
        this._router = _router;
        this.route = route;
        this.toastService = toastService;
        this.correct = false;
        this.ListCompany = [];
        this.ListRol = [];
        this.isSaved = false;
        this.ListLOC = [];
        this.ListLOCMain = [];
        this.listDepa = [];
        this.depasCI = [];
        this.listCiudad = [];
        this.listZona = [];
        this.invitation = new src_app_models_invitation__WEBPACK_IMPORTED_MODULE_4__["invitation"]();
        this.job = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["job"]();
        this.contact = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["contact"]();
        this.profile = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["profile"]();
        this.address = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["address"]();
        this.field = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
        this.isSaved = false;
    }
    ngOnInit() {
        if (localStorage.getItem('code').substring(0, 1) == '0') {
            alert('Su cuenta no está activada.\nPor favor active su cuenta antes de invitar a una persona.');
            this._router.navigate(['/profile']);
        }
        this.connexion.get_data('location').subscribe(reslo => {
            this.ListLOC = reslo;
            this.ListLOCMain = reslo.filter(LOC => LOC.typecon_id == '5e14d334d235a7103c0ba4f1');
            this.depasCI = this.ListLOC.filter(LOC => LOC.owner == '5e14d611d235a7103c0ba4f6');
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.connexion.get_data('typecontext').subscribe(reslo => {
            this.ListCompany = reslo.filter(LOC => LOC.context_id == '5e252fb391a1412bf8709a69');
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.invitation.contact = this.contact;
        this.invitation.profile = this.profile;
        this.contact.address = this.address;
        this.address.city = this.field;
        this.address.state = this.field;
        this.address.zone = this.field;
        if (this.route.snapshot.params['_id']) {
            this.connexion.get_dataId('invitationQuick', this.route.snapshot.params['_id']).subscribe(resp => {
                this.invitation = resp;
                this.agregarDireccion();
            });
        }
    }
    verificarUsuario() {
        /*if (this.invitation.ci) {
          this.connexion.get_dataWithParamsOne<person>('personInvitation', '?ci=' + this.invitation.ci).subscribe(myUser => {
            this.invitado = myUser;
            console.log(myUser);
            
            this.invitation.nombre = this.invitado.profile.firstName;
            this.invitation.apellidoP = this.invitado.profile.lastNameP;
            this.invitation.apellidoM = this.invitado.profile.lastNameM;
          });
    
        } else {
          this.error('CI vacío', 'MLM Invitación');
        }*/
    }
    error(message, title) {
        this.toastService.error(message, title);
    }
    onRegister() {
        /*if (this.invitado) {
          for (let i = 0; i < this.invitado.associated.length; i++) {
            const element = this.invitado.associated[i];
            if ((element.companyName == this.job.companyName) && (element.typeAccount == this.job.typeAccount)) {
              this.error('Esta persona ya cuenta con una invitación.', 'MLM Invitación');
              return 0;
            }
          }
        }*/
        this.agregarDireccion();
        this.invitation.estado = 1;
        this.invitation.job = { ciMain: localStorage.getItem('code').substr(1), companyName: this.job.companyName, typeAccount: this.job.typeAccount };
        let fechaHora = new Date();
        this.invitation.date = fechaHora;
        let pass = this.generarCodigo();
        this.invitation.codeInvitation = pass;
        this.invitation.password = pass;
        this.invitation.profile.photo = 'assets/img/noPicture.png';
        this.connexion.addObject('invitation', this.invitation).subscribe(regis => {
            alert('La invitación fue realizada de manera correcta');
            console.log('regis', regis);
            this.correct = true;
            this._router.navigate(['/']);
        }, error => {
            var errorMessage = error;
            this.correct = false;
            switch (errorMessage.status) {
                case 400:
                    alert('El usuario ya fue invitado. \n Por favor intente nuevamente.');
                    break;
                default:
                    alert('Ocurrió un error al intentar invitar el usuario. \n Por favor verifique los datos e intente nuevamente.');
                    break;
            }
        });
        this.isSaved = true;
    }
    generarCodigo() {
        return 'ABC123';
    }
    agregarDireccion() {
        let local, paisMini, depaMini, cityMini, zonaMini;
        let objDepartamento;
        let objCiudad;
        let objZona;
        try {
            local = $('#local')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(local)) {
                let separador = local.split(": ", 2);
                paisMini = separador[1];
                depaMini = $('#depaMini')[0].value;
            }
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(depaMini)) {
                let separador = depaMini.split(": ", 2);
                objDepartamento = {
                    id: separador[1],
                    valor: $('#depaMini')[0].options[separador[0]].text
                };
            }
            cityMini = $('#cityMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(cityMini)) {
                let separador = cityMini.split(": ", 2);
                objCiudad = {
                    id: separador[1],
                    valor: $('#cityMini')[0].options[separador[0]].text
                };
            }
            ;
            zonaMini = $('#zonaMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(zonaMini)) {
                let separador = zonaMini.split(": ", 2);
                objZona = {
                    id: separador[1],
                    valor: $('#zonaMini')[0].options[separador[0]].text
                };
            }
            let objAddress = {
                country: paisMini,
                state: objDepartamento,
                city: objCiudad,
                zone: objZona,
                geoData: this.invitation.contact.address.geoData,
                especificLocation: this.invitation.contact.address.especificLocation
            };
            this.invitation.contact.address = objAddress;
        }
        catch (error) {
            console.log('Error', error);
        }
    }
    updateSelectedValue(index) {
        this.listDepa = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectDepartamento(index) {
        this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectCiudad(index) {
        this.listZona = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectEquipo(index) {
        this.ListRol = this.ListLOC.filter(LOC => LOC.typecon_id == index);
    }
};
InvitationComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_2__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
InvitationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invitation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invitation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/invitation/invitation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invitation.component.css */ "./src/app/adm/views/invitation/invitation.component.css")).default]
    })
], InvitationComponent);



/***/ }),

/***/ "./src/app/adm/views/main/main.component.css":
/*!***************************************************!*\
  !*** ./src/app/adm/views/main/main.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adm/views/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adm/views/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");





let MainComponent = class MainComponent {
    constructor(connexion) {
        this.connexion = connexion;
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalVars"].filesDomain;
    }
    ngOnInit() {
        this.person = new src_app_models_person__WEBPACK_IMPORTED_MODULE_2__["person"]();
        this.cargarDatos(localStorage.getItem('code').substring(1));
    }
    cargarDatos(id) {
        this.connexion.get_dataId('person', id).subscribe(regis => {
            localStorage.setItem('photo', regis.profile.photo.toString());
            this.person = regis;
        }, error => {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.', errorMessage.status);
                    break;
            }
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/adm/views/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/adm/views/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adm/views/profile/profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adm/views/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adm/views/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







let ProfileComponent = class ProfileComponent {
    constructor(connexion, _router) {
        this.connexion = connexion;
        this._router = _router;
        this.ListLOC = [];
        this.ListLOCMain = [];
        this.listDepa = [];
        this.listCiudad = [];
        this.listZona = [];
        this.depasCI = [];
        this.path_server = 'userFiles/profile';
        this.mostrar = true;
        this.title_upload = '';
        this.urlImage = 'assets/img/noPicture.png';
        this.urlGlobal = src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalVars"].filesDomain;
        this.selectedFile = [];
        this.scaledImage = [];
        this.thumbImage = [];
        this.datosImagen = [];
        this.porcentajeUpload = '0';
        this.nombreFile = '';
        this.countFiles = 0;
        this.reader = new FileReader();
        this.muestraUP = 'muestra';
        this.muestraMIDDLE = 'noMuestra';
        this.muestraDOWN = 'noMuestra';
        this.job = new _models_schema__WEBPACK_IMPORTED_MODULE_2__["job"]();
    }
    ngOnInit() {
        this.connexion.get_data('location').subscribe(reslo => {
            this.ListLOC = reslo;
            this.ListLOCMain = reslo.filter(LOC => Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(LOC.owner));
            this.depasCI = this.ListLOC.filter(LOC => LOC.owner == '5e14d611d235a7103c0ba4f6');
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        let codigo = localStorage.getItem('code').substr(1);
        if (codigo) {
            this.connexion.get_dataId('person', codigo).subscribe(myUser => {
                this.perfil = myUser;
                this.urlImage = myUser.profile.photo.toString();
                this.listDepa = this.ListLOC.filter(LOC => LOC.owner == myUser.contact.address.country);
                this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == myUser.contact.address.state.id);
                this.listZona = this.ListLOC.filter(LOC => LOC.owner == myUser.contact.address.city.id);
            });
        }
    }
    recibeDeHijo(event) {
        this.perfil.profile.photo = event.upload.url;
        this.urlImage = event.upload.url;
    }
    onUpdate() {
        this.connexion.editObject('person', this.perfil).subscribe(regis => {
            localStorage.setItem('code', regis['estado'].toString() + regis['_id'].toString());
            alert('Actualización de Usuario Satisfactorio.');
            this._router.navigate(['/']);
        }, error => {
            var errorMessage = error;
            switch (errorMessage.status) {
                case 400:
                    console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    console.log('Ocurrió un error al intentar actualizar el usuario. \n Por favor verifique los datos e intente nuevamente.');
                    break;
            }
        });
    }
    agregarDireccion() {
        let local, paisMini, depaMini, cityMini, zonaMini;
        let objDepartamento;
        let objCiudad;
        let objZona;
        try {
            local = $('#local')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(local)) {
                let separador = local.split(": ", 2);
                paisMini = separador[1];
                depaMini = $('#depaMini')[0].value;
            }
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(depaMini)) {
                let separador = depaMini.split(": ", 2);
                objDepartamento = {
                    id: separador[1],
                    valor: $('#depaMini')[0].options[separador[0]].text
                };
            }
            cityMini = $('#cityMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(cityMini)) {
                let separador = cityMini.split(": ", 2);
                objCiudad = {
                    id: separador[1],
                    valor: $('#cityMini')[0].options[separador[0]].text
                };
            }
            ;
            zonaMini = $('#zonaMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(zonaMini)) {
                let separador = zonaMini.split(": ", 2);
                objZona = {
                    id: separador[1],
                    valor: $('#zonaMini')[0].options[separador[0]].text
                };
            }
            let objAddress = {
                country: paisMini,
                state: objDepartamento,
                city: objCiudad,
                zone: objZona,
                geoData: this.perfil.contact.address.geoData,
                especificLocation: this.perfil.contact.address.especificLocation
            };
            this.perfil.contact.address = objAddress;
        }
        catch (error) {
            console.log('Error', error);
        }
    }
    editSeller(direccion) {
        this.listDepa = this.ListLOC.filter(LOC => LOC.owner == direccion.country);
        this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == direccion.state.id);
        this.listZona = this.ListLOC.filter(LOC => LOC.owner == direccion.city.id);
    }
    // Method in component class
    updateSelectedValue(index) {
        this.listDepa = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectDepartamento(index) {
        this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectCiudad(index) {
        this.listZona = this.ListLOC.filter(LOC => LOC.owner == index);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/adm/views/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/adm/views/staff-list/staff-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adm/views/staff-list/staff-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbS92aWV3cy9zdGFmZi1saXN0L3N0YWZmLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adm/views/staff-list/staff-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adm/views/staff-list/staff-list.component.ts ***!
  \**************************************************************/
/*! exports provided: StaffListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffListComponent", function() { return StaffListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_job__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/job */ "./src/app/models/job.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_models_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/schema */ "./src/app/models/schema.ts");





let StaffListComponent = class StaffListComponent {
    constructor(cox) {
        this.cox = cox;
    }
    ngOnInit() {
        this.jjob = new src_app_models_job__WEBPACK_IMPORTED_MODULE_2__["jjob"]();
        this.job = new src_app_models_schema__WEBPACK_IMPORTED_MODULE_4__["job"]();
        this.job.ciMain = 'A';
        this.job.companyName = 'B';
        this.job.typeAccount = 'C';
    }
    guardar() {
        console.log('ESTO ES JOB', this.job);
        this.jjob.job = this.job;
        this.cox.addObject('job', this.jjob).subscribe(res => {
            console.log(res);
        });
    }
};
StaffListComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] }
];
StaffListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./staff-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adm/views/staff-list/staff-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./staff-list.component.css */ "./src/app/adm/views/staff-list/staff-list.component.css")).default]
    })
], StaffListComponent);



/***/ }),

/***/ "./src/app/models/alert.ts":
/*!*********************************!*\
  !*** ./src/app/models/alert.ts ***!
  \*********************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/models/job.ts":
/*!*******************************!*\
  !*** ./src/app/models/job.ts ***!
  \*******************************/
/*! exports provided: jjob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jjob", function() { return jjob; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class jjob {
}


/***/ }),

/***/ "./src/app/models/person.ts":
/*!**********************************!*\
  !*** ./src/app/models/person.ts ***!
  \**********************************/
/*! exports provided: person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "person", function() { return person; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class person {
}


/***/ }),

/***/ "./src/app/modules/modules.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/modules.module.ts ***!
  \*******************************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return ModulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/modules/toast/toast.component.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/modules/upload/upload.component.ts");






let ModulesModule = class ModulesModule {
};
ModulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: [_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]],
        exports: [
            _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"]
        ]
    })
], ModulesModule);



/***/ }),

/***/ "./src/app/modules/toast/toast.component.css":
/*!***************************************************!*\
  !*** ./src/app/modules/toast/toast.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toastMain {\r\n    z-index: 2050!important;\r\n}\r\n\r\n.toast {\r\n    width: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2FzdE1haW4ge1xyXG4gICAgei1pbmRleDogMjA1MCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b2FzdCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/toast/toast.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/toast/toast.component.ts ***!
  \**************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/alert */ "./src/app/models/alert.ts");




let ToastComponent = class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.alerts = [];
    }
    ngOnInit() {
        this.subscription = this.toastService.onAlert(this.id)
            .subscribe(alert => {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            this.message = alert.message;
            this.title = alert.title;
            this.tipoAlert = this.cssClass(alert);
            $('.toast').toast('show');
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.subscription.unsubscribe();
    }
    removeAlert(alert) {
        // remove specified alert from array
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success:
                return 'alert alert-success';
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error:
                return 'alert alert-danger';
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info:
                return 'alert alert-info';
            case src_app_models_alert__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    }
};
ToastComponent.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToastComponent.prototype, "id", void 0);
ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toast',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/toast/toast.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toast.component.css */ "./src/app/modules/toast/toast.component.css")).default]
    })
], ToastComponent);



/***/ }),

/***/ "./src/app/modules/upload/upload.component.css":
/*!*****************************************************!*\
  !*** ./src/app/modules/upload/upload.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#divMainFile {\r\n    display: block;\r\n    overflow: hidden;\r\n    background-color: lightgrey;\r\n}\r\n\r\n.muestra {\r\n    display: block;\r\n}\r\n\r\n.noMuestra {\r\n    display: none;\r\n}\r\n\r\n.cardCompleto:hover>div {\r\n    background-color: rgba(0,0,0,.4);\r\n}\r\n\r\n.cardCompleto:hover * {\r\n    background-color: var(--color-primary-soft);\r\n    opacity: 0.9;\r\n    filter:  alpha(opacity=90);\r\n    -webkit-filter:  alpha(opacity=90);\r\n}\r\n\r\n.card-text {\r\n    opacity: 0.5;\r\n    filter:  alpha(opacity=50);\r\n    -webkit-filter:  alpha(opacity=50);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXZNYWluRmlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5tdWVzdHJhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubm9NdWVzdHJhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkQ29tcGxldG86aG92ZXI+ZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xyXG59XHJcblxyXG4uY2FyZENvbXBsZXRvOmhvdmVyICoge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1zb2Z0KTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGZpbHRlcjogIGFscGhhKG9wYWNpdHk9OTApO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6ICBhbHBoYShvcGFjaXR5PTkwKTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBmaWx0ZXI6ICBhbHBoYShvcGFjaXR5PTUwKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiAgYWxwaGEob3BhY2l0eT01MCk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/upload/upload.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/upload/upload.component.ts ***!
  \****************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");





let UploadComponent = class UploadComponent {
    constructor(http) {
        this.http = http;
        this.selectedFile = [];
        this.scaledImage = [];
        this.thumbImage = [];
        this.datosImagen = [];
        this.porcentajeUpload = '0';
        this.nombreFile = '';
        this.countFiles = 0;
        this.reader = new FileReader();
        this.muestraUP = 'muestra';
        this.muestraMIDDLE = 'noMuestra';
        this.muestraDOWN = 'noMuestra';
        this.desdeElHijo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.upload = false;
    }
    sizeCanva(canva, widthImg, heightImg, widthScale, heightScale) {
        if (widthImg > heightImg) {
            const scaleFactorWidth = widthScale / widthImg;
            canva.width = widthScale;
            canva.height = heightImg * scaleFactorWidth;
        }
        else {
            const scaleFactorHeight = heightScale / heightImg;
            canva.width = widthImg * scaleFactorHeight;
            canva.height = heightScale;
        }
        return canva;
    }
    newtoBlob() {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (callback, type, quality) {
                var dataURL = this.toDataURL(type, quality).split(',')[1];
                setTimeout(function () {
                    let binStr = atob(dataURL);
                    let len = binStr.length;
                    let arr = new Uint8Array(len);
                    for (var i = 0; i < len; i++) {
                        arr[i] = binStr.charCodeAt(i);
                    }
                    callback(new Blob([arr], { type: type || 'image/jpeg' }));
                });
            }
        });
    }
    onFileSelected(event) {
        console.log('this.path_serve', this.path_server);
        var myFiles = event.target.files;
        if (this.upload == true) {
            this.upload = false;
            this.onCancel();
        }
        for (var i = 0, f; f = myFiles[i]; i++) {
            this.selectedFile.push(f);
            this.reader = new FileReader();
            var self = this;
            this.reader.onload = (function (theFile) {
                return function (e) {
                    const miImg = new Image();
                    miImg.src = e.target.result;
                    (miImg.onload = () => {
                        var canvaScale = document.createElement('canvas');
                        var canvaThumb = document.createElement('canvas');
                        var crc2dScale = canvaScale.getContext('2d');
                        var crc2dThumb = canvaThumb.getContext('2d');
                        canvaScale = self.sizeCanva(canvaScale, miImg.width, miImg.height, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].widthScale, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].heightScale);
                        canvaThumb = self.sizeCanva(canvaThumb, miImg.width, miImg.height, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbWidth, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbHeight);
                        if (miImg.width > miImg.height) {
                            crc2dScale.drawImage(miImg, 0, 0, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].widthScale, canvaScale.height);
                            crc2dThumb.drawImage(miImg, 0, 0, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbWidth, canvaThumb.height);
                        }
                        else {
                            crc2dScale.drawImage(miImg, 0, 0, canvaScale.width, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].heightScale);
                            crc2dThumb.drawImage(miImg, 0, 0, canvaThumb.width, src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalImagesSize"].thumbHeight);
                        }
                        var nuevaSRC = crc2dThumb.canvas.toDataURL('image/jpeg', 1);
                        if (!HTMLCanvasElement.prototype.toBlob) {
                            self.newtoBlob();
                        }
                        crc2dScale.canvas.toBlob(function (blob) {
                            self.scaledImage.push(blob);
                        }, 'image/jpeg', 1);
                        crc2dThumb.canvas.toBlob(function (blob) {
                            self.thumbImage.push(blob);
                        }, 'image/jpeg', 1);
                        self.datosImagen.push({ id: 'img' + theFile.name, src: nuevaSRC, 'dataName': theFile.name });
                    });
                };
            })(f);
            this.reader.readAsDataURL(f);
        }
        ;
        if (myFiles.length > 0) {
            this.muestraUP = 'muestra';
            this.muestraMIDDLE = 'muestra';
            this.muestraDOWN = 'muestra';
        }
    }
    onCancel() {
        for (let i = 0; i < this.selectedFile.length; i++) {
            this.selectedFile.pop();
            this.datosImagen.pop();
        }
        this.datosImagen = [];
        this.selectedFile = [];
        this.reader.abort();
        this.reader.EMPTY;
        this.reader = new FileReader();
        $("#fileUpload").remove();
        this.muestraMIDDLE = 'noMuestra';
        this.muestraDOWN = 'noMuestra';
    }
    deleteFunction($event, name) {
        $event.preventDefault();
        if (confirm('¿ Está seguro que desea eliminar la imagen seleccionada. ?')) {
            let encuentra = -10;
            for (let i = 0; i < this.selectedFile.length; i++) {
                if (this.selectedFile[i].name == name) {
                    encuentra = i;
                    if (this.selectedFile.length == 1) {
                        this.onCancel();
                        return;
                    }
                }
            }
            if (encuentra >= 0) {
                this.scaledImage.splice(encuentra, 1);
                this.thumbImage.splice(encuentra, 1);
                this.datosImagen.splice(encuentra, 1);
                this.selectedFile.splice(encuentra, 1);
            }
        }
    }
    onUpload() {
        if (!this.selectedFile) {
            console.log('Archivo Eliminado');
            return;
        }
        var head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        var dt = new Date();
        for (let index = 0; index < this.selectedFile.length; index++) {
            let fdScale = new FormData();
            let nuevoNombre = this.changeName(this.selectedFile[index].name);
            try {
                fdScale.append('file_name', nuevoNombre);
                fdScale.append('file_path', this.path_server);
                fdScale.append('file', this.scaledImage[index], 'Scale' + dt.getUTCMinutes().toString() + dt.getUTCSeconds().toString() + dt.getUTCMilliseconds().toString() + nuevoNombre);
                this.http.post(src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalVars"].domain + '/api/v1/image/', fdScale, {
                    reportProgress: true,
                    observe: 'events',
                    headers: head
                }).subscribe(event => {
                    if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                        this.porcentajeUpload = Math.round(event.loaded / event.total * 100) + "%";
                        document.getElementById("pbFile" + this.selectedFile[index].name).style.width = this.porcentajeUpload;
                        document.getElementById("pbFile" + this.selectedFile[index].name).innerHTML = this.porcentajeUpload;
                    }
                });
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        }
        for (let index = 0; index < this.selectedFile.length; index++) {
            let fdThumb = new FormData();
            let nuevoNombre = this.changeName(this.selectedFile[index].name);
            try {
                fdThumb.append('file_name', nuevoNombre);
                fdThumb.append('file_path', this.path_server + '/thumbnail');
                fdThumb.append('file', this.thumbImage[index], 'Thumb' + dt.getUTCMinutes().toString() + dt.getUTCSeconds().toString() + dt.getUTCMilliseconds().toString() + nuevoNombre);
                this.http.post(src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_4__["globalVars"].domain + '/api/v1/image/', fdThumb, {
                    observe: 'events',
                    headers: head
                }).subscribe(event => {
                    if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                        this.desdeElHijo.emit({ upload: event.body });
                        this.muestraMIDDLE = 'noMuestra';
                        this.muestraDOWN = 'noMuestra';
                    }
                });
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        }
        this.upload = true;
    }
    changeName(nombre) {
        let replaceable = ['+', '-', '*', '`', '´', '[', ']', ' ', '{', '}', '(', ')'];
        for (let i = 0; i < replaceable.length; i++) {
            nombre = nombre.replace(replaceable[i], '_');
        }
        return nombre;
    }
};
UploadComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('path')
], UploadComponent.prototype, "path_server", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mostrar')
], UploadComponent.prototype, "mostrar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title')
], UploadComponent.prototype, "title_upload", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('name')
], UploadComponent.prototype, "file_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('')
], UploadComponent.prototype, "desdeElHijo", void 0);
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/upload/upload.component.html")).default,
        providers: [src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.css */ "./src/app/modules/upload/upload.component.css")).default]
    })
], UploadComponent);



/***/ }),

/***/ "./src/app/pipes/expedido.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/expedido.pipe.ts ***!
  \****************************************/
/*! exports provided: ExpedidoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpedidoPipe", function() { return ExpedidoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpedidoPipe = class ExpedidoPipe {
    transform(value, args) {
        let resp;
        args.forEach(depa => {
            if (depa._id == value) {
                resp = depa.acronym;
            }
        });
        return resp;
    }
};
ExpedidoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'expedido'
    })
], ExpedidoPipe);



/***/ }),

/***/ "./src/app/pipes/nombre.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/nombre.pipe.ts ***!
  \**************************************/
/*! exports provided: NombrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NombrePipe", function() { return NombrePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NombrePipe = class NombrePipe {
    transform(value, args) {
        let resp;
        args.forEach(depa => {
            if (depa._id == value) {
                resp = depa.name;
            }
        });
        return resp;
    }
};
NombrePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'nombre'
    })
], NombrePipe);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/alert */ "./src/app/models/alert.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ToastService = class ToastService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    // enable subscribing to alerts observable
    onAlert(alertId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(x => x && x.alertId === alertId));
    }
    // convenience methods
    success(message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message, title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, alertId }));
    }
    error(message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message, title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, alertId }));
    }
    info(message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message, title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, alertId }));
    }
    warn(message, title, alertId) {
        this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ message, title, type: _models_alert__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, alertId }));
    }
    // main alert method    
    alert(alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }
    // clear alerts
    clear(alertId) {
        this.subject.next(new _models_alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ alertId }));
    }
};
ToastService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ })

}]);