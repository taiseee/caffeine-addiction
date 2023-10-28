from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from schemas import UserData, RegisterRequest
from vector_creator import vector_creator
from vector_db_manager import vector_db_manager
from recommender import recommender
from japanese_analyzer import JapaneseAnalyzer
from models.setting import session
from models import User
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# デバッグ用
# WARNING: mysqlに保存する仕組みを作るまではuser_idをスクリプトで計算
user_id = 0

@app.get("/")
def main():
    return {"message": "Hello World"}

@app.post("/api/register")
def register(data: RegisterRequest):
    user = User(
        name = data.name,
        password = data.password,
        sex = data.sex,
        # WARNING: keyerrorが起こる可能性あり。TODO:エラーハンドリング
        personality = data.personality,
        hobby = data.hobby,
        self_introduction = data.self_introduction,
        line_url = data.line_url,
        image_url = data.image_url
    )

    session.add(user)
    session.commit()

    # # 性格と趣味から名刺・形容詞を抽出
    # personalities = JapaneseAnalyzer.extract_nouns_and_adjectives(data.personality)
    # hobbies = JapaneseAnalyzer.extract_nouns_and_adjectives(data.hobby)

    # # ユーザーの特徴ベクトルを生成
    # feature_vector = vector_creator.create_feature_vector(personalities + hobbies)

    # # 特徴ベクトルとユーザー情報を保存
    # vector_db_manager.upsert(feature_vector, user)

    # # デバッグ用
    # # WARNING: 本来、推薦されるユーザーは/api/recommendationで取得すべきだが、
    # # mysqlに保存する仕組みを作るまではここで取得する
    # recommended_users = recommender.recommend(user_id, feature_vector)
    # user_id += 1

    # return JSONResponse(content={"data": recommended_users})
    return JSONResponse(content={"data": user.id})

@app.get("/api/recommendation/{user_id}")
def recommendation(user_id: int):
    return JSONResponse(content={"data": user_id})
    
    # user_data = UserData(
    #     id = user.id,
    #     name = data.name,
    #     sex = data.sex,
    #     # デバッグ用
    #     # WARNING: keyerrorが起こる可能性あり。TODO:エラーハンドリング
    #     personality = data.personality,
    #     hobby = data.hobby,
    #     line_url = data.line_url
    # )

    # # 性格と趣味から名刺・形容詞を抽出
    # personalities = JapaneseAnalyzer.extract_nouns_and_adjectives(data.personality)
    # hobbies = JapaneseAnalyzer.extract_nouns_and_adjectives(data.hobby)

    # # ユーザーの特徴ベクトルを生成
    # feature_vector = vector_creator.create_feature_vector(personalities + hobbies)

    # # 特徴ベクトルとユーザー情報を保存
    # vector_db_manager.upsert(feature_vector, user)

    # # デバッグ用
    # # WARNING: 本来、推薦されるユーザーは/api/recommendationで取得すべきだが、
    # # mysqlに保存する仕組みを作るまではここで取得する
    # recommended_users = recommender.recommend(user.id, feature_vector)

    # return JSONResponse(content={"data": recommended_users})
    # return JSONResponse(content={"data": user.id})

