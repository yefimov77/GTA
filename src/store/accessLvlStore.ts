import { makeAutoObservable } from "mobx";

class AcessLvl {
  lvl: number = 5;

  constructor() {
  
    makeAutoObservable(this);
    this.lvlUp.bind(this);
    this.lvlDown = this.lvlDown.bind(this);
  }

  lvlUp() {
    this.lvl += 1;
  }

  lvlDown() {
    this.lvl -=1;
  }
}

export const appLvl = new AcessLvl();