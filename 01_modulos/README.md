## 🟩 Consigna 1: Proyecto con módulos CommonJS y ESM (dos carpetas paralelas, 3 archivos cada una con extensión específica y 2 funciones por archivo)

### 🔹 Objetivo
En un mismo proyecto Node.js, demostrar el uso de **CommonJS** y **ESM** con tres archivos en cada carpeta (`cjs` y `mjs`), cada uno con la extensión correspondiente:  
- `.cjs` para CommonJS  
- `.mjs` para ESM

---

### 🔹 Descripción detallada

#### 🔸 📁 Carpeta `cjs/` (archivos `.cjs`)
✅ Los tres archivos tendrán la extensión `.cjs` y deben contener:  

- **`funcionesNombradas.cjs`**  
  Contendrá algunas de las **4 funciones básicas** de la calculadora:  
  👉 Exportalas como **exportaciones nombradas** usando `Common Js`.

- **`funcionesPorDefecto.cjs`**  
  Contendrá las otras funciones básicas restantes:  
  👉 Exportalas como **exportación por defecto** utilizando `Common Js`.

- **`app.cjs`**  
  👉 Usá `require` para importar las funciones nombradas y la exportación por defecto.  
  👉 Ejecutá cada función con números de prueba y mostrálos en consola.

---

#### 🔸 📁 Carpeta `mjs/` (archivos `.mjs`)
✅ Los tres archivos tendrán la extensión `.mjs` y deben contener:  

- **`funcionesNombradas.mjs`**  
  Contendrá algunas de las **4 funciones básicas** de la calculadora:  
  👉 Exportalas como **exportaciones nombradas** usando `ESM`.

- **`funcionesPorDefecto.mjs`**  
  Contendrá las otras funciones básicas restantes.  
  👉 Exportalas como **exportación por defecto** utilizando `ESM`.

- **`app.mjs`**  
  👉 Usá `import` para importar las funciones nombradas y la exportación por defecto.  
  👉 Ejecutá cada función con números de prueba y mostrálos en consola.

---

### 🔹 Requisitos finales
✅ Cada carpeta (`cjs` y `mjs`) debe tener 3 archivos con la extensión correcta.  
✅ Cada archivo de funciones (`funcionesNombradas` y `funcionesPorDefecto`) debe contener exactamente **las operaciones básicas diferentes**.  
✅ El archivo `app` de cada carpeta debe demostrar cómo se importan y usan tanto las **exportaciones nombradas** como la **exportación por defecto**.  
✅ El código debe ser modular, ordenado y claro.

---

### 🔹 Estructura final esperada
```
proyecto/
├── cjs/
│   ├── funcionesNombradas.cjs
│   ├── funcionesPorDefecto.cjs
│   └── app.cjs
├── mjs/
│   ├── funcionesNombradas.mjs
│   ├── funcionesPorDefecto.mjs
│   └── app.mjs
```

---
