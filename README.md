# Sistema de Notificaciones - Patrones de Diseño

## Descripción
Este proyecto es una aplicación sencilla desarrollada en Java que simula un sistema de notificaciones.  
La idea principal de la app es permitir el envío de mensajes a diferentes usuarios y manejar distintos tipos de notificaciones dentro del sistema.

Además de enviar mensajes normales, la aplicación puede agregar prioridades como “URGENTE” o “IMPORTANTE”, y también permite que varios usuarios reciban automáticamente las actualizaciones enviadas por el sistema.

El propósito del proyecto es demostrar el uso de varios patrones de diseño trabajando juntos dentro de una misma aplicación para mejorar la organización del código y facilitar su mantenimiento.

---

# Patrones de Diseño Utilizados

## 1. Singleton
El patrón Singleton se implementa en la clase `NotificationManager`.

Este patrón se utiliza para garantizar que solo exista una única instancia del administrador de notificaciones durante toda la ejecución del programa.

### Uso
```java
NotificationManager m1 = NotificationManager.getInstance();
NotificationManager m2 = NotificationManager.getInstance();
```

En este caso, aunque se creen las variables `m1` y `m2`, ambas apuntan al mismo objeto.

---

## 2. Observer
El patrón Observer se utiliza para que varios usuarios reciban automáticamente las notificaciones enviadas por el sistema.

### Clases relacionadas
- `Observer`
- `NotificationService`
- `User`

### Uso
```java
service.addObserver(new User("Nico"));
service.addObserver(new User("Ana"));

service.notifyObservers("Nueva actualización disponible");
```

Cuando el sistema envía un mensaje, todos los usuarios registrados reciben la actualización automáticamente.

---

## 3. Decorator
El patrón Decorator permite agregar características adicionales a las notificaciones sin modificar la notificación original.

### Clases relacionadas
- `NotificationDecorator`
- `UrgentNotification`
- `ImportantNotification`

### Uso
```java
Notification notification = new BasicNotification("Servidor caído");

notification = new UrgentNotification(notification);
notification = new ImportantNotification(notification);
```

### Resultado
```text
IMPORTANTE
URGENTE
Servidor caído
```

En este caso, la notificación básica es decorada con distintos niveles de prioridad.

---

## 4. Factory
El patrón Factory se utiliza para crear distintos tipos de notificaciones dependiendo de lo que necesite el sistema.

### Clase relacionada
- `NotificationFactory`

### Uso
```java
Notification notification2 =
        NotificationFactory.create("urgent", "Error crítico");
```

La fábrica se encarga de decidir qué tipo de notificación crear automáticamente.

---

# Salida en Consola



```text
Notificación: Sistema iniciado
true
Nico recibió: Nueva actualización disponible
Ana recibió: Nueva actualización disponible
IMPORTANTE
URGENTE
Servidor caído


<img width="312" height="95" alt="singleton" src="https://github.com/user-attachments/assets/31f83140-1fe8-4925-8b3c-7144b92d8d3a" />

URGENTE
Error crítico en el sistema
```
