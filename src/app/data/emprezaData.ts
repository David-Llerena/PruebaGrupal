import { Inventory } from "../model/inventary";

export const inventoryData: Inventory = {
  id: "INV-001",
  company: {
    ruc: "1799999999001",
    name: "Fashion Trends",
    direccion: {
      city: "Quito",
      principalStreet: "Av. Naciones Unidas",
      secondaryStreet: "Av. Amazonas",
      code: "EC-QT-01"
    }
  },
  branches: [
    {
      id: "S001",
      name: "Sucursal Norte",
      city: "Quito",
      stock: [
        {
          product: {
            id: 1,
            name: "Blusa Casual",
            price: 15.50,
            descripcion: "Blusa de algodón",
            category: { id: 1, name: "Ropa" }
          },
          quantity: 120
        },
        {
          product: {
            id: 2,
            name: "Pantalón Jeans",
            price: 28.00,
            descripcion: "Jean azul clásico",
            category: { id: 1, name: "Ropa" }
          },
          quantity: 80
        }
      ]
    },
    {
      id: "S002",
      name: "Sucursal Sur",
      city: "Guayaquil",
      stock: [
        {
          product: {
            id: 3,
            name: "Vestido de Noche",
            price: 45.00,
            descripcion: "Vestido elegante",
            category: { id: 1, name: "Ropa" }
          },
          quantity: 40
        }
      ]
    },
    {
      id: "S006",
      name: "Sucursal Norte",
      city: "Cuenca",
      stock: [
        {
          product: {
            id: 1,
            name: "Blusa Casual",
            price: 15.50,
            descripcion: "Blusa de algodón",
            category: { id: 1, name: "Ropa" }
          },
          quantity: 50
        },
        {
          product: {
            id: 2,
            name: "Pantalón Jeans",
            price: 28.00,
            descripcion: "Jean azul clásico",
            category: { id: 1, name: "Ropa" }
          },
          quantity: 30
        }
      ]
    },
  ]
};