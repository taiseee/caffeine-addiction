import janome.tokenizer

tokenizer = janome.tokenizer.Tokenizer()

# text = "こんにちは、Pythonさん"
# tokens = list(tokenizer.tokenize(text=text))
# for t in tokens:
#   print(t.surface)

text = "戦国大名"
tokens = list(tokenizer.tokenize(text=text))
for t in tokens:
  print(t)

class JapaneseAnalyzer:
  
  @classmethod
  def extract_nouns_and_adjectives(cls, text):
    adjective_list = []
    tokens = list(tokenizer.tokenize(text=text))
    for token in tokens:
      if ("形容詞" in token.part_of_speech) or ("名詞" in token.part_of_speech):
        adjective_list.append(token.surface)

    return adjective_list