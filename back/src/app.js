import express, { json } from "express";
import cors from "cors";
import { dataEmpresaP, dataSucursal, dataEmpresas } from "./data.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/api/company", (req, res) => {
    try {
        console.log("Petición recibida: obtener compañia");
        // Adaptar la estructura a la que espera el frontend
        const branchesMap = {};
        dataSucursal.forEach(item => {
            const branchName = item.sucursal.name;
            const city = item.sucursal.name.includes('Norte') ? 'Quito' : 
                        item.sucursal.name.includes('Sur') ? 'Guayaquil' : 'Cuenca';
            
            if (!branchesMap[branchName]) {
                branchesMap[branchName] = {
                    id: `S00${item.sucursal.id}`,
                    name: branchName,
                    city: city,
                    stock: []
                };
            }
            branchesMap[branchName].stock.push({
                product: {
                    id: item.producto.id,
                    name: item.producto.name,
                    price: item.producto.price,
                    descripcion: item.producto.description,
                    category: item.producto.category
                },
                quantity: item.cantidad
            });
        });
        const branches = Object.values(branchesMap);
        const company = {
            ruc: dataEmpresaP.ruc,
            name: dataEmpresaP.nombre,
            direccion: {
                city: dataEmpresaP.direccion.ciudad,
                principalStreet: dataEmpresaP.direccion.callePrincipal,
                secondaryStreet: dataEmpresaP.direccion.calleSecundaria,
                code: dataEmpresaP.direccion.id ? `EC-${dataEmpresaP.direccion.ciudad.substring(0,2).toUpperCase()}-${String(dataEmpresaP.direccion.id).padStart(2,'0')}` : ''
            }
        };
        const response = {
            id: 'INV-001',
            company,
            branches
        };
        res.json(response);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "No se pudo obtener los datos de la compañia" });
    }
});

app.get("/api/companies", (req, res) => {
    try {
        console.log("Petición recibida: obtener todas las empresas");
        res.json(dataEmpresas);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "No se pudo obtener la lista de empresas" });
    }
});

app.get("/api/products", (req, res) => {
    try {
        console.log("Petición recibida: obtener productos");
        res.json(dataSucursal);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "No se pudo obtener el inventario" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
