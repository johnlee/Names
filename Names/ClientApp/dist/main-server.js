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
	var name_module_1 = __webpack_require__(43);
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
	var spinner_module_1 = __webpack_require__(32);
	var toast_module_1 = __webpack_require__(38);
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
	        template: __webpack_require__(28),
	        styles: [__webpack_require__(29)],
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
	var http_1 = __webpack_require__(46);
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

	module.exports = "<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a class='navbar-brand' [routerLink]=\"['/home']\">EREUM <small>v 0.1</small></a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/home']\">\r\n            <span class='glyphicon glyphicon-book'></span> Names\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/About']\">\r\n            <span class='glyphicon glyphicon-question-sign'></span> About\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"user\" *ngIf=\"user\">\r\n    <small class=\"text-warn\">\r\n      <span class=\"userLabel\">Logged in as: </span>{{ user.name }}\r\n    </small>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(30);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n  margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n  background-color: #4189C7;\n  color: white;\n}\n\n.user {\n  color: #9d9d9d;\n  white-space: nowrap;\n  position: absolute;\n  right: 5%;\n  top: 85%;\n}\n\n.userLabel {\n  visibility: hidden;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n\n@media (min-width: 768px) {\n  /* On small screens, convert the nav menu to a vertical sidebar */\n  .user {\n  color: #9d9d9d;\n    white-space: normal;\n    position: absolute;\n    left: 10%;\n    top: 95%;\n  }\n\n  .userLabel {\n    visibility: visible;\n  }\n\n  .main-nav {\n    height: 100%;\n    width: calc(25% - 20px);\n  }\n\n  .navbar {\n    border-radius: 0px;\n    border-width: 0px;\n    height: 100%;\n  }\n\n  .navbar-header {\n    float: none;\n  }\n\n  .navbar-collapse {\n    border-top: 1px solid #444;\n    padding: 0px;\n  }\n\n  .navbar ul {\n    float: none;\n  }\n\n  .navbar li {\n    float: none;\n    font-size: 15px;\n    margin: 6px;\n  }\n\n    .navbar li a {\n      padding: 10px 16px;\n      border-radius: 4px;\n    }\n\n  .navbar a {\n    /* If a menu item's text is too long, truncate it */\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 31 */
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
/* 32 */
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
	var spinner_component_1 = __webpack_require__(33);
	var spinner_service_1 = __webpack_require__(34);
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
	var core_1 = __webpack_require__(3);
	var spinner_service_1 = __webpack_require__(34);
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
	        template: __webpack_require__(35),
	        styles: [__webpack_require__(36)],
	    }),
	    __metadata("design:paramtypes", [spinner_service_1.SpinnerService])
	], SpinnerComponent);
	exports.SpinnerComponent = SpinnerComponent;


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
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner\" *ngIf=\"visible\">\r\n  <h2>Loading...</h2>\r\n  <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(37);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, ".spinner {\n  color: #7c7a7c;\n  position: absolute;\n  left: 30%;top: 12%\n}\n\n", ""]);
	
	// exports


/***/ },
/* 38 */
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
	var toast_component_1 = __webpack_require__(39);
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
	        template: __webpack_require__(40),
	        styles: [__webpack_require__(41)],
	    }),
	    __metadata("design:paramtypes", [toast_service_1.ToastService])
	], ToastComponent);
	exports.ToastComponent = ToastComponent;


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div id=\"toast\" class=\"toast-container\">\r\n  <div class=\"toast-card mdl-shadow--16dp\">\r\n    <h5 class=\"toast-title\">{{title}}</h5>\r\n    <p class=\"toast-message\">{{message}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(42);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, ".toast-container {\n  /*-webkit-transition-property: opacity, bottom, left, right, width, margin, border-radius;\n  transition-property: opacity, bottom, left, right, width, margin, border-radius;\n  -webkit-transition-duration: 1.0s;\n          transition-duration: 1.0s;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;*/\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: scroll;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n  opacity: 0;\n\n  -webkit-transition: opacity 400ms ease-in;\n  -moz-transition: opacity 400ms ease-in;\n  transition: opacity 400ms ease-in;\n}\n\n.toast-container > * {\n  text-align: center;\n}\n\n.toast-card {\n  width: 100%;\n  z-index: 1;\n  padding: 2px;\n  position: relative;\n  /*background-color: #f06292;\n  background-color: rgb(103,58,183);\n  background-color: rgb(83,109,254);*/\n  background-color: rgb(255,64,129);\n  text-align: center;\n  color: white;\n}\n\n.toast-card .toast-message {\n  margin: 0em 2em 1em 2em;\n}\n\n.toast-card .toast-title {\n  text-transform: uppercase;\n  margin: 16px;\n  font-size: 18px;\n}\n", ""]);
	
	// exports


