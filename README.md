# Análisis de API - Rick and Morty + Superhero + DummyJSON

## ¿Qué APIs elegí y por qué?

Elegí tres APIs:

- **Rick and Morty API** → porque es pública, fácil de usar y tiene datos interesantes (personajes, episodios, ubicaciones).
- **Superhero API** → porque requiere token y permite practicar autenticación en la URL.
- **DummyJSON API** → porque permite simular autenticación real con login, token JWT y refresh.

Estas APIs combinadas permiten practicar:
- Requests GET con y sin filtros
- Uso de tokens
- Autenticación JWT
- Manejo de errores

---

## ¿Qué datos devuelven?

### Rick and Morty API
- Personajes (nombre, especie, estado, etc.)
- Episodios (nombre, fecha de emisión)
- Ubicaciones (planetas, dimensiones)

### Superhero API
- Biografías de superhéroes
- Información como:
  - Nombre completo
  - Lugar de nacimiento
  - Editorial

### DummyJSON API
- Información de usuario autenticado
- Tokens JWT
- Refresh tokens

---

## ¿Usa token o no? ¿Qué tipo?

| API              | ¿Usa token? | Tipo de autenticación |
|------------------|------------|----------------------|
| Rick and Morty   | ❌ No      | Pública              |
| Superhero API    | ✅ Sí      | Token en la URL      |
| DummyJSON        | ✅ Sí      | Bearer Token (JWT)   |

---

## Requests realizados y su función

| Request                         | Código | ¿Qué hace? |
|---------------------------------|--------|-----------|
| GET All Characters              | 200    | Obtiene todos los personajes de la API |
| GET Character by ID             | 200    | Obtiene un personaje específico por su ID |
| GET con filtros                 | 200    | Filtra personajes (ej: vivos y humanos) |
| GET Episodes                    | 200    | Obtiene todos los episodios |
| GET Episode by ID               | 200    | Obtiene un episodio específico |
| GET Locations                   | 200    | Obtiene todas las ubicaciones |
| GET Superhero                   | 200    | Obtiene biografía de un superhéroe con token |
| POST Login                      | 200    | Envía credenciales y devuelve token JWT |
| GET Profile (con token)         | 200    | Obtiene perfil autenticado |
| GET Profile (sin token)         | 401    | Error por no enviar token |
| POST Refresh                    | 200    | Genera un nuevo token con refresh token |

---

## 📡 Códigos de estado HTTP

| Código | Nombre        | ¿Qué significa? |
|--------|--------------|-----------------|
| 200    | OK           | La solicitud fue exitosa |
| 401    | Unauthorized | No autorizado (falta token o es inválido) |
| 400    | Bad Request  | Error en la solicitud |
| 404    | Not Found    | Recurso no encontrado |
| 500    | Server Error | Error interno del servidor |

---

## ¿Qué aprendí diferente a JSONPlaceholder?

A diferencia de JSONPlaceholder:

- Aquí se usan **APIs reales con autenticación**
- Aprendí a manejar:
  - Tokens JWT
  - Refresh tokens
  - Variables en Postman (`{{token}}`)
- Se realizan pruebas más completas con `pm.test`
- Se validan respuestas dinámicas, no datos estáticos
- Se trabajan diferentes tipos de APIs (públicas y privadas)

---

## Herramientas usadas

- Postman
- APIs REST
- JSON
- Variables de entorno
- Scripts de test en JavaScript

---

## Evidencias

Se incluyen capturas de pantalla de:


---
