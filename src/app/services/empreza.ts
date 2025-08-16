import { Injectable } from "@angular/core";
import { inventoryData } from "../data/emprezaData";
import { Inventory } from "../model/inventary";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl='http://localhost:3000/api'
  private inventory: Inventory = inventoryData;

  constructor(private http: HttpClient){}

  getInventory():Observable<Inventory> {
    console.log("Invoice Services: solisitando datos del backend")
    return this.http.get<Inventory>(`${this.apiUrl}/invoice`);
  }
  
  checkBackendHealth():Observable<any>{
    console.log("Invoice Services: verificando salud")
    return this.http.get(`${this.apiUrl}/health`);
  }
}