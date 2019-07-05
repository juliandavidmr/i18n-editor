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

module.exports = "<div class=\"dialog-header\">\r\n  <div>\r\n    <h1 mat-dialog-title>{{data.title}}</h1>\r\n  </div>\r\n  <div>\r\n    <button mat-button *ngIf=\"showSource\" (click)=\"copyContent()\">Copy</button>\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Close</button>\r\n  </div>\r\n</div>\r\n\r\n<div mat-dialog-content>\r\n  <div *ngIf=\"data.showCheckboxes\">\r\n    <mat-checkbox [checked]=\"showHtmlRendered\" (change)=\"viewRendered()\">HTML Rendered</mat-checkbox>&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <mat-checkbox [checked]=\"showSource\" (change)=\"viewSource()\">Source content</mat-checkbox>\r\n  </div>\r\n  <p *ngIf=\"showHtmlRendered\" [innerHTML]=\"data.content\"></p>\r\n  <textarea *ngIf=\"showSource\" id=\"contentResult\" name=\"textarea\" rows=\"50\" cols=\"200\">{{data.content}}</textarea>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <!-- <button mat-button (click)=\"onNoClick()\">Copy</button> -->\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\r\n</div>"

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

module.exports = "<app-sidenav>\r\n  <div class=\"editor-component\">\r\n    <div class=\"editor-component_header\">\r\n      <div class=\"editor-component_header__left\">\r\n        <button type=\"button\" mat-raised-button (click)=\"imgFileInput.click()\">Add resources</button>\r\n        <input hidden type=\"file\" #imgFileInput (change)=\"readMultiFiles($event)\" multiple />\r\n        &nbsp;\r\n        <button type=\"button\" mat-raised-button (click)=\"excelFileInput.click()\">Import Excel file</button>\r\n        <input hidden type=\"file\" #excelFileInput (change)=\"readExcelFile($event)\" />\r\n        &nbsp;\r\n        <button (click)=\"save()\" mat-raised-button [disabled]=\"!rw.hasFiles\">Download</button>\r\n      </div>\r\n      <div class=\"editor-component_header__right\">\r\n        <div *ngIf=\"rw.hasFiles\">\r\n          <span *ngIf=\"rw.fileList\" class=\"tag tag-default\">{{ rw.fileList.length }} files</span>\r\n          <span class=\"tag tag-default\">{{ rw.categoryList.length }} resources</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"editor-component_body\">\r\n      <div class=\"empty-content\" *ngIf=\"!rw.hasFiles && !loading\">\r\n        <img src=\"assets/img/empty-trash.png\" />\r\n        <br />\r\n        <span>No resources have been added</span>\r\n      </div>\r\n      <div class=\"loading-panel\">\r\n        <div id=\"bowlG\" *ngIf=\"loading\">\r\n          <div id=\"bowl_ringG\">\r\n            <div class=\"ball_holderG\">\r\n              <div class=\"ballG\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-drawer-container class=\"editor-container\" *ngIf=\"rw.hasFiles\" autosize>\r\n        <mat-drawer #drawer class=\"editor-sidenav\" opened toggle mode=\"side\">\r\n          <div class=\"editor-sidenav_header\">\r\n            <mat-form-field>\r\n              <input matInput [placeholder]=\"'Add new key'\" [(ngModel)]=\"modelNewKey\" />\r\n            </mat-form-field>\r\n            &nbsp;<button mat-raised-button (click)=\"addNewKey()\">Add</button>\r\n          </div>\r\n          <div class=\"editor-sidenav_content\">\r\n            <div class=\"editor-sidenav_header\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input type=\"search\" matInput [(ngModel)]=\"filter\" (ngModelChange)=\"filterResources($event)\"\r\n                  placeholder=\"Filter\">\r\n              </mat-form-field>\r\n              <button mat-button [matMenuTriggerFor]=\"animals\">By</button>\r\n              <mat-menu #animals=\"matMenu\">\r\n                <button mat-menu-item (click)=\"showMissingFiles()\">\r\n                  Missing files\r\n                </button>\r\n                <button mat-menu-item (click)=\"showAllResources()\">\r\n                  All\r\n                </button>\r\n              </mat-menu>\r\n              <span *ngIf=\"totalResources\" class=\"tag tag-default\">Found: {{ totalResources.length }}</span>\r\n            </div>\r\n            <mat-nav-list *ngIf=\"!loading\">\r\n              <mat-list-item *ngFor=\"let c of totalResources; trackBy: trackCategoryByKey; let i = index;\" (click)=\"viewResource(i)\">\r\n                <a matLine href=\"javascript:void(0);\" title=\"{{ c.keyName }}\">{{ i + 1 }}. {{ c.keyName }}</a>\r\n                <button mat-icon-button>\r\n                  <mat-icon><span class=\"tag tag-primary\">{{ c.languages.length }}</span></mat-icon>\r\n                </button>\r\n              </mat-list-item>\r\n            </mat-nav-list>\r\n          </div>\r\n        </mat-drawer>\r\n\r\n        <div class=\"editor-sidenav-content\">\r\n          <div class=\"editor-sidenav-content_header\">\r\n            <!-- <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n              Toggle resources\r\n            </button>\r\n            <br /> -->\r\n          </div>\r\n          <div class=\"editor-sidenav-content_body\">\r\n            <mat-accordion>\r\n              <ng-container *ngIf=\"resourcesGroup\">\r\n                <mat-expansion-panel class=\"resource-panel\" [expanded]=\"true\" [disabled]=\"true\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      <input type=\"text\" [(ngModel)]=\"resourcesGroup.keyName\" class=\"editor-component__focus_edit\">\r\n                    </mat-panel-title>\r\n                    <mat-panel-description style=\"display: flex; justify-content: flex-end;\">\r\n                      <span class=\"tag tag-default\">{{ resourcesGroup.languages.length }} elements</span>\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n                  <ng-template matExpansionPanelContent>\r\n                    <div *ngIf=\"states.length > 0\" class=\"editor-component_footer\">\r\n                      <mat-form-field matLine>\r\n                        <input matInput [placeholder]=\"'Enter filename for new language'\" [(ngModel)]=\"modelNewLanguage\" />\r\n                      </mat-form-field>\r\n                      <button mat-button (click)=\"addLanguage(false, resourcesGroup.keyName)\">\r\n                        Add only to this resource\r\n                      </button>\r\n                      <button mat-button (click)=\"addLanguage(true, resourcesGroup.keyName)\">\r\n                        Add to all resources\r\n                      </button>\r\n                      <div>\r\n                        <button mat-button [matMenuTriggerFor]=\"animals\">Options</button>\r\n                        <mat-menu #animals=\"matMenu\">\r\n                          <button mat-menu-item [matMenuTriggerFor]=\"render\">Render</button>\r\n                          <button mat-menu-item [matMenuTriggerFor]=\"format\">Format</button>\r\n                          <button mat-menu-item (click)=\"removeResourceKey(resourcesGroup.keyName)\">\r\n                            Remove this key\r\n                          </button>\r\n                        </mat-menu>\r\n                        <mat-menu #render=\"matMenu\">\r\n                          <button mat-menu-item>\r\n                            <mat-checkbox (change)=\"onChangeInner($event, i)\" title=\"Render HTML content in each translation\">\r\n                              Render\r\n                            </mat-checkbox>\r\n                          </button>\r\n                        </mat-menu>\r\n                        <mat-menu #format=\"matMenu\">\r\n                          <button mat-menu-item (click)=\"copyFormat('ngx-translate', resourcesGroup.keyName)\">ngx-translate\r\n                            format</button>\r\n                        </mat-menu>\r\n                      </div>\r\n                    </div>\r\n                    <ng-container *ngFor=\"let transl of resourcesGroup.languages; trackBy: trackResourceByKey\">\r\n                      <div class=\"editor-component_input\">\r\n                        <label>{{ transl.lang }}</label>\r\n                        <input [placeholder]=\"transl.lang\" [(ngModel)]=\"transl.text\" />\r\n                      </div>\r\n\r\n                      <div *ngIf=\"renderChecked\" class=\"editor-component_states--inner\">\r\n                        <div [innerHTML]=\"transl.text\"></div>\r\n                      </div>\r\n\r\n                      <fieldset *ngIf=\"transl.children\">\r\n                        <legend>Nested child</legend>\r\n                        <fieldset *ngFor=\"let child of transl.children\" class=\"editor-component_input\">\r\n                          <legend>{{ child.keyName }}</legend>\r\n                          <input [(ngModel)]=\"child.text\">\r\n                        </fieldset>\r\n                      </fieldset>\r\n                    </ng-container>\r\n                  </ng-template>\r\n                </mat-expansion-panel>\r\n              </ng-container>\r\n            </mat-accordion>\r\n          </div>\r\n        </div>\r\n      </mat-drawer-container>\r\n    </div>\r\n  </div>\r\n</app-sidenav>"

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

