function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news/news-list/news-list.component */
    "./src/app/news/news-list/news-list.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/news/news-detail/news-detail.component */
    "./src/app/news/news-detail/news-detail.component.ts");
    /* harmony import */


    var _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/news/create-news/create-news.component */
    "./src/app/news/create-news/create-news.component.ts");
    /* harmony import */


    var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/auth/login/register/register.component */
    "./src/app/auth/login/register/register.component.ts");
    /* harmony import */


    var _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/auth/not-authorized/not-authorized.component */
    "./src/app/auth/not-authorized/not-authorized.component.ts");
    /* harmony import */


    var _app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/auth/auth-guard.service */
    "./src/app/auth/auth-guard.service.ts");
    /* harmony import */


    var _app_auth_role_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/auth/role.enum */
    "./src/app/auth/role.enum.ts");
    /* harmony import */


    var _app_auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/auth/login/phone-login/phone-login.component */
    "./src/app/auth/login/phone-login/phone-login.component.ts");

    var routes = [{
      path: 'news',
      component: _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__["NewsListComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      permitAll: true
    }, {
      path: 'login',
      component: _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      permitAll: true
    }, {
      path: 'phone-login',
      component: _app_auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_11__["PhoneLoginComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      permitAll: true
    }, {
      path: 'register',
      component: _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      permitAll: true
    }, {
      path: 'create',
      component: _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_5__["CreateNewsComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      accessAllowedTo: _app_auth_role_enum__WEBPACK_IMPORTED_MODULE_10__["Role"].AUTHOR
    }, {
      path: 'create/:id',
      component: _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_5__["CreateNewsComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      accessAllowedTo: _app_auth_role_enum__WEBPACK_IMPORTED_MODULE_10__["Role"].AUTHOR
    }, {
      path: 'news/:id',
      component: _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_4__["NewsDetailComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      permitAll: true
    }, {
      path: 'unauthorized',
      component: _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_8__["NotAuthorizedComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      permitAll: true
    }, {
      path: '',
      redirectTo: '/news',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
      canActivate: [_app_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
      permitAll: true
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_app_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/news/news-list/news-list.component */
    "./src/app/news/news-list/news-list.component.ts");
    /* harmony import */


    var _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-file-drop */
    "./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _app_auth_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/auth/is-creator-or-admin.directive */
    "./src/app/auth/is-creator-or-admin.directive.ts");
    /* harmony import */


    var _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/news/news-detail/news-detail.component */
    "./src/app/news/news-detail/news-detail.component.ts");
    /* harmony import */


    var _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/news/create-news/create-news.component */
    "./src/app/news/create-news/create-news.component.ts");
    /* harmony import */


    var _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @app/images-carousel/images-carousel.component */
    "./src/app/images-carousel/images-carousel.component.ts");
    /* harmony import */


    var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @app/auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/auth/login/register/register.component */
    "./src/app/auth/login/register/register.component.ts");
    /* harmony import */


    var _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @app/auth/not-authorized/not-authorized.component */
    "./src/app/auth/not-authorized/not-authorized.component.ts");
    /* harmony import */


    var _auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./auth/login/phone-login/phone-login.component */
    "./src/app/auth/login/phone-login/phone-login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _app_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__["NewsListComponent"], _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_16__["NewsDetailComponent"], _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_17__["CreateNewsComponent"], _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_18__["ImagesCarouselComponent"], _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_21__["NotAuthorizedComponent"], _app_auth_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_15__["IsCreatorOrAdminDirective"], _auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_22__["PhoneLoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _app_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _app_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__["NewsListComponent"], _app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], _app_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_16__["NewsDetailComponent"], _app_news_create_news_create_news_component__WEBPACK_IMPORTED_MODULE_17__["CreateNewsComponent"], _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_18__["ImagesCarouselComponent"], _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _app_auth_login_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _app_auth_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_21__["NotAuthorizedComponent"], _app_auth_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_15__["IsCreatorOrAdminDirective"], _auth_login_phone_login_phone_login_component__WEBPACK_IMPORTED_MODULE_22__["PhoneLoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]],
          bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-guard.service.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/auth-guard.service.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/auth/firebase-auth.service */
    "./src/app/auth/firebase-auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, firebaseAuth) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.accessDeniedUrlTree = router.parseUrl('/unauthorized');
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this = this;

          var routeConfig = route.routeConfig;

          if (routeConfig.permitAll) {
            return true;
          }

          if (routeConfig.accessAllowedTo) {
            return this.firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              return user && user.roles[routeConfig.accessAllowedTo] ? true : _this.accessDeniedUrlTree;
            }));
          }

          return this.accessDeniedUrlTree;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/firebase-auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/firebase-auth.service.ts ***!
    \***********************************************/

  /*! exports provided: FirebaseAuthService */

  /***/
  function srcAppAuthFirebaseAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function () {
      return FirebaseAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_auth_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/auth/user */
    "./src/app/auth/user.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");

    var FirebaseAuthService =
    /*#__PURE__*/
    function () {
      function FirebaseAuthService(afAuth, firestoreService) {
        var _this2 = this;

        _classCallCheck(this, FirebaseAuthService);

        this.afAuth = afAuth;
        this.firestoreService = firestoreService;
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.afAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
          return user ? _this2.firestoreService.getUser(user.uid) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (user) {
          return _this2._user.next(user);
        });
      }

      _createClass(FirebaseAuthService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "createUser",
        value: function createUser(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var credentials;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

                  case 2:
                    credentials = _context.sent;
                    this.createUserDoc(credentials.user);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loginWithEmailAndPassword",
        value: function loginWithEmailAndPassword(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var credentials;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.auth.signInWithEmailAndPassword(email, password);

                  case 2:
                    credentials = _context2.sent;
                    this.createUserDoc(credentials.user);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loginWithGoogle",
        value: function loginWithGoogle() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var credentials;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());

                  case 2:
                    credentials = _context3.sent;
                    this.createUserDoc(credentials.user);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "loginWithFacebook",
        value: function loginWithFacebook() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var credentials;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider());

                  case 2:
                    credentials = _context4.sent;
                    this.createUserDoc(credentials.user);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "loginWithGithub",
        value: function loginWithGithub() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var credentials;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GithubAuthProvider());

                  case 2:
                    credentials = _context5.sent;
                    this.createUserDoc(credentials.user);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loginWithCredentials",
        value: function loginWithCredentials(credential) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var credentials;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.afAuth.auth.signInWithCredential(credential);

                  case 2:
                    credentials = _context6.sent;
                    _context6.next = 5;
                    return this.createUserDoc(credentials.user);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "loginWithPhoneNumber",
        value: function loginWithPhoneNumber(number, appVerifier) {
          return this.afAuth.auth.signInWithPhoneNumber(number, appVerifier);
        }
      }, {
        key: "getRecaptchaVerifier",
        value: function getRecaptchaVerifier(containerId) {
          return new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].RecaptchaVerifier(containerId);
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.afAuth.auth.signOut();

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "createUserDoc",
        value: function createUserDoc(authData) {
          var _this3 = this;

          var userData = Object.assign({}, new _app_auth_user__WEBPACK_IMPORTED_MODULE_4__["User"](authData));
          var doc = this.firestoreService.getUser(authData.uid);
          doc.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (user) {
            if (!user) {
              _this3.firestoreService.createUser(authData.uid, userData);
            }
          });
        }
      }, {
        key: "user",
        get: function get() {
          return this._user;
        }
      }]);

      return FirebaseAuthService;
    }();

    FirebaseAuthService.ɵfac = function FirebaseAuthService_Factory(t) {
      return new (t || FirebaseAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]));
    };

    FirebaseAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FirebaseAuthService,
      factory: FirebaseAuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
        }, {
          type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/is-creator-or-admin.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/auth/is-creator-or-admin.directive.ts ***!
    \*******************************************************/

  /*! exports provided: IsCreatorOrAdminDirective */

  /***/
  function srcAppAuthIsCreatorOrAdminDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsCreatorOrAdminDirective", function () {
      return IsCreatorOrAdminDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/auth/firebase-auth.service */
    "./src/app/auth/firebase-auth.service.ts");

    var IsCreatorOrAdminDirective =
    /*#__PURE__*/
    function () {
      function IsCreatorOrAdminDirective(viewContainerRef, templateRef, firebaseAuth) {
        _classCallCheck(this, IsCreatorOrAdminDirective);

        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.firebaseAuth = firebaseAuth;
        this.isVisible = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(IsCreatorOrAdminDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateTemplateState();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "updateTemplateState",
        value: function updateTemplateState() {
          var _this4 = this;

          this.checkPermissions().subscribe(function (isPermitted) {
            if (isPermitted && !_this4.isVisible) {
              _this4.isVisible = true;

              _this4.viewContainerRef.createEmbeddedView(_this4.templateRef);
            } else if (!isPermitted) {
              _this4.isVisible = false;

              _this4.viewContainerRef.clear();
            }
          });
        }
      }, {
        key: "checkPermissions",
        value: function checkPermissions() {
          var _this5 = this;

          return this.firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            return user && (user.roles.author && _this5.appIsCreatorOrAdmin === user.id || user.roles.admin);
          }));
        }
      }]);

      return IsCreatorOrAdminDirective;
    }();

    IsCreatorOrAdminDirective.ɵfac = function IsCreatorOrAdminDirective_Factory(t) {
      return new (t || IsCreatorOrAdminDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]));
    };

    IsCreatorOrAdminDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IsCreatorOrAdminDirective,
      selectors: [["", "appIsCreatorOrAdmin", ""]],
      inputs: {
        appIsCreatorOrAdmin: "appIsCreatorOrAdmin"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsCreatorOrAdminDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appIsCreatorOrAdmin]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]
        }];
      }, {
        appIsCreatorOrAdmin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/auth/firebase-auth.service */
    "./src/app/auth/firebase-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, firebaseAuth, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildForm();
        }
      }, {
        key: "signInWithEmailAndPassword",
        value: function signInWithEmailAndPassword() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.firebaseAuth.loginWithEmailAndPassword(this.email.value, this.password.value);

                  case 2:
                    this.router.navigate(['/news']);

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "loginWithGoogle",
        value: function loginWithGoogle() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.firebaseAuth.loginWithGoogle();

                  case 2:
                    this.router.navigate(['/news']);

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "loginWithFacebook",
        value: function loginWithFacebook() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.firebaseAuth.loginWithFacebook();

                  case 2:
                    this.router.navigate(['/news']);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "loginWithGithub",
        value: function loginWithGithub() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.firebaseAuth.loginWithGithub();

                  case 2:
                    this.router.navigate(['/news']);

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 34,
      vars: 2,
      consts: [[1, "container", "mb-5"], [1, "row", "mb-4"], [1, "col-2"], [1, "col-8"], [1, "w-50", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "d-flex", "justify-content-between"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "routerLink", "/register", 1, "btn", "btn-warning"], [1, "col-4", "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "routerLink", "/phone-login", 1, "btn", "btn-primary"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener($event) {
            return ctx.signInWithEmailAndPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener($event) {
            return ctx.loginWithGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Login with Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener($event) {
            return ctx.loginWithFacebook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Login with Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener($event) {
            return ctx.loginWithGithub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Login with Github ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Login with phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/phone-login/phone-login.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/login/phone-login/phone-login.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PhoneLoginComponent */

  /***/
  function srcAppAuthLoginPhoneLoginPhoneLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneLoginComponent", function () {
      return PhoneLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/auth/login/phone-login/window.service */
    "./src/app/auth/login/phone-login/window.service.ts");
    /* harmony import */


    var _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/auth/firebase-auth.service */
    "./src/app/auth/firebase-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        disabled: a0
      };
    };

    var PhoneLoginComponent =
    /*#__PURE__*/
    function () {
      function PhoneLoginComponent(win, firebaseAuth, router, fb) {
        _classCallCheck(this, PhoneLoginComponent);

        this.win = win;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.fb = fb;
      }

      _createClass(PhoneLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupRecaptchaVerifier();
          this.buildForm();
        }
      }, {
        key: "sendLoginCode",
        value: function sendLoginCode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var phoneNumber;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    phoneNumber = this.obtainPhoneNumber();
                    _context12.next = 3;
                    return this.firebaseAuth.loginWithPhoneNumber(phoneNumber, this.windowRef.recaptchaVerifier);

                  case 3:
                    this.confirmationResult = _context12.sent;

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "verifyLoginCode",
        value: function verifyLoginCode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var credential;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    credential = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].PhoneAuthProvider.credential(this.confirmationResult.verificationId, this.verificationCodeControl.value);
                    _context13.next = 3;
                    return this.firebaseAuth.loginWithCredentials(credential);

                  case 3:
                    this.router.navigate(['/news']);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "setupRecaptchaVerifier",
        value: function setupRecaptchaVerifier() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.windowRef = this.win.windowRef;
                    this.windowRef.recaptchaVerifier = this.firebaseAuth.getRecaptchaVerifier('recaptcha-container');
                    _context14.next = 4;
                    return this.windowRef.recaptchaVerifier.render();

                  case 4:
                    this.windowRef.recaptchaWidgetId = _context14.sent;

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.phoneGroup = this.fb.group({
            prefix: ['+48', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9+]*')]],
            first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            second: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]],
            third: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]]
          });
          this.verificationCodeControl = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6)]);
        }
      }, {
        key: "obtainPhoneNumber",
        value: function obtainPhoneNumber() {
          return this.phoneGroup.get('prefix').value + this.phoneGroup.get('first').value + this.phoneGroup.get('second').value + this.phoneGroup.get('third').value;
        }
      }]);

      return PhoneLoginComponent;
    }();

    PhoneLoginComponent.ɵfac = function PhoneLoginComponent_Factory(t) {
      return new (t || PhoneLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    PhoneLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PhoneLoginComponent,
      selectors: [["app-phone-login"]],
      decls: 36,
      vars: 8,
      consts: [[1, "container", "mb-5"], [1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "prefix", "placeholder", "+48", 1, "form-control"], [1, "mx-3", "d-inline"], ["type", "text", "formControlName", "first", "placeholder", "123", 1, "form-control"], ["type", "text", "formControlName", "second", "placeholder", "456", 1, "form-control"], ["type", "text", "formControlName", "third", "placeholder", "789", 1, "form-control"], ["id", "recaptcha-container"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "ngClass"], ["type", "text", "placeholder", "123456", 1, "ml-3", "mt-2", "form-control", 3, "formControl"], [1, "btn", "btn-primary", 3, "disabled", "click"]],
      template: function PhoneLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign In with Your Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PhoneLoginComponent_Template_form_ngSubmit_3_listener($event) {
            return ctx.sendLoginCode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Send SMS code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Enter your Verification Code Here: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PhoneLoginComponent_Template_button_click_34_listener($event) {
            return ctx.verifyLoginCode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.phoneGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.phoneGroup.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx.confirmationResult));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.verificationCodeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !ctx.confirmationResult ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.verificationCodeControl.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]],
      styles: [".disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9waG9uZS1sb2dpbi9DOlxcVXNlcnNcXEpha3ViXFxEZXNrdG9wXFxOZXdzIGJ1bGxldGluL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxccGhvbmUtbG9naW5cXHBob25lLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL3Bob25lLWxvZ2luL3Bob25lLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vcGhvbmUtbG9naW4vcGhvbmUtbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIiwiLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhoneLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-phone-login',
          templateUrl: './phone-login.component.html',
          styleUrls: ['./phone-login.component.scss']
        }]
      }], function () {
        return [{
          type: _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"]
        }, {
          type: _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/phone-login/window.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auth/login/phone-login/window.service.ts ***!
    \**********************************************************/

  /*! exports provided: WindowService */

  /***/
  function srcAppAuthLoginPhoneLoginWindowServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowService", function () {
      return WindowService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WindowService =
    /*#__PURE__*/
    function () {
      function WindowService() {
        _classCallCheck(this, WindowService);
      }

      _createClass(WindowService, [{
        key: "windowRef",
        get: function get() {
          return window;
        }
      }]);

      return WindowService;
    }();

    WindowService.ɵfac = function WindowService_Factory(t) {
      return new (t || WindowService)();
    };

    WindowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WindowService,
      factory: WindowService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/register/password.validator.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/login/register/password.validator.ts ***!
    \***********************************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppAuthLoginRegisterPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });

    var PasswordValidator =
    /*#__PURE__*/
    function () {
      function PasswordValidator() {
        _classCallCheck(this, PasswordValidator);
      }

      _createClass(PasswordValidator, null, [{
        key: "matchPasswords",
        value: function matchPasswords(control) {
          if (control.get('password').value === control.get('repeatedPassword').value) {
            return null;
          } else {
            control.get('repeatedPassword').setErrors({
              MatchPassword: true
            });
          }
        }
      }]);

      return PasswordValidator;
    }();
    /***/

  },

  /***/
  "./src/app/auth/login/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/login/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthLoginRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_auth_login_register_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/auth/login/register/password.validator */
    "./src/app/auth/login/register/password.validator.ts");
    /* harmony import */


    var _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/auth/firebase-auth.service */
    "./src/app/auth/firebase-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(fb, firebaseAuth, router) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildForm();
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            repeatedPassword: ['']
          }, {
            validator: _app_auth_login_register_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].matchPasswords
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.firebaseAuth.createUser(this.email.value, this.password.value);

                  case 2:
                    this.router.navigate(['/news']);

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "email",
        get: function get() {
          return this.registerForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.registerForm.get('password');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 21,
      vars: 2,
      consts: [[1, "container", "mb-5"], [1, "row", "mb-4"], [1, "col-2"], [1, "col-8"], [1, "w-50", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "repeatedPassword", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Repeat password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/not-authorized/not-authorized.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/not-authorized/not-authorized.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NotAuthorizedComponent */

  /***/
  function srcAppAuthNotAuthorizedNotAuthorizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function () {
      return NotAuthorizedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotAuthorizedComponent =
    /*#__PURE__*/
    function () {
      function NotAuthorizedComponent() {
        _classCallCheck(this, NotAuthorizedComponent);
      }

      _createClass(NotAuthorizedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotAuthorizedComponent;
    }();

    NotAuthorizedComponent.ɵfac = function NotAuthorizedComponent_Factory(t) {
      return new (t || NotAuthorizedComponent)();
    };

    NotAuthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotAuthorizedComponent,
      selectors: [["app-not-authorized"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function NotAuthorizedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unauthorized!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbm90LWF1dGhvcml6ZWQvbm90LWF1dGhvcml6ZWQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAuthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-authorized',
          templateUrl: './not-authorized.component.html',
          styleUrls: ['./not-authorized.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/role.enum.ts":
  /*!***********************************!*\
    !*** ./src/app/auth/role.enum.ts ***!
    \***********************************/

  /*! exports provided: Role */

  /***/
  function srcAppAuthRoleEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });

    var Role;

    (function (Role) {
      Role["AUTHOR"] = "author";
      Role["ADMIN"] = "admin";
    })(Role || (Role = {}));
    /***/

  },

  /***/
  "./src/app/auth/user.ts":
  /*!******************************!*\
    !*** ./src/app/auth/user.ts ***!
    \******************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(authData) {
      _classCallCheck(this, User);

      this.id = authData.uid;
      this.email = authData.email;
      this.name = authData.displayName;
      this.roles = {
        author: true
      };
    };
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/auth/firebase-auth.service */
    "./src/app/auth/firebase-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        userId: a0
      };
    };

    function HeaderComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_10_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r26 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, user_r26.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r26.name ? user_r26.name : user_r26.email ? user_r26.email : user_r26.id, " ");
      }
    }

    function HeaderComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(firebaseAuth, router) {
        _classCallCheck(this, HeaderComponent);

        this.firebaseAuth = firebaseAuth;
        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.firebaseAuth.logout();

                  case 2:
                    this.router.navigate(['/news']);

                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 14,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "mb-4"], ["routerLink", "/news", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/create", 1, "nav-link"], ["class", "d-flex", 4, "ngIf", "ngIfElse"], ["login", ""], [1, "d-flex"], ["routerLink", "/news", 1, "btn", "btn-link", 3, "queryParams"], [1, "btn", "btn-danger", "ml-4", 3, "click"], ["routerLink", "login", 1, "btn", "btn-success"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "News bulletin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create news");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 5, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 2, ctx.firebaseAuth.user))("ngIfElse", _r24);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/images-carousel/images-carousel.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/images-carousel/images-carousel.component.ts ***!
    \**************************************************************/

  /*! exports provided: ImagesCarouselComponent */

  /***/
  function srcAppImagesCarouselImagesCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesCarouselComponent", function () {
      return ImagesCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function ImagesCarouselComponent_ngb_carousel_0_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ImagesCarouselComponent_ngb_carousel_0_1_ng_template_0_Template_div_dblclick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r34.removeUrl(i_r32);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var url_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", url_r31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ImagesCarouselComponent_ngb_carousel_0_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImagesCarouselComponent_ngb_carousel_0_1_ng_template_0_Template, 2, 1, "ng-template", 3);
      }
    }

    function ImagesCarouselComponent_ngb_carousel_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesCarouselComponent_ngb_carousel_0_1_Template, 1, 0, undefined, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.imagesUrls);
      }
    }

    var ImagesCarouselComponent =
    /*#__PURE__*/
    function () {
      function ImagesCarouselComponent() {
        _classCallCheck(this, ImagesCarouselComponent);

        this.imageRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ImagesCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeUrl",
        value: function removeUrl(i) {
          this.imageRemoved.emit(i);
        }
      }]);

      return ImagesCarouselComponent;
    }();

    ImagesCarouselComponent.ɵfac = function ImagesCarouselComponent_Factory(t) {
      return new (t || ImagesCarouselComponent)();
    };

    ImagesCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImagesCarouselComponent,
      selectors: [["app-images-carousel"]],
      inputs: {
        imagesUrls: "imagesUrls"
      },
      outputs: {
        imageRemoved: "imageRemoved"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "dblclick"], ["alt", "one of images", 3, "src"]],
      template: function ImagesCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImagesCarouselComponent_ngb_carousel_0_Template, 2, 3, "ngb-carousel", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagesUrls == null ? null : ctx.imagesUrls.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy1jYXJvdXNlbC9pbWFnZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-images-carousel',
          templateUrl: './images-carousel.component.html',
          styleUrls: ['./images-carousel.component.scss']
        }]
      }], function () {
        return [];
      }, {
        imagesUrls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageRemoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/news/create-news/create-news.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/news/create-news/create-news.component.ts ***!
    \***********************************************************/

  /*! exports provided: CreateNewsComponent */

  /***/
  function srcAppNewsCreateNewsCreateNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNewsComponent", function () {
      return CreateNewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/auth/firebase-auth.service */
    "./src/app/auth/firebase-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-file-drop */
    "./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/images-carousel/images-carousel.component */
    "./src/app/images-carousel/images-carousel.component.ts");

    function CreateNewsComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateNewsComponent_ng_template_17_Template_span_click_0_listener($event) {
          var openFileSelector_r18 = ctx.openFileSelector;
          return openFileSelector_r18();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Drop files here");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CreateNewsComponent_span_20_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CreateNewsComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateNewsComponent_span_20_span_2_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var format_r20 = ctx.$implicit;
        var i_r21 = ctx.index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", format_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r21 < ctx_r17.allowedFormats.length - 1);
      }
    }

    var CreateNewsComponent =
    /*#__PURE__*/
    function () {
      function CreateNewsComponent(fb, firestoreService, firebaseAuth, router, route) {
        _classCallCheck(this, CreateNewsComponent);

        this.fb = fb;
        this.firestoreService = firestoreService;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.route = route;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allowedFormats = ['.jpg', '.png', '.jpeg'];
        this.imagesUrls = [];
        this.imagesDuringUpload = 0;
      }

      _createClass(CreateNewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildForm();
          this.loadNewsData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next();
          this.unsubscribe$.complete();
        }
      }, {
        key: "dropped",
        value: function dropped(files) {
          var _this6 = this;

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var droppedFile = _step.value;

              if (_this6.isFileAllowed(droppedFile)) {
                ++_this6.imagesDuringUpload;
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                  return _this6.firestoreService.uploadFile(droppedFile.relativePath, file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                    return --_this6.imagesDuringUpload;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this6.unsubscribe$)).subscribe(function () {
                    return undefined;
                  }, function () {
                    return undefined;
                  }, function () {
                    return _this6.firestoreService.getFileUrl(droppedFile.relativePath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this6.unsubscribe$)).subscribe(function (url) {
                      return _this6.imagesUrls.push(url);
                    });
                  });
                });
              }
            };

            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "isFileAllowed",
        value: function isFileAllowed(droppedFile) {
          return droppedFile.fileEntry.isFile && this.allowedFormats.some(function (format) {
            return droppedFile.relativePath.toLowerCase().endsWith(format);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var docId;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    if (this.newsId) {
                      _context17.next = 7;
                      break;
                    }

                    _context17.next = 3;
                    return this.firestoreService.createNews({
                      content: this.content.value,
                      title: this.title.value,
                      imagesUrls: this.imagesUrls,
                      author: {
                        id: this.firebaseAuth.user.value.id,
                        name: this.firebaseAuth.user.value.name,
                        email: this.firebaseAuth.user.value.email
                      }
                    });

                  case 3:
                    docId = _context17.sent;
                    this.router.navigate(['/news', docId]);
                    _context17.next = 10;
                    break;

                  case 7:
                    _context17.next = 9;
                    return this.firestoreService.updateNews({
                      content: this.content.value,
                      title: this.title.value,
                      imagesUrls: this.imagesUrls,
                      id: this.newsId
                    });

                  case 9:
                    this.router.navigate(['/news', this.newsId]);

                  case 10:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "onImageRemoved",
        value: function onImageRemoved(urlId) {
          this.imagesUrls.splice(urlId, 1);
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.newsForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "loadNewsData",
        value: function loadNewsData() {
          var _this7 = this;

          this.newsId = this.route.snapshot.paramMap.get('id');

          if (!this.newsId) {
            return;
          }

          this.firestoreService.getNewsItem(this.newsId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (news) {
            if (!_this7.canUserModifyThisNews(news.author)) {
              _this7.router.navigate(['/unauthorized']);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (newsItem) {
            _this7.title.setValue(newsItem.title);

            _this7.content.setValue(newsItem.content);

            _this7.imagesUrls = newsItem.imagesUrls;
          });
        }
      }, {
        key: "canUserModifyThisNews",
        value: function canUserModifyThisNews(author) {
          var loggedInUser = this.firebaseAuth.user.value;
          return loggedInUser.roles.author && author.id === loggedInUser.id || loggedInUser.roles.admin;
        }
      }, {
        key: "title",
        get: function get() {
          return this.newsForm.get('title');
        }
      }, {
        key: "content",
        get: function get() {
          return this.newsForm.get('content');
        }
      }]);

      return CreateNewsComponent;
    }();

    CreateNewsComponent.ɵfac = function CreateNewsComponent_Factory(t) {
      return new (t || CreateNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    CreateNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CreateNewsComponent,
      selectors: [["app-create-news"]],
      decls: 27,
      vars: 4,
      consts: [[1, "container", "mb-5"], [1, "row", "mb-4"], [1, "col-2"], [1, "col-8"], [1, "w-50", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "title", 1, "form-control"], ["formControlName", "content", 1, "form-control"], [1, "mb-3"], ["dropZoneLabel", "Drop files here", 3, "onFileDrop"], ["ngx-file-drop-content-tmp", ""], [1, "mt-3"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "row"], [1, "col-3"], [1, "col-6"], [3, "imagesUrls", "imageRemoved"], [3, "click"], [4, "ngIf"]],
      template: function CreateNewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New news");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateNewsComponent_Template_form_ngSubmit_6_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "textarea", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngx-file-drop", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFileDrop", function CreateNewsComponent_Template_ngx_file_drop_onFileDrop_16_listener($event) {
            return ctx.dropped($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateNewsComponent_ng_template_17_Template, 2, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Formats allowed: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CreateNewsComponent_span_20_Template, 3, 2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "app-images-carousel", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageRemoved", function CreateNewsComponent_Template_app_images_carousel_imageRemoved_26_listener($event) {
            return ctx.onImageRemoved($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allowedFormats);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.newsForm.valid || ctx.imagesDuringUpload);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imagesUrls", ctx.imagesUrls);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_10__["ImagesCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["ngx-file-drop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\napp-images-carousel[_ngcontent-%COMP%]  img {\n  width: 34rem;\n  height: 24rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9jcmVhdGUtbmV3cy9DOlxcVXNlcnNcXEpha3ViXFxEZXNrdG9wXFxOZXdzIGJ1bGxldGluL3NyY1xcYXBwXFxuZXdzXFxjcmVhdGUtbmV3c1xcY3JlYXRlLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ld3MvY3JlYXRlLW5ld3MvY3JlYXRlLW5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7O0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9jcmVhdGUtbmV3cy9jcmVhdGUtbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5neC1maWxlLWRyb3Age1xyXG4gIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuYXBwLWltYWdlcy1jYXJvdXNlbDo6bmctZGVlcCBpbWcge1xyXG4gIHdpZHRoOiAzNHJlbTtcclxuICBoZWlnaHQ6IDI0cmVtO1xyXG59XHJcbiIsIm5neC1maWxlLWRyb3Agc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYXBwLWltYWdlcy1jYXJvdXNlbDo6bmctZGVlcCBpbWcge1xuICB3aWR0aDogMzRyZW07XG4gIGhlaWdodDogMjRyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-create-news',
          templateUrl: './create-news.component.html',
          styleUrls: ['./create-news.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]
        }, {
          type: _app_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news-detail/news-detail.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/news/news-detail/news-detail.component.ts ***!
    \***********************************************************/

  /*! exports provided: NewsDetailComponent */

  /***/
  function srcAppNewsNewsDetailNewsDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function () {
      return NewsDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/auth/login/phone-login/window.service */
    "./src/app/auth/login/phone-login/window.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_auth_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/auth/is-creator-or-admin.directive */
    "./src/app/auth/is-creator-or-admin.directive.ts");
    /* harmony import */


    var _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/images-carousel/images-carousel.component */
    "./src/app/images-carousel/images-carousel.component.ts");

    function NewsDetailComponent_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsDetailComponent_div_0_div_15_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.editDocument();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit news");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsDetailComponent_div_0_div_15_Template_button_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.deleteDocument();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete news");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        userId: a0
      };
    };

    function NewsDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewsDetailComponent_div_0_div_15_Template, 7, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-images-carousel", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var newsItem_r11 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](newsItem_r11.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](newsItem_r11.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, newsItem_r11.author.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](newsItem_r11.author.name ? newsItem_r11.author.name : newsItem_r11.author.email ? newsItem_r11.author.email : newsItem_r11.author.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appIsCreatorOrAdmin", newsItem_r11.author.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imagesUrls", newsItem_r11.imagesUrls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-href", "https:/jakubo96.github.io/news/" + newsItem_r11.id);
      }
    }

    var NewsDetailComponent =
    /*#__PURE__*/
    function () {
      function NewsDetailComponent(route, router, firestoreService, windowService) {
        _classCallCheck(this, NewsDetailComponent);

        this.route = route;
        this.router = router;
        this.firestoreService = firestoreService;
        this.windowService = windowService;
      }

      _createClass(NewsDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadProductDetails();
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.windowService.windowRef.FB.XFBML.parse();
        }
      }, {
        key: "loadProductDetails",
        value: function loadProductDetails() {
          this.newsId = this.route.snapshot.paramMap.get('id');
          this.newsItem$ = this.firestoreService.getNewsItem(this.newsId);
        }
      }, {
        key: "deleteDocument",
        value: function deleteDocument() {
          this.firestoreService.removeNews(this.newsId);
          this.router.navigate(['/news']);
        }
      }, {
        key: "editDocument",
        value: function editDocument() {
          this.router.navigate(['/create', this.newsId]);
        }
      }]);

      return NewsDetailComponent;
    }();

    NewsDetailComponent.ɵfac = function NewsDetailComponent_Factory(t) {
      return new (t || NewsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowService"]));
    };

    NewsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsDetailComponent,
      selectors: [["app-news-detail"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container text-center mb-5", 4, "ngIf"], [1, "container", "text-center", "mb-5"], [1, "row"], [1, "col"], [1, "col-2"], [1, "col-8"], [1, "text-break"], ["routerLink", "/news", 3, "queryParams"], ["class", "row my-4", 4, "appIsCreatorOrAdmin"], [1, "row", "mb-4"], [3, "imagesUrls"], [1, "col-1"], ["data-width", "", "data-numposts", "5", 1, "fb-comments"], [1, "row", "my-4"], [1, "col-4"], [1, "col-4", "d-flex", "justify-content-around"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function NewsDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsDetailComponent_div_0_Template, 24, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.newsItem$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _app_auth_is_creator_or_admin_directive__WEBPACK_IMPORTED_MODULE_5__["IsCreatorOrAdminDirective"], _app_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_6__["ImagesCarouselComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["app-images-carousel[_ngcontent-%COMP%]  img {\n  width: 48rem;\n  height: 40rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLWRldGFpbC9DOlxcVXNlcnNcXEpha3ViXFxEZXNrdG9wXFxOZXdzIGJ1bGxldGluL3NyY1xcYXBwXFxuZXdzXFxuZXdzLWRldGFpbFxcbmV3cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZXMtY2Fyb3VzZWw6Om5nLWRlZXAgaW1nIHtcclxuICB3aWR0aDogNDhyZW07XHJcbiAgaGVpZ2h0OiA0MHJlbTtcclxufVxyXG4iLCJhcHAtaW1hZ2VzLWNhcm91c2VsOjpuZy1kZWVwIGltZyB7XG4gIHdpZHRoOiA0OHJlbTtcbiAgaGVpZ2h0OiA0MHJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news-detail',
          templateUrl: './news-detail.component.html',
          styleUrls: ['./news-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]
        }, {
          type: _app_auth_login_phone_login_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news-list/news-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/news/news-list/news-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: NewsListComponent */

  /***/
  function srcAppNewsNewsListNewsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () {
      return NewsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewsListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r2 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Posts of user: ", user_r2.name ? user_r2.name : user_r2.email ? user_r2.email : user_r2.id, "");
      }
    }

    function NewsListComponent_ng_container_3_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go to detail page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var news_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r8.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r8.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", news_r8.id);
      }
    }

    function NewsListComponent_ng_container_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsListComponent_ng_container_3_div_1_div_1_Template, 9, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var newsList_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", newsList_r3);
      }
    }

    function NewsListComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No news available :(");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewsListComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsListComponent_ng_container_3_div_1_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsListComponent_ng_container_3_ng_template_2_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var newsList_r3 = ctx.ngIf;

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", newsList_r3.length)("ngIfElse", _r5);
      }
    }

    var NewsListComponent =
    /*#__PURE__*/
    function () {
      function NewsListComponent(firestoreService, route, router) {
        _classCallCheck(this, NewsListComponent);

        this.firestoreService = firestoreService;
        this.route = route;
        this.router = router;
      }

      _createClass(NewsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
          };

          this.loadNewsList();
        }
      }, {
        key: "loadNewsList",
        value: function loadNewsList() {
          var userId = this.route.snapshot.queryParamMap.get('userId');

          if (userId) {
            this.newsList$ = this.firestoreService.getNewsForGivenUser(userId);
            this.user$ = this.firestoreService.getUser(userId);
          } else {
            this.newsList$ = this.firestoreService.newsList$;
          }
        }
      }]);

      return NewsListComponent;
    }();

    NewsListComponent.ɵfac = function NewsListComponent_Factory(t) {
      return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsListComponent,
      selectors: [["app-news-list"]],
      decls: 5,
      vars: 6,
      consts: [[1, "container", "mb-5"], ["class", "row mb-4", 4, "ngIf"], [4, "ngIf"], [1, "row", "mb-4"], [1, "col"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noNews", ""], [1, "row"], ["class", "col-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-4", "mb-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "routerLink"]],
      template: function NewsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsListComponent_div_1_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsListComponent_ng_container_3_Template, 4, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.user$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.newsList$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".card[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLWxpc3QvQzpcXFVzZXJzXFxKYWt1YlxcRGVza3RvcFxcTmV3cyBidWxsZXRpbi9zcmNcXGFwcFxcbmV3c1xcbmV3cy1saXN0XFxuZXdzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuXHJcbiAgLmNhcmQtdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxufVxyXG4iLCIuY2FyZCB7XG4gIGhlaWdodDogMTByZW07XG59XG4uY2FyZCAuY2FyZC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news-list',
          templateUrl: './news-list.component.html',
          styleUrls: ['./news-list.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/firestore/firestore-collections.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/firestore/firestore-collections.ts ***!
    \*************************************************************/

  /*! exports provided: FirestoreCollections */

  /***/
  function srcAppServicesFirestoreFirestoreCollectionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirestoreCollections", function () {
      return FirestoreCollections;
    });

    var FirestoreCollections = function FirestoreCollections() {
      _classCallCheck(this, FirestoreCollections);
    };

    FirestoreCollections.NEWS = 'news';
    FirestoreCollections.USERS = 'users';
    /***/
  },

  /***/
  "./src/app/services/firestore/firestore.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/firestore/firestore.service.ts ***!
    \*********************************************************/

  /*! exports provided: FirestoreService */

  /***/
  function srcAppServicesFirestoreFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirestoreService", function () {
      return FirestoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services/firestore/firestore-collections */
    "./src/app/services/firestore/firestore-collections.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/storage/es2015/index.js");

    var FirestoreService =
    /*#__PURE__*/
    function () {
      function FirestoreService(afs, storage) {
        _classCallCheck(this, FirestoreService);

        this.afs = afs;
        this.storage = storage;
        this._newsDocs = new Map();
        this._newsItems$ = new Map();
        this.initializeCollections();
      }

      _createClass(FirestoreService, [{
        key: "initializeCollections",
        value: function initializeCollections() {
          this.initializeNews();
          this.initializeUsers();
        }
      }, {
        key: "initializeNews",
        value: function initializeNews() {
          this._newsCollection = this.afs.collection(_app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__["FirestoreCollections"].NEWS);
          this._newsList$ = this._newsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "getNewsForGivenUser",
        value: function getNewsForGivenUser(userId) {
          var newsCollection = this.afs.collection(_app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__["FirestoreCollections"].NEWS, function (ref) {
            return ref.where('author.id', '==', userId);
          });
          return newsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "initializeUsers",
        value: function initializeUsers() {
          this._usersCollection = this.afs.collection(_app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__["FirestoreCollections"].USERS);
        }
      }, {
        key: "getNewsItem",
        value: function getNewsItem(id) {
          if (this._newsItems$.has(id)) {
            return this._newsItems$.get(id);
          }

          var _this$loadNewNews = this.loadNewNews(id),
              newsItem = _this$loadNewNews.newsItem;

          return newsItem;
        }
      }, {
        key: "createNews",
        value: function createNews(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            var res;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this._newsCollection.add(item);

                  case 2:
                    res = _context18.sent;
                    return _context18.abrupt("return", res.id);

                  case 4:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "updateNews",
        value: function updateNews(item) {
          this.getNewsDoc(item.id).update(item);
          this.initializeNews();
        }
      }, {
        key: "removeNews",
        value: function removeNews(id) {
          this.getNewsDoc(id).delete();

          this._newsDocs.delete(id);

          this._newsItems$.delete(id);

          this.initializeNews();
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(filePath, file) {
          var ref = this.storage.ref(filePath);
          return ref.put(file).snapshotChanges();
        }
      }, {
        key: "getFileUrl",
        value: function getFileUrl(filePath) {
          return this.storage.ref(filePath).getDownloadURL();
        }
      }, {
        key: "getNewsDoc",
        value: function getNewsDoc(id) {
          if (this._newsDocs.has(id)) {
            return this._newsDocs.get(id);
          }

          var _this$loadNewNews2 = this.loadNewNews(id),
              newsDoc = _this$loadNewNews2.newsDoc;

          return newsDoc;
        }
      }, {
        key: "loadNewNews",
        value: function loadNewNews(id) {
          var newsDoc = this.afs.doc("".concat(_app_services_firestore_firestore_collections__WEBPACK_IMPORTED_MODULE_2__["FirestoreCollections"].NEWS, "/").concat(id));
          var newsItem = newsDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (source) {
            var data = source.payload.data();
            return Object.assign({
              id: id
            }, data);
          }));

          this._newsDocs.set(id, newsDoc);

          this._newsItems$.set(id, newsItem);

          return {
            newsDoc: newsDoc,
            newsItem: newsItem
          };
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this._usersCollection.doc(id).valueChanges();
        }
      }, {
        key: "createUser",
        value: function createUser(id, user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this._usersCollection.doc(id).set(user);

                  case 2:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "newsList$",
        get: function get() {
          return this._newsList$;
        }
      }]);

      return FirestoreService;
    }();

    FirestoreService.ɵfac = function FirestoreService_Factory(t) {
      return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]));
    };

    FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FirestoreService,
      factory: FirestoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyA4f9aKs_Ir2DVWMo5TQUofPABmT5fX5Ec',
        authDomain: 'news-bulletin-d9d88.firebaseapp.com',
        databaseURL: 'https://news-bulletin-d9d88.firebaseio.com',
        projectId: 'news-bulletin-d9d88',
        storageBucket: 'news-bulletin-d9d88.appspot.com',
        messagingSenderId: '341027191388'
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Jakub\Desktop\News bulletin\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map