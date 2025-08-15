document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
  
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      let classificacao = '';
      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc < 25) classificacao = 'Peso normal';
      else if (imc < 30) classificacao = 'Sobrepeso';
      else if (imc < 35) classificacao = 'Obesidade grau I';
      else if (imc < 40) classificacao = 'Obesidade grau II';
      else classificacao = 'Obesidade grau III';
  
      document.getElementById('resultado').innerHTML = 
        `IMC: <b>${imc.toFixed(2)}</b><br>Classificação: <b>${classificacao}</b>`;
  
      // Salva registro no histórico
      let imcs = JSON.parse(localStorage.getItem('nutritrack_imcs') || '[]');
      imcs.push({ peso, altura, imc: imc.toFixed(2), classificacao, data: new Date().toLocaleString() });
      localStorage.setItem('nutritrack_imcs', JSON.stringify(imcs));
    }
  });