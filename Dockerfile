# Stage 1: Build the React application
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine
# Copia los archivos construidos desde la etapa anterior
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Opcional: Copia una configuración personalizada de Nginx si la tienes
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
