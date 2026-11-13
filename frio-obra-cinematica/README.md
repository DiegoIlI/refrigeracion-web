# FRÍO & OBRA — sitio empresarial cinematográfico

Proyecto demostrativo en React + Vite + GSAP ScrollTrigger. Marca, fotografías y contenido comercial editables. El nombre **FRÍO & OBRA** es provisional.

## Ejecutar

1. Instala Node.js 20 o superior.
2. Abre la carpeta en terminal y ejecuta `npm install`.
3. Ejecuta `npm run dev` y abre la dirección indicada por Vite.
4. Para producción: `npm run build`. Los archivos quedan en `dist/`.

## Personalizar

- `src/config.js`: nombre de empresa, ciudad, número de WhatsApp, teléfono, correo y dirección.
- `src/main.jsx`: servicios, textos, estructura y fotografías (objeto `PHOTO`).
- `src/style.css`: colores, tipografía, composición y comportamiento responsive.
- Sustituye todas las fotografías ilustrativas de Unsplash por fotos auténticas y con los derechos necesarios antes de publicar. Las imágenes externas necesitan conexión a internet.
- La sección de proceso se etiqueta explícitamente como demostración conceptual, no como una obra ejecutada.
- Si no configuras `whatsapp`, los botones de cotización abrirán un correo de ejemplo, que **debe sustituirse antes de publicar**.

## Animaciones reales

- Revelado de texto de entrada con timeline GSAP.
- Zoom y movimiento de portada vinculados al scroll.
- Tarjetas de servicios que entran en secuencia.
- Transición inmersiva azul → naranja entre refrigeración y construcción con ScrollTrigger + `pin`, mezcla de fotografías, escala, texto y barra de avance.
- Fotografía de equipo con desplazamiento y acercamiento ligero.
- Etapas de construcción con entradas escalonadas.
- Menú adaptable, detalles hover y `prefers-reduced-motion`.

## Rendimiento / limitaciones

No se agregaron modelos 3D por ser un sitio comercial cuya velocidad y mantenimiento son prioridad y por no existir activos 3D auténticos. En móvil se reemplaza la transición fijada por una composición estática, sin obligar a realizar scroll largo. No se utiliza Lenis ni ScrollSmoother, evitando conflictos de desplazamiento. La compatibilidad precisa, FPS y Core Web Vitals deben evaluarse en un navegador real, red y dispositivo de destino; no se garantiza una puntuación específica.

## Antes de producción

- Confirmar datos reales y servicios prestados.
- Sustituir fotos de muestra y revisar derechos de uso.
- Configurar dominio, hosting, favicon real, privacidad y analítica si aplica.
- Probar formularios/contacto, responsive, accesibilidad con teclado y Lighthouse.
- Agregar testimonios o proyectos solamente si existe evidencia auténtica.

## Publicar desde teléfono con GitHub Pages

1. Crea un repositorio público en GitHub, con rama `main`.
2. Sube **el contenido de esta carpeta**, incluyendo `.github/workflows/deploy.yml`, `src/`, `index.html`, `package.json` y `vite.config.js`. No subas solo el ZIP.
3. En GitHub ve a **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.
4. Abre **Actions** para ver la compilación y publicación automática.
5. El enlace normalmente será `https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO/`.

En móvil GitHub puede requerir activar la vista «Sitio de escritorio» para ver todos los controles o usar una app que permita subir carpetas y archivos ocultos. Asegúrate de que el workflow esté en `.github/workflows/deploy.yml`.
