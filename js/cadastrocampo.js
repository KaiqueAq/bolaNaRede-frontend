async function cadastrarCampo() {
  const nome = document.getElementById("nome").value;
  const tipo = document.getElementById("tipo").value;
  const preco = document.getElementById("preco").value;
  const capacidade = document.getElementById("capacidade").value;
  const cidade = document.getElementById("cidade").value;
  const bairro = document.getElementById("bairro").value;
  const telefone = document.getElementById("telefone").value;

  // pegar userId salvo no login
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("Você precisa estar logado para cadastrar um campo!");
    return;
  }

  // monta corpo da requisição (seguindo o que o back espera)
  const body = `${nome},${tipo},${preco},${capacidade},${cidade},${bairro},${telefone},${userId}`;

  const data = await apiPost("/campos", body);

  if (data && data.id) {
    alert("Campo cadastrado com sucesso: " + data.nome);
    window.location.href = "anuncios.html";
  } else {
    alert("Erro ao cadastrar campo!");
  }
}
