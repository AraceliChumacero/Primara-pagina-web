#Lo que se va importar para el codigo
from  flask  import  Flask, render_template
from flask_tailwind import Tailwind
#inicializar la aplicacion en flask
app = Flask(__name__)

tailwind = Tailwind(app)
#rutas
@app.route('/')
def index():
    return render_template('base.html')

#Correr la aplicacion
if __name__ == '__main__':
    app.run(debug=True)


