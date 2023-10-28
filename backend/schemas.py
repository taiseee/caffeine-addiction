from typing import List
from pydantic import BaseModel, Field

class UserData(BaseModel):
    id: int = Field(None, discription="ユーザーID")
    name: str = Field(None, discription="ユーザー名")
    sex: int = Field(None, discription="性別")
    personality: str = Field(None, discription="性格")
    hobby: str = Field(None, discription="趣味")
    line_url: str = Field(None, discription="LINEのURL")

class RegisterRequest(BaseModel):
    name: str = Field(None, discription="ユーザー名")
    passward: str = Field(None, discription="password")
    sex: int = Field(None, disctiption="性別")
    personality: str = Field(None, disctiption="性格")
    hobby: str = Field(None, discription="趣味")
    line_url: str = Field(None, discription="LINEのURL")

class RegisterResponse(BaseModel):
    id: int = Field(None, discription="ユーザーID")

class RecommendationRequest(BaseModel):
    id: int = Field(None, discription="ユーザーID")
