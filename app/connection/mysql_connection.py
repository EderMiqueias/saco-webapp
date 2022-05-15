import mysql.connector
import os

from dotenv import load_dotenv

load_dotenv()


MYSQL_CONNECTION = mysql.connector.connect(
  host=os.getenv('MYSQL_HOST'),
  user=os.getenv('MYSQL_USER'),
  password=os.getenv('MYSQL_PWD'),
  database='saco'
)
