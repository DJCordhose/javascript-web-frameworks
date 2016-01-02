var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var HelloCmp = (function () {
    function HelloCmp() {
        this.greeting = 'Hello';
    }
    HelloCmp.prototype.reset = function (input) {
        this.greeting = '';
        input.focus();
    };
    HelloCmp.prototype.updateModel = function (value) {
        this.greeting = value;
    };
    HelloCmp = __decorate([
        core_1.Component({
            selector: 'hello-app',
        }),
        core_1.View({
            templateUrl: 'hello.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HelloCmp);
    return HelloCmp;
})();
browser_1.bootstrap(HelloCmp);
//# sourceMappingURL=app.js.map