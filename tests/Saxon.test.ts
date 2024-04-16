import {describe, beforeEach,expect, test} from "vitest";
import {Saxon} from "../src/Saxon";
import { Soldier } from "../src/Soldier";

describe("Saxon", ()=> {
    let saxon:Saxon;
    let health   = 60;
    let strength = 25;

    beforeEach(()=> {
      saxon = new Saxon(health, strength);
    });

    // test("should inherit from Soldier", ()=> {
    //   expect(saxon instanceof Soldier).toEqual(true);
    // });

    describe("constructor function", ()=> {
    //   test("should receive 2 arguments (health & strength)", ()=> {
    //     expect(Saxon.length).toEqual(2);
    //   });

    //   test("should receive the health property as its 1st argument", ()=> {
    //     expect(saxon.health).toEqual(health);
    //   });

    //   test("should receive the strength property as its 2nd argument", ()=> {
    //     expect(saxon.strength).toEqual(strength);
    //   });
    });

    describe("attack() method", ()=> {
      // test("should be a function", ()=> {
      //   expect(typeof(saxon.attack)).toBe("function");
      // });

      // test("should receive 0 arguments", ()=> {
      //   expect(saxon.attack.length).toEqual(0);
      // });

      // test("should return the strength property of the Saxon", ()=> {
      //   expect(saxon.attack()).toEqual(strength);
      // });
    });

    describe("receiveDamage() method", ()=> {
      // test("should be a function", ()=> {
      //   expect(typeof(saxon.receiveDamage)).toBe("function");
      // });
      // test("should receive 1 argument (the damage)", ()=> {
      //   expect(saxon.receiveDamage.length).toEqual(1);
      // });

      // test("should remove the received damage from the health property", ()=> {
      //   saxon.receiveDamage(50);
      //   expect(saxon.health).toEqual(health - 50);
      // });

      // test("should return \"A Saxon has received DAMAGE points of damage\", if the Saxon is still alive", ()=> {
      //   expect(saxon.receiveDamage(45)).toEqual("A Saxon has received 45 points of damage");
      //   expect(saxon.receiveDamage(10)).toEqual("A Saxon has received 10 points of damage");
      // });

      // test("should return \"A Saxon has died in combat\", if the Saxon dies", ()=> {
      //   expect(saxon.receiveDamage(health)).toEqual("A Saxon has died in combat");
      // });
    });
  });
