# Apolo CRUD - Prueba Técnica
Descripción

Este proyecto fue desarrollado como solución para la prueba técnica solicitada, la cual consiste en:

* Consumir las APIs de https://spaces.nexudus.com/api.
* Obtener usuarios del sistema.
* Obtener usuarios con licencias/coworkers.
* Relacionar la información entre ambos endpoints.
* Persistir la información en una base de datos MySQL.
* Crear una aplicación web CRUD para administrar usuarios.
* Mostrar usuarios licenciados mediante el campo CoworkerContractIds.

# APIs Consumidas
## API Usuarios
Obtiene los usuarios creados en el sistema.
```bash
GET https://spaces.nexudus.com/api/sys/users
```

## API Coworkers
Obtiene los usuarios que poseen licencias/membresías.
```bash
GET https://spaces.nexudus.com/api/spaces/coworkers
```

# Relación entre APIs

Las APIs no comparten el mismo identificador (Id), por lo tanto la relación se realizó mediante el campo:

Email

# Lógica aplicada:

Todos los usuarios provienen de /sys/users. 

Los usuarios con licencias provienen de /spaces/coworkers. 

Si un usuario existe en coworkers y posee CoworkerContractIds, entonces se considera un usuario licenciado.

# Tecnologías Utilizadas
* Backend
    * Node.js
    * Express.js
    * Sequelize ORM
    * MySQL
    * Axios
    * dotenv
    * cors
* Frontend
    * Vue.js 3
    * Axios
    * Bootstrap 5

# Funcionalidades Implementadas
* Backend
    * Consumo de APIs Nexudus
    * Autenticación Basic Auth
    * Sincronización de usuarios
    * Persistencia en MySQL
    * CRUD completo
    * Relación Users/Coworkers
    * Endpoint usuarios licenciados

* Frontend
    * Listado de usuarios
    * Crear usuarios
    * Editar usuarios
    * Eliminar usuarios
    * Sincronizar información desde Nexudus
    * Listado usuarios con licencia
    * Edición de estado activo
    * Edición de licencias
    * Interfaz responsive

# Endpoints Locales
## Sincronizar Usuarios
```bash
GET /api/users/sync
```

## Obtener Usuarios
```bash
GET /api/users
```

## Obtener Usuarios Licenciados
```bash
GET /api/users/licensed
```

## Crear Usuario
```bash
POST /api/users
```

## Actualizar Usuario
```bash
PUT /api/users/:id
```

## Eliminar Usuario
```bash
DELETE /api/users/:id
```

# Configuración del Proyecto
## Backend
### Instalar dependencias
```bash
npm install
```

### Configurar variables de entorno

Crear archivo .env con la siguiente estructura

```bash
PORT=3000
DB_HOST=HOST_DB
DB_PORT=PORT_DB
DB_NAME=NAME_DB
DB_USER=USER_DB
DB_PASSWORD=PASS_DB
NEXUDUS_USER=USER_NEXUDUS
NEXUDUS_PASSWORD=PASS_NEXUDUS
```

### Ejecutar backend
```bash
npm run dev
```

## Frontend
### Instalar dependencias
```bash
npm install
```

### Ejecutar frontend
```bash
npm run dev
```

# Consideraciones Técnicas
* No todos los usuarios del endpoint /sys/users existen en /spaces/coworkers
* La relación fue realizada mediante Email
* Los usuarios sin coworker son considerados usuarios sin licencia

# Mejoras Futuras
* JWT Authentication
* Swagger/OpenAPI
* Docker
* Paginación
* Filtros/Búsquedas
* Toast notifications
* Manejo centralizado de errores
* Deploy en nube

# Autor
Denis Francisco Vásquez Flores