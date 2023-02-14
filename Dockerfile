FROM node:16

# Crear directorio
WORKDIR /usr/src/app/

# Instalar dependencias
RUN npm install

# Copiar archivos de mi carpeta local a docker
COPY . .

# Puerto expuesto
EXPOSE 5070

# Ejecutar comando de inicio de aplicación
CMD ["npm", "run", "dev"]
