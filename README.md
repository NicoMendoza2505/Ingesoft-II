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

---

## Evidencias

Se incluyen capturas de pantalla de:

Get All characters

<img width="990" height="779" alt="image" src="https://github.com/user-attachments/assets/a10b9acf-5365-4d47-9bee-33a7cff89b61" />

Get Character By id (rick sanchez)

<img width="978" height="795" alt="image" src="https://github.com/user-attachments/assets/ba7bad44-7afd-4520-be1e-2d83e3272b5b" />

Get character with filters

<img width="985" height="770" alt="image" src="https://github.com/user-attachments/assets/c579d0dc-2202-480b-8182-20673c4b8374" />

Get all EPisodies

<img width="954" height="773" alt="image" src="https://github.com/user-attachments/assets/88600520-8325-4e37-a511-1f8237febacc" />

Get episode by id

<img width="963" height="762" alt="image" src="https://github.com/user-attachments/assets/4b34ed18-9375-4793-9d95-cfb4f5c47e5a" />

get all lcoation 

<img width="942" height="790" alt="image" src="https://github.com/user-attachments/assets/6510889c-902f-4b0d-9c30-2d1e5a7d16d3" />

get suoer hero biography

<img width="972" height="831" alt="image" src="https://github.com/user-attachments/assets/aa32fa4b-9c97-4300-a358-3d854d1be11a" />

post login

<img width="962" height="728" alt="image" src="https://github.com/user-attachments/assets/c27f4e1c-a0d8-44d3-bc6d-143f79700bd2" />

get profile with token

<img width="985" height="766" alt="image" src="https://github.com/user-attachments/assets/b9e322b3-c0c0-42e4-b1f7-13951f62010e" />

get profile without token

<img width="932" height="598" alt="image" src="https://github.com/user-attachments/assets/409febaf-cae7-4295-9c90-ba1f65b5cbcc" />

post refresh

<img width="969" height="809" alt="image" src="https://github.com/user-attachments/assets/ded8dec6-ac74-44af-97be-0572fcf54521" />

---
