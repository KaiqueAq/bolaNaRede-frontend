// login.js - Login com API do Xano

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.login-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      // Substitua pela URL real do endpoint de login do seu Xano
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:JLB8HPm2/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Erro ao fazer login.');
        return;
      }

      const data = await response.json();
      // Salve o token se necessário
      localStorage.setItem('token', data.authToken || data.token);
      alert('Login realizado com sucesso!');
      // Redirecione para a página principal ou dashboard
      window.location.href = 'cadastro.html';
    } catch (error) {
      alert('Erro de conexão. Tente novamente.');
    }
  });
});

/*
async function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  const data = await apiPost("/login", email + "," + senha);

  if (data && data.id) {
    alert("Bem-vindo " + data.nome);
    window.location.href = "anuncios.html"; // redireciona
  } else {
    alert("Login inválido!");
  }
}
*/



