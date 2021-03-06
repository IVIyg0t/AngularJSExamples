System.register(['angular2/core', 'angular2/http', './app.component', './app.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, app_component_1, app_service_1;
    var ToHComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            ToHComponent = (function () {
                function ToHComponent() {
                }
                ToHComponent = __decorate([
                    core_1.Component({
                        select: 'my-toh',
                        template: "<h1>ToH Component</h1>",
                        directive: [app_component_1.AppComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            app_service_1.AppService,
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToHComponent);
                return ToHComponent;
            }());
            exports_1("ToHComponent", ToHComponent);
        }
    }
});
//# sourceMappingURL=toh.component.js.map