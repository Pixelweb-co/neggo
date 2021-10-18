import React, { useEffect, useState } from 'react'
import closebt from '../../assets/img/close.png'
import backbt from '../../assets/img/back.png'
import nextbt from '../../assets/img/next.png'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';
import AuthManager from '../../helpers/AuthManager'
import { useForm, ErrorMessage } from 'react-hook-form'
import PasswordStrengthBar from 'react-password-strength-bar';

const ForgotPassword = props => {
  const [stepActual,setStep] = useState(1)
  const [error_v, setError_v] = useState(null)
  const [error_v1, setError_v1] = useState(null)
  const [confirmSuccess, setConfirmC] = useState(false)

  const { register, errors, handleSubmit } = useForm()
  const [authError, setAuthError] = useState(null)
  const isLoading = useSelector((state) => state.loading)

  const [paswordR, setpws] = useState('')
  const [codeP, setCode] = useState('')
  const wordsScore = ['Insegura', 'Leve', 'Regular', 'Buena', 'Segura']
  const [score, changeScore] = useState(null)
  
  

  let history = useHistory()


  const showPws = (e)=> {
    var x = e.target;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  const confirm_code =  (code) => {
    var formc = new FormData();

    formc.append('code',code)
     axios.defaults.baseURL = process.env.REACT_APP_API_URL

     axios
    .post('/api/auth/forgot-password-sms-confirm', formc)
    .then((response) => {
   
    if(response.data.result=='success'){
      setConfirmC(true)
      return true  
      

    }else{
      setConfirmC(false)
     return false
    }


    })
    .catch((error) => {
      if (error.response) {
        setError_v("Error interno!")
        setConfirmC(false)
            return false
      }
    })
    
  }


  const validate_code = () =>{
window.jQuery(($)=>{

 const celular = $('[name=celular]').val()
var formc = new FormData();

      formc.append('data',celular)
      axios.defaults.baseURL = process.env.REACT_APP_API_URL

    axios
      .post('/api/auth/forgot-password-sms', formc)
      .then((response) => {
     
      if(response.data.result=='success'){

        
        

      }else{
        setAuthError([response.data.message])
      }


      })
      .catch((error) => {
        if (error.response) {
          //console.log(error.response.data)
          setAuthError(error.response.data.errors)
        }
      })


})
  }


  const forgotPass = ()=> {
    window.jQuery(($)=>{

      var form = new FormData();

      form.append('userDate',$('#step-1 input').val())
      form.append('codValidate',$('#step-2 input').val())
      form.append('codValidate2',$('#step-3 input').val())
      form.append('password',$('#step-4 input').val())
     
    

      axios.defaults.baseURL = process.env.REACT_APP_API_URL

    axios
      .post('/api/auth/forgot-password', form)
      .then((response) => {
     
        if(response.data.result=='success'){

        
        history.push('/login')

      }else{
        setAuthError([response.data.message])
      }


      })
      .catch((error) => {
        if (error.response) {
          //console.log(error.response.data)
          setAuthError(error.response.data.errors)
        }
      })

   })
  
  }
  
  const _next_step =  () =>{
      window.jQuery(async($)=>{
      if(stepActual <= 4){
        var nextStep = $("#step-"+stepActual).data("nextStep")
        console.log("actual ","#step-"+stepActual)
        console.log("next ",nextStep)
        
        
  
        if(stepActual > 1 && $("#step-"+stepActual+' input').val() == ''){
      //   alert($("#step-"+stepActual+' input').val())
        
      
      setError_v("Este campo es requerido!")
  
        }else{

          if(stepActual == 1 ){
            var valoresAceptados = /^[0-9]+$/;
            const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            var inputD = $("#step-"+stepActual+' input').val()
            console.log("tam ",inputD.length)
            //Se muestra un texto a modo de ejemplo, luego va a ser un icono
          
            if (inputD.length == 0 ) {
              setError_v("El campo no puede estar vacio!")
              return false
    
            }

           if(!valoresAceptados.test($("#step-"+stepActual+' input').val())) {
          console.log("No es numero")

            if (!emailRegex.test($("#step-"+stepActual+' input').val())) {
              setError_v("Ingrese un email válido!")
              return false
            }

           }else{
              if( inputD.length != 10 ){
                setError_v("El telefono debe tener 10 digitos!")
                return false   
              }


           }


           if(!valoresAceptados.test($("#step-"+stepActual+' input').val()) && !emailRegex.test($("#step-"+stepActual+' input').val() )) {
          
            
              setError_v("Ingrese un valor válido!")
              return false
            

           }
 
        


        
    
        }

  
        if(stepActual == 2 ){
          
          var valoresAceptados = /^[0-9]+$/;
          var inputD = $("#step-"+stepActual+' input').val()
          console.log("tam ",inputD.length)
          //Se muestra un texto a modo de ejemplo, luego va a ser un icono
          if (!$("#step-"+stepActual+' input').val().match(valoresAceptados)  ) {
           
            setError_v("Ingrese un código válido!")
            return false
          }
        
          if (inputD.length != 4  ) {
            setError_v("El numero de código debe tener 4 digitos!")
            return false
    
          }  

          setCode(inputD)
          
       
         
    
      }
      console.log("stAct ",stepActual)
      if(stepActual == 3 ){

        console.log("valida 3")
        
        
        if(score < 3){
          console.log("erorr score")
          setError_v("Debes escojer una contraseña mas segura!")
          return false

        }

        if(paswordR != $('[name=retype_password]').val()){
          console.log("erorr mitsmach")
          setError_v1("Debes confirmar tu nueva contraseña!")
          return false

        }

        
        var formc = new FormData();
      
        formc.append('newpass',paswordR)
        formc.append('code',codeP)
         axios.defaults.baseURL = process.env.REACT_APP_API_URL
    
        await axios
        .post('/api/auth/set_password', formc)
        .then((response) => {
    
          console.log("response api")
         
        if(response.data.result=='success'){
    
           console.log('change sucess ')
    
          // setConfirmC(true)
           $("#step-3").attr("data-anim","hide-to--left").removeClass('alfrente');
           $("#step-4").attr("data-anim","show-from--right").addClass('alfrente');
           setStep(stepx)
           return true  
          
    
        }else{
          //setConfirmC(false)
        
         return false
        }
    
    
        })
        .catch((error) => {
          if (error.response) {
            setError_v("Error interno!")
           // setConfirmC(false)
                return false
          }
        })
    
  
    }
      
        
        if(stepActual == 4 ){
         console.log("in step 4")
        }
        
      

          
       
        var stepx = stepActual 


        setError_v(null)
        setError_v1(null)
        stepx += 1
        console.log('Stepx ',stepx)
        if(stepx==2){
            validate_code()
            $("#step-"+stepActual).attr("data-anim","hide-to--left").removeClass('alfrente');
            $('#'+nextStep).attr("data-anim","show-from--right").addClass('alfrente');
            setStep(stepx)
        }

        if(stepx==3){
          console.log("confirm paso 3")
          
          var formc = new FormData();
      
          formc.append('code',inputD)
           axios.defaults.baseURL = process.env.REACT_APP_API_URL
      
          await axios
          .post('/api/auth/forgot-password-sms-confirm', formc)
          .then((response) => {
      
            console.log("response api")
           
          if(response.data.result=='success'){
      
            console.log('stepx sucess ')
      
            setConfirmC(true)
            $("#step-"+stepActual).attr("data-anim","hide-to--left").removeClass('alfrente');
            $('#'+nextStep).attr("data-anim","show-from--right").addClass('alfrente');
            setStep(stepx)
            return true  
            
      
          }else{
            setConfirmC(false)
          
           return false
          }
      
      
          })
          .catch((error) => {
            if (error.response) {
              setError_v("Error interno!")
              setConfirmC(false)
                  return false
            }
          })
      
             

         }

         if(stepx==4){
              console.log("envio step4")
         }
        
  
        }
       
      }
  })
  
    }
  
    const _back_step = () =>{
  
      
      console.log("b ",stepActual)
      window.jQuery(($)=>{
      if(stepActual >= 1){
      
        var backTo = $("#step-"+stepActual).data("backTo")
        console.log("actual ","#step-"+stepActual)
        console.log("next ",backTo)
       
     
        $("#step-"+stepActual).attr("data-anim","hide-to--left").removeClass('alfrente');;
        $('#'+backTo).attr("data-anim","show-from--right").removeClass('alfrente');;
        setError_v(null)
        setError_v1(null)
        var stepx = stepActual 
        stepx -= 1 
        console.log(stepx)
        setStep(stepx)
       
        
    }
    })
  }
  
  const setPv = (e) =>{
    setError_v(null)
    console.log(e.target.value)
    setpws(e.target.value)
  }


  const setScore  = (score, feedback)=>{


    console.log("scor ",score)
    changeScore(score)



  }
  
    useEffect(()=>{ 
 
  },[]);
  
    
  
    return (
      
     <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-md-12 col-md-offset-4 col-lg-12 col-lg-offset-3">
        {/* <!-- Offset --> */}
        <div className="form-step-wrap">
        <div id="toph" className="row">
            <div className="col-md-2 col-sm-2 col-xs-2"><a href="/login"><img className="img-responsive closeb-t" src={closebt}/></a></div>
            <div className="col-md-8 col-sm-8 col-xs-8"></div>
            <div className="col-md-2 col-sm-2 col-xs-2" align="center"><h3 className="step-count">{stepActual}</h3></div>
        </div>
        <div id="step-1" className="slider-step first-step step" data-next-step="step-2">
            <div className="row tall">
            <div className="col-md-3 none-xs none-xs">

            </div>

              <div className="col-xs-12 col-sm-12  form-questions col-md-6 ">
                <div className="row">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}} >Recupera tu cuenta</h5>
                <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>Escribe tu número de celular o correo electrónico</p>
                <input
                className="form-control transparent-input1"
                style={{fontFamily: "Saira"}}
                type="text"
                name="celular"
                />
                </div>
                <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
                <div className="separador">
               
                </div>
               
                
                {/* <button type="button" className=" btn-success btns " onClick={_next_step} style={{fontFamily: "Saira"}}>Siguiente</button> */}
              </div>

              <div className="col-md-3 none-xs none-xs">

              </div>
              {/* <!-- /Form Questions --> */}
            </div>
            {/* <!-- /Row --> */}
          
          </div>

           <div id="step-2" className=" slider-step step sig " data-next-step="step-3" data-back-to="step-1">
              <div className="row step2 stepp">
              <div className="col-md-3 none-xs none-xs">

            </div>
            
                <div className="col-xs-12 col-sm-12  form-questions col-md-6 ">
                <div className="row">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}} >Recupera tu cuenta</h5>
                <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>Escribe el código de validación que te hemos enviado</p>
                  <input 
                className="form-control transparent-input1"
                style={{fontFamily: "Saira"}}
                type="text"
                name="codValidate"
                  />
                  </div>
                  <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
                  <div className="error_g" style={{fontFamily: "Saira"}}><a href="#" onClick={()=>{
                      validate_code()

                  }}>Reenviar código</a></div>
                </div>
                <div className="col-md-3 none-xs none-xs">

              </div>
              </div>
              
            </div> 
  
            <div id="step-3" className="slider-step step sig" data-next-step="step-4" data-back-to="step-2">
              <div className="row step3 stepp">
              <div className="col-md-3 none-xs none-xs">

             </div>
                <div className="col-xs-12 col-sm-12  form-questions col-md-6 ">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}}>Cambiar contraseña</h5>
                <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>Ingresa una nueva contraseña</p>
  
                  <input
                  className="form-control transparent-input1"
                  style={{fontFamily: "Saira"}}
                  type="text"
                  name="new_password"
                  onKeyUp={(e)=>{setPv(e)}}
                  />

                 

                  <PasswordStrengthBar onChangeScore={setScore} shortScoreWord="Escribe algo" password={paswordR} scoreWords={wordsScore}/>
                  <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>

                  <br/><br/><br/>
                <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>Confirma tu nueva contraseña</p>
  
                  <input
                  className="form-control transparent-input1"
                  style={{fontFamily: "Saira"}}
                  type="text"
                  name="retype_password"
                  />
                  <div className="error_g" style={{fontFamily: "Saira"}}>{error_v1}</div>
                </div>
              </div>
              
            </div>
      
            <div id="step-4" className="slider-step step sig" data-next-step="step-5" data-back-to="step-3">
              <div className="row step4 stepp">
              <div className="col-md-3 none-xs none-xs">

             </div>
                <div className="col-xs-12 col-sm-12  form-questions col-md-6  ">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}}>Recupera tu cuenta</h5>
                <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>Tu contraseña se ha restablecido correctamente!</p>
                <button type="button" className=" btn-success btns " onClick={()=>{ window.location.href='/login' }} style={{fontFamily: "Saira"}}>Acceder</button>

                </div>
              </div>
             
            </div>
           
            <div id="step-5" className="slider-step step sig" data-next-step="step-6" data-back-to="step-4">
           
  
            <div className="row step5 stepp">
            <div className="col-md-3 none-xs none-xs">

           </div>
              <div className="col-xs-12 col-sm-12  form-questions col-md-6  ">
              <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}}>Inicia sesion o crea tu cuenta</h5>
              
              <div>
              <button type="button" className="btn btn-success btns mt-5">Iniciar Sesión</button>
              <button type="button" className="btn btn-primary btns mt-4">Crea tu cuenta</button>
              </div>
                
                <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
              </div>
            </div>
         
          </div>
  
          {/* <div id="step-6" className="slider-step step sig" data-next-step="step-7" data-back-to="step-5">

           <div className="row step6 ">
             <div className="col-xs-12 ">
             <h5 className="text-step" style={{color: 'white', fontFamily: "Saira"}}>Escribe tu clave de acceso</h5>
             <p className="text-step" style={{fontFamily: "Saira"}}>4 digitos numéricos</p>
  
                 <input
                 className="form-control transparent-input"
                 style={{fontFamily: "Saira"}}
                 placeholder="####"
                 type="text"
                 minLength= "4"
                 maxLength= "4"
                 />
                <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
             </div>
           </div>
           
         </div>
  
         <div id="step-7" className="slider-step step sig" data-next-step="step-8" data-back-to="step-6">
           
  
           <div className="row step7">
             <div className="col-xs-12 ">
             <h3 className="text-step" style={{color: 'white', fontFamily: "Saira"}}>Genial!!</h3>
  
       
             <p className="text-step" style={{fontFamily: "Saira"}}>
              Para terminar, acepta nuestras condiciones de servicio y privacidad
            </p>
       
       <div className="terminos-input">
           <input
            type="checkbox" 
            name="checkbox1"
            className="form-control-c"     
          />
          
       <span className="text-step"   style={{fontFamily: "Saira"}}>Acepto terminos y condiciones de Neggo</span>
       <br/><br/>
      
       <input
          type="checkbox" 
          name="checkbox2"
          className="form-control-c"     
        />
       <span className="text-step"   style={{fontFamily: "Saira"}}>Acepto el trataminto de datos personales</span>
       </div>
       <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
        
             </div>
           </div>
          
         </div> */}
         
         {/* <div id="step-8" className="slider-step step last" data-back-to="step-7">
           
         <div className="row tall">
              <div className="col-md-4 none-xs none-xs">
  
              </div>
  
                <div className="col-xs-12 col-sm-12  form-questions col-md-4 ">
                  <div className="row">
                  <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}} >Bienvenido a la familia Neggo!!</h5>
                  <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>:D</p>
                  </div>
                 
  
                </div>
  
                <div className="col-md-4 none-xs none-xs">
  
                </div>
               
              </div>
          
         </div> */}
          
          
          <div className="clear"></div>
            {/* <!-- Upper Text --> */}
  
          
          
        </div>
       
      </div>
    </div>
    
    <div className="btn-c">
    <ul className="botones">
    <li>
    {stepActual >= 2 && (   
         
           <a id="back-home-buy-process" className="btn-backx" onClick={_back_step}><img className="" src={backbt}/></a>
  
           
       )}
   </li>
  
        <li>
            {stepActual <= 5 && (   
              
         
               <a id="next-home-buy-process" className="btn-nextx" onClick={_next_step}><img className="img-responsive " src={nextbt}/></a>
             
           
           )}
        </li>
  
         {/* <li className="sig-text">
           {stepActual > 1 && stepActual < 6 && (   
            
         
         <h2 style={{fontFamily: "Saira"}}>Siguiente</h2>
        
    
           )}
        </li>
  
        <li className="sig-text">
           {stepActual == 1 && (   
             
         
              <h2 style={{fontFamily: "Saira"}}>Empecemos</h2>
             
          
           )}
        </li>    */}
          
           {stepActual == 5 && (<li className="finish-text" ><h2 style={{fontFamily: "Saira"}}>Finalizar</h2></li>)}
           {stepActual == 5 && (<li className="finish-btn"><h2><button type="button" className="finalizarbt" onClick={register}>-></button></h2></li>)}
  
  
    </ul>
    
    </div>
    </div>
    
  
  
    );
  };


export default ForgotPassword  ;