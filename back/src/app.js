import express, { json } from "express";
import cors from "cors";
import { dataEmpresaP, dataSucursal } from "./Data.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/api/company", (req, res) => {
    try {
        console.log("Petición recibida: obtener compañia");
        res.json(dataEmpresaP);
    } catch (error) {
        console.log("Error:", error);
        res
            .status(500)
            .json({ message: "No se pudo obtener los datos de la compañia" });
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
