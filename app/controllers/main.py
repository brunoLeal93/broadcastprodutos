#from database import *
from flask import render_template, request, jsonify, redirect
from app import app
#from app.controllers import dbmongo as db
#from app.controllers import cotacaoTeste as ct
from pprint import pprint

#from cotacaotest import *

## CRIAR PAGINA PARA SE LOGAR
@app.route('/login', methods=('GET', 'POST'))
def login():
        return render_template('index.html')

@app.route('/Conteudo-vs-Pacotes')
def ppp():
        return render_template('ppp.html')

@app.route('/FAQ', methods=('GET', 'POST'))
def faq():
        
        return render_template('faq.html')

@app.route('/Home', methods=('GET', 'POST'))
@app.route('/', methods=('GET', 'POST'))
def home():
        
        return render_template('home.html')
'''
@app.route('/noticiosos', methods=('GET' , 'POST'))
def noticiosos():
        return render_template('noticiosos.html')
'''
@app.route('/cotacao', methods=['GET' , 'POST'])
def cotacao():
        src = db.searchCotacao()
        html=""
        if request.method == "POST":
                text = request.form.get('contentSearch')
                print(text)

                if text=='tudo':
                        #result = src.searchDerivativos(text)
                        #html = ct.montaHTMLDerivativosTudo(result)
                        return render_template('cotacao.html', html=html)
                else:
                        #result = src.searchDerivativos(text)
                        #pprint(result)
                        html = ''#ct.montaHTMLDerivativos(result)
                        return render_template('cotacao.html', html=html)

        return render_template('cotacao.html', html=html)


@app.route('/bpro-terminal', methods=('GET' , 'POST'))
def bpro_terminal():
        return render_template('BCP-Terminal.html')

@app.route('/bpro-web', methods=('GET' , 'POST'))
def bpro_web():
        return render_template('BCP-Terminal.html')

@app.route('/bpro-wallboard', methods=('GET' , 'POST'))
def bpro_wallboard():
        return render_template('bcpro.html')

@app.route('/bagro-terminal', methods=('GET' , 'POST'))
def bagro_terminal():
        return render_template('bcagro.html')

@app.route('/bagro-web', methods=('GET' , 'POST'))
def bagro_web():
        return render_template('bcagro.html')

@app.route('/bagro-wallboard', methods=('GET' , 'POST'))
def bagro_wallboard():
        return render_template('bcagro.html')


@app.route('/bpol', methods=('GET' , 'POST'))
def bpol():
        return render_template('bpro.html')

@app.route('/TradingNews', methods=('GET' , 'POST'))
def tradingnews():
        return render_template('bpro.html')



