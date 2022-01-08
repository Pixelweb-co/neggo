import axios from 'axios'
import { fetchProgress, fetchSuccess, fetchFailure } from '../reducers/index'
import env from "react-dotenv";
axios.defaults.baseURL = process.env.REACT_APP_API_URL

class Interceptor {
  constructor(store) {
    // if (Interceptor._instance) {
    //   return Interceptor._instance
    // }
    // Interceptor._instance = this

    axios.interceptors.request.use(
      (config) => {
        store.dispatch(fetchProgress(false))
        return config
      },
      (error) => {
        store.dispatch(fetchFailure(error.response.data))
        return Promise.reject(error)
      }
    )

    axios.interceptors.response.use(
      (response) => {
        store.dispatch(fetchSuccess(response.data))
        return response
      },
      function (error) {
        store.dispatch(fetchFailure(error.response.data))
        return Promise.reject(error)
      }
    )

    axios.interceptors.response.use(undefined, (error) => {
      if (error.message === 'Network Error' && !error.response) {
        //do something
      }
      const { status, data, config } = error.response
      if (status === 404) {
        //do something
      }
      if (
        status === 400 &&
        config.method === 'get' &&
        data.errors.hasOwnProperty('id')
      ) {
        //do something
      }
      if (status === 401) {
        //do something
      }
      if (status === 500) {
        //do something
      }
      return Promise.reject(error)
    })
  }
}

export default Interceptor
