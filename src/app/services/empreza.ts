import { Injectable } from "@angular/core";
import { inventoryData } from "../data/emprezaData";
import { Inventory } from "../model/inventary";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventory: Inventory = inventoryData;

  constructor(){}

  getInventory(): Inventory {
    return this.inventory;
  }
}