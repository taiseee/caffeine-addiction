from typing import List
from pydantic import BaseModel, Field

class UserData(BaseModel):
    id: int = Field(None)
    name: str = Field(None)
    sex: int = Field(None)
    personality: str = Field(None)
    hobby: str = Field(None)
    self_introduction: str = Field(None)
    line_url: str = Field(None)
    image_url: str = Field(None)

class RegisterRequest(BaseModel):
    name: str = Field(..., discription="ユーザー名")
    password: str = Field(..., discription="password")
    sex: int = Field(..., disctiption="性別")
    personality: str = Field(..., disctiption="性格")
    hobby: str = Field(..., discription="趣味")
    self_introduction: str = Field(None, discription="自己紹介")
    line_url: str = Field(..., discription="LINEのURL")
    image_url: str = Field(None, discription="画像ファイル")