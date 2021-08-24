import axios from 'axios'
import React, { useState,useRef } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { store, setStep,setStepForm } from '../../../reducers/index'
import { useStore, useSelector } from 'react-redux'

const ld = require('lodash');
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
 
  const { register, handleSubmit, watch,getValues, formState: { errors } } = useForm();
  const [signupError, setSignUphError] = useState(null)
  const [signupErrorM, setSignUphErrorM] = useState(null)
  const [success, setSuccess] = useState(null)
  const translate = useSelector((state) => state.translate)

  const password = useRef({});
  password.current = watch("password", "");

  
  let step_data = {
    
    costo_por_sesion: '',
    
  }


console.log("step data ", step_data)

  let history = useHistory()
  const onChange = (value) => {
    //console.log("Captcha value:", value);
  }

  const onSubmit = (data) => {
    console.log('step2', data)
    props.updateWizard(data)

  }

  const onSubmit2 = (data) => {

//console.log(data);
//axios.defaults.baseURL = 'http://healtymind.iwebsuite.com:5000'
//axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT
axios.defaults.baseURL = 'http://localhost:5000'
    axios
      .post('/api/auth/register', { ...data, confirm_success_url: '/' })
      .then((response) => {
        if (response.data.result === 'error') {
          setSuccess(false)
          setSignUphError(true)
          setSignUphErrorM(response.data.msg)

        } else {
          setSuccess(true)
        
        }
      })
      .catch((error) => {
        if (error.response) {
          //console.log(error.response.data)
          setSignUphError(error.response.data.errors)
        }
      })
  }

  const redirectLogin = (e) => {

    
    setTimeout(() => {
    //window.location.href = '/login'

},5000)
  }
  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
    }
  }

  return (
    <React.Fragment>
      <div className="sign_form">
      <h2 className="fs-title">Certificados y testimonios</h2>
       
        
          <div>
            <div className="error-message danger">
              {signupError && signupErrorM}
            </div>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
   
    <div className="row">
      <div className="col-6">
              
                <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
               
                <div className="row">
                  <div className="col-12">

                  <h5>Cedula</h5>
                  <div className='custom-file'>
                  <input
                    className=" custom-file-input"
                    type="file"
                    name="cedula"
                    defaultValue={step_data.cedula}
                    {...register('cedula',{
                      required: "Required",
                     
                    })}
                  />
                  <label className="custom-file-label" for="exampleInputFile">
                       Seleccionar Archivo
                  </label>
                  </div>
                  </div>
                   {props.edit && (
                     <div className="file_container">
                       <Link to={ {pathname: props.getStore.cedula }} target="_blank">View file</Link>
                       
                     </div>
                   )} 

                  <div className="cntErr">
                  {errors.cedula && <span className="error-message">Cargar cedula</span>}
                </div>

                  </div>
                          
                </div>
                 
                </div>  

                <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
               
                <div className="row">
                  <div className="col-12">

                  <h5>Otros (diploma, certificación, otros) opcional</h5>
                  <div className='custom-file'>
                  <input
                    className=" custom-file-input"
                    type="file"
                    name="otros"
                    defaultValue={step_data.otros}
                    {...register('otros',{
                      required: "Required",
                     
                    })}
                  />
                  <label className="custom-file-label" for="exampleInputFile">
                       Seleccionar Archivo
                    </label>
                  </div>
                  </div>
                  {props.edit && (
                     <div className="file_container">
                       <Link to={ {pathname: props.getStore.otros }} target="_blank">View file</Link>
                       
                     </div>
                   )} 
                  <div className="cntErr">
                  {errors.otros && <span className="error-message">Debes subir un archivo</span>}
                  </div>
                  </div>
                 
                </div>
                 
                </div>  

                <div className="ui focus mt-15 testimonio">
                <div className="ui left icon swdh95">
               
                <div className="row">
                  <div className="col-12">

                  <h5>Testimonios</h5>
                <div className="row">
                  <div className="mb-3">
                    <textarea className="form-control" rows="2"></textarea>
                </div>
                  </div>
                  <div className="cntErr">
                  
                  </div>

                  </div>

                  </div>

                </div>
                 
                </div>  

      </div>

       <div className="col-6">

         
       <div className="ui focus ">
                <div className="ui left icon form-group swdh95">
               
                
                <div className="row">
                  <div className="col-12">
                  <h5>Tarjeta Profesional</h5>

                  <div className='custom-file'>
                  <input
                    className=" custom-file-input"
                    type="file"
                    name="tarjeta_profesional"
                    defaultValue={step_data.tarjeta_profesional}
                    {...register('tarjeta_profesional',{
                      required: "Required",
                     
                    })}
                  />
                  <label className="custom-file-label" for="exampleInputFile">
                       Seleccionar Archivo
                  </label>
                  </div>
                  </div>
                  {props.edit && (
                     <div className="file_container">
                       <Link to={ {pathname: props.getStore.tarjeta_profesional }} target="_blank">View file</Link>
                       
                     </div>
                   )} 
                  <div className="cntErr">
                  {errors.tarjeta_profesional && <span className="error-message">Cargar tarjeta profesional</span>}
                </div>
                  </div>
                </div>
                 
                </div>

        
        
                <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
               
                <div className="row">
                  <div className="col-12">

                  <h5>Foto</h5>
                  <div className='custom-file'>
                  <input
                    className=" custom-file-input "
                    type="file"
                    name="foto"
                    defaultValue={step_data.foto}
                    {...register('foto',{
                      required: "Required",
                     
                    })}
                  />
                     <label className="custom-file-label" for="exampleInputFile">
                       Seleccionar Archivo
                    </label>
                  </div>
                 
                  </div>
                  </div >
                  {props.edit && (
                     <div className="file_container">
                       <Link to={ {pathname: props.getStore.foto }} target="_blank">View file</Link>
                       
                     </div>
                   )} 
                  <div className="cntErr">
                  {errors.foto && <span className="error-message">Debes subir un archivo</span>}
                  </div>
                </div>
                 
                </div> 

              <div className="ui focus mt-15 testimonio2">
                <div className="ui left icon form-group swdh95">
                <input
                    className=" form-control"
                    type="text"
                    name="costo_por_sesion"
                    defaultValue={step_data.video}
                    
                    placeholder="Youtube Video URL"
                    {...register('video',{
                      required: "Required",
                     
                    })}
                  />
               
                </div>
                <div >
            
                </div>

              </div> 




              </div> 

      </div>

      {props.edit ? (
    <div className="row">
      <div className="col-6">
      
      </div>
      <div className="col-6">
        <input type="submit" name="register" className="next action-button float-right"  value="Save information" />
      </div></div>
   ):(  
     <div className="row">
      <div className="col-6">
      <input type="button" name="previous" className="previous action-button-previous float-left" value="Prev" onClick={()=>{store.dispatch(setStep(2))}}/> 
      </div>
      <div className="col-6">
        <input type="submit" name="register" className="next action-button float-right"  value="Register" />
      </div></div>
      
      )}              

    
  
      </form>
          </div>
      

      </div>
    </React.Fragment>
  )
}
