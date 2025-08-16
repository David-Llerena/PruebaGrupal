export const dataSucursal = [
    {
        id: 1,
        producto: {
            id: 1,
            name: "Blusa Casual",
            price: 15.50,
            description: "Blusa de algodón",
            category: {
                id: 1,
                name: "Ropa",
            },
        },
        sucursal: {
            id: 1,
            name: "Sucursal Norte",
        },
        cantidad: 120,
    },
    {
        id: 2,
        producto: {
            id: 2,
            name: "Pantalón Jeans",
            price: 28.00,
            description: "Jean azul clásico",
            category: {
                id: 1,
                name: "Ropa",
            },
        },
        sucursal: {
            id: 1,
            name: "Sucursal Norte",
        },
        cantidad: 80,
    },
    {
        id: 3,
        producto: {
            id: 3,
            name: "Vestido de Noche",
            price: 45.00,
            description: "Vestido elegante",
            category: {
                id: 1,
                name: "Ropa",
            },
        },
        sucursal: {
            id: 2,
            name: "Sucursal Sur",
        },
        cantidad: 40,
    },
    {
        id: 4,
        producto: {
            id: 1,
            name: "Blusa Casual",
            price: 15.50,
            description: "Blusa de algodón",
            category: {
                id: 1,
                name: "Ropa",
            },
        },
        sucursal: {
            id: 6,
            name: "Sucursal Norte",
        },
        cantidad: 50,
    },
    {
        id: 5,
        producto: {
            id: 2,
            name: "Pantalón Jeans",
            price: 28.00,
            description: "Jean azul clásico",
            category: {
                id: 1,
                name: "Ropa",
            },
        },
        sucursal: {
            id: 6,
            name: "Sucursal Norte",
        },
        cantidad: 30,
    },
];

export const dataEmpresas = [
    {
        id: 1,
        nombre: "Fashion Trends",
        ruc: "1799999999001",
        direccion: {
            id: 1,
            ciudad: "Quito",
            callePrincipal: "Av. Naciones Unidas",
            calleSecundaria: "Av. Amazonas",
        },
    },
    {
        id: 2,
        nombre: "Tech Solutions",
        ruc: "23423423",
        direccion: {
            id: 2,
            ciudad: "Guayaquil",
            callePrincipal: "AV 9 de Octubre",
            calleSecundaria: "Malecón 2000",
        },
    },
    {
        id: 3,
        nombre: "Global Trading",
        ruc: "34534534",
        direccion: {
            id: 3,
            ciudad: "Cuenca",
            callePrincipal: "AV Gran Colombia",
            calleSecundaria: "Calle Larga",
        },
    }
];

export const dataEmpresaP = dataEmpresas[0]; // Mantener compatibilidad
