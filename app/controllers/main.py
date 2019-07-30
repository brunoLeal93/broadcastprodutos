from flask import render_template, request, jsonify, redirect
from app import app
from app.models.buscador import searchCotacao, searchFAQ
from app.models import criaHtml as ch
from app.controllers.sendEmail import sendEmail
from pprint import pprint
from pymongo import ASCENDING

@app.route('/Home', methods=('GET', 'POST'))
@app.route('/', methods=('GET', 'POST'))
def home():
        
        return render_template('home.html')


@app.route('/Comparativo-de-Pacotes')
def comparativo():
        return render_template('comparativo.html')


@app.route('/FAQ', methods=('GET', 'POST'))
def faq():
        src = searchFAQ()
        htmlfaq = ch.htmlFAQ()
        result = src.searchfaq("")
        html = htmlfaq.montaHtmlFAQ(result)

        if request.method == "POST":
                solicitante = request.form.get('email-contato')
                pergunta = request.form.get('pergunta-text')
                if solicitante and pergunta != None:
                        
                        se = sendEmail()
                        se.send(solicitante,pergunta)     
                else:
                        faqText = request.form.get('contentSearch')
                        result = src.searchfaq(faqText)
                        html = htmlfaq.montaHtmlFAQ(result)
                        return render_template('faq.html', html=html)
                        
                        
        return render_template('faq.html', html=html)


@app.route('/cotacao', methods=['GET' , 'POST'])
def cotacao():
        src = searchCotacao()
        htmlderi = ch.htmlDerivativos()
        html=""
        if request.method == "POST":
                text = request.form.get('contentSearch')
                #print(text)
                if text == '':
                        html=""
                        return render_template('cotacao.html', html=html)
                if text.upper() =='TUDO':
                        result = src.searchDerivativos(text)
                        #pprint(result)
                        html = htmlderi.montaHTMLDerivativosTudo(result)
                        return render_template('cotacao.html', html=html)
                else:
                        result = src.searchDerivativos(text)
                        #pprint(result)
                        if result == "Não Encontrou":
                                html = result
                                return render_template('cotacao.html', html=html)
                        else:
                                html = htmlderi.montaHTMLDerivativos(result)
                                #pprint(html)
                        return render_template('cotacao.html', html=html)

        return render_template('cotacao.html', html=html)

@app.route('/Noticiosos', methods=('GET' , 'POST'))
def noticias():
        return render_template('noticias.html')

@app.route('/BPRO-Terminal', methods=('GET' , 'POST'))
def bpro_terminal():
        return render_template('BCP-Terminal.html')

@app.route('/BAGRO-Terminal', methods=('GET' , 'POST'))
def bagro_terminal():
        return render_template('BCAGRO-Terminal.html')
