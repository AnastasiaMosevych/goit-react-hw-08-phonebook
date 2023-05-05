import axios from "axios"; 

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
})

export const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token
}

export const deleteToken = () => {
    delete instance.defaults.headers.common['Authorization']
}

export const signUp = async (body) => {
    const { data } = await instance.post('/users/signup', body)
    setToken(`Bearer ${data.token}`)
    return data
}

export const login = async (body) => {
    const { data } = await instance.post('/users/login', body)
    setToken(`Bearer ${data.token}`)
    return data
}

export const getProfile = async () => {
    const { data } = await instance.get('/users/current')
    return data
}

export const fetchContactsApi = async () => {
  try {
    const result = await instance.get('/contacts')
    return result
  } catch (e) {
    return Promise.reject(e.message)
  }
}  

export const addContactApi = async (newData) => {
  try {
    const result = await instance.post('/contacts', newData)
    return result.data;
  } catch (e) {
    return Promise.reject(e.message)
  }
  
}

export const deleteContactApi = async (contactId) => {
  try {
    const result = await instance.delete(`/contacts/${contactId}`)
    return result.data
  } catch (e) {
    return Promise.reject(e.message)
  }
}
