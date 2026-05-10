// singleton pattern
class OrderSystem {

    private static OrderSystem instance;
    private int totalOrders = 0;

    private OrderSystem() {}

    public static OrderSystem getInstance() {
        if (instance == null) {
            instance = new OrderSystem();
        }
        return instance;
    }

    public void registerOrder(Pizza pizza) {
        totalOrders++;
        System.out.println("Pedido #" + totalOrders + ": " + pizza.getName());
    }

    public int getTotalOrders() {
        return totalOrders;
    }
}

// factory pattern
interface Pizza {
    String getName();
    int getPrice();
}

class Margherita implements Pizza {

    @Override
    public String getName() {
        return "Margherita";
    }

    @Override
    public int getPrice() {
        return 12000;
    }
}

class Pepperoni implements Pizza {

    @Override
    public String getName() {
        return "Pepperoni";
    }

    @Override
    public int getPrice() {
        return 15000;
    }
}

class Hawaiian implements Pizza {

    @Override
    public String getName() {
        return "Hawaiana";
    }

    @Override
    public int getPrice() {
        return 14000;
    }
}

class PizzaFactory {

    public static Pizza create(String type) {

        switch (type.toLowerCase()) {
            case "margherita":
                return new Margherita();

            case "pepperoni":
                return new Pepperoni();

            case "hawaiana":
                return new Hawaiian();

            default:
                throw new IllegalArgumentException("Pizza no válida");
        }
    }
}

class Main {
    public static void main(String[] args) {

        OrderSystem system = OrderSystem.getInstance();

        Pizza p1 = PizzaFactory.create("margherita");
        Pizza p2 = PizzaFactory.create("pepperoni");
        Pizza p3 = PizzaFactory.create("hawaiana");

        system.registerOrder(p1);
        system.registerOrder(p2);
        system.registerOrder(p3);

        System.out.println("Total de pedidos: " + system.getTotalOrders());
    }
}