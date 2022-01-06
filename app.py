from flask import Flask , render_template , request , jsonify
import requests , json

app = Flask(__name__)

@app.route('/' , methods=['GET' , 'POST'])
def index():
    if request.method=='GET':
        return render_template('index.html')
    else:
        httpresponse = requests.get("https://random-word-api.herokuapp.com/word?number=1")
        textdata = httpresponse.text
        jsondata = json.loads(textdata)
        mdata = jsondata[0]

        return jsonify(dict(word=mdata))


if __name__=="__main__":
    app.run(debug = True)
