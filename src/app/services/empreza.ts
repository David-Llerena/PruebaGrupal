import { Injectable } from "@angular/core";

import { Inventory } from "../model/inventary";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient){}

  getInventory(): Observable<Inventory> {
    console.log("InventoryService: solicitando datos del backend");
    return this.http.get<Inventory>(`${this.apiUrl}/company`);
  }
  
  // Puedes agregar otros métodos para consumir más endpoints del backend aquí
}