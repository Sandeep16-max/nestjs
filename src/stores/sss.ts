import { Injectable } from "@nestjs/common";

let instanceCount = 1;

@Injectable()
export class Store {
  private instanceN: number;

  constructor() {
    this.instanceN = instanceCount++;
    console.log("hello broo");
  }

  getStore() {
    return `I am UsersStore ${this.instanceN}`;
  }
}