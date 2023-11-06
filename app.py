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
            prompt=f"Analyze the given input, which appears to be a hash or cipher, and determine its type. If you can confidently identify the encryption method, explain further what kind of encryption it is and how to decode it. If you cannot determine the exact type, make an educated guess based on your analysis. Please provide as much detail as possible in your response.:\n{user_input}",
            max_tokens=150
        )
        generated_text = response.choices[0].text.strip()
        return jsonify({"generated_text": generated_text})

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

