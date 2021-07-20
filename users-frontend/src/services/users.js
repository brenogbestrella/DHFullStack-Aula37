import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333"
});

const USERS_URL = "/users";

export async function getUsers(page) {
    const { data } = await api.get(USERS_URL, {
        params: {
            page,
            count: 2
        }
    });
    return data;
}