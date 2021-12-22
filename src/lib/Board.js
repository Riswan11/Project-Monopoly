"use strict";
/**
 * Represents Monopoly Board.
 */
exports.__esModule = true;
exports.Board = void 0;
var Square_1 = require("./Square");
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.init = function () {
        console.log('Setting up Monopoly Board');
        this.squares = [];
        this.buildSquares();
        this.linkSquares();
        this.pot = 0;
    };
    // public getPlayers(): IPlayer[] {
    //   return this.players;
    // };
    Board.prototype.getSquare = function (start, distance) {
        var endIndex = (start.getIndex() + distance) % 40;
        return this.squares[endIndex];
    };
    Board.prototype.getSquarebyIndex = function (index) {
        return this.squares[index];
    };
    Board.prototype.setPlayers = function (players) {
        this.players = players;
    };
    Board.prototype.getStartSquare = function () {
        return this.squares[0];
    };
    Board.prototype.getBoardArr = function () {
        return this.squares;
    };
    Board.prototype.getJail = function () {
        return this.squares[10];
    };
    Board.prototype.increasePot = function (n) {
        this.pot += n;
    };
    Board.prototype.resetPot = function () {
        this.pot = 0;
    };
    Board.prototype.getPot = function () {
        return this.pot;
    };
    Board.prototype.buildSquares = function () {
        for (var i = 0; i < 40; i++) {
            this.build(i);
            // console.log(i+" created " + this.squares[i].getName())
        }
    };
    Board.prototype.assignBoard = function (ps) {
        for (var i = 0; i < this.squares.length; i++) {
            if (this.squares[i].isBuyable()) {
                if (i % 2 == 0) {
                    this.squares[i].setOwner(ps[0]);
                    if (this.squares[i].isUtil()) {
                        ps[0].addUtil();
                    }
                }
                else {
                    this.squares[i].setOwner(ps[1]);
                    if (this.squares[i].isRR()) {
                        ps[1].addRR();
                    }
                    if (this.squares[i].isUtil()) {
                        ps[1].addUtil();
                    }
                }
            }
        }
        console.log(ps[0].getName() + " owns " + ps[0].getRR() + " Railroads");
        console.log(ps[1].getName() + " owns " + ps[1].getRR() + " Railroads");
    };
    Board.prototype.linkSquares = function () {
        for (var i = 0; i < this.squares.length - 1; i++) {
            this.link(i);
        }
        var first = this.squares[0];
        var last = this.squares[this.squares.length - 1];
        last.setNextSquare(first);
    };
    Board.prototype.build = function (i) {
        if (i == 0) {
            var square = new Square_1.Square("Go", i);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 1) {
            var square = new Square_1.Square("Mediterranean Avenue", i);
            square.setPrice(60);
            square.setRent(2);
            this.squares[i] = square;
        }
        if (i == 2 || i == 17 || i == 33) {
            var square = new Square_1.Square("Community Chest", i);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 3) {
            var square = new Square_1.Square("Baltic Ave", i);
            square.setRent(4);
            square.setPrice(60);
            this.squares[i] = square;
        }
        if (i == 4) {
            var square = new Square_1.Square("City Tax", i);
            square.setTax(true);
            square.setPrice(200);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 5) {
            var square = new Square_1.Square("Reading Railroad", i);
            square.setRR(true);
            square.setPrice(200);
            this.squares[i] = square;
        }
        if (i == 6) {
            var square = new Square_1.Square("Massachusetts Avenue", i);
            square.setRent(6);
            square.setPrice(100);
            this.squares[i] = square;
        }
        if (i == 7 || i == 22 || i == 36) {
            var square = new Square_1.Square('Chance', i);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 8) {
            var square = new Square_1.Square("Vermont Avenue", i);
            square.setRent(6);
            square.setPrice(100);
            this.squares[i] = square;
        }
        if (i == 9) {
            var square = new Square_1.Square("Conneticut Avenue", i);
            square.setRent(8);
            square.setPrice(120);
            this.squares[i] = square;
        }
        if (i == 10) {
            var square = new Square_1.Square("Jail", i);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 11) {
            var square = new Square_1.Square('St Charles Place', i);
            square.setRent(10);
            square.setPrice(140);
            this.squares[i] = square;
        }
        if (i == 12) {
            var square = new Square_1.Square("Electrity Company", i);
            square.setUtil(true);
            square.setPrice(150);
            this.squares[i] = square;
        }
        if (i == 13) {
            var square = new Square_1.Square("States Avenue", i);
            square.setRent(10);
            square.setPrice(140);
            this.squares[i] = square;
        }
        if (i == 14) {
            var square = new Square_1.Square("Virginia Avenue", i);
            square.setRent(12);
            square.setPrice(160);
            this.squares[i] = square;
        }
        if (i == 15) {
            var square = new Square_1.Square("Pennsylvania Railroad", i);
            square.setRR(true);
            square.setPrice(200);
            this.squares[i] = square;
        }
        if (i == 16) {
            var square = new Square_1.Square("St James Place", i);
            square.setRent(14);
            square.setPrice(180);
            this.squares[i] = square;
        }
        if (i == 18) {
            var square = new Square_1.Square("Tennessee Avenue", i);
            square.setRent(14);
            square.setPrice(180);
            this.squares[i] = square;
        }
        if (i == 19) {
            var square = new Square_1.Square("New York Avenue", i);
            square.setRent(16);
            square.setPrice(200);
            this.squares[i] = square;
        }
        if (i == 20) {
            var square = new Square_1.Square("Free Parking", i);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 21) {
            var square = new Square_1.Square("Kentucky Avenue", i);
            square.setRent(18);
            square.setPrice(220);
            this.squares[i] = square;
        }
        if (i == 23) {
            var square = new Square_1.Square("Indiana Avenue", i);
            square.setRent(18);
            square.setPrice(220);
            this.squares[i] = square;
        }
        if (i == 24) {
            var square = new Square_1.Square("Illinois Avenue", i);
            square.setRent(20);
            square.setPrice(240);
            this.squares[i] = square;
        }
        if (i == 25) {
            var square = new Square_1.Square("B&O Railroad", i);
            square.setRR(true);
            square.setPrice(200);
            this.squares[i] = square;
        }
        if (i == 26) {
            var square = new Square_1.Square("Atlantic Avenue", i);
            square.setRent(22);
            square.setPrice(260);
            this.squares[i] = square;
        }
        if (i == 27) {
            var square = new Square_1.Square("Ventnor Avenue", i);
            square.setRent(22);
            square.setPrice(260);
            this.squares[i] = square;
        }
        if (i == 28) {
            var square = new Square_1.Square("Water Works", i);
            square.setUtil(true);
            square.setPrice(150);
            this.squares[i] = square;
        }
        if (i == 29) {
            var square = new Square_1.Square("Marvin Gardens", i);
            square.setRent(24);
            square.setPrice(280);
            this.squares[i] = square;
        }
        if (i == 30) {
            var square = new Square_1.Square("Go To Jail", i);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 31) {
            var square = new Square_1.Square("Pacific Avenue", i);
            square.setRent(26);
            square.setPrice(300);
            this.squares[i] = square;
        }
        if (i == 32) {
            var square = new Square_1.Square("North Carolina Avenue", i);
            square.setRent(26);
            square.setPrice(300);
            this.squares[i] = square;
        }
        if (i == 34) {
            var square = new Square_1.Square("Pennsylvania Avenue", i);
            square.setRent(28);
            square.setPrice(320);
            this.squares[i] = square;
        }
        if (i == 35) {
            var square = new Square_1.Square("Short Line", i);
            square.setRR(true);
            square.setPrice(200);
            this.squares[i] = square;
        }
        if (i == 37) {
            var square = new Square_1.Square("Park Place", i);
            square.setRent(35);
            square.setPrice(350);
            this.squares[i] = square;
        }
        if (i == 38) {
            var square = new Square_1.Square("Luxury Tax", i);
            square.setTax(true);
            square.setPrice(100);
            square.setBuyable(false);
            this.squares[i] = square;
        }
        if (i == 39) {
            var square = new Square_1.Square("Boardwalk", i);
            square.setRent(50);
            square.setPrice(400);
            this.squares[i] = square;
        }
        // const square: ISquare = new Square(`Square ${i + 1}`, i);
        // this.squares[i] = square;
    };
    Board.prototype.link = function (i) {
        var current = this.squares[i];
        var next = this.squares[i + 1];
        current.setNextSquare(next);
    };
    return Board;
}());
exports.Board = Board;
