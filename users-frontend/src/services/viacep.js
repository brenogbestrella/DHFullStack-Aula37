import axios from "axios";

const URL = "https://viacep.com.br/ws/";

export async function getCepData(cep) {
    const { data } = await axios.get(`${URL}${cep}/json/`);
    return data;
}