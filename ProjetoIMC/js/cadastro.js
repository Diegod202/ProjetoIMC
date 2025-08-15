const cadastroForm = document.getElementById('cadastroForm');
if (cadastroForm) {
  cadastroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('cadNome').value.trim();
    const email = document.getElementById('cadEmail').value.trim();
    const senha = document.getElementById('cadSenha').value;
    const msg = document.getElementById('cadastroMsg');

    if (nome.length < 3) {
      msg.textContent = "Digite um nome válido!";
      msg.style.color = "#c62828";
      return;
    }
    if (!email.includes("@") || email.length < 7) {
      msg.textContent = "Digite um e-mail válido!";
      msg.style.color = "#c62828";
      return;
    }
    if (senha.length < 4) {
      msg.textContent = "A senha deve ter ao menos 4 caracteres.";
      msg.style.color = "#c62828";
      return;
    }

    // Salva usuário no localStorage (apenas para demo)
    localStorage.setItem('nutri_user', JSON.stringify({ nome, email, senha }));
    msg.textContent = "Cadastro realizado! Redirecionando...";
    msg.style.color = "#388e3c";
    setTimeout(() => window.location.href = "login.html", 1200);
  });
}