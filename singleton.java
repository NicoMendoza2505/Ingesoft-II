class AppConfig {

    private static AppConfig instance;

    private String language;
    private String theme;

    private AppConfig() {
        //digamos que esta monda son los valores por defecto
        this.language = "es";
        this.theme = "dark";
    }

    public static AppConfig getInstance() {
        if (instance == null) {
            instance = new AppConfig();
        }
        return instance;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public void showConfig() {
        System.out.println("Idioma: " + language);
        System.out.println("Tema: " + theme);
    }
}

class Main {
    public static void main(String[] args) {

        AppConfig config1 = AppConfig.getInstance();
        AppConfig config2 = AppConfig.getInstance();

        config1.setLanguage("en");
        config2.setTheme("light");

        config1.showConfig();

        System.out.println(config1 == config2);
    }
}