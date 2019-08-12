from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from wtforms.widgets import TextArea

class FAQForm(FlaskForm):
    email = StringField('E-mail para contato:', validators=[DataRequired(message="Por favor insira o seu e-mail.")])
    pergunta = StringField('Pergunta:', validators=[DataRequired(message="Faça a pergunta!")], widget=TextArea())
    submit = SubmitField("Enviar")