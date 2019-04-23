(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _pets_new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pets/new/new.component */ "./src/app/pets/new/new.component.ts");
/* harmony import */ var _pets_update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pets/update/update.component */ "./src/app/pets/update/update.component.ts");
/* harmony import */ var _pets_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pets/details/details.component */ "./src/app/pets/details/details.component.ts");







var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    // the ** will catch anything that did not match any of the above routes
    { path: 'pets', component: _pets_pets_component__WEBPACK_IMPORTED_MODULE_3__["PetsComponent"] },
    //this is connecting the child component(pets component) to the parent component(app component)
    { path: 'pets/newpet', component: _pets_new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    //had to change the app.post name to newpet in the routes.js to get this work. If this button just goes to the page, why is it an app.post?
    { path: 'pets/:id/edit', component: _pets_update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"] },
    { path: 'pets/:id', component: _pets_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n    border: solid 1px black;\n    padding: 20px;\n    margin: 0 20px;\n    min-height: 300px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Pets Shelter</h1>\n\n<div id=\"content\">\n  <router-outlet></router-outlet>\n</div>"

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
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/pets/pets.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pets.service */ "./src/app/pets.service.ts");
/* harmony import */ var _pets_new_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pets/new/new.component */ "./src/app/pets/new/new.component.ts");
/* harmony import */ var _pets_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pets/details/details.component */ "./src/app/pets/details/details.component.ts");
/* harmony import */ var _pets_update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pets/update/update.component */ "./src/app/pets/update/update.component.ts");





 //when you import the service, it has to match the name of the service.ts file.
 //you import this service so you canan make http requests
 // <-- import FormsModule.




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pets_pets_component__WEBPACK_IMPORTED_MODULE_5__["PetsComponent"],
                _pets_new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"],
                _pets_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                _pets_update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_pets_service__WEBPACK_IMPORTED_MODULE_8__["PetsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] //Has to match up the corressponding service
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pets.service.ts":
/*!*********************************!*\
  !*** ./src/app/pets.service.ts ***!
  \*********************************/
/*! exports provided: PetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsService", function() { return PetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


 //We use dependency injection when one part of our app depends on another. For example, our service depends on HttpClient to make http requests!
var PetsService = /** @class */ (function () {
    //class must match the services your importing
    function PetsService(_http) {
        this._http = _http;
        this.getPets();
    }
    PetsService.prototype.getPets = function () {
        return this._http.get('/pets');
    };
    PetsService.prototype.getOnePet = function (id) {
        console.log("got Pet");
        return this._http.get('/pet/' + id);
    };
    PetsService.prototype.addPet = function (newpet) {
        return this._http.post('/newpet', newpet);
    };
    PetsService.prototype.editPet = function (id, updatedPet) {
        return this._http.put('/pet/' + id, updatedPet);
    };
    //.put is the update function
    PetsService.prototype.deleteTa = function (id) {
        console.log(id, "http service");
        return this._http.delete('/pet/' + id);
    };
    PetsService.prototype.addLike = function (id, like) {
        console.log("id from service.ts");
        console.log(id);
        return this._http.put('/like/' + id, like);
    };
    PetsService.prototype.postToServer = function (num) {
        // use the .post() method of HttpClient
        // num must be an object
        // provide the url of your post route - make sure this is set up in your server!
        return this._http.post('/pets', num);
    };
    PetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PetsService);
    return PetsService;
}());



/***/ }),

