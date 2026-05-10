import java.util.ArrayList;
import java.util.List;

// =======================
// Singleton
// =======================
class NotificationManager {
    private static NotificationManager instance;

    private NotificationManager() {}

    public static NotificationManager getInstance() {
        if (instance == null) {
            instance = new NotificationManager();
        }
        return instance;
    }

    public void send(String message) {
        System.out.println("Notificación: " + message);
    }
}

// =======================
// Observer
// =======================
interface Observer {
    void update(String message);
}

class NotificationService {
    private List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (Observer o : observers) {
            o.update(message);
        }
    }
}

class User implements Observer {
    private String name;

    public User(String name) {
        this.name = name;
    }

    @Override
    public void update(String message) {
        System.out.println(name + " recibió: " + message);
    }
}

// =======================
// Decorator
// =======================
interface Notification {
    void send();
}

class BasicNotification implements Notification {
    private String message;

    public BasicNotification(String message) {
        this.message = message;
    }

    @Override
    public void send() {
        System.out.println(message);
    }
}

abstract class NotificationDecorator implements Notification {
    protected Notification notification;

    public NotificationDecorator(Notification notification) {
        this.notification = notification;
    }

    @Override
    public void send() {
        notification.send();
    }
}

class UrgentNotification extends NotificationDecorator {

    public UrgentNotification(Notification notification) {
        super(notification);
    }

    @Override
    public void send() {
        System.out.println("URGENTE");
        super.send();
    }
}

class ImportantNotification extends NotificationDecorator {

    public ImportantNotification(Notification notification) {
        super(notification);
    }

    @Override
    public void send() {
        System.out.println("IMPORTANTE");
        super.send();
    }
}

// =======================
// Factory
// =======================
class NotificationFactory {
    public static Notification create(String type, String message) {
        switch (type) {
            case "basic":
                return new BasicNotification(message);

            case "urgent":
                return new UrgentNotification(
                        new BasicNotification(message)
                );

            case "important":
                return new ImportantNotification(
                        new BasicNotification(message)
                );

            default:
                return new BasicNotification(message);
        }
    }
}

// =======================
// MAIN
// =======================
class Main {
    public static void main(String[] args) {

        NotificationManager m1 = NotificationManager.getInstance();
        NotificationManager m2 = NotificationManager.getInstance();

        m1.send("Sistema iniciado");
        System.out.println(m1 == m2);

        NotificationService service = new NotificationService();

        service.addObserver(new User("Nico"));
        service.addObserver(new User("Ana"));

        service.notifyObservers("Nueva actualización disponible");

        Notification notification = new BasicNotification("Servidor caído");
        notification = new UrgentNotification(notification);
        notification = new ImportantNotification(notification);

        notification.send();

        Notification notification2 =
                NotificationFactory.create("urgent", "Error crítico en el sistema");

        notification2.send();
    }
}