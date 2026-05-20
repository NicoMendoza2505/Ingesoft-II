# Proyecto App Híbrida React + Capacitor + SQLite

Este proyecto es una aplicación híbrida construida con React + Vite, empaquetada con Capacitor para Android, que consume APIs externas y almacena datos localmente usando SQLite.

---

# ¿QUÉ HACE ESTE PROYECTO?

La app funciona como un sistema de sincronización de datos:

- Se autentica contra una API de seguridad
- Consume servicios externos (usuarios, localidades, tablas, versión)
- Transforma datos del backend para usarlos en frontend
- Guarda información en base de datos local SQLite
- Funciona en Web y Android (Capacitor)

---

# ARQUITECTURA

Frontend (React)
   ↓
Services (Axios - llamadas API)
   ↓
APIs externas
   ↓
Repository (SQLite local)
   ↓
Base de datos en el dispositivo

---

# API CLIENT (AXIOS)

Se usan dos instancias de Axios:

- apiController → datos generales del sistema
- apiLogin → autenticación de usuarios

---

# 🔐 LOGIN

El login se hace enviando:

- Usuario y password codificados
- Headers obligatorios del sistema

Retorna:
- Usuario
- Identificación
- Nombre

---

# SERVICES

- loginUsuario → autentica usuario
- obtenerLocalidades → obtiene localidades del backend
- obtenerTablas → obtiene esquema de tablas
- verificarVersion → valida versión de la app

---

# SINCRONIZACIÓN

- sincronizarUsuario → guarda usuario en SQLite
- sincronizarLocalidades → guarda localidades en SQLite
- run() → ejecuta todo automáticamente

---

# SQLITE (BASE DE DATOS LOCAL)

Se usa SQLite para guardar datos en el dispositivo:

- usuarios
- localidades

Funciones:
- guardarUsuario()
- guardarLocalidad()

---

# CAPACITOR

Convierte la app web en app Android usando WebView.

---

# FLUJO GENERAL

UI React
   ↓
Axios Services
   ↓
API externa
   ↓
Transformación de datos
   ↓
SQLite local

---

# COMANDOS DEL PROYECTO

## instalar dependencias
npm install

## instalar dependencias específicas
npm install axios sqlite3

## instalar capacitor
npm install @capacitor/core @capacitor/cli
npx cap init

## agregar android
npm install @capacitor/android
npx cap add android

## correr proyecto web
npm run dev

## build del proyecto
npm run build

## sincronizar con android
npx cap sync

## abrir android studio
npx cap open android

---

# FLUJO NORMAL DE USO

npm install
npm run dev
npm run build
npx cap sync
npx cap open android

---

# NOTAS IMPORTANTES

- Siempre ejecutar build antes de sync
- SQLite es local (no servidor)
- Capacitor necesita sync para reflejar cambios
- Android Studio abre el proyecto nativo generado

---

# PROBLEMA CON ESQUEMAS (API GET)

El endpoint:

/SincronizadorDatos/ObtenerEsquema/true

no funciona correctamente debido a un problema de autenticación.

## Causa del problema

- El endpoint requiere autenticación JWT
- El login del sistema NO retorna un JWT válido (viene null)
- Por lo tanto no se puede enviar token en las peticiones

## Resultado

- La API responde 401 Unauthorized
- No se pueden obtener los esquemas
- La funcionalidad queda bloqueada

## CONCLUSIÓN

El problema no es del frontend ni de Axios.

Es una limitación del backend:

- No se genera token JWT válido en login
- El endpoint de esquemas lo requiere obligatoriamente

---

# RESUMEN

✔ App híbrida React + Android  
✔ Consumo de APIs externas  
✔ Autenticación de usuario  
✔ Base de datos local SQLite  
✔ Sincronización automática de datos  
✔ Capacitor como puente móvil  
