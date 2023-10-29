from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .setting import Base, BaseModel, TimeStampMixin

class User(Base, BaseModel, TimeStampMixin):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    password = Column(String(255, collation="utf8mb4_bin"))
    name = Column(String(255, collation="utf8mb4_bin"))
    sex = Column(Integer)
    personality = Column(String(255, collation="utf8mb4_bin"))
    hobby = Column(String(255, collation="utf8mb4_bin"))
    self_introduction = Column(String(255, collation="utf8mb4_bin"))
    image_url = Column(String(255, collation="utf8mb4_bin"))
    line_url = Column(String(255, collation="utf8mb4_bin"))

class Sex(Base, BaseModel, TimeStampMixin):
    __tablename__ = 'sexes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255, collation="utf8mb4_bin"))

class Like(Base, BaseModel, TimeStampMixin):
    __tablename__ = "likes"

    id = Column(Integer, primary_key=True, autoincrement=True)
    send_user_id = Column(Integer, ForeignKey('users.id'))
    receive_user_id = Column(Integer, ForeignKey('users.id'))

    # User モデルとの関連を設定
    send_user = relationship('User', foreign_keys=[send_user_id])
    receive_user = relationship('User', foreign_keys=[receive_user_id])
