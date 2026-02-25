# ==============================
# VIOLA LSP
# ==============================

from abc import ABC,abstractmethod


class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

    def set_width(self, width):
        # MAL: Cambia comportamiento esperado.
        # Un cuadrado altera ambas dimensiones.
        self.width = width
        self.height = width


# Un cuadrado no puede reemplazar a un rectángulo en código porque un rectángulo 
# permite cambiar ancho y alto por separado, pero un cuadrado obliga a que ambos 
# sean iguales, alterando el comportamiento esperado.#

# ==============================
# 🟢 CUMPLE LSP
# ==============================

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        # BIEN: Cumple el contrato sin alterar
        # el comportamiento de otra clase.
        return self.side * self.side