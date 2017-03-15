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

	module.exports = "\r\n<h1>Names Details</h1>\r\n\r\n<div class=\"card\" *ngIf=\"name\">\r\n  <div class=\"card-block\">\r\n    <div class=\"form-group\">\r\n      <label for=\"addName\">Name</label>\r\n      <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addTags\">Tags</label>\r\n      <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n      <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, manager</i></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addFeatures\">Features</label>\r\n      <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n      <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"uploadPhoto\">Upload Photo</label>\r\n      <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not Enabled\" disabled>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <a href=\"\" [routerLink]=\"['/Home']\">\r\n        <button class=\"btn btn-default\">\r\n          Cancel\r\n        </button>\r\n      </a>\r\n      <span class=\"pull-right\">&nbsp;</span>\r\n      <button class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"toggleModal()\">\r\n        Delete\r\n      </button>\r\n      <button class=\"btn btn-primary\" (click)=\"updateName()\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" *ngIf='error'>\r\n  <div class=\"card-block\">\r\n    <h4>Error</h4>\r\n    <p>\r\n      {{ error }}\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showModal\">\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Confirmation</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Are you sure you want to delete this name {{ name.name }}?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button id=\"btnConfirm\" type=\"button\" class=\"btn btn-danger\" (click)=\"deleteName()\" data-dismiss=\"modal\">Delete</button>\r\n          <button id=\"btnCancel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

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

	module.exports = "<article class=\"template animated slideInRight\">\r\n  <h2>List of Names</h2>\r\n  <div id=\"addButton\" *ngIf=\"!showAddForm\">\r\n    <button class=\"btn btn-primary\" (click)=\"toggleAddForm()\">\r\n      Add\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"showAddForm\">\r\n    <div class=\"card-block\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-secondary pull-right\" (click)=\"showAddForm = !showAddForm\">\r\n          Cancel\r\n        </button>\r\n        <span class=\"pull-right\">&nbsp;</span>\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"saveAddForm()\">\r\n          Save\r\n        </button>\r\n      </div>\r\n      <div id=\"addFormQuick\" *ngIf=\"showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addQuick\">Quick Add </label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Full Form</a>\r\n          <textarea id=\"addQuick\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"nameblock\"></textarea>\r\n          <small class=\"text-warning\">\r\n            Enter Name, Tags and Features on each line. Multiple tags and features separated by commas. Example:<br />\r\n            <i>John Lee</i><br />\r\n            <i>work, manager</i><br />\r\n            <i>skinny, asian, glasses</i><br />\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div id=\"addForm\" *ngIf=\"!showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addName\">Name</label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Quick Form</a>\r\n          <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addTags\">Tags</label>\r\n          <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n          <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, manager</i></small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addFeatures\">Features</label>\r\n          <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n          <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"uploadPhoto\">Upload Photo</label>\r\n          <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not Enabled\" disabled>\r\n        </div>\r\n      </div>\r\n      <div id=\"error\" *ngIf='error'>\r\n        <h4>Error</h4>\r\n        <p>\r\n          {{ error }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <name-filter (changed)=\"filterChanged($event)\"></name-filter>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf='names && names.length'>\r\n    <div class=\"card-block\" *ngFor=\"let name of filteredNames\">\r\n      <img class=\"card-image thumbnail pull-left\" src=\"/dist/main/images/lego03.png\" alt=\"Person Photo\">\r\n      <a href=\"\" [routerLink]=\"['/Home', name.id]\">\r\n        <button class=\"btn btn-default pull-right\">\r\n          Edit\r\n        </button>\r\n      </a>\r\n      <h4 class=\"card-title\">{{ name.name }}</h4>\r\n\r\n      <hr class=\"card-spacer\" />\r\n\r\n      <p class=\"card-text\">\r\n        <strong>Tags: </strong>\r\n        <span *ngFor=\"let tag of name.tags\">{{ tag }}, </span>\r\n      </p>\r\n      <p class=\"card-text\">\r\n        <strong>Features: </strong>\r\n        <span *ngFor=\"let feature of name.features\">{{ feature }}, </span>\r\n      </p>\r\n      <div class=\"card-footer\">\r\n        <small class=\"text-muted\"></small>\r\n        <small class=\"text-muted\"></small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</article>\r\n"

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

	module.exports = "<article class=\"template animated slideInRight\">\r\n  <h2>About</h2>\r\n  <table class=\"table table-hover\">\r\n    <tr>\r\n      <th>Version</th>\r\n      <td>0.1</td>\r\n      <td>September 2016</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Authentication</th>\r\n      <td>Google</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <td>Microsoft</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <td>Facebook</td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <th></th>\r\n      <td>Twitter</td>\r\n      <td></td>\r\n    </tr>\r\n  </table>\r\n  <div id=\"btnLogout\">\r\n    <a href=\"Home/Logout\">\r\n      <button class=\"btn btn-warning\">\r\n        Logout\r\n      </button>\r\n    </a>\r\n  </div>\r\n</article>\r\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTAxZDQ0MDhkZjdjYTY5MzRkY2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvY29yZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvcnhqcy1leHRlbnNpb25zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9leGNlcHRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzRkYjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzPzg3MjciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5jc3M/MDllZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcz84NjRmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWZpbHRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5jc3M/N2UzOCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZmlsdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZmlsdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzPzk2YWYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzPzZjMmEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2QsNkZBQTZGO2lCQUM3Riw2REFBNkQ7aUJBQzdELFFBQVEsRUFBRSxtRUFBbUU7Y0FDaEY7YUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2lCQUN0RCw2RUFBNkU7aUJBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUM7VUFDSixDQUFDLENBQUM7U0FFSCxNQUFNLENBQUMsV0FB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LG9CQUFvQix1QkFBdUIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsMEJBQTBCLG9DQUFvQyxLQUFLLHFDQUFxQyxxQkFBcUIsK0JBQStCLDBCQUEwQiwrQkFBK0IsS0FBSyx1QkFBdUIsa0JBQWtCLEtBQUssMEJBQTBCLGlCQUFpQixnREFBZ0QsNkNBQTZDLHdDQUF3QyxLQUFLLG1CQUFtQix3Q0FBd0MsZ0NBQWdDLHdDQUF3QyxnQ0FBZ0MsS0FBSyx1QkFBdUIsc0JBQXNCLGlCQUFpQixlQUFlLEtBQUssa0JBQWtCLHdCQUF3QixzQkFBc0IsZUFBZSxnQkFBZ0Isd0JBQXdCLHlCQUF5QixvQkFBb0IsS0FBSyxtQ0FBbUMscUJBQXFCLDRCQUE0QixLQUFLOztBQUUzcUQiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhMDFkNDQwOGRmN2NhNjkzNGRjZiIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmUvY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYW1lTW9kdWxlIH0gZnJvbSAnLi9uYW1lcy9uYW1lLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgTmFtZU1vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnSG9tZScsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnLi9uYW1lcy9uYW1lLm1vZHVsZSNOYW1lTW9kdWxlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ0Fib3V0JyxcclxuICAgICAgICBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnSG9tZScsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgICAgfSwgLy8gZ2VuZXJpYyByZWRpcmVjdCBcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcqKicsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJ0hvbWUnLFxyXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgICAgIH0gLy8gYW55dGhpbmcgbm90IG1hdGNoIHJlZGlyZWN0IFxyXG4gICAgXSksXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIEFib3V0Q29tcG9uZW50XHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgJy4vcnhqcy1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5pbXBvcnQgeyBFeGNlcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi9leGNlcHRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcclxuaW1wb3J0IHsgVG9hc3RNb2R1bGUgfSBmcm9tICcuL3RvYXN0L3RvYXN0Lm1vZHVsZSc7XHJcblxyXG4vLyBUaGlzIG1vZHVsZSBpbXBvcnRzIGNvcmUgbW9kdWxlcyB0aGF0IHNob3VsZCBiZSB1c2VkIGFjcm9zcyB0aGUgZW50aXJlIGFwcGxpY2F0aW9uXHJcbi8vIFRoZXNlIGFyZSBzaW5nbGV0b24gbW9kdWxlcywgZ3VhcmRlZCBieSB0aGUgdGhyb3dJZkFscmVhZHlMb2FkZWQgZnVuY3Rpb24gXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLFxyXG4gICAgU3Bpbm5lck1vZHVsZSwgVG9hc3RNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJvdXRlck1vZHVsZSxcclxuICAgIFNwaW5uZXJNb2R1bGUsIFRvYXN0TW9kdWxlLCBOYXZNZW51Q29tcG9uZW50XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOYXZNZW51Q29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEV4Y2VwdGlvblNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcbiAgLy8gTG9hZHMgdGhpcyBtb2R1bGUgb25seSBpZiBub3QgYWxyZWFkeSBsb2FkZWRcclxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XHJcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdDb3JlTW9kdWxlJyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9jb3JlLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGVzZSBhcmUgY29tbW9uIHJ4anMgZXh0ZW5zaW9uc1xyXG4vLyBUaGlzIGlzIHBhcnQgb2YgY29yZSBtb2R1bGUgc28gaXQgaXMgYXZhaWxhYmxlIGZvciB3aG9sZSBhcHBcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmluYWxseSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3J4anMtZXh0ZW5zaW9ucy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWxheVwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9maW5hbGx5XCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlOiBhbnksIG1vZHVsZU5hbWU6IHN0cmluZykge1xyXG4gIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgJHttb2R1bGVOYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZC4gSW1wb3J0IENvcmUgbW9kdWxlcyBpbiB0aGUgQXBwTW9kdWxlIG9ubHkuYCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3QvdG9hc3Quc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlKSB7IH1cclxuXHJcbiAgY2F0Y2hCYWRSZXNwb25zZTogKGVycm9yUmVzcG9uc2U6IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+ID0gKGVycm9yUmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IDxSZXNwb25zZT5lcnJvclJlc3BvbnNlO1xyXG4gICAgbGV0IGVyciA9IHJlcy5qc29uKCk7XHJcbiAgICBsZXQgZW1zZyA9IGVyciA/XHJcbiAgICAgIChlcnIuZXJyb3IgPyBlcnIuZXJyb3IgOiBKU09OLnN0cmluZ2lmeShlcnIpKSA6XHJcbiAgICAgIChyZXMuc3RhdHVzVGV4dCB8fCAndW5rbm93biBlcnJvcicpO1xyXG4gICAgdGhpcy50b2FzdFNlcnZpY2UuYWN0aXZhdGUoYEVycm9yIC0gQmFkIFJlc3BvbnNlIC0gJHtlbXNnfWApO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YoZmFsc2UpO1xyXG4gIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL2V4Y2VwdGlvbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9PYnNlcnZhYmxlXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RNZXNzYWdlIHtcclxuICBtZXNzYWdlOiBzdHJpbmdcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcclxuICBwcml2YXRlIHRvYXN0U3ViamVjdCA9IG5ldyBTdWJqZWN0PFRvYXN0TWVzc2FnZT4oKTtcclxuICB0b2FzdFN0YXRlID0gdGhpcy50b2FzdFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIC8vIENyZWF0ZXMgVG9hc3RTZXJ2aWNlIGlmIG5vdCBhbHJlYWR5IGV4aXN0XHJcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaW9yOiBUb2FzdFNlcnZpY2UpIHtcclxuICAgIGlmIChwcmlvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygndG9hc3Qgc2VydmljZSBhbHJlYWR5IGV4aXN0cycpO1xyXG4gICAgICByZXR1cm4gcHJpb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlZCB0b2FzdCBzZXJ2aWNlJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNob3cgdGhlIHRvYXN0IG1lc3NhZ2VcclxuICBhY3RpdmF0ZShtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRvYXN0U3ViamVjdC5uZXh0KDxUb2FzdE1lc3NhZ2U+eyBtZXNzYWdlOiBtZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmF2TWVudVNlcnZpY2UgfSBmcm9tICcuL25hdm1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi9uYXZtZW51Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW05hdk1lbnVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdXNlcjogSWRlbnRpdHk7XHJcbiAgZXJyb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5hdm1lbnVTZXJ2aWNlOiBOYXZNZW51U2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uYXZtZW51U2VydmljZS5nZXRJZGVudGl0eSgpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlciA9IHN1Y2Nlc3M7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yID0gPGFueT5lcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi9uYXZtZW51Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdk1lbnVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaVVybCA9ICdIb21lL0lkZW50aXR5JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgZ2V0SWRlbnRpdHkoKTogT2JzZXJ2YWJsZTxJZGVudGl0eT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuYXBpVXJsKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8SWRlbnRpdHk+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdJZGVudGl0eTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgIC8vIFRPRE8gLSB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xyXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcclxcbiAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxyXFxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+RVJFVU0gPHNtYWxsPnYgMC4xPC9zbWFsbD48L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxyXFxuICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tYm9vayc+PC9zcGFuPiBOYW1lc1xcclxcbiAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9BYm91dCddXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduJz48L3NwYW4+IEFib3V0XFxyXFxuICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInVzZXJcXFwiICpuZ0lmPVxcXCJ1c2VyXFxcIj5cXHJcXG4gICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5cXFwiPlxcclxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJ1c2VyTGFiZWxcXFwiPkxvZ2dlZCBpbiBhczogPC9zcGFuPnt7IHVzZXIubmFtZSB9fVxcclxcbiAgICA8L3NtYWxsPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXHJcXG5saS5saW5rLWFjdGl2ZSBhLFxcclxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxyXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUM3O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlciB7XFxyXFxuICBjb2xvcjogIzlkOWQ5ZDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogNSU7XFxyXFxuICB0b3A6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJMYWJlbCB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXFxyXFxuICAudXNlciB7XFxyXFxuICBjb2xvcjogIzlkOWQ5ZDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIHRvcDogOTUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXJMYWJlbCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1uYXYge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXItaGVhZGVyIHtcXHJcXG4gICAgZmxvYXQ6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyLWNvbGxhcHNlIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgdWwge1xcclxcbiAgICBmbG9hdDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgbGkge1xcclxcbiAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBtYXJnaW46IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICAgLm5hdmJhciBsaSBhIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIGEge1xcclxcbiAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XHJcbmltcG9ydCB7IFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3NwaW5uZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuL3NwaW5uZXIuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtTcGlubmVyQ29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtTcGlubmVyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtTcGlubmVyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwaW5uZXJNb2R1bGUge1xyXG5cclxuICAvLyBPbmx5IGxvYWQgdGhpcyBtb2R1bGUgaWYgbm90IGFscmVhZHkgbG9hZGVkXHJcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogU3Bpbm5lck1vZHVsZSkge1xyXG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnU3Bpbm5lck1vZHVsZScpXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBTcGlubmVyU3RhdGUsIFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzcGlubmVyJyxcclxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zcGlubmVyLmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zcGlubmVyLmNvbXBvbmVudC5jc3MnKV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgLy8gU3Vic2NyaWJlIHRvIHRoZSBzcGlubmVyIHN0YXRlIGluIFNwaW5uZXJTZXJ2aWNlLCB0aGlzIHNldHMgdGhlIHZpc2libGUgZmxhZ1xyXG4gIHByaXZhdGUgc3Bpbm5lclN0YXRlQ2hhbmdlZDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwaW5uZXJTZXJ2aWNlOiBTcGlubmVyU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zcGlubmVyU3RhdGVDaGFuZ2VkID0gdGhpcy5zcGlubmVyU2VydmljZS5zcGlubmVyU3RhdGVcclxuICAgICAgLnN1YnNjcmliZSgoc3RhdGU6IFNwaW5uZXJTdGF0ZSkgPT4gdGhpcy52aXNpYmxlID0gc3RhdGUuc2hvdyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Bpbm5lclN0YXRlQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Bpbm5lclN0YXRlIHtcclxuICBzaG93OiBib29sZWFuO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzcGlubmVyU3ViamVjdCA9IG5ldyBTdWJqZWN0PFNwaW5uZXJTdGF0ZT4oKTtcclxuXHJcbiAgc3Bpbm5lclN0YXRlID0gdGhpcy5zcGlubmVyU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaW9yOiBTcGlubmVyU2VydmljZSkge1xyXG4gICAgaWYgKHByaW9yKSB7IHJldHVybiBwcmlvcjsgfVxyXG4gIH1cclxuXHJcbiAgc2hvdygpIHsgLy8gU2V0cyB0aGUgc3Bpbm5lciBzdGF0ZSB0byB0cnVlXHJcbiAgICB0aGlzLnNwaW5uZXJTdWJqZWN0Lm5leHQoPFNwaW5uZXJTdGF0ZT57IHNob3c6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkgeyAvLyBTZXRzIHRoZSBzcGlubmVyIHN0YXRlIHRvIGZhbHNlXHJcbiAgICB0aGlzLnNwaW5uZXJTdWJqZWN0Lm5leHQoPFNwaW5uZXJTdGF0ZT57IHNob3c6IGZhbHNlIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCIgKm5nSWY9XFxcInZpc2libGVcXFwiPlxcclxcbiAgPGkgY2xhc3M9XFxcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0zeCBmYS1md1xcXCI+PC9pPlxcclxcbiAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPkxvYWRpbmcuLi48L3NwYW4+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwaW5uZXIge1xcclxcbiAgY29sb3I6ICM3YzdhN2M7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogNSU7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuc3Bpbm5lciB7XFxyXFxuICAgIGNvbG9yOiAjN2M3YTdjO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA1JTtcXHJcXG4gICAgdG9wOiA1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XHJcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbVG9hc3RDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Q29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtUb2FzdFNlcnZpY2VdIC8vIE1ha2VzIHRoZSBUb2FzdFNlcnZpY2UgYXZhaWxhYmxlIGZvciBpbmplY3Rpb25cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0TW9kdWxlIHtcclxuXHJcbiAgLy8gT25seSBsb2FkIHRoaXMgbW9kdWxlIGlmIG5vdCBhbHJlYWR5IGxvYWRlZFxyXG4gIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFRvYXN0TW9kdWxlKSB7XHJcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdUb2FzdE1vZHVsZScpXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3Quc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3RvcnktdG9hc3QnLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi90b2FzdC5jb21wb25lbnQuY3NzJyldLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0cyA9IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIG1lc3NhZ2U6ICdNYXkgdGhlIEZvcmNlIGJlIHdpdGggWW91J1xyXG4gIH07XHJcbiAgcHJpdmF0ZSB0b2FzdEVsZW1lbnQ6IGFueTtcclxuICBwcml2YXRlIHRvYXN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRvYXN0U3Vic2NyaXB0aW9uID0gdGhpcy50b2FzdFNlcnZpY2UudG9hc3RTdGF0ZS5zdWJzY3JpYmUoKHRvYXN0TWVzc2FnZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgYWN0aXZpdGluZyB0b2FzdDogJHt0b2FzdE1lc3NhZ2UubWVzc2FnZX1gKVxyXG4gICAgICB0aGlzLmFjdGl2YXRlKHRvYXN0TWVzc2FnZS5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUobWVzc2FnZSA9IHRoaXMuZGVmYXVsdHMubWVzc2FnZSwgdGl0bGUgPSB0aGlzLmRlZmF1bHRzLnRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudG9hc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudG9hc3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLnRvYXN0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIHRoaXMudG9hc3RFbGVtZW50LnN0eWxlLnpJbmRleCA9IDk5OTk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlKCksIDI1MDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlKCkge1xyXG4gICAgdGhpcy50b2FzdEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnRvYXN0RWxlbWVudC5zdHlsZS56SW5kZXggPSAwLCA0MDApO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwidG9hc3RcXFwiIGNsYXNzPVxcXCJ0b2FzdC1jb250YWluZXJcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwidG9hc3QtY2FyZCBtZGwtc2hhZG93LS0xNmRwXFxcIj5cXHJcXG4gICAgPGg1IGNsYXNzPVxcXCJ0b2FzdC10aXRsZVxcXCI+e3t0aXRsZX19PC9oNT5cXHJcXG4gICAgPHAgY2xhc3M9XFxcInRvYXN0LW1lc3NhZ2VcXFwiPnt7bWVzc2FnZX19PC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9hc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9hc3QtY29udGFpbmVyIHtcXHJcXG4gIC8qLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgbWFyZ2luLCBib3JkZXItcmFkaXVzO1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIG1hcmdpbiwgYm9yZGVyLXJhZGl1cztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4wcztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4wcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyovXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuXFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4udG9hc3QtY29udGFpbmVyID4gKiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2FzdC1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2YwNjI5MjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsNTgsMTgzKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywxMDksMjU0KTsqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSw2NCwxMjkpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9hc3QtY2FyZCAudG9hc3QtbWVzc2FnZSB7XFxyXFxuICBtYXJnaW46IDBlbSAyZW0gMWVtIDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvYXN0LWNhcmQgLnRvYXN0LXRpdGxlIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBtYXJnaW46IDE2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTmFtZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vbmFtZS1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmFtZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL25hbWUtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYW1lU2VydmljZSB9IGZyb20gJy4vbmFtZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmFtZUd1YXJkIH0gZnJvbSAnLi9uYW1lLmd1YXJkJztcclxuaW1wb3J0IHsgTmFtZUZpbHRlclNlcnZpY2UgfSBmcm9tICcuL25hbWUtZmlsdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYW1lRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uYW1lLWZpbHRlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIC8vIGltcG9ydCBtb2R1bGVzXHJcbiAgICBVbml2ZXJzYWxNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbIC8vIHRoaXMgaXMgZm9yQ2hpbGQsIG5vdCBmb3JSb290LCBzaW5jZSBub3Qgcm9vdCBtb2R1bGVcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdIb21lJyxcclxuICAgICAgICBjb21wb25lbnQ6IE5hbWVMaXN0Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnSG9tZS86aWQnLFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTmFtZUd1YXJkXSwgLy8gUm91dGVyIEd1YXJkXHJcbiAgICAgICAgY29tcG9uZW50OiBOYW1lRGV0YWlsQ29tcG9uZW50XHJcbiAgICAgIH1cclxuICAgIF0pXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgLy8gY29tcG9uZW50cyBhbmQgZmlsdGVyc1xyXG4gICAgTmFtZUxpc3RDb21wb25lbnQsXHJcbiAgICBOYW1lRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgTmFtZUZpbHRlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbIC8vIHNlcnZpY2UgcHJvdmlkZXJzXHJcbiAgICBOYW1lU2VydmljZSxcclxuICAgIE5hbWVGaWx0ZXJTZXJ2aWNlLFxyXG4gICAgTmFtZUd1YXJkIC8vIEd1YXJkIHNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lTW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9zdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgSU5hbWUgfSBmcm9tICcuL25hbWUubW9kZWwnO1xyXG5pbXBvcnQgeyBOYW1lU2VydmljZSB9IGZyb20gJy4vbmFtZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmFtZS1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzJyldLFxyXG4gIHByb3ZpZGVyczogW05hbWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmFtZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gIG5hbWU6IElOYW1lO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcbiAgc2hvd01vZGFsOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbmFtZVNlcnZpY2U6IE5hbWVTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgIHRoaXMuZ2V0TmFtZShpZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYW1lU2VydmljZS5nZXROYW1lKGlkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIG5hbWUgPT4gdGhpcy5uYW1lID0gbmFtZSxcclxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yID0gPGFueT5lcnJvclxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmFtZSgpOiB2b2lkIHtcclxuICAgIC8vIENvbnZlcnQgdGFncyBhbmQgZmVhdHVyZXMgdG8gc3RyaW5nIGFycmF5XHJcbiAgICBsZXQgdGFncyA9IHRoaXMubmFtZS50YWdzLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLm5hbWUuZmVhdHVyZXMudG9TdHJpbmcoKTtcclxuICAgIHRoaXMubmFtZS50YWdzID0gdGFncy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG4gICAgdGhpcy5uYW1lLmZlYXR1cmVzID0gZmVhdHVyZXMuc3BsaXQoXCIsXCIpLm1hcChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgU3RyaW5nLnByb3RvdHlwZS50cmltKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBuYW1lIHVwZGF0ZSBzZXJ2aWNlXHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLnVwZGF0ZU5hbWUodGhpcy5uYW1lKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICBzdWNjZXNzID0+IHtcclxuICAgICAgICBpZiAoc3VjY2VzcyAhPSB0aGlzLm5hbWUuaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgLSByZWNpZXZlZCBkaWZmZXJlbnQgbmFtZSBpZCBhZnRlciB1cGRhdGUgY2FsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvSG9tZSddKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSA8YW55PmVycm9yO1xyXG4gICAgICB9KTtcclxuICB9IFxyXG5cclxuICB0b2dnbGVNb2RhbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd01vZGFsID0gIXRoaXMuc2hvd01vZGFsO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTmFtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmFtZVNlcnZpY2UuZGVsZXRlTmFtZSh0aGlzLm5hbWUuaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiAtIHJlY2lldmVkIGZhbHNlIHJlc3VsdCBhZnRlciBkZWxldGlvbiBjYWxsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9Ib21lJ10pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3I7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgSU5hbWUgfSBmcm9tICcuL25hbWUubW9kZWwnO1xyXG5pbXBvcnQgeyBTcGlubmVyU2VydmljZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmFtZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgYXBpVXJsID0gJ2FwaS9OYW1lcyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzcGlubmVyU2VydmljZTogU3Bpbm5lclNlcnZpY2UpIHsgfSBcclxuXHJcbiAgZ2V0TmFtZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJTmFtZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuYXBpVXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPElOYW1lPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnR2V0TmFtZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZXMoKTogT2JzZXJ2YWJsZTxJTmFtZVtdPiB7XHJcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3coKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLmFwaVVybClcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPElOYW1lW10+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdHZXROYW1lczogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKTtcclxuICB9XHJcbiAgXHJcbiAgYWRkTmFtZShuYW1lOiBJTmFtZSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobmFtZSk7XHJcblxyXG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5zaG93KCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxudW1iZXI+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdBZGROYW1lOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zcGlubmVyU2VydmljZS5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmFtZShuYW1lOiBJTmFtZSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobmFtZSk7XHJcblxyXG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5zaG93KCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFwaVVybCArIFwiL1wiICsgbmFtZS5pZCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPG51bWJlcj5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ1VwZGF0ZU5hbWU6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNwaW5uZXJTZXJ2aWNlLmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVOYW1lKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hcGlVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8Ym9vbGVhbj5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0RlbGV0ZU5hbWU6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNwaW5uZXJTZXJ2aWNlLmhpZGUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgLy8gVE9ETyAtIHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xyXG4gICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xyXG4gICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9yeGpzLWV4dGVuc2lvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4Y2VwdGlvbi5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdG9hc3QvdG9hc3Quc2VydmljZSc7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGgxPk5hbWVzIERldGFpbHM8L2gxPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPVxcXCJuYW1lXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGROYW1lXFxcIj5OYW1lPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGRUYWdzXFxcIj5UYWdzPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZFRhZ3NcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLnRhZ3NcXFwiIC8+XFxyXFxuICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSB0YWdzIHNlcGFyYXRlZCBieSBjb21tYS4gRXhhbXBsZTogPGk+d29yaywgbWFuYWdlcjwvaT48L3NtYWxsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkRmVhdHVyZXNcXFwiPkZlYXR1cmVzPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZEZlYXR1cmVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS5mZWF0dXJlc1xcXCIgLz5cXHJcXG4gICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+QWRkIG11bHRpcGxlIGZlYXR1cmVzIHNlcGFyYXRlZCBieSBjb21tYS4gRXhhbXBsZTogPGk+c2tpbm55LCBhc2lhbiwgZ2xhc3NlczwvaT48L3NtYWxsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwidXBsb2FkUGhvdG9cXFwiPlVwbG9hZCBQaG90bzwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJ1cGxvYWRQaG90b1xcXCIgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbC1maWxlXFxcIiB0aXRsZT1cXFwiVGhpcyBGZWF0dXJlIG5vdCBFbmFibGVkXFxcIiBkaXNhYmxlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIlxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9Ib21lJ11cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgQ2FuY2VsXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2E+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPiZuYnNwOzwvc3Bhbj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLXRhcmdldD1cXFwiI215TW9kYWxcXFwiIChjbGljayk9XFxcInRvZ2dsZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgRGVsZXRlXFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVOYW1lKClcXFwiPlxcclxcbiAgICAgICAgU2F2ZVxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPSdlcnJvcic+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgPGg0PkVycm9yPC9oND5cXHJcXG4gICAgPHA+XFxyXFxuICAgICAge3sgZXJyb3IgfX1cXHJcXG4gICAgPC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwic2hvd01vZGFsXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcblxcclxcbiAgICAgIDwhLS0gTW9kYWwgY29udGVudC0tPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db25maXJtYXRpb248L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG5hbWUge3sgbmFtZS5uYW1lIH19PzwvcD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuQ29uZmlybVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZU5hbWUoKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+RGVsZXRlPC9idXR0b24+XFxyXFxuICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bkNhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJsb2NrIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnB1bGwtbGVmdCB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zdHJvbmcge1xcclxcbiAgY29sb3I6ICM1ODU4NTg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL3N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XHJcbmltcG9ydCB7IE5hbWVTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYW1lRmlsdGVyU2VydmljZSB9IGZyb20gJy4vbmFtZS1maWx0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hbWVGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL25hbWUtZmlsdGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25hbWUtbGlzdCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmFtZS1saXN0LmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYW1lLWxpc3QuY29tcG9uZW50LmNzcycpXSxcclxuICBwcm92aWRlcnM6IFtOYW1lU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmaWx0ZXJlZE5hbWVzOiBJTmFtZVtdO1xyXG4gIG5hbWVzOiBJTmFtZVtdO1xyXG4gIG5hbWU6IElOYW1lO1xyXG4gIG5hbWVibG9jazogc3RyaW5nO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcbiAgc2hvd0FkZEZvcm06IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93QWRkRm9ybVF1aWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYW1lU2VydmljZTogTmFtZVNlcnZpY2UsIHByaXZhdGUgZmlsdGVyU2VydmljZTogTmFtZUZpbHRlclNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgLy8gZnJvbSBPbkluaXQgaW50ZXJmYWNlXHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmdldE5hbWVzKClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgbmFtZXMgPT4ge1xyXG4gICAgICAgIHRoaXMubmFtZXMgPSBuYW1lcztcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTmFtZXMgPSBuYW1lcztcclxuICAgICAgfSwgLy8gVGhpcyBpcyBsaWtlIGEgcHJvbWlzZSAtIHRyaWdnZXJlZCB3aGVuIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCByZXN1bHRcclxuICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3IpO1xyXG5cclxuICAgIHRoaXMuZmlsdGVyZWROYW1lcyA9IHRoaXMubmFtZXM7XHJcbiAgICB0aGlzLmNsZWFyQWRkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQWRkRm9ybSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0FkZEZvcm0gPSAhdGhpcy5zaG93QWRkRm9ybTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUFkZFF1aWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93QWRkRm9ybVF1aWNrID0gIXRoaXMuc2hvd0FkZEZvcm1RdWljaztcclxuICB9XHJcblxyXG4gIHNhdmVBZGRGb3JtKCk6IHZvaWQge1xyXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGZvcm0gdG8gc2F2ZSBmcm9tXHJcbiAgICBpZiAodGhpcy5zaG93QWRkRm9ybVF1aWNrKSB7XHJcbiAgICAgIGxldCBzcGxpdHRlZFN0cmluZyA9IHRoaXMubmFtZWJsb2NrLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICB0aGlzLm5hbWUubmFtZSA9IHNwbGl0dGVkU3RyaW5nWzBdO1xyXG4gICAgICB0aGlzLm5hbWUudGFncyA9IHNwbGl0dGVkU3RyaW5nWzFdID8gc3BsaXR0ZWRTdHJpbmdbMV0uc3BsaXQoXCIsXCIpIDogW107XHJcbiAgICAgIHRoaXMubmFtZS5mZWF0dXJlcyA9IHNwbGl0dGVkU3RyaW5nWzJdID8gc3BsaXR0ZWRTdHJpbmdbMl0uc3BsaXQoXCIsXCIpIDogW107XHJcbiAgICB9XHJcbiAgICAvLyBUcmltIHRoZSB0YWdzIGFuZCBmZWF0dXJlcyBmaWVsZHNcclxuICAgIGxldCB0YWdzID0gdGhpcy5uYW1lLnRhZ3MudG9TdHJpbmcoKTtcclxuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMubmFtZS5mZWF0dXJlcy50b1N0cmluZygpO1xyXG4gICAgdGhpcy5uYW1lLnRhZ3MgPSB0YWdzLnNwbGl0KFwiLFwiKS5tYXAoRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsIFN0cmluZy5wcm90b3R5cGUudHJpbSk7XHJcbiAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBmZWF0dXJlcy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG5cclxuICAgIHRoaXMubmFtZVNlcnZpY2UuYWRkTmFtZSh0aGlzLm5hbWUpLnN1YnNjcmliZShzID0+IHtcclxuICAgICAgdGhpcy5uYW1lcy5wdXNoKHRoaXMubmFtZSk7XHJcbiAgICAgIHRoaXMuY2xlYXJBZGRGb3JtKCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlQWRkRm9ybSgpO1xyXG4gICAgfSxcclxuICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJDaGFuZ2VkKHNlYXJjaFRleHQ6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyZWROYW1lcyA9IHRoaXMuZmlsdGVyU2VydmljZS5maWx0ZXIoc2VhcmNoVGV4dCwgWyduYW1lJywgJ3RhZ3MnLCAnZmVhdHVyZXMnXSwgdGhpcy5uYW1lcyk7XG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckFkZEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hbWUgPSB7XHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICBmZWF0dXJlczogW11cclxuICAgIH07XHJcbiAgICB0aGlzLm5hbWVibG9jayA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hbWVGaWx0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgYW4gaW5zdGFuY2Ugb2YgRmlsdGVyVGV4dFNlcnZpY2UnKTtcbiAgfVxuXG4gIGZpbHRlcihkYXRhOiBzdHJpbmcsIHByb3BzOiBBcnJheTxzdHJpbmc+LCBvcmlnaW5hbExpc3Q6IEFycmF5PGFueT4pIHtcbiAgICBsZXQgZmlsdGVyZWRMaXN0OiBhbnlbXTtcbiAgICBpZiAoZGF0YSAmJiBwcm9wcyAmJiBvcmlnaW5hbExpc3QpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnRvTG93ZXJDYXNlKCk7XG4gICAgICBsZXQgZmlsdGVyZWQgPSBvcmlnaW5hbExpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xuICAgICAgICAgIGlmIChpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcbiAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfSk7XG4gICAgICBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyZWRMaXN0ID0gb3JpZ2luYWxMaXN0O1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRMaXN0O1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1maWx0ZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YXJ0aWNsZSBjbGFzcz1cXFwidGVtcGxhdGUgYW5pbWF0ZWQgc2xpZGVJblJpZ2h0XFxcIj5cXHJcXG4gIDxoMj5MaXN0IG9mIE5hbWVzPC9oMj5cXHJcXG4gIDxkaXYgaWQ9XFxcImFkZEJ1dHRvblxcXCIgKm5nSWY9XFxcIiFzaG93QWRkRm9ybVxcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQWRkRm9ybSgpXFxcIj5cXHJcXG4gICAgICBBZGRcXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPVxcXCJzaG93QWRkRm9ybVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgcHVsbC1yaWdodFxcXCIgKGNsaWNrKT1cXFwic2hvd0FkZEZvcm0gPSAhc2hvd0FkZEZvcm1cXFwiPlxcclxcbiAgICAgICAgICBDYW5jZWxcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPiZuYnNwOzwvc3Bhbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XFxcIiAoY2xpY2spPVxcXCJzYXZlQWRkRm9ybSgpXFxcIj5cXHJcXG4gICAgICAgICAgU2F2ZVxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiYWRkRm9ybVF1aWNrXFxcIiAqbmdJZj1cXFwic2hvd0FkZEZvcm1RdWlja1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkUXVpY2tcXFwiPlF1aWNrIEFkZCA8L2xhYmVsPiA8YSBbYXR0ci5ocmVmXT1cXFwibnVsbFxcXCIgKGNsaWNrKT0ndG9nZ2xlQWRkUXVpY2soKSc+IFNob3cgRnVsbCBGb3JtPC9hPlxcclxcbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcImFkZFF1aWNrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByb3dzPVxcXCIzXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZWJsb2NrXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgRW50ZXIgTmFtZSwgVGFncyBhbmQgRmVhdHVyZXMgb24gZWFjaCBsaW5lLiBNdWx0aXBsZSB0YWdzIGFuZCBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBFeGFtcGxlOjxiciAvPlxcclxcbiAgICAgICAgICAgIDxpPkpvaG4gTGVlPC9pPjxiciAvPlxcclxcbiAgICAgICAgICAgIDxpPndvcmssIG1hbmFnZXI8L2k+PGJyIC8+XFxyXFxuICAgICAgICAgICAgPGk+c2tpbm55LCBhc2lhbiwgZ2xhc3NlczwvaT48YnIgLz5cXHJcXG4gICAgICAgICAgPC9zbWFsbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgaWQ9XFxcImFkZEZvcm1cXFwiICpuZ0lmPVxcXCIhc2hvd0FkZEZvcm1RdWlja1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkTmFtZVxcXCI+TmFtZTwvbGFiZWw+IDxhIFthdHRyLmhyZWZdPVxcXCJudWxsXFxcIiAoY2xpY2spPSd0b2dnbGVBZGRRdWljaygpJz4gU2hvdyBRdWljayBGb3JtPC9hPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRUYWdzXFxcIj5UYWdzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRUYWdzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS50YWdzXFxcIiAvPlxcclxcbiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+QWRkIG11bHRpcGxlIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hLiBFeGFtcGxlOiA8aT53b3JrLCBtYW5hZ2VyPC9pPjwvc21hbGw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRGZWF0dXJlc1xcXCI+RmVhdHVyZXM8L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEZlYXR1cmVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS5mZWF0dXJlc1xcXCIgLz5cXHJcXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPnNraW5ueSwgYXNpYW4sIGdsYXNzZXM8L2k+PC9zbWFsbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVwbG9hZFBob3RvXFxcIj5VcGxvYWQgUGhvdG88L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVwbG9hZFBob3RvXFxcIiB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWZpbGVcXFwiIHRpdGxlPVxcXCJUaGlzIEZlYXR1cmUgbm90IEVuYWJsZWRcXFwiIGRpc2FibGVkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiZXJyb3JcXFwiICpuZ0lmPSdlcnJvcic+XFxyXFxuICAgICAgICA8aDQ+RXJyb3I8L2g0PlxcclxcbiAgICAgICAgPHA+XFxyXFxuICAgICAgICAgIHt7IGVycm9yIH19XFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgPG5hbWUtZmlsdGVyIChjaGFuZ2VkKT1cXFwiZmlsdGVyQ2hhbmdlZCgkZXZlbnQpXFxcIj48L25hbWUtZmlsdGVyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nSWY9J25hbWVzICYmIG5hbWVzLmxlbmd0aCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiICpuZ0Zvcj1cXFwibGV0IG5hbWUgb2YgZmlsdGVyZWROYW1lc1xcXCI+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwiY2FyZC1pbWFnZSB0aHVtYm5haWwgcHVsbC1sZWZ0XFxcIiBzcmM9XFxcIi9kaXN0L21haW4vaW1hZ2VzL2xlZ28wMy5wbmdcXFwiIGFsdD1cXFwiUGVyc29uIFBob3RvXFxcIj5cXHJcXG4gICAgICA8YSBocmVmPVxcXCJcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvSG9tZScsIG5hbWUuaWRdXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgRWRpdFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9hPlxcclxcbiAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+e3sgbmFtZS5uYW1lIH19PC9oND5cXHJcXG5cXHJcXG4gICAgICA8aHIgY2xhc3M9XFxcImNhcmQtc3BhY2VyXFxcIiAvPlxcclxcblxcclxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcclxcbiAgICAgICAgPHN0cm9uZz5UYWdzOiA8L3N0cm9uZz5cXHJcXG4gICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IHRhZyBvZiBuYW1lLnRhZ3NcXFwiPnt7IHRhZyB9fSwgPC9zcGFuPlxcclxcbiAgICAgIDwvcD5cXHJcXG4gICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5cXHJcXG4gICAgICAgIDxzdHJvbmc+RmVhdHVyZXM6IDwvc3Ryb25nPlxcclxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgZmVhdHVyZSBvZiBuYW1lLmZlYXR1cmVzXFxcIj57eyBmZWF0dXJlIH19LCA8L3NwYW4+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+PC9zbWFsbD5cXHJcXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+PC9zbWFsbD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2FydGljbGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYW1lLWxpc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYmxvY2sge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ibG9jazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmM2ZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHVsbC1sZWZ0IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBjb2xvcjogIzU4NTg1ODtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgwqBjbGFzcyBOYW1lR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgLy8gVGhlIHJvdXRlIG9ubHkgYWxsb3dzIG51bWVyaWMgaWQgbnVtYmVyIG9yIG5ldyBrZXl3b3JkXHJcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcclxuICAgIGxldCBpZCA9ICtyb3V0ZS51cmxbMV0ucGF0aDtcclxuXHJcbiAgICBpZiAoaXNOYU4oaWQpIHx8IGlkIDwgMSkge1xyXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvSG9tZSddKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLmd1YXJkLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmFtZS1maWx0ZXInLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hbWUtZmlsdGVyLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVGaWx0ZXJDb21wb25lbnQge1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcblxuICBmaWx0ZXI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gIH1cblxuICBmaWx0ZXJDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuZmlsdGVyKTtcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWZpbHRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgYWRkLW9uXFxcIj5cXHJcXG4gIDxpbnB1dCBoaWRkZW49XFxcImZpbHRlclRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2hcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJmaWx0ZXJcXFwiIChrZXl1cCk9XFxcImZpbHRlckNoYW5nZWQoJGV2ZW50KVxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXFxcIj48L2k+PC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWZpbHRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Fib3V0JyxcclxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hYm91dC5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vYWJvdXQuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgeyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhcnRpY2xlIGNsYXNzPVxcXCJ0ZW1wbGF0ZSBhbmltYXRlZCBzbGlkZUluUmlnaHRcXFwiPlxcclxcbiAgPGgyPkFib3V0PC9oMj5cXHJcXG4gIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPlZlcnNpb248L3RoPlxcclxcbiAgICAgIDx0ZD4wLjE8L3RkPlxcclxcbiAgICAgIDx0ZD5TZXB0ZW1iZXIgMjAxNjwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGg+QXV0aGVudGljYXRpb248L3RoPlxcclxcbiAgICAgIDx0ZD5Hb29nbGU8L3RkPlxcclxcbiAgICAgIDx0ZD48L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgPHRkPk1pY3Jvc29mdDwvdGQ+XFxyXFxuICAgICAgPHRkPjwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGg+PC90aD5cXHJcXG4gICAgICA8dGQ+RmFjZWJvb2s8L3RkPlxcclxcbiAgICAgIDx0ZD48L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgPHRkPlR3aXR0ZXI8L3RkPlxcclxcbiAgICAgIDx0ZD48L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgPC90YWJsZT5cXHJcXG4gIDxkaXYgaWQ9XFxcImJ0bkxvZ291dFxcXCI+XFxyXFxuICAgIDxhIGhyZWY9XFxcIkhvbWUvTG9nb3V0XFxcIj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiPlxcclxcbiAgICAgICAgTG9nb3V0XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvYT5cXHJcXG4gIDwvZGl2PlxcclxcbjwvYXJ0aWNsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYWJvdXQuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3Jvdyc+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tMyc+XFxyXFxuICAgICAgICAgICAgPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS05IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxzcGlubmVyPjwvc3Bpbm5lcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXHJcXG4gICAgLmJvZHktY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWRsLWxheW91dF9faGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcbi5tZGwtbGF5b3V0X19jb250ZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDY4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rLnJvdXRlci1saW5rLWFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluay5yb3V0ZXItbGluay1hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDY0LDEyOSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDE2cHggMCA3MnB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudCB7XFxyXFxuICBtYXJnaW46IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZS50ZW1wbGF0ZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGVkIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXQtYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAyZW07XFxyXFxuICB0b3A6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwaW5uZXIge1xcclxcbiAgYm9yZGVyLXdpZHRoOiA4ZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC03MHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAjcmVzZXQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=