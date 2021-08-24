import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import { Provider } from 'react-redux'
import { store } from './reducers/index'
import React, { useEffect, useState } from 'react'
import Interceptor from './helpers/Interceptors'
 
function App() {
  window.store = store
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    //console.log('app entry point')
    store.subscribe(() => {
      const loadingState = store.getState().loading
     // setLoading(loadingState)
    })
    new Interceptor(store)
  }, [])

  return (
    <div> 
      <Provider store={store}>
      
        <AppRouter />
      
      </Provider>
    </div>  
  );
}

export default App;
