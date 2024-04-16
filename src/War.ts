import { Soldier } from "./Soldier";
import { Viking } from "./Viking";
import { Saxon } from "./Saxon";

export class War {
    vikingArmy: Viking [] = [];
    saxonArmy: Saxon [] = [];

    
    addViking(Viking: Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon: Viking) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let resultVickingAttack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon,1);
        }
        
        return resultVickingAttack
    }
    saxonAttack() {
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let resultSaxonAttack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(randomViking,1);
        }

        return resultSaxonAttack
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
        } else if (this.vikingsArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else return "Vikings and Saxons are still in the thick of battle.";
    }
}
