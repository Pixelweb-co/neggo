import axios from 'axios'
import React, { useState,useRef,useEffect } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert'
import { store, setStep,setStepForm } from '../../../reducers/index'
import { useStore, useSelector } from 'react-redux'


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
 
  const { register, handleSubmit,setValue, watch,getValues, formState: { errors } } = useForm();
  const [signupError, setSignUphError] = useState(null)
  const [signupErrorM, setSignUphErrorM] = useState(null)
  const [success, setSuccess] = useState(null)
  const translate = useSelector((state) => state.translate)
  const [photo, setPhoto] = useState("assets/images/avatar-default.jpg")
  const password = useRef({});
  password.current = watch("password", "");

  console.log("frmRdx ",props.getStore)

  console.log("nro p ", Object.entries(props.getStore).length)



let step_data = {}

if(Object.entries(props.getStore).length > 0){
  step_data = props.getStore

}else{

  step_data = {
    
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    tipo_documento: '',
    documento_identidad: '',
    resumen_personal: '',
     direccion: '',
     celular: '',
     password: '',
     re_password: '',
     foto: "assets/images/avatar-default.jpg",
     email: ''
  }


console.log("step data ", step_data)

}

  let history = useHistory()
  const onChange = (value) => {
    //console.log("Captcha value:", value);
  }

  const onSubmit = (data) => {
    console.log('step1', data)
    let picture = {'user_picture' : photo }
    data = {...data,...picture}

    store.dispatch(setStepForm(data))
    //props.updateWizard(data)
    store.dispatch(setStep(2))

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


  const readURL = (input) => {
    
    
    if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
       
           setPhoto(e.target.result)
           setValue('foto', e.target.result)
           console.log("ft ",photo)
           


        };

        reader.readAsDataURL(input.target.files[0]);
    }
}

useEffect(() => {
  window.jQuery(function ($) {
    $('#profile_image').attr('src', step_data.foto)
  })
}, [])


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
      <h2 className="fs-title">Mi información personal</h2>
       
        
          <div>
            <div className="error-message danger">
              {signupError && signupErrorM}
            </div>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
   <div className="row">
     <div className="col-12">
     <div className="ui focus mt-15 mb-4">
               <div className="text-center">

                      <img src={photo} width="200" height="200" id="profile_image"/>

               </div>
               
               
               <label htmlFor="formFile" className="form-label">Default file input example</label>
               <div className="custom-file">
                <input className="custom-file-input"
                 name="foto1" type="file" 
                 id="formFile" 
                 onChange={readURL}
                 />
                <label className="custom-file-label" for="exampleInputFile">
                       Seleccionar Archivo
                  </label>
               </div>
              </div>
            </div>   
               <div className="cntErr">
                 {errors.foto1 && <span className="error-message">Cargar foto de perfil</span>}
                </div>
     
        </div> 
    <div className="row">
      <div className="col-6">
      
 
              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                <input 
                {...register('profile_photo')}
                type="hidden" name="profile_photo" defaultValue={step_data.foto}/>

