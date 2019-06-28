from flask import render_template, request, jsonify, redirect
from app import app
from app.models import cotacao as db
from app.models import criaHtml as ch
from app.controllers import sendEmail as se
from pprint import pprint

@app.route('/Home', methods=('GET', 'POST'))
@app.route('/', methods=('GET', 'POST'))
def home():
        
        return render_template('home.html')


@app.route('/Conteudo-vs-Pacotes')
def ppp():
        return render_template('ppp.html')


@app.route('/FAQ', methods=('GET', 'POST'))
def faq():
        if request.method == "POST":
                solicitante = request.form.get('email-contato')
                pergunta = request.form.get('pergunta-text')
                if solicitante and pergunta == None:
                        print('sem dados')
                else:
                        #client = db.client
                        #db = client['db-faq']
                        #coll = db['coll-faq-noresponse']
                        print(solicitante)
                        print(pergunta)
                        se = sendEmail()
                        se.send(solicitante,pergunta)
                        
        return render_template('faq.html')


@app.route('/cotacao', methods=['GET' , 'POST'])
def cotacao():
        src = db.searchCotacao()
        deri = ch.htmlDerivativos()
        html=""
        if request.method == "POST":
                text = request.form.get('contentSearch')
                print(text)
                if text == '':
                        html=""
                        return render_template('cotacao.html', html=html)
                if text.upper() =='TUDO':
                        result = src.searchDerivativos("")
                        html = deri.montaHTMLDerivativosTudo(result)
                        return render_template('cotacao.html', html=html)
                else:
                        result = src.searchDerivativos(text)
                        pprint(result)
                        html = deri.montaHTMLDerivativos(result)
                        return render_template('cotacao.html', html=html)

        return render_template('cotacao.html', html=html)


@app.route('/bpro-terminal', methods=('GET' , 'POST'))
def bpro_terminal():
        return render_template('BCP-Terminal.html')
