
=======
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
>>>>>>> fd5f9b9b438a18276fdfa12180bf75d007ca887b
