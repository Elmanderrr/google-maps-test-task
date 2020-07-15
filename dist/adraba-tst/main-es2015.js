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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <h1>Adraba Google Map </h1>\n    <app-google-map></app-google-map>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"searchPlaces(placesInput.value)\" class=\"form\" ngNativeValidate>\n    <mat-form-field class=\"location-input\">\n        <mat-label>Type a location</mat-label>\n        <input name=\"location\" matInput type=\"text\" #locationInput >\n    </mat-form-field>\n    <mat-form-field class=\"places-input\">\n        <input name=\"places\" matInput type=\"text\" #placesInput [(ngModel)]=\"placeInputModel\">\n        <mat-label>Type a place</mat-label>\n    </mat-form-field>\n    <br>\n    <mat-form-field  appearance=\"fill\">\n        <mat-label>{{chosenType}}</mat-label>\n        <mat-select (selectionChange)=\"onTypeChange($event)\">\n            <mat-option [value]=\"type\" *ngFor=\"let type of types\">{{type}}</mat-option>\n        </mat-select>\n        <mat-hint align=\"end\">Choose a category</mat-hint>\n    </mat-form-field>\n    <br>\n    <button mat-raised-button color=\"primary\">Submit</button>\n</form>\n\n\n\n<div class=\"google-map-wrapper\">\n    <div class=\"google-map\" #mapEl></div>\n\n    <div class=\"places\" *ngIf=\"markers.length\">\n        <span class=\"place-match\" *ngFor=\"let marker of markers\" (click)=\"showInfoWindow(marker)\" (mouseenter)=\"onMouseEnter(marker)\" (mouseleave)=\"onMouseLeave()\">\n            <img class=\"pointer-img\" src=\"https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png\" alt=\"\">\n            {{marker.name}}\n        </span>\n    </div>\n</div>\n\n<div #infoWindowEl></div>\n<div class=\"info-content-wrapper\" style=\"display: none\">\n    <div #dynamicInfoContent>\n\n        <h3 class=\"info-content-title\">\n            {{currentInfoWindowProps?.name}}\n        </h3>\n        <div>\n            <b>Address: </b>{{currentInfoWindowProps?.formatted_address}}\n        </div>\n\n        <div>\n            <b>Phone Number: </b>{{currentInfoWindowProps?.formatted_phone_number}}\n        </div>\n\n        <div class=\"info-content-images\">\n            <img class=\"info-content-image\" [src]=\"photo.getUrl({maxHeight: 150})\" alt=\"\" *ngFor=\"let photo of currentInfoWindowProps?.photos\">\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/google-map/google-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\theight: calc(100vh - 100px);\r\n}\r\n\r\n.google-map-wrapper {\r\n\tflex: 1;\r\n\tposition: relative;\r\n}\r\n\r\n.google-map {\r\n\theight: 100%;\r\n}\r\n\r\n.places-input {\r\n\tmargin-left: 8px;\r\n}\r\n\r\n.location-input, .places-input {\r\n\twidth: 400px;\r\n}\r\n\r\n.radio-group {\r\n\tdisplay: block;\r\n}\r\n\r\n.radio-group .radio {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.form {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.places {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\tbackground: #fff;\r\n\theight: 100%;\r\n\tpadding: 10px;\r\n\tborder: 1px solid grey;\r\n\toverflow: auto;\r\n\tmin-width: 250px;\r\n}\r\n\r\n.place-match {\r\n\tdisplay: flex;\r\n\tpadding: 10px;\r\n\tcursor: pointer;\r\n\talign-items: center;\r\n}\r\n\r\n.place-match .pointer-img {\r\n\twidth: 20px;\r\n}\r\n\r\n.place-match:hover {\r\n\tbackground: #ddd;\r\n}\r\n\r\n.info-content-images {\r\n\tdisplay: flex;\r\n}\r\n\r\n.info-content-title {\r\n\tmargin: 0 0 5px 0;\r\n}\r\n\r\n.info-content-image {\r\n\talign-self: center;\r\n\tmargin: 3px;\r\n\tmax-height: 67px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFJQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsTUFBTTtDQUNOLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbn1cclxuXHJcbi5nb29nbGUtbWFwLXdyYXBwZXIge1xyXG5cdGZsZXg6IDE7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZ29vZ2xlLW1hcCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucGxhY2VzLWlucHV0IHtcclxuXHRtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4ubG9jYXRpb24taW5wdXQsIC5wbGFjZXMtaW5wdXQge1xyXG5cdHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnJhZGlvLWdyb3VwIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnJhZGlvLWdyb3VwIC5yYWRpbyB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4ucGxhY2VzIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuXHRvdmVyZmxvdzogYXV0bztcclxuXHRtaW4td2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4ucGxhY2UtbWF0Y2gge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYWNlLW1hdGNoIC5wb2ludGVyLWltZyB7XHJcblx0d2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5wbGFjZS1tYXRjaDpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLmluZm8tY29udGVudC1pbWFnZXMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbmZvLWNvbnRlbnQtdGl0bGUge1xyXG5cdG1hcmdpbjogMCAwIDVweCAwO1xyXG59XHJcblxyXG4uaW5mby1jb250ZW50LWltYWdlIHtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAzcHg7XHJcblx0bWF4LWhlaWdodDogNjdweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/google-map/google-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.ts ***!
  \***************************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



