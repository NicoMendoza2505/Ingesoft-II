# ==============================
# VIOLA ISP
# ==============================

class Machine:
    def print(self): pass
    def scan(self): pass
    def fax(self): pass


class SimplePrinter(Machine):
    def print(self):
        print("Imprimiendo")

    def scan(self):
        #  MAL: Está obligado a implementar
        # métodos que no necesita.
        raise NotImplementedError

    def fax(self):
        raise NotImplementedError


# ==============================
# CUMPLE ISP
# ==============================

class Printer:
    def print(self): pass


class Scanner:
    def scan(self): pass


class SimplePrinter(Printer):
    def print(self):
        # BIEN: Solo implementa lo que realmente usa.
        print("Imprimiendo")