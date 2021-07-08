import './App.css';
import { useState } from "react";

import Header from "./components/header"
import Footer from "./components/footer"

import { getCepData } from "./services/viacep";

function App() {

  const [cep, setCep] = useState("22270000");
  const [logradouro, setLogradouro] = useState("");
  const [mustShow, setMustShow] = useState(true);

  async function onBlurCep() {
    const data = await getCepData(cep)
    setLogradouro(data.logradouro);
  };

  function onClickHide() {
    setMustShow(!mustShow);
  }


  return (
    <div className="background" id="background">
      <Header />
      <button type="button" onClick={onClickHide}>Esconder campos</button>
      <form id="formSignup">
        {mustShow && (
          <>
            <span id="userErrorSignup" className="error">Usuário incorreto</span>
            <input id="userSignup" type="text" placeholder="Digite seu usuário"/>
            <span id="passwordErrorSignup" className="error">Senha incorreta</span>
            <input id="passwordSignup" type="password" placeholder="Digite sua senha"/>
          </>
        )}
        <input 
          id="cep" 
          type="text" 
          onBlur={onBlurCep} 
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <input 
          id="logradouro" 
          type="text" 
          placeholder="Digite seu logradouro"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        />

        <input id="bairro" type="text" placeholder="Digite seu bairro"/>
        <input id="localidade" type="text" placeholder="Digite sua cidade"/>
        <input id="uf" type="text" placeholder="Digite seu UF"/>
        <input id="numero" type="text" placeholder="Digite seu número"/>

        <button id="signUpBtn" type="submit">Cadastrar</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
