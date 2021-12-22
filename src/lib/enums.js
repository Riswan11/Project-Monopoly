"use strict";
exports.__esModule = true;
exports.types = exports.teams = exports.PieceName = exports.zones = void 0;
/**
 * Represents Monopoly Piece "Names".
 */
var zones;
(function (zones) {
    zones[zones["red"] = 0] = "red";
    zones[zones["yellow"] = 1] = "yellow";
    zones[zones["blue"] = 2] = "blue";
    zones[zones["green"] = 3] = "green";
})(zones = exports.zones || (exports.zones = {}));
var PieceName;
(function (PieceName) {
    PieceName[PieceName["Car"] = 0] = "Car";
    PieceName[PieceName["Hat"] = 1] = "Hat";
})(PieceName = exports.PieceName || (exports.PieceName = {}));
var teams;
(function (teams) {
    teams[teams["Stars"] = 0] = "Stars";
    teams[teams["Stripes"] = 1] = "Stripes";
})(teams = exports.teams || (exports.teams = {}));
var types;
(function (types) {
    types[types["getoutJail"] = -1] = "getoutJail";
    types[types["passGo"] = -2] = "passGo";
    types[types["payall"] = -3] = "payall";
    types[types["allpay"] = -4] = "allpay";
    types[types["moveBack"] = -5] = "moveBack";
    types[types["moveForward"] = -6] = "moveForward";
    types[types["gotoJail"] = -7] = "gotoJail";
    types[types["repairs"] = -8] = "repairs";
})(types = exports.types || (exports.types = {}));
