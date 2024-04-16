import { Soldier } from '../src/Soldier';
import {describe, beforeEach,expect, test} from "vitest";

describe('Soldier', () => {
    let soldier: Soldier;
    let strength = 150;
    let health = 300;

    beforeEach(() => {
      soldier = new Soldier(health, strength)
    });

    describe('constructor method', ()=>{
      test('should receive 2 arguments: health and strength ', ()=> expect(Soldier.length).toEqual(2));

      //   test("should receive the health property as its 1st argument", ()=>
      // expect(soldier.health).toEqual(health));

      // test("should receive the health property as its 1st argument", ()=>
      // expect(soldier.strength).toEqual(strength));
    })
    describe("attack() method", () => {

        // test("should be a function", ()=> expect(typeof(soldier.attack)).toBe("function"));

        // test("should receive 0 arguments", ()=> {
        //   expect(soldier.attack.length).toEqual(0);
        // });

        // test("should return the strength property of the Soldier", ()=> {
        //   expect(soldier.attack()).toEqual(strength);
        // });
    });
    describe("receiveDamage() method", ()=> {
        // test("should be a function", ()=>
        //   expect(typeof(soldier.receiveDamage)).toBe("function"));

        // test("should receive 1 argument (damage)", ()=>
        //   expect(soldier.receiveDamage.length).toEqual(1));

        // test("should remove the received damage from the health property", ()=> {
        //   soldier.receiveDamage(50);
        //   expect(soldier.health).toEqual(health - 50);
        // });

        // test("shouldn't return anything", ()=>
        //   expect(soldier.receiveDamage(50)).toEqual(undefined));

        })
})
