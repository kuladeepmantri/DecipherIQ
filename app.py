from flask import Flask, render_template, request, jsonify
import openai
import os

# openai.api_key = os.environ.get('OPENAI_API_KEY')

# OPENAI_API_KEY = ""

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        user_input = request.form.get('textboc')
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt= {user_input},
            max_tokens=150
        )
        generated_text = response.choices[0].text.strip()
        return jsonify({"generated_text": generated_text})

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

