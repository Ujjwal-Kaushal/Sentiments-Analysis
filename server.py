from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)

classifier = pipeline('sentiment-analysis')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sentimentAnalyzer', methods=['POST'])
def analyze_sentiment():
    try:
        data = request.get_json()
        print("Received data: ", data)
        if not data or 'text' not in data:
            return jsonify({'error': 'No text provided'}), 400
        result = classifier(data['text'])[0]
        return jsonify({
            'label': result['label'],
            'score': result['score']
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)