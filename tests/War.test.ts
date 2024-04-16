import { Saxon } from "../src/Saxon";
import { Viking } from "../src/Viking";
import { War } from "../src/War";
import {describe, beforeEach,expect, test} from "vitest";

describe("War", () => {
  let viking: Viking, saxon: Saxon, war: War;

  const generateViking = () => {
    let name = "Harald";
    let strength = 150;
    let health = 300;

    return new Viking(name, health, strength);
  }

  const generateSaxon = () => {
    let health = 60;
    let strength = 25;

    return new Saxon(health, strength);
  }

  beforeEach(() => {
    viking = generateViking();
    saxon = generateSaxon();
    war = new War();
  });


  describe("constructor function", () => {
    test("should receive 0 arguments", () => {
      expect(War.length).toEqual(0);
    });

    test("should assign an empty array to the vikingArmy property", () => {
      expect(war.vikingArmy).toEqual([]);
    });

    test("should assign an empty array to the saxonArmy property", () => {
      expect(war.saxonArmy).toEqual([]);
    });
  });

  describe("addViking() method", () => {
    test("should be a function", () => {
      expect(typeof (war.addViking)).toBe("function");
    });

    test("should receive 1 argument (a Viking object)", () => {
      expect(war.addViking.length).toEqual(1);
    });

    test("should add the received Viking to the army", () => {
      war.addViking(viking);
      expect(war.vikingArmy).toEqual([viking]);
    });

    test("shouldn't return anything", () => {
      expect(war.addViking(viking)).toEqual(undefined);
    });
  });

  describe("addSaxon() method", () => {
    test("should be a function", () => {
      expect(typeof (war.addSaxon)).toBe("function");
    });

    test("should receive 1 argument (a Saxon object)", () => {
      expect(war.addSaxon.length).toEqual(1);
    });

    test("should add the received Saxon to the army", () => {
      war.addSaxon(saxon);
      expect(war.saxonArmy).toEqual([saxon]);
    });

    test("shouldn't return anything", () => {
      expect(war.addSaxon(saxon)).toEqual(undefined);
    });
  });

  describe("Armies Attack", () => {
    beforeEach(() => {
      war.addViking(viking);
      war.addSaxon(saxon);
    });

    describe("vikingAttack() method", () => {
      test("should be a function", () => {
        expect(typeof (war.vikingAttack)).toBe("function");
      });

      test("should receive 0 arguments", () => {
        expect(war.vikingAttack.length).toEqual(0);
      });

      test("should make Saxon receiveDamage() equal to the strength of a Viking", () => {
        let oldHealth = saxon.health;
        war.vikingAttack();
        expect(saxon.health).toEqual(oldHealth - viking.strength);
      });

      test("should remove dead saxons from the army", () => {
        war.vikingAttack();
        expect(war.saxonArmy.length).toEqual(0);
      });

      test("should return result of calling receiveDamage() of a Saxon with the strength of a Viking", () => {
        expect(war.vikingAttack()).toEqual("A Saxon has died in combat");
      });
    });

    describe("saxonAttack() method", () => {
      test("should be a function", () => {
        expect(typeof (war.saxonAttack)).toBe("function");
      });

      test("should receive 0 arguments", () => {
        expect(war.saxonAttack.length).toEqual(0);
      });

      test("should make a Viking receiveDamage() equal to the strength of a Saxon", () => {
        let oldHealth = viking.health;
        war.saxonAttack();
        expect(viking.health).toEqual(oldHealth - saxon.strength);
      });

      test("should remove dead vikings from the army", () => {
        for (let i = 0; i < 12; i += 1) {
          war.saxonAttack();
        }
        expect(war.vikingArmy.length).toEqual(0);
      });

      test("should return result of calling receiveDamage() of a Viking with the strength of a Saxon", () => {
        expect(war.saxonAttack()).toEqual(viking.name + " has received " + saxon.strength + " points of damage");
      });
    });

    describe("showStatus() method", () => {
      test("should be a function", () => {
        expect(typeof (war.showStatus)).toBe("function");
      });

      test("should receive 0 arguments", () => {
        expect(war.showStatus.length).toEqual(0);
      });

      test("should return \"Vikings have won the war of the century!\", if the Saxons array is empty", () => {
        war.vikingAttack();
        expect(war.showStatus()).toEqual("Vikings have won the war of the century!");
      });
    });
  });
});
