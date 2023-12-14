export class CoffeeMachine {
  private readonly coffeePrice = 50;
  private canServeState: boolean = true;

  insertCoin(coin: number): string {
    if (!this.canServeState) {
      return "Money returned";
    }
    if (coin >= this.coffeePrice) {
      return "Coffee served";
    } else {
      return "Money returned";
    }
  }

  canServe(): boolean {
    return this.canServeState;
  }

  setCanServe(canServe: boolean): void {
    this.canServeState = canServe;
  }
}
