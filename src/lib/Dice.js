"use strict";
/**
 * Represents a Dice.
 */
exports.__esModule = true;
exports.Dice = void 0;
var Dice = /** @class */ (function () {
    function Dice() {
        this.init = true;
        this.roll();
    }
    Dice.prototype.roll = function () {
        this.faceValue = Math.floor(Math.random() * 6) + 1;
        if (!this.init) {
            console.log("Rolled dice with face value: " + this.faceValue);
        }
        else {
            this.init = false;
        }
    };
    Dice.prototype.getFaceValue = function () {
        return this.faceValue;
    };
    return Dice;
}());
exports.Dice = Dice;