/***/ "./src/app/pets/details/details.component.css":
/*!****************************************************!*\
  !*** ./src/app/pets/details/details.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tData {\n    font-size: 150%;\n    color: black;\n    width: 100px;\n}\n\ntable {\n    margin: 0 10px;\n}\n\n.btn-danger {\n    margin-left: 10px;\n}\n\n.resetButton {\n    background-color: #E1D5E7;\n    color: black;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.deleteButton {\n    margin-left: 10px;\n    background-color: #FF0000;\n    color: white;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.likeButton {\n    margin-left: 10px;\n    background-color: lightblue;\n    color: white;\n    border-radius: 5px;\n    padding: 3px;\n}\n\na {\n    margin-left: 100px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BldHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudERhdGEge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG50YWJsZSB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnJlc2V0QnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFENUU3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG4uZGVsZXRlQnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG4ubGlrZUJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG5hIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pets/details/details.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pets/details/details.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Pet Details</h2>\n<table *ngIf=\"thisPet\">\n    <tr>\n        <td class=\"tData\">ID</td>\n        <td>{{thisPet._id}}</td>\n    </tr>\n            <tr>\n                <td class=\"tData\">Name</td>\n                <td>{{thisPet.name}}</td>\n            </tr>\n    <tr>\n        <td class=\"tData\">Type</td>\n        <td>{{thisPet.type}}</td>\n    </tr>\n    <tr>\n        <td class=\"tData\">Description</td>\n        <td>{{thisPet.description}}</td>\n    </tr>\n    <tr>\n        <td class=\"tData\">Skill One</td>\n        <td>{{thisPet.skillone}}</td>\n    </tr>\n    <tr>\n        <td class=\"tData\">Skill Two</td>\n        <td>{{thisPet.skilltwo}}</td>\n    </tr>\n    <tr>\n        <td class=\"tData\">Skill Three</td>\n        <td>{{thisPet.skillthree}}</td>\n    </tr>\n    <tr>\n        <td class=\"tData\">Likes</td>\n        <td>{{thisPet.likes}}</td>\n\n        \n        \n    </tr>\n</table>\n<a [routerLink]=\"['/']\"><button class=\"resetButton\">BACK</button></a>\n<button class=\"deleteButton\" (click)=\"deletePet()\">DELETE</button>\n<button *ngIf=\"likeButton\" class=\"likeButton\" (click)=\"addLike()\">LIKE</button>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pets/details/details.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pets/details/details.component.ts ***!
  \***************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pets.service */ "./src/app/pets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(petsService, route, router) {
        this.petsService = petsService;
        this.route = route;
        this.router = router;
        this.thisPet = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("Pet ID is ", params['id']);
            var observable = _this.petsService.getOnePet(params['id']);
            observable.subscribe(function (petsReturned) {
                _this.thisPet = petsReturned["pet"];
                console.log("121212121212121212121212121212121212");
                console.log(_this.thisPet);
                _this.likeButton = true;
                _this.numberOfLikes = _this.thisPet.likes;
            });
        });
    };
    DetailsComponent.prototype.deletePet = function () {
        console.log(this.thisPet._id, "ts component");
        this.petsService.deleteTa(this.thisPet._id).subscribe(function (data) {
        });
        this.router.navigateByUrl('/');
    };
    DetailsComponent.prototype.addLike = function () {
        var _this = this;
        this.likeButton = false;
        this.route.params.subscribe(function (params) {
            var observable = _this.petsService.addLike(params['id'], _this.thisPet);
            observable.subscribe(function (data) {
                console.log(data);
                if (data.error) {
                    _this.error = data.error;
                }
                else {
                    console.log("~Edit~");
                }
            });
        });
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/pets/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/pets/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/pets/new/new.component.css":
/*!********************************************!*\
  !*** ./src/app/pets/new/new.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n    width: 150px;\n    font-size: 150%;\n    color: gray;\n}\n\nbutton {\n    margin-right: 10px;\n    margin-left: 150px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.errors {\n    font-size: 90%;\n    font-weight: bold;\n    color: purple;\n}\n\n.resetButton {\n    background-color: #E1D5E7;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.createButton {\n    background-color: #66BBFF;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9uZXcvbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BldHMvbmV3L25ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmVycm9ycyB7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnJlc2V0QnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFENUU3O1xuICAgIGNvbG9yOiAjNjc2OTY3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbi5jcmVhdGVCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkJCRkY7XG4gICAgY29sb3I6ICM2NzY5Njc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pets/new/new.component.html":
/*!*********************************************!*\
  !*** ./src/app/pets/new/new.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>New Pet</h2>\n<ul *ngIf=\"errors\">\n<li class=\"errors\">{{errors}}</li>\n</ul>\n\n<ul *ngIf=\"mongoerrors\">\n<li class=\"errors\">{{mongoerrors}}</li>\n</ul>\n\n\n<form name=\"newPetForm\" #newPetForm=\"ngForm\" (submit)=\"submitNewPet()\">\n\n  <label for=\"name\">Name</label><br>\n  <input type=\"text\" name=\"name\"\n  required\n  minlength=\"3\"\n  [(ngModel)]=\"newPet.name\"\n  #name = \"ngModel\"\n  >\n  <br>\n\n  <label for=\"type\">Type</label><br>\n  <input type=\"text\" name=\"type\"\n  required\n  minlength=\"3\"\n  [(ngModel)]=\"newPet.type\"\n  #type = \"ngModel\"\n  >\n  <br>\n\n  <label for=\"description\">Description</label><br>\n  <input type=\"text\" name=\"description\"\n  required\n  minlength=\"3\"\n  [(ngModel)]=\"newPet.description\"\n  #description = \"ngModel\"\n  >\n  <br>\n\n  <label for=\"skillone\">Skill One</label><br>\n  <input type=\"text\" name=\"skillone\"\n  required\n  minlength=\"3\"\n  [(ngModel)]=\"newPet.skillone\"\n  #skillone = \"ngModel\"\n  >\n  <br>\n\n  <label for=\"skilltwo\">Skill Two</label><br>\n  <input type=\"text\" name=\"skilltwo\"\n  required\n  minlength=\"3\"\n  [(ngModel)]=\"newPet.skilltwo\"\n  #skilltwo = \"ngModel\"\n  >\n  <br>\n\n  <label for=\"skillthree\">Skill Three</label><br>\n  <input type=\"text\" name=\"skillthree\"\n  required\n  minlength=\"3\"\n  [(ngModel)]=\"newPet.skillthree\"\n  #skillthree = \"ngModel\"\n  >\n  <br>\n\n  <a [routerLink]=\"['/']\"><button class=\"resetButton\">Reset</button></a>\n  <input class=\"createButton\" type=\"submit\" value=\"Create\">\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/pets/new/new.component.ts":
/*!*******************************************!*\
  !*** ./src/app/pets/new/new.component.ts ***!
  \*******************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pets.service */ "./src/app/pets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(petsService, router) {
        this.petsService = petsService;
        this.router = router;
        this.newPet = {
            name: "",
            type: "",
            description: "",
            skillone: "",
            skilltwo: "",
            skillthree: ""
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.submitNewPet = function () {
        var _this = this;
        console.log(this.newPet);
        this.petsService.addPet(this.newPet)
            .subscribe(function (response) {
            // data=>{ console.log(data)---- this gives you and object that includes errors data... this.error= data[][][][]}
            console.log("////////////////////////");
            console.log(response);
            console.log("+++++++++++++++++++++++++");
            console.log(response.errors);
            console.log("==========================");
            console.log(response.errors);
            console.log("it worked");
            if (response.errors) {
                _this.errors = response.errors.message;
                _this.mongoerrors = response.errors.errmsg;
                _this.router.navigateByUrl('/pets/newpet');
            }
            else {
                _this.newPet = {
                    name: "",
                    type: "",
                    description: "",
                    skillone: "",
                    skilltwo: "",
                    skillthree: ""
                };
                _this.router.navigateByUrl('/');
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/pets/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/pets/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pets/pets.component.css":
/*!*****************************************!*\
  !*** ./src/app/pets/pets.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2, button {\n    display: inline-block;\n}\n\nh2 {\n    float: left;\n    margin-top: 0;\n}\n\nbutton, a {\n    float: right;\n}\n\nth {\n    background-color: #D3D3D3;\n    color: white;\n    padding: 5px;\n}\n\n.fancyButton {\n    background: linear-gradient(#E4C1C1, #4B5E6D);\n    color: white;\n    margin: 0 5px;\n}\n\n#aButton {\n    background: linear-gradient(#E7F1E6, #49606E);\n    color: white;\n    padding: 0 10px;\n}\n\n.rightMarg {\n    margin-right: 200px;\n}\n\n.goLeft {\n    float: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wZXRzL3BldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyLCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaDIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbmJ1dHRvbiwgYSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDNEMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uZmFuY3lCdXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRTRDMUMxLCAjNEI1RTZEKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuI2FCdXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRTdGMUU2LCAjNDk2MDZFKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ucmlnaHRNYXJnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xufVxuXG4uZ29MZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/*!******************************************!*\
  !*** ./src/app/pets/pets.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Pets List</h2>\n<a [routerLink]=\"['newpet']\"><button id=\"aButton\">Add New Pet</button></a>\n<br>\n<table class=\"table table-bordered\" style=\"width: 100%\">\n    <thead>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Description</th>\n        <th>Skill One</th>\n        <th>Skill Two</th>\n        <th>Skill Three</th>\n        <th>Actions</th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let pet of allPets\">\n            <td>{{pet._id}}</td>\n            <td>{{pet.name}}</td>\n            <td>{{pet.type}}</td>\n            <td>{{pet.description}}</td>\n            <td>{{pet.skillone}}</td>\n            <td>{{pet.skilltwo}}</td>\n            <td>{{pet.skillthree}}</td>\n            <td>\n                <div class=\"goLeft\">\n                    <a [routerLink]=\"[pet._id, 'edit']\"><button  class=\"fancyButton\" >edit</button></a>\n                    <a [routerLink]=\"[pet._id]\"><button  class=\"fancyButton\">details</button></a>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/*!****************************************!*\
  !*** ./src/app/pets/pets.component.ts ***!
  \****************************************/
/*! exports provided: PetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pets.service */ "./src/app/pets.service.ts");



var PetsComponent = /** @class */ (function () {
    function PetsComponent(petsService) {
        this.petsService = petsService;
        this.allPets = [];
    }
    PetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //on init means itll show up on the first page when you start up the app
        var observable = this.petsService.getPets();
        observable.subscribe(function (data) {
            console.log("Got our data!", data);
            _this.allPets = data['pets']; //data that you are pushing into the array must match the key kame of the data
        });
    };
    PetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pets',
            template: __webpack_require__(/*! ./pets.component.html */ "./src/app/pets/pets.component.html"),
            styles: [__webpack_require__(/*! ./pets.component.css */ "./src/app/pets/pets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetsService"]])
    ], PetsComponent);
    return PetsComponent;
}());



/***/ }),

