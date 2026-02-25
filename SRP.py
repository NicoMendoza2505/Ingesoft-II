# ==============================
#  VIOLA SRP
# ==============================

class Report:
    def __init__(self, data):
        self.data = data

    def calculate_total(self):
        return sum(self.data)

    def save_to_file(self, filename):
        # MAL: Esta clase no solo calcula datos,
        # también maneja persistencia.
        # Tiene más de una responsabilidad.
        with open(filename, "w") as f:
            f.write(str(self.data))

    def send_email(self, email):
        # MAL: También maneja envío de correos.
        # Si cambia la forma de enviar emails,
        # esta clase debe modificarse.
        print(f"Enviando reporte a {email}")


# ==============================
# CUMPLE SRP
# ==============================

class Report:
    def __init__(self, data):
        self.data = data

    def calculate_total(self):
        # BIEN: Solo se encarga del cálculo.
        return sum(self.data)


class FileSaver:
    def save(self, report, filename):
        # BIEN: La persistencia está separada.
        with open(filename, "w") as f:
            f.write(str(report.data))


class EmailSender:
    def send(self, report, email):
        # BIEN: El envío de correo está desacoplado.
        print(f"Enviando reporte a {email}")