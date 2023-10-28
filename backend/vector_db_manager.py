from qdrant_client import QdrantClient
from qdrant_client.http.models import Distance, VectorParams, PointStruct, Filter, FieldCondition, MatchValue
from schemas import UserData
from consts import VECTOR_DIMENTION, VECTOR_DB_HOST, VECTOR_DB_PORT, VECTOR_DB_COLLECTION_NAME


class VectorDBManager:
    def __init__(self, host: str, port: int, collection_name: str, dimention: int):
        self.__vector_id = 0
        # セッションを作成
        self.__client = QdrantClient(host, port=port)
        self.__collection_name = collection_name
        self.__client.recreate_collection(
            collection_name=collection_name,
            vectors_config=VectorParams(size=dimention, distance=Distance.COSINE),
        )

    def upsert(self, feature_vector, user_id: int):
        # 特徴ベクトルとユーザー情報を登録
        self.__client.upsert(
            collection_name=self.__collection_name,
            points=[
                PointStruct(id=self.__vector_id, vector=feature_vector, payload=({"user_id": user_id}))
            ]
        )
        self.__vector_id += 1

    def search(self, vector, user_id, recommendation_number=5):
        return self.__client.search(
            collection_name = self.__collection_name,
            query_vector = vector,
            limit = recommendation_number,
            # ユーザー自身は取得しない
            query_filter=Filter(
                must_not=[
                    FieldCondition(
                        key="user_id",
                        match=MatchValue(value=user_id)
                    )
                ]
            )
        )


vector_db_manager = VectorDBManager(VECTOR_DB_HOST, VECTOR_DB_PORT, VECTOR_DB_COLLECTION_NAME, VECTOR_DIMENTION)