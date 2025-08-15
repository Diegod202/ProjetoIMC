function carregaHistorico() {
    // Refeições
    const refeicoes = JSON.parse(localStorage.getItem('nutritrack_refeicoes') || '[]');
    const listaRefeicoes = document.getElementById('listaRefeicoes');
    listaRefeicoes.innerHTML = refeicoes.length ? '' : '<li>Nenhuma refeição registrada.</li>';
    refeicoes.slice().reverse().forEach(ref => {
      listaRefeicoes.innerHTML += `<li><b>${ref.nome}</b> - ${ref.calorias} kcal às ${ref.hora} (${ref.data})</li>`;
    });
    // IMC
    const imcs = JSON.parse(localStorage.getItem('nutritrack_imcs') || '[]');
    const listaIMC = document.getElementById('listaIMC');
    listaIMC.innerHTML = imcs.length ? '' : '<li>Nenhum IMC registrado.</li>';
    imcs.slice().reverse().forEach(i => {
      listaIMC.innerHTML += `<li>${i.data}: <b>${i.imc}</b> (${i.classificacao}) - ${i.peso}kg, ${i.altura}m</li>`;
    });
  }
  carregaHistorico();
  
  document.getElementById('limpar').onclick = function() {
    if (confirm('Tem certeza que deseja apagar todo o histórico?')) {
      localStorage.removeItem('nutritrack_refeicoes');
      localStorage.removeItem('nutritrack_imcs');
      carregaHistorico();
    }
  }