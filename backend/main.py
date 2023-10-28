from fastapi import FastAPI
from fastapi.responses import JSONResponse
from schemas import UserData, RegisterRequest
from vector_creator import vector_creator
from vector_db_manager import vector_db_manager
from recommender import recommender
from japanese_analyzer import JapaneseAnalyzer

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

    # リクエストからユーザー情報を生成
    user = UserData(
        id = user_id,
        name = data.name,
        sex = data.sex,
        # デバッグ用
        # WARNING: keyerrorが起こる可能性あり。TODO:エラーハンドリング
        personality = data.personality,
        hobby = data.hobby,
        line_url = data.line_url
    )

    # 性格と趣味から名刺・形容詞を抽出
    personalities = JapaneseAnalyzer.extract_nouns_and_adjectives(data.personality)
    hobbies = JapaneseAnalyzer.extract_nouns_and_adjectives(data.hobby)

    # ユーザーの特徴ベクトルを生成
    feature_vector = vector_creator.create_feature_vector(personalities + hobbies)

    # 特徴ベクトルとユーザー情報を保存
    vector_db_manager.upsert(feature_vector, user)

    # デバッグ用
    # WARNING: 本来、推薦されるユーザーは/api/recommendationで取得すべきだが、
    # mysqlに保存する仕組みを作るまではここで取得する
    recommended_users = recommender.recommend(user_id, feature_vector)
    user_id += 1

    return JSONResponse(content={"data": recommended_users})
    