/***/ "./src/app/pets/update/update.component.css":
/*!**************************************************!*\
  !*** ./src/app/pets/update/update.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n    width: 150px;\n    font-size: 150%;\n    color: gray;\n}\n\nul {\n    list-style-type: none;\n}\n\nbutton {\n    margin-right: 10px;\n    margin-left: 150px;\n}\n\n.errors {\n    font-size: 90%;\n    font-weight: bold;\n    color: purple;\n}\n\n#updateButton {\n    background-color: #99FF99;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.resetButton {\n    background-color: #E1D5E7;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BldHMvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cblxuLmVycm9ycyB7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbn1cblxuI3VwZGF0ZUJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5RkY5OTtcbiAgICBjb2xvcjogIzY3Njk2NztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG4ucmVzZXRCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUQ1RTc7XG4gICAgY29sb3I6ICM2NzY5Njc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pets/update/update.component.html":
/*!***************************************************!*\
  !*** ./src/app/pets/update/update.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Update Pet</h2>\n\n<ul *ngIf=\"errors\">\n  <li class=\"errors\">{{errors}}</li>\n  </ul>\n\n<div  *ngIf=\"updatePet\">  \n\n  <form name=\"editPetForm\" #editPetForm=\"ngForm\" (submit)=\"updatePet()\">\n    <label for=\"name\">Name</label><br>\n    <input type=\"text\" name=\"thisPet.name\"\n    \n    [(ngModel)]=\"thisPet.name\"\n    #name=\"ngModel\"\n    >\n    <br>\n    \n    <label for=\"type\">Type</label><br>\n    <input type=\"text\" name=\"thisAPet.type\"\n    required\n    minlength=\"3\"\n    [(ngModel)]=\"thisPet.type\"\n    #type=\"ngModel\"\n    >\n    <br>\n\n    <label for=\"description\">Description</label><br>\n    <input type=\"text\" name=\"thisPet.description\"\n    required\n    minlength=\"3\"\n    [(ngModel)]=\"thisPet.description\"\n    #description=\"ngModel\"\n    >\n    <br>\n\n    <label for=\"skillone\">Skill One</label><br>\n    <input type=\"text\" name=\"thisPet.skillone\"\n    required\n    minlength=\"3\"\n    [(ngModel)]=\"thisPet.skillone\"\n    #skillone=\"ngModel\"\n    >\n    <br>\n\n    <label for=\"skilltwo\">Skill Two</label><br>\n    <input type=\"text\" name=\"thisPet.skilltwo\"\n    required\n    minlength=\"3\"\n    [(ngModel)]=\"thisPet.skilltwo\"\n    #skilltwo=\"ngModel\"\n    >\n    <br>\n\n    <label for=\"skillthree\">Skill Three</label><br>\n    <input type=\"text\" name=\"thisPet.skillthree\"\n    required\n    minlength=\"3\"\n    [(ngModel)]=\"thisPet.skillthree\"\n    #skillthree=\"ngModel\"\n    >\n    <br>\n\n    <a [routerLink]=\"['/']\"><button class=\"resetButton\">RESET</button></a>\n    <input id=\"updateButton\" type=\"submit\" value=\"Edit This Pet\" />\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pets/update/update.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pets/update/update.component.ts ***!
  \*************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pets.service */ "./src/app/pets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(petsService, route, router) {
        this.petsService = petsService;
        this.route = route;
        this.router = router;
        this.thisPet = [];
        this.updatedPet = [];
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.findPet();
        this.thisPet = {
            name: "",
            type: "",
            description: "",
            skillone: "",
            skilltwo: "",
            skillthree: ""
        };
        this.updatedPet = {
            thisPet: {
                name: "",
                type: "",
                description: "",
                skillone: "",
                skilltwo: "",
                skillthree: ""
            }
        };
    };
    UpdateComponent.prototype.findPet = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("pet ID is ", params['id']);
            var observable = _this.petsService.getOnePet(params['id']);
            observable.subscribe(function (petsReturned) {
                _this.thisPet = petsReturned["pet"];
                console.log("121212121212121212121212121212121212");
                console.log(_this.thisPet);
            });
        });
    };
    UpdateComponent.prototype.updatePet = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.thisPet);
            var observable = _this.petsService.editPet(params['id'], _this.thisPet);
            observable.subscribe(function (response) {
                if (response.error) {
                    console.log("99999999999999999");
                    console.log(response);
                    console.log("8888888888888888");
                    console.log(response.error);
                    console.log("77777777777777777");
                    console.log(response.error.message);
                    console.log("6666666666666666666");
                    _this.errors = response.error.message;
                }
                else {
                    _this.router.navigateByUrl('/');
                }
            });
        });
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/pets/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/pets/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pets_service__WEBPACK_IMPORTED_MODULE_2__["PetsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
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

module.exports = __webpack_require__(/*! /Users/haritsdanoesoebroto/Desktop/Coding_Dojo_Projects/MEAN/pets/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map