var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    return Character;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name, health, strength) {
        return _super.call(this, name, health, strength) || this;
    }
    Warrior.prototype.attack = function (target) {
        console.log("".concat(this.name, " is attacking ").concat(target.name));
        target.defend(this);
    };
    Warrior.prototype.defend = function (target) {
        console.log("".concat(this.name, " is defending against ").concat(target.name));
    };
    return Warrior;
}(Character));
var warrior1 = new Warrior("Warrior1", 100, 10);
var warrior2 = new Warrior("Warrior2", 100, 10);
warrior1.attack(warrior2);
warrior2.attack(warrior1);
warrior2.attack(warrior1);
warrior1.attack(warrior2);
warrior2.attack(warrior1);
warrior2.attack(warrior1);
warrior1.attack(warrior2);
