"use strict";
exports.__esModule = true;
exports.Square = void 0;
/**
 * Represents Monopoly Square.
 */
var enums_1 = require("./enums");
var Square = /** @class */ (function () {
    function Square(name, index) {
        this.name = name;
        this.index = index;
        this.buyable = true;
        this.price = 0;
        this.owned = false;
        this.railroads = false;
        this.util = false;
        this.tax = false;
        if (index > 0 && index < 10) {
            this.zone = enums_1.zones.red;
        }
        else if (index > 10 && index < 20) {
            this.zone = enums_1.zones.yellow;
        }
        else if (index > 20 && index < 30) {
            this.zone = enums_1.zones.blue;
        }
        else if (index > 30) {
            this.zone = enums_1.zones.green;
        }
    }
    Square.prototype.setOwned = function (b) {
        this.owned = b;
    };
    Square.prototype.setOwner = function (p) {
        this.owner = p;
        this.owned = true;
    };
    Square.prototype.setRent = function (n) {
        this.rent = n;
    };
    Square.prototype.setBuyable = function (change) {
        this.buyable = change;
    };
    Square.prototype.setPrice = function (p) {
        this.price = p;
    };
    Square.prototype.getName = function () {
        return this.name;
    };
    Square.prototype.getOwner = function () {
        return this.owner;
    };
    Square.prototype.getPrice = function () {
        return this.price;
    };
    Square.prototype.isBuyable = function () {
        return this.buyable;
    };
    Square.prototype.getIndex = function () {
        return this.index;
    };
    Square.prototype.isOwned = function () {
        return this.owned;
    };
    Square.prototype.getRent = function () {
        return this.rent;
    };
    Square.prototype.getNextSquare = function () {
        return this.nextSquare;
    };
    Square.prototype.isRR = function () {
        return this.railroads;
    };
    Square.prototype.setRR = function (b) {
        this.railroads = b;
    };
    Square.prototype.setNextSquare = function (nextSquare) {
        this.nextSquare = nextSquare;
    };
    Square.prototype.isUtil = function () {
        return this.util;
    };
    Square.prototype.setUtil = function (b) {
        this.util = b;
    };
    Square.prototype.isTax = function () {
        return this.tax;
    };
    Square.prototype.setTax = function (b) {
        this.tax = b;
    };
    Square.prototype.getZone = function () {
        return enums_1.zones[this.zone];
    };
    return Square;
}());
exports.Square = Square;
