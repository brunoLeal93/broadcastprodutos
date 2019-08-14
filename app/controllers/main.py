from flask import render_template, request, jsonify, redirect, flash
from app import app
from app.models.buscador import searchCotacao, searchFAQ
from app.models import criaHtml as ch
from app.models.forms import FAQForm
from app.controllers.sendEmail import sendEmail
from pprint import pprint


@app.route('/Home', methods=('GET', 'POST'))
@app.route('/', methods=('GET', 'POST'))
def home():
        
        return render_template('home.html')


@app.route('/Comparativo-de-Pacotes')
def comparativo():
        return render_template('comparativo.html')


@app.route('/FAQ', methods=('GET', 'POST'))
def faq():
        form = FAQForm()
        src = searchFAQ()
        htmlfaq = ch.htmlFAQ()
        result = src.searchfaq("")
        html = htmlfaq.montaHtmlFAQ(result)

        if request.method == "POST":
                faqText = request.form.get('contentSearch')

                if form.validate():

                        solicitante = form.email.data
                        pergunta = form.pergunta.data
                        se = sendEmail()
                        se.send(solicitante,pergunta)
                        flash('<strong>Enviado com Sucesso!</strong> Assim que tivermos uma resposta, entraremos em contato.')
                        form.pergunta.data=""
                        return render_template('faq.html', html=html, form=form)

                if faqText != None:
                        print(faqText)
                        result = src.searchfaq(faqText)
                        html = htmlfaq.montaHtmlFAQ(result)
                        return render_template('faq.html', html=html, form=form)


        return render_template('faq.html', html=html, form=form)


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
        return render_template('BAGRO-Terminal.html')