<input 
                {...register('rol')}
                type="hidden" name="rol" value="medical"/>
                  
                  <input
                    className=" form-control"
                    type="text"
                    name="primer_nombre"
                    defaultValue={step_data.primer_nombre}
                    id="validationServerUsername"
                    placeholder="Primer nombre"
                    {...register('primer_nombre',{
                      required: "Required",
                      maxLength: 40
                    })}
                  />

                </div>
                <div className="cntErr">
                {errors.primer_nombre && <span className="error-message">Primer nombre es requerido</span>}
                </div>

              </div> 

              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
               
                  
                  <input
                    className=" form-control"
                    type="text"
                    name="primer_apellido"
                    
                    defaultValue={step_data.primer_apellido}
                    placeholder="Primer apellido"
                    {...register('primer_apellido',{
                      required: "Required",
                      maxLength: 20
                    })}
                  />
                 
                </div>
                <div className="cntErr">
                {errors.primer_apellido && <span className="error-message">Primer apellido es requerido</span>}
                </div>
              </div>
              <div className="ui focus mt-15 mb-4">
                <div className="ui left icon swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={step_data.email}
                    placeholder='Email'
                    {...register('email',{
                      required: 'Required',
                      
                    })}
                  /> 
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div className="cntErr" >
                {errors.email && <span className="error-message">El email es requerido</span>}
                </div>
              </div>      
              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                
               <select placeholder="Seleccione el tipo de documento" defaultValue={step_data.tipo_documento}  className="form-control" name="tipo_documento"  {...register('tipo_documento',{
                      required: "Required"                     
                    })}>
                      <option value="0">Seleccione el tipo de documento</option>
                      <option value="C.C">C.C</option>
                      <option value="C.E">C.E</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div className="cntErr" >
                {errors.tipo_documento && <span className="error-message">Tipo de documento es requerido</span>}
                </div>  
              </div>

           

              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                  <input
                    className=" form-control"
                    type="password"
                    name="password"
                    id="password"
                    
                    placeholder="Contraseña"
                    {...register('password',{
                      required: "Required"
                    })}
                    onKeyUp={(e) => handleKeyPress(e.target.value)}
                  />
                  <i className="uil uil-key-skeleton-alt icon icon2"></i>
                </div>
                <div className="cntErr">
                {errors.password && <span className="error-message">Digite contraseña</span>}
                </div>
              </div>
              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                  <input
                    className=" form-control"
                    type="password"
                    name="re_password"
                    id="re_password"
                    maxLength="20"
                    placeholder="Repetir Contraseña"
                    {...register("re_password", {
                      required: "Debes confirmar la contraseña!",
                      validate: {
                        matchesPreviousPassword: (value) => {
                          const { password } = getValues();
                          console.log("confirmatio "+value+' - ', password)
                          return password === value || "Las contraseñas no coinciden!";
                        }
                      }
                    })}
                   
                  />
                  <i className="uil uil-key-skeleton-alt icon icon2"></i>
                </div>
                <div className="cntErr" >
                {errors.re_password && (<span className="error-message">{errors.re_password.message}</span>)}
              
                </div>
              </div>

              {/* <div className="ui focus mt-15 captcha_container">

                 <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onChange}
                /> 
                  </div>
              <button className="login-btn  btn btn-primary btn-block py-2 rounded-pill" type="submit">
                SIGN UP
              </button> */}
           


      </div>

       <div className="col-6">
       
       <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                                 
                  <input
                    className=" form-control"
                    type="text"
                    name="segundo_nombre"
                    
                    defaultValue={step_data.segundo_nombre} 
                    placeholder="Segundo nombre"
                    {...register('segundo_nombre',{
                      maxLength: 40
                    })}
                  />
                 
                </div>
                <div className="cntErr">
                
                </div>
                <div >
               
                </div>
                
              </div>

              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                          
                  <input
                    className=" form-control"
                    type="text"
                    name="segundo_apellido"
                    
                    defaultValue={step_data.segundo_apellido} 
                    placeholder="Segundo apellido"
                    {...register('segundo_apellido',{
                      required: "Required",
                      maxLength: 40
                    })}
                  />
                 
                </div>
                <div className="cntErr">
                
                </div>
                <div >
                
                </div>
                
              </div>

              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="documento_identidad"
                    defaultValue={step_data.documento_identidad} 
                    placeholder='Número de documento'
                    {...register('documento_identidad',{
                      required: 'Required'              
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div className="cntErr">
                {errors.documento_identidad && <span className="error-message">Número de documento es requerido</span>}
                </div>
              </div>

              
              <div className="ui focus mt-15">
                <div className="ui left icon swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="celular"
                    defaultValue={step_data.celular} 
                    placeholder='Número de celular'
                    {...register('celular',{
                      required: 'Required'
                      
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div className="cntErr" >
                {errors.celular && <span className="error-message">Número de celular es requerido</span>}
                </div>
              </div> 

              <div className="ui focus mt-10 ">
                <div className="ui left icon swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="direccion"
                    defaultValue={step_data.direccion} 
                    placeholder='Dirección'
                    {...register('direccion',{
                      required: 'Required'
                      
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div className="cntErr">
                {errors.direccion && <span className="error-message">Dirección es requerida </span>}
                </div>
              </div>  

            
             
              <div className="mb-3">
               <label htmlFor="exampleFormControlTextarea1" defaultValue={step_data.resumen_personal}  className="form-label">Resumen como persona (opcional)</label>
               <textarea className="form-control" rows="1"  {...register('resumen_personal',{
                      required: 'Required'
                      
                    })}></textarea>
              </div>

             

      </div>
    

    </div>
   
   
   {!props.edit ? (
    <div className="row">
      <div className="col-6">
      
      </div>
      <div className="col-6">
        <input type="submit" name="register" className="next action-button float-right"  value="Next" />
      </div></div>
   ):(<></>)}



      </form>
          </div>
      

       
      </div>
    </React.Fragment>
  )
}
