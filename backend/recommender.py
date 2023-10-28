from consts import RECOMMENDATION_NUMBER
from vector_db_manager import vector_db_manager

class Recommender:
    def __init__(self, vector_db_manager):
        self.__vector_db_manager = vector_db_manager

    def recommend(self, user_id, vector, recommendation_number=RECOMMENDATION_NUMBER):
        search_results = self.__vector_db_manager.search(vector, user_id, recommendation_number)
        results = [result.payload for result in search_results]
        return results
    
recommender = Recommender(vector_db_manager)