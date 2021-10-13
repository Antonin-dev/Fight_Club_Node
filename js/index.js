"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var Personnage_1 = require("./class/Personnage");
var Monster_1 = require("./class/Monster");
var ConfigConversation_1 = require("./config/ConfigConversation");
var personnage = null;
var monster = ["Cerbere", "Dragon", "Cyclope", "Serpent", "Poulet Magique", "Le gros Manu", "Jenkins", "Arraignés", "Carrote géante"];
var random;
var random2;
var random3;
// Recursif function for MathRandom without duplicate number
var checkDisponibility = function () {
    random = Math.floor(Math.random() * monster.length);
    random2 = Math.floor(Math.random() * monster.length);
    random3 = Math.floor(Math.random() * monster.length);
    if (random2 === random || random3 === random || random2 === random3) {
        random2 = Math.floor(Math.random() * monster.length);
        random3 = Math.floor(Math.random() * monster.length);
        checkDisponibility();
    }
    else {
        return;
    }
};
checkDisponibility();
// startGame with monsters
var fight = function () {
    inquirer_1.default.prompt([
        {
            name: "fight",
            type: "confirm",
            message: "do you want to fight with a monster?",
        }
    ]).then(function (response) {
        var strength = Math.floor(Math.random() * 35);
        var monster1 = new Monster_1.Monster(monster[random], strength);
        var monster2 = new Monster_1.Monster(monster[random2], strength);
        var monster3 = new Monster_1.Monster(monster[random3], strength);
        if (response.fight && personnage !== null) {
            console.log("Ok " + personnage.name + " you are the best, choose your target");
            console.log("Around you you have several enemies, make the right choice!");
            inquirer_1.default.prompt([
                {
                    name: "monster",
                    type: "list",
                    message: "Choose a monster !",
                    choices: [
                        monster1.name,
                        monster2.name,
                        monster3.name,
                    ]
                }
            ]).then(function (response) {
                var strength = null;
                switch (response.monster) {
                    case monster1.name:
                        personnage === null || personnage === void 0 ? void 0 : personnage.fight(monster1.strength);
                        strength = monster1.strength;
                        break;
                    case monster2.name:
                        personnage === null || personnage === void 0 ? void 0 : personnage.fight(monster2.strength);
                        strength = monster2.strength;
                        break;
                    case monster3.name:
                        personnage === null || personnage === void 0 ? void 0 : personnage.fight(monster3.strength);
                        strength = monster3.strength;
                        break;
                }
                console.log(response.monster + " just inflicted on you " + strength + " damage points !");
                console.log((personnage === null || personnage === void 0 ? void 0 : personnage.name) + " il te reste " + (personnage === null || personnage === void 0 ? void 0 : personnage.life) + " points de vie !");
                if (personnage && personnage.life < 0) {
                    console.log("You are dead !!!!");
                }
                else {
                    checkDisponibility();
                    fight();
                }
            });
        }
        else {
            restTimer();
        }
    }).catch(function (err) { return console.log(err); });
};
// function pour increase your life
var restTimer = function () {
    console.log("Hey " + (personnage === null || personnage === void 0 ? void 0 : personnage.name) + " do you want to rest now ?");
    inquirer_1.default.prompt(ConfigConversation_1.configStop)
        .then(function (response) {
        if (response.rest) {
            setTimeout(function () {
                console.log(personnage === null || personnage === void 0 ? void 0 : personnage.rest(10));
                restTimer();
            }, 2000);
        }
        else {
            fight();
        }
    })
        .catch(function (error) { return console.log(error); });
};
inquirer_1.default.prompt(ConfigConversation_1.configStart)
    .then(function (answers) {
    switch (answers.class) {
        case "Mage":
            personnage = new Personnage_1.Personnage(answers.name, answers.age, answers.class, 100);
            break;
        case "Warrior":
            personnage = new Personnage_1.Personnage(answers.name, answers.age, answers.class, 100);
            break;
        case "Gobeline":
            personnage = new Personnage_1.Personnage(answers.name, answers.age, answers.class, 100);
            break;
    }
    if (personnage !== null) {
        console.log("Hey " + personnage.name + " tu as " + personnage.age + " ans et tu es un fucking " + personnage.type + " avec " + personnage.life + " points de vie !");
        fight();
    }
    else {
        return "";
    }
})
    .catch(function (err) {
    console.log(err);
});
