## 🟩 Consigna 2: Replicar la API de Dragon Ball (Servidor HTTP básico con Express)

### 🔹 Objetivo:

Crear un servidor Express que replique la API de Dragon Ball para un conjunto de **10 personajes**.

---

### 🔹 Requisitos principales:

1️⃣ El servidor debe escuchar en el puerto `3000` (o el que prefieras).  
2️⃣ Debe tener un **array con 10 personajes de Dragon Ball**, copiados directamente de la API oficial:  
👉 [`https://dragonball-api.com/api/characters`](https://dragonball-api.com/api/characters).  
3️⃣ Los endpoints deben replicar la estructura exacta de la API de Dragon Ball:

---

### 🔹 Endpoints:

#### 🔸 GET `/api/characters`

✅ Devuelve un objeto JSON con esta estructura:

```json
{
  "items": [
    {
      "id": 1,
      "name": "Goku",
      "race": "Saiyan",
      "gender": "Male"
      // propiedades restantes del personaje
    },
    ...
  ]
}
```

✅ `"items"` debe contener los **10 personajes**.

---

#### 🔸 GET `/api/characters/:id`

✅ Devuelve el **personaje** cuyo `id` coincida con el parámetro recibido en la URL.  
✅ Si el **id no existe**, devuelve:

```json
{
  "message": "Character ID not found",
  "error": "Bad Request",
  "statusCode": 400
}
```

✅ Si el **parámetro `id` no es un número** (por ejemplo, una letra o palabra), devuelve:

```json
{
  "message": "Invalid parameter: ID must be a number",
  "error": "Bad Request",
  "statusCode": 400
}
```

✅ La respuesta debe tener el encabezado correcto:

```
Content-Type: application/json
```

---

### 🔹 Datos a usar:

- Los **10 personajes** deben copiarse directamente de la API real y guardarse en un array de objetos.
- Asegurarse de que el `id` de cada personaje sea **numérico**.

---

### ⚠ Importante:

❌ Si **la ruta no existe** en el servidor, devuelve:

```json
{
  "message": "No such file or directory'",
  "error": "Not Found",
  "statusCode": 404
}
```

---

### 🔹 Puntos clave de la consigna:

✅ Replicar la ruta base:

- `/api/characters` para el listado completo.
- `/api/characters/:id` para el detalle de un personaje.

✅ Validar que el parámetro `id` sea un número antes de buscar el personaje.  
✅ Manejar todos los casos de error (id inexistente o parámetro inválido).

---
