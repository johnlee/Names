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
	var about_component_1 = __webpack_require__(59);
	var app_component_1 = __webpack_require__(63);
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

	module.exports = "<div class=\"spinner\" *ngIf=\"visible\">\r\n  <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>"

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
	exports.push([module.id, ".spinner {\r\n  color: #7c7a7c;\r\n  position: absolute;\r\n  right: 5%;\r\n  top: 10%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .spinner {\r\n    color: #7c7a7c;\r\n    position: absolute;\r\n    right: 5%;\r\n    top: 5%;\r\n  }\r\n}\r\n", ""]);
	
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
	var name_guard_1 = __webpack_require__(56);
	var name_filter_service_1 = __webpack_require__(52);
	var name_filter_component_1 = __webpack_require__(57);
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
	            name_filter_component_1.NameFilterComponent
	        ],
	        providers: [
	            name_service_1.NameService,
	            name_filter_service_1.NameFilterService,
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

	module.exports = "\r\n<h1>Names Details</h1>\r\n\r\n<div class=\"card\" *ngIf=\"name\">\r\n  <div class=\"card-block\">\r\n    <div class=\"form-group\">\r\n      <label for=\"addName\">Name</label>\r\n      <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addTags\">Tags</label>\r\n      <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n      <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, engineer</i></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addFeatures\">Features</label>\r\n      <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n      <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"uploadPhoto\">Upload Photo</label>\r\n      <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not yet Enabled\" disabled>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <a href=\"\" [routerLink]=\"['/Home']\">\r\n        <button class=\"btn btn-default\">\r\n          Cancel\r\n        </button>\r\n      </a>\r\n      <span class=\"pull-right\">&nbsp;</span>\r\n      <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"toggleModal()\">\r\n        Delete\r\n      </button>\r\n      <button class=\"btn btn-primary\" (click)=\"updateName()\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" *ngIf='error'>\r\n  <div class=\"card-block\">\r\n    <h4>Error</h4>\r\n    <p>\r\n      {{ error }}\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showModal\">\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Confirmation</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Are you sure you want to delete this name {{ name.name }}?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button id=\"btnConfirm\" type=\"button\" class=\"btn btn-danger\" (click)=\"deleteName()\" data-dismiss=\"modal\">Delete</button>\r\n          <button id=\"btnCancel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

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
	var name_filter_service_1 = __webpack_require__(52);
	var NameListComponent = (function () {
	    function NameListComponent(nameService, filterService) {
	        this.nameService = nameService;
	        this.filterService = filterService;
	        this.showAddForm = false;
	        this.showAddFormQuick = true;
	    }
	    NameListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.nameService.getNames()
	            .subscribe(function (names) {
	            _this.names = names;
	            _this.filteredNames = names;
	        }, // This is like a promise - triggered when service responds with result
	        function (// This is like a promise - triggered when service responds with result
	            error) { return _this.error = error; });
	        this.filteredNames = this.names;
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
	    NameListComponent.prototype.clickConvertContact = function () {
	        alert("Sorry this feature is not yet available");
	        return false;
	    };
	    NameListComponent.prototype.filterChanged = function (searchText) {
	        this.filteredNames = this.filterService.filter(searchText, ['name', 'tags', 'features'], this.names);
	    };
	    NameListComponent.prototype.clearAddForm = function () {
	        this.name = {
	            id: 0,
	            url: "",
	            name: "",
	            tags: [],
	            features: []
	        };
	        this.nameblock = "";
	    };
	    return NameListComponent;
	}());
	NameListComponent = __decorate([
	    core_1.Component({
	        selector: 'name-list',
	        template: __webpack_require__(53),
	        styles: [__webpack_require__(54)],
	        providers: [name_service_1.NameService]
	    }),
	    __metadata("design:paramtypes", [name_service_1.NameService, name_filter_service_1.NameFilterService])
	], NameListComponent);
	exports.NameListComponent = NameListComponent;


/***/ },
/* 52 */
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
	var NameFilterService = (function () {
	    function NameFilterService() {
	        console.log('Created an instance of FilterTextService');
	    }
	    NameFilterService.prototype.filter = function (data, props, originalList) {
	        var filteredList;
	        if (data && props && originalList) {
	            data = data.toLowerCase();
	            var filtered = originalList.filter(function (item) {
	                var match = false;
	                for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
	                    var prop = props_1[_i];
	                    if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
	                        match = true;
	                        break;
	                    }
	                }
	                ;
	                return match;
	            });
	            filteredList = filtered;
	        }
	        else {
	            filteredList = originalList;
	        }
	        return filteredList;
	    };
	    return NameFilterService;
	}());
	NameFilterService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], NameFilterService);
	exports.NameFilterService = NameFilterService;


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<article class=\"template animated slideInRight\">\r\n  <h2>List of Names</h2>\r\n  <div id=\"addButton\" *ngIf=\"!showAddForm\">\r\n    <button class=\"btn btn-primary\" (click)=\"toggleAddForm()\">\r\n      Add\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"showAddForm\">\r\n    <div class=\"card-block\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-secondary pull-right\" (click)=\"showAddForm = !showAddForm\">\r\n          Cancel\r\n        </button>\r\n        <span class=\"pull-right\">&nbsp;</span>\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"saveAddForm()\">\r\n          Save\r\n        </button>\r\n      </div>\r\n      <div id=\"addFormQuick\" *ngIf=\"showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addQuick\">Quick Add </label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Full Form</a>\r\n          <textarea id=\"addQuick\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"nameblock\"></textarea>\r\n          <small class=\"text-warning\">\r\n            Enter Name, Tags and Features on each line. Multiple tags and features separated by commas. Example:<br />\r\n            <i>John Lee</i><br />\r\n            <i>work, engineer</i><br />\r\n            <i>skinny, asian, glasses</i><br />\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div id=\"addForm\" *ngIf=\"!showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addName\">Name</label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Quick Form</a>\r\n          <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addTags\">Tags</label>\r\n          <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n          <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, engineer</i></small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addFeatures\">Features</label>\r\n          <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n          <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"uploadPhoto\">Upload Photo</label>\r\n          <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not Enabled\" disabled>\r\n        </div>\r\n      </div>\r\n      <div id=\"error\" *ngIf='error'>\r\n        <h4>Error</h4>\r\n        <p>\r\n          {{ error }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <name-filter (changed)=\"filterChanged($event)\"></name-filter>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf='names && names.length'>\r\n    <div class=\"card-block\" *ngFor=\"let name of filteredNames\">\r\n      <img class=\"card-image thumbnail pull-left\" src=\"/dist/main/images/lego03.png\" alt=\"Person Photo\">\r\n      <a href=\"\" [routerLink]=\"['/Home', name.id]\">\r\n        <button class=\"btn btn-default pull-right\">\r\n          Edit\r\n        </button>\r\n\r\n      </a>\r\n      <h4 class=\"card-title\">{{ name.name }}</h4>\r\n\r\n      <hr class=\"card-spacer\" />\r\n\r\n      <p class=\"card-text\">\r\n        <strong>Tags: </strong>\r\n        <span *ngFor=\"let tag of name.tags\">{{ tag }}, </span>\r\n      </p>\r\n      <p class=\"card-text\">\r\n        <strong>Features: </strong>\r\n        <span *ngFor=\"let feature of name.features\">{{ feature }}, </span>\r\n      </p>\r\n      <div class=\"card-footer\">\r\n        <small class=\"text-muted\"><a href=\"\" title=\"This Feature not yet Available\" (click)=\"clickConvertContact()\">Convert To Contact</a></small>\r\n        <small class=\"text-muted\"></small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</article>\r\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(55);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.card {\r\n  border: none;\r\n  padding: 0px;\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n.card-block {\r\n  border: 1px solid #cfcfcf;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card-block:hover {\r\n  background-color: #dff3ff;\r\n}\r\n\r\n.pull-left {\r\n  margin: 0px;\r\n}\r\n\r\n.card-image {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.card-title {\r\n  margin-left: 60px;\r\n}\r\n\r\nstrong {\r\n  color: #585858;\r\n}\r\n", ""]);
	
	// exports


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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var NameFilterComponent = (function () {
	    function NameFilterComponent() {
	        this.changed = new core_1.EventEmitter();
	    }
	    NameFilterComponent.prototype.clear = function () {
	        this.filter = '';
	    };
	    NameFilterComponent.prototype.filterChanged = function (event) {
	        event.preventDefault();
	        this.changed.emit(this.filter);
	    };
	    return NameFilterComponent;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], NameFilterComponent.prototype, "changed", void 0);
	NameFilterComponent = __decorate([
	    core_1.Component({
	        selector: 'name-filter',
	        template: __webpack_require__(58)
	    }),
	    __metadata("design:paramtypes", [])
	], NameFilterComponent);
	exports.NameFilterComponent = NameFilterComponent;


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group add-on\">\r\n  <input hidden=\"filterText\" class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)]=\"filter\" (keyup)=\"filterChanged($event)\">\r\n  <div class=\"input-group-btn\">\r\n    <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\r\n  </div>\r\n</div>"

