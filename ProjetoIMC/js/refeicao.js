document.getElementById('refeicaoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const calorias = document.getElementById('calorias').value;
    const hora = document.getElementById('hora').value;
  
    const refeicao = { nome, calorias: Number(calorias), hora, data: new Date().toLocaleDateString() };
    let refeicoes = JSON.parse(localStorage.getItem('nutritrack_refeicoes') || '[]');
    refeicoes.push(refeicao);
    localStorage.setItem('nutritrack_refeicoes', JSON.stringify(refeicoes));
  
    document.getElementById('msg').textContent = "Refeição registrada!";
    this.reset();
    setTimeout(() => document.getElementById('msg').textContent = "", 2000);
  });