import nltk
import twython
nltk.download('vader_lexicon')

from nltk.sentiment.vader import SentimentIntensityAnalyzer

sid = SentimentIntensityAnalyzer()


def joker(txt):
  text = txt

  scores = sid.polarity_scores(text)

  if scores['neg'] > scores['pos']:
    return 'Yo_Mama'
  elif scores['pos'] > scores['neg']:
    return 'Chuck_Norris'
  else:
    return ''

joker(input())