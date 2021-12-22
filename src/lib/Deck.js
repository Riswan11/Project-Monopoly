"use strict";
exports.__esModule = true;
exports.Card = exports.Deck = void 0;
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = new Array();
        this.top = 0;
    }
    Deck.prototype.addCard = function (c) {
        this.cards.push(c);
    };
    Deck.prototype.toString = function () {
        for (var i = 0; i < this.cards.length; i++) {
            console.log("card " + (i + 1) + " " + this.cards[i].toString());
        }
    };
    Deck.prototype.drawCard = function () {
        if (this.top >= 16) {
            this.shuffle();
            this.top = 0;
        }
        return this.cards[this.top++];
    };
    Deck.prototype.buildDeck = function () {
        this.shuffle();
        for (var i = 0; i < 16; i++) {
            this.createChance(i);
        }
    };
    Deck.prototype.createChance = function (id) {
        if (id == 0) {
            var c = new Card("Advance to Go (Collect $200) ", id);
            this.addCard(c);
        }
        if (id == 1) {
            var c = new Card("Advance to Illinois Ave—If you pass Go, collect $200", id);
            this.addCard(c);
        }
        if (id == 2) {
            var c = new Card("Advance to St. Charles Place – If you pass Go, collect $200 ", id);
            this.addCard(c);
        }
        if (id == 3) {
            var c = new Card("Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown. ", id);
            this.addCard(c);
        }
        if (id == 4) {
            var c = new Card("Advance token to the nearest Railroad and pay owner twice the rental to which they are otherwise entitled. If Railroad is unowned, you may buy it from the Bank. ", id);
            this.addCard(c);
        }
        if (id == 5) {
            var c = new Card("Bank pays you dividend of $50 ", id);
            this.addCard(c);
        }
        if (id == 6) {
            var c = new Card("Get Out of Jail Free", id);
            this.addCard(c);
        }
        if (id == 7) {
            var c = new Card("Go Back 3 Spaces", id);
            this.addCard(c);
        }
        if (id == 8) {
            var c = new Card("Bank error in your favor—Collect $200", id);
            this.addCard(c);
        }
        if (id == 9) {
            var c = new Card("Pay poor tax of $15 ", id);
            this.addCard(c);
        }
        if (id == 10) {
            var c = new Card("Take a walk on the Boardwalk–Advance token to Boardwalk", id);
            this.addCard(c);
        }
        if (id == 11) {
            var c = new Card("You have been elected Chairman of the Board–Pay each player $50 ", id);
            this.addCard(c);
        }
        if (id == 12) {
            var c = new Card(" You have won a crossword competition—Collect $100 ", id);
            this.addCard(c);
        }
        if (id == 13) {
            var c = new Card("Your building and loan matures—Collect $150 ", id);
            this.addCard(c);
        }
        if (id == 14) {
            var c = new Card("Go to Jail–Go directly to Jail–Do not pass Go, do not collect $200 ", id);
            this.addCard(c);
        }
        if (id == 15) {
            var c = new Card("Doctor's fee—Pay $50 ", id);
            this.addCard(c);
        }
    };
    Deck.prototype.createCommunity = function () {
    };
    Deck.prototype.shuffle = function () {
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    };
    return Deck;
}());
exports.Deck = Deck;
var Card = /** @class */ (function () {
    function Card(content, id) {
        this.content = content;
        this.id = id;
    }
    Card.prototype.toString = function () {
        return (this.content);
    };
    Card.prototype.getId = function () {
        return this.id;
    };
    return Card;
}());
exports.Card = Card;
// // var Chance= new Deck();
// var Community=new Deck();
// Community.buildDeck();
// Community.shuffle();
// Community.toString()
// console.log(Community.drawCard().toString());
