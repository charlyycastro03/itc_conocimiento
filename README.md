# Catálogo Visual Interactivo: ITC

Bienvenido al **Catálogo Visual Interactivo** de la carrera de Ingeniería en Tecnologías Computacionales (ITC).
Este proyecto está diseñado para que cualquier persona (con o sin conocimientos técnicos) pueda entender de qué trata la carrera.

## Los 3 Pilares

El catálogo divide el conocimiento de la carrera en 3 pilares fundamentales:
1. **Infraestructura y Redes**
2. **Servidores y Virtualización**
3. **Programación (Front / Back / Base de datos)**

El contenido se alimenta desde `content/content.json` para facilitar futuras actualizaciones sin modificar el código.

## Stack Tecnológico
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- Diseño interactivo "Pixel Art" retro.

## Cómo desplegar en Vercel
1. Ve a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Crea un nuevo proyecto (`Add New... > Project`).
3. Importa este repositorio (`charlyycastro03/itc_conocimiento`).
4. **IMPORTANTE:** En la configuración de *Root Directory*, haz clic en "Edit" y selecciona la carpeta `itc-catalogo`.
5. Deja las configuraciones de Build y Output por defecto (`npm run build`).
6. Haz clic en **Deploy**.

Cualquier cambio futuro a este repositorio desplegará automáticamente la nueva versión.
