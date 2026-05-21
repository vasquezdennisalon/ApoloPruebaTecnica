import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/users'
})

export const syncUsers = () => api.get('/sync')

export const getUsers = () => api.get('/')

export const getLicensedUsers = () => api.get('/licensed')

export const createUser = (data) =>
  api.post('/', data)

export const updateUser = (id, data) =>
  api.put(`/${id}`, data)

export const deleteUser = (id) =>
  api.delete(`/${id}`)