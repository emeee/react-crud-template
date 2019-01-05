import axios from 'axios'

export const login = (username, password) => {
  return axios.post('/login', {
    username: username,
    password: password
  });
}

export const getAllUsers = () => {
  return axios.get('/user/all');
}