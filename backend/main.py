from fastapi import FastAPI
from fastapi.responses import JSONResponse
from schemas import UserData, RegisterRequest
from vector_creator import vector_creator
from vector_db_manager import vector_db_manager
from recommender import recommender

app = FastAPI()

# デバッグ用
# WARNING: mysqlに保存する仕組みを作るまではuser_idをスクリプトで計算
user_id = 0

@app.get("/")
def main():
    return {"message": "Hello World"}

@app.post("/api/register")
def register(data: RegisterRequest):

    # デバッグ用
    # WARNING: mysqlに保存する仕組みを作るまではuser_idをスクリプトで計算
    global user_id

    user = UserData(
        id = user_id,
        name = data.name,
        sex = data.sex,
        # デバッグ用
        # WARNING: keyerrorが起こる可能性あり。TODO:エラーハンドリング
        keywords = [data.personality, data.hobby],
        line_url = data.line_url
    )

    # ユーザーの特徴ベクトルを生成
    feature_vector = vector_creator.create_feature_vector(user.keywords)

    # 特徴ベクトルとユーザー情報を保存
    vector_db_manager.upsert(feature_vector, user)

    # デバッグ用
    # WARNING: 本来、推薦されるユーザーは/api/recommendationで取得すべきだが、
    # mysqlに保存する仕組みを作るまではここで取得する
    recommended_users = recommender.recommend(user_id, feature_vector)
    user_id += 1

    return JSONResponse(content={"data": recommended_users})
    
