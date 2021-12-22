"use strict";
/**
 * Represents Monopoly Piece.
 */
exports.__esModule = true;
exports.Piece = void 0;
var enums_1 = require("./enums");
var Piece = /** @class */ (function () {
    function Piece(name, location) {
        this.name = name;
        this.location = location;
    }
    Piece.prototype.getPieceName = function () {
        return enums_1.PieceName[this.name];
    };
    Piece.prototype.getLocation = function () {
        return this.location;
    };
    Piece.prototype.setLocation = function (location) {
        this.location = location;
    };
    return Piece;
}());
exports.Piece = Piece;
