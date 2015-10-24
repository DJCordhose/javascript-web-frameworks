/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
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
        angular2_1.Component({
            selector: 'hello-app',
        }),
        angular2_1.View({
            templateUrl: 'hello.html',
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HelloCmp);
    return HelloCmp;
})();
angular2_1.bootstrap(HelloCmp);
//# sourceMappingURL=app.js.map