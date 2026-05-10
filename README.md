# Sistema de Notificaciones - Patrones de Diseño (3patterns.java)

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
URGENTE
Error crítico en el sistema
```

## Captura

<img width="492" height="172" alt="3patts" src="https://github.com/user-attachments/assets/982bb503-6ce5-4c21-8bc5-c53274052d31" />


# Sistema de Pedidos de Pizzería - Patrones de Diseño (singandfact.java)

## Descripción
Este proyecto es una aplicación sencilla desarrollada en Java que simula un sistema de pedidos para una pizzería.  
La aplicación permite crear diferentes tipos de pizzas y registrar los pedidos realizados por los clientes.

El objetivo principal del proyecto es demostrar la implementación de patrones de diseño dentro de una aplicación simple, mejorando la organización y reutilización del código.

La app puede:
- Crear distintos tipos de pizzas.
- Registrar pedidos realizados.
- Llevar el conteo total de pedidos.
- Administrar todo desde una única instancia del sistema.

---

# Patrones de Diseño Utilizados

## 1. Singleton
El patrón Singleton se implementa en la clase `OrderSystem`.

Este patrón garantiza que solo exista una única instancia del sistema de pedidos durante toda la ejecución del programa.

### Uso
```java
OrderSystem system = OrderSystem.getInstance();
```

En este caso, todo el control de pedidos se realiza desde un único objeto compartido.

---

## 2. Factory
El patrón Factory se utiliza en la clase `PizzaFactory`.

Este patrón permite crear distintos tipos de pizzas sin necesidad de instanciar manualmente cada clase usando `new`.

### Clases relacionadas
- `Pizza`
- `Margherita`
- `Pepperoni`
- `Hawaiian`
- `PizzaFactory`

### Uso
```java
Pizza p1 = PizzaFactory.create("margherita");
Pizza p2 = PizzaFactory.create("pepperoni");
Pizza p3 = PizzaFactory.create("hawaiana");
```

La fábrica se encarga de decidir qué tipo de pizza crear dependiendo del parámetro recibido.

---

# Funcionamiento de la Aplicación

La aplicación crea distintos tipos de pizzas usando la fábrica y luego registra cada pedido en el sistema principal.

### Registro de pedidos
```java
system.registerOrder(p1);
system.registerOrder(p2);
system.registerOrder(p3);
```

Cada vez que se registra un pedido, el sistema aumenta automáticamente el contador total de órdenes.

---

# Salida en Consola

```text
Pedido #1: Margherita
Pedido #2: Pepperoni
Pedido #3: Hawaiana
Total de pedidos: 3
```
## Captura

<img width="627" height="172" alt="singandfact" src="https://github.com/user-attachments/assets/2d235df2-c91c-4ba3-bd2f-ae367c9eafca" />


# Configuración de Aplicación - Patrón Singleton (Singleton.java)

## Descripción
Este proyecto es una aplicación sencilla desarrollada en Java que simula un sistema de configuración para una aplicación.

La idea principal es manejar configuraciones globales como el idioma y el tema visual de la aplicación desde un único objeto compartido.

El objetivo del proyecto es demostrar el funcionamiento del patrón de diseño Singleton y cómo puede utilizarse para centralizar configuraciones dentro de un sistema.

La aplicación permite:
- Cambiar el idioma de la aplicación.
- Cambiar el tema visual.
- Compartir la misma configuración en todo el programa.
- Evitar crear múltiples instancias de configuración.

---

# Patrón de Diseño Utilizado

## Singleton
El patrón Singleton se implementa en la clase `AppConfig`.

Este patrón garantiza que solo exista una única instancia de configuración durante toda la ejecución del programa.

### Uso
```java
AppConfig config1 = AppConfig.getInstance();
AppConfig config2 = AppConfig.getInstance();
```

Aunque se creen las variables `config1` y `config2`, ambas hacen referencia al mismo objeto.

---

# Funcionamiento de la Aplicación

La aplicación inicia con valores por defecto:
- Idioma: `es`
- Tema: `dark`

Luego, desde diferentes variables, se modifican las configuraciones:

```java
config1.setLanguage("en");
config2.setTheme("light");
```

Como ambas variables apuntan al mismo objeto Singleton, los cambios realizados se reflejan en toda la aplicación.

---

# Salida en Consola

```text
Idioma: en
Tema: light
true
```

## Captura

<img width="312" height="95" alt="singleton" src="https://github.com/user-attachments/assets/e8513a56-3c0f-47d5-9ae8-441c6de554f8" />


El valor `true` confirma que `config1` y `config2` son exactamente la misma instancia.

