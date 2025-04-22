# Guía Rápida para Parcial – Desarrollo Web

## 1. Conceptos Clave

- **Arquitectura Cliente-Servidor:** El cliente (navegador) envía peticiones al servidor, que procesa y responde con datos o vistas. Esta separación permite escalabilidad y mantenimiento más fácil.
  
- **REST API:** Estilo de arquitectura para servicios web. Usa métodos HTTP (`GET` para leer, `POST` para crear, `PUT` para actualizar, `DELETE` para eliminar). Es clave para que el frontend y el backend se comuniquen.

- **CRUD:** Operaciones básicas en cualquier app: Crear (POST), Leer (GET), Actualizar (PUT/PATCH) y Eliminar (DELETE) datos.

- **Componentización:** Consiste en dividir la interfaz en piezas pequeñas, independientes y reutilizables. Esto mejora la organización, mantenibilidad y escalabilidad del frontend.

- **MVC (Modelo-Vista-Controlador):** Patrón que organiza el código en 3 capas: modelo (datos), vista (interfaz) y controlador (conexión entre vista y lógica).

- **Ciclo de vida del componente:** Fases como inicialización, renderizado, actualización y destrucción. Importante para controlar cuándo ejecutar cierto código (como cargar datos o limpiar memoria).

- **Validaciones:** Verifican que los datos del usuario sean correctos antes de ser procesados. Pueden ser requeridas, formato específico (email, número), longitud mínima, etc.

- **Manejo de errores:** Detectar y mostrar errores al usuario (por ejemplo, "correo inválido" o "servidor no disponible") sin afectar la experiencia de uso.

- **Versionamiento (Git):** Permite llevar el control de los cambios en el proyecto. Facilita trabajar en equipo, hacer pruebas, revertir errores y mantener historial.

- **Testing:** Comprobar que el código hace lo que debe. Test unitarios prueban funciones individuales; los de integración prueban cómo interactúan varios módulos.

---

## 2.Backend Funcional

- **Lenguajes y Frameworks:** Spring Boot (Java), Express (Node.js), Django (Python) ayudan a crear servidores de forma estructurada y rápida.

- **Estructura común:**
  - **Modelo:** Representa entidades del sistema (usuarios, productos, etc.).
  - **Controlador:** Recibe peticiones del cliente y responde.
  - **Servicio:** Contiene la lógica del negocio.
  - **Repositorio/DAO:** Se conecta con la base de datos para guardar o leer datos.

- **Base de datos:** 
  - **SQL (relacionales):** PostgreSQL, MySQL, Oracle (estructuran datos en tablas).
  - **NoSQL:** MongoDB, Firebase (almacenan datos en documentos/colecciones).

- **Seguridad:** 
  - Autenticación (verifica quién eres) y autorización (verifica qué puedes hacer).
  - JWT se usa para enviar tokens en cada petición autenticada.

- **Middlewares:** Funciones intermedias que analizan la petición antes de pasarla al controlador. Por ejemplo, validación de tokens o logging.

- **Manejo de errores global:** Se centraliza la captura de errores para responder con mensajes claros al cliente.

- **Documentación de API:** Swagger genera una interfaz visual para probar los endpoints sin usar Postman.

- **Despliegue:** El backend puede subirse a servicios como Heroku, Render, AWS, etc. Puede ir en contenedores Docker para mayor portabilidad.

---

## 3.Componentes Funcionales (Frontend sin Backend)

- **Frameworks:** 
  - **Angular:** Usa TypeScript y estructura basada en componentes, módulos y servicios.
  - **React:** Usa JavaScript con hooks y JSX para construir interfaces.
  - **Vue:** Sintaxis simple, ideal para principiantes, pero muy poderoso.

- **Diseño de UI:**
  - Con CSS o frameworks como Tailwind, Bootstrap o Angular Material.
  - Responsive Design con Flexbox, Grid o media queries para adaptar a celulares y tablets.

- **Componentes:**
  - Angular: Se crean con `@Component`, se comunican con `@Input` y `@Output`.
  - React: Se construyen con funciones o clases, usan `props` para comunicación.

- **Formularios:**
  - Angular tiene formularios **template-driven** (más simples) o **reactive** (más controlados).
  - Validaciones como `required`, `minLength`, `pattern`, etc.

- **Datos mock (simulados):** 
  - Crear listas estáticas o servicios falsos para representar cómo se vería la app con datos reales.

- **Routing (Navegación):**
  - Angular Router o React Router permiten cambiar de página sin recargar toda la app.
  - Soporta rutas hijas, rutas con parámetros (`/user/:id`) y rutas protegidas.

- **Estado Local:**
  - Angular: `BehaviorSubject`, `signals`, `NgRx` para apps grandes.
  - React: `useState`, `useEffect`, `useContext` o Redux para control más global.

- **Eventos:** Captura de interacciones del usuario como clics, cambios de input, envíos de formularios.

- **Testing básico:** Comprobar que los componentes se renderizan y responden bien a eventos y cambios de estado.
