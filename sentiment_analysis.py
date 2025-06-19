from transformers import pipeline

# Load sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis")

def sentiment_analyzer(text):
    result = sentiment_pipeline(text)
    return result
