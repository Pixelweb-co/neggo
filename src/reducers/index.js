import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  loading: false,
  error: false,
  count: 0,
  step:1,
  step1_form:{},
  step2_form:{},
  
} 

const rootSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchProgress(state) {
      state.loading = true
      // state.error = false
      // state.data = []
    },
    fetchSuccess(state, action) {
     // state.data = action.payload.data
      state.loading = false
    },
    fetchFailure(state, action) {
      state.error = action.payload.error
      state.loading = false
    },
    setUserData(state, action) {
       
      state.user = action.payload
      console.log("st ",state.user)
      
    },
    setStep(state, action) {
      
      state.step = action.payload
    },
    setStepForm(state, action) {
      
      if(state.step===1){
        state.step1_form = action.payload
      }
  
      if(state.step===2){
      state.step2_form = action.payload
       }
      }
  }
})

const store = configureStore({
  reducer: rootSlice.reducer
})

export const {
  fetchProgress,
  fetchSuccess,
  fetchFailure,
  setUserData,
  setStep,
  setStepForm  
} = rootSlice.actions

export default rootSlice.reducer
export { store }
// //console.log(state)
