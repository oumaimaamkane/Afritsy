import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export async function login(email, password) {
    const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password
    });
    const { token, user } = response.data;
    return { token, user };
}

export function logout(token) {
    return axios.post(`${API_URL}/auth/logout`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        }
    });
}