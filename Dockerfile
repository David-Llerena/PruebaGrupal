# Usa una imagen de Node.js oficial de Docker Hub compatible con Angular 20+
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Copia el código fuente
COPY . .

# Expone el puerto 4200 para la aplicación Angular
EXPOSE 4200

# Ejecuta la aplicación en modo desarrollo con configuración para Docker
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]