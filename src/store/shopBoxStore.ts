import { makeAutoObservable, reaction } from "mobx";
import { ShopItem } from "../types/ShopItem";

class ShopBox {
  itemsInBox :ShopItem[]  = [];

  constructor() {
    makeAutoObservable(this);
    this.deleteAll = this.deleteAll.bind(this);

    reaction(
      () => this.itemsInBox.slice(), 
      () => {
        
        this.totalPrice;
      }
    );
  }

  addItem(item: ShopItem) {
    if (!this.itemsInBox.find(el => el.id === item.id)) {
      this.itemsInBox = [...this.itemsInBox, item];
    } 
  }

  deleteAll() {
    this.itemsInBox = [];
  }

  get totalPrice() {
    return this.itemsInBox.reduce((acc, item) => acc + item.price, 0);
  }
}

export const shop = new ShopBox();