# ==============================
#  VIOLA DIP
# ==============================

from abc import ABC, abstractmethod


class MySQLDatabase:
    def save(self, data):
        print("Guardando en MySQL")


class ReportService:
    def __init__(self):
        # MAL: Dependencia directa de implementación concreta.
        self.database = MySQLDatabase()

    def save_report(self, data):
        self.database.save(data)


# ==============================
# CUMPLE DIP
# ==============================

class Database(ABC):
    @abstractmethod
    def save(self, data):
        pass


class MySQLDatabase(Database):
    def save(self, data):
        print("Guardando en MySQL")


class PostgreSQLDatabase(Database):
    def save(self, data):
        print("Guardando en PostgreSQL")


class ReportService:
    def __init__(self, database: Database):
        # BIEN: Depende de abstracción, no de implementación.
        self.database = database

    def save_report(self, data):
        self.database.save(data)