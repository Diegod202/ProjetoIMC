// Calorias por dia
const refeicoes = JSON.parse(localStorage.getItem('nutritrack_refeicoes') || '[]');
const caloriasPorDia = {};
refeicoes.forEach(r => {
  caloriasPorDia[r.data] = (caloriasPorDia[r.data]||0) + Number(r.calorias);
});
const labelsCal = Object.keys(caloriasPorDia);
const dadosCal = Object.values(caloriasPorDia);

const ctxCal = document.getElementById('caloriasChart').getContext('2d');
new Chart(ctxCal, {
    type: 'bar',
    data: {
        labels: labelsCal,
        datasets: [{
            label: 'Calorias (kcal)',
            data: dadosCal,
            backgroundColor: '#ffb300'
        }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false }},
      scales: { y: { beginAtZero: true } }
    }
});

// Evolução do IMC
const imcs = JSON.parse(localStorage.getItem('nutritrack_imcs') || '[]');
const labelsIMC = imcs.map(i => i.data);
const dadosIMC = imcs.map(i => Number(i.imc));

const ctxImc = document.getElementById('imcChart').getContext('2d');
new Chart(ctxImc, {
    type: 'line',
    data: {
        labels: labelsIMC,
        datasets: [{
            label: 'IMC',
            data: dadosIMC,
            fill: false,
            borderColor: '#ad1457',
            backgroundColor: '#fce4ec',
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: '#ad1457'
        }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: false } }
    }
});