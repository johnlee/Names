(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(6);
	var core_module_1 = __webpack_require__(7);
	var name_module_1 = __webpack_require__(44);
	var about_component_1 = __webpack_require__(57);
	var app_component_1 = __webpack_require__(61);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            angular2_universal_1.UniversalModule,
	            name_module_1.NameModule,
	            core_module_1.CoreModule,
	            router_1.RouterModule.forRoot([
	                {
	                    path: 'Home',
	                    loadChildren: './names/name.module#NameModule'
	                },
	                {
	                    path: 'About',
	                    component: about_component_1.AboutComponent
	                },
	                {
	                    path: '',
	                    redirectTo: 'Home',
	                    pathMatch: 'full'
	                },
	                {
	                    path: '**',
	                    redirectTo: 'Home',
	                    pathMatch: 'full'
	                } // anything not match redirect 
	            ]),
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	            about_component_1.AboutComponent
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(8);
	var forms_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(6);
	__webpack_require__(10);
	var module_import_guard_1 = __webpack_require__(21);
	var exception_service_1 = __webpack_require__(22);
	var navmenu_component_1 = __webpack_require__(26);
	var spinner_module_1 = __webpack_require__(33);
	var toast_module_1 = __webpack_require__(39);
	// This module imports core modules that should be used across the entire application
	// These are singleton modules, guarded by the throwIfAlreadyLoaded function 
	var CoreModule = (function () {
	    // Loads this module only if not already loaded
	    function CoreModule(parentModule) {
	        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
	    }
	    return CoreModule;
	}());
	CoreModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule,
	            spinner_module_1.SpinnerModule, toast_module_1.ToastModule
	        ],
	        exports: [
	            common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule,
	            spinner_module_1.SpinnerModule, toast_module_1.ToastModule, navmenu_component_1.NavMenuComponent
	        ],
	        declarations: [navmenu_component_1.NavMenuComponent],
	        providers: [
	            exception_service_1.ExceptionService
	        ]
	    }),
	    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
	    __metadata("design:paramtypes", [CoreModule])
	], CoreModule);
	exports.CoreModule = CoreModule;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// These are common rxjs extensions
	// This is part of core module so it is available for whole app
	"use strict";
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/delay");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/do");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/finally");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/mergeMap");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/of");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/fromPromise");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/observable/throw");

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	function throwIfAlreadyLoaded(parentModule, moduleName) {
	    if (parentModule) {
	        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
	    }
	}
	exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(23);
	var toast_service_1 = __webpack_require__(24);
	var ExceptionService = (function () {
	    function ExceptionService(toastService) {
	        var _this = this;
	        this.toastService = toastService;
	        this.catchBadResponse = function (errorResponse) {
	            var res = errorResponse;
	            var err = res.json();
	            var emsg = err ?
	                (err.error ? err.error : JSON.stringify(err)) :
	                (res.statusText || 'unknown error');
	            _this.toastService.activate("Error - Bad Response - " + emsg);
	            return Observable_1.Observable.of(false);
	        };
	    }
	    return ExceptionService;
	}());
	ExceptionService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [toast_service_1.ToastService])
	], ExceptionService);
	exports.ExceptionService = ExceptionService;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(25);
	var ToastService = (function () {
	    // Creates ToastService if not already exist
	    function ToastService(prior) {
	        this.toastSubject = new Subject_1.Subject();
	        this.toastState = this.toastSubject.asObservable();
	        if (prior) {
	            console.log('toast service already exists');
	            return prior;
	        }
	        else {
	            console.log('created toast service');
	        }
	    }
	    // Show the toast message
	    ToastService.prototype.activate = function (message) {
	        this.toastSubject.next({ message: message });
	    };
	    return ToastService;
	}());
	ToastService = __decorate([
	    core_1.Injectable(),
	    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
	    __metadata("design:paramtypes", [ToastService])
	], ToastService);
	exports.ToastService = ToastService;


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Subject");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var navmenu_service_1 = __webpack_require__(27);
	var NavMenuComponent = (function () {
	    function NavMenuComponent(navmenuService) {
	        this.navmenuService = navmenuService;
	    }
	    NavMenuComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.navmenuService.getIdentity()
	            .subscribe(function (success) {
	            _this.user = success;
	            console.log(JSON.stringify(_this.user));
	        }, function (error) {
	            _this.error = error;
	        });
	    };
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(29),
	        styles: [__webpack_require__(30)],
	        providers: [navmenu_service_1.NavMenuService]
	    }),
	    __metadata("design:paramtypes", [navmenu_service_1.NavMenuService])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(28);
	var Observable_1 = __webpack_require__(23);
	var NavMenuService = (function () {
	    function NavMenuService(http) {
	        this.http = http;
	        this.apiUrl = 'Home/Identity';
	    }
	    NavMenuService.prototype.getIdentity = function () {
	        return this.http
	            .get(this.apiUrl)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('Identity: ' + JSON.stringify(data)); })
	            .catch(this.handleError);
	    };
	    NavMenuService.prototype.handleError = function (error) {
	        // TODO - use a remote logging infrastructure
	        var errMsg;
	        if (error instanceof http_1.Response) {
	            var body = error.json() || '';
	            var err = body.error || JSON.stringify(body);
	            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
	        }
	        else {
	            errMsg = error.message ? error.message : error.toString();
	        }
	        console.error(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    return NavMenuService;
	}());
	NavMenuService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], NavMenuService);
	exports.NavMenuService = NavMenuService;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a class='navbar-brand' [routerLink]=\"['/home']\">EREUM <small>v 0.1</small></a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/home']\">\r\n            <span class='glyphicon glyphicon-book'></span> Names\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/About']\">\r\n            <span class='glyphicon glyphicon-question-sign'></span> About\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"user\" *ngIf=\"user\">\r\n    <small class=\"text-warn\">\r\n      <span class=\"userLabel\">Logged in as: </span>{{ user.name }}\r\n    </small>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(31);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n  background-color: #4189C7;\r\n  color: white;\r\n}\r\n\r\n.user {\r\n  color: #9d9d9d;\r\n  white-space: nowrap;\r\n  position: absolute;\r\n  right: 5%;\r\n  top: 85%;\r\n}\r\n\r\n.userLabel {\r\n  visibility: hidden;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  /* On small screens, convert the nav menu to a vertical sidebar */\r\n  .user {\r\n  color: #9d9d9d;\r\n    white-space: normal;\r\n    position: absolute;\r\n    left: 10%;\r\n    top: 95%;\r\n  }\r\n\r\n  .userLabel {\r\n    visibility: visible;\r\n  }\r\n\r\n  .main-nav {\r\n    height: 100%;\r\n    width: calc(25% - 20px);\r\n  }\r\n\r\n  .navbar {\r\n    border-radius: 0px;\r\n    border-width: 0px;\r\n    height: 100%;\r\n  }\r\n\r\n  .navbar-header {\r\n    float: none;\r\n  }\r\n\r\n  .navbar-collapse {\r\n    border-top: 1px solid #444;\r\n    padding: 0px;\r\n  }\r\n\r\n  .navbar ul {\r\n    float: none;\r\n  }\r\n\r\n  .navbar li {\r\n    float: none;\r\n    font-size: 15px;\r\n    margin: 6px;\r\n  }\r\n\r\n    .navbar li a {\r\n      padding: 10px 16px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n  .navbar a {\r\n    /* If a menu item's text is too long, truncate it */\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(8);
	var module_import_guard_1 = __webpack_require__(21);
	var spinner_component_1 = __webpack_require__(34);
	var spinner_service_1 = __webpack_require__(35);
	var SpinnerModule = (function () {
	    // Only load this module if not already loaded
	    function SpinnerModule(parentModule) {
	        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'SpinnerModule');
	    }
	    return SpinnerModule;
	}());
	SpinnerModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        exports: [spinner_component_1.SpinnerComponent],
	        declarations: [spinner_component_1.SpinnerComponent],
	        providers: [spinner_service_1.SpinnerService]
	    }),
	    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
	    __metadata("design:paramtypes", [SpinnerModule])
	], SpinnerModule);
	exports.SpinnerModule = SpinnerModule;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var spinner_service_1 = __webpack_require__(35);
	var SpinnerComponent = (function () {
	    function SpinnerComponent(spinnerService) {
	        this.spinnerService = spinnerService;
	        this.visible = false;
	    }
	    SpinnerComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.spinnerStateChanged = this.spinnerService.spinnerState
	            .subscribe(function (state) { return _this.visible = state.show; });
	    };
	    SpinnerComponent.prototype.ngOnDestroy = function () {
	        this.spinnerStateChanged.unsubscribe();
	    };
	    return SpinnerComponent;
	}());
	SpinnerComponent = __decorate([
	    core_1.Component({
	        selector: 'spinner',
	        template: __webpack_require__(36),
	        styles: [__webpack_require__(37)],
	    }),
	    __metadata("design:paramtypes", [spinner_service_1.SpinnerService])
	], SpinnerComponent);
	exports.SpinnerComponent = SpinnerComponent;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var Subject_1 = __webpack_require__(25);
	var SpinnerService = (function () {
	    function SpinnerService(prior) {
	        this.spinnerSubject = new Subject_1.Subject();
	        this.spinnerState = this.spinnerSubject.asObservable();
	        if (prior) {
	            return prior;
	        }
	    }
	    SpinnerService.prototype.show = function () {
	        this.spinnerSubject.next({ show: true });
	    };
	    SpinnerService.prototype.hide = function () {
	        this.spinnerSubject.next({ show: false });
	    };
	    return SpinnerService;
	}());
	SpinnerService = __decorate([
	    core_1.Injectable(),
	    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
	    __metadata("design:paramtypes", [SpinnerService])
	], SpinnerService);
	exports.SpinnerService = SpinnerService;


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner\" *ngIf=\"visible\">\r\n  <h2>Loading...</h2>\r\n  <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(38);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, ".spinner {\r\n  color: #7c7a7c;\r\n  position: absolute;\r\n  left: 30%;top: 12%\r\n}\r\n\r\n", ""]);
	
	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(8);
	var module_import_guard_1 = __webpack_require__(21);
	var toast_component_1 = __webpack_require__(40);
	var toast_service_1 = __webpack_require__(24);
	var ToastModule = (function () {
	    // Only load this module if not already loaded
	    function ToastModule(parentModule) {
	        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'ToastModule');
	    }
	    return ToastModule;
	}());
	ToastModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        exports: [toast_component_1.ToastComponent],
	        declarations: [toast_component_1.ToastComponent],
	        providers: [toast_service_1.ToastService] // Makes the ToastService available for injection
	    }),
	    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
	    __metadata("design:paramtypes", [ToastModule])
	], ToastModule);
	exports.ToastModule = ToastModule;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var toast_service_1 = __webpack_require__(24);
	var ToastComponent = (function () {
	    function ToastComponent(toastService) {
	        var _this = this;
	        this.toastService = toastService;
	        this.defaults = {
	            title: '',
	            message: 'May the Force be with You'
	        };
	        this.toastSubscription = this.toastService.toastState.subscribe(function (toastMessage) {
	            console.log("activiting toast: " + toastMessage.message);
	            _this.activate(toastMessage.message);
	        });
	    }
	    ToastComponent.prototype.activate = function (message, title) {
	        if (message === void 0) { message = this.defaults.message; }
	        if (title === void 0) { title = this.defaults.title; }
	        this.title = title;
	        this.message = message;
	        this.show();
	    };
	    ToastComponent.prototype.ngOnInit = function () {
	        this.toastElement = document.getElementById('toast');
	    };
	    ToastComponent.prototype.ngOnDestroy = function () {
	        this.toastSubscription.unsubscribe();
	    };
	    ToastComponent.prototype.show = function () {
	        var _this = this;
	        console.log(this.message);
	        this.toastElement.style.opacity = 1;
	        this.toastElement.style.zIndex = 9999;
	        window.setTimeout(function () { return _this.hide(); }, 2500);
	    };
	    ToastComponent.prototype.hide = function () {
	        var _this = this;
	        this.toastElement.style.opacity = 0;
	        window.setTimeout(function () { return _this.toastElement.style.zIndex = 0; }, 400);
	    };
	    return ToastComponent;
	}());
	ToastComponent = __decorate([
	    core_1.Component({
	        selector: 'story-toast',
	        template: __webpack_require__(41),
	        styles: [__webpack_require__(42)],
	    }),
	    __metadata("design:paramtypes", [toast_service_1.ToastService])
	], ToastComponent);
	exports.ToastComponent = ToastComponent;


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div id=\"toast\" class=\"toast-container\">\r\n  <div class=\"toast-card mdl-shadow--16dp\">\r\n    <h5 class=\"toast-title\">{{title}}</h5>\r\n    <p class=\"toast-message\">{{message}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(43);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, ".toast-container {\r\n  /*-webkit-transition-property: opacity, bottom, left, right, width, margin, border-radius;\r\n  transition-property: opacity, bottom, left, right, width, margin, border-radius;\r\n  -webkit-transition-duration: 1.0s;\r\n          transition-duration: 1.0s;\r\n  -webkit-transition-timing-function: ease;\r\n          transition-timing-function: ease;*/\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: scroll;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  z-index: 9999;\r\n  opacity: 0;\r\n\r\n  -webkit-transition: opacity 400ms ease-in;\r\n  -moz-transition: opacity 400ms ease-in;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.toast-container > * {\r\n  text-align: center;\r\n}\r\n\r\n.toast-card {\r\n  width: 100%;\r\n  z-index: 1;\r\n  padding: 2px;\r\n  position: relative;\r\n  /*background-color: #f06292;\r\n  background-color: rgb(103,58,183);\r\n  background-color: rgb(83,109,254);*/\r\n  background-color: rgb(255,64,129);\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.toast-card .toast-message {\r\n  margin: 0em 2em 1em 2em;\r\n}\r\n\r\n.toast-card .toast-title {\r\n  text-transform: uppercase;\r\n  margin: 16px;\r\n  font-size: 18px;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var forms_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(6);
	var name_detail_component_1 = __webpack_require__(45);
	var name_list_component_1 = __webpack_require__(51);
	var name_service_1 = __webpack_require__(46);
	var name_filter_1 = __webpack_require__(55);
	var name_guard_1 = __webpack_require__(56);
	var NameModule = (function () {
	    function NameModule() {
	    }
	    return NameModule;
	}());
	NameModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            angular2_universal_1.UniversalModule,
	            forms_1.FormsModule,
	            router_1.RouterModule.forChild([
	                {
	                    path: 'Home',
	                    component: name_list_component_1.NameListComponent
	                },
	                {
	                    path: 'Home/:id',
	                    canActivate: [name_guard_1.NameGuard],
	                    component: name_detail_component_1.NameDetailComponent
	                }
	            ])
	        ],
	        declarations: [
	            name_list_component_1.NameListComponent,
	            name_detail_component_1.NameDetailComponent,
	            name_filter_1.NameFilter
	        ],
	        providers: [
	            name_service_1.NameService,
	            name_guard_1.NameGuard // Guard service
	        ]
	    })
	], NameModule);
	exports.NameModule = NameModule;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var name_service_1 = __webpack_require__(46);
	var NameDetailComponent = (function () {
	    function NameDetailComponent(route, router, nameService) {
	        this.route = route;
	        this.router = router;
	        this.nameService = nameService;
	    }
	    NameDetailComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.sub = this.route.params.subscribe(function (params) {
	            var id = +params['id'];
	            _this.getName(id);
	        });
	        this.showModal = false;
	    };
	    NameDetailComponent.prototype.ngOnDestroy = function () {
	        this.sub.unsubscribe();
	    };
	    NameDetailComponent.prototype.getName = function (id) {
	        var _this = this;
	        this.nameService.getName(id)
	            .subscribe(function (name) { return _this.name = name; }, function (error) { return _this.error = error; });
	    };
	    NameDetailComponent.prototype.updateName = function () {
	        var _this = this;
	        // Convert tags and features to string array
	        var tags = this.name.tags.toString();
	        var features = this.name.features.toString();
	        this.name.tags = tags.split(",").map(Function.prototype.call, String.prototype.trim);
	        this.name.features = features.split(",").map(Function.prototype.call, String.prototype.trim);
	        // Call the name update service
	        this.nameService.updateName(this.name)
	            .subscribe(function (success) {
	            if (success != _this.name.id) {
	                console.log("ERROR - recieved different name id after update call");
	            }
	            _this.router.navigate(['/Home']);
	        }, function (error) {
	            _this.error = error;
	        });
	    };
	    NameDetailComponent.prototype.toggleModal = function () {
	        this.showModal = !this.showModal;
	    };
	    NameDetailComponent.prototype.deleteName = function () {
	        var _this = this;
	        this.nameService.deleteName(this.name.id)
	            .subscribe(function (success) {
	            if (!success) {
	                console.log("ERROR - recieved false result after deletion call");
	            }
	            _this.router.navigate(['/Home']);
	        }, function (error) {
	            _this.error = error;
	        });
	    };
	    return NameDetailComponent;
	}());
	NameDetailComponent = __decorate([
	    core_1.Component({
	        selector: 'name-detail',
	        template: __webpack_require__(48),
	        styles: [__webpack_require__(49)],
	        providers: [name_service_1.NameService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        router_1.Router,
	        name_service_1.NameService])
	], NameDetailComponent);
	exports.NameDetailComponent = NameDetailComponent;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(28);
	var Observable_1 = __webpack_require__(23);
	var core_2 = __webpack_require__(47);
	var NameService = (function () {
	    function NameService(http, spinnerService) {
	        this.http = http;
	        this.spinnerService = spinnerService;
	        this.apiUrl = 'api/Names';
	    }
	    NameService.prototype.getName = function (id) {
	        return this.http
	            .get(this.apiUrl + "/" + id)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('GetName: ' + JSON.stringify(data)); })
	            .catch(this.handleError);
	    };
	    NameService.prototype.getNames = function () {
	        var _this = this;
	        this.spinnerService.show();
	        return this.http
	            .get(this.apiUrl)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('GetNames: ' + JSON.stringify(data)); })
	            .catch(this.handleError)
	            .finally(function () { return _this.spinnerService.hide(); });
	    };
	    NameService.prototype.addName = function (name) {
	        var _this = this;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(name);
	        this.spinnerService.show();
	        return this.http.post(this.apiUrl, body, options)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('AddName: ' + JSON.stringify(data)); })
	            .catch(this.handleError)
	            .finally(function () { return _this.spinnerService.hide(); });
	    };
	    NameService.prototype.updateName = function (name) {
	        var _this = this;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(name);
	        this.spinnerService.show();
	        return this.http.put(this.apiUrl + "/" + name.id, body, options)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('UpdateName: ' + JSON.stringify(data)); })
	            .catch(this.handleError)
	            .finally(function () { return _this.spinnerService.hide(); });
	    };
	    NameService.prototype.deleteName = function (id) {
	        var _this = this;
	        this.spinnerService.show();
	        return this.http.delete(this.apiUrl + "/" + id)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('DeleteName: ' + JSON.stringify(data)); })
	            .catch(this.handleError)
	            .finally(function () { return _this.spinnerService.hide(); });
	    };
	    NameService.prototype.handleError = function (error) {
	        // TODO - use a remote logging infrastructure
	        var errMsg;
	        if (error instanceof http_1.Response) {
	            var body = error.json() || '';
	            var err = body.error || JSON.stringify(body);
	            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
	        }
	        else {
	            errMsg = error.message ? error.message : error.toString();
	        }
	        console.error(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    return NameService;
	}());
	NameService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, core_2.SpinnerService])
	], NameService);
	exports.NameService = NameService;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(22));
	__export(__webpack_require__(35));
	__export(__webpack_require__(24));


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\r\n<h1>Names Details</h1>\r\n\r\n<div class=\"card\" *ngIf=\"name\">\r\n  <div class=\"card-block\">\r\n    <div class=\"form-group\">\r\n      <label for=\"addName\">Name</label>\r\n      <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addTags\">Tags</label>\r\n      <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n      <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, manager</i></small>\r\n      <p>\r\n        <small class=\"text-info\">Popular Tags:</small>\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addFeatures\">Features</label>\r\n      <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n      <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n      <p>\r\n        <small class=\"text-info\">Popular Features:</small>\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"uploadPhoto\">Upload Photo</label>\r\n      <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not Enabled\" disabled>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <a href=\"\" [routerLink]=\"['/Home']\">\r\n        <button class=\"btn btn-default\">\r\n          Cancel\r\n        </button>\r\n      </a>\r\n      <span class=\"pull-right\">&nbsp;</span>\r\n      <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"toggleModal()\">\r\n        Delete\r\n      </button>\r\n      <button class=\"btn btn-primary\" (click)=\"updateName()\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" *ngIf='error'>\r\n  <div class=\"card-block\">\r\n    <h4>Error</h4>\r\n    <p>\r\n      {{ error }}\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showModal\">\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Confirmation</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Are you sure you want to delete this name {{ name.name }}?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button id=\"btnConfirm\" type=\"button\" class=\"btn btn-danger\" (click)=\"deleteName()\" data-dismiss=\"modal\">Delete</button>\r\n          <button id=\"btnCancel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(50);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.card {\r\n  border: none;\r\n  padding: 0px;\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n.card-block {\r\n  border: 1px solid #cfcfcf;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.pull-left {\r\n  margin: 0px;\r\n}\r\n\r\n.card-image {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.card-title {\r\n  margin-left: 60px;\r\n}\r\n\r\nstrong {\r\n  color: #585858;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var name_service_1 = __webpack_require__(46);
	var NameListComponent = (function () {
	    // Searching or Filtering name
	    function NameListComponent(nameService) {
	        this.nameService = nameService;
	        this.showAddForm = false;
	        this.showAddFormQuick = true;
	    }
	    NameListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.nameService.getNames()
	            .subscribe(function (names) { return _this.names = names; }, // This is like a promise - triggered when service responds with result
	        function (// This is like a promise - triggered when service responds with result
	            error) { return _this.error = error; });
	        this.clearAddForm();
	    };
	    NameListComponent.prototype.toggleAddForm = function () {
	        this.showAddForm = !this.showAddForm;
	    };
	    NameListComponent.prototype.toggleAddQuick = function () {
	        this.showAddFormQuick = !this.showAddFormQuick;
	    };
	    NameListComponent.prototype.saveAddForm = function () {
	        var _this = this;
	        // Determine which form to save from
	        if (this.showAddFormQuick) {
	            var splittedString = this.nameblock.split("\n");
	            this.name.name = splittedString[0];
	            this.name.tags = splittedString[1] ? splittedString[1].split(",") : [];
	            this.name.features = splittedString[2] ? splittedString[2].split(",") : [];
	        }
	        // Trim the tags and features fields
	        var tags = this.name.tags.toString();
	        var features = this.name.features.toString();
	        this.name.tags = tags.split(",").map(Function.prototype.call, String.prototype.trim);
	        this.name.features = features.split(",").map(Function.prototype.call, String.prototype.trim);
	        this.nameService.addName(this.name).subscribe(function (s) {
	            _this.names.push(_this.name);
	            _this.clearAddForm();
	            _this.toggleAddForm();
	        }, function (error) { return _this.error = error; });
	    };
	    NameListComponent.prototype.clearAddForm = function () {
	        this.name = {
	            id: 0,
	            url: "",
	            name: "",
	            tags: [],
	            features: []
	        };
	    };
	    return NameListComponent;
	}());
	NameListComponent = __decorate([
	    core_1.Component({
	        selector: 'name-list',
	        template: __webpack_require__(52),
	        styles: [__webpack_require__(53)],
	        providers: [name_service_1.NameService]
	    }),
	    __metadata("design:paramtypes", [name_service_1.NameService])
	], NameListComponent);
	exports.NameListComponent = NameListComponent;


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<article class=\"template animated slideInRight\">\r\n  <h2>List of Names</h2>\r\n  <div id=\"addButton\" *ngIf=\"!showAddForm\">\r\n    <button class=\"btn btn-primary\" (click)=\"toggleAddForm()\">\r\n      Add\r\n    </button>\r\n  </div>\r\n\r\n  <div id=\"searchFilter\">\r\n\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"showAddForm\">\r\n    <div class=\"card-block\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-secondary pull-right\" (click)=\"showAddForm = !showAddForm\">\r\n          Cancel\r\n        </button>\r\n        <span class=\"pull-right\">&nbsp;</span>\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"saveAddForm()\">\r\n          Save\r\n        </button>\r\n      </div>\r\n      <div id=\"addFormQuick\" *ngIf=\"showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addQuick\">Quick Add </label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Full Form</a>\r\n          <textarea id=\"addQuick\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"nameblock\"></textarea>\r\n          <small class=\"text-warning\">\r\n            Enter Name, Tags and Features on each line. Multiple tags and features separated by commas. Example:<br />\r\n            <i>John Lee</i><br />\r\n            <i>work, manager</i><br />\r\n            <i>skinny, asian, glasses</i><br />\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div id=\"addForm\" *ngIf=\"!showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addName\">Name</label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Quick Form</a>\r\n          <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addTags\">Tags</label>\r\n          <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n          <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, manager</i></small>\r\n          <p>\r\n            <small class=\"text-info\">Popular Tags:</small>\r\n          </p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addFeatures\">Features</label>\r\n          <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n          <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n          <p>\r\n            <small class=\"text-info\">Popular Features:</small>\r\n          </p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"uploadPhoto\">Upload Photo</label>\r\n          <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not Enabled\" disabled>\r\n        </div>\r\n      </div>\r\n      <div id=\"error\" *ngIf='error'>\r\n        <h4>Error</h4>\r\n        <p>\r\n          {{ error }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf='names && names.length'>\r\n    <div class=\"card-block\" *ngFor=\"let name of names\">\r\n      <img class=\"card-image thumbnail pull-left\" src=\"/dist/main/images/lego03.png\" alt=\"Person Photo\">\r\n      <a href=\"\" [routerLink]=\"['/Home', name.id]\">\r\n        <button class=\"btn btn-default pull-right\">\r\n          Edit\r\n        </button>\r\n      </a>\r\n      <h4 class=\"card-title\">{{ name.name }}</h4>\r\n\r\n      <hr class=\"card-spacer\" />\r\n\r\n      <p class=\"card-text\">\r\n        <strong>Tags: </strong>\r\n        <span *ngFor=\"let tag of name.tags\">{{ tag }}, </span>\r\n      </p>\r\n      <p class=\"card-text\">\r\n        <strong>Features: </strong>\r\n        <span *ngFor=\"let feature of name.features\">{{ feature }}, </span>\r\n      </p>\r\n      <div class=\"card-footer\">\r\n        <small class=\"text-muted\">Modified: 3 mins ago</small>\r\n        <small class=\"text-muted\">Created:  3 mins ago</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</article>\r\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(54);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.card {\r\n  border: none;\r\n  padding: 0px;\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n.card-block {\r\n  border: 1px solid #cfcfcf;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card-block:hover {\r\n  background-color: #dff3ff;\r\n}\r\n\r\n.pull-left {\r\n  margin: 0px;\r\n}\r\n\r\n.card-image {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.card-title {\r\n  margin-left: 60px;\r\n}\r\n\r\nstrong {\r\n  color: #585858;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var NameFilter = (function () {
	    function NameFilter() {
	    }
	    NameFilter.prototype.transform = function (value, filterBy) {
	        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
	        return filterBy ? value.filter(function (name) {
	            return name.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
	        }) : value;
	    };
	    return NameFilter;
	}());
	NameFilter = __decorate([
	    core_1.Pipe({
	        name: 'nameFilter'
	    })
	], NameFilter);
	exports.NameFilter = NameFilter;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var NameGuard = (function () {
	    function NameGuard(_router) {
	        this._router = _router;
	    }
	    // The route only allows numeric id number or new keyword
	    NameGuard.prototype.canActivate = function (route) {
	        var id = +route.url[1].path;
	        if (isNaN(id) || id < 1) {
	            this._router.navigate(['/Home']);
	            return false;
	        }
	        ;
	        return true;
	    };
	    return NameGuard;
	}());
	NameGuard = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [router_1.Router])
	], NameGuard);
	exports.NameGuard = NameGuard;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var AboutComponent = (function () {
	    function AboutComponent() {
	    }
	    return AboutComponent;
	}());
	AboutComponent = __decorate([
	    core_1.Component({
	        selector: 'about',
	        template: __webpack_require__(58),
	        styles: [__webpack_require__(59)]
	    })
	], AboutComponent);
	exports.AboutComponent = AboutComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<article class=\"template animated slideInRight\">\r\n  <h2>About</h2>\r\n  <table class=\"table table-hover\">\r\n    <tr>\r\n      <th>Version</th>\r\n      <td>0.1</td>\r\n      <td>September 2016</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Authentication</th>\r\n      <td>Google</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <td>Microsoft</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <td>Facebook</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <td>Twitter</td>\r\n      <td></td>\r\n    </tr>\r\n  </table>\r\n  <div id=\"btnLogout\">\r\n    <a href=\"Home/Logout\">\r\n      <button class=\"btn btn-warning\">\r\n        Logout\r\n      </button>\r\n    </a>\r\n  </div>\r\n</article>\r\n"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(60);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(62),
	        styles: [__webpack_require__(63)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n<spinner></spinner>"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(64);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n\r\n.mdl-layout__header {\r\n  position: fixed;\r\n  background-color: #222;\r\n}\r\n.mdl-layout__content {\r\n  margin-top: 68px;\r\n}\r\n\r\n.nav-link {\r\n  padding: 0 1em;\r\n  width: 100px;\r\n  color: rgba(255,255,255,.6);\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link.router-link-active {\r\n  color: rgba(255,255,255, 1);\r\n}\r\n\r\n.nav-link.router-link-active::after {\r\n    height: 3px;\r\n    width: 100%;\r\n    display: block;\r\n    content: \" \";\r\n    bottom: 0;\r\n    left: 0;\r\n    position: inherit;\r\n    background: rgb(255,64,129);\r\n}\r\n\r\n\r\n.mdl-layout__header-row {\r\n    height: 56px;\r\n    padding: 0 16px 0 72px;\r\n    padding-left: 8px;\r\n    background-color: #222;\r\n}\r\n\r\n.page-content {\r\n  margin: 2em;\r\n}\r\n\r\narticle.template {\r\n  opacity: 0;\r\n  -webkit-transition: opacity 400ms ease-in;\r\n  -moz-transition: opacity 400ms ease-in;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.animated {\r\n  -webkit-animation-duration: 400ms;\r\n  animation-duration: 400ms;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n#reset-button {\r\n  position: fixed;\r\n  right: 2em;\r\n  top: 1em;\r\n}\r\n\r\n#spinner {\r\n  border-width: 8em;\r\n  position: fixed;\r\n  top: 20%;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -70px;\r\n  z-index: 9999;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  #reset-button {\r\n    display: none\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGI5NTAxMzU0MjIzNGY0MDM2ZTIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvY29yZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvcnhqcy1leHRlbnNpb25zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9leGNlcHRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzRkYjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzPzg3MjciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5jc3M/MDllZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcz84NjRmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50LmNzcz83ZTM4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLmZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUuZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3M/OTZhZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3M/NmMyYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztB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LENBQUMsQ0FBQztNQUMzQyxDQUFDO0lBQ1csWUFBWSxDQUFJO0FBQWhCLHFDQUFZOzs7Ozs7O0FDUHpCLGtVOzs7Ozs7O0FDQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxzREFBcUQsNkhBQTZILDhCQUE4QixTQUFTLEtBQUssNkJBQTZCLHNCQUFzQiw2QkFBNkIsS0FBSywwQkFBMEIsdUJBQXVCLEtBQUssbUJBQW1CLHFCQUFxQixtQkFBbUIsa0NBQWtDLHlCQUF5Qiw0QkFBNEIsS0FBSyxzQ0FBc0Msa0NBQWtDLEtBQUssNkNBQTZDLG9CQUFvQixvQkFBb0IsdUJBQXVCLHVCQUF1QixrQkFBa0IsZ0JBQWdCLDBCQUEwQixvQ0FBb0MsS0FBSyxxQ0FBcUMscUJBQXFCLCtCQUErQiwwQkFBMEIsK0JBQStCLEtBQUssdUJBQXVCLGtCQUFrQixLQUFLLDBCQUEwQixpQkFBaUIsZ0RBQWdELDZDQUE2Qyx3Q0FBd0MsS0FBSyxtQkFBbUIsd0NBQXdDLGdDQUFnQyx3Q0FBd0MsZ0NBQWdDLEtBQUssdUJBQXVCLHNCQUFzQixpQkFBaUIsZUFBZSxLQUFLLGtCQUFrQix3QkFBd0Isc0JBQXNCLGVBQWUsZ0JBQWdCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLEtBQUssbUNBQW1DLHFCQUFxQiw0QkFBNEIsS0FBSzs7QUFFM3FEIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGI5NTAxMzU0MjIzNGY0MDM2ZTIiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgTmFtZU1vZHVsZSB9IGZyb20gJy4vbmFtZXMvbmFtZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuICAgIE5hbWVNb2R1bGUsXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ0hvbWUnLFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJy4vbmFtZXMvbmFtZS5tb2R1bGUjTmFtZU1vZHVsZSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdBYm91dCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBBYm91dENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJ0hvbWUnLFxyXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgICAgIH0sIC8vIGdlbmVyaWMgcmVkaXJlY3QgXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnKionLFxyXG4gICAgICAgIHJlZGlyZWN0VG86ICdIb21lJyxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgICB9IC8vIGFueXRoaW5nIG5vdCBtYXRjaCByZWRpcmVjdCBcclxuICAgIF0pLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBBYm91dENvbXBvbmVudFxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICcuL3J4anMtZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuaW1wb3J0IHsgRXhjZXB0aW9uU2VydmljZSB9IGZyb20gJy4vZXhjZXB0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4vc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSAnLi90b2FzdC90b2FzdC5tb2R1bGUnO1xyXG5cclxuLy8gVGhpcyBtb2R1bGUgaW1wb3J0cyBjb3JlIG1vZHVsZXMgdGhhdCBzaG91bGQgYmUgdXNlZCBhY3Jvc3MgdGhlIGVudGlyZSBhcHBsaWNhdGlvblxyXG4vLyBUaGVzZSBhcmUgc2luZ2xldG9uIG1vZHVsZXMsIGd1YXJkZWQgYnkgdGhlIHRocm93SWZBbHJlYWR5TG9hZGVkIGZ1bmN0aW9uIFxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJvdXRlck1vZHVsZSxcclxuICAgIFNwaW5uZXJNb2R1bGUsIFRvYXN0TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGUsXHJcbiAgICBTcGlubmVyTW9kdWxlLCBUb2FzdE1vZHVsZSwgTmF2TWVudUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmF2TWVudUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBFeGNlcHRpb25TZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG4gIC8vIExvYWRzIHRoaXMgbW9kdWxlIG9ubHkgaWYgbm90IGFscmVhZHkgbG9hZGVkXHJcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xyXG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZU1vZHVsZScpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvY29yZS5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhlc2UgYXJlIGNvbW1vbiByeGpzIGV4dGVuc2lvbnNcclxuLy8gVGhpcyBpcyBwYXJ0IG9mIGNvcmUgbW9kdWxlIHNvIGl0IGlzIGF2YWlsYWJsZSBmb3Igd2hvbGUgYXBwXHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9yeGpzLWV4dGVuc2lvbnMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RlbGF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9maW5hbGx5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZmluYWxseVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvZnJvbVByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZTogYW55LCBtb2R1bGVOYW1lOiBzdHJpbmcpIHtcclxuICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bW9kdWxlTmFtZX0gaGFzIGFscmVhZHkgYmVlbiBsb2FkZWQuIEltcG9ydCBDb3JlIG1vZHVsZXMgaW4gdGhlIEFwcE1vZHVsZSBvbmx5LmApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvbW9kdWxlLWltcG9ydC1ndWFyZC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSkgeyB9XHJcblxyXG4gIGNhdGNoQmFkUmVzcG9uc2U6IChlcnJvclJlc3BvbnNlOiBhbnkpID0+IE9ic2VydmFibGU8YW55PiA9IChlcnJvclJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgIGxldCByZXMgPSA8UmVzcG9uc2U+ZXJyb3JSZXNwb25zZTtcclxuICAgIGxldCBlcnIgPSByZXMuanNvbigpO1xyXG4gICAgbGV0IGVtc2cgPSBlcnIgP1xyXG4gICAgICAoZXJyLmVycm9yID8gZXJyLmVycm9yIDogSlNPTi5zdHJpbmdpZnkoZXJyKSkgOlxyXG4gICAgICAocmVzLnN0YXR1c1RleHQgfHwgJ3Vua25vd24gZXJyb3InKTtcclxuICAgIHRoaXMudG9hc3RTZXJ2aWNlLmFjdGl2YXRlKGBFcnJvciAtIEJhZCBSZXNwb25zZSAtICR7ZW1zZ31gKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKGZhbHNlKTtcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9leGNlcHRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0TWVzc2FnZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XHJcbiAgcHJpdmF0ZSB0b2FzdFN1YmplY3QgPSBuZXcgU3ViamVjdDxUb2FzdE1lc3NhZ2U+KCk7XHJcbiAgdG9hc3RTdGF0ZSA9IHRoaXMudG9hc3RTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAvLyBDcmVhdGVzIFRvYXN0U2VydmljZSBpZiBub3QgYWxyZWFkeSBleGlzdFxyXG4gIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcmlvcjogVG9hc3RTZXJ2aWNlKSB7XHJcbiAgICBpZiAocHJpb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3RvYXN0IHNlcnZpY2UgYWxyZWFkeSBleGlzdHMnKTtcclxuICAgICAgcmV0dXJuIHByaW9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZWQgdG9hc3Qgc2VydmljZScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTaG93IHRoZSB0b2FzdCBtZXNzYWdlXHJcbiAgYWN0aXZhdGUobWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgdGhpcy50b2FzdFN1YmplY3QubmV4dCg8VG9hc3RNZXNzYWdlPnsgbWVzc2FnZTogbWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5hdk1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9uYXZtZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4vbmF2bWVudS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtOYXZNZW51U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IElkZW50aXR5O1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuYXZtZW51U2VydmljZTogTmF2TWVudVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmF2bWVudVNlcnZpY2UuZ2V0SWRlbnRpdHkoKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICBzdWNjZXNzID0+IHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBzdWNjZXNzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcikpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3I7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4vbmF2bWVudS5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnSG9tZS9JZGVudGl0eSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGdldElkZW50aXR5KCk6IE9ic2VydmFibGU8SWRlbnRpdHk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLmFwaVVybClcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPElkZW50aXR5PnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnSWRlbnRpdHk6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAvLyBUT0RPIC0gdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgIGxldCBlcnJNc2c6IHN0cmluZztcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XHJcbiAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J21haW4tbmF2Jz5cXHJcXG4gIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcclxcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkVSRVVNIDxzbWFsbD52IDAuMTwvc21hbGw+PC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcclxcbiAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcclxcbiAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLWJvb2snPjwvc3Bhbj4gTmFtZXNcXHJcXG4gICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvQWJvdXQnXVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbic+PC9zcGFuPiBBYm91dFxcclxcbiAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJ1c2VyXFxcIiAqbmdJZj1cXFwidXNlclxcXCI+XFxyXFxuICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC13YXJuXFxcIj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwidXNlckxhYmVsXFxcIj5Mb2dnZWQgaW4gYXM6IDwvc3Bhbj57eyB1c2VyLm5hbWUgfX1cXHJcXG4gICAgPC9zbWFsbD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXFxyXFxubGkubGluay1hY3RpdmUgYSxcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmhvdmVyLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXIge1xcclxcbiAgY29sb3I6ICM5ZDlkOWQ7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDUlO1xcclxcbiAgdG9wOiA4NSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyTGFiZWwge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcclxcbi5tYWluLW5hdiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcclxcbiAgLnVzZXIge1xcclxcbiAgY29sb3I6ICM5ZDlkOWQ7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICB0b3A6IDk1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51c2VyTGFiZWwge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tbmF2IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyLWhlYWRlciB7XFxyXFxuICAgIGZsb2F0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhci1jb2xsYXBzZSB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHVsIHtcXHJcXG4gICAgZmxvYXQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIGxpIHtcXHJcXG4gICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbWFyZ2luOiA2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAgIC5uYXZiYXIgbGkgYSB7XFxyXFxuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgLm5hdmJhciBhIHtcXHJcXG4gICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbU3Bpbm5lckNvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU3Bpbm5lckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbU3Bpbm5lclNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyTW9kdWxlIHtcclxuXHJcbiAgLy8gT25seSBsb2FkIHRoaXMgbW9kdWxlIGlmIG5vdCBhbHJlYWR5IGxvYWRlZFxyXG4gIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFNwaW5uZXJNb2R1bGUpIHtcclxuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ1NwaW5uZXJNb2R1bGUnKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgU3Bpbm5lclN0YXRlLCBTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3Bpbm5lcicsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3Bpbm5lci5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vc3Bpbm5lci5jb21wb25lbnQuY3NzJyldLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICB2aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIC8vIFN1YnNjcmliZSB0byB0aGUgc3Bpbm5lciBzdGF0ZSBpbiBTcGlubmVyU2VydmljZSwgdGhpcyBzZXRzIHRoZSB2aXNpYmxlIGZsYWdcclxuICBwcml2YXRlIHNwaW5uZXJTdGF0ZUNoYW5nZWQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGlubmVyU2VydmljZTogU3Bpbm5lclNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3Bpbm5lclN0YXRlQ2hhbmdlZCA9IHRoaXMuc3Bpbm5lclNlcnZpY2Uuc3Bpbm5lclN0YXRlXHJcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBTcGlubmVyU3RhdGUpID0+IHRoaXMudmlzaWJsZSA9IHN0YXRlLnNob3cpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNwaW5uZXJTdGF0ZUNoYW5nZWQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwaW5uZXJTdGF0ZSB7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3Bpbm5lclN1YmplY3QgPSBuZXcgU3ViamVjdDxTcGlubmVyU3RhdGU+KCk7XHJcblxyXG4gIHNwaW5uZXJTdGF0ZSA9IHRoaXMuc3Bpbm5lclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcmlvcjogU3Bpbm5lclNlcnZpY2UpIHtcclxuICAgIGlmIChwcmlvcikgeyByZXR1cm4gcHJpb3I7IH1cclxuICB9XHJcblxyXG4gIHNob3coKSB7IC8vIFNldHMgdGhlIHNwaW5uZXIgc3RhdGUgdG8gdHJ1ZVxyXG4gICAgdGhpcy5zcGlubmVyU3ViamVjdC5uZXh0KDxTcGlubmVyU3RhdGU+eyBzaG93OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHsgLy8gU2V0cyB0aGUgc3Bpbm5lciBzdGF0ZSB0byBmYWxzZVxyXG4gICAgdGhpcy5zcGlubmVyU3ViamVjdC5uZXh0KDxTcGlubmVyU3RhdGU+eyBzaG93OiBmYWxzZSB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJ2aXNpYmxlXFxcIj5cXHJcXG4gIDxoMj5Mb2FkaW5nLi4uPC9oMj5cXHJcXG4gIDxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggZmEtZndcXFwiPjwvaT5cXHJcXG4gIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Mb2FkaW5nLi4uPC9zcGFuPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcGlubmVyIHtcXHJcXG4gIGNvbG9yOiAjN2M3YTdjO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMzAlO3RvcDogMTIlXFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1RvYXN0Q29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbVG9hc3RTZXJ2aWNlXSAvLyBNYWtlcyB0aGUgVG9hc3RTZXJ2aWNlIGF2YWlsYWJsZSBmb3IgaW5qZWN0aW9uXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7XHJcblxyXG4gIC8vIE9ubHkgbG9hZCB0aGlzIG1vZHVsZSBpZiBub3QgYWxyZWFkeSBsb2FkZWRcclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBUb2FzdE1vZHVsZSkge1xyXG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnVG9hc3RNb2R1bGUnKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N0b3J5LXRvYXN0JyxcclxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90b2FzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vdG9hc3QuY29tcG9uZW50LmNzcycpXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHByaXZhdGUgZGVmYXVsdHMgPSB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBtZXNzYWdlOiAnTWF5IHRoZSBGb3JjZSBiZSB3aXRoIFlvdSdcclxuICB9O1xyXG4gIHByaXZhdGUgdG9hc3RFbGVtZW50OiBhbnk7XHJcbiAgcHJpdmF0ZSB0b2FzdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSkge1xyXG4gICAgdGhpcy50b2FzdFN1YnNjcmlwdGlvbiA9IHRoaXMudG9hc3RTZXJ2aWNlLnRvYXN0U3RhdGUuc3Vic2NyaWJlKCh0b2FzdE1lc3NhZ2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGFjdGl2aXRpbmcgdG9hc3Q6ICR7dG9hc3RNZXNzYWdlLm1lc3NhZ2V9YClcclxuICAgICAgdGhpcy5hY3RpdmF0ZSh0b2FzdE1lc3NhZ2UubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKG1lc3NhZ2UgPSB0aGlzLmRlZmF1bHRzLm1lc3NhZ2UsIHRpdGxlID0gdGhpcy5kZWZhdWx0cy50aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnRvYXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnRvYXN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3coKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgdGhpcy50b2FzdEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB0aGlzLnRvYXN0RWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk5O1xyXG5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCAyNTAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZSgpIHtcclxuICAgIHRoaXMudG9hc3RFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy50b2FzdEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMCwgNDAwKTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInRvYXN0XFxcIiBjbGFzcz1cXFwidG9hc3QtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInRvYXN0LWNhcmQgbWRsLXNoYWRvdy0tMTZkcFxcXCI+XFxyXFxuICAgIDxoNSBjbGFzcz1cXFwidG9hc3QtdGl0bGVcXFwiPnt7dGl0bGV9fTwvaDU+XFxyXFxuICAgIDxwIGNsYXNzPVxcXCJ0b2FzdC1tZXNzYWdlXFxcIj57e21lc3NhZ2V9fTwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3RvYXN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvYXN0LWNvbnRhaW5lciB7XFxyXFxuICAvKi13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIG1hcmdpbiwgYm9yZGVyLXJhZGl1cztcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBtYXJnaW4sIGJvcmRlci1yYWRpdXM7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMHM7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMHM7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTsqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvYXN0LWNvbnRhaW5lciA+ICoge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9hc3QtY2FyZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAvKmJhY2tncm91bmQtY29sb3I6ICNmMDYyOTI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLDU4LDE4Myk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsMTA5LDI1NCk7Ki9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsNjQsMTI5KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvYXN0LWNhcmQgLnRvYXN0LW1lc3NhZ2Uge1xcclxcbiAgbWFyZ2luOiAwZW0gMmVtIDFlbSAyZW07XFxyXFxufVxcclxcblxcclxcbi50b2FzdC1jYXJkIC50b2FzdC10aXRsZSB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgbWFyZ2luOiAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IE5hbWVEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL25hbWUtZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hbWVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uYW1lLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmFtZVNlcnZpY2UgfSBmcm9tICcuL25hbWUuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hbWVGaWx0ZXIgfSBmcm9tICcuL25hbWUuZmlsdGVyJztcclxuaW1wb3J0IHsgTmFtZUd1YXJkIH0gZnJvbSAnLi9uYW1lLmd1YXJkJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyAvLyBpbXBvcnQgbW9kdWxlc1xyXG4gICAgVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoWyAvLyB0aGlzIGlzIGZvckNoaWxkLCBub3QgZm9yUm9vdCwgc2luY2Ugbm90IHJvb3QgbW9kdWxlXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnSG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBOYW1lTGlzdENvbXBvbmVudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ0hvbWUvOmlkJyxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW05hbWVHdWFyZF0sIC8vIFJvdXRlciBHdWFyZFxyXG4gICAgICAgIGNvbXBvbmVudDogTmFtZURldGFpbENvbXBvbmVudFxyXG4gICAgICB9XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIC8vIGNvbXBvbmVudHMgYW5kIGZpbHRlcnNcclxuICAgIE5hbWVMaXN0Q29tcG9uZW50LFxyXG4gICAgTmFtZURldGFpbENvbXBvbmVudCxcclxuICAgIE5hbWVGaWx0ZXJcclxuICBdLFxyXG4gIHByb3ZpZGVyczogWyAvLyBzZXJ2aWNlIHByb3ZpZGVyc1xyXG4gICAgTmFtZVNlcnZpY2UsXHJcbiAgICBOYW1lR3VhcmQgLy8gR3VhcmQgc2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVNb2R1bGUgeyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL3N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XHJcbmltcG9ydCB7IE5hbWVTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduYW1lLWRldGFpbCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmFtZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hbWUtZGV0YWlsLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgcHJvdmlkZXJzOiBbTmFtZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgbmFtZTogSU5hbWU7XHJcbiAgZXJyb3I6IHN0cmluZztcclxuICBzaG93TW9kYWw6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBuYW1lU2VydmljZTogTmFtZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgdGhpcy5nZXROYW1lKGlkKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZShpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmdldE5hbWUoaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgbmFtZSA9PiB0aGlzLm5hbWUgPSBuYW1lLFxyXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYW1lKCk6IHZvaWQge1xyXG4gICAgLy8gQ29udmVydCB0YWdzIGFuZCBmZWF0dXJlcyB0byBzdHJpbmcgYXJyYXlcclxuICAgIGxldCB0YWdzID0gdGhpcy5uYW1lLnRhZ3MudG9TdHJpbmcoKTtcclxuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMubmFtZS5mZWF0dXJlcy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5uYW1lLnRhZ3MgPSB0YWdzLnNwbGl0KFwiLFwiKS5tYXAoRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsIFN0cmluZy5wcm90b3R5cGUudHJpbSk7XHJcbiAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBmZWF0dXJlcy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIG5hbWUgdXBkYXRlIHNlcnZpY2VcclxuICAgIHRoaXMubmFtZVNlcnZpY2UudXBkYXRlTmFtZSh0aGlzLm5hbWUpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIGlmIChzdWNjZXNzICE9IHRoaXMubmFtZS5pZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiAtIHJlY2lldmVkIGRpZmZlcmVudCBuYW1lIGlkIGFmdGVyIHVwZGF0ZSBjYWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9Ib21lJ10pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3I7XHJcbiAgICAgIH0pO1xyXG4gIH0gXHJcblxyXG4gIHRvZ2dsZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93TW9kYWwgPSAhdGhpcy5zaG93TW9kYWw7XHJcbiAgfVxyXG5cclxuICBkZWxldGVOYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uYW1lU2VydmljZS5kZWxldGVOYW1lKHRoaXMubmFtZS5pZClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIC0gcmVjaWV2ZWQgZmFsc2UgcmVzdWx0IGFmdGVyIGRlbGV0aW9uIGNhbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL0hvbWUnXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yID0gPGFueT5lcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XHJcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYW1lU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnYXBpL05hbWVzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNwaW5uZXJTZXJ2aWNlOiBTcGlubmVyU2VydmljZSkgeyB9IFxyXG5cclxuICBnZXROYW1lKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElOYW1lPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8SU5hbWU+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdHZXROYW1lOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lcygpOiBPYnNlcnZhYmxlPElOYW1lW10+IHtcclxuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuYXBpVXJsKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8SU5hbWVbXT5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0dldE5hbWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zcGlubmVyU2VydmljZS5oaWRlKCkpO1xyXG4gIH1cclxuICBcclxuICBhZGROYW1lKG5hbWU6IElOYW1lKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShuYW1lKTtcclxuXHJcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3coKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPG51bWJlcj5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0FkZE5hbWU6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNwaW5uZXJTZXJ2aWNlLmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYW1lKG5hbWU6IElOYW1lKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShuYW1lKTtcclxuXHJcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3coKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpVXJsICsgXCIvXCIgKyBuYW1lLmlkLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8bnVtYmVyPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnVXBkYXRlTmFtZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU5hbWUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5zaG93KCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFwaVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxib29sZWFuPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnRGVsZXRlTmFtZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAvLyBUT0RPIC0gdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgIGxldCBlcnJNc2c6IHN0cmluZztcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XHJcbiAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLnNlcnZpY2UudHMiLCJleHBvcnQgKiBmcm9tICcuL3J4anMtZXh0ZW5zaW9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhjZXB0aW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48aDE+TmFtZXMgRGV0YWlsczwvaDE+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nSWY9XFxcIm5hbWVcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZE5hbWVcXFwiPk5hbWU8L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCBpZD1cXFwiYWRkTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUubmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZFRhZ3NcXFwiPlRhZ3M8L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCBpZD1cXFwiYWRkVGFnc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUudGFnc1xcXCIgLz5cXHJcXG4gICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+QWRkIG11bHRpcGxlIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hLiBFeGFtcGxlOiA8aT53b3JrLCBtYW5hZ2VyPC9pPjwvc21hbGw+XFxyXFxuICAgICAgPHA+XFxyXFxuICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtaW5mb1xcXCI+UG9wdWxhciBUYWdzOjwvc21hbGw+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkRmVhdHVyZXNcXFwiPkZlYXR1cmVzPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZEZlYXR1cmVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS5mZWF0dXJlc1xcXCIgLz5cXHJcXG4gICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+QWRkIG11bHRpcGxlIGZlYXR1cmVzIHNlcGFyYXRlZCBieSBjb21tYS4gRXhhbXBsZTogPGk+c2tpbm55LCBhc2lhbiwgZ2xhc3NlczwvaT48L3NtYWxsPlxcclxcbiAgICAgIDxwPlxcclxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPlBvcHVsYXIgRmVhdHVyZXM6PC9zbWFsbD5cXHJcXG4gICAgICA8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJ1cGxvYWRQaG90b1xcXCI+VXBsb2FkIFBob3RvPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcInVwbG9hZFBob3RvXFxcIiB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWZpbGVcXFwiIHRpdGxlPVxcXCJUaGlzIEZlYXR1cmUgbm90IEVuYWJsZWRcXFwiIGRpc2FibGVkPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGEgaHJlZj1cXFwiXFxcIiBbcm91dGVyTGlua109XFxcIlsnL0hvbWUnXVxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICBDYW5jZWxcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDwvYT5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Jm5ic3A7PC9zcGFuPlxcclxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbXlNb2RhbFxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTW9kYWwoKVxcXCI+XFxyXFxuICAgICAgICBEZWxldGVcXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInVwZGF0ZU5hbWUoKVxcXCI+XFxyXFxuICAgICAgICBTYXZlXFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nSWY9J2Vycm9yJz5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICA8aDQ+RXJyb3I8L2g0PlxcclxcbiAgICA8cD5cXHJcXG4gICAgICB7eyBlcnJvciB9fVxcclxcbiAgICA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJzaG93TW9kYWxcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgaWQ9XFxcIm15TW9kYWxcXFwiIHJvbGU9XFxcImRpYWxvZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxyXFxuXFxyXFxuICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj4mdGltZXM7PC9idXR0b24+XFxyXFxuICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkNvbmZpcm1hdGlvbjwvaDQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbmFtZSB7eyBuYW1lLm5hbWUgfX0/PC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG5Db25maXJtXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlTmFtZSgpXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5EZWxldGU8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuQ2FuY2VsXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkNhbmNlbDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hbWUtZGV0YWlsLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYmxvY2sge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHVsbC1sZWZ0IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBjb2xvcjogIzU4NTg1ODtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvc3Vic2NyaXB0aW9uJztcclxuXHJcbmltcG9ydCB7IElOYW1lIH0gZnJvbSAnLi9uYW1lLm1vZGVsJztcclxuaW1wb3J0IHsgTmFtZVNlcnZpY2UgfSBmcm9tICcuL25hbWUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25hbWUtbGlzdCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmFtZS1saXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYW1lLWxpc3QuY29tcG9uZW50LmNzcycpXSxcclxuICBwcm92aWRlcnM6IFsgTmFtZVNlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG5hbWVzOiBJTmFtZVtdO1xyXG4gIG5hbWU6IElOYW1lO1xyXG4gIG5hbWVibG9jazogc3RyaW5nO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcbiAgc2hvd0FkZEZvcm06IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93QWRkRm9ybVF1aWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLy8gU2VhcmNoaW5nIG9yIEZpbHRlcmluZyBuYW1lXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZVNlcnZpY2U6IE5hbWVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7IC8vIGZyb20gT25Jbml0IGludGVyZmFjZVxyXG4gICAgdGhpcy5uYW1lU2VydmljZS5nZXROYW1lcygpXHJcbiAgICAgICAgLnN1YnNjcmliZShuYW1lcyA9PiB0aGlzLm5hbWVzID0gbmFtZXMsIC8vIFRoaXMgaXMgbGlrZSBhIHByb21pc2UgLSB0cmlnZ2VyZWQgd2hlbiBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggcmVzdWx0XHJcbiAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yKTtcclxuXHJcbiAgICB0aGlzLmNsZWFyQWRkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQWRkRm9ybSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0FkZEZvcm0gPSAhdGhpcy5zaG93QWRkRm9ybTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUFkZFF1aWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93QWRkRm9ybVF1aWNrID0gIXRoaXMuc2hvd0FkZEZvcm1RdWljaztcclxuICB9XHJcblxyXG4gIHNhdmVBZGRGb3JtKCk6IHZvaWQge1xyXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGZvcm0gdG8gc2F2ZSBmcm9tXHJcbiAgICBpZiAodGhpcy5zaG93QWRkRm9ybVF1aWNrKSB7XHJcbiAgICAgIGxldCBzcGxpdHRlZFN0cmluZyA9IHRoaXMubmFtZWJsb2NrLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICB0aGlzLm5hbWUubmFtZSA9IHNwbGl0dGVkU3RyaW5nWzBdO1xyXG4gICAgICB0aGlzLm5hbWUudGFncyA9IHNwbGl0dGVkU3RyaW5nWzFdID8gc3BsaXR0ZWRTdHJpbmdbMV0uc3BsaXQoXCIsXCIpIDogW107XHJcbiAgICAgIHRoaXMubmFtZS5mZWF0dXJlcyA9IHNwbGl0dGVkU3RyaW5nWzJdID8gc3BsaXR0ZWRTdHJpbmdbMl0uc3BsaXQoXCIsXCIpIDogW107XHJcbiAgICB9XHJcbiAgICAvLyBUcmltIHRoZSB0YWdzIGFuZCBmZWF0dXJlcyBmaWVsZHNcclxuICAgIGxldCB0YWdzID0gdGhpcy5uYW1lLnRhZ3MudG9TdHJpbmcoKTtcclxuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMubmFtZS5mZWF0dXJlcy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5uYW1lLnRhZ3MgPSB0YWdzLnNwbGl0KFwiLFwiKS5tYXAoRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsIFN0cmluZy5wcm90b3R5cGUudHJpbSk7XHJcbiAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBmZWF0dXJlcy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG5cclxuICAgIHRoaXMubmFtZVNlcnZpY2UuYWRkTmFtZSh0aGlzLm5hbWUpLnN1YnNjcmliZShzID0+IHtcclxuICAgICAgdGhpcy5uYW1lcy5wdXNoKHRoaXMubmFtZSk7XHJcbiAgICAgIHRoaXMuY2xlYXJBZGRGb3JtKCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlQWRkRm9ybSgpO1xyXG4gICAgfSxcclxuICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyQWRkRm9ybSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmFtZSA9IHtcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIHVybDogXCJcIixcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgdGFnczogW10sXHJcbiAgICAgIGZlYXR1cmVzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhcnRpY2xlIGNsYXNzPVxcXCJ0ZW1wbGF0ZSBhbmltYXRlZCBzbGlkZUluUmlnaHRcXFwiPlxcclxcbiAgPGgyPkxpc3Qgb2YgTmFtZXM8L2gyPlxcclxcbiAgPGRpdiBpZD1cXFwiYWRkQnV0dG9uXFxcIiAqbmdJZj1cXFwiIXNob3dBZGRGb3JtXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVBZGRGb3JtKClcXFwiPlxcclxcbiAgICAgIEFkZFxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBpZD1cXFwic2VhcmNoRmlsdGVyXFxcIj5cXHJcXG5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nSWY9XFxcInNob3dBZGRGb3JtXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBwdWxsLXJpZ2h0XFxcIiAoY2xpY2spPVxcXCJzaG93QWRkRm9ybSA9ICFzaG93QWRkRm9ybVxcXCI+XFxyXFxuICAgICAgICAgIENhbmNlbFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Jm5ic3A7PC9zcGFuPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIChjbGljayk9XFxcInNhdmVBZGRGb3JtKClcXFwiPlxcclxcbiAgICAgICAgICBTYXZlXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGlkPVxcXCJhZGRGb3JtUXVpY2tcXFwiICpuZ0lmPVxcXCJzaG93QWRkRm9ybVF1aWNrXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRRdWlja1xcXCI+UXVpY2sgQWRkIDwvbGFiZWw+IDxhIFthdHRyLmhyZWZdPVxcXCJudWxsXFxcIiAoY2xpY2spPSd0b2dnbGVBZGRRdWljaygpJz4gU2hvdyBGdWxsIEZvcm08L2E+XFxyXFxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwiYWRkUXVpY2tcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJvd3M9XFxcIjNcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lYmxvY2tcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC13YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICBFbnRlciBOYW1lLCBUYWdzIGFuZCBGZWF0dXJlcyBvbiBlYWNoIGxpbmUuIE11bHRpcGxlIHRhZ3MgYW5kIGZlYXR1cmVzIHNlcGFyYXRlZCBieSBjb21tYXMuIEV4YW1wbGU6PGJyIC8+XFxyXFxuICAgICAgICAgICAgPGk+Sm9obiBMZWU8L2k+PGJyIC8+XFxyXFxuICAgICAgICAgICAgPGk+d29yaywgbWFuYWdlcjwvaT48YnIgLz5cXHJcXG4gICAgICAgICAgICA8aT5za2lubnksIGFzaWFuLCBnbGFzc2VzPC9pPjxiciAvPlxcclxcbiAgICAgICAgICA8L3NtYWxsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiYWRkRm9ybVxcXCIgKm5nSWY9XFxcIiFzaG93QWRkRm9ybVF1aWNrXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGROYW1lXFxcIj5OYW1lPC9sYWJlbD4gPGEgW2F0dHIuaHJlZl09XFxcIm51bGxcXFwiIChjbGljayk9J3RvZ2dsZUFkZFF1aWNrKCknPiBTaG93IFF1aWNrIEZvcm08L2E+XFxyXFxuICAgICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUubmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZFRhZ3NcXFwiPlRhZ3M8L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZFRhZ3NcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLnRhZ3NcXFwiIC8+XFxyXFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC13YXJuaW5nXFxcIj5BZGQgbXVsdGlwbGUgdGFncyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPndvcmssIG1hbmFnZXI8L2k+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPlBvcHVsYXIgVGFnczo8L3NtYWxsPlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRGZWF0dXJlc1xcXCI+RmVhdHVyZXM8L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEZlYXR1cmVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS5mZWF0dXJlc1xcXCIgLz5cXHJcXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPnNraW5ueSwgYXNpYW4sIGdsYXNzZXM8L2k+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPlBvcHVsYXIgRmVhdHVyZXM6PC9zbWFsbD5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXBsb2FkUGhvdG9cXFwiPlVwbG9hZCBQaG90bzwvbGFiZWw+XFxyXFxuICAgICAgICAgIDxpbnB1dCBpZD1cXFwidXBsb2FkUGhvdG9cXFwiIHR5cGU9XFxcImZpbGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtZmlsZVxcXCIgdGl0bGU9XFxcIlRoaXMgRmVhdHVyZSBub3QgRW5hYmxlZFxcXCIgZGlzYWJsZWQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGlkPVxcXCJlcnJvclxcXCIgKm5nSWY9J2Vycm9yJz5cXHJcXG4gICAgICAgIDxoND5FcnJvcjwvaDQ+XFxyXFxuICAgICAgICA8cD5cXHJcXG4gICAgICAgICAge3sgZXJyb3IgfX1cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPSduYW1lcyAmJiBuYW1lcy5sZW5ndGgnPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIiAqbmdGb3I9XFxcImxldCBuYW1lIG9mIG5hbWVzXFxcIj5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJjYXJkLWltYWdlIHRodW1ibmFpbCBwdWxsLWxlZnRcXFwiIHNyYz1cXFwiL2Rpc3QvbWFpbi9pbWFnZXMvbGVnbzAzLnBuZ1xcXCIgYWx0PVxcXCJQZXJzb24gUGhvdG9cXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIlxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9Ib21lJywgbmFtZS5pZF1cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICBFZGl0XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2E+XFxyXFxuICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57eyBuYW1lLm5hbWUgfX08L2g0PlxcclxcblxcclxcbiAgICAgIDxociBjbGFzcz1cXFwiY2FyZC1zcGFjZXJcXFwiIC8+XFxyXFxuXFxyXFxuICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxyXFxuICAgICAgICA8c3Ryb25nPlRhZ3M6IDwvc3Ryb25nPlxcclxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgdGFnIG9mIG5hbWUudGFnc1xcXCI+e3sgdGFnIH19LCA8L3NwYW4+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcclxcbiAgICAgICAgPHN0cm9uZz5GZWF0dXJlczogPC9zdHJvbmc+XFxyXFxuICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBmZWF0dXJlIG9mIG5hbWUuZmVhdHVyZXNcXFwiPnt7IGZlYXR1cmUgfX0sIDwvc3Bhbj5cXHJcXG4gICAgICA8L3A+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5Nb2RpZmllZDogMyBtaW5zIGFnbzwvc21hbGw+XFxyXFxuICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPkNyZWF0ZWQ6ICAzIG1pbnMgYWdvPC9zbWFsbD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2FydGljbGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYW1lLWxpc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYmxvY2sge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ibG9jazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmM2ZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHVsbC1sZWZ0IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBjb2xvcjogIzU4NTg1ODtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOYW1lIH0gZnJvbSAnLi9uYW1lLm1vZGVsJztcclxuXHJcbkBQaXBlKHsgLy8gRGVjb3JhdG9yIGZvciB0aGUgUHJvZHVjdEZpbHRlclBpcGVcclxuICBuYW1lOiAnbmFtZUZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVGaWx0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBJTmFtZVtdLCBmaWx0ZXJCeTogc3RyaW5nKTogSU5hbWVbXSB7XHJcbiAgICBmaWx0ZXJCeSA9IGZpbHRlckJ5ID8gZmlsdGVyQnkudG9Mb2NhbGVMb3dlckNhc2UoKSA6IG51bGw7XHJcbiAgICByZXR1cm4gZmlsdGVyQnkgPyB2YWx1ZS5maWx0ZXIoKG5hbWU6IElOYW1lKSA9PlxyXG4gICAgICBuYW1lLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlckJ5KSAhPT0gLTEpIDogdmFsdWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5maWx0ZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgwqBjbGFzcyBOYW1lR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgLy8gVGhlIHJvdXRlIG9ubHkgYWxsb3dzIG51bWVyaWMgaWQgbnVtYmVyIG9yIG5ldyBrZXl3b3JkXHJcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGxldCBpZCA9ICtyb3V0ZS51cmxbMV0ucGF0aDtcclxuXHJcbiAgICBpZiAoaXNOYU4oaWQpIHx8IGlkIDwgMSkge1xyXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvSG9tZSddKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLmd1YXJkLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fib3V0JyxcclxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hYm91dC5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vYWJvdXQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgeyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhcnRpY2xlIGNsYXNzPVxcXCJ0ZW1wbGF0ZSBhbmltYXRlZCBzbGlkZUluUmlnaHRcXFwiPlxcclxcbiAgPGgyPkFib3V0PC9oMj5cXHJcXG4gIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPlZlcnNpb248L3RoPlxcclxcbiAgICAgIDx0ZD4wLjE8L3RkPlxcclxcbiAgICAgIDx0ZD5TZXB0ZW1iZXIgMjAxNjwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGg+QXV0aGVudGljYXRpb248L3RoPlxcclxcbiAgICAgIDx0ZD5Hb29nbGU8L3RkPlxcclxcbiAgICAgIDx0ZD48L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgPHRkPk1pY3Jvc29mdDwvdGQ+XFxyXFxuICAgICAgPHRkPjwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGg+PC90aD5cXHJcXG4gICAgICA8dGQ+RmFjZWJvb2s8L3RkPlxcclxcbiAgICAgIDx0ZD48L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgPHRkPlR3aXR0ZXI8L3RkPlxcclxcbiAgICAgIDx0ZD48L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgPC90YWJsZT5cXHJcXG4gIDxkaXYgaWQ9XFxcImJ0bkxvZ291dFxcXCI+XFxyXFxuICAgIDxhIGhyZWY9XFxcIkhvbWUvTG9nb3V0XFxcIj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgTG9nb3V0XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvYT5cXHJcXG4gIDwvZGl2PlxcclxcbjwvYXJ0aWNsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYWJvdXQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxyXFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxzcGlubmVyPjwvc3Bpbm5lcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXHJcXG4gICAgLmJvZHktY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWRsLWxheW91dF9faGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcbi5tZGwtbGF5b3V0X19jb250ZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDY4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rLnJvdXRlci1saW5rLWFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluay5yb3V0ZXItbGluay1hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDY0LDEyOSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDE2cHggMCA3MnB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudCB7XFxyXFxuICBtYXJnaW46IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS50ZW1wbGF0ZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGVkIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXQtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAyZW07XFxyXFxuICB0b3A6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwaW5uZXIge1xcclxcbiAgYm9yZGVyLXdpZHRoOiA4ZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC03MHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAjcmVzZXQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=