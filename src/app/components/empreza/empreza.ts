import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../../services/empreza';
import { Inventory } from '../../model/inventary';

@Component({
  selector: 'app-empreza',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './empreza.html',
})
export class EmprezaComponent implements OnInit {
  inventory!: Inventory;
  totalStock: number = 0;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(
      (data: Inventory) => {
        this.inventory = data;   
        console.log("Datos recibidos:", this.inventory);

        this.calcularStockTotal(); 
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );
  }

  calcularStockTotal(): void {
    if (this.inventory?.branches) {
      this.totalStock = this.inventory.branches.reduce((acum, branch) => {
        const stockSucursal = branch.stock.reduce((suma, item) => suma + item.quantity, 0);
        return acum + stockSucursal;
      }, 0);
    }
  }
}
