import inquirer from "inquirer";
import {Personnage} from "./class/Personnage";
import {Monster} from "./class/Monster";
import {configStart, configStop} from "./config/ConfigConversation";

let personnage: Personnage | null = null;
const monster: string[] = ["Cerbere", "Dragon", "Cyclope", "Serpent", "Poulet Magique", "Le gros Manu", "Jenkins", "Arraignés", "Carrote géante"]

let random: number;
let random2: number;
let random3: number;


// Recursif function for MathRandom without duplicate number
const checkDisponibility = () => {
    random = Math.floor(Math.random() * monster.length);
    random2 = Math.floor(Math.random() * monster.length);
    random3 = Math.floor(Math.random() * monster.length);
    if (random2 === random || random3 === random || random2 === random3) {
        random2 = Math.floor(Math.random() * monster.length);
        random3 = Math.floor(Math.random() * monster.length);
        checkDisponibility();
    } else {
        return;
    }
}
checkDisponibility();

// startGame with monsters
const fight = () => {
    inquirer.prompt([
        {
            name: "fight",
            type: "confirm",
            message: "do you want to fight with a monster?",
        }
    ]).then(response => {
        const strength = Math.floor(Math.random() * 35)
        const monster1 = new Monster(monster[random], strength);
        const monster2 = new Monster(monster[random2], strength);
        const monster3 = new Monster(monster[random3], strength);
        if (response.fight && personnage !== null) {
            console.log(`Ok ${personnage.name} you are the best, choose your target`)
            console.log("Around you you have several enemies, make the right choice!")
            inquirer.prompt([
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
            ]).then(response => {
                let strength: number | null = null;
                switch (response.monster) {
                    case   monster1.name:
                        personnage?.fight(monster1.strength)
                        strength = monster1.strength;
                        break
                    case monster2.name:
                        personnage?.fight(monster2.strength);
                        strength = monster2.strength;
                        break
                    case monster3.name:
                        personnage?.fight(monster3.strength);
                        strength = monster3.strength;
                        break
                }
                console.log(`${response.monster} just inflicted on you ${strength} damage points !`);
                console.log(`${personnage?.name} il te reste ${personnage?.life} points de vie !`);
                if (personnage && personnage.life < 0) {
                    console.log("You are dead !!!!")
                } else {
                    checkDisponibility();
                    fight();
                }
            })
        } else {
            restTimer();
        }
    }).catch(err => console.log(err))
}

// function pour increase your life
const restTimer = () => {
    console.log(`Hey ${personnage?.name} do you want to rest now ?`)
    inquirer.prompt(configStop)
        .then((response) => {
            if (response.rest){
                setTimeout(() => {
                    console.log(personnage?.rest(10))
                    restTimer()
                }, 2000)
            }else{
                fight();
            }
        })
        .catch((error) => console.log(error))
}


inquirer.prompt(configStart)
    .then((answers) => {
        switch (answers.class) {
            case "Mage":
                personnage = new Personnage(answers.name, answers.age, answers.class, 100)
                break;
            case "Warrior":
                personnage = new Personnage(answers.name, answers.age, answers.class, 100)
                break;
            case "Gobeline":
                personnage = new Personnage(answers.name, answers.age, answers.class, 100)
                break;
        }

        if (personnage !== null) {
            console.log("Hey " + personnage.name + " tu as " + personnage.age + " ans et tu es un fucking " + personnage.type + " avec " + personnage.life + " points de vie !");
            fight();
        } else {
            return ""
        }
    })
    .catch((err) => {
        console.log(err)
    })
