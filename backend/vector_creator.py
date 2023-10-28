import numpy as np
from fast_text import fasttext_model

class VectorCreator:
    def __init__(self, model):
        self.__model = model
    
    def create_feature_vector(self, keywords):
        # キーワードが空の場合特徴ベクトルをゼロベクトルにする
        if keywords == []:
            return np.zeros(300).tolist()


        # 学習済みモデルにkeywordsを渡してそれぞれの単語に対するベクトルの配列を生成
        vectors = []
        for keyword in keywords:
            try:
                vectors.append(self.__model[keyword])
            except Exception as e:
                print(e)

        # ベクトルの配列からユーザーの特徴ベクトルを計算
        feature_vector = self.__calculate_feature_vector(vectors)
        
        return feature_vector
    
    def __calculate_feature_vector(self, vectors):
        # 平均ベクトルをユーザーの特徴とする
        array = np.array(vectors)
        return np.mean(array, axis=0)
    
vector_creator = VectorCreator(fasttext_model)