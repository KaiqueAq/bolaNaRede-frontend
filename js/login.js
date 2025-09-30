async function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const data = await apiPost("/login", email + "," + senha);

  if (data && data.id) {
    localStorage.setItem("userId", data.id);

    alert("Bem-vindo " + data.nome);
    window.location.href = "anuncios.html"; // redireciona
  } else {
    alert("Login inválido!");
  }
}


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