/***/ },
/* 43 */
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
	var name_detail_component_1 = __webpack_require__(44);
	var name_list_component_1 = __webpack_require__(51);
	var name_service_1 = __webpack_require__(45);
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
/* 44 */
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
	var name_service_1 = __webpack_require__(45);
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
	var http_1 = __webpack_require__(46);
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
/* 46 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(22));
	__export(__webpack_require__(34));
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

	exports = module.exports = __webpack_require__(31)();
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
	var name_service_1 = __webpack_require__(45);
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

	exports = module.exports = __webpack_require__(31)();
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

	exports = module.exports = __webpack_require__(31)();
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

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n<spinner></spinner>"

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

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n\r\n.mdl-layout__header {\r\n  position: fixed;\r\n  background-color: #222;\r\n}\r\n.mdl-layout__content {\r\n  margin-top: 68px;\r\n}\r\n\r\n.nav-link {\r\n  padding: 0 1em;\r\n  width: 100px;\r\n  color: rgba(255,255,255,.6);\r\n  text-align: center;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link.router-link-active {\r\n  color: rgba(255,255,255, 1);\r\n}\r\n\r\n.nav-link.router-link-active::after {\r\n    height: 3px;\r\n    width: 100%;\r\n    display: block;\r\n    content: \" \";\r\n    bottom: 0;\r\n    left: 0;\r\n    position: inherit;\r\n    background: rgb(255,64,129);\r\n}\r\n\r\n\r\n.mdl-layout__header-row {\r\n    height: 56px;\r\n    padding: 0 16px 0 72px;\r\n    padding-left: 8px;\r\n    background-color: #222;\r\n}\r\n\r\n.page-content {\r\n  margin: 2em;\r\n}\r\n\r\narticle.template {\r\n  opacity: 0;\r\n  -webkit-transition: opacity 400ms ease-in;\r\n  -moz-transition: opacity 400ms ease-in;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.animated {\r\n  -webkit-animation-duration: 400ms;\r\n  animation-duration: 400ms;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n#reset-button {\r\n  position: fixed;\r\n  right: 2em;\r\n  top: 1em;\r\n}\r\n\r\n#spinner {\r\n  border-width: 8em;\r\n  position: fixed;\r\n  top: 20%;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -70px;\r\n  z-index: 9999;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  #reset-button {\r\n    display: none\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmY0NmFiNTZhOTI0ZGFiNDY4ZDAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvY29yZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvcnhqcy1leHRlbnNpb25zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9leGNlcHRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/NGRiOSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3M/ODcyNyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcz8wOWVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcz84NjRmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50LmNzcz83ZTM4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLmZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUuZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3M/OTZhZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3M/NmMyYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztB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LENBQUM7SUFDVyxZQUFZLENBQUk7QUFBaEIscUNBQVk7Ozs7Ozs7QUNQekIsOFM7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHNEQUFxRCw2SEFBNkgsOEJBQThCLFNBQVMsS0FBSyw2QkFBNkIsc0JBQXNCLDZCQUE2QixLQUFLLDBCQUEwQix1QkFBdUIsS0FBSyxtQkFBbUIscUJBQXFCLG1CQUFtQixrQ0FBa0MseUJBQXlCLDRCQUE0QixLQUFLLHNDQUFzQyxrQ0FBa0MsS0FBSyw2Q0FBNkMsb0JBQW9CLG9CQUFvQix1QkFBdUIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsMEJBQTBCLG9DQUFvQyxLQUFLLHFDQUFxQyxxQkFBcUIsK0JBQStCLDBCQUEwQiwrQkFBK0IsS0FBSyx1QkFBdUIsa0JBQWtCLEtBQUssMEJBQTBCLGlCQUFpQixnREFBZ0QsNkNBQTZDLHdDQUF3QyxLQUFLLG1CQUFtQix3Q0FBd0MsZ0NBQWdDLHdDQUF3QyxnQ0FBZ0MsS0FBSyx1QkFBdUIsc0JBQXNCLGlCQUFpQixlQUFlLEtBQUssa0JBQWtCLHdCQUF3QixzQkFBc0IsZUFBZSxnQkFBZ0Isd0JBQXdCLHlCQUF5QixvQkFBb0IsS0FBSyxtQ0FBbUMscUJBQXFCLDRCQUE0QixLQUFLOztBQUUzcUQiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZjQ2YWI1NmE5MjRkYWI0NjhkMCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmUvY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYW1lTW9kdWxlIH0gZnJvbSAnLi9uYW1lcy9uYW1lLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgTmFtZU1vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnSG9tZScsXHJcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnLi9uYW1lcy9uYW1lLm1vZHVsZSNOYW1lTW9kdWxlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ0Fib3V0JyxcclxuICAgICAgICBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnSG9tZScsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgICAgfSwgLy8gZ2VuZXJpYyByZWRpcmVjdCBcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcqKicsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJ0hvbWUnLFxyXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgICAgIH0gLy8gYW55dGhpbmcgbm90IG1hdGNoIHJlZGlyZWN0IFxyXG4gICAgXSksXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIEFib3V0Q29tcG9uZW50XHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCAnLi9yeGpzLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xuaW1wb3J0IHsgRXhjZXB0aW9uU2VydmljZSB9IGZyb20gJy4vZXhjZXB0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSAnLi90b2FzdC90b2FzdC5tb2R1bGUnO1xuXG4vLyBUaGlzIG1vZHVsZSBpbXBvcnRzIGNvcmUgbW9kdWxlcyB0aGF0IHNob3VsZCBiZSB1c2VkIGFjcm9zcyB0aGUgZW50aXJlIGFwcGxpY2F0aW9uXG4vLyBUaGVzZSBhcmUgc2luZ2xldG9uIG1vZHVsZXMsIGd1YXJkZWQgYnkgdGhlIHRocm93SWZBbHJlYWR5TG9hZGVkIGZ1bmN0aW9uIFxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJvdXRlck1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLCBUb2FzdE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsIFRvYXN0TW9kdWxlLCBOYXZNZW51Q29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05hdk1lbnVDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBFeGNlcHRpb25TZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG5cbiAgLy8gTG9hZHMgdGhpcyBtb2R1bGUgb25seSBpZiBub3QgYWxyZWFkeSBsb2FkZWRcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ0NvcmVNb2R1bGUnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL2NvcmUubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoZXNlIGFyZSBjb21tb24gcnhqcyBleHRlbnNpb25zXG4vLyBUaGlzIGlzIHBhcnQgb2YgY29yZSBtb2R1bGUgc28gaXQgaXMgYXZhaWxhYmxlIGZvciB3aG9sZSBhcHBcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maW5hbGx5JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3J4anMtZXh0ZW5zaW9ucy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZGVsYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWxheVwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2ZpbmFsbHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9maW5hbGx5XCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlOiBhbnksIG1vZHVsZU5hbWU6IHN0cmluZykge1xuICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke21vZHVsZU5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkLiBJbXBvcnQgQ29yZSBtb2R1bGVzIGluIHRoZSBBcHBNb2R1bGUgb25seS5gKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3QvdG9hc3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSkgeyB9XG5cbiAgY2F0Y2hCYWRSZXNwb25zZTogKGVycm9yUmVzcG9uc2U6IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+ID0gKGVycm9yUmVzcG9uc2U6IGFueSkgPT4ge1xuICAgIGxldCByZXMgPSA8UmVzcG9uc2U+ZXJyb3JSZXNwb25zZTtcbiAgICBsZXQgZXJyID0gcmVzLmpzb24oKTtcbiAgICBsZXQgZW1zZyA9IGVyciA/XG4gICAgICAoZXJyLmVycm9yID8gZXJyLmVycm9yIDogSlNPTi5zdHJpbmdpZnkoZXJyKSkgOlxuICAgICAgKHJlcy5zdGF0dXNUZXh0IHx8ICd1bmtub3duIGVycm9yJyk7XG4gICAgdGhpcy50b2FzdFNlcnZpY2UuYWN0aXZhdGUoYEVycm9yIC0gQmFkIFJlc3BvbnNlIC0gJHtlbXNnfWApO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKGZhbHNlKTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9leGNlcHRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0TWVzc2FnZSB7XG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB0b2FzdFN1YmplY3QgPSBuZXcgU3ViamVjdDxUb2FzdE1lc3NhZ2U+KCk7XG4gIHRvYXN0U3RhdGUgPSB0aGlzLnRvYXN0U3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAvLyBDcmVhdGVzIFRvYXN0U2VydmljZSBpZiBub3QgYWxyZWFkeSBleGlzdFxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpb3I6IFRvYXN0U2VydmljZSkge1xuICAgIGlmIChwcmlvcikge1xuICAgICAgY29uc29sZS5sb2coJ3RvYXN0IHNlcnZpY2UgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgIHJldHVybiBwcmlvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZWQgdG9hc3Qgc2VydmljZScpXG4gICAgfVxuICB9XG5cbiAgLy8gU2hvdyB0aGUgdG9hc3QgbWVzc2FnZVxuICBhY3RpdmF0ZShtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgdGhpcy50b2FzdFN1YmplY3QubmV4dCg8VG9hc3RNZXNzYWdlPnsgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxyXG5pbXBvcnQgeyBOYXZNZW51U2VydmljZSB9IGZyb20gJy4vbmF2bWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi9uYXZtZW51Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldLFxuICAgIHByb3ZpZGVyczogW05hdk1lbnVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlcjogSWRlbnRpdHk7XG4gIGVycm9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5hdm1lbnVTZXJ2aWNlOiBOYXZNZW51U2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uYXZtZW51U2VydmljZS5nZXRJZGVudGl0eSgpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlciA9IHN1Y2Nlc3M7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yID0gPGFueT5lcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuL25hdm1lbnUubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF2TWVudVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgYXBpVXJsID0gJ0hvbWUvSWRlbnRpdHknO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBnZXRJZGVudGl0eSgpOiBPYnNlcnZhYmxlPElkZW50aXR5PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxJZGVudGl0eT5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0lkZW50aXR5OiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xyXG4gICAgLy8gVE9ETyAtIHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xyXG4gICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xyXG4gICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG4gICAgICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxyXFxuICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcclxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXHJcXG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5FUkVVTSA8c21hbGw+diAwLjE8L3NtYWxsPjwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXHJcXG4gICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ib29rJz48L3NwYW4+IE5hbWVzXFxyXFxuICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL0Fib3V0J11cXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24nPjwvc3Bhbj4gQWJvdXRcXHJcXG4gICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwidXNlclxcXCIgKm5nSWY9XFxcInVzZXJcXFwiPlxcclxcbiAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FyblxcXCI+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInVzZXJMYWJlbFxcXCI+TG9nZ2VkIGluIGFzOiA8L3NwYW4+e3sgdXNlci5uYW1lIH19XFxyXFxuICAgIDwvc21hbGw+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaSAuZ2x5cGhpY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi51c2VyIHtcXG4gIGNvbG9yOiAjOWQ5ZDlkO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1JTtcXG4gIHRvcDogODUlO1xcbn1cXG5cXG4udXNlckxhYmVsIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gIC51c2VyIHtcXG4gIGNvbG9yOiAjOWQ5ZDlkO1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgdG9wOiA5NSU7XFxuICB9XFxuXFxuICAudXNlckxhYmVsIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIC5tYWluLW5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLm5hdmJhci1oZWFkZXIge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcblxcbiAgLm5hdmJhciB1bCB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdmJhciBsaSB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbjogNnB4O1xcbiAgfVxcblxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG5cXG4gIC5uYXZiYXIgYSB7XFxuICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29yZS9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcbmltcG9ydCB7IFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3NwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1NwaW5uZXJDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtTcGlubmVyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbU3Bpbm5lclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJNb2R1bGUge1xuXG4gIC8vIE9ubHkgbG9hZCB0aGlzIG1vZHVsZSBpZiBub3QgYWxyZWFkeSBsb2FkZWRcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogU3Bpbm5lck1vZHVsZSkge1xuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ1NwaW5uZXJNb2R1bGUnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuaW1wb3J0IHsgU3Bpbm5lclN0YXRlLCBTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc3Bpbm5lci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NwaW5uZXIuY29tcG9uZW50Lmh0bWwnKSxcclxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL3NwaW5uZXIuY29tcG9uZW50LmNzcycpXSxcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgdmlzaWJsZSA9IGZhbHNlO1xuXG4gIC8vIFN1YnNjcmliZSB0byB0aGUgc3Bpbm5lciBzdGF0ZSBpbiBTcGlubmVyU2VydmljZSwgdGhpcyBzZXRzIHRoZSB2aXNpYmxlIGZsYWdcbiAgcHJpdmF0ZSBzcGlubmVyU3RhdGVDaGFuZ2VkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGlubmVyU2VydmljZTogU3Bpbm5lclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Bpbm5lclN0YXRlQ2hhbmdlZCA9IHRoaXMuc3Bpbm5lclNlcnZpY2Uuc3Bpbm5lclN0YXRlXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZTogU3Bpbm5lclN0YXRlKSA9PiB0aGlzLnZpc2libGUgPSBzdGF0ZS5zaG93KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Bpbm5lclN0YXRlQ2hhbmdlZC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Bpbm5lclN0YXRlIHtcbiAgc2hvdzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzcGlubmVyU3ViamVjdCA9IG5ldyBTdWJqZWN0PFNwaW5uZXJTdGF0ZT4oKTtcblxuICBzcGlubmVyU3RhdGUgPSB0aGlzLnNwaW5uZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcmlvcjogU3Bpbm5lclNlcnZpY2UpIHtcbiAgICBpZiAocHJpb3IpIHsgcmV0dXJuIHByaW9yOyB9XG4gIH1cblxuICBzaG93KCkgeyAvLyBTZXRzIHRoZSBzcGlubmVyIHN0YXRlIHRvIHRydWVcbiAgICB0aGlzLnNwaW5uZXJTdWJqZWN0Lm5leHQoPFNwaW5uZXJTdGF0ZT57IHNob3c6IHRydWUgfSk7XG4gIH1cblxuICBoaWRlKCkgeyAvLyBTZXRzIHRoZSBzcGlubmVyIHN0YXRlIHRvIGZhbHNlXG4gICAgdGhpcy5zcGlubmVyU3ViamVjdC5uZXh0KDxTcGlubmVyU3RhdGU+eyBzaG93OiBmYWxzZSB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJ2aXNpYmxlXFxcIj5cXHJcXG4gIDxoMj5Mb2FkaW5nLi4uPC9oMj5cXHJcXG4gIDxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggZmEtZndcXFwiPjwvaT5cXHJcXG4gIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5Mb2FkaW5nLi4uPC9zcGFuPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcGlubmVyIHtcXG4gIGNvbG9yOiAjN2M3YTdjO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzAlO3RvcDogMTIlXFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb3JlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4uL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1RvYXN0Q29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtUb2FzdFNlcnZpY2VdIC8vIE1ha2VzIHRoZSBUb2FzdFNlcnZpY2UgYXZhaWxhYmxlIGZvciBpbmplY3Rpb25cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RNb2R1bGUge1xuXG4gIC8vIE9ubHkgbG9hZCB0aGlzIG1vZHVsZSBpZiBub3QgYWxyZWFkeSBsb2FkZWRcbiAgY29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVG9hc3RNb2R1bGUpIHtcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdUb2FzdE1vZHVsZScpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbidcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RvcnktdG9hc3QnLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90b2FzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vdG9hc3QuY29tcG9uZW50LmNzcycpXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgZGVmYXVsdHMgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIG1lc3NhZ2U6ICdNYXkgdGhlIEZvcmNlIGJlIHdpdGggWW91J1xuICB9O1xuICBwcml2YXRlIHRvYXN0RWxlbWVudDogYW55O1xuICBwcml2YXRlIHRvYXN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UpIHtcbiAgICB0aGlzLnRvYXN0U3Vic2NyaXB0aW9uID0gdGhpcy50b2FzdFNlcnZpY2UudG9hc3RTdGF0ZS5zdWJzY3JpYmUoKHRvYXN0TWVzc2FnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGFjdGl2aXRpbmcgdG9hc3Q6ICR7dG9hc3RNZXNzYWdlLm1lc3NhZ2V9YClcbiAgICAgIHRoaXMuYWN0aXZhdGUodG9hc3RNZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUobWVzc2FnZSA9IHRoaXMuZGVmYXVsdHMubWVzc2FnZSwgdGl0bGUgPSB0aGlzLmRlZmF1bHRzLnRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRvYXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdCcpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50b2FzdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gICAgdGhpcy50b2FzdEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgdGhpcy50b2FzdEVsZW1lbnQuc3R5bGUuekluZGV4ID0gOTk5OTtcblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZSgpLCAyNTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpIHtcbiAgICB0aGlzLnRvYXN0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnRvYXN0RWxlbWVudC5zdHlsZS56SW5kZXggPSAwLCA0MDApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJ0b2FzdFxcXCIgY2xhc3M9XFxcInRvYXN0LWNvbnRhaW5lclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJ0b2FzdC1jYXJkIG1kbC1zaGFkb3ctLTE2ZHBcXFwiPlxcclxcbiAgICA8aDUgY2xhc3M9XFxcInRvYXN0LXRpdGxlXFxcIj57e3RpdGxlfX08L2g1PlxcclxcbiAgICA8cCBjbGFzcz1cXFwidG9hc3QtbWVzc2FnZVxcXCI+e3ttZXNzYWdlfX08L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb3JlL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi90b2FzdC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29yZS90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b2FzdC1jb250YWluZXIge1xcbiAgLyotd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBtYXJnaW4sIGJvcmRlci1yYWRpdXM7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgbWFyZ2luLCBib3JkZXItcmFkaXVzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjBzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjBzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7Ki9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgb3BhY2l0eTogMDtcXG5cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxufVxcblxcbi50b2FzdC1jb250YWluZXIgPiAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvYXN0LWNhcmQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjA2MjkyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMyw1OCwxODMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLDEwOSwyNTQpOyovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDY0LDEyOSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2FzdC1jYXJkIC50b2FzdC1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMGVtIDJlbSAxZW0gMmVtO1xcbn1cXG5cXG4udG9hc3QtY2FyZCAudG9hc3QtdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbjogMTZweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvcmUvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBOYW1lRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9uYW1lLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYW1lTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbmFtZS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hbWVTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYW1lRmlsdGVyIH0gZnJvbSAnLi9uYW1lLmZpbHRlcic7XHJcbmltcG9ydCB7IE5hbWVHdWFyZCB9IGZyb20gJy4vbmFtZS5ndWFyZCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgLy8gaW1wb3J0IG1vZHVsZXNcclxuICAgIFVuaXZlcnNhbE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFsgLy8gdGhpcyBpcyBmb3JDaGlsZCwgbm90IGZvclJvb3QsIHNpbmNlIG5vdCByb290IG1vZHVsZVxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ0hvbWUnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTmFtZUxpc3RDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdIb21lLzppZCcsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtOYW1lR3VhcmRdLCAvLyBSb3V0ZXIgR3VhcmRcclxuICAgICAgICBjb21wb25lbnQ6IE5hbWVEZXRhaWxDb21wb25lbnRcclxuICAgICAgfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyAvLyBjb21wb25lbnRzIGFuZCBmaWx0ZXJzXHJcbiAgICBOYW1lTGlzdENvbXBvbmVudCxcclxuICAgIE5hbWVEZXRhaWxDb21wb25lbnQsXHJcbiAgICBOYW1lRmlsdGVyXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFsgLy8gc2VydmljZSBwcm92aWRlcnNcclxuICAgIE5hbWVTZXJ2aWNlLFxyXG4gICAgTmFtZUd1YXJkIC8vIEd1YXJkIHNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lTW9kdWxlIHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9zdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgSU5hbWUgfSBmcm9tICcuL25hbWUubW9kZWwnO1xyXG5pbXBvcnQgeyBOYW1lU2VydmljZSB9IGZyb20gJy4vbmFtZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmFtZS1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzJyldLFxyXG4gIHByb3ZpZGVyczogW05hbWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmFtZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gIG5hbWU6IElOYW1lO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcbiAgc2hvd01vZGFsOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbmFtZVNlcnZpY2U6IE5hbWVTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgcGFyYW1zID0+IHtcclxuICAgICAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xyXG4gICAgICAgIHRoaXMuZ2V0TmFtZShpZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYW1lU2VydmljZS5nZXROYW1lKGlkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIG5hbWUgPT4gdGhpcy5uYW1lID0gbmFtZSxcclxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yID0gPGFueT5lcnJvclxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmFtZSgpOiB2b2lkIHtcclxuICAgIC8vIENvbnZlcnQgdGFncyBhbmQgZmVhdHVyZXMgdG8gc3RyaW5nIGFycmF5XHJcbiAgICBsZXQgdGFncyA9IHRoaXMubmFtZS50YWdzLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLm5hbWUuZmVhdHVyZXMudG9TdHJpbmcoKTtcclxuICAgIHRoaXMubmFtZS50YWdzID0gdGFncy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG4gICAgdGhpcy5uYW1lLmZlYXR1cmVzID0gZmVhdHVyZXMuc3BsaXQoXCIsXCIpLm1hcChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgU3RyaW5nLnByb3RvdHlwZS50cmltKTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBuYW1lIHVwZGF0ZSBzZXJ2aWNlXHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLnVwZGF0ZU5hbWUodGhpcy5uYW1lKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICBzdWNjZXNzID0+IHtcclxuICAgICAgICBpZiAoc3VjY2VzcyAhPSB0aGlzLm5hbWUuaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgLSByZWNpZXZlZCBkaWZmZXJlbnQgbmFtZSBpZCBhZnRlciB1cGRhdGUgY2FsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvSG9tZSddKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSA8YW55PmVycm9yO1xyXG4gICAgICB9KTtcclxuICB9IFxyXG5cclxuICB0b2dnbGVNb2RhbCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd01vZGFsID0gIXRoaXMuc2hvd01vZGFsO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTmFtZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmRlbGV0ZU5hbWUodGhpcy5uYW1lLmlkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICBzdWNjZXNzID0+IHtcclxuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgLSByZWNpZXZlZCBmYWxzZSByZXN1bHQgYWZ0ZXIgZGVsZXRpb24gY2FsbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvSG9tZSddKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSA8YW55PmVycm9yO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IElOYW1lIH0gZnJvbSAnLi9uYW1lLm1vZGVsJztcclxuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hbWVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGFwaVVybCA9ICdhcGkvTmFtZXMnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc3Bpbm5lclNlcnZpY2U6IFNwaW5uZXJTZXJ2aWNlKSB7IH0gXHJcblxyXG4gIGdldE5hbWUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SU5hbWU+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLmFwaVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxJTmFtZT5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcclxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0dldE5hbWU6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldE5hbWVzKCk6IE9ic2VydmFibGU8SU5hbWVbXT4ge1xyXG4gICAgdGhpcy5zcGlubmVyU2VydmljZS5zaG93KCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxJTmFtZVtdPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnR2V0TmFtZXM6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB0aGlzLnNwaW5uZXJTZXJ2aWNlLmhpZGUoKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZE5hbWUobmFtZTogSU5hbWUpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xyXG5cclxuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVXJsLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8bnVtYmVyPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxyXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnQWRkTmFtZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hbWUobmFtZTogSU5hbWUpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xyXG5cclxuICAgIHRoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGlVcmwgKyBcIi9cIiArIG5hbWUuaWQsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxudW1iZXI+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdVcGRhdGVOYW1lOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zcGlubmVyU2VydmljZS5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTmFtZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3coKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYXBpVXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPGJvb2xlYW4+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXHJcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdEZWxldGVOYW1lOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zcGlubmVyU2VydmljZS5oaWRlKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgIC8vIFRPRE8gLSB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xyXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vcnhqcy1leHRlbnNpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vZXhjZXB0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGgxPk5hbWVzIERldGFpbHM8L2gxPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPVxcXCJuYW1lXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGROYW1lXFxcIj5OYW1lPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGRUYWdzXFxcIj5UYWdzPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZFRhZ3NcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLnRhZ3NcXFwiIC8+XFxyXFxuICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSB0YWdzIHNlcGFyYXRlZCBieSBjb21tYS4gRXhhbXBsZTogPGk+d29yaywgbWFuYWdlcjwvaT48L3NtYWxsPlxcclxcbiAgICAgIDxwPlxcclxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPlBvcHVsYXIgVGFnczo8L3NtYWxsPlxcclxcbiAgICAgIDwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZEZlYXR1cmVzXFxcIj5GZWF0dXJlczwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJhZGRGZWF0dXJlc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUuZmVhdHVyZXNcXFwiIC8+XFxyXFxuICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPnNraW5ueSwgYXNpYW4sIGdsYXNzZXM8L2k+PC9zbWFsbD5cXHJcXG4gICAgICA8cD5cXHJcXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1pbmZvXFxcIj5Qb3B1bGFyIEZlYXR1cmVzOjwvc21hbGw+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwidXBsb2FkUGhvdG9cXFwiPlVwbG9hZCBQaG90bzwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJ1cGxvYWRQaG90b1xcXCIgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbC1maWxlXFxcIiB0aXRsZT1cXFwiVGhpcyBGZWF0dXJlIG5vdCBFbmFibGVkXFxcIiBkaXNhYmxlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIlxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9Ib21lJ11cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgQ2FuY2VsXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2E+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPiZuYnNwOzwvc3Bhbj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLXRhcmdldD1cXFwiI215TW9kYWxcXFwiIChjbGljayk9XFxcInRvZ2dsZU1vZGFsKClcXFwiPlxcclxcbiAgICAgICAgRGVsZXRlXFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVOYW1lKClcXFwiPlxcclxcbiAgICAgICAgU2F2ZVxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPSdlcnJvcic+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXHJcXG4gICAgPGg0PkVycm9yPC9oND5cXHJcXG4gICAgPHA+XFxyXFxuICAgICAge3sgZXJyb3IgfX1cXHJcXG4gICAgPC9wPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiAqbmdJZj1cXFwic2hvd01vZGFsXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIGlkPVxcXCJteU1vZGFsXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcblxcclxcbiAgICAgIDwhLS0gTW9kYWwgY29udGVudC0tPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Db25maXJtYXRpb248L2g0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG5hbWUge3sgbmFtZS5uYW1lIH19PzwvcD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYnRuQ29uZmlybVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZU5hbWUoKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+RGVsZXRlPC9idXR0b24+XFxyXFxuICAgICAgICAgIDxidXR0b24gaWQ9XFxcImJ0bkNhbmNlbFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj5DYW5jZWw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJsb2NrIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnB1bGwtbGVmdCB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zdHJvbmcge1xcclxcbiAgY29sb3I6ICM1ODU4NTg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL3N1YnNjcmlwdGlvbic7XHJcblxyXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XHJcbmltcG9ydCB7IE5hbWVTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduYW1lLWxpc3QnLFxyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hbWUtbGlzdC5jb21wb25lbnQuaHRtbCcpLFxyXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vbmFtZS1saXN0LmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgcHJvdmlkZXJzOiBbIE5hbWVTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuYW1lczogSU5hbWVbXTtcclxuICBuYW1lOiBJTmFtZTtcclxuICBuYW1lYmxvY2s6IHN0cmluZztcclxuICBlcnJvcjogc3RyaW5nO1xyXG4gIHNob3dBZGRGb3JtOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2hvd0FkZEZvcm1RdWljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8vIFNlYXJjaGluZyBvciBGaWx0ZXJpbmcgbmFtZVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWVTZXJ2aWNlOiBOYW1lU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQgeyAvLyBmcm9tIE9uSW5pdCBpbnRlcmZhY2VcclxuICAgIHRoaXMubmFtZVNlcnZpY2UuZ2V0TmFtZXMoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobmFtZXMgPT4gdGhpcy5uYW1lcyA9IG5hbWVzLCAvLyBUaGlzIGlzIGxpa2UgYSBwcm9taXNlIC0gdHJpZ2dlcmVkIHdoZW4gc2VydmljZSByZXNwb25kcyB3aXRoIHJlc3VsdFxyXG4gICAgICBlcnJvciA9PiB0aGlzLmVycm9yID0gPGFueT5lcnJvcik7XHJcblxyXG4gICAgdGhpcy5jbGVhckFkZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUFkZEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dBZGRGb3JtID0gIXRoaXMuc2hvd0FkZEZvcm07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBZGRRdWljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd0FkZEZvcm1RdWljayA9ICF0aGlzLnNob3dBZGRGb3JtUXVpY2s7XHJcbiAgfVxyXG5cclxuICBzYXZlQWRkRm9ybSgpOiB2b2lkIHtcclxuICAgIC8vIERldGVybWluZSB3aGljaCBmb3JtIHRvIHNhdmUgZnJvbVxyXG4gICAgaWYgKHRoaXMuc2hvd0FkZEZvcm1RdWljaykge1xyXG4gICAgICBsZXQgc3BsaXR0ZWRTdHJpbmcgPSB0aGlzLm5hbWVibG9jay5zcGxpdChcIlxcblwiKTtcclxuICAgICAgdGhpcy5uYW1lLm5hbWUgPSBzcGxpdHRlZFN0cmluZ1swXTtcclxuICAgICAgdGhpcy5uYW1lLnRhZ3MgPSBzcGxpdHRlZFN0cmluZ1sxXSA/IHNwbGl0dGVkU3RyaW5nWzFdLnNwbGl0KFwiLFwiKSA6IFtdO1xyXG4gICAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBzcGxpdHRlZFN0cmluZ1syXSA/IHNwbGl0dGVkU3RyaW5nWzJdLnNwbGl0KFwiLFwiKSA6IFtdO1xyXG4gICAgfVxyXG4gICAgLy8gVHJpbSB0aGUgdGFncyBhbmQgZmVhdHVyZXMgZmllbGRzXHJcbiAgICBsZXQgdGFncyA9IHRoaXMubmFtZS50YWdzLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLm5hbWUuZmVhdHVyZXMudG9TdHJpbmcoKTtcclxuICAgIHRoaXMubmFtZS50YWdzID0gdGFncy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG4gICAgdGhpcy5uYW1lLmZlYXR1cmVzID0gZmVhdHVyZXMuc3BsaXQoXCIsXCIpLm1hcChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgU3RyaW5nLnByb3RvdHlwZS50cmltKTtcclxuXHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmFkZE5hbWUodGhpcy5uYW1lKS5zdWJzY3JpYmUocyA9PiB7XHJcbiAgICAgIHRoaXMubmFtZXMucHVzaCh0aGlzLm5hbWUpO1xyXG4gICAgICB0aGlzLmNsZWFyQWRkRm9ybSgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUFkZEZvcm0oKTtcclxuICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckFkZEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hbWUgPSB7XHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICBmZWF0dXJlczogW11cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YXJ0aWNsZSBjbGFzcz1cXFwidGVtcGxhdGUgYW5pbWF0ZWQgc2xpZGVJblJpZ2h0XFxcIj5cXHJcXG4gIDxoMj5MaXN0IG9mIE5hbWVzPC9oMj5cXHJcXG4gIDxkaXYgaWQ9XFxcImFkZEJ1dHRvblxcXCIgKm5nSWY9XFxcIiFzaG93QWRkRm9ybVxcXCI+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlQWRkRm9ybSgpXFxcIj5cXHJcXG4gICAgICBBZGRcXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgaWQ9XFxcInNlYXJjaEZpbHRlclxcXCI+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPVxcXCJzaG93QWRkRm9ybVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgcHVsbC1yaWdodFxcXCIgKGNsaWNrKT1cXFwic2hvd0FkZEZvcm0gPSAhc2hvd0FkZEZvcm1cXFwiPlxcclxcbiAgICAgICAgICBDYW5jZWxcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPiZuYnNwOzwvc3Bhbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XFxcIiAoY2xpY2spPVxcXCJzYXZlQWRkRm9ybSgpXFxcIj5cXHJcXG4gICAgICAgICAgU2F2ZVxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiYWRkRm9ybVF1aWNrXFxcIiAqbmdJZj1cXFwic2hvd0FkZEZvcm1RdWlja1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkUXVpY2tcXFwiPlF1aWNrIEFkZCA8L2xhYmVsPiA8YSBbYXR0ci5ocmVmXT1cXFwibnVsbFxcXCIgKGNsaWNrKT0ndG9nZ2xlQWRkUXVpY2soKSc+IFNob3cgRnVsbCBGb3JtPC9hPlxcclxcbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XFxcImFkZFF1aWNrXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByb3dzPVxcXCIzXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZWJsb2NrXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgRW50ZXIgTmFtZSwgVGFncyBhbmQgRmVhdHVyZXMgb24gZWFjaCBsaW5lLiBNdWx0aXBsZSB0YWdzIGFuZCBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBFeGFtcGxlOjxiciAvPlxcclxcbiAgICAgICAgICAgIDxpPkpvaG4gTGVlPC9pPjxiciAvPlxcclxcbiAgICAgICAgICAgIDxpPndvcmssIG1hbmFnZXI8L2k+PGJyIC8+XFxyXFxuICAgICAgICAgICAgPGk+c2tpbm55LCBhc2lhbiwgZ2xhc3NlczwvaT48YnIgLz5cXHJcXG4gICAgICAgICAgPC9zbWFsbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgaWQ9XFxcImFkZEZvcm1cXFwiICpuZ0lmPVxcXCIhc2hvd0FkZEZvcm1RdWlja1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkTmFtZVxcXCI+TmFtZTwvbGFiZWw+IDxhIFthdHRyLmhyZWZdPVxcXCJudWxsXFxcIiAoY2xpY2spPSd0b2dnbGVBZGRRdWljaygpJz4gU2hvdyBRdWljayBGb3JtPC9hPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRUYWdzXFxcIj5UYWdzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRUYWdzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS50YWdzXFxcIiAvPlxcclxcbiAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+QWRkIG11bHRpcGxlIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hLiBFeGFtcGxlOiA8aT53b3JrLCBtYW5hZ2VyPC9pPjwvc21hbGw+XFxyXFxuICAgICAgICAgIDxwPlxcclxcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1pbmZvXFxcIj5Qb3B1bGFyIFRhZ3M6PC9zbWFsbD5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkRmVhdHVyZXNcXFwiPkZlYXR1cmVzPC9sYWJlbD5cXHJcXG4gICAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRGZWF0dXJlc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUuZmVhdHVyZXNcXFwiIC8+XFxyXFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC13YXJuaW5nXFxcIj5BZGQgbXVsdGlwbGUgZmVhdHVyZXMgc2VwYXJhdGVkIGJ5IGNvbW1hLiBFeGFtcGxlOiA8aT5za2lubnksIGFzaWFuLCBnbGFzc2VzPC9pPjwvc21hbGw+XFxyXFxuICAgICAgICAgIDxwPlxcclxcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1pbmZvXFxcIj5Qb3B1bGFyIEZlYXR1cmVzOjwvc21hbGw+XFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVwbG9hZFBob3RvXFxcIj5VcGxvYWQgUGhvdG88L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVwbG9hZFBob3RvXFxcIiB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWZpbGVcXFwiIHRpdGxlPVxcXCJUaGlzIEZlYXR1cmUgbm90IEVuYWJsZWRcXFwiIGRpc2FibGVkPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiZXJyb3JcXFwiICpuZ0lmPSdlcnJvcic+XFxyXFxuICAgICAgICA8aDQ+RXJyb3I8L2g0PlxcclxcbiAgICAgICAgPHA+XFxyXFxuICAgICAgICAgIHt7IGVycm9yIH19XFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiAqbmdJZj0nbmFtZXMgJiYgbmFtZXMubGVuZ3RoJz5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCIgKm5nRm9yPVxcXCJsZXQgbmFtZSBvZiBuYW1lc1xcXCI+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwiY2FyZC1pbWFnZSB0aHVtYm5haWwgcHVsbC1sZWZ0XFxcIiBzcmM9XFxcIi9kaXN0L21haW4vaW1hZ2VzL2xlZ28wMy5wbmdcXFwiIGFsdD1cXFwiUGVyc29uIFBob3RvXFxcIj5cXHJcXG4gICAgICA8YSBocmVmPVxcXCJcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvSG9tZScsIG5hbWUuaWRdXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgRWRpdFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9hPlxcclxcbiAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+e3sgbmFtZS5uYW1lIH19PC9oND5cXHJcXG5cXHJcXG4gICAgICA8aHIgY2xhc3M9XFxcImNhcmQtc3BhY2VyXFxcIiAvPlxcclxcblxcclxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcclxcbiAgICAgICAgPHN0cm9uZz5UYWdzOiA8L3N0cm9uZz5cXHJcXG4gICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IHRhZyBvZiBuYW1lLnRhZ3NcXFwiPnt7IHRhZyB9fSwgPC9zcGFuPlxcclxcbiAgICAgIDwvcD5cXHJcXG4gICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0XFxcIj5cXHJcXG4gICAgICAgIDxzdHJvbmc+RmVhdHVyZXM6IDwvc3Ryb25nPlxcclxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgZmVhdHVyZSBvZiBuYW1lLmZlYXR1cmVzXFxcIj57eyBmZWF0dXJlIH19LCA8L3NwYW4+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1tdXRlZFxcXCI+TW9kaWZpZWQ6IDMgbWlucyBhZ288L3NtYWxsPlxcclxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5DcmVhdGVkOiAgMyBtaW5zIGFnbzwvc21hbGw+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9hcnRpY2xlPlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmFtZS1saXN0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJsb2NrIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYmxvY2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjNmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnB1bGwtbGVmdCB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zdHJvbmcge1xcclxcbiAgY29sb3I6ICM1ODU4NTg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XHJcblxyXG5AUGlwZSh7IC8vIERlY29yYXRvciBmb3IgdGhlIFByb2R1Y3RGaWx0ZXJQaXBlXHJcbiAgbmFtZTogJ25hbWVGaWx0ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYW1lRmlsdGVyIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogSU5hbWVbXSwgZmlsdGVyQnk6IHN0cmluZyk6IElOYW1lW10ge1xyXG4gICAgZmlsdGVyQnkgPSBmaWx0ZXJCeSA/IGZpbHRlckJ5LnRvTG9jYWxlTG93ZXJDYXNlKCkgOiBudWxsO1xyXG4gICAgcmV0dXJuIGZpbHRlckJ5ID8gdmFsdWUuZmlsdGVyKChuYW1lOiBJTmFtZSkgPT5cclxuICAgICAgbmFtZS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJCeSkgIT09IC0xKSA6IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUuZmlsdGVyLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IMKgY2xhc3MgTmFtZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIC8vIFRoZSByb3V0ZSBvbmx5IGFsbG93cyBudW1lcmljIGlkIG51bWJlciBvciBuZXcga2V5d29yZFxyXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaWQgPSArcm91dGUudXJsWzFdLnBhdGg7XHJcblxyXG4gICAgaWYgKGlzTmFOKGlkKSB8fCBpZCA8IDEpIHtcclxuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL0hvbWUnXSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5ndWFyZC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYm91dCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnKSxcclxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Fib3V0LmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YXJ0aWNsZSBjbGFzcz1cXFwidGVtcGxhdGUgYW5pbWF0ZWQgc2xpZGVJblJpZ2h0XFxcIj5cXHJcXG4gIDxoMj5BYm91dDwvaDI+XFxyXFxuICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyXFxcIj5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgIDx0aD5WZXJzaW9uPC90aD5cXHJcXG4gICAgICA8dGQ+MC4xPC90ZD5cXHJcXG4gICAgICA8dGQ+U2VwdGVtYmVyIDIwMTY8L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPkF1dGhlbnRpY2F0aW9uPC90aD5cXHJcXG4gICAgICA8dGQ+R29vZ2xlPC90ZD5cXHJcXG4gICAgICA8dGQ+PC90ZD5cXHJcXG4gICAgPC90cj5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgIDx0ZD5NaWNyb3NvZnQ8L3RkPlxcclxcbiAgICAgIDx0ZD48L3RkPlxcclxcbiAgICA8L3RyPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRoPjwvdGg+XFxyXFxuICAgICAgPHRkPkZhY2Vib29rPC90ZD5cXHJcXG4gICAgICA8dGQ+PC90ZD5cXHJcXG4gICAgPC90cj5cXHJcXG4gICAgPHRyPlxcclxcbiAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgIDx0ZD5Ud2l0dGVyPC90ZD5cXHJcXG4gICAgICA8dGQ+PC90ZD5cXHJcXG4gICAgPC90cj5cXHJcXG4gIDwvdGFibGU+XFxyXFxuICA8ZGl2IGlkPVxcXCJidG5Mb2dvdXRcXFwiPlxcclxcbiAgICA8YSBocmVmPVxcXCJIb21lL0xvZ291dFxcXCI+XFxyXFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgIExvZ291dFxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2E+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2FydGljbGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Fib3V0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48c3Bpbm5lcj48L3NwaW5uZXI+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxyXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1kbC1sYXlvdXRfX2hlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG4ubWRsLWxheW91dF9fY29udGVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiA2OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluay5yb3V0ZXItbGluay1hY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsucm91dGVyLWxpbmstYWN0aXZlOjphZnRlciB7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSw2NCwxMjkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWRsLWxheW91dF9faGVhZGVyLXJvdyB7XFxyXFxuICAgIGhlaWdodDogNTZweDtcXHJcXG4gICAgcGFkZGluZzogMCAxNnB4IDAgNzJweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiAyZW07XFxyXFxufVxcclxcblxcclxcbmFydGljbGUudGVtcGxhdGUge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlZCB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDQwMG1zO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2V0LWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogMmVtO1xcclxcbiAgdG9wOiAxZW07XFxyXFxufVxcclxcblxcclxcbiNzcGlubmVyIHtcXHJcXG4gIGJvcmRlci13aWR0aDogOGVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyMCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBtYXJnaW4tdG9wOiAtNTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNzBweDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgI3Jlc2V0LWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmVcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9