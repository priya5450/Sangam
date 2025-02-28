import{j as e}from"./index-CNsAis2L.js";const i=()=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-blue-600",children:"Machine Learning Course"}),e.jsx("p",{className:"text-gray-700 mt-2",children:"Welcome to the Machine Learning Course, where you’ll learn how to build predictive models using data. This course covers everything from basic concepts to advanced techniques, including supervised learning, unsupervised learning, deep learning, and deployment strategies."}),e.jsx("p",{className:"mt-2",children:"By the end, you'll be equipped to develop real-world machine learning applications."}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 1: Introduction to Machine Learning"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"1.1 What is Machine Learning?"}),e.jsx("p",{className:"mt-2",children:"Machine Learning (ML) is a branch of artificial intelligence (AI) that enables systems to learn from data and make predictions without explicit programming."})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"1.2 Setting Up Your ML Environment"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:"pip install numpy pandas matplotlib seaborn scikit-learn tensorflow keras"})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 2: Data Preprocessing and Exploration"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"2.1 Understanding and Cleaning Data"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`import pandas as pd

df = pd.read_csv("data.csv")
df.fillna(df.mean(), inplace=True)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 3: Supervised Learning - Regression Models"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"3.1 Linear Regression"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 4: Supervised Learning - Classification Models"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"4.1 Decision Trees"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(X_train, y_train)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 5: Unsupervised Learning - Clustering Models"}),e.jsx("h3",{className:"text-xl font-semibold mt-4",children:"5.1 K-Means Clustering"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=3)
kmeans.fit(X)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 6: Feature Selection and Model Optimization"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from sklearn.model_selection import GridSearchCV

param_grid = {'C': [0.1, 1, 10]}
grid = GridSearchCV(LogisticRegression(), param_grid, cv=5)
grid.fit(X_train, y_train)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 7: Neural Networks & Deep Learning"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 8: Natural Language Processing (NLP)"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

text = "Machine Learning is amazing!"
tokens = word_tokenize(text)
filtered_tokens = [word for word in tokens if word not in stopwords.words("english")]
print(filtered_tokens)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 9: Time Series Forecasting"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from statsmodels.tsa.arima.model import ARIMA

model = ARIMA(data, order=(5,1,0))
model_fit = model.fit()
print(model_fit.summary())`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Module 10: Model Deployment & Real-World Applications"}),e.jsx("pre",{className:"bg-gray-100 p-4 rounded mt-2",children:e.jsx("code",{children:`from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json["features"]
    prediction = model.predict([data])
    return jsonify({"prediction": prediction.tolist()})

if __name__ == "__main__":
    app.run(debug=True)`})})]}),e.jsxs("section",{className:"mt-6",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Final Projects"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsx("li",{children:"✔ Spam Email Classifier (NLP)"}),e.jsx("li",{children:"✔ Stock Market Prediction (Time Series)"}),e.jsx("li",{children:"✔ Customer Segmentation (Clustering)"}),e.jsx("li",{children:"✔ Face Recognition System (Deep Learning)"})]})]})]});export{i as default};
