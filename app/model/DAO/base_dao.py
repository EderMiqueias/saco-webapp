from app.connection.mysql_connection import MYSQL_CONNECTION


class BaseDAO:
    def __init__(self):
        self.cursor = MYSQL_CONNECTION.cursor()
        self.conn = MYSQL_CONNECTION
