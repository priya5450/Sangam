import React from "react";

const MachineLearning: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-blue-600">Machine Learning Course</h1>
            <p className="text-gray-700 mt-2">
                Welcome to the Machine Learning Course, where you’ll learn how to build predictive models using data.
                This course covers everything from basic concepts to advanced techniques, including supervised learning, unsupervised learning, deep learning, and deployment strategies.
            </p>
            <p className="mt-2">By the end, you'll be equipped to develop real-world machine learning applications.</p>

            {/* Module 1 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 1: Introduction to Machine Learning</h2>
                <h3 className="text-xl font-semibold mt-4">1.1 What is Machine Learning?</h3>
                <p className="mt-2">
                    Machine Learning (ML) is a branch of artificial intelligence (AI) that enables systems to learn from data and make predictions without explicit programming.
                </p>
            </section>

            {/* Setting Up ML */}
            <section className="mt-6">
                <h3 className="text-xl font-semibold">1.2 Setting Up Your ML Environment</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>pip install numpy pandas matplotlib seaborn scikit-learn tensorflow keras</code>
                </pre>
            </section>

            {/* Module 2 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 2: Data Preprocessing and Exploration</h2>
                <h3 className="text-xl font-semibold mt-4">2.1 Understanding and Cleaning Data</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`import pandas as pd

df = pd.read_csv("data.csv")
df.fillna(df.mean(), inplace=True)`}
                    </code>
                </pre>
            </section>

            {/* Module 3 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 3: Supervised Learning - Regression Models</h2>
                <h3 className="text-xl font-semibold mt-4">3.1 Linear Regression</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`}
                    </code>
                </pre>
            </section>

            {/* Module 4 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 4: Supervised Learning - Classification Models</h2>
                <h3 className="text-xl font-semibold mt-4">4.1 Decision Trees</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()
model.fit(X_train, y_train)`}
                    </code>
                </pre>
            </section>

            {/* Module 5 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 5: Unsupervised Learning - Clustering Models</h2>
                <h3 className="text-xl font-semibold mt-4">5.1 K-Means Clustering</h3>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=3)
kmeans.fit(X)`}
                    </code>
                </pre>
            </section>

            {/* Module 6 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 6: Feature Selection and Model Optimization</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from sklearn.model_selection import GridSearchCV

param_grid = {'C': [0.1, 1, 10]}
grid = GridSearchCV(LogisticRegression(), param_grid, cv=5)
grid.fit(X_train, y_train)`}
                    </code>
                </pre>
            </section>

            {/* Module 7 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 7: Neural Networks & Deep Learning</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10)`}
                    </code>
                </pre>
            </section>

            {/* Module 8 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 8: Natural Language Processing (NLP)</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

text = "Machine Learning is amazing!"
tokens = word_tokenize(text)
filtered_tokens = [word for word in tokens if word not in stopwords.words("english")]
print(filtered_tokens)`}
                    </code>
                </pre>
            </section>

            {/* Module 9 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 9: Time Series Forecasting</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from statsmodels.tsa.arima.model import ARIMA

model = ARIMA(data, order=(5,1,0))
model_fit = model.fit()
print(model_fit.summary())`}
                    </code>
                </pre>
            </section>

            {/* Module 10 */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Module 10: Model Deployment & Real-World Applications</h2>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    <code>
                        {`from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json["features"]
    prediction = model.predict([data])
    return jsonify({"prediction": prediction.tolist()})

if __name__ == "__main__":
    app.run(debug=True)`}
                    </code>
                </pre>
            </section>

            {/* Final Projects */}
            <section className="mt-6">
                <h2 className="text-2xl font-semibold">Final Projects</h2>
                <ul className="list-disc pl-5 mt-2">
                    <li>✔ Spam Email Classifier (NLP)</li>
                    <li>✔ Stock Market Prediction (Time Series)</li>
                    <li>✔ Customer Segmentation (Clustering)</li>
                    <li>✔ Face Recognition System (Deep Learning)</li>
                </ul>
            </section>
        </div>
    );
};

export default MachineLearning;