module.exports = "body {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGkxOG4tZWRpdG9yXFxpMThuLWVkaXRvci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0REFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn0iXX0= */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_rw_rw_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/rw/rw.service */ "./src/app/services/rw/rw.service.ts");
/* harmony import */ var _components_options_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/options/options.component */ "./src/app/components/options/options.component.ts");
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/layout/layout.component */ "./src/app/pages/layout/layout.component.ts");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/editor/editor.component */ "./src/app/pages/editor/editor.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dialog-overview/dialog-overview.component */ "./src/app/components/dialog-overview/dialog-overview.component.ts");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/config/config.service */ "./src/app/services/config/config.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_options_options_component__WEBPACK_IMPORTED_MODULE_9__["OptionsComponent"],
                _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"],
                _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
                _pages_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__["EditorComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["SidenavComponent"],
                _components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_14__["DialogOverviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
            ],
            entryComponents: [_components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_14__["DialogOverviewComponent"]],
            providers: [_services_rw_rw_service__WEBPACK_IMPORTED_MODULE_8__["RwService"], _services_config_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "p {\n  overflow-wrap: break-word;\n}\n\n.dialog-header {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2ctb3ZlcnZpZXcvRTpcXGkxOG4tZWRpdG9yXFxpMThuLWVkaXRvci9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGlhbG9nLW92ZXJ2aWV3XFxkaWFsb2ctb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAmLXRpdGxlIHtcclxuXHJcbiAgICB9XHJcbiAgICAmLWNsb3NlIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwicCB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5kaWFsb2ctaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"

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
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var DialogOverviewComponent = /** @class */ (function () {
    function DialogOverviewComponent(_snackBar, dialogRef, data) {
        this._snackBar = _snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        if (data.isField) {
            this.viewSource();
        }
        else {
            this.viewRendered();
        }
    }
    DialogOverviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewComponent.prototype.viewRendered = function () {
        this.showHtmlRendered = true;
        this.showSource = false;
    };
    DialogOverviewComponent.prototype.viewSource = function () {
        this.showHtmlRendered = false;
        this.showSource = true;
    };
    DialogOverviewComponent.prototype.copyContent = function () {
        var contentResult = document.getElementById("contentResult");
        contentResult.select();
        document.execCommand('copy');
        contentResult.setSelectionRange(0, 0);
        this.openSnackBar("Content copied", "Close");
    };
    DialogOverviewComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    DialogOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-overview',
            template: __webpack_require__(/*! raw-loader!./dialog-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialog-overview/dialog-overview.component.html"),
            styles: [__webpack_require__(/*! ./dialog-overview.component.scss */ "./src/app/components/dialog-overview/dialog-overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
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

module.exports = ".options-component {\n  display: inline-block;\n  position: relative;\n}\n.options-component_content_options {\n  position: absolute;\n  top: 15px;\n  background-color: white;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  min-width: 150px;\n  padding: 5px;\n  z-index: 1;\n  box-shadow: 1px 3px 5px 1px lightgrey;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcHRpb25zL0U6XFxpMThuLWVkaXRvclxcaTE4bi1lZGl0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9wdGlvbnNcXG9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25zLWNvbXBvbmVudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9jb250ZW50X29wdGlvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IDFweCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5vcHRpb25zLWNvbXBvbmVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm9wdGlvbnMtY29tcG9uZW50X2NvbnRlbnRfb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IDFweCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"

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

module.exports = ".sidenav-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.sidenav-is-mobile .sidenav-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.sidenav-app-name {\n  margin-left: 8px;\n}\n\n.sidenav-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.sidenav-is-mobile .sidenav-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n\n.mat-toolbar-single-row {\n  height: 45px;\n}\n\n.mat-drawer-content {\n  padding: 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L0U6XFxpMThuLWVkaXRvclxcaTE4bi1lZGl0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZGVuYXZcXHNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0U7NEZBQUE7RUFFQSxPQUFBO0FDQ0Y7O0FERUE7RUFDRTtpRUFBQTtFQUVBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWlzLW1vYmlsZSAuc2lkZW5hdi10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmgxLnNpZGVuYXYtYXBwLW5hbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWlzLW1vYmlsZSAuc2lkZW5hdi1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbn1cclxuIiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zaWRlbmF2LWlzLW1vYmlsZSAuc2lkZW5hdi10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbmgxLnNpZGVuYXYtYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uc2lkZW5hdi1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxO1xufVxuXG4uc2lkZW5hdi1pcy1tb2JpbGUgLnNpZGVuYXYtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG59Il19 */"

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

module.exports = ".editor-component {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  overflow: hidden;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.editor-component_header {\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n  height: auto;\n  padding-bottom: 7px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.editor-component_header__left {\n  width: 50%;\n}\n.editor-component_header__right {\n  width: 50%;\n  text-align: right;\n}\n.editor-component_body {\n  overflow-y: hidden;\n  overflow-x: auto;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 7px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.editor-component_info {\n  position: fixed;\n  right: 3rem;\n  top: 4rem;\n  color: #9e9e9e8c;\n  text-align: right;\n}\n.editor-component_info__item {\n  display: block;\n}\n.editor-component_input {\n  display: block;\n  border-bottom: 1px solid #CCC;\n  padding: 0.5rem;\n}\n.editor-component_input label {\n  display: block;\n  font-size: small;\n  margin-left: 7px;\n  margin-bottom: 3px;\n}\n.editor-component_input input {\n  display: block;\n  width: 96%;\n  margin: 0 auto;\n  border-radius: 3px;\n  outline: none;\n  border: 1px solid #CCC;\n  padding: 5px 10px;\n}\n.editor-component_input:hover {\n  background-color: #fafafa;\n}\n.editor-component_input:hover label {\n  font-weight: 600;\n}\n.editor-component_states--inner {\n  background-color: #eee;\n  border-left: 4px solid #673ab7;\n  padding-left: 10px !important;\n  border-radius: 4px;\n}\n.editor-component_footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 0.6rem;\n}\n.editor-component__focus_edit {\n  display: block;\n  width: 100%;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-weight: 700;\n}\n.editor-component__focus_edit:focus {\n  transition: all ease-in-out 200ms;\n  border-bottom: 1px solid #673ab7;\n}\n.editor-component .example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.editor-component .example-tree-node {\n  display: block;\n}\n.editor-component .example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n.tag {\n  border-radius: 10px;\n  font-size: 12pt;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px 5px;\n  padding: 2px 8px;\n}\n.tag-primary {\n  background-color: #673ab7;\n  color: #FFF;\n}\n.tag-default {\n  background-color: #EBEBEB;\n}\n.btn {\n  border-radius: 5px;\n  font-size: 12pt;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px 5px;\n}\n.btn-primary {\n  background-color: #673ab7;\n  color: #FFF;\n}\n.btn-default {\n  background-color: #EBEBEB;\n}\n.editor-container {\n  width: 100%;\n  height: 100%;\n}\n.editor-sidenav-content {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  padding: 5px;\n}\n.editor-sidenav-content_header {\n  width: 100%;\n}\n.editor-sidenav-content_body {\n  width: 100%;\n}\n.editor-sidenav {\n  max-width: 30%;\n}\n.editor-sidenav_header {\n  text-align: center;\n  border-bottom: 1px solid lightgrey;\n  background-color: #F5F5F5;\n}\n.mat-form-field-infix {\n  height: 30px;\n}\n.empty-content {\n  text-align: center;\n  width: 100%;\n}\n.empty-content img {\n  width: 150px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.resource-panel {\n  margin: 10px 0px 0px 0px;\n}\n.loading-panel {\n  width: 95px;\n  height: 60px;\n  position: absolute;\n  top: 40%;\n  left: 48%;\n  z-index: 1000;\n}\n#bowlG {\n  position: relative;\n  width: 58px;\n  height: 58px;\n  margin: auto;\n}\n#bowl_ringG {\n  position: absolute;\n  width: 58px;\n  height: 58px;\n  border: 5px solid #8f2e8f;\n  border-radius: 58px;\n  -o-border-radius: 58px;\n  -ms-border-radius: 58px;\n  -webkit-border-radius: 58px;\n  -moz-border-radius: 58px;\n}\n.ball_holderG {\n  position: absolute;\n  width: 16px;\n  height: 58px;\n  left: 21px;\n  top: 0px;\n  animation-name: ball_moveG;\n  -o-animation-name: ball_moveG;\n  -ms-animation-name: ball_moveG;\n  -webkit-animation-name: ball_moveG;\n  -moz-animation-name: ball_moveG;\n  animation-duration: 1.5s;\n  -o-animation-duration: 1.5s;\n  -ms-animation-duration: 1.5s;\n  -webkit-animation-duration: 1.5s;\n  -moz-animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  -o-animation-iteration-count: infinite;\n  -ms-animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  -o-animation-timing-function: linear;\n  -ms-animation-timing-function: linear;\n  -webkit-animation-timing-function: linear;\n  -moz-animation-timing-function: linear;\n}\n.ballG {\n  position: absolute;\n  left: 0px;\n  top: -14px;\n  width: 23px;\n  height: 23px;\n  background: #7d2b7d;\n  border-radius: 19px;\n  -o-border-radius: 19px;\n  -ms-border-radius: 19px;\n  -webkit-border-radius: 19px;\n  -moz-border-radius: 19px;\n}\n@keyframes ball_moveG {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes ball_moveG {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdG9yL0U6XFxpMThuLWVkaXRvclxcaTE4bi1lZGl0b3Ivc3JjXFxhcHBcXHBhZ2VzXFxlZGl0b3JcXGVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDREQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNERBQUE7QUNBRjtBREVFO0VBQ0Usa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FERUk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FEU0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUEo7QURTSTtFQUNFLGNBQUE7QUNQTjtBRFdFO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ1RKO0FEV0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVE47QURZSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNWTjtBRGFJO0VBQ0UseUJBQUE7QUNYTjtBRGFNO0VBQ0UsZ0JBQUE7QUNYUjtBRGlCSTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDZk47QURtQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDakJKO0FEb0JFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QURvQkk7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDbEJOO0FEc0JFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNwQko7QUR1QkU7RUFDRSxjQUFBO0FDckJKO0FEd0JFO0VBQ0Usa0JBQUE7QUN0Qko7QUQwQkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3ZCRjtBRHlCRTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ3ZCTjtBRDBCRTtFQUNJLHlCQUFBO0FDeEJOO0FENEJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0FDekJGO0FEMkJFO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDekJOO0FENEJFO0VBQ0kseUJBQUE7QUMxQk47QUQ4QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDM0JGO0FENkJFO0VBQ0UsV0FBQTtBQzNCSjtBRDhCRTtFQUNFLFdBQUE7QUM1Qko7QURnQ0E7RUFDRSxjQUFBO0FDN0JGO0FEK0JFO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0FDN0JKO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ25DRjtBRHFDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbkNKO0FEdUNBO0VBQ0Usd0JBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDcENGO0FEd0NBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNyQ0Q7QUR3Q0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNDLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FDckNGO0FEd0NBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQyw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNELHdCQUFBO0VBQ0MsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDRCxtQ0FBQTtFQUNDLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHdDQUFBO0VBQ0QsaUNBQUE7RUFDQyxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtBQ3JDRjtBRHdDQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQyxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ3JDRjtBRDBDQTtFQUNDO0lBQ0MsK0JBQUE7WUFBQSx1QkFBQTtFQ3ZDQTtFRDBDRDtJQUNDLGlDQUFBO1lBQUEseUJBQUE7RUN4Q0E7QUFDRjtBRCtEQTtFQUNDO0lBQ0MsK0JBQUE7RUM3Q0E7RURnREQ7SUFDQyxpQ0FBQTtFQzlDQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3ItY29tcG9uZW50IHtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG4gICZfaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmX19sZWZ0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgICZfX3JpZ2h0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX2JvZHkge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9oZWFkZXIge1xyXG5cclxuICB9XHJcblxyXG4gICZfaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogM3JlbTtcclxuICAgIHRvcDogNHJlbTtcclxuICAgIGNvbG9yOiAjOWU5ZTllOGM7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX2lucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9zdGF0ZXMge1xyXG4gICAgJi0taW5uZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM2NzNhYjc7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX2Zvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gICZfX2ZvY3VzX2VkaXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAyMDBtcztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NzNhYjc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS10cmVlIGxpIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtdHJlZS1ub2RlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtdHJlZS1ub2RlIC5leGFtcGxlLXRyZWUtbm9kZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGFnIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwcHggNXB4O1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcblxyXG4gICYtcHJpbWFyeSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuXHJcbiAgJi1kZWZhdWx0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMHB4IDVweDtcclxuXHJcbiAgJi1wcmltYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG5cclxuICAmLWRlZmF1bHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gIH1cclxufVxyXG5cclxuLmVkaXRvci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVkaXRvci1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogNXB4O1xyXG5cclxuICAmX2hlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0b3Itc2lkZW5hdiB7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcblxyXG4gICZfaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gIH1cclxuXHJcbiAgJl9jb250ZW50IHtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5lbXB0eS1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5yZXNvdXJjZS1wYW5lbCB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubG9hZGluZy1wYW5lbCB7XHJcbiAgd2lkdGg6IDk1cHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiA0OCU7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuXHJcbiNib3dsR3tcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR3aWR0aDo1OHB4O1xyXG5cdGhlaWdodDo1OHB4O1xyXG5cdG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4jYm93bF9yaW5nR3tcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR3aWR0aDo1OHB4O1xyXG5cdGhlaWdodDo1OHB4O1xyXG5cdGJvcmRlcjo1cHggc29saWQgcmdiKDE0Myw0NiwxNDMpO1xyXG5cdGJvcmRlci1yYWRpdXM6NThweDtcclxuXHRcdC1vLWJvcmRlci1yYWRpdXM6NThweDtcclxuXHRcdC1tcy1ib3JkZXItcmFkaXVzOjU4cHg7XHJcblx0XHQtd2Via2l0LWJvcmRlci1yYWRpdXM6NThweDtcclxuXHRcdC1tb3otYm9yZGVyLXJhZGl1czo1OHB4O1xyXG59XHJcblxyXG4uYmFsbF9ob2xkZXJHe1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHdpZHRoOjE2cHg7XHJcblx0aGVpZ2h0OjU4cHg7XHJcblx0bGVmdDoyMXB4O1xyXG5cdHRvcDowcHg7XHJcblx0YW5pbWF0aW9uLW5hbWU6YmFsbF9tb3ZlRztcclxuXHRcdC1vLWFuaW1hdGlvbi1uYW1lOmJhbGxfbW92ZUc7XHJcblx0XHQtbXMtYW5pbWF0aW9uLW5hbWU6YmFsbF9tb3ZlRztcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YmFsbF9tb3ZlRztcclxuXHRcdC1tb3otYW5pbWF0aW9uLW5hbWU6YmFsbF9tb3ZlRztcclxuXHRhbmltYXRpb24tZHVyYXRpb246MS41cztcclxuXHRcdC1vLWFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO1xyXG5cdFx0LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS41cztcclxuXHRcdC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjEuNXM7XHJcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcclxuXHRcdC1vLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7XHJcblx0XHQtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcclxuXHRcdC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcclxuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtcclxuXHRcdC1vLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO1xyXG5cdFx0LW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtcclxuXHRcdC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7XHJcbn1cclxuXHJcbi5iYWxsR3tcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjBweDtcclxuXHR0b3A6LTE0cHg7XHJcblx0d2lkdGg6MjNweDtcclxuXHRoZWlnaHQ6MjNweDtcclxuXHRiYWNrZ3JvdW5kOnJnYigxMjUsNDMsMTI1KTtcclxuXHRib3JkZXItcmFkaXVzOjE5cHg7XHJcblx0XHQtby1ib3JkZXItcmFkaXVzOjE5cHg7XHJcblx0XHQtbXMtYm9yZGVyLXJhZGl1czoxOXB4O1xyXG5cdFx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOjE5cHg7XHJcblx0XHQtbW96LWJvcmRlci1yYWRpdXM6MTlweDtcclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGJhbGxfbW92ZUd7XHJcblx0MCV7XHJcblx0XHR0cmFuc2Zvcm06cm90YXRlKDBkZWcpXHJcblx0fVxyXG5cclxuXHQxMDAle1xyXG5cdFx0dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpXHJcblx0fVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGJhbGxfbW92ZUd7XHJcblx0MCV7XHJcblx0XHQtby10cmFuc2Zvcm06cm90YXRlKDBkZWcpXHJcblx0fVxyXG5cclxuXHQxMDAle1xyXG5cdFx0LW8tdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpXHJcblx0fVxyXG59XHJcblxyXG5ALW1zLWtleWZyYW1lcyBiYWxsX21vdmVHe1xyXG5cdDAle1xyXG5cdFx0LW1zLXRyYW5zZm9ybTpyb3RhdGUoMGRlZylcclxuXHR9XHJcblxyXG5cdDEwMCV7XHJcblx0XHQtbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpXHJcblx0fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbF9tb3ZlR3tcclxuXHQwJXtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKVxyXG5cdH1cclxuXHJcblx0MTAwJXtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpXHJcblx0fVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgYmFsbF9tb3ZlR3tcclxuXHQwJXtcclxuXHRcdC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKVxyXG5cdH1cclxuXHJcblx0MTAwJXtcclxuXHRcdC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpXHJcblx0fVxyXG59IiwiLmVkaXRvci1jb21wb25lbnQge1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2hlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2hlYWRlcl9fbGVmdCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uZWRpdG9yLWNvbXBvbmVudF9oZWFkZXJfX3JpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZWRpdG9yLWNvbXBvbmVudF9ib2R5IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZWRpdG9yLWNvbXBvbmVudF9pbmZvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogM3JlbTtcbiAgdG9wOiA0cmVtO1xuICBjb2xvcjogIzllOWU5ZThjO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2luZm9fX2l0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lZGl0b3ItY29tcG9uZW50X2lucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uZWRpdG9yLWNvbXBvbmVudF9pbnB1dCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uZWRpdG9yLWNvbXBvbmVudF9pbnB1dCBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2lucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5lZGl0b3ItY29tcG9uZW50X2lucHV0OmhvdmVyIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5lZGl0b3ItY29tcG9uZW50X3N0YXRlcy0taW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM2NzNhYjc7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZWRpdG9yLWNvbXBvbmVudF9mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcbn1cbi5lZGl0b3ItY29tcG9uZW50X19mb2N1c19lZGl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmVkaXRvci1jb21wb25lbnRfX2ZvY3VzX2VkaXQ6Zm9jdXMge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMjAwbXM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjczYWI3O1xufVxuLmVkaXRvci1jb21wb25lbnQgLmV4YW1wbGUtdHJlZSBsaSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5lZGl0b3ItY29tcG9uZW50IC5leGFtcGxlLXRyZWUtbm9kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVkaXRvci1jb21wb25lbnQgLmV4YW1wbGUtdHJlZS1ub2RlIC5leGFtcGxlLXRyZWUtbm9kZSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnRhZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgcGFkZGluZzogMnB4IDhweDtcbn1cbi50YWctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGNvbG9yOiAjRkZGO1xufVxuLnRhZy1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHggNXB4O1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgY29sb3I6ICNGRkY7XG59XG4uYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xufVxuXG4uZWRpdG9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lZGl0b3Itc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uZWRpdG9yLXNpZGVuYXYtY29udGVudF9oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5lZGl0b3Itc2lkZW5hdi1jb250ZW50X2JvZHkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVkaXRvci1zaWRlbmF2IHtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4uZWRpdG9yLXNpZGVuYXZfaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZW1wdHktY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZW1wdHktY29udGVudCBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yZXNvdXJjZS1wYW5lbCB7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuLmxvYWRpbmctcGFuZWwge1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA0OCU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbiNib3dsRyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jYm93bF9yaW5nRyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYm9yZGVyOiA1cHggc29saWQgIzhmMmU4ZjtcbiAgYm9yZGVyLXJhZGl1czogNThweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNThweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDU4cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNThweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1OHB4O1xufVxuXG4uYmFsbF9ob2xkZXJHIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBsZWZ0OiAyMXB4O1xuICB0b3A6IDBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhbGxfbW92ZUc7XG4gIC1vLWFuaW1hdGlvbi1uYW1lOiBiYWxsX21vdmVHO1xuICAtbXMtYW5pbWF0aW9uLW5hbWU6IGJhbGxfbW92ZUc7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhbGxfbW92ZUc7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGJhbGxfbW92ZUc7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1vLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4uYmFsbEcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtMTRweDtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbiAgYmFja2dyb3VuZDogIzdkMmI3ZDtcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMTlweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDE5cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTlweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGJhbGxfbW92ZUcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBiYWxsX21vdmVHIHtcbiAgMCUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIGJhbGxfbW92ZUcge1xuICAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbF9tb3ZlRyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGJhbGxfbW92ZUcge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);






var EditorComponent = /** @class */ (function () {
    function EditorComponent(rw, dialog, cdRef) {
        this.rw = rw;
        this.dialog = dialog;
        this.cdRef = cdRef;
        this.states = [];
        this.modelNewLanguage = '.json';
        this.modelNewKey = '';
        this.loading = false;
        this.jsonResult = {};
        this.totalResources = [];
        this.missingResources = [];
        this.renderChecked = false;
        this.isMissingActivated = false;
    }
    EditorComponent.prototype.readMultiFiles = function (e) {
        var _this = this;
        this.loading = true;
        this.cdRef.detectChanges();
        this.rw.readMultiFiles(e).then(function (_a) {
            var count = _a.count;
            _this.totalResources = _this.rw.categoryList;
            _this.missingResources = _this.rw.categoryList.filter(function (res) { return res.languages.length != _this.rw.fileList.length; });
            Array.from({ length: count }, function () { return _this.states.push({ inner: false }); });
            _this.loading = false;
            _this.cdRef.detectChanges();
        });
    };
    EditorComponent.prototype.readExcelFile = function (e) {
        var _this = this;
        this.loading = true;
        this.cdRef.detectChanges();
        this.rw.readExcelFile(e).then(function (_a) {
            var workbook = _a.workbook;
            var first_sheet_name = workbook.SheetNames[0];
            var languages = ["en", "es", "de", "fr", "it", "ja", "nl", "pt", "ru", "zh-cn"];
            var result = [];
            /* Get worksheet */
            var worksheet = workbook.Sheets[first_sheet_name];
            var rows = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(worksheet, {
                raw: true
            });
            languages.forEach(function (lang) {
                var data = { lang: lang, resources: [] };
                rows.forEach(function (row) {
                    var key = row.KEY || row.key;
                    var value = _this.getLangValue(row, lang);
                    data.resources.push(key + " : " + (value || ''));
                    // data.resources.push(`${key} : ${value || ''};`)
                });
                result.push(data);
            });
            _this.jsonResult = '<pre>' + JSON.stringify(result, undefined, 2) + '</pre>';
            _this.openDialog("Result", _this.jsonResult, 900, true, true);
            _this.loading = false;
            _this.cdRef.detectChanges();
        });
    };
    EditorComponent.prototype.getLangValue = function (row, lang) {
        switch (lang) {
            case "en":
                return row.EN || row.en;
            case "es":
                return row.ES || row.es;
            case "de":
                return row.DE || row.de;
            case "fr":
                return row.FR || row.fr;
            case "it":
                return row.IT || row.it;
            case "ja":
                return row.JA || row.ja;
            case "nl":
                return row.NL || row.nl;
            case "pt":
                return row.PT || row.pt;
            case "ru":
                return row.RU || row.ru;
            case "zh-cn":
                return row.ZH_CN || row.zh_cn;
        }
    };
    EditorComponent.prototype.filterResources = function (event) {
        var _this = this;
        if (event != '') {
            this.totalResources =
                this.isMissingActivated ?
                    this.missingResources.filter(function (res) { return res.keyName.toLowerCase().indexOf(event.toLowerCase()) > -1; }) :
                    this.rw.categoryList.filter(function (res) { return res.keyName.toLowerCase().indexOf(event.toLowerCase()) > -1; });
            if (this.resourcesGroup)
                this.resourcesGroup = this.totalResources.filter(function (res) { return res.keyName.toLowerCase().indexOf(_this.resourcesGroup.keyName.toLowerCase()) > -1; }).length > 0 ? this.resourcesGroup : null;
        }
        else {
            this.totalResources = this.isMissingActivated ? this.missingResources : this.rw.categoryList;
        }
    };
    EditorComponent.prototype.addLanguage = function (allKeys, resourceKey) {
        this.rw.addLanguage(allKeys, resourceKey, this.modelNewLanguage);
        this.modelNewLanguage = '.json';
    };
    EditorComponent.prototype.save = function () {
        this.rw.exportCategories();
    };
    EditorComponent.prototype.addNewKey = function () {
        if (this.modelNewKey) {
            var index = this.rw.addResourceKey(this.modelNewKey);
            this.modelNewKey = '';
            this.states[index] = { inner: false };
            this.refreshResources();
        }
    };
    EditorComponent.prototype.removeResourceKey = function (keyName) {
        this.rw.removeResourceKey(keyName);
        this.refreshResources();
    };
    EditorComponent.prototype.refreshResources = function () {
        var _this = this;
        if (this.isMissingActivated) {
            this.missingResources = this.rw.categoryList.filter(function (res) { return res.languages.length != _this.rw.fileList.length; });
        }
        else {
            this.totalResources = this.rw.categoryList;
        }
    };
    EditorComponent.prototype.onChangeInner = function (event, index) {
        this.renderChecked = event.checked;
        this.state.inner = this.renderChecked;
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
    EditorComponent.prototype.openDialog = function (title, content, width, isField, showCheckboxes) {
        if (width === void 0) { width = 430; }
        if (isField === void 0) { isField = false; }
        if (showCheckboxes === void 0) { showCheckboxes = false; }
        var dialogRef = this.dialog.open(src_app_components_dialog_overview_dialog_overview_component__WEBPACK_IMPORTED_MODULE_4__["DialogOverviewComponent"], {
            width: width + "px",
            data: { title: title, content: content, isField: isField, showCheckboxes: showCheckboxes }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log('The dialog was closed', result);
        });
    };
    // Treat the instructor name as the unique identifier for the object
    EditorComponent.prototype.trackCategoryByKey = function (index, category) {
        return category.keyName;
    };
    EditorComponent.prototype.trackResourceByKey = function (index, transl) {
        return transl.lang;
    };
    EditorComponent.prototype.viewResource = function (index) {
        this.resourcesGroup = this.totalResources[index];
        this.state = this.states[index];
    };
    EditorComponent.prototype.showMissingFiles = function () {
        var _this = this;
        this.totalResources = this.missingResources.filter(function (res) { return res.languages.length != _this.rw.fileList.length; });
        this.isMissingActivated = true;
    };
    EditorComponent.prototype.showAllResources = function () {
        this.totalResources = this.rw.categoryList;
        this.isMissingActivated = false;
    };
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/pages/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rw_rw_service__WEBPACK_IMPORTED_MODULE_2__["RwService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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

module.exports = ".layout-component {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.layout-component_content {\n  margin: 0 auto;\n  width: 90%;\n  min-width: 600px;\n  max-width: 1600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGF5b3V0L0U6XFxpMThuLWVkaXRvclxcaTE4bi1lZGl0b3Ivc3JjXFxhcHBcXHBhZ2VzXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtY29tcG9uZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICZfY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTYwMHB4OyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIubGF5b3V0LWNvbXBvbmVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuLmxheW91dC1jb21wb25lbnRfY29udGVudCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbn0iXX0= */"

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

module.exports = "body {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.welcome-panel {\n  width: 100%;\n  height: 100%;\n  background-color: #FFF;\n  position: fixed;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  align-items: center;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.welcome-panel-header {\n  height: 30%;\n  text-align: center;\n}\n\n.welcome-panel-header img {\n  margin-top: 20px;\n  width: 120px;\n}\n\n.welcome-panel-body {\n  height: 50%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n\n.welcome-panel-footer {\n  height: 15%;\n  text-align: center;\n  display: flex;\n  align-items: flex-end;\n}\n\n.welcome-panel-footer b {\n  margin-left: 5px;\n}\n\n.btn {\n  border-radius: 5px;\n  font-size: 12pt;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px 5px;\n}\n\n.btn-primary {\n  background-color: #673ab7;\n  color: #FFF;\n}\n\n.btn-default {\n  background-color: #EBEBEB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS9FOlxcaTE4bi1lZGl0b3JcXGkxOG4tZWRpdG9yL3NyY1xcYXBwXFxwYWdlc1xcd2VsY29tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNERBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QUNDSjs7QURFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQVo7O0FESUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0hSOztBREtRO0VBQ0ksZ0JBQUE7QUNIWjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRE9JO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDTFI7O0FEUUk7RUFDSSx5QkFBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLndlbGNvbWUtcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBcclxuXHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtYm9keXtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYtZm9vdGVye1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxuXHJcbiAgICAmLXByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgJi1kZWZhdWx0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xyXG4gICAgfVxyXG59IiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4ud2VsY29tZS1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4ud2VsY29tZS1wYW5lbC1oZWFkZXIge1xuICBoZWlnaHQ6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndlbGNvbWUtcGFuZWwtaGVhZGVyIGltZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi53ZWxjb21lLXBhbmVsLWJvZHkge1xuICBoZWlnaHQ6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndlbGNvbWUtcGFuZWwtZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLndlbGNvbWUtcGFuZWwtZm9vdGVyIGIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHQ7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweCA1cHg7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5idG4tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XG59Il19 */"

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

/***/ "./src/app/services/config/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/config/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.REGEX_IDENTIFIER = '([a-zA-Z0-9_-]+)';
        this.brackets = {
            open: '{{',
            close: '}}'
        };
    }
    ConfigService.prototype.getBindingParams = function (text) {
        var r = new RegExp(this.brackets.open + "s*" + this.REGEX_IDENTIFIER + "s*" + this.brackets.close, 'g');
        var match = text.match(r);
        return match ? match : [];
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
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
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
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
        return new Promise((function (resolve) {
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
    RwService.prototype.clean = function () {
    };
    RwService.prototype.readExcelFile = function (e) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.fileList = [];
            var files = e.currentTarget.files;
            Object.keys(files).forEach(function (i) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var filename = file.name;
                    // pre-process data
                    var binary = "";
                    var target = e.target;
                    var bytes = new Uint8Array(target.result);
                    var length = bytes.byteLength;
                    for (var i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    // call 'xlsx' to read the file
                    var oFile = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](binary, { type: 'binary', cellDates: true, cellStyles: true });
                    if (oFile) {
                        resolve({ workbook: oFile });
                    }
                };
                reader.readAsArrayBuffer(file);
            });
        }));
    };
    RwService.prototype.exportToExcel = function () {
        var tabularData = [{
                "sheetName": "Sheet1",
                "data": [[{ "text": "Name" }, { "text": "Position" }, { "text": "Office" }, { "text": "Age" }, {
                            "text": "Start <a href='https://www.jqueryscript.net/time-clock/'>date</a>"
                        }, { "text": "Salary" }], [{ "text": "Tiger Nixon" }, { "text": "System Architect" }, { "text": "Edinburgh" }, { "text": 61 }, { "text": "2011/04/25" }, { "text": "$320,800" }], [{ "text": "Garrett Winters" }, { "text": "Accountant" }, { "text": "Tokyo" }, { "text": 63 }, { "text": "2011/07/25" }, { "text": "$170,750" }], [{ "text": "Ashton Cox" }, { "text": "Junior Technical Author" }, { "text": "San Francisco" }, { "text": 66 }, { "text": "2009/01/12" }, { "text": "$86,000" }], [{ "text": "Cedric Kelly" }, { "text": "Senior Javascript Developer" }, { "text": "Edinburgh" }, { "text": 22 }, { "text": "2012/03/29" }, { "text": "$433,060" }], [{ "text": "Airi Satou" }, { "text": "Accountant" }, { "text": "Tokyo" }, { "text": 33 }, { "text": "2008/11/28" }, { "text": "$162,700" }], [{ "text": "Brielle Williamson" }, { "text": "Integration Specialist" }, { "text": "New York" }, { "text": 61 }, { "text": "2012/12/02" }, { "text": "$372,000" }], [{ "text": "Herrod Chandler" }, { "text": "Sales Assistant" }, { "text": "San Francisco" }, { "text": 59 }, { "text": "2012/08/06" }, { "text": "$137,500" }], [{ "text": "Rhona Davidson" }, { "text": "Integration Specialist" }, { "text": "Tokyo" }, { "text": 55 }, { "text": "2010/10/14" }, { "text": "$327,900" }]]
            }];
        var options = {
            fileName: "jhreport",
            extension: ".xlsx",
            sheetName: "Sheet",
            fileFullName: "report.xlsx",
            header: true,
            maxCellWidth: 20
        };
        //XLSX.export(tabularData, options);
    };
    RwService.prototype.categorize = function () {
        var _this = this;
        var _loop_1 = function (file) {
            Object.keys(file.content).map(function (key) {
                var category = _this.categoryList.find(function (c) { return c.keyName === key; });
                if (!category) {
                    category = {
                        keyName: key,
                        languages: []
                    };
                    _this.categoryList.push(category);
                }
                var text = file.content[key];
                if (typeof text === 'string') {
                    category.languages.push({
                        lang: file.name,
                        text: file.content[key]
                    });
                }
                else if (typeof text === 'object') {
                    category.languages.push({
                        lang: file.name,
                        children: _this.getChilds(text)
                    });
                }
            });
        };
        for (var _i = 0, _a = this.fileList; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
        //console.log('Categories:', this.categoryList);
        return this.categoryList.length;
    };
    RwService.prototype.getChilds = function (text) {
        var _this = this;
        var children = [];
        Object.keys(text).map(function (k) {
            if (typeof text[k] === 'string') {
                children.push({
                    keyName: k,
                    hasChildren: false,
                    text: text[k]
                });
            }
            else {
                children.push({
                    keyName: k,
                    hasChildren: true,
                    children: _this.getChilds(text[k])
                });
            }
        });
        return children;
    };
    RwService.prototype.addLanguage = function (allKeys, resourceKey, lang) {
        var _this = this;
        if (allKeys) {
            Object.keys(this.categoryList).map(function (rKey) {
                _this.addLanguage(false, _this.categoryList[rKey].keyName, lang);
            });
        }
        else {
            this.categoryList.filter(function (f) { return f.keyName === resourceKey; })[0].languages.push({
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
        //console.log('Save:', list);
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

module.exports = __webpack_require__(/*! E:\i18n-editor\i18n-editor\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map