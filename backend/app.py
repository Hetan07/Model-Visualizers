from flask import Flask, jsonify, render_template
from generate_data import generate_random_data
import plotly.graph_objs as go
import plotly.offline as py

app = Flask(__name__)


@app.route('/api/data')
def get_data():
    data = generate_random_data()
    return data


@app.route('/')
def index():
    data = generate_random_data()
    fig = go.Figure(data=[go.Scatter(x=[point[0] for point in data], y=[point[1] for point in data], mode='markers')])
    plot_div = py.plot(fig, output_type='div', include_plotlyjs=False)
    return render_template('index.html', plot_div=plot_div)


if __name__ == '__main__':
    app.run(debug=True)
