import axios from 'axios'
import { store, setUserData} from '../reducers/index'

class AuthManager {
  setToken(sessionData, userData) {
    console.log('ulog ', userData)
   // axios.defaults.headers.common = sessionData

   store.dispatch(setUserData(userData))
   
    window.localStorage.setItem('auth-data', JSON.stringify(sessionData))
    window.localStorage.setItem('userId', userData.id)  
    window.localStorage.setItem('user', JSON.stringify(userData))  
    //console.log('--set token---')
  }

  hasToken(cb) {
    const sessionData = JSON.parse(window.localStorage.getItem('auth-data'))
    if (sessionData) {
    //  axios.defaults.headers.common = sessionData
      if (cb) cb()
      return true
    }
  }

  hasLogeedin(){

    if(window.localStorage.getItem('userId')){
      console.log("logueado")
      return true 

    }else{

      return false
    }

  }

  logout() {
    store.dispatch(setUserData({}))
    
    window.localStorage.removeItem('auth-data')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('user')
  }
}

const instance = new AuthManager()

export default instance
