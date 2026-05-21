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

