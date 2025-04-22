# parcial

## sobre que vimos:
### el parcial se baso en 2 partes una virtual y la otra presencial:  
## parcial presencial:   

## Historia de Usuario: Registro de Computadores

## Descripción
Como usuario administrador de la aplicación móvil, deseo registrar, visualizar, filtrar, modificar y gestionar el estado de los computadores dentro del inventario, con el objetivo de garantizar un control eficiente de los computadores disponibles y su fabricante asociado.

## Criterios de Aceptación
1. El sistema deberá permitir la creación de un nuevo computador con los siguientes campos obligatorios:
   - **Código**: Identificador único del computador.
   - **Serial**: Número de serie del computador.
   - **Línea de Producción**: Submarca correspondiente al fabricante.
   - **Descripción**: Detalles específicos sobre el computador.
   - **Estado**: Definición del estado del computador (Activo/Inactivo).
   - **Fabricante**: Asociación del computador con un fabricante registrado en la base de datos.
2. El sistema deberá permitir filtrar los computadores según su código, estado o fabricante.
3. El usuario podrá editar los datos de un computador previamente registrado.
4. Se deberá mostrar un listado de computadores con información básica en la vista principal.
5. Cada funcionalidad del CRUD (Crear, Leer, Actualizar) deberá contar con pantallas independientes.

## Escenarios y Layouts Necesarios

### 1. Pantalla de Listado de Computadores
Presenta la lista de computadores registrados con la siguiente información visible:
- Código del computador.
- Estado (Activo/Inactivo).
- Número de serie.
- Fabricante.

**Contiene:**
- Botón **"Agregar Computador"** para registrar un nuevo computador.
- Campo de búsqueda y filtros para localizar computadores por código, estado o fabricante.
- Opción de edición de computadores existentes.

### 2. Pantalla de Registro de Computador
**Contiene los siguientes campos de entrada:**
- **Código** (Texto obligatorio)
- **Serial** (Texto obligatorio)
- **Línea de Producción** (Texto obligatorio)
- **Descripción** (Texto largo)
- **Estado** (Selector Activo/Inactivo)
- **Fabricante** (Lista desplegable con opciones existentes en el sistema)

**Validaciones implementadas:**
- **Código**: Campo obligatorio.
- **Serial**: Campo obligatorio.
- **Fabricante**: Debe seleccionarse de la lista de opciones.

Incluye un botón **"Guardar"** para registrar el computador en la base de datos.

### 3. Pantalla de Edición de Computador
- Muestra los datos precargados del computador seleccionado.
- Permite la modificación de cualquier campo editable.
- Incluye un botón **"Guardar Cambios"** para actualizar la información del computador.

### 4. Pantalla de Filtros
Permite realizar búsquedas avanzadas utilizando los siguientes filtros:
- **Código** (Campo de texto para búsqueda por coincidencia).
- **Estado** (Selector desplegable Activo/Inactivo).
- **Fabricante** (Lista desplegable con opciones predefinidas).

Contiene un botón **"Aplicar Filtros"** para refinar los resultados mostrados.

## Esquemas de Colores para la Evaluación
Cada estudiante deberá aplicar un esquema de colores específico durante la evaluación. El esquema será asignado de manera aleatoria:

1. **Esquema 1**: Azul - Blanco - Gris.
2. **Esquema 2**: Verde - Negro - Blanco.
3. **Esquema 3**: Rojo - Gris - Azul.
4. **Esquema 4**: Morado - Negro - Amarillo.

## Indicaciones para la Entrega
- **Tiempo de Desarrollo**: 8:20 PM - 9:20 PM.

### **Estructura del Repositorio**
1. **Rama de desarrollo**:
   - Se deberá crear la rama `feature/exam` a partir de la ya existente `feature/exam-c1`.

2. **Estructura de directorios**:
   - Dentro de `feature/exam`:
     - Crear la carpeta `C1-A1: Alistamiento del Proyecto Móvil`.
     - Incluir dentro de esta carpeta el taller `C1-A1: Alistamiento del Proyecto Móvil`, dentro de `test-1`.
     - Crear una nueva carpeta `exam-c1`, donde se publicará el desarrollo de este parcial.

### **Entrega Final en Moodle**
Cada estudiante deberá subir los siguientes elementos:
1. Enlace del repositorio Git, apuntando a la rama `feature/exam`.
2. Enlace al prototipo en Figma, con los diseños de las pantallas.
3. Un documento Word con capturas de pantalla de todas las vistas desarrolladas, evidenciando la implementación de los layouts descritos.

## **Distribución de Esquemas de Colores**
| **Esquema 1 (Azul - Blanco - Gris)** | **Esquema 2 (Verde - Negro - Blanco)** | **Esquema 3 (Rojo - Gris - Azul)** | **Esquema 4 (Morado - Negro - Amarillo)** |
|--------------------------------------|--------------------------------------|------------------------------------|--------------------------------------|
| OLIVEROS DURAN JUAN ESTEBAN         | SIERRA LOZANO OSCAR GUILLERMO       | PEREZ LOZADA DANIEL               | CAVIEDES GUEVARA JHON SEBASTIAN     |
| MOLINA FIERRO JHON SEBASTIAN        | CAICEDO ARIAS KAREN JOHANA          | VERA GARZON JOSE MIGUEL           | ZAMBRANO CHALA XIMENA DEL PILAR     |
| MORA ALVARADO JUAN DIEGO            | ROBAYO LAGUNA MARIA FERNANDA        | ORTIZ VARGAS ALEJANDRO            | LEAL MEDINA CARLOS MAURICIO        |
| CONTRERAS ROJAS ELKIN STIVEN        | MURCIA VARGAS JUAN SEBASTIAN        | ALJURE HERRERA MARIA SOFIA        | PASCUAS HERRERA HERMES              |
| DUSSAN OSPINA MARIA CELESTE         | HOYOS LEDESMA MARCOANTONIO          | CANGREJO PERAFAN LAURA SOFIA      | BEDOYA MONTEALEGRE BRAYAN SMITH     |
| BONILLA DELGADO LUIS IGNACIO        | OBREGON ROJAS NICOLAS               | AREIZA PARAMO OSCAR MAURICIO      | QUINTERO RAMIREZ CESAR DAVID        |
|                                      | TAFUR JOJOA ALEJANDRO               | POVEDA CANTE DANIEL STIVEN        | FERRO BONILLA MARIA JULIANA        |
|                                      | PENAGOS MOLINA JUAN CAMILO          | CARDONA ROJAS JOSE ANDRES         | MENESES HERNANDEZ LUIS ALEJANDRO    |
|                                      |                                      | SERRUDO ARIZA EDWAR ALEXIS        | HEREDIA PERDOMO YEFERSON ESMI       |
|                                      |                                      | TRUJILLO MURCIA CARLOS ANDRES     |                                      |

--------------------------------------------------------
## parcial virtual
-fueron preguntas acerca de lo visto anteriormente temas que incluian:

- funciones del docker.  
- figma.  
- aspectos de android y ios.  
- conocimiento de significados.
## entre otros.    

