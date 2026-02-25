# ==============================
# VIOLA OCP
# ==============================

class AreaCalculator:
    def calculate(self, shape):
        # MAL: Cada nuevo tipo obliga a modificar esta clase.
        if shape["type"] == "circle":
            return 3.14 * shape["radius"] ** 2
        elif shape["type"] == "rectangle":
            return shape["width"] * shape["height"]


# ==============================
# CUMPLE OCP
# ==============================

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        # BIEN: Nueva forma sin modificar AreaCalculator
        return 3.14 * self.radius ** 2


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


class AreaCalculator:
    def calculate(self, shape: Shape):
        # BIEN: No necesita cambiar si agregamos nuevas figuras
        return shape.area()