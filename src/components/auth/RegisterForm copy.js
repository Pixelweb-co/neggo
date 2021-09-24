import axios from 'axios'
import React, { useState,useRef } from 'react'
import AuthManager from '../../helpers/AuthManager'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert';
import env from "react-dotenv";



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
 
  const { register, handleSubmit, watch,getValues, formState: { errors } } = useForm();
  const [signupError, setSignUphError] = useState(null)
  const [signupErrorM, setSignUphErrorM] = useState(null)
  const [success, setSuccess] = useState(null)
  const translate = useSelector((state) => state.translate)

  const password = useRef({});
  password.current = watch("password", "");

  let history = useHistory()
  const onChange = (value) => {
    //console.log("Captcha value:", value);
  }

  const onSubmit = (data) => {

    const formData = new FormData();

    formData.append("form", JSON.stringify(data));

//console.log(data);
//axios.defaults.baseURL = 'http://healtymind.iwebsuite.com:5000'
//axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT
axios.defaults.baseURL = env.API_URL
    axios
      .post('/api/auth/register', formData)
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
        <h2>Welcome to HealtyMind</h2>
        <p>Register Form</p>

        
          <div>
            <div className="error-message danger">
              {signupError && signupErrorM}
            </div>

            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                <input 
                {...register('rol')}
                type="hidden" name="rol" value="client"/>
                  
                  <input
                    className=" form-control"
                    type="text"
                    name="primer_nombre"
                    id="name"
                    
                    placeholder="Primer nombre"
                    {...register('primer_nombre',{
                      required: "Required",
                      maxLength: 40
                    })}
                  />
                 
                </div>
                <div >
                {errors.primer_nombre && <span className="error-message">Este campo es requerido</span>}
                </div>

              </div>


              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                                 
                  <input
                    className=" form-control"
                    type="text"
                    name="segundo_nombre"
                    id="name"
                    
                    placeholder="Segundo nombre"
                    {...register('segundo_nombre',{
                      maxLength: 40
                    })}
                  />
                 
                </div>
                <div >
                {errors.segundo_nombre && <span className="error-message">Este campo es requerido</span>}
                </div>
                
              </div>

              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
               
                  
                  <input
                    className=" form-control"
                    type="text"
                    name="primer_apellido"
                    id="name"
                    
                    placeholder="Primer apellido"
                    {...register('primer_apellido',{
                      required: "Required",
                      maxLength: 40
                    })}
                  />
                 
                </div>
                <div >
                {errors.primer_apellido && <span className="error-message">Este campo es requerido</span>}
                </div>
                
              </div>

              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                          
                  <input
                    className=" form-control"
                    type="text"
                    name="segundo_apellido"
                    id="name"
                    
                    placeholder="Segundo apellido"
                    {...register('segundo_apellido',{
                      required: "Required",
                      maxLength: 40
                    })}
                  />
                 
                </div>
                <div >
                {errors.segundo_apellido && <span className="error-message">Este campo es requerido</span>}
                </div>
                
              </div>

              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                
                  
                    <select placeholder="Seleccione el tipo de documento" className="form-control" name="tipo_documento"  {...register('tipo_documento',{
                      required: "Required"                     
                    })}>
                      <option value="0">Seleccione el tipo de documento</option>
                      <option value="CC">CC</option>
                      <option value="Pasaporte">Pasaporte</option>

                    </select>

                  
                 
                </div>
                <div >
                {errors.tipo_documento && <span className="error-message">Este campo es requerido</span>}
                </div>
                
              </div>
              
              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="documento_identidad"
                    
                    placeholder='Número de documento'
                    {...register('documento_identidad',{
                      required: 'Required'              
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div >
                {errors.documento_identidad && <span className="error-message">Este campo es requerido</span>}
                </div>
              </div>

              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="celular"
                    
                    placeholder='Número de celular'
                    {...register('celular',{
                      required: 'Required'
                      
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div >
                {errors.celular && <span className="error-message">Este campo es requerido</span>}
                </div>
              </div>       
              
              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="direccion"
                    
                    placeholder='Dirección'
                    {...register('direccion',{
                      required: 'Required'
                      
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div >
                {errors.direccion && <span className="error-message">Este campo es requerido</span>}
                </div>
              </div>    
              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                  <input
                    className=" form-control"
                    type="text"
                    name="email"
                    id="email"
                    placeholder='Email'
                    {...register('email',{
                      required: 'Required',
                      
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div >
                {errors.email && <span className="error-message">Este campo es requerido</span>}
                </div>
              </div>

              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                  <input
                    className=" form-control"
                    type="password"
                    name="password"
                    id="password"
                    
                    placeholder="Password"
                    {...register('password',{
                      required: "Required"
                    })}
                    onKeyUp={(e) => handleKeyPress(e.target.value)}
                  />
                  <i className="uil uil-key-skeleton-alt icon icon2"></i>
                </div>
                <div >
                {errors.password && <span className="error-message">Este campo es requerido</span>}
                </div>
              </div>
              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
                  <input
                    className=" form-control"
                    type="password"
                    name="re_password"
                    id="re_password"
                    maxLength="20"
                    placeholder="Retype password"
                    {...register("re_password", {
                      required: "Debes confirmar el password!",
                      validate: {
                        matchesPreviousPassword: (value) => {
                          const { password } = getValues();
                          console.log("confirmatio "+value+' - ', password)
                          return password === value || "Passwords no coinciden!";
                        }
                      }
                    })}
                   
                  />
                  <i className="uil uil-key-skeleton-alt icon icon2"></i>
                </div>
                <div >
                {errors.re_password && (<span className="error-message">{errors.re_password.message}</span>)}
              
                </div>
              </div>

              <div className="ui focus mt-15 captcha_container">

                  {/* <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onChange}
                /> */}
                  </div>
              <button className="login-btn  btn btn-primary btn-block py-2 rounded-pill" type="submit">
                SIGN UP
              </button>
            </form>
          </div>
        {success ? (
          
          <SweetAlert success title="Healty Mind" onConfirm={redirectLogin()}>
              <h4>Gracias por registrarte!</h4>
              <p>Hemos enviado un email con el enlace para validar su cuenta.</p>
          </SweetAlert>


        ):(<></>)}

        <p className="sgntrm145">
          Service Terms
          <Link to="/terms-conditions">Read Service terms</Link>
        </p>

        <p className="mb-0 mt-30 hvsng145">
          Have account?
          <Link to="/login">SIGN IN</Link>
        </p>
      </div>
    </React.Fragment>
  )
}
