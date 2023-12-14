import { CoffeeMachine } from "./CoffeeMachine";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const machine = new CoffeeMachine();

rl.question("Insert coin (cts): ", (answer) => {
  const coin = parseInt(answer);
  let message: string;

  if (machine.canServe()) {
    message = machine.insertCoin(coin);
  } else {
    message = "Machine cannot serve now";
  }

  console.log(message);
  rl.close();
});
