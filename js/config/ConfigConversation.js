"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configStop = exports.configStart = void 0;
exports.configStart = [
    /*
    * Configuration for begin the game
    * */
    {
        name: "name",
        type: "input",
        message: "Choose your name",
    },
    {
        name: "age",
        type: "input",
        message: "How old are you?"
    },
    {
        name: "class",
        type: "list",
        message: "Choose your class",
        choices: [
            "Mage",
            "Warrior",
            "Gobeline",
        ]
    },
    {
        name: "confirm",
        type: "confirm",
        message: "Are you sure?",
    }
];
exports.configStop = [
    /*
    * Configuration for stop the game
    * */
    {
        name: "rest",
        type: "confirm",
        message: "Do you want to rest ?",
    }
];
