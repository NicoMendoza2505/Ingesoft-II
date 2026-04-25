#  Análisis de API - Rick and Morty + Superhero + DummyJSON

##  ¿Qué APIs elegí y por qué?

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

##  ¿Qué datos devuelven?

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

##  ¿Usa token o no? ¿Qué tipo?

| API              | ¿Usa token? | Tipo de autenticación |
|------------------|------------|----------------------|
| Rick and Morty   |  No      | Pública              |
| Superhero API    |  Sí      | Token en la URL      |
| DummyJSON        |  Sí      | Bearer Token (JWT)   |

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

## Códigos de estado HTTP

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

## 📷 Evidencias

### 🔹 GET All Characters
![GET All Characters](https://github.com/user-attachments/assets/a10b9acf-5365-4d47-9bee-33a7cff89b61)

### 🔹 GET Character by ID (Rick Sanchez)
![GET Character by ID](https://github.com/user-attachments/assets/ba7bad44-7afd-4520-be1e-2d83e3272b5b)

### 🔹 GET Characters con filtros
![GET Characters Filter](https://github.com/user-attachments/assets/c579d0dc-2202-480b-8182-20673c4b8374)

### 🔹 GET All Episodes
![GET Episodes](https://github.com/user-attachments/assets/88600520-8325-4e37-a511-1f8237febacc)

### 🔹 GET Episode by ID
![GET Episode by ID](https://github.com/user-attachments/assets/4b34ed18-9375-4793-9d95-cfb4f5c47e5a)

### 🔹 GET All Locations
![GET Locations](https://github.com/user-attachments/assets/6510889c-902f-4b0d-9c30-2d1e5a7d16d3)

### 🔹 GET Superhero Biography
![GET Superhero](https://github.com/user-attachments/assets/aa32fa4b-9c97-4300-a358-3d854d1be11a)

### 🔹 POST Login
![POST Login](https://github.com/user-attachments/assets/c27f4e1c-a0d8-44d3-bc6d-143f79700bd2)

### 🔹 GET Profile (con token)
![GET Profile Token](https://github.com/user-attachments/assets/b9e322b3-c0c0-42e4-b1f7-13951f62010e)

### 🔹 GET Profile (sin token)
![GET Profile No Token](https://github.com/user-attachments/assets/409febaf-cae7-4295-9c90-ba1f65b5cbcc)

### 🔹 POST Refresh
![POST Refresh](https://github.com/user-attachments/assets/ded8dec6-ac74-44af-97be-0572fcf54521)

---

# Evidencias y Análisis - GraphQL

## Capturas de pantalla

### Query - All Countries
<img width="961" height="757" alt="image" src="https://github.com/user-attachments/assets/13f0247a-57c9-458d-baf4-547c0b5e2fd4" />

### Query - All Continents
<img width="961" height="757" alt="image" src="https://github.com/user-attachments/assets/b710bec6-7484-4e68-9a21-349997490a9f" />

### Query - Continent con países (Nested)
<img width="950" height="781" alt="image" src="https://github.com/user-attachments/assets/1b8fd3bf-4a23-47a1-84b2-b092fea3786f" />


### Query - Country by Code
<img width="980" height="749" alt="image" src="https://github.com/user-attachments/assets/a40886c7-a3fc-40d8-ac4a-a224ff68f670" />

### Query - Countries by Continent
<img width="968" height="663" alt="image" src="https://github.com/user-attachments/assets/77163993-d9de-4080-8833-d167032824c8" />


---

## ¿Qué hace cada Query?

- **Query - All Countries** → Obtiene todos los países con información básica (nombre, código, capital, moneda, teléfono).

- **Query - All Continents** → Obtiene todos los continentes con su código y nombre.

- **Query - Continent con países (Nested)** → Obtiene un continente específico junto con sus países y los idiomas de cada país.

- **Query - Country by Code** → Obtiene un país específico usando su código (en nuestro caso use CO = Colombia).

- **Query - Countries by Continent** → Filtra y obtiene países que pertenecen a un continente específico (en este ejemplo use a europa).

---

## Respuestas

### ¿Qué diferencia encontraste vs REST?

La principal diferencia es que en GraphQL existe un solo endpoint donde se pueden hacer consultas personalizadas, mientras que en REST hay múltiples endpoints.

En GraphQL el cliente decide qué datos quiere recibir, evitando traer información innecesaria. En cambio, en REST el servidor define la respuesta.

Además, GraphQL permite hacer consultas anidadas en una sola petición, mientras que en REST normalmente se requieren varias solicitudes para obtener datos relacionados.

---

### ¿Cuántos requests REST necesitarías para reemplazar tu query más compleja?

Para la query más compleja (continente con países e idiomas):

- En GraphQL: solo 1 request  
- En REST: aproximadamente entre 3 y 10 requests  

Esto se debe a que en REST habría que:
1. Obtener el continente  
2. Obtener sus países  
3. Obtener los idiomas de cada país  

---

### ¿En qué proyecto real usarías GraphQL?

Usaría GraphQL en cualquier sistema donde el frontend necesite obtener diferentes tipos de datos desde un mismo lugar, sin hacer múltiples requests.

Por ejemplo, en aplicaciones web o móviles donde se manejan muchos datos relacionados, GraphQL permite consultar solo la información necesaria en una sola petición, haciendo el sistema más eficiente y rápido.
