import gensim

model_path = "model.vec"
fasttext_model = gensim.models.KeyedVectors.load_word2vec_format(model_path, binary=False)