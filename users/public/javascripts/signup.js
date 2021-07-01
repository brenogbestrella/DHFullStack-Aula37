async function onSubmitSignUp(event) {
  event.preventDefault();
  const user = document.getElementById("userSignup").value;
  const password = document.getElementById("passwordSignup").value;
  //   /*
  //     VALIDAR O FORMULÁRIO
  //   */

  //   const response = await fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: user,
  //       password,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();

  const { data } = await axios.post("http://localhost:3000/users", {
    email: user,
    password,
  });
  window.alert(`Usuário cadastrado com id ${data.id}`);
  window.location.href = "/";
}

async function onBlurCep() {
  const cepField = document.getElementById("cep");
  const { data } = await axios.get(
    `https://viacep.com.br/ws/${cepField.value}/json/`
  );

  const ufField = document.getElementById("uf");
  const logradouroField = document.getElementById("logradouro");
  const bairroField = document.getElementById("bairro");
  const localidadeField = document.getElementById("localidade");

  ufField.value = data.uf;
  logradouroField.value = data.logradouro;
  bairroField.value = data.bairro;
  localidadeField.value = data.localidade;
}

window.onload = function () {
  const form = document.getElementById("formSignup");
  form.addEventListener("submit", onSubmitSignUp);

  const cepField = document.getElementById("cep");
  cepField.addEventListener("blur", onBlurCep);
};