/***/ },
/* 59 */
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
	        template: __webpack_require__(60),
	        styles: [__webpack_require__(61)]
	    })
	], AboutComponent);
	exports.AboutComponent = AboutComponent;


/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<article class=\"template animated slideInRight\">\r\n  <h2>About</h2>\r\n  <p>\r\n    EREUM is in beta phase and not officially released.\r\n  </p>\r\n  <table class=\"table table-hover\">\r\n    <tr>\r\n      <th>Version</th>\r\n      <td>0.1</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Release Date</th>\r\n      <td>September 2016</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Initial Release Expected</th>\r\n      <td>Q1 2017</td>\r\n    </tr>\r\n  </table>\r\n  <div id=\"btnLogout\">\r\n    <a href=\"Home/Logout\">\r\n      <button class=\"btn btn-warning\">\r\n        Logout\r\n      </button>\r\n    </a>\r\n  </div>\r\n</article>\r\n"

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(62);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 63 */
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
	        template: __webpack_require__(64),
	        styles: [__webpack_require__(65)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n<spinner></spinner>"

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(66);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n\r\n.mdl-layout__header {\r\n  position: fixed;\r\n  background-color: #222;\r\n}\r\n.mdl-layout__content {\r\n  margin-top: 68px;\r\n}\r\n\r\n.nav-link {\r\n  padding: 0 1em;\r\n  width: 100px;\r\n  color: rgba(255,255,255,.6);\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link.router-link-active {\r\n  color: rgba(255,255,255, 1);\r\n}\r\n\r\n.nav-link.router-link-active::after {\r\n    height: 3px;\r\n    width: 100%;\r\n    display: block;\r\n    content: \" \";\r\n    bottom: 0;\r\n    left: 0;\r\n    position: inherit;\r\n    background: rgb(255,64,129);\r\n}\r\n\r\n\r\n.mdl-layout__header-row {\r\n    height: 56px;\r\n    padding: 0 16px 0 72px;\r\n    padding-left: 8px;\r\n    background-color: #222;\r\n}\r\n\r\n.page-content {\r\n  margin: 2em;\r\n}\r\n\r\narticle.template {\r\n  opacity: 0;\r\n  -webkit-transition: opacity 400ms ease-in;\r\n  -moz-transition: opacity 400ms ease-in;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.animated {\r\n  -webkit-animation-duration: 400ms;\r\n  animation-duration: 400ms;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n#reset-button {\r\n  position: fixed;\r\n  right: 2em;\r\n  top: 1em;\r\n}\r\n\r\n#spinner {\r\n  border-width: 8em;\r\n  position: fixed;\r\n  top: 20%;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -70px;\r\n  z-index: 9999;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  #reset-button {\r\n    display: none\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWVlZTE4ZjI2MDlmODVlZTdjNDEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvY29yZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvcnhqcy1leHRlbnNpb25zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9leGNlcHRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzRkYjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzPzg3MjciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5jc3M/MDllZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcz84NjRmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWZpbHRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5jc3M/N2UzOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZmlsdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZmlsdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzPzk2YWYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzPzZjMmEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2QsNkZBQTZGO2lCQUM3Riw2REFBNkQ7aUJBQzdELFFBQVEsRUFBRSxtRUFBbUU7Y0FDaEY7YUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2lCQUN0RCw2RUFBNkU7aUJBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUM7VUFDSixDQUFDLENBQUM7U0FFSCxNQUFNLENBQUMsV0FB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QixLQUFLLG1CQUFtQixxQkFBcUIsbUJBQW1CLGtDQUFrQyx5QkFBeUIsNEJBQTRCLEtBQUssc0NBQXNDLGtDQUFrQyxLQUFLLDZDQUE2QyxvQkFBb0Isb0JBQW9CLHVCQUF1Qix1QkFBdUIsa0JBQWtCLGdCQUFnQiwwQkFBMEIsb0NBQW9DLEtBQUsscUNBQXFDLHFCQUFxQiwrQkFBK0IsMEJBQTBCLCtCQUErQixLQUFLLHVCQUF1QixrQkFBa0IsS0FBSywwQkFBMEIsaUJBQWlCLGdEQUFnRCw2Q0FBNkMsd0NBQXdDLEtBQUssbUJBQW1CLHdDQUF3QyxnQ0FBZ0Msd0NBQXdDLGdDQUFnQyxLQUFLLHVCQUF1QixzQkFBc0IsaUJBQWlCLGVBQWUsS0FBSyxrQkFBa0Isd0JBQXdCLHNCQUFzQixlQUFlLGdCQUFnQix3QkFBd0IseUJBQXlCLG9CQUFvQixLQUFLLG1DQUFtQyxxQkFBcUIsNEJBQTRCLEtBQUs7O0FBRTNxRCIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDllZWUxOGYyNjA5Zjg1ZWU3YzQxIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hbWVNb2R1bGUgfSBmcm9tICcuL25hbWVzL25hbWUubW9kdWxlJztcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcbiAgICBOYW1lTW9kdWxlLFxyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdIb21lJyxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL25hbWVzL25hbWUubW9kdWxlI05hbWVNb2R1bGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnQWJvdXQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIHJlZGlyZWN0VG86ICdIb21lJyxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgICB9LCAvLyBnZW5lcmljIHJlZGlyZWN0IFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJyoqJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnSG9tZScsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgICAgfSAvLyBhbnl0aGluZyBub3QgbWF0Y2ggcmVkaXJlY3QgXHJcbiAgICBdKSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgQWJvdXRDb21wb25lbnRcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCAnLi9yeGpzLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XHJcbmltcG9ydCB7IEV4Y2VwdGlvblNlcnZpY2UgfSBmcm9tICcuL2V4Y2VwdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUb2FzdE1vZHVsZSB9IGZyb20gJy4vdG9hc3QvdG9hc3QubW9kdWxlJztcclxuXHJcbi8vIFRoaXMgbW9kdWxlIGltcG9ydHMgY29yZSBtb2R1bGVzIHRoYXQgc2hvdWxkIGJlIHVzZWQgYWNyb3NzIHRoZSBlbnRpcmUgYXBwbGljYXRpb25cclxuLy8gVGhlc2UgYXJlIHNpbmdsZXRvbiBtb2R1bGVzLCBndWFyZGVkIGJ5IHRoZSB0aHJvd0lmQWxyZWFkeUxvYWRlZCBmdW5jdGlvbiBcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGUsXHJcbiAgICBTcGlubmVyTW9kdWxlLCBUb2FzdE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLFxyXG4gICAgU3Bpbm5lck1vZHVsZSwgVG9hc3RNb2R1bGUsIE5hdk1lbnVDb21wb25lbnRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW05hdk1lbnVDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRXhjZXB0aW9uU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG5cclxuICAvLyBMb2FkcyB0aGlzIG1vZHVsZSBvbmx5IGlmIG5vdCBhbHJlYWR5IGxvYWRlZFxyXG4gIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGUpIHtcclxuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ0NvcmVNb2R1bGUnKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL2NvcmUubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoZXNlIGFyZSBjb21tb24gcnhqcyBleHRlbnNpb25zXHJcbi8vIFRoaXMgaXMgcGFydCBvZiBjb3JlIG1vZHVsZSBzbyBpdCBpcyBhdmFpbGFibGUgZm9yIHdob2xlIGFwcFxyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maW5hbGx5JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbVByb21pc2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvcnhqcy1leHRlbnNpb25zLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kZWxheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RlbGF5XCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZmluYWxseVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvZnJvbVByb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvdGhyb3dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGU6IGFueSwgbW9kdWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke21vZHVsZU5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLiBJbXBvcnQgQ29yZSBtb2R1bGVzIGluIHRoZSBBcHBNb2R1bGUgb25seS5gKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvblNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UpIHsgfVxyXG5cclxuICBjYXRjaEJhZFJlc3BvbnNlOiAoZXJyb3JSZXNwb25zZTogYW55KSA9PiBPYnNlcnZhYmxlPGFueT4gPSAoZXJyb3JSZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICBsZXQgcmVzID0gPFJlc3BvbnNlPmVycm9yUmVzcG9uc2U7XHJcbiAgICBsZXQgZXJyID0gcmVzLmpzb24oKTtcclxuICAgIGxldCBlbXNnID0gZXJyID9cclxuICAgICAgKGVyci5lcnJvciA/IGVyci5lcnJvciA6IEpTT04uc3RyaW5naWZ5KGVycikpIDpcclxuICAgICAgKHJlcy5zdGF0dXNUZXh0IHx8ICd1bmtub3duIGVycm9yJyk7XHJcbiAgICB0aGlzLnRvYXN0U2VydmljZS5hY3RpdmF0ZShgRXJyb3IgLSBCYWQgUmVzcG9uc2UgLSAke2Vtc2d9YCk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihmYWxzZSk7XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvZXhjZXB0aW9uLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdE1lc3NhZ2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZ1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgdG9hc3RTdWJqZWN0ID0gbmV3IFN1YmplY3Q8VG9hc3RNZXNzYWdlPigpO1xyXG4gIHRvYXN0U3RhdGUgPSB0aGlzLnRvYXN0U3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgLy8gQ3JlYXRlcyBUb2FzdFNlcnZpY2UgaWYgbm90IGFscmVhZHkgZXhpc3RcclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpb3I6IFRvYXN0U2VydmljZSkge1xyXG4gICAgaWYgKHByaW9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBzZXJ2aWNlIGFscmVhZHkgZXhpc3RzJyk7XHJcbiAgICAgIHJldHVybiBwcmlvcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVkIHRvYXN0IHNlcnZpY2UnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdyB0aGUgdG9hc3QgbWVzc2FnZVxyXG4gIGFjdGl2YXRlKG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMudG9hc3RTdWJqZWN0Lm5leHQoPFRvYXN0TWVzc2FnZT57IG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOYXZNZW51U2VydmljZSB9IGZyb20gJy4vbmF2bWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuL25hdm1lbnUubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldLFxyXG4gICAgcHJvdmlkZXJzOiBbTmF2TWVudVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c2VyOiBJZGVudGl0eTtcclxuICBlcnJvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmF2bWVudVNlcnZpY2U6IE5hdk1lbnVTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5hdm1lbnVTZXJ2aWNlLmdldElkZW50aXR5KClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gc3VjY2VzcztcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSA8YW55PmVycm9yO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuL25hdm1lbnUubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgYXBpVXJsID0gJ0hvbWUvSWRlbnRpdHknO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBnZXRJZGVudGl0eSgpOiBPYnNlcnZhYmxlPElkZW50aXR5PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxJZGVudGl0eT5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0lkZW50aXR5OiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgLy8gVE9ETyAtIHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xyXG4gICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xyXG4gICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5FUkVVTSA8c21hbGw+diAwLjE8L3NtYWxsPjwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ib29rJz48L3NwYW4+IE5hbWVzXFxyXFxuICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL0Fib3V0J11cXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24nPjwvc3Bhbj4gQWJvdXRcXHJcXG4gICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwidXNlclxcXCIgKm5nSWY9XFxcInVzZXJcXFwiPlxcclxcbiAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FyblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInVzZXJMYWJlbFxcXCI+TG9nZ2VkIGluIGFzOiA8L3NwYW4+e3sgdXNlci5uYW1lIH19XFxyXFxuICAgIDwvc21hbGw+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcclxcbmxpLmxpbmstYWN0aXZlIGEsXFxyXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXHJcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51c2VyIHtcXHJcXG4gIGNvbG9yOiAjOWQ5ZDlkO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHRvcDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlckxhYmVsIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXHJcXG4gIC51c2VyIHtcXHJcXG4gIGNvbG9yOiAjOWQ5ZDlkO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gICAgdG9wOiA5NSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlckxhYmVsIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLW5hdiB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhci1oZWFkZXIge1xcclxcbiAgICBmbG9hdDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciB1bCB7XFxyXFxuICAgIGZsb2F0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciBsaSB7XFxyXFxuICAgIGZsb2F0OiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIG1hcmdpbjogNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgICAubmF2YmFyIGxpIGEge1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgYSB7XFxyXFxuICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuaW1wb3J0IHsgU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vc3Bpbm5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1NwaW5uZXJDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NwaW5uZXJDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1NwaW5uZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lck1vZHVsZSB7XHJcblxyXG4gIC8vIE9ubHkgbG9hZCB0aGlzIG1vZHVsZSBpZiBub3QgYWxyZWFkeSBsb2FkZWRcclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBTcGlubmVyTW9kdWxlKSB7XHJcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdTcGlubmVyTW9kdWxlJylcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbmltcG9ydCB7IFNwaW5uZXJTdGF0ZSwgU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuL3NwaW5uZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NwaW5uZXInLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL3NwaW5uZXIuY29tcG9uZW50LmNzcycpXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAvLyBTdWJzY3JpYmUgdG8gdGhlIHNwaW5uZXIgc3RhdGUgaW4gU3Bpbm5lclNlcnZpY2UsIHRoaXMgc2V0cyB0aGUgdmlzaWJsZSBmbGFnXHJcbiAgcHJpdmF0ZSBzcGlubmVyU3RhdGVDaGFuZ2VkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Bpbm5lclNlcnZpY2U6IFNwaW5uZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNwaW5uZXJTdGF0ZUNoYW5nZWQgPSB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNwaW5uZXJTdGF0ZVxyXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZTogU3Bpbm5lclN0YXRlKSA9PiB0aGlzLnZpc2libGUgPSBzdGF0ZS5zaG93KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zcGlubmVyU3RhdGVDaGFuZ2VkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGlubmVyU3RhdGUge1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNwaW5uZXJTdWJqZWN0ID0gbmV3IFN1YmplY3Q8U3Bpbm5lclN0YXRlPigpO1xyXG5cclxuICBzcGlubmVyU3RhdGUgPSB0aGlzLnNwaW5uZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpb3I6IFNwaW5uZXJTZXJ2aWNlKSB7XHJcbiAgICBpZiAocHJpb3IpIHsgcmV0dXJuIHByaW9yOyB9XHJcbiAgfVxyXG5cclxuICBzaG93KCkgeyAvLyBTZXRzIHRoZSBzcGlubmVyIHN0YXRlIHRvIHRydWVcclxuICAgIHRoaXMuc3Bpbm5lclN1YmplY3QubmV4dCg8U3Bpbm5lclN0YXRlPnsgc2hvdzogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7IC8vIFNldHMgdGhlIHNwaW5uZXIgc3RhdGUgdG8gZmFsc2VcclxuICAgIHRoaXMuc3Bpbm5lclN1YmplY3QubmV4dCg8U3Bpbm5lclN0YXRlPnsgc2hvdzogZmFsc2UgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiAqbmdJZj1cXFwidmlzaWJsZVxcXCI+XFxyXFxuICA8aSBjbGFzcz1cXFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTN4IGZhLWZ3XFxcIj48L2k+XFxyXFxuICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+TG9hZGluZy4uLjwvc3Bhbj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3Bpbm5lciB7XFxyXFxuICBjb2xvcjogIzdjN2E3YztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiA1JTtcXHJcXG4gIHRvcDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5zcGlubmVyIHtcXHJcXG4gICAgY29sb3I6ICM3YzdhN2M7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDUlO1xcclxcbiAgICB0b3A6IDUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3Quc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtUb2FzdENvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1RvYXN0U2VydmljZV0gLy8gTWFrZXMgdGhlIFRvYXN0U2VydmljZSBhdmFpbGFibGUgZm9yIGluamVjdGlvblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RNb2R1bGUge1xyXG5cclxuICAvLyBPbmx5IGxvYWQgdGhpcyBtb2R1bGUgaWYgbm90IGFscmVhZHkgbG9hZGVkXHJcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVG9hc3RNb2R1bGUpIHtcclxuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ1RvYXN0TW9kdWxlJylcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0Lm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdG9yeS10b2FzdCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnKSxcclxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL3RvYXN0LmNvbXBvbmVudC5jc3MnKV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBwcml2YXRlIGRlZmF1bHRzID0ge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgbWVzc2FnZTogJ01heSB0aGUgRm9yY2UgYmUgd2l0aCBZb3UnXHJcbiAgfTtcclxuICBwcml2YXRlIHRvYXN0RWxlbWVudDogYW55O1xyXG4gIHByaXZhdGUgdG9hc3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UpIHtcclxuICAgIHRoaXMudG9hc3RTdWJzY3JpcHRpb24gPSB0aGlzLnRvYXN0U2VydmljZS50b2FzdFN0YXRlLnN1YnNjcmliZSgodG9hc3RNZXNzYWdlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBhY3Rpdml0aW5nIHRvYXN0OiAke3RvYXN0TWVzc2FnZS5tZXNzYWdlfWApXHJcbiAgICAgIHRoaXMuYWN0aXZhdGUodG9hc3RNZXNzYWdlLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZShtZXNzYWdlID0gdGhpcy5kZWZhdWx0cy5tZXNzYWdlLCB0aXRsZSA9IHRoaXMuZGVmYXVsdHMudGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50b2FzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QnKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy50b2FzdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlKTtcclxuICAgIHRoaXMudG9hc3RFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgdGhpcy50b2FzdEVsZW1lbnQuc3R5bGUuekluZGV4ID0gOTk5OTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGUoKSwgMjUwMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGUoKSB7XHJcbiAgICB0aGlzLnRvYXN0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudG9hc3RFbGVtZW50LnN0eWxlLnpJbmRleCA9IDAsIDQwMCk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJ0b2FzdFxcXCIgY2xhc3M9XFxcInRvYXN0LWNvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJ0b2FzdC1jYXJkIG1kbC1zaGFkb3ctLTE2ZHBcXFwiPlxcclxcbiAgICA8aDUgY2xhc3M9XFxcInRvYXN0LXRpdGxlXFxcIj57e3RpdGxlfX08L2g1PlxcclxcbiAgICA8cCBjbGFzcz1cXFwidG9hc3QtbWVzc2FnZVxcXCI+e3ttZXNzYWdlfX08L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90b2FzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b2FzdC1jb250YWluZXIge1xcclxcbiAgLyotd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBtYXJnaW4sIGJvcmRlci1yYWRpdXM7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgbWFyZ2luLCBib3JkZXItcmFkaXVzO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjBzO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjBzO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7Ki9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi50b2FzdC1jb250YWluZXIgPiAqIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvYXN0LWNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjA2MjkyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw1OCwxODMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLDEwOSwyNTQpOyovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDY0LDEyOSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50b2FzdC1jYXJkIC50b2FzdC1tZXNzYWdlIHtcXHJcXG4gIG1hcmdpbjogMGVtIDJlbSAxZW0gMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9hc3QtY2FyZCAudG9hc3QtdGl0bGUge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIG1hcmdpbjogMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBOYW1lRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9uYW1lLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYW1lTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbmFtZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hbWVTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYW1lR3VhcmQgfSBmcm9tICcuL25hbWUuZ3VhcmQnO1xyXG5pbXBvcnQgeyBOYW1lRmlsdGVyU2VydmljZSB9IGZyb20gJy4vbmFtZS1maWx0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hbWVGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25hbWUtZmlsdGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgLy8gaW1wb3J0IG1vZHVsZXNcclxuICAgIFVuaXZlcnNhbE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFsgLy8gdGhpcyBpcyBmb3JDaGlsZCwgbm90IGZvclJvb3QsIHNpbmNlIG5vdCByb290IG1vZHVsZVxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ0hvbWUnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTmFtZUxpc3RDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdIb21lLzppZCcsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOYW1lR3VhcmRdLCAvLyBSb3V0ZXIgR3VhcmRcclxuICAgICAgICBjb21wb25lbnQ6IE5hbWVEZXRhaWxDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyAvLyBjb21wb25lbnRzIGFuZCBmaWx0ZXJzXHJcbiAgICBOYW1lTGlzdENvbXBvbmVudCxcclxuICAgIE5hbWVEZXRhaWxDb21wb25lbnQsXHJcbiAgICBOYW1lRmlsdGVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFsgLy8gc2VydmljZSBwcm92aWRlcnNcclxuICAgIE5hbWVTZXJ2aWNlLFxyXG4gICAgTmFtZUZpbHRlclNlcnZpY2UsXHJcbiAgICBOYW1lR3VhcmQgLy8gR3VhcmQgc2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVNb2R1bGUgeyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL3N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XHJcbmltcG9ydCB7IE5hbWVTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduYW1lLWRldGFpbCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmFtZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hbWUtZGV0YWlsLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgcHJvdmlkZXJzOiBbTmFtZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XHJcbiAgbmFtZTogSU5hbWU7XHJcbiAgZXJyb3I6IHN0cmluZztcclxuICBzaG93TW9kYWw6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBuYW1lU2VydmljZTogTmFtZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgdGhpcy5nZXROYW1lKGlkKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZShpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmdldE5hbWUoaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgbmFtZSA9PiB0aGlzLm5hbWUgPSBuYW1lLFxyXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYW1lKCk6IHZvaWQge1xyXG4gICAgLy8gQ29udmVydCB0YWdzIGFuZCBmZWF0dXJlcyB0byBzdHJpbmcgYXJyYXlcclxuICAgIGxldCB0YWdzID0gdGhpcy5uYW1lLnRhZ3MudG9TdHJpbmcoKTtcclxuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMubmFtZS5mZWF0dXJlcy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5uYW1lLnRhZ3MgPSB0YWdzLnNwbGl0KFwiLFwiKS5tYXAoRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsIFN0cmluZy5wcm90b3R5cGUudHJpbSk7XHJcbiAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBmZWF0dXJlcy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIG5hbWUgdXBkYXRlIHNlcnZpY2VcclxuICAgIHRoaXMubmFtZVNlcnZpY2UudXBkYXRlTmFtZSh0aGlzLm5hbWUpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIGlmIChzdWNjZXNzICE9IHRoaXMubmFtZS5pZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiAtIHJlY2lldmVkIGRpZmZlcmVudCBuYW1lIGlkIGFmdGVyIHVwZGF0ZSBjYWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9Ib21lJ10pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3I7XHJcbiAgICAgIH0pO1xyXG4gIH0gXHJcblxyXG4gIHRvZ2dsZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93TW9kYWwgPSAhdGhpcy5zaG93TW9kYWw7XHJcbiAgfVxyXG5cclxuICBkZWxldGVOYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uYW1lU2VydmljZS5kZWxldGVOYW1lKHRoaXMubmFtZS5pZClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIC0gcmVjaWV2ZWQgZmFsc2UgcmVzdWx0IGFmdGVyIGRlbGV0aW9uIGNhbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL0hvbWUnXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yID0gPGFueT5lcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XHJcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYW1lU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnYXBpL05hbWVzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNwaW5uZXJTZXJ2aWNlOiBTcGlubmVyU2VydmljZSkgeyB9IFxyXG5cclxuICBnZXROYW1lKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPElOYW1lPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8SU5hbWU+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdHZXROYW1lOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lcygpOiBPYnNlcnZhYmxlPElOYW1lW10+IHtcclxuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuYXBpVXJsKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8SU5hbWVbXT5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0dldE5hbWVzOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zcGlubmVyU2VydmljZS5oaWRlKCkpO1xyXG4gIH1cclxuICBcclxuICBhZGROYW1lKG5hbWU6IElOYW1lKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShuYW1lKTtcclxuXHJcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3coKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPG51bWJlcj5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0FkZE5hbWU6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNwaW5uZXJTZXJ2aWNlLmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYW1lKG5hbWU6IElOYW1lKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShuYW1lKTtcclxuXHJcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3coKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpVXJsICsgXCIvXCIgKyBuYW1lLmlkLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8bnVtYmVyPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnVXBkYXRlTmFtZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU5hbWUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5zaG93KCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFwaVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxib29sZWFuPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnRGVsZXRlTmFtZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAvLyBUT0RPIC0gdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgIGxldCBlcnJNc2c6IHN0cmluZztcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XHJcbiAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLnNlcnZpY2UudHMiLCJleHBvcnQgKiBmcm9tICcuL3J4anMtZXh0ZW5zaW9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhjZXB0aW9uLnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi90b2FzdC90b2FzdC5zZXJ2aWNlJztcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXHJcXG48aDE+TmFtZXMgRGV0YWlsczwvaDE+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nSWY9XFxcIm5hbWVcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZE5hbWVcXFwiPk5hbWU8L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCBpZD1cXFwiYWRkTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUubmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZFRhZ3NcXFwiPlRhZ3M8L2xhYmVsPlxcclxcbiAgICAgIDxpbnB1dCBpZD1cXFwiYWRkVGFnc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUudGFnc1xcXCIgLz5cXHJcXG4gICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+QWRkIG11bHRpcGxlIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hLiBFeGFtcGxlOiA8aT53b3JrLCBlbmdpbmVlcjwvaT48L3NtYWxsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkRmVhdHVyZXNcXFwiPkZlYXR1cmVzPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZEZlYXR1cmVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS5mZWF0dXJlc1xcXCIgLz5cXHJcXG4gICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+QWRkIG11bHRpcGxlIGZlYXR1cmVzIHNlcGFyYXRlZCBieSBjb21tYS4gRXhhbXBsZTogPGk+c2tpbm55LCBhc2lhbiwgZ2xhc3NlczwvaT48L3NtYWxsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwidXBsb2FkUGhvdG9cXFwiPlVwbG9hZCBQaG90bzwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJ1cGxvYWRQaG90b1xcXCIgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbC1maWxlXFxcIiB0aXRsZT1cXFwiVGhpcyBGZWF0dXJlIG5vdCB5ZXQgRW5hYmxlZFxcXCIgZGlzYWJsZWQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8YSBocmVmPVxcXCJcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvSG9tZSddXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgIENhbmNlbFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9hPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj4mbmJzcDs8L3NwYW4+XFxyXFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgZGF0YS10YXJnZXQ9XFxcIiNteU1vZGFsXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNb2RhbCgpXFxcIj5cXHJcXG4gICAgICAgIERlbGV0ZVxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidXBkYXRlTmFtZSgpXFxcIj5cXHJcXG4gICAgICAgIFNhdmVcXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiAqbmdJZj0nZXJyb3InPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgIDxoND5FcnJvcjwvaDQ+XFxyXFxuICAgIDxwPlxcclxcbiAgICAgIHt7IGVycm9yIH19XFxyXFxuICAgIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgKm5nSWY9XFxcInNob3dNb2RhbFxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwibXlNb2RhbFxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXHJcXG5cXHJcXG4gICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29uZmlybWF0aW9uPC9oND5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBuYW1lIHt7IG5hbWUubmFtZSB9fT88L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bkNvbmZpcm1cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVOYW1lKClcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJidG5DYW5jZWxcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmNhcmQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ibG9jayB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wdWxsLWxlZnQge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiAjNTg1ODU4O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9zdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgSU5hbWUgfSBmcm9tICcuL25hbWUubW9kZWwnO1xyXG5pbXBvcnQgeyBOYW1lU2VydmljZSB9IGZyb20gJy4vbmFtZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmFtZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL25hbWUtZmlsdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYW1lRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uYW1lLWZpbHRlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduYW1lLWxpc3QnLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hbWUtbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vbmFtZS1saXN0LmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgcHJvdmlkZXJzOiBbTmFtZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZmlsdGVyZWROYW1lczogSU5hbWVbXTtcclxuICBuYW1lczogSU5hbWVbXTtcclxuICBuYW1lOiBJTmFtZTtcclxuICBuYW1lYmxvY2s6IHN0cmluZztcclxuICBlcnJvcjogc3RyaW5nO1xyXG4gIHNob3dBZGRGb3JtOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0FkZEZvcm1RdWljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZVNlcnZpY2U6IE5hbWVTZXJ2aWNlLCBwcml2YXRlIGZpbHRlclNlcnZpY2U6IE5hbWVGaWx0ZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7IC8vIGZyb20gT25Jbml0IGludGVyZmFjZVxyXG4gICAgdGhpcy5uYW1lU2VydmljZS5nZXROYW1lcygpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIG5hbWVzID0+IHtcclxuICAgICAgICB0aGlzLm5hbWVzID0gbmFtZXM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZE5hbWVzID0gbmFtZXM7XHJcbiAgICAgIH0sIC8vIFRoaXMgaXMgbGlrZSBhIHByb21pc2UgLSB0cmlnZ2VyZWQgd2hlbiBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggcmVzdWx0XHJcbiAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yKTtcclxuXHJcbiAgICB0aGlzLmZpbHRlcmVkTmFtZXMgPSB0aGlzLm5hbWVzO1xyXG4gICAgdGhpcy5jbGVhckFkZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUFkZEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dBZGRGb3JtID0gIXRoaXMuc2hvd0FkZEZvcm07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBZGRRdWljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0FkZEZvcm1RdWljayA9ICF0aGlzLnNob3dBZGRGb3JtUXVpY2s7XHJcbiAgfVxyXG5cclxuICBzYXZlQWRkRm9ybSgpOiB2b2lkIHtcclxuICAgIC8vIERldGVybWluZSB3aGljaCBmb3JtIHRvIHNhdmUgZnJvbVxyXG4gICAgaWYgKHRoaXMuc2hvd0FkZEZvcm1RdWljaykge1xyXG4gICAgICBsZXQgc3BsaXR0ZWRTdHJpbmcgPSB0aGlzLm5hbWVibG9jay5zcGxpdChcIlxcblwiKTtcclxuICAgICAgdGhpcy5uYW1lLm5hbWUgPSBzcGxpdHRlZFN0cmluZ1swXTtcclxuICAgICAgdGhpcy5uYW1lLnRhZ3MgPSBzcGxpdHRlZFN0cmluZ1sxXSA/IHNwbGl0dGVkU3RyaW5nWzFdLnNwbGl0KFwiLFwiKSA6IFtdO1xyXG4gICAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBzcGxpdHRlZFN0cmluZ1syXSA/IHNwbGl0dGVkU3RyaW5nWzJdLnNwbGl0KFwiLFwiKSA6IFtdO1xyXG4gICAgfVxyXG4gICAgLy8gVHJpbSB0aGUgdGFncyBhbmQgZmVhdHVyZXMgZmllbGRzXHJcbiAgICBsZXQgdGFncyA9IHRoaXMubmFtZS50YWdzLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLm5hbWUuZmVhdHVyZXMudG9TdHJpbmcoKTtcclxuICAgIHRoaXMubmFtZS50YWdzID0gdGFncy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG4gICAgdGhpcy5uYW1lLmZlYXR1cmVzID0gZmVhdHVyZXMuc3BsaXQoXCIsXCIpLm1hcChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgU3RyaW5nLnByb3RvdHlwZS50cmltKTtcclxuXHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmFkZE5hbWUodGhpcy5uYW1lKS5zdWJzY3JpYmUocyA9PiB7XHJcbiAgICAgIHRoaXMubmFtZXMucHVzaCh0aGlzLm5hbWUpO1xyXG4gICAgICB0aGlzLmNsZWFyQWRkRm9ybSgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUFkZEZvcm0oKTtcclxuICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tDb252ZXJ0Q29udGFjdCgpIHtcclxuICAgIGFsZXJ0KFwiU29ycnkgdGhpcyBmZWF0dXJlIGlzIG5vdCB5ZXQgYXZhaWxhYmxlXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQ2hhbmdlZChzZWFyY2hUZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbHRlcmVkTmFtZXMgPSB0aGlzLmZpbHRlclNlcnZpY2UuZmlsdGVyKHNlYXJjaFRleHQsIFsnbmFtZScsICd0YWdzJywgJ2ZlYXR1cmVzJ10sIHRoaXMubmFtZXMpO1xuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJBZGRGb3JtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uYW1lID0ge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB0YWdzOiBbXSxcclxuICAgICAgZmVhdHVyZXM6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uYW1lYmxvY2sgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYW1lRmlsdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIGFuIGluc3RhbmNlIG9mIEZpbHRlclRleHRTZXJ2aWNlJyk7XG4gIH1cblxuICBmaWx0ZXIoZGF0YTogc3RyaW5nLCBwcm9wczogQXJyYXk8c3RyaW5nPiwgb3JpZ2luYWxMaXN0OiBBcnJheTxhbnk+KSB7XG4gICAgbGV0IGZpbHRlcmVkTGlzdDogYW55W107XG4gICAgaWYgKGRhdGEgJiYgcHJvcHMgJiYgb3JpZ2luYWxMaXN0KSB7XG4gICAgICBkYXRhID0gZGF0YS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IGZpbHRlcmVkID0gb3JpZ2luYWxMaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IHByb3Agb2YgcHJvcHMpIHtcbiAgICAgICAgICBpZiAoaXRlbVtwcm9wXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihkYXRhKSA+IC0xKSB7XG4gICAgICAgICAgICBtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0pO1xuICAgICAgZmlsdGVyZWRMaXN0ID0gZmlsdGVyZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkTGlzdCA9IG9yaWdpbmFsTGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZmlsdGVyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGFydGljbGUgY2xhc3M9XFxcInRlbXBsYXRlIGFuaW1hdGVkIHNsaWRlSW5SaWdodFxcXCI+XFxyXFxuICA8aDI+TGlzdCBvZiBOYW1lczwvaDI+XFxyXFxuICA8ZGl2IGlkPVxcXCJhZGRCdXR0b25cXFwiICpuZ0lmPVxcXCIhc2hvd0FkZEZvcm1cXFwiPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInRvZ2dsZUFkZEZvcm0oKVxcXCI+XFxyXFxuICAgICAgQWRkXFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiAqbmdJZj1cXFwic2hvd0FkZEZvcm1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IHB1bGwtcmlnaHRcXFwiIChjbGljayk9XFxcInNob3dBZGRGb3JtID0gIXNob3dBZGRGb3JtXFxcIj5cXHJcXG4gICAgICAgICAgQ2FuY2VsXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj4mbmJzcDs8L3NwYW4+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgcHVsbC1yaWdodFxcXCIgKGNsaWNrKT1cXFwic2F2ZUFkZEZvcm0oKVxcXCI+XFxyXFxuICAgICAgICAgIFNhdmVcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgaWQ9XFxcImFkZEZvcm1RdWlja1xcXCIgKm5nSWY9XFxcInNob3dBZGRGb3JtUXVpY2tcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZFF1aWNrXFxcIj5RdWljayBBZGQgPC9sYWJlbD4gPGEgW2F0dHIuaHJlZl09XFxcIm51bGxcXFwiIChjbGljayk9J3RvZ2dsZUFkZFF1aWNrKCknPiBTaG93IEZ1bGwgRm9ybTwvYT5cXHJcXG4gICAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJhZGRRdWlja1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcm93cz1cXFwiM1xcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWVibG9ja1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgICAgIEVudGVyIE5hbWUsIFRhZ3MgYW5kIEZlYXR1cmVzIG9uIGVhY2ggbGluZS4gTXVsdGlwbGUgdGFncyBhbmQgZmVhdHVyZXMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gRXhhbXBsZTo8YnIgLz5cXHJcXG4gICAgICAgICAgICA8aT5Kb2huIExlZTwvaT48YnIgLz5cXHJcXG4gICAgICAgICAgICA8aT53b3JrLCBlbmdpbmVlcjwvaT48YnIgLz5cXHJcXG4gICAgICAgICAgICA8aT5za2lubnksIGFzaWFuLCBnbGFzc2VzPC9pPjxiciAvPlxcclxcbiAgICAgICAgICA8L3NtYWxsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiYWRkRm9ybVxcXCIgKm5nSWY9XFxcIiFzaG93QWRkRm9ybVF1aWNrXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGROYW1lXFxcIj5OYW1lPC9sYWJlbD4gPGEgW2F0dHIuaHJlZl09XFxcIm51bGxcXFwiIChjbGljayk9J3RvZ2dsZUFkZFF1aWNrKCknPiBTaG93IFF1aWNrIEZvcm08L2E+XFxyXFxuICAgICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUubmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZFRhZ3NcXFwiPlRhZ3M8L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZFRhZ3NcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLnRhZ3NcXFwiIC8+XFxyXFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC13YXJuaW5nXFxcIj5BZGQgbXVsdGlwbGUgdGFncyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPndvcmssIGVuZ2luZWVyPC9pPjwvc21hbGw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRGZWF0dXJlc1xcXCI+RmVhdHVyZXM8L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEZlYXR1cmVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS5mZWF0dXJlc1xcXCIgLz5cXHJcXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPnNraW5ueSwgYXNpYW4sIGdsYXNzZXM8L2k+PC9zbWFsbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVwbG9hZFBob3RvXFxcIj5VcGxvYWQgUGhvdG88L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVwbG9hZFBob3RvXFxcIiB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWZpbGVcXFwiIHRpdGxlPVxcXCJUaGlzIEZlYXR1cmUgbm90IEVuYWJsZWRcXFwiIGRpc2FibGVkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiZXJyb3JcXFwiICpuZ0lmPSdlcnJvcic+XFxyXFxuICAgICAgICA8aDQ+RXJyb3I8L2g0PlxcclxcbiAgICAgICAgPHA+XFxyXFxuICAgICAgICAgIHt7IGVycm9yIH19XFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgPG5hbWUtZmlsdGVyIChjaGFuZ2VkKT1cXFwiZmlsdGVyQ2hhbmdlZCgkZXZlbnQpXFxcIj48L25hbWUtZmlsdGVyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nSWY9J25hbWVzICYmIG5hbWVzLmxlbmd0aCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiICpuZ0Zvcj1cXFwibGV0IG5hbWUgb2YgZmlsdGVyZWROYW1lc1xcXCI+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwiY2FyZC1pbWFnZSB0aHVtYm5haWwgcHVsbC1sZWZ0XFxcIiBzcmM9XFxcIi9kaXN0L21haW4vaW1hZ2VzL2xlZ28wMy5wbmdcXFwiIGFsdD1cXFwiUGVyc29uIFBob3RvXFxcIj5cXHJcXG4gICAgICA8YSBocmVmPVxcXCJcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvSG9tZScsIG5hbWUuaWRdXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgRWRpdFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgPC9hPlxcclxcbiAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+e3sgbmFtZS5uYW1lIH19PC9oND5cXHJcXG5cXHJcXG4gICAgICA8aHIgY2xhc3M9XFxcImNhcmQtc3BhY2VyXFxcIiAvPlxcclxcblxcclxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcclxcbiAgICAgICAgPHN0cm9uZz5UYWdzOiA8L3N0cm9uZz5cXHJcXG4gICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IHRhZyBvZiBuYW1lLnRhZ3NcXFwiPnt7IHRhZyB9fSwgPC9zcGFuPlxcclxcbiAgICAgIDwvcD5cXHJcXG4gICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5cXHJcXG4gICAgICAgIDxzdHJvbmc+RmVhdHVyZXM6IDwvc3Ryb25nPlxcclxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgZmVhdHVyZSBvZiBuYW1lLmZlYXR1cmVzXFxcIj57eyBmZWF0dXJlIH19LCA8L3NwYW4+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+PGEgaHJlZj1cXFwiXFxcIiB0aXRsZT1cXFwiVGhpcyBGZWF0dXJlIG5vdCB5ZXQgQXZhaWxhYmxlXFxcIiAoY2xpY2spPVxcXCJjbGlja0NvbnZlcnRDb250YWN0KClcXFwiPkNvbnZlcnQgVG8gQ29udGFjdDwvYT48L3NtYWxsPlxcclxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj48L3NtYWxsPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvYXJ0aWNsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hbWUtbGlzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmNhcmQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ibG9jayB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJsb2NrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYzZmY7XFxyXFxufVxcclxcblxcclxcbi5wdWxsLWxlZnQge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGNvbG9yOiAjNTg1ODU4O1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCDCoGNsYXNzIE5hbWVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAvLyBUaGUgcm91dGUgb25seSBhbGxvd3MgbnVtZXJpYyBpZCBudW1iZXIgb3IgbmV3IGtleXdvcmRcclxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGlkID0gK3JvdXRlLnVybFsxXS5wYXRoO1xyXG5cclxuICAgIGlmIChpc05hTihpZCkgfHwgaWQgPCAxKSB7XHJcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9Ib21lJ10pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUuZ3VhcmQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduYW1lLWZpbHRlcicsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmFtZS1maWx0ZXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmFtZUZpbHRlckNvbXBvbmVudCB7XHJcbiAgQE91dHB1dCgpIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuXG4gIGZpbHRlcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgfVxuXG4gIGZpbHRlckNoYW5nZWQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5maWx0ZXIpO1xuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZmlsdGVyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBhZGQtb25cXFwiPlxcclxcbiAgPGlucHV0IGhpZGRlbj1cXFwiZmlsdGVyVGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCIgKGtleXVwKT1cXFwiZmlsdGVyQ2hhbmdlZCgkZXZlbnQpXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj48aSBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZmlsdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJvdXQnLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hYm91dC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7IH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGFydGljbGUgY2xhc3M9XFxcInRlbXBsYXRlIGFuaW1hdGVkIHNsaWRlSW5SaWdodFxcXCI+XFxyXFxuICA8aDI+QWJvdXQ8L2gyPlxcclxcbiAgPHA+XFxyXFxuICAgIEVSRVVNIGlzIGluIGJldGEgcGhhc2UgYW5kIG5vdCBvZmZpY2lhbGx5IHJlbGVhc2VkLlxcclxcbiAgPC9wPlxcclxcbiAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1ob3ZlclxcXCI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGg+VmVyc2lvbjwvdGg+XFxyXFxuICAgICAgPHRkPjAuMTwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGg+UmVsZWFzZSBEYXRlPC90aD5cXHJcXG4gICAgICA8dGQ+U2VwdGVtYmVyIDIwMTY8L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPkluaXRpYWwgUmVsZWFzZSBFeHBlY3RlZDwvdGg+XFxyXFxuICAgICAgPHRkPlExIDIwMTc8L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgPC90YWJsZT5cXHJcXG4gIDxkaXYgaWQ9XFxcImJ0bkxvZ291dFxcXCI+XFxyXFxuICAgIDxhIGhyZWY9XFxcIkhvbWUvTG9nb3V0XFxcIj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgTG9nb3V0XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvYT5cXHJcXG4gIDwvZGl2PlxcclxcbjwvYXJ0aWNsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYWJvdXQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxyXFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxzcGlubmVyPjwvc3Bpbm5lcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXHJcXG4gICAgLmJvZHktY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWRsLWxheW91dF9faGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcbi5tZGwtbGF5b3V0X19jb250ZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDY4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rLnJvdXRlci1saW5rLWFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluay5yb3V0ZXItbGluay1hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDY0LDEyOSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDE2cHggMCA3MnB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudCB7XFxyXFxuICBtYXJnaW46IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS50ZW1wbGF0ZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGVkIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXQtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAyZW07XFxyXFxuICB0b3A6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwaW5uZXIge1xcclxcbiAgYm9yZGVyLXdpZHRoOiA4ZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC03MHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAjcmVzZXQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=