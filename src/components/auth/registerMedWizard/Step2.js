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
  const [lista_disponibilidad, setDisponibilidad] = useState([])
  const [success, setSuccess] = useState(null)


  const translate = useSelector((state) => state.translate)
  
  

  const [tiene_empresa_f, setTieneempresa] = useState(1)

  const password = useRef({});
  password.current = watch("password", "");

  

let step_data = {}

if(Object.entries(props.getStore).length > 0){
  step_data = props.getStore

}else{

  
  let step_data = {
    
    costo_por_sesion: '', 
    permitir_llamada_paciente : 'SI',
    tiene_empresa: 'SI'
    
  }

}


const is_selected = (field, valor_campo)=>{

  if(step_data.hasOwnProperty(field)){
    console.log("Campo busqueda ", step_data[field])
  let result =  step_data[field].find((val,index)=>{
    console.log("vl ",val)
    if(val == valor_campo){
      
      console.log("encontrado")
      return true
    }else{
      return false
    }

  });

  if(result){ return true }else{return false}

  }else{

    return false
  }

}


console.log("step data ", step_data)

  let history = useHistory()
  const onChange = (value) => {
    //console.log("Captcha value:", value);
  }


  const add_availity = (el)=>{
   

    setDisponibilidad([...lista_disponibilidad, {day:getValues('day_av'), from: getValues('from_time'), to: getValues('to_time')}])


  }

  const onSubmit = (data) => {
    console.clear()
    console.log('step2', data)
    step_data = data
    store.dispatch(setStepForm(data))
    //props.updateWizard(data)
    store.dispatch(setStep(3))

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

  const prev_step = (num)=>{
    props.back_step(num)
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
      <h2 className="fs-title">Preferencias</h2>
       
        
          <div>
            <div className="error-message danger">
              {signupError && signupErrorM}
            </div>
            <form autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
   
    <div className="row">
      <div className="col-6">
      
 
              

              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
               
               <h5>Prefiere pacientes </h5>
                <div className="row">
                  <div className="col-4">

                  <div className="funkyradio">
        <div className="funkyradio-warning">
            <input type="checkbox" name="prefiere_pacientes" id="checkbox1" defaultChecked={(is_selected('prefiere_pacientes', 'adulto_mayor'))} value='adulto_mayor' {...register('prefiere_pacientes')}/>
            <label htmlFor="checkbox1">Adulto Mayor</label>
        </div>

        </div>

        <div className="funkyradio">
        <div className="funkyradio-warning">
            <input type="checkbox" name="prefiere_pacientes" id="checkbox14" defaultChecked={(is_selected('prefiere_pacientes', 'hombre'))}  value='hombre' {...register('prefiere_pacientes')}/>
            <label htmlFor="checkbox14">Hombre</label>
        </div>

        </div>

                  </div>

                  <div className="col-4">
                  <div className="funkyradio">
                  <div className="funkyradio-warning">
            <input type="checkbox" name="prefiere_pacientes" id="checkbox24" defaultChecked={(is_selected('prefiere_pacientes', 'ninos'))} value='ninos' {...register('prefiere_pacientes')}/>
            <label htmlFor="checkbox24">Niños</label>
        </div>


        </div>

        <div className="funkyradio">
                  <div className="funkyradio-warning">
            <input type="checkbox" name="prefiere_pacientes" id="checkbox27" defaultChecked={(is_selected('prefiere_pacientes', 'grupal'))} value='grupal' {...register('prefiere_pacientes')}/>
            <label htmlFor="checkbox27">Grupal</label>
        </div>


        </div>

                  </div>

                            <div className="col-4">
                  <div className="funkyradio">
                  <div className="funkyradio-warning">
            <input type="checkbox" name="prefiere_pacientes" id="checkbox28" defaultChecked={(is_selected('prefiere_pacientes', 'mujer'))} value='mujer' {...register('prefiere_pacientes')}/>
            <label htmlFor="checkbox28">Mujer</label>
        </div>
        </div>

        <div className="funkyradio">
                  <div className="funkyradio-warning">
            <input type="checkbox" name="prefiere_pacientes" id="checkbox26" defaultChecked={(is_selected('prefiere_pacientes', 'todos'))} value='todos' {...register('prefiere_pacientes')}/>
            <label htmlFor="checkbox26">Todos</label>
        </div>
        </div>

                  </div> 

                </div>
                 
                </div>
                <div >
               
                </div>

              </div> 

              <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
               
               <h5>Permitir llamadas de pacientes? </h5>
                <div className="row">
                  <div className="col-6">

                  <div className="funkyradio">
       
       
       

        <div className="funkyradio-warning">
            <input type="radio" name="permitir_llamada_paciente" id="idcampo3" defaultChecked={(step_data.permitir_llamada_paciente === 'SI')} value="SI"  {...register('permitir_llamada_paciente')}/>
            <label htmlFor="idcampo3">SI</label>
        </div>


        

        </div>

        

                  </div>

                  <div className="col-6">
                  <div className="funkyradio">
                

        <div className="funkyradio-warning">
            <input type="radio" name="permitir_llamada_paciente" id="idcampo4" defaultChecked={(step_data.permitir_llamada_paciente === 'NO')}  value="NO"  {...register('permitir_llamada_paciente')}/>
            <label htmlFor="idcampo4">No</label>
        </div>


        </div>

       


        </div>

                  </div>

                          

                </div>
                 
                </div>
              
                <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
               
               <h5>Permitir emails de pacientes? </h5>
                <div className="row">
                  <div className="col-6">

             <div className="funkyradio"> 

        <div className="funkyradio-warning">
            <input type="radio" name="permitir_email_paciente" id="idcampo3p" defaultChecked={(step_data.permitir_email_paciente === 'SI')}  value="SI"  {...register('permitir_email_paciente')}/>
            <label htmlFor="idcampo3p">SI</label>
        </div>
        
        </div>

                  </div>

                  <div className="col-6">
                  <div className="funkyradio">
                

        <div className="funkyradio-warning">
            <input type="radio" name="permitir_email_paciente" id="idcampo4b" defaultChecked={(step_data.permitir_email_paciente === 'NO')}  value="NO"  {...register('permitir_email_paciente')}/>
            <label htmlFor="idcampo4b">No</label>
        </div>


        </div>

       


        </div>

                  </div>

                          

                </div>
                 
                </div>  


      </div>

       <div className="col-6">
       

                <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
               
               <h5>Trabaja para/ tiene empresa?  </h5>
                <div className="row">
                  <div className="col-6">

             <div className="funkyradio"> 

        <div className="funkyradio-warning">
            <input type="radio" name="tiene_empresa" id="idcampo3a" defaultChecked={(step_data.tiene_empresa === 'SI')}  value="SI"   {...register('tiene_empresa')} onChange={()=>{setTieneempresa(1)}}/>
            <label htmlFor="idcampo3a">SI</label>
        </div>
        
        </div>

                  </div>

                  <div className="col-6">
                  <div className="funkyradio">
                

        <div className="funkyradio-warning">
            <input type="radio" name="tiene_empresa" id="idcampo4a" defaultChecked={(step_data.tiene_empresa === 'NO')}   value="NO" {...register('tiene_empresa')} onChange={()=>{setTieneempresa(0)}}/>
            <label htmlFor="idcampo4a">No</label>
        </div>


        </div>

       


        </div>

                  </div>
                
                <div className={(tiene_empresa_f ===  1 ? "row" : "row d-none")} >


                <input
                    className=" form-control"
                    type="text"
                    name="razon_social"
                    defaultValue={step_data.razon_social}
                    
                    placeholder="Razon social"
                    {...register('razon_social',{
                    
                      maxLength: 40
                    })}
                  />
                  <div className="cntErr" >
                {errors.razon_social && <span className="error-message">El campo es requerido</span>}
                </div>



                    <input
                    className=" form-control"
                    type="number"
                    name="nit_empresa"
                    defaultValue={step_data.nit_empresa}
                    
                    placeholder="Nit"
                    {...register('nit_empresa',{
                    
                      maxLength: 10
                    })}
                  />

                    <input
                    className=" form-control"
                    type="text"
                    name="direccion_empresa"
                    defaultValue={step_data.direccion_empresa}
                    
                    placeholder="Dirección empresa"
                    {...register('direccion_empresa',{
                     
                      maxLength: 20
                    })}
                  />


                    <input
                    className=" form-control"
                    type="number"
                    name="telefono_empresa"
                    defaultValue={step_data.telefono_empresa}
                    
                    placeholder="Teléfono empresa"
                    {...register('telefono_empresa',{
                     
                      maxLength: 10
                    })}
                  />
                </div>
                        
                </div>
                 
                </div>  
                
                <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">
              
                  <input
                    className=" form-control"
                    type="text"
                    name="costo_por_sesion"
                    defaultValue={step_data.costo_por_sesion}
                    
                    placeholder="Costo por Sesion"
                    {...register('costo_por_sesion',{
                      required: "Required",
                     
                    })}
                  />
                 
                </div>
                <div >
                {errors.primer_nombre && <span className="error-message">Este campo es requerido</span>}
                </div>

              </div> 


              </div> 

      </div>

      
      <div className="ui focus mt-15">
                <div className="ui left icon form-group swdh95">  

                <h5>Disponibilidad</h5>
                <div className="row">
                <div className="col-12">

                <div class="form-group registration-date">
               
            	<div class="input-group disponibilidad_form">
            		<span class="input-group-addon" ><span  aria-hidden="true">Day</span></span>
            		
                    <select className="form-control" name="day_av" {...register('day_av')} >

                      <option value="Lunes">Lunes</option>
                      <option value="Martes">Martes</option>
                      <option value="Miercoles">Miercoles</option>
                      <option value="Jueves">Jueves</option>
                      <option value="Viernes">Viernes</option>
                      <option value="Sabado">Sabado</option>
                      <option value="Domingo">Domingo</option>


                    </select>

            		<span class="input-group-addon" ><span aria-hidden="true">from</span></span>
            		<input class="form-control" name="from_time" {...register('from_time')} type="time"/>
            		<span class="input-group-addon" ><span  aria-hidden="true">To</span></span>
            		<input class="form-control" name="to_time"  {...register('to_time')}  type="time"/>
            		<span class="input-group-btn">
            	    	<button class="btn btn-success" type="button" onClick={()=>{add_availity()}}>Add</button>
                    	
                    </span>
            	</div>
            
            <div class="container pb-15 mt-15 table_disp" >
            
            <table className="table">
            <tr>
            <th>Day</th>
            <th>From</th>
            <th>To</th>
            <th>Remove</th>
            </tr>
            
            {lista_disponibilidad && lista_disponibilidad.map(function(item, index){
              

             return (
            <tr>
            <td>{item.day}</td>
            <td>{item.from}</td>
            <td>{item.to}</td>
            <td><button class="btn btn-danger">Remove</button></td>
            </tr>
            )})}
            
           
            
            </table>
            
            </div>
            </div>                        

            </div>
            </div>
          </div>
        </div>
        {!props.edit ? (
   

    <div className="row">
      <div className="col-6">
      <button type="button"  className="previous action-button-previous float-left" onClick={()=>{store.dispatch(setStep(1))}}>Prev</button>
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
