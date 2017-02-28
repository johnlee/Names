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
	var name_module_1 = __webpack_require__(7);
	var about_component_1 = __webpack_require__(26);
	var app_component_1 = __webpack_require__(30);
	var navmenu_component_1 = __webpack_require__(34);
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
	            navmenu_component_1.NavMenuComponent,
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
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var forms_1 = __webpack_require__(8);
	var router_1 = __webpack_require__(6);
	var name_detail_component_1 = __webpack_require__(9);
	var name_list_component_1 = __webpack_require__(20);
	var name_service_1 = __webpack_require__(10);
	var name_filter_1 = __webpack_require__(24);
	var name_guard_1 = __webpack_require__(25);
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
/* 8 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 9 */
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
	var name_service_1 = __webpack_require__(10);
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
	        template: __webpack_require__(16),
	        styles: [__webpack_require__(17)],
	        providers: [name_service_1.NameService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute,
	        router_1.Router,
	        name_service_1.NameService])
	], NameDetailComponent);
	exports.NameDetailComponent = NameDetailComponent;


/***/ },
/* 10 */
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
	var http_1 = __webpack_require__(11);
	var Observable_1 = __webpack_require__(12);
	__webpack_require__(13); // used to load the javascript
	__webpack_require__(14);
	__webpack_require__(15);
	var NameService = (function () {
	    function NameService(http) {
	        this.http = http;
	        this.apiUrl = 'api/Names';
	    } // Inject HTTP Service
	    NameService.prototype.getName = function (id) {
	        return this.http
	            .get(this.apiUrl + "/" + id)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('GetName: ' + JSON.stringify(data)); })
	            .catch(this.handleError);
	    };
	    NameService.prototype.getNames = function () {
	        return this.http
	            .get(this.apiUrl)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('GetNames: ' + JSON.stringify(data)); })
	            .catch(this.handleError);
	    };
	    NameService.prototype.addName = function (name) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(name);
	        //this.spinnerService.show();
	        return this.http.post(this.apiUrl, body, options)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('AddName: ' + JSON.stringify(data)); })
	            .catch(this.handleError);
	        //.catch(this.exceptionService.catchBadResponse)
	        //.finally(() => this.spinnerService.hide());
	    };
	    NameService.prototype.updateName = function (name) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var body = JSON.stringify(name);
	        //this.spinnerService.show();
	        return this.http.put(this.apiUrl + "/" + name.id, body, options)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('UpdateName: ' + JSON.stringify(data)); })
	            .catch(this.handleError);
	        //.catch(this.exceptionService.catchBadResponse);
	        //.finally(() => this.spinnerService.hide());
	    };
	    NameService.prototype.deleteName = function (id) {
	        //this.spinnerService.show();
	        return this.http.delete(this.apiUrl + "/" + id)
	            .map(function (res) { return res.json(); }) // .map is Observable
	            .do(function (data) { return console.log('DeleteName: ' + JSON.stringify(data)); })
	            .catch(this.handleError);
	        //.finally(() => this.spinnerService.hide());
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
	    __metadata("design:paramtypes", [http_1.Http])
	], NameService);
	exports.NameService = NameService;


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Observable");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/do");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\r\n<h1>Names Details</h1>\r\n\r\n<div class=\"card\" *ngIf=\"name\">\r\n  <div class=\"card-block\">\r\n    <div class=\"form-group\">\r\n      <label for=\"addName\">Name</label>\r\n      <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addTags\">Tags</label>\r\n      <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n      <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, manager</i></small>\r\n      <p>\r\n        <small class=\"text-info\">Popular Tags:</small>\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"addFeatures\">Features</label>\r\n      <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n      <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n      <p>\r\n        <small class=\"text-info\">Popular Features:</small>\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"uploadPhoto\">Upload Photo</label>\r\n      <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not Enabled\" disabled>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <a href=\"\" [routerLink]=\"['/Home']\">\r\n        <button class=\"btn btn-default\">\r\n          Cancel\r\n        </button>\r\n      </a>\r\n      <span class=\"pull-right\">&nbsp;</span>\r\n      <button class=\"btn btn-danger\" (click)=\"deleteName()\">\r\n        Delete\r\n      </button>\r\n      <button class=\"btn btn-primary\" (click)=\"updateName()\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" *ngIf='error'>\r\n  <div class=\"card-block\">\r\n    <h4>Error</h4>\r\n    <p>\r\n      {{ error }}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(18);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.card {\r\n  border: none;\r\n  padding: 0px;\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n.card-block {\r\n  border: 1px solid #cfcfcf;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.pull-left {\r\n  margin: 0px;\r\n}\r\n\r\n.card-image {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.card-title {\r\n  margin-left: 60px;\r\n}\r\n\r\nstrong {\r\n  color: #585858;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 19 */
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
/* 20 */
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
	var name_service_1 = __webpack_require__(10);
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
	        template: __webpack_require__(21),
	        styles: [__webpack_require__(22)],
	        providers: [name_service_1.NameService]
	    }),
	    __metadata("design:paramtypes", [name_service_1.NameService])
	], NameListComponent);
	exports.NameListComponent = NameListComponent;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<article class=\"template animated slideInRight\">\r\n  <h2>List of Names</h2>\r\n  <div id=\"addButton\" *ngIf=\"!showAddForm\">\r\n    <button class=\"btn btn-primary\" (click)=\"toggleAddForm()\">\r\n      Add\r\n    </button>\r\n  </div>\r\n\r\n  <div id=\"searchFilter\">\r\n\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"showAddForm\">\r\n    <div class=\"card-block\">\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-secondary pull-right\" (click)=\"showAddForm = !showAddForm\">\r\n          Cancel\r\n        </button>\r\n        <span class=\"pull-right\">&nbsp;</span>\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"saveAddForm()\">\r\n          Save\r\n        </button>\r\n      </div>\r\n      <div id=\"addFormQuick\" *ngIf=\"showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addQuick\">Quick Add </label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Full Form</a>\r\n          <textarea id=\"addQuick\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"nameblock\"></textarea>\r\n          <small class=\"text-warning\">\r\n            Enter Name, Tags and Features on each line. Multiple tags and features separated by commas. Example:<br />\r\n            <i>John Lee</i><br />\r\n            <i>work, manager</i><br />\r\n            <i>skinny, asian, glasses</i><br />\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div id=\"addForm\" *ngIf=\"!showAddFormQuick\">\r\n        <div class=\"form-group\">\r\n          <label for=\"addName\">Name</label> <a [attr.href]=\"null\" (click)='toggleAddQuick()'> Show Quick Form</a>\r\n          <input id=\"addName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.name\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addTags\">Tags</label>\r\n          <input id=\"addTags\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.tags\" />\r\n          <small class=\"text-warning\">Add multiple tags separated by comma. Example: <i>work, manager</i></small>\r\n          <p>\r\n            <small class=\"text-info\">Popular Tags:</small>\r\n          </p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"addFeatures\">Features</label>\r\n          <input id=\"addFeatures\" type=\"text\" class=\"form-control\" [(ngModel)]=\"name.features\" />\r\n          <small class=\"text-warning\">Add multiple features separated by comma. Example: <i>skinny, asian, glasses</i></small>\r\n          <p>\r\n            <small class=\"text-info\">Popular Features:</small>\r\n          </p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"uploadPhoto\">Upload Photo</label>\r\n          <input id=\"uploadPhoto\" type=\"file\" class=\"form-control-file\" title=\"This Feature not Enabled\" disabled>\r\n        </div>\r\n      </div>\r\n      <div id=\"error\" *ngIf='error'>\r\n        <h4>Error</h4>\r\n        <p>\r\n          {{ error }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf='names && names.length'>\r\n    <div class=\"card-block\" *ngFor=\"let name of names\">\r\n      <img class=\"card-image thumbnail pull-left\" src=\"/dist/main/images/lego03.png\" alt=\"Person Photo\">\r\n      <a href=\"\" [routerLink]=\"['/Home', name.id]\">\r\n        <button class=\"btn btn-default pull-right\">\r\n          Edit\r\n        </button>\r\n      </a>\r\n      <h4 class=\"card-title\">{{ name.name }}</h4>\r\n\r\n      <hr class=\"card-spacer\" />\r\n\r\n      <p class=\"card-text\">\r\n        <strong>Tags: </strong>\r\n        <span *ngFor=\"let tag of name.tags\">{{ tag }}, </span>\r\n      </p>\r\n      <p class=\"card-text\">\r\n        <strong>Features: </strong>\r\n        <span *ngFor=\"let feature of name.features\">{{ feature }}, </span>\r\n      </p>\r\n      <div class=\"card-footer\">\r\n        <small class=\"text-muted\">Modified: 3 mins ago</small>\r\n        <small class=\"text-muted\">Created:  3 mins ago</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</article>\r\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(23);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.card {\r\n  border: none;\r\n  padding: 0px;\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n.card-block {\r\n  border: 1px solid #cfcfcf;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card-block:hover {\r\n  background-color: #dff3ff;\r\n}\r\n\r\n.pull-left {\r\n  margin: 0px;\r\n}\r\n\r\n.card-image {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.card-title {\r\n  margin-left: 60px;\r\n}\r\n\r\nstrong {\r\n  color: #585858;\r\n}\r\n", ""]);
	
	// exports


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
/* 25 */
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
/* 26 */
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
	        template: __webpack_require__(27),
	        styles: [__webpack_require__(28)]
	    })
	], AboutComponent);
	exports.AboutComponent = AboutComponent;


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\r\n<h1>About</h1>"

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(29);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 30 */
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
	        template: __webpack_require__(31),
	        styles: [__webpack_require__(32)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(33);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n\n.mdl-layout__header {\n  position: fixed;\n  background-color: #222;\n}\n.mdl-layout__content {\n  margin-top: 68px;\n}\n\n.nav-link {\n  padding: 0 1em;\n  width: 100px;\n  color: rgba(255,255,255,.6);\n  text-align: center;\n  text-decoration: none;\n}\n\n.nav-link.router-link-active {\n  color: rgba(255,255,255, 1);\n}\n\n.nav-link.router-link-active::after {\n    height: 3px;\n    width: 100%;\n    display: block;\n    content: \" \";\n    bottom: 0;\n    left: 0;\n    position: inherit;\n    background: rgb(255,64,129);\n}\n\n\n.mdl-layout__header-row {\n    height: 56px;\n    padding: 0 16px 0 72px;\n    padding-left: 8px;\n    background-color: #222;\n}\n\n.page-content {\n  margin: 2em;\n}\n\narticle.template {\n  opacity: 0;\n  -webkit-transition: opacity 400ms ease-in;\n  -moz-transition: opacity 400ms ease-in;\n  transition: opacity 400ms ease-in;\n}\n\n.animated {\n  -webkit-animation-duration: 400ms;\n  animation-duration: 400ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n#reset-button {\n  position: fixed;\n  right: 2em;\n  top: 1em;\n}\n\n#spinner {\n  border-width: 8em;\n  position: fixed;\n  top: 20%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -70px;\n  z-index: 9999;\n}\n\n@media (max-width: 480px) {\n  #reset-button {\n    display: none\n  }\n}\n", ""]);
	
	// exports


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
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(35),
	        styles: [__webpack_require__(36)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">EREUM <small>v 0.1</small></a> \n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-book'></span> Names\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/About']\">\n                        <span class='glyphicon glyphicon-question-sign'></span> About\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

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

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDM5NDMyZDBhNTRiNzllOTQ3YjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUubW9kdWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcz84NjRmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzPzdlMzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUuZmlsdGVyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcz85NmFmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcz82YzJhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/MzlhNyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLG9CQUF5QixNQUFXO0tBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1NBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksRUFBRSwyQkFBMkI7YUFDakMsVUFBVSxFQUFFO2lCQUNSLE9BQU8sRUFBRSxHQUFHO2lCQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDdEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN4QixPQUFPLEVBQUUsS0FBSztpQkFDZCw2RkFBNkY7aUJBQzdGLDZEQUE2RDtpQkFDN0QsUUFBUSxFQUFFLG1FQUFtRTtjQUNoRjthQUNELGFBQWEsRUFBRSxVQUFDLFVBQVUsRUFB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O0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDBDQUF5Qyx5QkFBeUIsR0FBRyxxSEFBcUgsZ0NBQWdDLG1CQUFtQixHQUFHLDJGQUEyRixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsaUJBQWlCLEdBQUcsK0JBQStCLHlGQUF5Rix1QkFBdUIsa0NBQWtDLE9BQU8sZUFBZSw2QkFBNkIsNEJBQTRCLHVCQUF1QixPQUFPLHNCQUFzQixzQkFBc0IsT0FBTyx3QkFBd0IscUNBQXFDLHVCQUF1QixPQUFPLGtCQUFrQixzQkFBc0IsT0FBTyxrQkFBa0Isc0JBQXNCLDBCQUEwQixzQkFBc0IsT0FBTyxvQkFBb0IsNkJBQTZCLDZCQUE2QixPQUFPLGlCQUFpQixvRkFBb0YsOEJBQThCLDJCQUEyQixrQ0FBa0MsT0FBTyxHQUFHOztBQUV4dkMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkMzk0MzJkMGE1NGI3OWU5NDdiMiIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOYW1lTW9kdWxlIH0gZnJvbSAnLi9uYW1lcy9uYW1lLm1vZHVsZSc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgTmFtZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdIb21lJyxcclxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL25hbWVzL25hbWUubW9kdWxlI05hbWVNb2R1bGUnXHJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdBYm91dCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBBYm91dENvbXBvbmVudFxyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnSG9tZScsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgICAgfSwgLy8gZ2VuZXJpYyByZWRpcmVjdCBcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyoqJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnSG9tZScsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgICAgfSAvLyBhbnl0aGluZyBub3QgbWF0Y2ggcmVkaXJlY3QgXG4gICAgXSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE5hbWVEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL25hbWUtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYW1lTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbmFtZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYW1lU2VydmljZSB9IGZyb20gJy4vbmFtZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5hbWVGaWx0ZXIgfSBmcm9tICcuL25hbWUuZmlsdGVyJztcbmltcG9ydCB7IE5hbWVHdWFyZCB9IGZyb20gJy4vbmFtZS5ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgLy8gaW1wb3J0IG1vZHVsZXNcbiAgICBVbml2ZXJzYWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFsgLy8gdGhpcyBpcyBmb3JDaGlsZCwgbm90IGZvclJvb3QsIHNpbmNlIG5vdCByb290IG1vZHVsZVxuICAgICAge1xuICAgICAgICBwYXRoOiAnSG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBOYW1lTGlzdENvbXBvbmVudFxyXG4gICAgICB9LFxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdIb21lLzppZCcsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbTmFtZUd1YXJkXSwgLy8gUm91dGVyIEd1YXJkXG4gICAgICAgIGNvbXBvbmVudDogTmFtZURldGFpbENvbXBvbmVudFxuICAgICAgfVxuICAgIF0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyAvLyBjb21wb25lbnRzIGFuZCBmaWx0ZXJzXG4gICAgTmFtZUxpc3RDb21wb25lbnQsXG4gICAgTmFtZURldGFpbENvbXBvbmVudCxcbiAgICBOYW1lRmlsdGVyXG4gIF0sXG4gIHByb3ZpZGVyczogWyAvLyBzZXJ2aWNlIHByb3ZpZGVyc1xuICAgIE5hbWVTZXJ2aWNlLFxuICAgIE5hbWVHdWFyZCAvLyBHdWFyZCBzZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmFtZU1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL3N1YnNjcmlwdGlvbic7XG5cbmltcG9ydCB7IElOYW1lIH0gZnJvbSAnLi9uYW1lLm1vZGVsJztcbmltcG9ydCB7IE5hbWVTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYW1lLWRldGFpbCcsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sJyksXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcycpXSxcbiAgcHJvdmlkZXJzOiBbTmFtZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG4gIG5hbWU6IElOYW1lO1xuICBlcnJvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBuYW1lU2VydmljZTogTmFtZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShcbiAgICAgIHBhcmFtcyA9PiB7XG4gICAgICAgIGxldCBpZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgIHRoaXMuZ2V0TmFtZShpZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXROYW1lKGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmdldE5hbWUoaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIG5hbWUgPT4gdGhpcy5uYW1lID0gbmFtZSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvciA9IDxhbnk+ZXJyb3JcclxuICAgICAgKTtcclxuICB9XG5cbiAgdXBkYXRlTmFtZSgpOiB2b2lkIHtcbiAgICAvLyBDb252ZXJ0IHRhZ3MgYW5kIGZlYXR1cmVzIHRvIHN0cmluZyBhcnJheVxuICAgIGxldCB0YWdzID0gdGhpcy5uYW1lLnRhZ3MudG9TdHJpbmcoKTtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLm5hbWUuZmVhdHVyZXMudG9TdHJpbmcoKTtcbiAgICB0aGlzLm5hbWUudGFncyA9IHRhZ3Muc3BsaXQoXCIsXCIpLm1hcChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgU3RyaW5nLnByb3RvdHlwZS50cmltKTtcbiAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBmZWF0dXJlcy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuXG4gICAgLy8gQ2FsbCB0aGUgbmFtZSB1cGRhdGUgc2VydmljZVxuICAgIHRoaXMubmFtZVNlcnZpY2UudXBkYXRlTmFtZSh0aGlzLm5hbWUpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIGlmIChzdWNjZXNzICE9IHRoaXMubmFtZS5pZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgLSByZWNpZXZlZCBkaWZmZXJlbnQgbmFtZSBpZCBhZnRlciB1cGRhdGUgY2FsbFwiKTtcclxuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL0hvbWUnXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yID0gPGFueT5lcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfSBcblxuICBkZWxldGVOYW1lKCk6IHZvaWQge1xuICAgIHRoaXMubmFtZVNlcnZpY2UuZGVsZXRlTmFtZSh0aGlzLm5hbWUuaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgLSByZWNpZXZlZCBmYWxzZSByZXN1bHQgYWZ0ZXIgZGVsZXRpb24gY2FsbFwiKTtcclxuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL0hvbWUnXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yID0gPGFueT5lcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7IC8vIHVzZWQgdG8gbG9hZCB0aGUgamF2YXNjcmlwdFxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IElOYW1lIH0gZnJvbSAnLi9uYW1lLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hbWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnYXBpL05hbWVzJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfSAvLyBJbmplY3QgSFRUUCBTZXJ2aWNlXG5cbiAgZ2V0TmFtZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJTmFtZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwgKyBcIi9cIiArIGlkKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gPElOYW1lPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ0dldE5hbWU6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxuXG4gIGdldE5hbWVzKCk6IE9ic2VydmFibGU8SU5hbWVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5hcGlVcmwpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8SU5hbWVbXT5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdHZXROYW1lczogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuICBcbiAgYWRkTmFtZShuYW1lOiBJTmFtZSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobmFtZSk7XG5cbiAgICAvL3RoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCwgYm9keSwgb3B0aW9ucylcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IDxudW1iZXI+cmVzLmpzb24oKSkgLy8gLm1hcCBpcyBPYnNlcnZhYmxlXG4gICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnQWRkTmFtZTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICAvLy5jYXRjaCh0aGlzLmV4Y2VwdGlvblNlcnZpY2UuY2F0Y2hCYWRSZXNwb25zZSlcbiAgICAvLy5maW5hbGx5KCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKTtcclxuICB9XG5cbiAgdXBkYXRlTmFtZShuYW1lOiBJTmFtZSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobmFtZSk7XG5cbiAgICAvL3RoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGlVcmwgKyBcIi9cIiArIG5hbWUuaWQsIGJvZHksIG9wdGlvbnMpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8bnVtYmVyPnJlcy5qc29uKCkpIC8vIC5tYXAgaXMgT2JzZXJ2YWJsZVxuICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ1VwZGF0ZU5hbWU6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgLy8uY2F0Y2godGhpcy5leGNlcHRpb25TZXJ2aWNlLmNhdGNoQmFkUmVzcG9uc2UpO1xuICAgIC8vLmZpbmFsbHkoKCkgPT4gdGhpcy5zcGlubmVyU2VydmljZS5oaWRlKCkpO1xuICB9XG5cbiAgZGVsZXRlTmFtZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy90aGlzLnNwaW5uZXJTZXJ2aWNlLnNob3coKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFwaVVybCArIFwiL1wiICsgaWQpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiA8Ym9vbGVhbj5yZXMuanNvbigpKSAvLyAubWFwIGlzIE9ic2VydmFibGVcbiAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdEZWxldGVOYW1lOiAnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgICAgLy8uZmluYWxseSgoKSA9PiB0aGlzLnNwaW5uZXJTZXJ2aWNlLmhpZGUoKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgIC8vIFRPRE8gLSB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xyXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL09ic2VydmFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL09ic2VydmFibGVcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxyXFxuPGgxPk5hbWVzIERldGFpbHM8L2gxPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPVxcXCJuYW1lXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGROYW1lXFxcIj5OYW1lPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLm5hbWVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGRUYWdzXFxcIj5UYWdzPC9sYWJlbD5cXHJcXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZFRhZ3NcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLnRhZ3NcXFwiIC8+XFxyXFxuICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSB0YWdzIHNlcGFyYXRlZCBieSBjb21tYS4gRXhhbXBsZTogPGk+d29yaywgbWFuYWdlcjwvaT48L3NtYWxsPlxcclxcbiAgICAgIDxwPlxcclxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPlBvcHVsYXIgVGFnczo8L3NtYWxsPlxcclxcbiAgICAgIDwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZEZlYXR1cmVzXFxcIj5GZWF0dXJlczwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJhZGRGZWF0dXJlc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUuZmVhdHVyZXNcXFwiIC8+XFxyXFxuICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPnNraW5ueSwgYXNpYW4sIGdsYXNzZXM8L2k+PC9zbWFsbD5cXHJcXG4gICAgICA8cD5cXHJcXG4gICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC1pbmZvXFxcIj5Qb3B1bGFyIEZlYXR1cmVzOjwvc21hbGw+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgPGxhYmVsIGZvcj1cXFwidXBsb2FkUGhvdG9cXFwiPlVwbG9hZCBQaG90bzwvbGFiZWw+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJ1cGxvYWRQaG90b1xcXCIgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbC1maWxlXFxcIiB0aXRsZT1cXFwiVGhpcyBGZWF0dXJlIG5vdCBFbmFibGVkXFxcIiBkaXNhYmxlZD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIlxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9Ib21lJ11cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgQ2FuY2VsXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2E+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPiZuYnNwOzwvc3Bhbj5cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlTmFtZSgpXFxcIj5cXHJcXG4gICAgICAgIERlbGV0ZVxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidXBkYXRlTmFtZSgpXFxcIj5cXHJcXG4gICAgICAgIFNhdmVcXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiAqbmdJZj0nZXJyb3InPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgIDxoND5FcnJvcjwvaDQ+XFxyXFxuICAgIDxwPlxcclxcbiAgICAgIHt7IGVycm9yIH19XFxyXFxuICAgIDwvcD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJsb2NrIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnB1bGwtbGVmdCB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zdHJvbmcge1xcclxcbiAgY29sb3I6ICM1ODU4NTg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9zdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XG5pbXBvcnQgeyBOYW1lU2VydmljZSB9IGZyb20gJy4vbmFtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmFtZS1saXN0JyxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmFtZS1saXN0LmNvbXBvbmVudC5odG1sJyksXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vbmFtZS1saXN0LmNvbXBvbmVudC5jc3MnKV0sXG4gIHByb3ZpZGVyczogWyBOYW1lU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbmFtZXM6IElOYW1lW107XG4gIG5hbWU6IElOYW1lO1xuICBuYW1lYmxvY2s6IHN0cmluZztcbiAgZXJyb3I6IHN0cmluZztcbiAgc2hvd0FkZEZvcm06IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd0FkZEZvcm1RdWljazogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gU2VhcmNoaW5nIG9yIEZpbHRlcmluZyBuYW1lXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYW1lU2VydmljZTogTmFtZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyAvLyBmcm9tIE9uSW5pdCBpbnRlcmZhY2VcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmdldE5hbWVzKClcbiAgICAgICAgLnN1YnNjcmliZShuYW1lcyA9PiB0aGlzLm5hbWVzID0gbmFtZXMsIC8vIFRoaXMgaXMgbGlrZSBhIHByb21pc2UgLSB0cmlnZ2VyZWQgd2hlbiBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggcmVzdWx0XG4gICAgICBlcnJvciA9PiB0aGlzLmVycm9yID0gPGFueT5lcnJvcik7XG5cbiAgICB0aGlzLmNsZWFyQWRkRm9ybSgpO1xuICB9XG5cbiAgdG9nZ2xlQWRkRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dBZGRGb3JtID0gIXRoaXMuc2hvd0FkZEZvcm07XHJcbiAgfVxuXG4gIHRvZ2dsZUFkZFF1aWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEZvcm1RdWljayA9ICF0aGlzLnNob3dBZGRGb3JtUXVpY2s7XHJcbiAgfVxuXG4gIHNhdmVBZGRGb3JtKCk6IHZvaWQge1xuICAgIC8vIERldGVybWluZSB3aGljaCBmb3JtIHRvIHNhdmUgZnJvbVxyXG4gICAgaWYgKHRoaXMuc2hvd0FkZEZvcm1RdWljaykge1xyXG4gICAgICBsZXQgc3BsaXR0ZWRTdHJpbmcgPSB0aGlzLm5hbWVibG9jay5zcGxpdChcIlxcblwiKTtcclxuICAgICAgdGhpcy5uYW1lLm5hbWUgPSBzcGxpdHRlZFN0cmluZ1swXTtcclxuICAgICAgdGhpcy5uYW1lLnRhZ3MgPSBzcGxpdHRlZFN0cmluZ1sxXSA/IHNwbGl0dGVkU3RyaW5nWzFdLnNwbGl0KFwiLFwiKSA6IFtdO1xyXG4gICAgICB0aGlzLm5hbWUuZmVhdHVyZXMgPSBzcGxpdHRlZFN0cmluZ1syXSA/IHNwbGl0dGVkU3RyaW5nWzJdLnNwbGl0KFwiLFwiKSA6IFtdO1xyXG4gICAgfVxyXG4gICAgLy8gVHJpbSB0aGUgdGFncyBhbmQgZmVhdHVyZXMgZmllbGRzXHJcbiAgICBsZXQgdGFncyA9IHRoaXMubmFtZS50YWdzLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLm5hbWUuZmVhdHVyZXMudG9TdHJpbmcoKTtcclxuICAgIHRoaXMubmFtZS50YWdzID0gdGFncy5zcGxpdChcIixcIikubWFwKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xyXG4gICAgdGhpcy5uYW1lLmZlYXR1cmVzID0gZmVhdHVyZXMuc3BsaXQoXCIsXCIpLm1hcChGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCwgU3RyaW5nLnByb3RvdHlwZS50cmltKTtcclxuXHJcbiAgICB0aGlzLm5hbWVTZXJ2aWNlLmFkZE5hbWUodGhpcy5uYW1lKS5zdWJzY3JpYmUocyA9PiB7XHJcbiAgICAgIHRoaXMubmFtZXMucHVzaCh0aGlzLm5hbWUpO1xyXG4gICAgICB0aGlzLmNsZWFyQWRkRm9ybSgpO1xyXG4gICAgICB0aGlzLnRvZ2dsZUFkZEZvcm0oKTtcclxuICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IgPSA8YW55PmVycm9yXHJcbiAgICApO1xyXG4gIH1cblxuICBwcml2YXRlIGNsZWFyQWRkRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLm5hbWUgPSB7XHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHRhZ3M6IFtdLFxyXG4gICAgICBmZWF0dXJlczogW11cclxuICAgIH07XHJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhcnRpY2xlIGNsYXNzPVxcXCJ0ZW1wbGF0ZSBhbmltYXRlZCBzbGlkZUluUmlnaHRcXFwiPlxcclxcbiAgPGgyPkxpc3Qgb2YgTmFtZXM8L2gyPlxcclxcbiAgPGRpdiBpZD1cXFwiYWRkQnV0dG9uXFxcIiAqbmdJZj1cXFwiIXNob3dBZGRGb3JtXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVBZGRGb3JtKClcXFwiPlxcclxcbiAgICAgIEFkZFxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBpZD1cXFwic2VhcmNoRmlsdGVyXFxcIj5cXHJcXG5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgKm5nSWY9XFxcInNob3dBZGRGb3JtXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBwdWxsLXJpZ2h0XFxcIiAoY2xpY2spPVxcXCJzaG93QWRkRm9ybSA9ICFzaG93QWRkRm9ybVxcXCI+XFxyXFxuICAgICAgICAgIENhbmNlbFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHVsbC1yaWdodFxcXCI+Jm5ic3A7PC9zcGFuPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIChjbGljayk9XFxcInNhdmVBZGRGb3JtKClcXFwiPlxcclxcbiAgICAgICAgICBTYXZlXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGlkPVxcXCJhZGRGb3JtUXVpY2tcXFwiICpuZ0lmPVxcXCJzaG93QWRkRm9ybVF1aWNrXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRRdWlja1xcXCI+UXVpY2sgQWRkIDwvbGFiZWw+IDxhIFthdHRyLmhyZWZdPVxcXCJudWxsXFxcIiAoY2xpY2spPSd0b2dnbGVBZGRRdWljaygpJz4gU2hvdyBGdWxsIEZvcm08L2E+XFxyXFxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cXFwiYWRkUXVpY2tcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJvd3M9XFxcIjNcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lYmxvY2tcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC13YXJuaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICBFbnRlciBOYW1lLCBUYWdzIGFuZCBGZWF0dXJlcyBvbiBlYWNoIGxpbmUuIE11bHRpcGxlIHRhZ3MgYW5kIGZlYXR1cmVzIHNlcGFyYXRlZCBieSBjb21tYXMuIEV4YW1wbGU6PGJyIC8+XFxyXFxuICAgICAgICAgICAgPGk+Sm9obiBMZWU8L2k+PGJyIC8+XFxyXFxuICAgICAgICAgICAgPGk+d29yaywgbWFuYWdlcjwvaT48YnIgLz5cXHJcXG4gICAgICAgICAgICA8aT5za2lubnksIGFzaWFuLCBnbGFzc2VzPC9pPjxiciAvPlxcclxcbiAgICAgICAgICA8L3NtYWxsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBpZD1cXFwiYWRkRm9ybVxcXCIgKm5nSWY9XFxcIiFzaG93QWRkRm9ybVF1aWNrXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGROYW1lXFxcIj5OYW1lPC9sYWJlbD4gPGEgW2F0dHIuaHJlZl09XFxcIm51bGxcXFwiIChjbGljayk9J3RvZ2dsZUFkZFF1aWNrKCknPiBTaG93IFF1aWNrIEZvcm08L2E+XFxyXFxuICAgICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkTmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcIm5hbWUubmFtZVxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZFRhZ3NcXFwiPlRhZ3M8L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZFRhZ3NcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJuYW1lLnRhZ3NcXFwiIC8+XFxyXFxuICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwidGV4dC13YXJuaW5nXFxcIj5BZGQgbXVsdGlwbGUgdGFncyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPndvcmssIG1hbmFnZXI8L2k+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPlBvcHVsYXIgVGFnczo8L3NtYWxsPlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRGZWF0dXJlc1xcXCI+RmVhdHVyZXM8L2xhYmVsPlxcclxcbiAgICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEZlYXR1cmVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwibmFtZS5mZWF0dXJlc1xcXCIgLz5cXHJcXG4gICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPkFkZCBtdWx0aXBsZSBmZWF0dXJlcyBzZXBhcmF0ZWQgYnkgY29tbWEuIEV4YW1wbGU6IDxpPnNraW5ueSwgYXNpYW4sIGdsYXNzZXM8L2k+PC9zbWFsbD5cXHJcXG4gICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPlBvcHVsYXIgRmVhdHVyZXM6PC9zbWFsbD5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXBsb2FkUGhvdG9cXFwiPlVwbG9hZCBQaG90bzwvbGFiZWw+XFxyXFxuICAgICAgICAgIDxpbnB1dCBpZD1cXFwidXBsb2FkUGhvdG9cXFwiIHR5cGU9XFxcImZpbGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtZmlsZVxcXCIgdGl0bGU9XFxcIlRoaXMgRmVhdHVyZSBub3QgRW5hYmxlZFxcXCIgZGlzYWJsZWQ+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGlkPVxcXCJlcnJvclxcXCIgKm5nSWY9J2Vycm9yJz5cXHJcXG4gICAgICAgIDxoND5FcnJvcjwvaDQ+XFxyXFxuICAgICAgICA8cD5cXHJcXG4gICAgICAgICAge3sgZXJyb3IgfX1cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuZ0lmPSduYW1lcyAmJiBuYW1lcy5sZW5ndGgnPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIiAqbmdGb3I9XFxcImxldCBuYW1lIG9mIG5hbWVzXFxcIj5cXHJcXG4gICAgICA8aW1nIGNsYXNzPVxcXCJjYXJkLWltYWdlIHRodW1ibmFpbCBwdWxsLWxlZnRcXFwiIHNyYz1cXFwiL2Rpc3QvbWFpbi9pbWFnZXMvbGVnbzAzLnBuZ1xcXCIgYWx0PVxcXCJQZXJzb24gUGhvdG9cXFwiPlxcclxcbiAgICAgIDxhIGhyZWY9XFxcIlxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9Ib21lJywgbmFtZS5pZF1cXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICBFZGl0XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2E+XFxyXFxuICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj57eyBuYW1lLm5hbWUgfX08L2g0PlxcclxcblxcclxcbiAgICAgIDxociBjbGFzcz1cXFwiY2FyZC1zcGFjZXJcXFwiIC8+XFxyXFxuXFxyXFxuICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+XFxyXFxuICAgICAgICA8c3Ryb25nPlRhZ3M6IDwvc3Ryb25nPlxcclxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgdGFnIG9mIG5hbWUudGFnc1xcXCI+e3sgdGFnIH19LCA8L3NwYW4+XFxyXFxuICAgICAgPC9wPlxcclxcbiAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPlxcclxcbiAgICAgICAgPHN0cm9uZz5GZWF0dXJlczogPC9zdHJvbmc+XFxyXFxuICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBmZWF0dXJlIG9mIG5hbWUuZmVhdHVyZXNcXFwiPnt7IGZlYXR1cmUgfX0sIDwvc3Bhbj5cXHJcXG4gICAgICA8L3A+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5Nb2RpZmllZDogMyBtaW5zIGFnbzwvc21hbGw+XFxyXFxuICAgICAgICA8c21hbGwgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPkNyZWF0ZWQ6ICAzIG1pbnMgYWdvPC9zbWFsbD5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2FydGljbGU+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS1saXN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYW1lLWxpc3QuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYmxvY2sge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ibG9jazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmM2ZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHVsbC1sZWZ0IHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBjb2xvcjogIzU4NTg1ODtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL25hbWVzL25hbWUtbGlzdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTmFtZSB9IGZyb20gJy4vbmFtZS5tb2RlbCc7XG5cbkBQaXBlKHsgLy8gRGVjb3JhdG9yIGZvciB0aGUgUHJvZHVjdEZpbHRlclBpcGVcbiAgbmFtZTogJ25hbWVGaWx0ZXInXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVGaWx0ZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IElOYW1lW10sIGZpbHRlckJ5OiBzdHJpbmcpOiBJTmFtZVtdIHtcbiAgICBmaWx0ZXJCeSA9IGZpbHRlckJ5ID8gZmlsdGVyQnkudG9Mb2NhbGVMb3dlckNhc2UoKSA6IG51bGw7XG4gICAgcmV0dXJuIGZpbHRlckJ5ID8gdmFsdWUuZmlsdGVyKChuYW1lOiBJTmFtZSkgPT5cbiAgICAgIG5hbWUubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyQnkpICE9PSAtMSkgOiB2YWx1ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9uYW1lcy9uYW1lLmZpbHRlci50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgwqBjbGFzcyBOYW1lR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIC8vIFRoZSByb3V0ZSBvbmx5IGFsbG93cyBudW1lcmljIGlkIG51bWJlciBvciBuZXcga2V5d29yZFxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpZCA9ICtyb3V0ZS51cmxbMV0ucGF0aDtcblxuICAgIGlmIChpc05hTihpZCkgfHwgaWQgPCAxKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvSG9tZSddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmFtZXMvbmFtZS5ndWFyZC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYm91dCcsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyksXG4gIHN0eWxlczogW3JlcXVpcmUoJy4vYWJvdXQuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcclxcbjxoMT5BYm91dDwvaDE+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Fib3V0LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cXG4ubWRsLWxheW91dF9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxufVxcbi5tZGwtbGF5b3V0X19jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDY4cHg7XFxufVxcblxcbi5uYXYtbGluayB7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm5hdi1saW5rLnJvdXRlci1saW5rLWFjdGl2ZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMSk7XFxufVxcblxcbi5uYXYtbGluay5yb3V0ZXItbGluay1hY3RpdmU6OmFmdGVyIHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDY0LDEyOSk7XFxufVxcblxcblxcbi5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBwYWRkaW5nOiAwIDE2cHggMCA3MnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG59XFxuXFxuLnBhZ2UtY29udGVudCB7XFxuICBtYXJnaW46IDJlbTtcXG59XFxuXFxuYXJ0aWNsZS50ZW1wbGF0ZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW47XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4jcmVzZXQtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAyZW07XFxuICB0b3A6IDFlbTtcXG59XFxuXFxuI3NwaW5uZXIge1xcbiAgYm9yZGVyLXdpZHRoOiA4ZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC03MHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjcmVzZXQtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPkVSRVVNIDxzbWFsbD52IDAuMTwvc21hbGw+PC9hPiBcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ib29rJz48L3NwYW4+IE5hbWVzXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL0Fib3V0J11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24nPjwvc3Bhbj4gQWJvdXRcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=