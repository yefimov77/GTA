import { makeAutoObservable } from "mobx";

class Cash {
  cash: number = 157585;

  constructor() {
    makeAutoObservable(this);
  }

  pay(price: number) {
    this.cash -= price;
  }
}

export const wallet = new Cash();