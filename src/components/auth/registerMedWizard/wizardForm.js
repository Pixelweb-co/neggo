import React, { useState,useRef } from 'react'
import Step1 from './Step1';
// import Step2 from './Step2';
import Step3 from './Step3'
import Step4 from './Step4'
import StepLayout from './StepLayout'
import { store, setStep,setStepForm,fetchProgress,fetchSuccess } from '../../../reducers/index'
import { useStore, useSelector } from 'react-redux'
import axios from 'axios'
import env from "react-dotenv";

function WizardForm(props) {

    const [formgeneral, setForm] = useState(null)
    const [signupError, setSignUphError] = useState(null)
    const [signupErrorM, setSignUphErrorM] = useState(null)
    const [success, setSuccess] = useState(null)

    let step = useSelector((store) => store.step)   
    const step1_form =  useSelector((store) => store.step1_form) 
    // const step2_form =  useSelector((store) => store.step2_form) 

   

    let wizard_data = {
            }


    const update_wizard = async (data,next_step)=>{

       

        if(step === 3){
            console.log('step de envio ',step)
            console.log("form pr2 ",data)

        let form_data = {...step1_form,...step2_form}    
       
        console.log("form ct12 ",data)


        const formData = new FormData();


        formData.append("form", JSON.stringify(form_data));  
        formData.append("tajeta_profesional", data.tarjeta_profesional[0]); 
        formData.append("cedula", data.cedula[0]);
        formData.append("foto_testimonio", data.foto[0]);   
        formData.append("otros", data.otros[0]);      
        


        store.dispatch(setStep(4))
        axios.defaults.baseURL = env.API_URL        
await axios
  .post('/api/auth/register', formData)
  .then((response) => {
    if (response.data.result === 'error') {
      setSuccess(false)
      setSignUphError(true)
      setSignUphErrorM(response.data.msg)

    } else {
      setSuccess(true)
      window.localStorage.setItem('userId', response.data.userId)
      fetchSuccess()
    
    }
  })
  .catch((error) => {
    if (error.response) {
      //console.log(error.response.data)
      setSignUphError(error.response.data.errors)
    }
  })


        }
        
    }

    
    const getStore = ()=>{
        return wizard_data;
    }





    return (
        <div>
        
        
        <StepLayout actualStep={step}> 
        
        {step===1 ? <Step1 edit={false} updateWizard={update_wizard} getStore={step1_form} /> : <span></span>}
        {/* {step===2 ? <Step2 edit={false} updateWizard={update_wizard} getStore={step2_form} /> : <span></span>} */}
        {step===3 ? <Step3 edit={false} updateWizard={update_wizard}   /> : <span></span>}
        {step===4 ? <Step4 updateWizard={update_wizard} /> : <span></span>}
        </StepLayout>

        <div>
            
        
        
        
        </div>    

        </div>
    );
}

export default WizardForm;