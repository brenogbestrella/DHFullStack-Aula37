import './styles.css';
import { useState, 
  // useEffect 
  } 
  from "react";
  import { useHistory } from "react-router-dom"

// import Pagination from "./components/pagination"

// import Header from "./components/header"
// import Footer from "./components/footer"

import PhotoInput from '../../components/photoInput';

import { getCepData } from "../../services/viacep";
// import { getUsers } from "./services/users";

function SignUp() {

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [photo, setPhoto] = useState("")
  const history = useHistory();
  // const [page, setPage] = useState(1)
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function loadUserList() {
  //     const usersBackend = await getUsers(page);
  //     setUsers(usersBackend);
  //   }

  //   loadUserList()
  // }, [page]);

  function handleSubmit(e){
      e.preventDefault();

      history.push("/login")
  }


  async function onBlurCep() {
    const data = await getCepData(cep)
    setLogradouro(data.logradouro);
  };

  return (
    <div className="background" id="background">
      {/* <ul>
        {users.map((usuario, index) => (
          <li key={index}>{usuario.email}</li>
        ))}
      </ul>
      <Pagination 
        page={page} 
        onPageChange={(newPage) => setPage(newPage)}
      /> */}

      <form id="formSignup" onSubtmit={handleSubmit}>
        <PhotoInput photo={photo} onPhotoChange={(newPhoto) => setPhoto(newPhoto)} />
            <span id="userErrorSignup" className="error">Usuário incorreto</span>
            <input id="userSignup" type="text" placeholder="Digite seu usuário"/>
            <span id="passwordErrorSignup" className="error">Senha incorreta</span>
            <input id="passwordSignup" type="password" placeholder="Digite sua senha"/>
        
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

    </div>
  );
}

export default SignUp;