let GoogleMapComponent = class GoogleMapComponent {
    constructor(cd, snackBar, ngZone) {
        this.cd = cd;
        this.snackBar = snackBar;
        this.ngZone = ngZone;
        this.markers = [];
        this.types = [
            'museum',
            'food',
            'shopping_mall',
            'tourist_attraction',
            'cafe'
        ];
        this.placeInputModel = null;
        this.currentInfoWindowProps = null;
        this.locationBounds = null;
        this.defaultLocation = { lat: -33.866, lng: 151.196 };
    }
    ngOnInit() {
        this.chosenType = this.types[1];
    }
    ngAfterViewInit() {
        this.createGoogleMapWidget();
    }
    createGoogleMapWidget() {
        this.googleMap = new google.maps.Map(this.mapEl.nativeElement, {
            center: this.defaultLocation,
            zoom: 10
        });
        this.createInfoWindows();
        this.createLocationAutocomplete();
        this.createPlacesSearch();
    }
    /**
     *
     * @param val string
     */
    searchPlaces(val) {
        const request = {
            keyword: val,
            radius: 500,
            bounds: this.locationBounds,
            type: this.chosenType
        };
        if (this.locationBounds) {
            request.bounds = this.locationBounds;
        }
        else {
            // apply default location if no bounds was provided and extends radius
            request.location = this.defaultLocation;
            request.radius = 50000;
        }
        this.placesSearch.nearbySearch(request, this.onNearbySearchResults.bind(this));
    }
    /**
     *
     * @param results Array<google.maps.places.PlaceResult>
     * @param status google.maps.places.PlacesServiceStatus
     */
    onNearbySearchResults(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            this.clearMarkers();
            this.createMarkers(results);
            this.cd.detectChanges();
        }
        else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            // works well only inside ngZone
            this.ngZone.run(() => {
                this.snackBar.open('Nothing was found', 'End now', {
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    duration: 1500
                });
            });
        }
    }
    /**
     *
     * @param marker google.maps.Marker
     */
    onMouseEnter(marker) {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    }
    onMouseLeave() {
        this.markers.forEach(m => {
            m.setIcon(null);
        });
    }
    /**
     *
     * @param $event MatSelectChange
     */
    onTypeChange($event) {
        this.chosenType = $event.value;
    }
    /**
     *
     * @param places Array<any>
     */
    createMarkers(places) {
        const bounds = new google.maps.LatLngBounds();
        places.forEach(place => {
            const marker = new google.maps.Marker({
                position: place.geometry.location,
                animation: google.maps.Animation.DROP,
                map: this.googleMap,
                name: place.name,
                placeId: place.place_id
            });
            this.markers.push(marker);
            google.maps.event.addListener(marker, 'click', () => this.showInfoWindow(marker));
            bounds.extend(place.geometry.location);
        });
        this.googleMap.fitBounds(bounds);
        this.cd.detectChanges();
    }
    onLocationInputChange() {
        this.clearMarkers();
        const place = this.locationAutocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        // update map viewport
        this.googleMap.setCenter(place.geometry.location);
        this.googleMap.setZoom(10);
        // save location bounds to be able to search inside last user location area
        this.locationBounds = this.googleMap.getBounds();
        this.cd.detectChanges();
        // run search again if place was typed
        if (this.placeInputModel) {
            this.searchPlaces(this.placeInputModel);
        }
    }
    clearMarkers() {
        this.markers.forEach((m) => {
            m.setMap(null);
        });
        this.markers = [];
    }
    /**
     *
     * @param marker ExtendedMarker
     */
    showInfoWindow(marker) {
        this.placesSearch.getDetails({ placeId: marker.placeId }, (place, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            Object.assign(marker, place);
            marker.photos = place.photos ? place.photos.filter((p, i) => i < 4) : [];
            this.currentInfoWindowProps = marker;
            this.infoWindow.setContent(this.dynamicInfoContent.nativeElement);
            this.infoWindow.open(this.googleMap, marker);
            this.cd.detectChanges();
        });
    }
    createLocationAutocomplete() {
        this.locationAutocomplete = new google.maps.places.Autocomplete(this.locationInput.nativeElement, {
            types: ['geocode']
        });
        this.locationAutocomplete.addListener('place_changed', this.onLocationInputChange.bind(this));
    }
    createPlacesSearch() {
        this.placesSearch = new google.maps.places.PlacesService(this.googleMap);
    }
    createInfoWindows() {
        this.infoWindow = new google.maps.InfoWindow();
    }
};
GoogleMapComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
GoogleMapComponent.propDecorators = {
    mapEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mapEl', { static: true },] }],
    dynamicInfoContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['dynamicInfoContent', { static: true },] }],
    infoWindowEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['infoWindowEl', { static: true },] }],
    locationInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['locationInput', { static: true },] }],
    placesInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['placesInput', { static: true },] }]
};
GoogleMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./google-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/google-map/google-map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./google-map.component.css */ "./src/app/components/google-map/google-map.component.css")).default]
    })
], GoogleMapComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\adraba-tst\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map