# Actividad: Refactorización y ampliación de Express.js + MySQL con Sequelize 🧑‍💻

### 🔧 Parte 1: Cambios de configuración

1. Cambia el puerto del servidor a `4000`.
2. Mueve la conexión a base de datos a un archivo `db.js` y llámala desde `app.js`.

### 👤 Parte 2: CRUD de Usuarios

6. Crea el modelo `User` con campos:

   - `name` (string, requerido)
   - `email` (string, requerido, único)
   - `password` (string, requerido)
   - `isActive` (bollean, requerido)

7. Crea los archivos:

   - `models/user.js`
   - `controllers/user.controller.js`
   - `routes/user.route.js`

8. Implementa el CRUD completo para usuarios:

   - `createUser`, `getAllUsers`, `getUserById`, `updateUser`, `deleteUser`

9. Monta las rutas de usuarios en `app.js` bajo `/users`.

---
