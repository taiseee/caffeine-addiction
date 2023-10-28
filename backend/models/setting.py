from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column
from sqlalchemy.sql.functions import current_timestamp
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.dialects.mysql import TIMESTAMP
import os

path = f'{os.environ.get("MYSQL_DB_CONNECTION")}://{os.environ.get("MYSQL_DB_USER")}:{os.environ.get("MYSQL_DB_USER_PASSWORD")}@{os.environ.get("MYSQL_DB_HOST")}/{os.environ.get("MYSQL_DB_DATABASE")}'

Engine = create_engine(
    path,
    echo=True
)

session = scoped_session(
# ORM実行時の設定。自動コミットするか、自動反映するなど。
    sessionmaker(
        autocommit = False,
        autoflush  = False,
        bind       = Engine
    )
)
Base = declarative_base()
Base.query = session.query_property()

class BaseModel:
    def __repr__(self):
        attributes = ', '.join(['{}={}'.format(key, getattr(self, key)) for key in self.__dict__ if not key.startswith('_')])
        return "<{}({})>".format(self.__class__.__name__, attributes)

class TimeStampMixin(object):
    @declared_attr
    def created_at(cls):
        return Column(TIMESTAMP, nullable=False, server_default=current_timestamp())

    @declared_attr
    def updated_at(cls):
        return Column(TIMESTAMP, nullable=False, server_default=current_timestamp(), onupdate=current_timestamp())