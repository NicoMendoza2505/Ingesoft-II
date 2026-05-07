# Práctica de conexión SSH de Windows a Linux y pruebas de API REST

## Objetivo

El objetivo de esta práctica fue configurar una conexión SSH entre Windows y una máquina virtual Linux, ejecutar un servidor Node.js y realizar pruebas a una API REST utilizando PowerShell (por que con los comandos de linux es un puto asco).

---

# 1. Instalación y configuración de OpenSSH Server en Linux

Primero se instaló OpenSSH Server en la máquina virtual Linux con el siguiente comando:

```bash
sudo apt install openssh-server
```

Luego se verificó el estado del servicio SSH:

```bash
sudo service ssh status
```

Después se inició el servicio SSH:

```bash
sudo service ssh start
```

### Evidencia

<img width="1140" height="797" alt="Captura de pantalla 2026-05-06 220506" src="https://github.com/user-attachments/assets/e587f56f-74f1-4529-948c-8fded2c6acbf" />

---

# 2. Verificación de la dirección IP de Linux

Posteriormente se verificó la dirección IP asignada a la máquina virtual Linux utilizando el siguiente comando:

```bash
ip address
```

Esta dirección IP fue necesaria para realizar la conexión desde Windows mediante SSH.

### Evidencia

<img width="811" height="538" alt="2" src="https://github.com/user-attachments/assets/afe8a19a-08eb-4ecf-ab64-955605963315" />

---

# 3. Comprobación de conectividad desde Windows

Desde PowerShell en Windows se realizó una prueba de conectividad usando `ping` hacia la máquina Linux:

```powershell
ping IP_DE_LINUX
```

Con esta prueba se confirmó que ambas máquinas podían comunicarse correctamente dentro de la red virtual.

### Evidencia

<img width="1455" height="736" alt="3" src="https://github.com/user-attachments/assets/16ca45bb-ad2f-4d9a-820a-97a48c53aa33" />

---

# 4. Conexión SSH desde Windows a Linux

Después de comprobar la conectividad, se estableció la conexión SSH desde Windows usando el usuario y la dirección IP de Linux:

```powershell
ssh usuario@IP_DE_LINUX
```

La conexión permitió acceder de manera remota a la terminal de Linux desde PowerShell.

### Evidencia

<img width="1397" height="727" alt="4" src="https://github.com/user-attachments/assets/850b975e-ce30-4a60-949a-35478ed3e228" />

---

# 5. Uso de PowerShell en Linux

Una vez conectados a Linux mediante SSH, se utilizó PowerShell dentro de Linux para ejecutar las pruebas de la API.

El comando utilizado fue:

```bash
pwsh
```

Esto permitió trabajar con comandos de PowerShell directamente desde el entorno Linux.

### Evidencia

<img width="782" height="146" alt="pwsh" src="https://github.com/user-attachments/assets/eac46d1e-1be4-4b64-983f-9297d69126a7" />

<img width="1253" height="667" alt="6" src="https://github.com/user-attachments/assets/139252b9-642d-484c-bd85-9d2650f52c0c" />

---

# 6. Ejecución del servidor Node.js

Posteriormente se ejecutó el servidor desarrollado en Node.js mediante el siguiente comando:

```bash
node servidor.js
```

Con esto el servidor quedó activo y escuchando peticiones en el puerto configurado.

### Evidencia

<img width="788" height="255" alt="5" src="https://github.com/user-attachments/assets/7a60dc8a-25cf-4436-9191-113f76f9aff9" />

---

# 7. Pruebas de la API REST utilizando PowerShell

Una vez iniciado el servidor, se realizaron diferentes pruebas a la API REST para validar el funcionamiento de los endpoints de autenticación y gestión de tareas.

---

## 7.1 Registro de usuario

Se registró un nuevo usuario utilizando el endpoint `/auth/register`:

```powershell
Invoke-RestMethod -Method POST -Uri http://localhost:3000/auth/register -ContentType "application/json" -Body '{"username":"carlos","email":"carlos@test.com","password":"1234"}'
```

### Evidencia

<img width="1441" height="328" alt="7" src="https://github.com/user-attachments/assets/743b20d1-a326-4122-9e9a-9135c983e5f7" />

---

## 7.2 Inicio de sesión

Después del registro se realizó el login del usuario:

```powershell
$login = Invoke-RestMethod -Method POST -Uri http://localhost:3000/auth/login -ContentType "application/json" -Body '{"email":"carlos@test.com","password":"1234"}'
```

El servidor devolvió un token JWT que posteriormente fue utilizado para autenticar las peticiones protegidas.

### Evidencia

<img width="1467" height="256" alt="8" src="https://github.com/user-attachments/assets/5f578fe4-452e-446d-80ca-3cf8333d9ca6" />

---

## 7.3 Obtención del token

El token recibido en el login fue almacenado en una variable:

```powershell
$token = $login.token
```

### Evidencia

<img width="1467" height="256" alt="9" src="https://github.com/user-attachments/assets/b6a2b4d2-b8ba-430c-8e80-5025f24c4368" />

---

## 7.4 Creación de tarea

Se creó una nueva tarea usando el endpoint `/tasks` y enviando el token en los encabezados de autorización:

```powershell
$tarea = Invoke-RestMethod -Method POST -Uri http://localhost:3000/tasks -ContentType "application/json" -Headers @{Authorization="Bearer $token"} -Body '{"title":"Tarea de prueba","description":"Para probar PUT y DELETE"}'
```

### Evidencia

<img width="1088" height="180" alt="10" src="https://github.com/user-attachments/assets/49e6f882-4220-46de-b5f8-dbddb4a39057" />

<img width="1472" height="282" alt="12" src="https://github.com/user-attachments/assets/c4cb366f-9e6d-4289-8cb1-7521d7fcd69e" />

---

## 7.5 Actualización de tarea

Posteriormente se actualizó el estado de la tarea utilizando el método `PUT`:

```powershell
Invoke-RestMethod -Method PUT -Uri http://localhost:3000/tasks/$($tarea.id) -ContentType "application/json" -Headers @{Authorization="Bearer $token"} -Body '{"status":"completed"}'
```

### Evidencia

<img width="1120" height="403" alt="13" src="https://github.com/user-attachments/assets/243a7679-7397-47d4-8eca-9f2d51a9a0c5" />

---

## 7.6 Eliminación de tarea

Finalmente se eliminó la tarea creada mediante el método `DELETE`:

```powershell
Invoke-RestMethod -Method DELETE -Uri http://localhost:3000/tasks/$($tarea.id) -Headers @{Authorization="Bearer $token"}
```

### Evidencia

<img width="1002" height="388" alt="14" src="https://github.com/user-attachments/assets/2f516650-0abf-4d07-838d-6ad9766f1186" />

---

# Conclusión

Durante esta práctica se logró configurar correctamente el servicio SSH en Linux y establecer una conexión remota desde Windows utilizando PowerShell. Además, se ejecutó un servidor Node.js y se realizaron pruebas completas a una API REST, incluyendo operaciones de registro, autenticación, creación, actualización y eliminación de tareas.

La práctica permitió comprender el funcionamiento de SSH, la administración remota de servidores Linux y el consumo de APIs REST utilizando PowerShell en Sistemas Operativos como linux para facilitar un mejor manejo de comandos :))).
