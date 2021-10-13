"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personnage = void 0;
var Personnage = /** @class */ (function () {
    function Personnage(name, age, type, life) {
        this._name = name;
        this._age = age;
        this._type = type;
        this._life = life;
    }
    Object.defineProperty(Personnage.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "life", {
        get: function () {
            return this._life;
        },
        enumerable: false,
        configurable: true
    });
    Personnage.prototype.fight = function (value) {
        this._life -= value;
    };
    return Personnage;
}());
exports.Personnage = Personnage;
