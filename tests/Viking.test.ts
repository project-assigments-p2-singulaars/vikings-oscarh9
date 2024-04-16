import { Soldier } from '../src/Soldier';
import {Viking} from '../src/Viking';
import {describe, beforeEach,expect, test} from "vitest";

describe("Viking", ()=> {
    let viking:Viking;
    let name     = "Harald";
    let strength = 150;
    let health   = 300;

    beforeEach (()=> {
      viking = new Viking(name, health, strength);
    });

    // test("should inherit from Soldier", ()=> {
    //   expect(viking instanceof Soldier).toEqual(true);
    // });

    describe("constructor function", ()=> {
    //   test("should receive 3 arguments (name, health & strength)", ()=> {
    //     expect(Viking.length).toEqual(3);
    //   });

    //   test("should receive the name property as its 1st argument", ()=> {
    //     expect(viking.name).toEqual(name);
    //   });

    //   test("should receive the health property as its 2nd argument", ()=> {
    //     expect(viking.health).toEqual(health);
    //   });

    //   test("should receive the strength property as its 3rd argument", ()=> {
    //     expect(viking.strength).toEqual(strength);
    //   });
    });

    describe("attack() method", ()=> {
    //   test("should be a function", ()=> {
    //     expect(typeof(viking.attack)).toBe("function");
    //   });

    //   test("should receive 0 arguments", ()=> {
    //     expect(viking.attack.length).toEqual(0);
    //   });

    //   test("should return the strength property of the Viking", ()=> {
    //     expect(viking.attack()).toEqual(strength);
    //   });
    });

    describe("receiveDamage() method", ()=> {
    //   test("should be a function", ()=> {
    //     expect(typeof(viking.receiveDamage)).toBe("function");
    //   });

    //   test("should receive 1 argument (the damage)", ()=> {
    //     expect(viking.receiveDamage.length).toEqual(1);
    //   });

    //   test("should remove the received damage from the health property", ()=> {
    //     viking.receiveDamage(50);
    //     expect(viking.health).toEqual(health - 50);
    //   });

    //   test("should return \"NAME has received DAMAGE points of damage\", if the Viking is still alive", ()=> {
    //     expect(viking.receiveDamage(50)).toEqual(name + " has received 50 points of damage");
    //     expect(viking.receiveDamage(75)).toEqual(name + " has received 75 points of damage");
    //   });

    //   test("should return \"NAME has died in act of combat\", if the Viking dies", ()=> {
    //     expect(viking.receiveDamage(health)).toEqual(name + " has died in act of combat");
    //   });
    });

    describe("battleCry() method", ()=> {
    //   test("should be a function", ()=> {
    //     expect(typeof(viking.battleCry)).toBe("function");
    //   });

    //   test("should receive 0 arguments", ()=> {
    //     expect(viking.battleCry.length).toEqual(0);
    //   });

    //   test("should return \"Odin Owns You All!\"", ()=> {
    //     expect(viking.battleCry()).toEqual("Odin Owns You All!");
    //   });
     });
  });
