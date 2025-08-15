const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;
    const user = JSON.parse(localStorage.getItem('nutri_user'));
    const msg = document.getElementById('loginMsg');
    if (user && user.email === email && user.senha === senha) {
      msg.style.color = "#08a88a";
      msg.textContent = "Login realizado! Redirecionando...";
      setTimeout(() => window.location.href = "index.html", 950);
    } else {
      msg.style.color = "#c62828";
      msg.textContent = "E-mail ou senha inválidos!";
    }
  });
}