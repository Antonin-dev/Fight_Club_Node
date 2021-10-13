"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name, strength) {
        this._name = name;
        this._strength = strength;
    }
    Object.defineProperty(Monster.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "strength", {
        get: function () {
            return this._strength;
        },
        enumerable: false,
        configurable: true
    });
    return Monster;
}());
exports.Monster = Monster;
