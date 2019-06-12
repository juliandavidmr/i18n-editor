(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialog-overview/dialog-overview.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialog-overview/dialog-overview.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\r\n<div mat-dialog-content>\r\n  <p [innerHTML]=\"data.content\"></p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <!-- <button mat-button (click)=\"onNoClick()\">Copy</button> -->\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/options/options.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/options/options.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"options-component\" (click)=\"open = !open\">\r\n  <div [innerHTML]=\"open ? '▲' : '▼'\"></div>\r\n  <div *ngIf=\"open\" class=\"options-component_content_options\">\r\n    <div *ngFor=\"let item of list\" (click)=\"handleSelect(item)\">\r\n      {{ item.display }}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidenav/sidenav.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidenav/sidenav.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-container\" [class.sidenav-is-mobile]=\"mobileQuery.matches\">\r\n  <mat-toolbar color=\"primary\" class=\"sidenav-toolbar\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\">\r\n      <mat-icon>[||||]</mat-icon>\r\n    </button>\r\n    <h1 class=\"sidenav-app-name\">Welcome to i18n Editor</h1>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"sidenav-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n      <mat-nav-list>\r\n        <a mat-list-item *ngFor=\"let nav of fillerNav\" [href]=\"nav.link\" target=\"_blank\">{{nav.display}}</a>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n      <ng-content></ng-content>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/editor/editor.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/editor/editor.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenav>\r\n  <div class=\"editor-component\">\r\n\r\n    <div class=\"editor-component_header\">\r\n      <div class=\"editor-component_header__left\">\r\n        <button type=\"button\" mat-raised-button (click)=\"imgFileInput.click()\">Add a resources</button>\r\n        <input hidden type=\"file\" #imgFileInput (change)=\"readMultiFiles($event)\" multiple />\r\n        &nbsp;&nbsp;\r\n        <button (click)=\"save()\" mat-raised-button [disabled]=\"!rw.hasFiles\">Download</button>\r\n      </div>\r\n      <div class=\"editor-component_header__right\">\r\n        <div *ngIf=\"rw.hasFiles\">\r\n          <span class=\"tag tag-default\">{{ rw.fileList.length }} files</span>\r\n          <span class=\"tag tag-default\">{{ rw.categoryList.length }} resources</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"editor-component_body\">\r\n      <div class=\"empty-content\" *ngIf=\"!rw.hasFiles\">\r\n        <img src=\"assets/img/empty-trash.png\" />\r\n        <br/>\r\n        <span>No resources have been added</span>\r\n      </div>\r\n      <mat-drawer-container class=\"editor-container\" *ngIf=\"rw.hasFiles\" autosize>\r\n        <mat-drawer #drawer class=\"editor-sidenav\" toggle mode=\"side\">\r\n          <!-- <p><b>Resources list</b></p> -->\r\n          <div class=\"editor-sidenav_header\" toggle>\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"'Add new key'\" [(ngModel)]=\"modelNewKey\" />\r\n            </mat-form-field>\r\n            <!-- <mat-form-field appearance=\"outline\">\r\n              <mat-label>Add new key</mat-label>\r\n              <input matInput placeholder=\"Placeholder\">\r\n            </mat-form-field> -->\r\n            &nbsp;<button mat-raised-button (click)=\"addNewKey()\">Add</button>\r\n          </div>\r\n          <div class=\"editor-sidenav_content\">\r\n            <mat-selection-list #resources>\r\n              <mat-list-option *ngFor=\"let c of rw.categoryList; trackBy: trackCategoryByKey; let i = index;\">\r\n                {{ i + 1 }}. {{c.keyName}}\r\n              </mat-list-option>\r\n            </mat-selection-list>\r\n          </div>\r\n        </mat-drawer>\r\n\r\n        <div class=\"editor-sidenav-content\">\r\n          <div class=\"editor-sidenav-content_header\">\r\n            <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n              Toggle sidenav\r\n            </button>\r\n            <br />\r\n          </div>\r\n          <div class=\"editor-sidenav-content_body\">\r\n            <mat-accordion>\r\n              <ng-container *ngFor=\"let c of rw.categoryList; trackBy: trackCategoryByKey; let i = index;\">\r\n                <mat-expansion-panel hideToggle=\"true\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      <span>#{{ i + 1 }}. {{ c.keyName }}</span>\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                      <span>{{ c.languages.length }} elements</span>\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n                  <ng-template matExpansionPanelContent>\r\n                    <ng-container *ngFor=\"let transl of c.languages; trackBy: trackResourceByKey\">\r\n                      <div class=\"editor-component_input\">\r\n                        <label>{{ transl.lang }}</label>\r\n                        <input [placeholder]=\"transl.lang\" [(ngModel)]=\"transl.text\" />\r\n                      </div>\r\n                      <div *ngIf=\"states[i].inner\" class=\"editor-component_states--inner\">\r\n                        <div [innerHTML]=\"transl.text\"></div>\r\n                      </div>\r\n                    </ng-container>\r\n\r\n                    <div *ngIf=\"states.length > 0\" class=\"editor-component_footer\">\r\n                      <mat-form-field matLine>\r\n                        <input matInput [placeholder]=\"'Enter filename for new language'\"\r\n                          [(ngModel)]=\"modelNewLanguage\" />\r\n                      </mat-form-field>\r\n                      <button mat-button (click)=\"addLanguage(false, c.keyName)\">Add only to this resource</button>\r\n                      <button mat-button (click)=\"addLanguage(true, c.keyName)\">Add to all resources</button>\r\n                      <div>\r\n                        <button mat-button [matMenuTriggerFor]=\"animals\">Options</button>\r\n                        <mat-menu #animals=\"matMenu\">\r\n                          <button mat-menu-item [matMenuTriggerFor]=\"render\">Render</button>\r\n                          <button mat-menu-item [matMenuTriggerFor]=\"format\">Format</button>\r\n                          <button mat-menu-item (click)=\"rw.removeResourceKey(c.keyName)\">Remove this key</button>\r\n                        </mat-menu>\r\n                        <mat-menu #render=\"matMenu\">\r\n                          <button mat-menu-item>\r\n                            <mat-checkbox (change)=\"onChangeInner($event, i)\"\r\n                              title=\"Render HTML content in each translation\">\r\n                              Render\r\n                            </mat-checkbox>\r\n                          </button>\r\n                        </mat-menu>\r\n                        <mat-menu #format=\"matMenu\">\r\n                          <button mat-menu-item (click)=\"copyFormat('ngx-translate', c.keyName)\">ngx-translate\r\n                            format</button>\r\n                        </mat-menu>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </mat-expansion-panel>\r\n              </ng-container>\r\n            </mat-accordion>\r\n          </div>\r\n        </div>\r\n      </mat-drawer-container>\r\n      <!-- <div class=\"editor-component_body__sidemenu\">\r\n        <div class=\"editor-component_body__sidemenu___header\" *ngIf=\"rw.hasFiles\">\r\n          <mat-form-field>\r\n            <input matInput [placeholder]=\"'Add new translation key'\" [(ngModel)]=\"modelNewKey\" />\r\n          </mat-form-field>\r\n          &nbsp;&nbsp;<button mat-raised-button (click)=\"addNewKey()\">Add</button>\r\n        </div>\r\n        <div class=\"editor-component_body__sidemenu___content\">\r\n          <mat-selection-list #resources>\r\n            <mat-list-option *ngFor=\"let c of rw.categoryList; trackBy: trackCategoryByKey; let i = index;\">\r\n              {{ i + 1 }}. {{c.keyName}}\r\n            </mat-list-option>\r\n          </mat-selection-list>\r\n        </div>\r\n      </div>\r\n      <div class=\"editor-component_body__content\">\r\n        <mat-accordion>\r\n          <ng-container *ngFor=\"let c of rw.categoryList; trackBy: trackCategoryByKey; let i = index;\">\r\n            <mat-expansion-panel hideToggle=\"true\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  <span>#{{ i + 1 }}. {{ c.keyName }}</span>\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  <span>{{ c.languages.length }} elements</span>\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <ng-template matExpansionPanelContent>\r\n                <ng-container *ngFor=\"let transl of c.languages; trackBy: trackResourceByKey\">\r\n                  <div class=\"editor-component_input\">\r\n                    <label>{{ transl.lang }}</label>\r\n                    <input [placeholder]=\"transl.lang\" [(ngModel)]=\"transl.text\" />\r\n                  </div>\r\n                  <div *ngIf=\"states[i].inner\" class=\"editor-component_states--inner\">\r\n                    <div [innerHTML]=\"transl.text\"></div>\r\n                  </div>\r\n                </ng-container>\r\n\r\n                <div *ngIf=\"states.length > 0\" class=\"editor-component_footer\">\r\n                  <mat-form-field matLine>\r\n                    <input matInput [placeholder]=\"'Enter filename for new language'\" [(ngModel)]=\"modelNewLanguage\" />\r\n                  </mat-form-field>\r\n                  <button mat-button (click)=\"addLanguage(false, c.keyName)\">Add only to this resource</button>\r\n                  <button mat-button (click)=\"addLanguage(true, c.keyName)\">Add to all resources</button>\r\n                  <div>\r\n                    <button mat-button [matMenuTriggerFor]=\"animals\">Options</button>\r\n                    <mat-menu #animals=\"matMenu\">\r\n                      <button mat-menu-item [matMenuTriggerFor]=\"render\">Render</button>\r\n                      <button mat-menu-item [matMenuTriggerFor]=\"format\">Format</button>\r\n                      <button mat-menu-item (click)=\"rw.removeResourceKey(c.keyName)\">Remove this key</button>\r\n                    </mat-menu>\r\n                    <mat-menu #render=\"matMenu\">\r\n                      <button mat-menu-item>\r\n                        <mat-checkbox (change)=\"onChangeInner($event, i)\"\r\n                          title=\"Render HTML content in each translation\">\r\n                          Render\r\n                        </mat-checkbox>\r\n                      </button>\r\n                    </mat-menu>\r\n                    <mat-menu #format=\"matMenu\">\r\n                      <button mat-menu-item (click)=\"copyFormat('ngx-translate', c.keyName)\">ngx-translate\r\n                        format</button>\r\n                    </mat-menu>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </mat-expansion-panel>\r\n          </ng-container>\r\n        </mat-accordion>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</app-sidenav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/layout/layout.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/layout/layout.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-component\">\r\n  <div class=\"layout-component_content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/welcome/welcome.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-panel\">\r\n  <div class=\"welcome-panel-header\">\r\n    <img src=\"assets/img/i8n-logo.png\" />\r\n    <h1>Welcome to i18n-editor</h1>\r\n    <p>This is a tool to manage the resources files in different languages</p>\r\n  </div>\r\n  <div class=\"welcome-panel-body\">\r\n    <div>\r\n      <h2>What do you want?</h2>\r\n      <!-- <button class=\"btn btn-primary\" (click)=\"folderInput.click()\" type=\"button\" mat-raised-button>Load folder</button> -->\r\n      <!-- <input hidden type=\"file\" #folderInput multiple /> -->\r\n      <a class=\"btn\" type=\"button\" mat-raised-button routerLink=\"/layout\">Create new</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"welcome-panel-footer\">\r\n    Copyright 2019. &nbsp; <a href=\"https://github.com/juliandavidmr/i18n-editor/graphs/contributors\">Contributors</a>.\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/editor/editor.component */ "./src/app/pages/editor/editor.component.ts");





var routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    },
    {
        path: 'layout',
        component: _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFwbGljYWNpb25lc1xcaTE4bi1lZGl0b3JcXFNvdXJjZVxcaTE4bi1lZGl0b3Ivc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNERBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'i18n-editor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_rw_rw_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/rw/rw.service */ "./src/app/services/rw/rw.service.ts");
/* harmony import */ var _components_options_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/options/options.component */ "./src/app/components/options/options.component.ts");
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/layout/layout.component */ "./src/app/pages/layout/layout.component.ts");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/editor/editor.component */ "./src/app/pages/editor/editor.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dialog-overview/dialog-overview.component */ "./src/app/components/dialog-overview/dialog-overview.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_options_options_component__WEBPACK_IMPORTED_MODULE_10__["OptionsComponent"],
                _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
                _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__["EditorComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_14__["SidenavComponent"],
                _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"]
            ],
            entryComponents: [_components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewComponent"]],
            providers: [_services_rw_rw_service__WEBPACK_IMPORTED_MODULE_9__["RwService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dialog-overview/dialog-overview.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/dialog-overview/dialog-overview.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  overflow-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2ctb3ZlcnZpZXcvRDpcXEFwbGljYWNpb25lc1xcaTE4bi1lZGl0b3JcXFNvdXJjZVxcaTE4bi1lZGl0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRpYWxvZy1vdmVydmlld1xcZGlhbG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2ctb3ZlcnZpZXcvZGlhbG9nLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4iLCJwIHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/dialog-overview/dialog-overview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dialog-overview/dialog-overview.component.ts ***!
  \*************************************************************************/
/*! exports provided: DialogOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewComponent", function() { return DialogOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogOverviewComponent = /** @class */ (function () {
    function DialogOverviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-overview',
            template: __webpack_require__(/*! raw-loader!./dialog-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialog-overview/dialog-overview.component.html"),
            styles: [__webpack_require__(/*! ./dialog-overview.component.scss */ "./src/app/components/dialog-overview/dialog-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogOverviewComponent);
    return DialogOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/options/options.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/options/options.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options-component {\n  display: inline-block;\n  position: relative;\n}\n.options-component_content_options {\n  position: absolute;\n  top: 15px;\n  background-color: white;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  min-width: 150px;\n  padding: 5px;\n  z-index: 1;\n  box-shadow: 1px 3px 5px 1px lightgrey;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL0Q6XFxBcGxpY2FjaW9uZXNcXGkxOG4tZWRpdG9yXFxTb3VyY2VcXGkxOG4tZWRpdG9yL3NyY1xcYXBwXFxjb21wb25lbnRzXFxvcHRpb25zXFxvcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ucy1jb21wb25lbnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfY29udGVudF9vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggM3B4IDVweCAxcHggbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxufVxyXG4iLCIub3B0aW9ucy1jb21wb25lbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vcHRpb25zLWNvbXBvbmVudF9jb250ZW50X29wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAxcHggM3B4IDVweCAxcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/options/options.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/options/options.component.ts ***!
  \*********************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsComponent = /** @class */ (function () {
    function OptionsComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.open = false;
    }
    OptionsComponent.prototype.ngOnInit = function () {
    };
    OptionsComponent.prototype.handleSelect = function (item) {
        this.select.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OptionsComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OptionsComponent.prototype, "select", void 0);
    OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! raw-loader!./options.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/app/components/options/options.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.sidenav-is-mobile .sidenav-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.sidenav-app-name {\n  margin-left: 8px;\n}\n\n.sidenav-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.sidenav-is-mobile .sidenav-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n\n.mat-toolbar-single-row {\n  height: 45px;\n}\n\n.mat-drawer-content {\n  padding: 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L0Q6XFxBcGxpY2FjaW9uZXNcXGkxOG4tZWRpdG9yXFxTb3VyY2VcXGkxOG4tZWRpdG9yL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLDhFQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFOzRGQUFBO0VBRUEsT0FBQTtBQ0NGOztBREVBO0VBQ0U7aUVBQUE7RUFFQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2lkZW5hdi1pcy1tb2JpbGUgLnNpZGVuYXYtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMS5zaWRlbmF2LWFwcC1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdi1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2lkZW5hdi1pcy1tb2JpbGUgLnNpZGVuYXYtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG59XHJcbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2lkZW5hdi1pcy1tb2JpbGUgLnNpZGVuYXYtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICB6LWluZGV4OiAyO1xufVxuXG5oMS5zaWRlbmF2LWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnNpZGVuYXYtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTtcbn1cblxuLnNpZGVuYXYtaXMtbW9iaWxlIC5zaWRlbmF2LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(changeDetectorRef, media) {
        this.fillerNav = [{
                display: 'Source code',
                link: 'https://github.com/juliandavidmr/i18n-editor'
            }, {
                display: 'Me',
                link: 'https://github.com/juliandavidmr'
            }];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidenavComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/components/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/pages/editor/editor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/editor/editor.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-component {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  overflow: hidden;\n}\n.editor-component_header {\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n  height: auto;\n  padding-bottom: 7px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.editor-component_header__left {\n  width: 50%;\n}\n.editor-component_header__right {\n  width: 50%;\n  text-align: right;\n}\n.editor-component_body {\n  overflow-y: hidden;\n  overflow-x: auto;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 7px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.editor-component_info {\n  position: fixed;\n  right: 3rem;\n  top: 4rem;\n  color: #9e9e9e8c;\n  text-align: right;\n}\n.editor-component_info__item {\n  display: block;\n}\n.editor-component_input {\n  display: block;\n  border-bottom: 1px solid #CCC;\n  padding: 0.5rem;\n}\n.editor-component_input label {\n  display: block;\n  font-size: small;\n  margin-left: 7px;\n  margin-bottom: 3px;\n}\n.editor-component_input input {\n  display: block;\n  width: 96%;\n  margin: 0 auto;\n  border-radius: 3px;\n  outline: none;\n  border: 1px solid #CCC;\n  padding: 5px 10px;\n}\n.editor-component_input:hover {\n  background-color: #fafafa;\n}\n.editor-component_input:hover label {\n  font-weight: 600;\n}\n.editor-component_states--inner {\n  background-color: #eee;\n  border-left: 4px solid #673ab7;\n  padding-left: 10px !important;\n  border-radius: 4px;\n}\n.editor-component_footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 0.6rem;\n}\n.editor-component .example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.editor-component .example-tree-node {\n  display: block;\n}\n.editor-component .example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n.tag {\n  border-radius: 10px;\n  font-size: 12pt;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px 5px;\n  padding: 2px 8px;\n}\n.tag-primary {\n  background-color: #673ab7;\n  color: #FFF;\n}\n.tag-default {\n  background-color: #EBEBEB;\n}\n.btn {\n  border-radius: 5px;\n  font-size: 12pt;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px 5px;\n}\n.btn-primary {\n  background-color: #673ab7;\n  color: #FFF;\n}\n.btn-default {\n  background-color: #EBEBEB;\n}\n.editor-container {\n  width: 100%;\n  height: 100%;\n}\n.editor-sidenav-content {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n.editor-sidenav-content_header {\n  width: 100%;\n}\n.editor-sidenav-content_body {\n  width: 100%;\n}\n.editor-sidenav {\n  max-width: 30%;\n}\n.editor-sidenav_header {\n  text-align: center;\n  border-bottom: 1px solid lightgrey;\n  background-color: #F5F5F5;\n}\n.mat-form-field-infix {\n  height: 30px;\n}\n.empty-content {\n  text-align: center;\n  width: 100%;\n}\n.empty-content img {\n  width: 150px;\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdG9yL0Q6XFxBcGxpY2FjaW9uZXNcXGkxOG4tZWRpdG9yXFxTb3VyY2VcXGkxOG4tZWRpdG9yL3NyY1xcYXBwXFxwYWdlc1xcZWRpdG9yXFxlZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSw0REFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUU7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0FDQU47QURFSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0FOO0FESUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7QURTRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFNJO0VBQ0UsY0FBQTtBQ1BOO0FEV0U7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDVEo7QURXSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNUTjtBRFlJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ1ZOO0FEYUk7RUFDRSx5QkFBQTtBQ1hOO0FEYU07RUFDRSxnQkFBQTtBQ1hSO0FEaUJJO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNmTjtBRG1CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNqQko7QURvQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2xCSjtBRHFCRTtFQUNFLGNBQUE7QUNuQko7QURzQkU7RUFDRSxrQkFBQTtBQ3BCSjtBRHdCQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDckJGO0FEdUJFO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDckJOO0FEd0JFO0VBQ0kseUJBQUE7QUN0Qk47QUQwQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGVBQUE7QUN2QkY7QUR5QkU7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUN2Qk47QUQwQkU7RUFDSSx5QkFBQTtBQ3hCTjtBRDRCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDekJGO0FENEJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ3pCRjtBRDJCRTtFQUNFLFdBQUE7QUN6Qko7QUQ0QkU7RUFDRSxXQUFBO0FDMUJKO0FEOEJBO0VBQ0UsY0FBQTtBQzNCRjtBRDZCRTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQzNCSjtBRG1DQTtFQUNFLFlBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNqQ0Y7QURtQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yLWNvbXBvbmVudCB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICZfaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmX19sZWZ0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgICZfX3JpZ2h0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX2JvZHkge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9oZWFkZXIge1xyXG5cclxuICB9XHJcblxyXG4gICZfaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogM3JlbTtcclxuICAgIHRvcDogNHJlbTtcclxuICAgIGNvbG9yOiAjOWU5ZTllOGM7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX2lucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9zdGF0ZXMge1xyXG4gICAgJi0taW5uZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM2NzNhYjc7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX2Zvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXRyZWUgbGkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS10cmVlLW5vZGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS10cmVlLW5vZGUgLmV4YW1wbGUtdHJlZS1ub2RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi50YWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuXHJcbiAgJi1wcmltYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG5cclxuICAmLWRlZmF1bHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwcHggNXB4O1xyXG5cclxuICAmLXByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcblxyXG4gICYtZGVmYXVsdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XHJcbiAgfVxyXG59XHJcblxyXG4uZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZWRpdG9yLXNpZGVuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgJl9oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX2JvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZWRpdG9yLXNpZGVuYXYge1xyXG4gIG1heC13aWR0aDogMzAlO1xyXG5cclxuICAmX2hlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICB9XHJcblxyXG4gICZfY29udGVudCB7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZW1wdHktY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG59IiwiLmVkaXRvci1jb21wb25lbnQge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmVkaXRvci1jb21wb25lbnRfaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmVkaXRvci1jb21wb25lbnRfaGVhZGVyX19sZWZ0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2hlYWRlcl9fcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2JvZHkge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2luZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzcmVtO1xuICB0b3A6IDRyZW07XG4gIGNvbG9yOiAjOWU5ZTllOGM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmVkaXRvci1jb21wb25lbnRfaW5mb19faXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVkaXRvci1jb21wb25lbnRfaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2lucHV0IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2lucHV0IGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmVkaXRvci1jb21wb25lbnRfaW5wdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmVkaXRvci1jb21wb25lbnRfaW5wdXQ6aG92ZXIgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmVkaXRvci1jb21wb25lbnRfc3RhdGVzLS1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzY3M2FiNztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMC42cmVtO1xufVxuLmVkaXRvci1jb21wb25lbnQgLmV4YW1wbGUtdHJlZSBsaSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5lZGl0b3ItY29tcG9uZW50IC5leGFtcGxlLXRyZWUtbm9kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVkaXRvci1jb21wb25lbnQgLmV4YW1wbGUtdHJlZS1ub2RlIC5leGFtcGxlLXRyZWUtbm9kZSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnRhZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbn1cbi50YWctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGNvbG9yOiAjRkZGO1xufVxuLnRhZy1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHggNXB4O1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgY29sb3I6ICNGRkY7XG59XG4uYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xufVxuXG4uZWRpdG9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lZGl0b3Itc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmVkaXRvci1zaWRlbmF2LWNvbnRlbnRfaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZWRpdG9yLXNpZGVuYXYtY29udGVudF9ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lZGl0b3Itc2lkZW5hdiB7XG4gIG1heC13aWR0aDogMzAlO1xufVxuLmVkaXRvci1zaWRlbmF2X2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmVtcHR5LWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmVtcHR5LWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/editor/editor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/editor/editor.component.ts ***!
  \**************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rw_rw_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rw/rw.service */ "./src/app/services/rw/rw.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/dialog-overview/dialog-overview.component */ "./src/app/components/dialog-overview/dialog-overview.component.ts");





var EditorComponent = /** @class */ (function () {
    function EditorComponent(rw, dialog) {
        this.rw = rw;
        this.dialog = dialog;
        this.states = [];
        this.modelNewLanguage = '';
        this.modelNewKey = '';
    }
    EditorComponent.prototype.readMultiFiles = function (e) {
        var _this = this;
        this.rw.readMultiFiles(e).then(function (_a) {
            var count = _a.count;
            Array.from({ length: count }, function () { return _this.states.push({ inner: false }); });
            console.log(_this.states);
        });
    };
    EditorComponent.prototype.addLanguage = function (allKeys, resourceKey) {
        this.rw.addLanguage(allKeys, resourceKey, this.modelNewLanguage);
        this.modelNewLanguage = '';
    };
    EditorComponent.prototype.save = function () {
        this.rw.exportCategories();
    };
    EditorComponent.prototype.addNewKey = function () {
        if (this.modelNewKey) {
            console.log(this.modelNewKey);
            var index = this.rw.addResourceKey(this.modelNewKey);
            this.modelNewKey = '';
            this.states[index] = { inner: false };
        }
    };
    EditorComponent.prototype.onChangeInner = function (event, index) {
        this.states[index].inner = event.checked;
        console.log(index, event);
    };
    EditorComponent.prototype.copyFormat = function (format, keyResource) {
        switch (format) {
            case 'ngx-translate':
                this.openDialog('ngx-translate', "{{ '" + keyResource + "' | translate }}");
                break;
            default:
                break;
        }
    };
    EditorComponent.prototype.openDialog = function (title, content) {
        var dialogRef = this.dialog.open(src_app_components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewComponent"], {
            width: '430px',
            data: { title: title, content: content }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    // Treat the instructor name as the unique identifier for the object
    EditorComponent.prototype.trackCategoryByKey = function (index, category) {
        return category.keyName;
    };
    EditorComponent.prototype.trackResourceByKey = function (index, transl) {
        return transl.lang;
    };
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/pages/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rw_rw_service__WEBPACK_IMPORTED_MODULE_2__["RwService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/layout.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/layout/layout.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout-component {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.layout-component_content {\n  margin: 0 auto;\n  width: 90%;\n  min-width: 600px;\n  max-width: 1600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0L0Q6XFxBcGxpY2FjaW9uZXNcXGkxOG4tZWRpdG9yXFxTb3VyY2VcXGkxOG4tZWRpdG9yL3NyY1xcYXBwXFxwYWdlc1xcbGF5b3V0XFxsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0REFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LWNvbXBvbmVudCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAmX2NvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE2MDBweDsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiLmxheW91dC1jb21wb25lbnQge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbi5sYXlvdXQtY29tcG9uZW50X2NvbnRlbnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/pages/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.welcome-panel {\n  width: 100%;\n  height: 100%;\n  background-color: #FFF;\n  position: fixed;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  align-items: center;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.welcome-panel-header {\n  height: 30%;\n  text-align: center;\n}\n\n.welcome-panel-header img {\n  margin-top: 20px;\n  width: 120px;\n}\n\n.welcome-panel-body {\n  height: 50%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n\n.welcome-panel-footer {\n  height: 15%;\n  text-align: center;\n  display: flex;\n  align-items: flex-end;\n}\n\n.welcome-panel-footer b {\n  margin-left: 5px;\n}\n\n.btn {\n  border-radius: 5px;\n  font-size: 12pt;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px 5px;\n}\n\n.btn-primary {\n  background-color: #673ab7;\n  color: #FFF;\n}\n\n.btn-default {\n  background-color: #EBEBEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS9EOlxcQXBsaWNhY2lvbmVzXFxpMThuLWVkaXRvclxcU291cmNlXFxpMThuLWVkaXRvci9zcmNcXGFwcFxccGFnZXNcXHdlbGNvbWVcXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0FDQ0o7O0FERUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0FaOztBRElJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRlI7O0FES0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNIUjs7QURLUTtFQUNJLGdCQUFBO0FDSFo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGVBQUE7QUNMSjs7QURPSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0xSOztBRFFJO0VBQ0kseUJBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi53ZWxjb21lLXBhbmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcblxyXG4gICAgJi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWJvZHl7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLWZvb3RlcntcclxuICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIGIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDBweCA1cHg7XHJcblxyXG4gICAgJi1wcmltYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgfVxyXG5cclxuICAgICYtZGVmYXVsdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcclxuICAgIH1cclxufSIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLndlbGNvbWUtcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLndlbGNvbWUtcGFuZWwtaGVhZGVyIHtcbiAgaGVpZ2h0OiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZWxjb21lLXBhbmVsLWhlYWRlciBpbWcge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG4ud2VsY29tZS1wYW5lbC1ib2R5IHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZWxjb21lLXBhbmVsLWZvb3RlciB7XG4gIGhlaWdodDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi53ZWxjb21lLXBhbmVsLWZvb3RlciBiIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHggNXB4O1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgY29sb3I6ICNGRkY7XG59XG4uYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.loadFolder = function () {
        alert("click on load");
    };
    WelcomeComponent.prototype.createNew = function () {
        alert("click on create");
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/pages/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/rw/rw.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/rw/rw.service.ts ***!
  \*******************************************/
/*! exports provided: RwService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RwService", function() { return RwService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);



var RwService = /** @class */ (function () {
    function RwService() {
        this.fileList = [];
        this.categoryList = [];
    }
    Object.defineProperty(RwService.prototype, "hasFiles", {
        get: function () {
            return this.fileList.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    RwService.prototype.files = function () {
        return this.fileList;
    };
    RwService.prototype.readMultiFiles = function (e) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.fileList = [];
            var files = e.currentTarget.files;
            Object.keys(files).forEach(function (i) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = function () {
                    // server call for uploading or reading the files one-by-one
                    // by using 'reader.result' or 'file'
                    _this.fileList.push({
                        name: file.name,
                        content: JSON.parse(reader.result)
                    });
                    if (_this.fileList.length === files.length) {
                        resolve({ count: _this.categorize() });
                    }
                };
                reader.readAsText(file);
            });
        }));
    };
    RwService.prototype.categorize = function () {
        var _this = this;
        var _loop_1 = function (file) {
            Object.keys(file.content).map(function (key) {
                var category = _this.categoryList.find(function (c) { return c.keyName === key; });
                if (!category) {
                    _this.categoryList.push({
                        keyName: key,
                        languages: []
                    });
                    category = _this.categoryList.find(function (c) { return c.keyName === key; });
                }
                category.languages.push({
                    lang: file.name,
                    text: file.content[key]
                });
            });
        };
        for (var _i = 0, _a = this.fileList; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
        console.log('Cat', this.categoryList);
        return Object.keys(this.categoryList).length;
    };
    RwService.prototype.addLanguage = function (allKeys, resourceKey, lang) {
        var _this = this;
        if (allKeys) {
            Object.keys(this.categoryList).map(function (rKey) { return _this.addLanguage(false, rKey, lang); });
        }
        else {
            this.categoryList[resourceKey].push({
                lang: lang,
                text: ''
            });
        }
    };
    RwService.prototype.addResourceKey = function (key) {
        var category = {
            keyName: key,
            languages: []
        };
        this.fileList.map(function (f) {
            category.languages.push({
                lang: f.name,
                text: ''
            });
        });
        return this.categoryList.unshift(category) - 1;
    };
    RwService.prototype.removeResourceKey = function (key) {
        this.categoryList = this.categoryList.filter(function (c) { return c.keyName !== key; });
    };
    RwService.prototype.exportCategories = function () {
        var list = {};
        this.categoryList.map(function (key) {
            var languages = key.languages;
            languages.map(function (l) {
                list[l.lang] = list[l.lang] || {};
                list[l.lang][key.keyName] = l.text;
            });
        });
        var zip = new jszip__WEBPACK_IMPORTED_MODULE_2___default.a();
        Object.keys(list).map(function (fileName) {
            var content = JSON.stringify(list[fileName], null, 2);
            zip.file(fileName, content);
        });
        zip.generateAsync({ type: 'base64' }).then(function (base64) {
            location.href = 'data:application/zip;base64,' + base64;
        });
        console.log('Save:', list);
    };
    RwService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RwService);
    return RwService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function installAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-140798040-1');
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    installAnalytics();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Aplicaciones\i18n-editor\Source\i18n-editor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map