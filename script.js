function euclideanNorm(v) {
  return Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));
}

function manhattanNorm(v) {
  return v.reduce((sum, val) => sum + Math.abs(val), 0);
}

function chebyshevNorm(v) {
  return Math.max(...v.map(Math.abs));
}

function euclideanDistance(v1, v2) {
  return Math.sqrt(v1.reduce((sum, val, i) => sum + (val - v2[i]) ** 2, 0));
}

function manhattanDistance(v1, v2) {
  return v1.reduce((sum, val, i) => sum + Math.abs(val - v2[i]), 0);
}

function chebyshevDistance(v1, v2) {
  return Math.max(...v1.map((val, i) => Math.abs(val - v2[i])));
}

function getVectorFromInput(ids) {
  return ids.map((id) => parseFloat(document.getElementById(id).value));
}

function displayResults(v1, v2) {
  const results = `
        <strong>Норми вектора V1:</strong><br>
        Евклідова: ${euclideanNorm(v1).toFixed(4)}<br>
        Манхеттенська: ${manhattanNorm(v1).toFixed(4)}<br>
        Чебишевська: ${chebyshevNorm(v1).toFixed(4)}<br><br>
        <strong>Норми вектора V2:</strong><br>
        Евклідова: ${euclideanNorm(v2).toFixed(4)}<br>
        Манхеттенська: ${manhattanNorm(v2).toFixed(4)}<br>
        Чебишевська: ${chebyshevNorm(v2).toFixed(4)}<br><br>
        <strong>Відстані між векторами:</strong><br>
        Евклідова: ${euclideanDistance(v1, v2).toFixed(4)}<br>
        Манхеттенська: ${manhattanDistance(v1, v2).toFixed(4)}<br>
        Чебишевська: ${chebyshevDistance(v1, v2).toFixed(4)}
    `;
  document.getElementById('result').innerHTML = results;
}

function calculate() {
  const v1 = getVectorFromInput(['x1', 'x2', 'x3']);
  const v2 = getVectorFromInput(['y1', 'y2', 'y3']);
  displayResults(v1, v2);
}

function clearFields() {
  document.querySelectorAll('input').forEach((input) => (input.value = ''));
  document.getElementById('result').innerHTML = '';
}

document.getElementById('calculate').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clearFields);
