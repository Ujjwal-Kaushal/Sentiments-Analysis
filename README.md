# # Sentiment Analyzer 🧠💬
[![Netlify Status](https://api.netlify.com/api/v1/badges/153e077e-d91e-411e-ad8f-ab92098f3e52/deploy-status)](https://app.netlify.com/sites/sentimentanalyser/deploys)
A simple and interactive web application that analyzes the **sentiment of input text** using a pre-trained NLP model from Hugging Face's `transformers` library. Built with **Flask**, **HTML/CSS**, and **JavaScript**, the project features a sleek UI with animated backgrounds and real-time result display.

---

## 🚀 Features

- 🔍 Real-time sentiment analysis
- 🧠 Powered by `transformers`' sentiment-analysis pipeline
- 💡 Simple and beautiful 3D-style UI
- ⚡ Fast, responsive frontend with JavaScript
- 🔒 CORS-enabled API for safe frontend-backend communication

---

## 🛠️ Tech Stack

- **Language:** Python
- **Web Framework:** Flask
- **NLP Library:** Hugging Face Transformers
- **Frontend:** HTML, CSS, JavaScript
- **UI Animation/Design:** ShadCN-inspired 3D-style background
- **API Communication:** Fetch API (JavaScript)
- **Deployment:** Localhost (can be extended to Render/Vercel/Heroku)

---

## 📂 Folder Structure

```
sentiments_analyser/
├── server.py
├── templates/
│   └── index.html
├── static/
│   └── mywebscript.js
├── .gitignore
└── README.md
```

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ujjwal-Kaushal/Sentiments-Analysis.git
cd Sentiments-Analysis
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate  # Windows
# or
source venv/bin/activate  # Mac/Linux
```

### 3️⃣ Install Requirements

```bash
pip install flask transformers flask-cors
```

### 4️⃣ Run the App

```bash
python server.py
```

Then open your browser and go to:

```
http://127.0.0.1:5000
```

---

## 🧪 Example

Input:

```
I love this project!
```

Output:

```
Sentiment: POSITIVE, Score: 0.999
```

---

## 📄 License

This project is licensed under the **Apache 2.0 License**. See the [LICENSE](LICENSE) file for details.

