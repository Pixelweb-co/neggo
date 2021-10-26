import React, { useEffect, useState } from 'react'
import closebt from '../../assets/img/close.png'
import backbt from '../../assets/img/back.png'
import nextbt from '../../assets/img/next.png'
import "@fontsource/saira"; // Defaults to weight 400.
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';
import AuthManager from '../../helpers/AuthManager'
import { useForm, ErrorMessage } from 'react-hook-form'


const Wizard = props => {
  const [stepActual,setStep] = useState(1)
  const [error_v, setError_v] = useState(null)

  const { register, errors, handleSubmit } = useForm()
  const [authError, setAuthError] = useState(null)
  const isLoading = useSelector((state) => state.loading)
  
  

  let history = useHistory()
  //console.log('entry to login form')

  const registerr = ()=> {
    window.jQuery(($)=>{

      var form = new FormData();

      form.append('names',$('#step-2 input').val())
      form.append('lastname',$('#step-3 input').val())
      form.append('email',$('#step-4 input').val())
      form.append('numcontact',$('#step-5 input').val())
      form.append('code',$('#step-6 input').val())
      // form.append('checkbox1',$('#step-7 input').val())
      // form.append('checkbox2',$('#step-7 input').val())
    

      axios.defaults.baseURL = process.env.REACT_APP_API_URL

    axios
      .post('/api/auth/register', form)
      .then((response) => {
     
        if(response.data.user_data){

        // if (response.data.user_data.approved === '0') {
        //   setAuthError([`Your account hasn't been approved.`])
        // } else {
        //   AuthManager.setToken(response.headers, response.data.user_data)
        //   history.push('/dashboard/')
        // }
       $("#step-7").attr("data-anim","hide-to--left").removeClass('alfrente');
      $('#step-8').attr("data-anim","show-from--right").addClass('alfrente');   

        AuthManager.setToken(response.headers, response.data.user_data)
        history.push('/')

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

const _next_step = () =>{
    window.jQuery(($)=>{
    if(stepActual <= 7){
      var nextStep = $("#step-"+stepActual).data("nextStep")
      console.log("actual ","#step-"+stepActual)
      console.log("next ",nextStep)
      
      

      if(stepActual > 1 && $("#step-"+stepActual+' input').val() == ''){
    //   alert($("#step-"+stepActual+' input').val())
      
    
    setError_v("Este campo es requerido!")

      }else{

        if(stepActual == 2 ){
          var inputD = $("#step-"+stepActual+' input').val()
          console.log("tam ",inputD.length)
          //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        
          if (inputD.length < 10 ) {
            setError_v("Este campo debe tener almenos 10 caracteres!")
            return false
  
          }
  
      }

      if(stepActual == 3 ){
        var inputD = $("#step-"+stepActual+' input').val()
        console.log("tam ",inputD.length)
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
      
        if (inputD.length < 10 ) {
          setError_v("Este campo debe tener almenos 10 caracteres!")
          return false

        }

    }
    
      
      if(stepActual == 4 ){
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test($("#step-"+stepActual+' input').val())) {
          setError_v("Ingrese un email válido!")
          return false
        }
      }
      
      if(stepActual == 5 ){
        var valoresAceptados = /^[0-9]+$/;
        var inputD = $("#step-"+stepActual+' input').val()
        console.log("tam ",inputD.length)
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!$("#step-"+stepActual+' input').val().match(valoresAceptados)  ) {
         
          setError_v("Ingrese un numero celular válido!")
          return false
        }
      
        if (inputD.length != 10  ) {
          setError_v("El numero de celular debe tener 10 digitos!")
          return false

        }

    }

    if(stepActual == 6 ){
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

  }
        
      $("#step-"+stepActual).attr("data-anim","hide-to--left").removeClass('alfrente');
      $('#'+nextStep).attr("data-anim","show-from--right").addClass('alfrente');
      var stepx = stepActual 
      setError_v(null)
      stepx += 1
      console.log(stepx)
      setStep(stepx)

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
      var stepx = stepActual 
      stepx -= 1 
      console.log(stepx)
      setStep(stepx)
     
      
  }
  })
}


  useEffect(()=>{
//     var step_n = 1
//   window.jQuery(($)=>{
//     $(".btn-nextq").on("click", function(){
//       if(step_n <= 7){
//           var nextStep = $("#step-"+step_n).data("nextStep")
//           console.log("actual ","#step-"+step_n)
//           console.log("next ",nextStep)
//           $("#step-"+step_n).attr("data-anim","hide-to--left");
//           $('#'+nextStep).attr("data-anim","show-from--right");
//      alert($("#step-"+step_n+' input').val())
       
//          step_n += 1
//         console.log(step_n)
//         setStep(step_n)
//       }
//         });
//   //Dynamic Back
//   $(".btn-backq").on("click", function(){
//       console.log("b ",step_n)
    
//     if(step_n >= 2){
//       var backTo = $("#step-"+step_n).data("backTo")
//       console.log("actual ","#step-"+step_n)
//       console.log("next ",backTo)
//       $("#step-"+step_n).attr("data-anim","hide-to--left");
//       $('#'+backTo).attr("data-anim","show-from--right");
 
  
     
//      step_n -= 1
//       console.log(step_n)
//       setStep(step_n)
//       }
    
//   });

// })
},[]);

  

  return (
    
   <div className="container-fluid">
  <div className="row">
    <div className="col-sm-12 col-md-12 col-md-offset-4 col-lg-12 col-lg-offset-3">
      {/* <!-- Offset --> */}
      <div className="form-step-wrap">
      <div id="toph" className="row">
          <div className="col-md-2 col-sm-2 col-xs-2"><img className="img-responsive closeb-t" src={closebt}/></div>
          <div className="col-md-8 col-sm-8 col-xs-8"></div>
          <div className="col-md-2 col-sm-2 col-xs-2" align="center"><h3 className="step-count">{stepActual}</h3></div>
      </div>
          <div id="step-1" className="slider-step first-step step" data-next-step="step-2">
            <div className="row tall step1">

              <div className="col-xs-12 form-questions">
                <div className="row">
                <p className="text-step" style={{ fontFamily: "Saira"}}>Estamos contentos que quieras hacer parte de nuestra familia Neggo y por ello, queremos conocerte mejor,
                  a continuacion te vamos hacer algunas preguntas para que podamos reconocerte en nuestra plataforma...
                 </p>
                <p className="text-step" style={{ fontFamily: "Saira"}}>Son tan solo 5 preguntas :D</p>    
                <p className="text-step" style={{ fontFamily: "Saira"}}>Si en algún punto no quieres continuar con el proceso de registro puedes hacerlo con la tecla esc</p>
                </div>

              </div>
              {/* <!-- /Form Questions --> */}
            </div>
            {/* <!-- /Row --> */}
            
          </div>
          {/* <!-- Upper Text --> */}

          <div id="step-2" className="slider-step step sig" data-next-step="step-3" data-back-to="step-1">
            <div className="row step2">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white', fontFamily: "Saira"}} >Cúales son tus nombres?</h5>

                <input 
                className="form-control transparent-input"
                style={{fontFamily: "Saira"}}
                placeholder="Primer y segundo nombre"
                type="text"
                minLength= "20"
                name= "names"
                />
                <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
              </div>
            </div>
            
          </div>

          <div id="step-3" className="slider-step step sig" data-next-step="step-4" data-back-to="step-2">


            <div className="row step3">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white', fontFamily: "Saira"}}>Cúales son tus apellidos?</h5>

                <input
                className="form-control transparent-input"
                style={{fontFamily: "Saira"}}
                placeholder="Primer y segundo apellido"
                type="text"
                minLength= "20"
                name= "lastname"
                />
                <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
              </div>
            </div>
            
          </div>
    
          <div id="step-4" className="slider-step step sig" data-next-step="step-5" data-back-to="step-3">
          

            <div className="row step4">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white', fontFamily: "Saira"}}>Cúal es tu correo electrónico?</h5>

                <input
                className="form-control transparent-input"
                style={{fontFamily: "Saira"}}
                placeholder="Correo@correo.com.co"
                type="text"
                name= "email"
                />
                <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
              </div>
            </div>
           
          </div>
         
          <div id="step-5" className="slider-step step sig" data-next-step="step-6" data-back-to="step-4">
         

          <div className="row step5">
            <div className="col-xs-12 ">
            <h5 className="text-step" style={{color: 'white', fontFamily: "Saira"}}>Un número de contacto?</h5>
            <p className="text-step" style={{fontFamily: "Saira"}}>Ten en cuenta que este será tu usuario.</p>

                <input
                className="form-control transparent-input"
                style={{fontFamily: "Saira"}}
                placeholder="+57 300 000 000"
                type="text"
                minLength= "10"
                maxLength= "10"
                name= "numcontact"
                />
              <div className="error_g" style={{fontFamily: "Saira"}}>{error_v}</div>
            </div>
          </div>
       
        </div>

        <div id="step-6" className="slider-step step sig" data-next-step="step-7" data-back-to="step-5">
         

         <div className="row step6">
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
               name= "code"
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
      {/* <p className="text-step mov">Sabemos que no eres un robot, pero por si acaso...</p>    
      <p>captcha</p> */}
           </div>
         </div>
        
       </div>
       
       <div id="step-8" className="slider-step step last" data-back-to="step-7">
         
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
              {/* <!-- /Form Questions --> */}
            </div>
        
       </div>
        
        
        <div className="clear"></div>
        
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
          {stepActual <= 6 && (   
            
       
             <a id="next-home-buy-process" className="btn-nextx" onClick={_next_step}><img className="img-responsive " src={nextbt}/></a>
           
         
         )}
      </li>

       <li className="sig-text">
         {stepActual > 1 && stepActual < 6 && (   
          
       
       <h2 style={{fontFamily: "Saira"}}>Siguiente</h2>
      
  
         )}
      </li>

      <li className="sig-text">
         {stepActual == 1 && (   
           
       
            <h2 style={{fontFamily: "Saira"}}>Empecemos</h2>
           
        
         )}
      </li>  
        
         {stepActual == 7 && (<li className="finish-text" ><h2 style={{fontFamily: "Saira"}}>Finalizar</h2></li>)}
         {stepActual == 7 && (<li className="finish-btn"><h2><button type="button" className="finalizarbt" onClick={registerr}>-></button></h2></li>)}


  </ul>
  
  </div>
  </div>
  


  );
};

export default Wizard  ;