import { CoffeeMachine } from "./CoffeeMachine";

describe("Machine à café", () => {
  let machine: CoffeeMachine;

  beforeEach(() => {
    machine = new CoffeeMachine();
    machine.setCanServe(true); // Assurez-vous que la machine peut servir par défaut
  });

  describe("Lorsqu'on insère au moins le prix d'un café", () => {
    test("un café est servi et l'argent est encaissé avec 50 cts", () => {
      expect(machine.insertCoin(50)).toBe("Coffee served");
    });

    test("un café est servi et l'argent est encaissé avec 1€", () => {
      expect(machine.insertCoin(100)).toBe("Coffee served");
    });

    test("un café est servi et l'argent est encaissé avec 2€", () => {
      expect(machine.insertCoin(200)).toBe("Coffee served");
    });
  });

  describe("Lorsqu'on insère moins que le prix d'un café", () => {
    test("aucun café n'est servi et l'argent est rendu avec 1 ct", () => {
      expect(machine.insertCoin(1)).toBe("Money returned");
    });

    test("aucun café n'est servi et l'argent est rendu avec 2 cts", () => {
      expect(machine.insertCoin(2)).toBe("Money returned");
    });

    test("aucun café n'est servi et l'argent est rendu avec 5 cts", () => {
      expect(machine.insertCoin(5)).toBe("Money returned");
    });

    test("aucun café n'est servi et l'argent est rendu avec 10 cts", () => {
      expect(machine.insertCoin(10)).toBe("Money returned");
    });

    test("aucun café n'est servi et l'argent est rendu avec 20 cts", () => {
      expect(machine.insertCoin(20)).toBe("Money returned");
    });
  });

  describe("Lorsque la machine à café ne peut pas servir", () => {
    beforeEach(() => {
      machine.setCanServe(false); // La machine est configurée pour ne pas pouvoir servir
    });

    test("aucun café n'est servi et l'argent est rendu même si on insère au moins le prix d'un café", () => {
      expect(machine.insertCoin(50)).toBe("Money returned");
      expect(machine.insertCoin(100)).toBe("Money returned");
      expect(machine.insertCoin(200)).toBe("Money returned");
    });
  });
});
