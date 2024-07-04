import axios from "axios"
import { useState } from "react"

const api = axios.create()
const baseUrl = 'http://localhost:3001/products'

api.interceptors.request.use( config => {
    // Promise: objet javascript. Une promesse représente une valeur qui peut être disponible maintenant, 
    // dans le future ou jamais. La fonction de rappelle fournie 'resolve' et sera appelée losque la promesse est résolue
    return new Promise( (resolve) => setTimeout( () => resolve(config), 3000)) // Délai de 3s
})

export const useAxios = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const get = () => {
    setLoading(true)
    return api.get(baseUrl)
        .then((response) => {
            setLoading(false)
            return response.data
        })
        .catch( err => {
            setLoading(false)
            setError(err)
            throw err;
        })
  }

  const post = (data) => {
    setLoading(true)
    return api.post(baseUrl, data)
        .then( (response) => {
            setLoading(false)
            return response.data
        })
        .catch( (err) => {
            setLoading(false);
            setError(err);
            throw err;
        })
  }

  const put = (id, data) => {
    setLoading(true)

    const url = `${baseUrl}/${id}`

    return api.put(url, data)
        .then( (response) => {
            setLoading(false)
            return response.data
        })
        .catch( (err) => {
            setLoading(false)
            setError(err)
            throw err;
        })
  }

  const remove = (id) => {
    setLoading(true)

    const url = `${baseUrl}/${id}`

    return api.delete(url)
        .then( (response) => {
            setLoading(false)
            return response.data
        })
        .catch( (err) => {
            setLoading(false)
            setError(err)
            throw err;
        })
  }

  return {
    loading,
    error,
    get,
    post,
    put,
    remove
  }

}