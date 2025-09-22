async function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const cpf = document.getElementById("cpf").value;
  const telefone = document.getElementById("telefone").value;
  const time = document.getElementById("time").value;

  // monta o corpo com CPF incluído
  const body = `${nome},${email},${senha},${cpf},${telefone},${time}`;

  const data = await apiPost("/users", body);

  if (data && data.id) {
    alert("Usuário cadastrado com sucesso! Bem-vindo " + data.nome);
    window.location.href = "login.html";
  } else {
    alert("Erro ao cadastrar usuário!");
  }
}
