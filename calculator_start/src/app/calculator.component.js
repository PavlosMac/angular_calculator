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
var core_1 = require('@angular/core');
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.runningTotal = 0;
        this.previousTotal = 0;
        this.newTotal = true;
        this.currentOperator = null;
    }
    CalculatorComponent.prototype.numberButtonClick = function (event) {
        //I will be able to keep concatenating numbers to the first
        if (this.runningTotal == 0 || this.newTotal) {
            this.runningTotal = '';
            this.newTotal = false;
        }
        this.runningTotal = parseFloat('' + this.runningTotal + event.target.value);
        console.log(this.runningTotal);
    };
    CalculatorComponent.prototype.operativeButtonClick = function (event) {
        var operator = event.target.innerHTML;
        console.log(event.target.innerHTML);
        switch (operator) {
            case 'AC':
                this.runningTotal = 0;
                this.newTotal = true;
                break;
            case '.':
                this.runningTotal = this.runningTotal + '' + '.';
                console.log(this.runningTotal);
                break;
        }
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-calculator',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map