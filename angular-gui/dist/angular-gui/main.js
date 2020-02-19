(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/firebase.service */ "./src/app/_services/firebase.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function HeaderComponent_mat_toolbar_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " qu\u00E9t m\u00E3 v\u1EA1ch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng b\u00E0i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/auto-publish");
} }
function HeaderComponent_mat_toolbar_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_mat_toolbar_0_div_2_ng_container_1_Template, 5, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", id_r17 !== 0);
} }
function HeaderComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_mat_toolbar_0_div_2_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_Template_mat_icon_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.fbSV.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r15 = ctx.ngIf;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.fbSV.role.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r15.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r14.fbSV.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15.displayName);
} }
class HeaderComponent {
    constructor(fbSV) {
        this.fbSV = fbSV;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 3, consts: [["color", "primary", 4, "ngIf"], ["color", "primary"], ["class", "menu-item", 3, "ngSwitch", 4, "ngIf"], [1, "menu-spacer"], ["width", "30px", "alt", "", 3, "src"], [1, "info", 3, "title"], [2, "margin", "0 5px"], ["title", "\u0110\u0102NG XU\u1EA4T", 2, "cursor", "pointer", "color", "#920000", 3, "click"], [1, "menu-item", 3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-button", "", "routerLinkActive", "is-active", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_mat_toolbar_0_Template, 10, 4, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.fbSV.user));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".menu-item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]   .mat-button-bas[_ngcontent-%COMP%] {\n  border: #0000 solid 1px;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]   .mat-button-base.is-active[_ngcontent-%COMP%] {\n  background: #1385ffe8;\n  color: #fff;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  width: 40px;\n  height: 40px;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eW5obmhvbi9Eb2N1bWVudHMvTVktUFJPSkVDVFMvUFlUSE9OL2dvbWRvbi9hbmd1bGFyLWd1aS9zcmMvYXBwL19jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL19jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWl0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXG4gIHRvcDogMDtcbiAgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgLm1hdC1idXR0b24tYmFzIHtcbiAgICBib3JkZXI6ICMwMDAwIHNvbGlkIDFweDtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLWJhc2UuaXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTM4NWZmZTg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLmluZm8gc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAvLyBmb250LWZhbWlseTogJ0xleGVuZCBEZWNhJywgc2Fucy1zZXJpZjtcbiAgfVxufVxuIiwiLm1lbnUtaXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwO1xuICAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1iYXMge1xuICBib3JkZXI6ICMwMDAwIHNvbGlkIDFweDtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1iYXNlLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxMzg1ZmZlODtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSAuaW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_components/pages/auto-publish/auto-publish.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_components/pages/auto-publish/auto-publish.component.ts ***!
  \**************************************************************************/
/*! exports provided: AutoPublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPublishComponent", function() { return AutoPublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_com_python_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/com-python.service */ "./src/app/_services/com-python.service.ts");




class AutoPublishComponent {
    constructor(eelSV) {
        this.eelSV = eelSV;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.eelSV.createServerSelelium();
            console.log('ok');
        });
    }
}
AutoPublishComponent.ɵfac = function AutoPublishComponent_Factory(t) { return new (t || AutoPublishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_com_python_service__WEBPACK_IMPORTED_MODULE_2__["ComPythonService"])); };
AutoPublishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AutoPublishComponent, selectors: [["app-auto-publish"]], decls: 2, vars: 0, template: function AutoPublishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "auto-publish works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3BhZ2VzL2F1dG8tcHVibGlzaC9hdXRvLXB1Ymxpc2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutoPublishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-auto-publish',
                templateUrl: './auto-publish.component.html',
                styleUrls: ['./auto-publish.component.scss']
            }]
    }], function () { return [{ type: src_app_services_com_python_service__WEBPACK_IMPORTED_MODULE_2__["ComPythonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_components/pages/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/pages/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/firebase.service */ "./src/app/_services/firebase.service.ts");



class LoginComponent {
    constructor(fbSV) {
        this.fbSV = fbSV;
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 6, vars: 0, consts: [["id", "login", 1, "form"], ["src", "assets/barcode.png"], ["id", "btn-login", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GOM\u0110\u01A0N - GI\u1EA2I PH\u00C1P B\u00C1N H\u00C0NG ONLINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener($event) { return ctx.fbSV.googleSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0110\u0102NG NH\u1EACP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 80px;\n  margin: 30px auto;\n}\n\n#login[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 500px;\n  margin: 50px auto 10px auto;\n  padding: 30px;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px -3px #333;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 100px;\n  border: none;\n  background: #007bff;\n  \n  color: #ffffff;\n  \n  box-shadow: 0 2px 10px 0px #719be6;\n  display: block;\n  margin: 55px auto 10px auto;\n  font-size: 16px;\n  font-weight: 500 !important;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eW5obmhvbi9Eb2N1bWVudHMvTVktUFJPSkVDVFMvUFlUSE9OL2dvbWRvbi9hbmd1bGFyLWd1aS9zcmMvYXBwL19jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9fY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbiNsb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweCBhdXRvO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggLTNweCAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNsb2dpbiBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIC8qIHdpZHRoOiA1MCU7ICovXG4gIGNvbG9yOiAjZmZmZmZmO1xuICAvKiBtYXJnaW4tdG9wOiAyNXB4OyAqL1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDBweCAjNzE5YmU2O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1NXB4IGF1dG8gMTBweCBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG4iLCIjbG9naW4gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuI2xvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0byAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCAtM3B4ICMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2xvZ2luIGJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgLyogd2lkdGg6IDUwJTsgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG4gIC8qIG1hcmdpbi10b3A6IDI1cHg7ICovXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggMHB4ICM3MTliZTY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDU1cHggYXV0byAxMHB4IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_components/pages/scan-barcode/scan-barcode.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_components/pages/scan-barcode/scan-barcode.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScanBarcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanBarcodeComponent", function() { return ScanBarcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/helper.service */ "./src/app/_services/helper.service.ts");
/* harmony import */ var src_app_services_com_python_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/com-python.service */ "./src/app/_services/com-python.service.ts");
/* harmony import */ var src_app_openapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/openapi */ "./src/app/openapi/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _pipes_status__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../_pipes/status */ "./src/app/_pipes/status.ts");

















function ScanBarcodeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScanBarcodeComponent_mat_form_field_7_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r25.port);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r25.port, " - ", item_r25.desc, " ");
} }
function ScanBarcodeComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ScanBarcodeComponent_mat_form_field_7_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.openPort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ScanBarcodeComponent_mat_form_field_7_mat_option_2_Template, 2, 3, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r22.currentPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.ports);
} }
function ScanBarcodeComponent_mat_list_28_ng_container_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r29.data["message"]);
} }
function ScanBarcodeComponent_mat_list_28_ng_container_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "statusName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://gomdon.tuhoc247.com/order/", item_r29.data.order_sn, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r29.data.order_sn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0 - \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 5, item_r29.data.gomdon_status, "Sell")), " ");
} }
const _c0 = function (a0) { return { "color": a0 }; };
function ScanBarcodeComponent_mat_list_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u00A0 - \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScanBarcodeComponent_mat_list_28_ng_container_1_span_7_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ScanBarcodeComponent_mat_list_28_ng_container_1_ng_template_8_Template, 6, 8, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, item_r29.code === "error" ? "#b71206" : "#109e00"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r29.code === "error")("ngIfElse", _r31);
} }
function ScanBarcodeComponent_mat_list_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScanBarcodeComponent_mat_list_28_ng_container_1_Template, 11, 6, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.datas);
} }
class ScanBarcodeComponent {
    constructor(helper, eelSV, ngZone, sellSV) {
        this.helper = helper;
        this.eelSV = eelSV;
        this.ngZone = ngZone;
        this.sellSV = sellSV;
        this.ports = [];
        this.currentPort = '...';
        this.datas = [];
        this.loading = false;
        this.task = 1;
    }
    ngOnInit() {
        this.subData = this.eelSV.dataSerial$.subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data !== '') {
                this.sellSV.configuration.accessToken = yield this.helper.getToken();
                this.ngZone.run(() => {
                    this.loading = true;
                    this.sellSV.getByIdsSell([data]).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const sell = res[0];
                        if (sell.code === 'error' && sell.data.message === 'đơn không tồn tại') {
                            yield this.eelSV.playAudio('notfound');
                        }
                        else if (sell.code === 'success') {
                            if (this.task === 1) {
                                const status = sell.data.gomdon_status;
                                switch (true) {
                                    case status < 5:
                                        yield this.eelSV.playAudio('chuaguidi');
                                        break;
                                    case status === 5 || status === 6:
                                        this.sellSV.updateSell([{
                                                id: sell.data.order_sn,
                                                data: {
                                                    gomdon_status: 8
                                                }
                                            }]).subscribe((res1) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                            if (res1[0].code === 'success') {
                                                yield this.eelSV.playAudio('hoan');
                                                sell.data.gomdon_status = 8;
                                            }
                                        }));
                                        break;
                                    case status === 8:
                                        yield this.eelSV.playAudio('dahoan');
                                        break;
                                }
                            }
                        }
                        this.datas = [sell, ...this.datas];
                        this.loading = false;
                    }));
                });
            }
        }));
        this.getListPort();
    }
    ngOnDestroy() {
        this.subData.unsubscribe();
    }
    getListPort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.ports = yield this.eelSV.getListPort();
            this.loading = false;
        });
    }
    openPort(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.helper.loading();
            const result = yield this.eelSV.openPort(e.value);
            console.log(result);
            if (result.err !== '') {
                alert(result.err);
                this.currentPort = '...';
            }
            else {
                this.currentPort = result.port;
                this.eelSV.readDataFromSerial();
            }
            // this.helper.loading(true);
        });
    }
}
ScanBarcodeComponent.ɵfac = function ScanBarcodeComponent_Factory(t) { return new (t || ScanBarcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_com_python_service__WEBPACK_IMPORTED_MODULE_3__["ComPythonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_openapi__WEBPACK_IMPORTED_MODULE_4__["SellService"])); };
ScanBarcodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScanBarcodeComponent, selectors: [["app-scan-barcode"]], decls: 29, vars: 7, consts: [["id", "loading", 4, "ngIf"], ["fxLayout", "row", 1, "content"], ["fxFlex", "40", 1, "list-ports"], ["title", "Refresh danh s\u00E1ch port", 2, "color", "#0b7100", 3, "click"], [4, "ngIf"], ["fxFlex", "30", 2, "padding-left", "20px"], [1, "open-p"], [2, "margin-bottom", "0"], [3, "ngModel", "ngModelChange"], [3, "value"], ["fxLayout", "row"], ["title", "X\u00F3a k\u1EBFt qu\u1EA3 qu\u00E9t", 2, "color", "#f44336", "margin-right", "20px", 3, "click"], ["fxLayout", "row", 1, "list-result"], ["id", "loading"], ["src", "assets/loader.gif"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "ngStyle"], [1, "id"], ["style", "text-transform: uppercase;", 4, "ngIf", "ngIfElse"], ["exist", ""], [2, "text-transform", "uppercase"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function ScanBarcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ScanBarcodeComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "DANH S\u00C1CH PORT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanBarcodeComponent_Template_mat_icon_click_5_listener($event) { return ctx.getListPort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "autorenew");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScanBarcodeComponent_mat_form_field_7_Template, 3, 2, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "PORT \u0110ANG M\u1EDE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "CH\u1EE8C N\u0102NG:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScanBarcodeComponent_Template_mat_select_ngModelChange_17_listener($event) { return ctx.task = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " CHUY\u1EC2N \u0110\u01A0N HO\u00C0N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " XEM \u0110\u01A0N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "K\u1EBET QU\u1EA2 QU\u00C9T: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScanBarcodeComponent_Template_mat_icon_click_25_listener($event) { return ctx.datas = []; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ScanBarcodeComponent_mat_list_28_Template, 2, 1, "mat-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ports.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentPort, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.task);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datas.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _pipes_status__WEBPACK_IMPORTED_MODULE_15__["StatusPipe"]], styles: [".content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\nh4[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 5px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.list-ports[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  width: 98%;\n}\n\nh4[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #004eb7;\n  font-weight: 500 !important;\n  font-family: \"Barlow\", sans-serif;\n  margin-bottom: unset;\n}\n\nspan.mat-option-text[_ngcontent-%COMP%] {\n  font-family: \"Inconsolata\", monospace !important;\n  letter-spacing: 1px;\n  font-size: 17px !important;\n}\n\nspan.open-p[_ngcontent-%COMP%] {\n  font-family: \"Inconsolata\", monospace;\n  font-size: 33px;\n  color: #00881f;\n  font-weight: 500;\n  margin-top: 20px;\n  display: block;\n}\n\n.list-result[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 73vh;\n  overflow-y: scroll;\n  margin-right: 25px;\n}\n\n.list-result[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n\n.list-result[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  border-top-color: #3a8eff26;\n  border-top-width: 2px;\n  border-top-style: dashed;\n}\n\n.list-result[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n  font-size: 20px;\n}\n\n.list-result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eW5obmhvbi9Eb2N1bWVudHMvTVktUFJPSkVDVFMvUFlUSE9OL2dvbWRvbi9hbmd1bGFyLWd1aS9zcmMvYXBwL19jb21wb25lbnRzL3BhZ2VzL3NjYW4tYmFyY29kZS9zY2FuLWJhcmNvZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL19jb21wb25lbnRzL3BhZ2VzL3NjYW4tYmFyY29kZS9zY2FuLWJhcmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREdFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjs7QURJQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FDREY7O0FESUE7RUFDRSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURHQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0k7RUFDRSwwQkFBQTtBQ0ROOztBRElJO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDRk47O0FETUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPRTtFQUNFLGtCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9wYWdlcy9zY2FuLWJhcmNvZGUvc2Nhbi1iYXJjb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQgPiBkaXYge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5oNCA+IG1hdC1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdC1wb3J0cyB7XG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTglO1xuICB9XG59XG5cbmg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMDA0ZWI3O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkJhcmxvd1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbn1cblxuc3Bhbi5tYXQtb3B0aW9uLXRleHQge1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YVwiLCBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5zcGFuLm9wZW4tcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBjb2xvcjogIzAwODgxZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5saXN0LXJlc3VsdCB7XG4gIG1hdC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDczdmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcblxuICAgIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1hdC1kaXZpZGVyIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICMzYThlZmYyNjtcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IGRhc2hlZDtcbiAgICB9XG4gIH1cblxuICAuaWQge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICBtYXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4iLCIuY29udGVudCA+IGRpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmg0ID4gbWF0LWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LXBvcnRzIG1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5OCU7XG59XG5cbmg0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMDA0ZWI3O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkJhcmxvd1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbn1cblxuc3Bhbi5tYXQtb3B0aW9uLXRleHQge1xuICBmb250LWZhbWlseTogXCJJbmNvbnNvbGF0YVwiLCBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ub3Blbi1wIHtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDMzcHg7XG4gIGNvbG9yOiAjMDA4ODFmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxpc3QtcmVzdWx0IG1hdC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzN2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4ubGlzdC1yZXN1bHQgbWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLmxpc3QtcmVzdWx0IG1hdC1saXN0IC5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzYThlZmYyNjtcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBkYXNoZWQ7XG59XG4ubGlzdC1yZXN1bHQgLmlkIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubGlzdC1yZXN1bHQgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScanBarcodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-scan-barcode',
                templateUrl: './scan-barcode.component.html',
                styleUrls: ['./scan-barcode.component.scss']
            }]
    }], function () { return [{ type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] }, { type: src_app_services_com_python_service__WEBPACK_IMPORTED_MODULE_3__["ComPythonService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: src_app_openapi__WEBPACK_IMPORTED_MODULE_4__["SellService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_pipes/status.ts":
/*!**********************************!*\
  !*** ./src/app/_pipes/status.ts ***!
  \**********************************/
/*! exports provided: StatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPipe", function() { return StatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/helper.service */ "./src/app/_services/helper.service.ts");



class StatusPipe {
    constructor(helper) {
        this.helper = helper;
    }
    transform(val, type) {
        let statusName = '';
        switch (type) {
            case 'Sell':
                statusName = this.helper.sellStatus.find(x => x.id === val).vietnamese;
        }
        return statusName;
    }
}
StatusPipe.ɵfac = function StatusPipe_Factory(t) { return new (t || StatusPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"])); };
StatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "statusName", type: StatusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'statusName',
            }]
    }], function () { return [{ type: _services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/com-python.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/com-python.service.ts ***!
  \*************************************************/
/*! exports provided: ComPythonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComPythonService", function() { return ComPythonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ComPythonService {
    constructor() {
        this.dataSerial$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    playAudio(fileName) {
        return new Promise(r => {
            eel.play_audio(fileName)(() => {
                r();
            });
        });
    }
    getListPort() {
        return new Promise(r => {
            console.log('get');
            eel.get_ports()((data) => {
                r(data);
            });
        });
    }
    openPort(port) {
        return new Promise(r => {
            eel.open_port(port)((data) => {
                r(data);
            });
        });
    }
    readDataFromSerial() {
        eel.read_data_serial()(data => {
            if (data !== '') {
                this.dataSerial$.next(data);
            }
            this.readDataFromSerial();
        });
    }
    createServerSelelium() {
        return new Promise(r => {
            eel.start_server()(() => {
                r();
            });
        });
    }
}
ComPythonService.ɵfac = function ComPythonService_Factory(t) { return new (t || ComPythonService)(); };
ComPythonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComPythonService, factory: ComPythonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComPythonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_services/firebase.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/firebase.service.ts ***!
  \***********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _openapi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../openapi */ "./src/app/openapi/index.ts");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper.service */ "./src/app/_services/helper.service.ts");










class FirebaseService {
    constructor(afauth, router, userSV, helper) {
        this.afauth = afauth;
        this.router = router;
        this.userSV = userSV;
        this.helper = helper;
        this.role$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.role = {};
        this.user = afauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            // Logged in
            if (user !== null) {
                user.getIdTokenResult().then(result => {
                    if (result.claims.role === undefined) {
                        user.getIdToken(true).then(token => {
                            userSV.configuration.accessToken = token;
                            userSV
                                .createUser({
                                displayName: user.displayName,
                                email: result.claims.email,
                                photoURL: result.claims.picture,
                                uid: user.uid
                            })
                                .subscribe(res => {
                                user.getIdToken().then(token1 => console.log(token1));
                            }, err => {
                                console.log(err);
                            });
                        });
                    }
                    else {
                        const rolescm = this.helper.roleSchema.find(x => x.code === result.claims.role);
                        this.role$.next(rolescm);
                        this.role = rolescm || {};
                        this.role.uid = user.uid;
                        this.role.userName = user.displayName;
                    }
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
            }
            else {
                // Logged out
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
    signIn(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.afauth.auth
                    .signInWithEmailAndPassword(email, password)
                    .catch(err => this.helper.openSnackBar(err.code, 3000));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    googleSignIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const provider = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            yield this.afauth.auth.signInWithPopup(provider);
            this.router.navigate(['/']);
        });
    }
    logOut() {
        this.afauth.auth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }
}
FirebaseService.ɵfac = function FirebaseService_Factory(t) { return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_openapi__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"])); };
FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirebaseService, factory: FirebaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _openapi__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/helper.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/helper.service.ts ***!
  \*********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");





class HelperService {
    constructor(snackBar, afauth) {
        this.snackBar = snackBar;
        this.afauth = afauth;
        this.roleSchema = [
            {
                id: 0,
                code: 'nguoimoi',
                name: 'Người mới'
            },
            {
                id: 1,
                code: 'admin',
                name: 'ADMIN'
            },
            {
                id: 4,
                code: 'quanlykho',
                name: 'Quản lý kho'
            },
            {
                id: 7,
                code: 'nguoikiemhang',
                name: 'Người kiểm hàng'
            },
            {
                id: 9,
                code: 'nguoidonggoi',
                name: 'Người đóng gói'
            },
            {
                id: 12,
                code: 'CTVban',
                name: 'Cộng tác viên bán'
            },
            {
                id: 14,
                code: 'quanlyCTVban',
                name: 'Quản lý CTV bán'
            },
            {
                id: 16,
                code: 'CTVmua',
                name: 'Cộng tác viên mua'
            },
            {
                id: 18,
                code: 'quanlyCTVmua',
                name: 'Quản lý CTV mua'
            }
        ];
        this.sellStatus = [
            {
                id: 0,
                english: 'DRAFT',
                vietnamese: 'đơn nháp'
            },
            {
                id: 1,
                english: 'NEW',
                vietnamese: 'đơn mới'
            },
            {
                id: 2,
                english: 'PREPARED',
                vietnamese: 'đã nhặt đủ hàng để chờ đóng gói'
            },
            {
                id: 3,
                english: 'UNPREPARED',
                vietnamese: 'chưa nhặt được hàng vì lý do nào đó (ghi lý do vào noteWarehouse)'
            },
            {
                id: 4,
                english: 'PACKED',
                vietnamese: 'đã đóng gói'
            },
            {
                id: 5,
                english: 'SHIPPED',
                vietnamese: 'đã gửi đi'
            },
            {
                id: 6,
                english: 'DELIVERED',
                vietnamese: 'khách đã nhận'
            },
            {
                id: 7,
                english: 'RETURNING',
                vietnamese: 'đang hoàn hàng'
            },
            {
                id: 8,
                english: 'RETURNED',
                vietnamese: 'đã hoàn'
            },
            {
                id: 9,
                english: 'PAID',
                vietnamese: 'đã thanh toán'
            },
            {
                id: 10,
                english: 'REFUNDED',
                vietnamese: 'đã hoàn tiền'
            },
            {
                id: 11,
                english: 'CANCELED',
                vietnamese: 'đã hủy'
            }
        ];
    }
    getToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = '';
            // const check = await this.auth.waitSign();
            // if (check !== null) {
            yield this.afauth.auth.currentUser
                .getIdToken()
                .then(tokenId => (token = tokenId));
            // }
            return token;
        });
    }
    openSnackBar(message, duration) {
        this.snackBar.open(message, 'OK', {
            duration
        });
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");






































class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__["MatBadgeModule"]
        ],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__["MatBadgeModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__["MatBadgeModule"]], exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__["MatBadgeModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__["MatBadgeModule"]
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_34__["MatBadgeModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]
                ],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/auth-guard/es2015/index.js");
/* harmony import */ var _components_pages_scan_barcode_scan_barcode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/pages/scan-barcode/scan-barcode.component */ "./src/app/_components/pages/scan-barcode/scan-barcode.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/pages/login/login.component */ "./src/app/_components/pages/login/login.component.ts");
/* harmony import */ var _components_pages_auto_publish_auto_publish_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/pages/auto-publish/auto-publish.component */ "./src/app/_components/pages/auto-publish/auto-publish.component.ts");








const adminOnly = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["hasCustomClaim"])('admin');
const quanlyCTVmua = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["hasCustomClaim"])('quanlyCTVmua');
const quanlykho = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["hasCustomClaim"])('quanlykho');
const quanlyCTVban = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["hasCustomClaim"])('quanlyCTVban');
const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectUnauthorizedTo"])(['login']);
const redirectLoggedInToHome = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectLoggedInTo"])(['']);
const routes = [
    { path: '', redirectTo: 'scan', pathMatch: 'full' },
    {
        path: 'scan',
        component: _components_pages_scan_barcode_scan_barcode_component__WEBPACK_IMPORTED_MODULE_3__["ScanBarcodeComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'auto-publish',
        component: _components_pages_auto_publish_auto_publish_component__WEBPACK_IMPORTED_MODULE_5__["AutoPublishComponent"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'login', component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/header/header.component */ "./src/app/_components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'angular-gui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container-app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container-app[_ngcontent-%COMP%] {\n  height: 85vh;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2h1eW5obmhvbi9Eb2N1bWVudHMvTVktUFJPSkVDVFMvUFlUSE9OL2dvbWRvbi9hbmd1bGFyLWd1aS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYXBwIHtcbiAgaGVpZ2h0OiA4NXZoO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4iLCIuY29udGFpbmVyLWFwcCB7XG4gIGhlaWdodDogODV2aDtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: apiConfigFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiConfigFactory", function() { return apiConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/__ivy_ngcc__/auth-guard/es2015/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _components_pages_scan_barcode_scan_barcode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/pages/scan-barcode/scan-barcode.component */ "./src/app/_components/pages/scan-barcode/scan-barcode.component.ts");
/* harmony import */ var _components_pages_auto_publish_auto_publish_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/pages/auto-publish/auto-publish.component */ "./src/app/_components/pages/auto-publish/auto-publish.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/header/header.component */ "./src/app/_components/header/header.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _openapi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./openapi */ "./src/app/openapi/index.ts");
/* harmony import */ var _pipes_status__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_pipes/status */ "./src/app/_pipes/status.ts");
/* harmony import */ var _openapi_api_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./openapi/api.module */ "./src/app/openapi/api.module.ts");






















function apiConfigFactory() {
    const params = {
        // set configuration parameters here.
        basePath: 'https://us-central1-gomdon-74d1a.cloudfunctions.net/api',
    };
    return new _openapi__WEBPACK_IMPORTED_MODULE_17__["Configuration"](params);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]], imports: [[
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_15__["AngularMaterialModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _openapi__WEBPACK_IMPORTED_MODULE_17__["ApiModule"].forRoot(apiConfigFactory),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_pages_scan_barcode_scan_barcode_component__WEBPACK_IMPORTED_MODULE_12__["ScanBarcodeComponent"],
        _components_pages_auto_publish_auto_publish_component__WEBPACK_IMPORTED_MODULE_13__["AutoPublishComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _pipes_status__WEBPACK_IMPORTED_MODULE_18__["StatusPipe"]], imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_15__["AngularMaterialModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _openapi_api_module__WEBPACK_IMPORTED_MODULE_19__["ApiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_pages_scan_barcode_scan_barcode_component__WEBPACK_IMPORTED_MODULE_12__["ScanBarcodeComponent"],
                    _components_pages_auto_publish_auto_publish_component__WEBPACK_IMPORTED_MODULE_13__["AutoPublishComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _pipes_status__WEBPACK_IMPORTED_MODULE_18__["StatusPipe"]
                ],
                imports: [
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_15__["AngularMaterialModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                    _openapi__WEBPACK_IMPORTED_MODULE_17__["ApiModule"].forRoot(apiConfigFactory),
                ],
                providers: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/openapi/api.module.ts":
/*!***************************************!*\
  !*** ./src/app/openapi/api.module.ts ***!
  \***************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./src/app/openapi/configuration.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"], useFactory: configurationFactory }]
        };
    }
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], 8)); }, providers: [], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: []
            }]
    }], function () { return [{ type: ApiModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/openapi/api/api.ts":
/*!************************************!*\
  !*** ./src/app/openapi/api/api.ts ***!
  \************************************/
/*! exports provided: BuyService, BuyModelService, ExportService, ProductService, SellService, UserService, APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _buy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy.service */ "./src/app/openapi/api/buy.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuyService", function() { return _buy_service__WEBPACK_IMPORTED_MODULE_0__["BuyService"]; });

/* harmony import */ var _buyModel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyModel.service */ "./src/app/openapi/api/buyModel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuyModelService", function() { return _buyModel_service__WEBPACK_IMPORTED_MODULE_1__["BuyModelService"]; });

/* harmony import */ var _export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export.service */ "./src/app/openapi/api/export.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return _export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/openapi/api/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]; });

/* harmony import */ var _sell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sell.service */ "./src/app/openapi/api/sell.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellService", function() { return _sell_service__WEBPACK_IMPORTED_MODULE_4__["SellService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/openapi/api/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]; });













const APIS = [_buy_service__WEBPACK_IMPORTED_MODULE_0__["BuyService"], _buyModel_service__WEBPACK_IMPORTED_MODULE_1__["BuyModelService"], _export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"], _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _sell_service__WEBPACK_IMPORTED_MODULE_4__["SellService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]];


/***/ }),

/***/ "./src/app/openapi/api/buy.service.ts":
/*!********************************************!*\
  !*** ./src/app/openapi/api/buy.service.ts ***!
  \********************************************/
/*! exports provided: BuyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyService", function() { return BuyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/openapi/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/openapi/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/openapi/configuration.ts");
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class BuyService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://us-central1-gomdon-74d1a.cloudfunctions.net';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    createBuy(BuyCreate, observe = 'body', reportProgress = false, options) {
        if (BuyCreate === null || BuyCreate === undefined) {
            throw new Error('Required parameter BuyCreate was null or undefined when calling createBuy.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/buy`, BuyCreate, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getByIdsBuy(ids, fields, observe = 'body', reportProgress = false, options) {
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling getByIdsBuy.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: this.encoder });
        if (ids) {
            queryParameters = this.addToHttpParams(queryParameters, ids.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'ids');
        }
        if (fields) {
            queryParameters = this.addToHttpParams(queryParameters, fields.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'fields');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/buy/get-by-ids`, {
            params: queryParameters,
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getByStatusBuy(status, observe = 'body', reportProgress = false, options) {
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling getByStatusBuy.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: this.encoder });
        if (status) {
            queryParameters = this.addToHttpParams(queryParameters, status.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'status');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/buy/get-by-status`, {
            params: queryParameters,
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateBuy(BuyUpdate, observe = 'body', reportProgress = false, options) {
        if (BuyUpdate === null || BuyUpdate === undefined) {
            throw new Error('Required parameter BuyUpdate was null or undefined when calling updateBuy.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/buy`, BuyUpdate, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
BuyService.ɵfac = function BuyService_Factory(t) { return new (t || BuyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
BuyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuyService, factory: BuyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/openapi/api/buyModel.service.ts":
/*!*************************************************!*\
  !*** ./src/app/openapi/api/buyModel.service.ts ***!
  \*************************************************/
/*! exports provided: BuyModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyModelService", function() { return BuyModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/openapi/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/openapi/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/openapi/configuration.ts");
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class BuyModelService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://us-central1-gomdon-74d1a.cloudfunctions.net';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    getModelOfBuy(gomdon_buy_id, observe = 'body', reportProgress = false, options) {
        if (gomdon_buy_id === null || gomdon_buy_id === undefined) {
            throw new Error('Required parameter gomdon_buy_id was null or undefined when calling getModelOfBuy.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/buy-model/gomdon-buy-id/${encodeURIComponent(String(gomdon_buy_id))}`, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateBuyModel(BuyModelUpdate, observe = 'body', reportProgress = false, options) {
        if (BuyModelUpdate === null || BuyModelUpdate === undefined) {
            throw new Error('Required parameter BuyModelUpdate was null or undefined when calling updateBuyModel.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/buy-model`, BuyModelUpdate, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
BuyModelService.ɵfac = function BuyModelService_Factory(t) { return new (t || BuyModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
BuyModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BuyModelService, factory: BuyModelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/openapi/api/export.service.ts":
/*!***********************************************!*\
  !*** ./src/app/openapi/api/export.service.ts ***!
  \***********************************************/
/*! exports provided: ExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/openapi/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/openapi/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/openapi/configuration.ts");
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class ExportService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://us-central1-gomdon-74d1a.cloudfunctions.net';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    addSnapshotExport(image, export_id, observe = 'body', reportProgress = false, options) {
        if (image === null || image === undefined) {
            throw new Error('Required parameter image was null or undefined when calling addSnapshotExport.');
        }
        if (export_id === null || export_id === undefined) {
            throw new Error('Required parameter export_id was null or undefined when calling addSnapshotExport.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'multipart/form-data'
        ];
        const canConsumeForm = this.canConsumeForm(consumes);
        let formParams;
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        }
        else {
            formParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: this.encoder });
        }
        if (image !== undefined) {
            formParams = formParams.append('image', image) || formParams;
        }
        if (export_id !== undefined) {
            formParams = formParams.append('export_id', export_id) || formParams;
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/export/add-snapshot`, convertFormParamsToString ? formParams.toString() : formParams, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    createExport(request_body, observe = 'body', reportProgress = false, options) {
        if (request_body === null || request_body === undefined) {
            throw new Error('Required parameter request_body was null or undefined when calling createExport.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/export/create`, request_body, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getByIdExport(export_id, observe = 'body', reportProgress = false, options) {
        if (export_id === null || export_id === undefined) {
            throw new Error('Required parameter export_id was null or undefined when calling getByIdExport.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/export/${encodeURIComponent(String(export_id))}`, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getByStatus(status, observe = 'body', reportProgress = false, options) {
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling getByStatus.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: this.encoder });
        if (status) {
            status.forEach((element) => {
                queryParameters = this.addToHttpParams(queryParameters, element, 'status');
            });
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/export/get-by-status`, {
            params: queryParameters,
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateExport(InlineObject, observe = 'body', reportProgress = false, options) {
        if (InlineObject === null || InlineObject === undefined) {
            throw new Error('Required parameter InlineObject was null or undefined when calling updateExport.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/export/update`, InlineObject, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
ExportService.ɵfac = function ExportService_Factory(t) { return new (t || ExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
ExportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExportService, factory: ExportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/openapi/api/product.service.ts":
/*!************************************************!*\
  !*** ./src/app/openapi/api/product.service.ts ***!
  \************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/openapi/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/openapi/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/openapi/configuration.ts");
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class ProductService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://us-central1-gomdon-74d1a.cloudfunctions.net';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    createProduct(Product, observe = 'body', reportProgress = false, options) {
        if (Product === null || Product === undefined) {
            throw new Error('Required parameter Product was null or undefined when calling createProduct.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/product`, Product, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getAllProduct(observe = 'body', reportProgress = false, options) {
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/product/get-all`, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getByIds(linked_product_ids, observe = 'body', reportProgress = false, options) {
        if (linked_product_ids === null || linked_product_ids === undefined) {
            throw new Error('Required parameter linked_product_ids was null or undefined when calling getByIds.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: this.encoder });
        if (linked_product_ids) {
            queryParameters = this.addToHttpParams(queryParameters, linked_product_ids.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'linked_product_ids');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/product/get-by-ids`, {
            params: queryParameters,
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateProduct(ProductUpdate, observe = 'body', reportProgress = false, options) {
        if (ProductUpdate === null || ProductUpdate === undefined) {
            throw new Error('Required parameter ProductUpdate was null or undefined when calling updateProduct.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/product`, ProductUpdate, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/openapi/api/sell.service.ts":
/*!*********************************************!*\
  !*** ./src/app/openapi/api/sell.service.ts ***!
  \*********************************************/
/*! exports provided: SellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellService", function() { return SellService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/openapi/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/openapi/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/openapi/configuration.ts");
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class SellService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://us-central1-gomdon-74d1a.cloudfunctions.net';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    createSell(Sell, observe = 'body', reportProgress = false, options) {
        if (Sell === null || Sell === undefined) {
            throw new Error('Required parameter Sell was null or undefined when calling createSell.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/sell/create`, Sell, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getByIdsSell(ids, fields, observe = 'body', reportProgress = false, options) {
        if (ids === null || ids === undefined) {
            throw new Error('Required parameter ids was null or undefined when calling getByIdsSell.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: this.encoder });
        if (ids) {
            queryParameters = this.addToHttpParams(queryParameters, ids.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'ids');
        }
        if (fields) {
            queryParameters = this.addToHttpParams(queryParameters, fields.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'fields');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/sell/get-by-ids`, {
            params: queryParameters,
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getByStatus(status, shop_id, field, observe = 'body', reportProgress = false, options) {
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling getByStatus.');
        }
        if (shop_id === null || shop_id === undefined) {
            throw new Error('Required parameter shop_id was null or undefined when calling getByStatus.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: this.encoder });
        if (status) {
            queryParameters = this.addToHttpParams(queryParameters, status.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'status');
        }
        if (shop_id !== undefined && shop_id !== null) {
            queryParameters = this.addToHttpParams(queryParameters, shop_id, 'shop_id');
        }
        if (field) {
            queryParameters = this.addToHttpParams(queryParameters, field.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']), 'field');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/sell/get-by-status`, {
            params: queryParameters,
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    paymentCheckSell(SellPaidCheck, observe = 'body', reportProgress = false, options) {
        if (SellPaidCheck === null || SellPaidCheck === undefined) {
            throw new Error('Required parameter SellPaidCheck was null or undefined when calling paymentCheckSell.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/sell/reconciliation`, SellPaidCheck, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateSell(UpdateSell, observe = 'body', reportProgress = false, options) {
        if (UpdateSell === null || UpdateSell === undefined) {
            throw new Error('Required parameter UpdateSell was null or undefined when calling updateSell.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/sell/update`, UpdateSell, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
SellService.ɵfac = function SellService_Factory(t) { return new (t || SellService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
SellService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SellService, factory: SellService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/openapi/api/user.service.ts":
/*!*********************************************!*\
  !*** ./src/app/openapi/api/user.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/openapi/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/openapi/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/openapi/configuration.ts");
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */








class UserService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://us-central1-gomdon-74d1a.cloudfunctions.net';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpParameterCodec"]();
    }
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    addCTV(InlineObject3, observe = 'body', reportProgress = false, options) {
        if (InlineObject3 === null || InlineObject3 === undefined) {
            throw new Error('Required parameter InlineObject3 was null or undefined when calling addCTV.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/user/add-ctv`, InlineObject3, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    createUser(User, observe = 'body', reportProgress = false, options) {
        if (User === null || User === undefined) {
            throw new Error('Required parameter User was null or undefined when calling createUser.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.post(`${this.configuration.basePath}/user/create`, User, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    deleteCTV(uid, observe = 'body', reportProgress = false, options) {
        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling deleteCTV.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.delete(`${this.configuration.basePath}/user/delete-ctv/${encodeURIComponent(String(uid))}`, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getAllUser(observe = 'body', reportProgress = false, options) {
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/user/get-all`, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getCTVs(observe = 'body', reportProgress = false, options) {
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.get(`${this.configuration.basePath}/user/get-ctv`, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    updateRole(InlineObject2, observe = 'body', reportProgress = false, options) {
        if (InlineObject2 === null || InlineObject2 === undefined) {
            throw new Error('Required parameter InlineObject2 was null or undefined when calling updateRole.');
        }
        let headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        let httpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        let responseType = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }
        return this.httpClient.put(`${this.configuration.basePath}/user/update-role`, InlineObject2, {
            responseType: responseType,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/openapi/configuration.ts":
/*!******************************************!*\
  !*** ./src/app/openapi/configuration.ts ***!
  \******************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
        this.encoder = configurationParameters.encoder;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length === 0) {
            return undefined;
        }
        const type = contentTypes.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length === 0) {
            return undefined;
        }
        const type = accepts.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}


/***/ }),

/***/ "./src/app/openapi/encoder.ts":
/*!************************************!*\
  !*** ./src/app/openapi/encoder.ts ***!
  \************************************/
/*! exports provided: CustomHttpParameterCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpParameterCodec", function() { return CustomHttpParameterCodec; });
/**
 * Custom HttpParameterCodec
 * Workaround for https://github.com/angular/angular/issues/18261
 */
class CustomHttpParameterCodec {
    encodeKey(k) {
        return encodeURIComponent(k);
    }
    encodeValue(v) {
        return encodeURIComponent(v);
    }
    decodeKey(k) {
        return decodeURIComponent(k);
    }
    decodeValue(v) {
        return decodeURIComponent(v);
    }
}


/***/ }),

/***/ "./src/app/openapi/index.ts":
/*!**********************************!*\
  !*** ./src/app/openapi/index.ts ***!
  \**********************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule, BuyService, BuyModelService, ExportService, ProductService, SellService, UserService, APIS, BuyModel, ExportUpdateData, InlineObject2, Responses, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/app/openapi/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuyService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["BuyService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuyModelService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["BuyModelService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ExportService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ProductService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["SellService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "./src/app/openapi/model/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuyModel", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["BuyModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportUpdateData", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["ExportUpdateData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineObject2", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["InlineObject2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Responses", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Responses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./src/app/openapi/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/app/openapi/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ "./src/app/openapi/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"]; });








/***/ }),

/***/ "./src/app/openapi/model/buyModel.ts":
/*!*******************************************!*\
  !*** ./src/app/openapi/model/buyModel.ts ***!
  \*******************************************/
/*! exports provided: BuyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyModel", function() { return BuyModel; });
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var BuyModel;
(function (BuyModel) {
    BuyModel.GomdonStatusEnum = {
        NUMBER_1: 1,
        NUMBER_2: 2,
        NUMBER_3: 3
    };
})(BuyModel || (BuyModel = {}));


/***/ }),

/***/ "./src/app/openapi/model/exportUpdateData.ts":
/*!***************************************************!*\
  !*** ./src/app/openapi/model/exportUpdateData.ts ***!
  \***************************************************/
/*! exports provided: ExportUpdateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportUpdateData", function() { return ExportUpdateData; });
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var ExportUpdateData;
(function (ExportUpdateData) {
    ExportUpdateData.GomdonStatusEnum = {
        NUMBER_1: 1,
        NUMBER_2: 2,
        NUMBER_3: 3,
        NUMBER_4: 4
    };
})(ExportUpdateData || (ExportUpdateData = {}));


/***/ }),

/***/ "./src/app/openapi/model/inlineObject2.ts":
/*!************************************************!*\
  !*** ./src/app/openapi/model/inlineObject2.ts ***!
  \************************************************/
/*! exports provided: InlineObject2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineObject2", function() { return InlineObject2; });
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var InlineObject2;
(function (InlineObject2) {
    InlineObject2.RoleEnum = {
        Admin: 'admin',
        Quanlykho: 'quanlykho',
        Kiemhang: 'kiemhang',
        Donghang: 'donghang',
        QuanlyCTVban: 'quanlyCTVban',
        QuanlyCTVmua: 'quanlyCTVmua',
        Nguoimoi: 'nguoimoi'
    };
})(InlineObject2 || (InlineObject2 = {}));


/***/ }),

/***/ "./src/app/openapi/model/models.ts":
/*!*****************************************!*\
  !*** ./src/app/openapi/model/models.ts ***!
  \*****************************************/
/*! exports provided: BuyModel, ExportUpdateData, InlineObject2, Responses, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buyModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyModel */ "./src/app/openapi/model/buyModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuyModel", function() { return _buyModel__WEBPACK_IMPORTED_MODULE_0__["BuyModel"]; });

/* harmony import */ var _exportUpdateData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exportUpdateData */ "./src/app/openapi/model/exportUpdateData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportUpdateData", function() { return _exportUpdateData__WEBPACK_IMPORTED_MODULE_1__["ExportUpdateData"]; });

/* harmony import */ var _inlineObject2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inlineObject2 */ "./src/app/openapi/model/inlineObject2.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineObject2", function() { return _inlineObject2__WEBPACK_IMPORTED_MODULE_2__["InlineObject2"]; });

/* harmony import */ var _responses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responses */ "./src/app/openapi/model/responses.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Responses", function() { return _responses__WEBPACK_IMPORTED_MODULE_3__["Responses"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/openapi/model/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_4__["User"]; });








/***/ }),

/***/ "./src/app/openapi/model/responses.ts":
/*!********************************************!*\
  !*** ./src/app/openapi/model/responses.ts ***!
  \********************************************/
/*! exports provided: Responses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Responses", function() { return Responses; });
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var Responses;
(function (Responses) {
    Responses.CodeEnum = {
        Success: 'success',
        Error: 'error'
    };
})(Responses || (Responses = {}));


/***/ }),

/***/ "./src/app/openapi/model/user.ts":
/*!***************************************!*\
  !*** ./src/app/openapi/model/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * Gom Don API
 * Gom Don API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var User;
(function (User) {
    User.RoleEnum = {
        Admin: 'admin',
        Quanlykho: 'quanlykho',
        Kiemhang: 'kiemhang',
        Donghang: 'donghang',
        CTVban: 'CTVban',
        QuanlyCTVban: 'quanlyCTVban',
        CTVmua: 'CTVmua',
        QuanlyCTVmua: 'quanlyCTVmua',
        Nguoimoi: 'nguoimoi'
    };
})(User || (User = {}));


/***/ }),

/***/ "./src/app/openapi/variables.ts":
/*!**************************************!*\
  !*** ./src/app/openapi/variables.ts ***!
  \**************************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyCyJuvREmfO8uzrAncN67vdh5DWZRX04EI',
        authDomain: 'gomdon-74d1a.firebaseapp.com',
        databaseURL: 'https://gomdon-74d1a.firebaseio.com',
        projectId: 'gomdon-74d1a',
        storageBucket: 'gomdon-74d1a.appspot.com',
        messagingSenderId: '190650726823',
        appId: '1:190650726823:web:bcf775286ba97206d25e82',
        measurementId: 'G-BRB0GB8CP6'
    }
};


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
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCyJuvREmfO8uzrAncN67vdh5DWZRX04EI',
        authDomain: 'gomdon-74d1a.firebaseapp.com',
        databaseURL: 'https://gomdon-74d1a.firebaseio.com',
        projectId: 'gomdon-74d1a',
        storageBucket: 'gomdon-74d1a.appspot.com',
        messagingSenderId: '190650726823',
        appId: '1:190650726823:web:bcf775286ba97206d25e82',
        measurementId: 'G-BRB0GB8CP6'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/huynhnhon/Documents/MY-PROJECTS/PYTHON/gomdon/angular-gui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map