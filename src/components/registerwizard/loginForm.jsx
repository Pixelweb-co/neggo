import React, { useEffect, useState } from 'react'
import closebt from '../../assets/img/close.png'
import backbt from '../../assets/img/back.png'
import nextbt from '../../assets/img/next.png'
import "@fontsource/saira"; // Defaults to weight 400.
import axios from 'axios';
import AuthManager from '../../helpers/AuthManager'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import env from "react-dotenv";

const Wizard = props => {
  const [stepActual,setStep] = useState(1)
  const [error_v, setError_v] = useState(null)

  const { register, errors, handleSubmit } = useForm()
  const [authError, setAuthError] = useState(null)
  const isLoading = useSelector((state) => state.loading)
  
  

  let history = useHistory()
  //console.log('entry to login form')

  const login = ()=> {
    window.jQuery(($)=>{

      var form = new FormData();

      form.append('user',$('#step-1 input').val())
      form.append('password',$('#step-2 input').val())

      axios.defaults.baseURL = process.env.REACT_APP_API_URL

    axios
      .post('/api/auth/login', form)
      .then((response) => {
     
        if(response.data.user_data){

        // if (response.data.user_data.approved === '0') {
        //   setAuthError([`Your account hasn't been approved.`])
        // } else {
        //   AuthManager.setToken(response.headers, response.data.user_data)
        //   history.push('/dashboard/')
        // }
          

        AuthManager.setToken(response.headers, response.data.user_data)
        history.push('/dashboard/')

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

  useEffect(()=>{

  window.jQuery(($)=>{
    //Dynamic Next
  $(".btn-next").on("click", function(){
    var nextStep = $("#" + $(this).parents(".slider-step").data("nextStep"));
    $(this).parents(".slider-step").attr("data-anim","hide-to--left");
    nextStep.attr("data-anim","show-from--right");
  });
  
  //Dynamic Back
  $(".btn-back").on("click", function(){
    var backTo = $("#" + $(this).parents(".slider-step").data("backTo"));

    $(this).parents(".slider-step").attr("data-anim","hide-to--right");
    backTo.attr("data-anim","show-from--left");
  });

})
},[]);


const _next_step = () =>{
  window.jQuery(($)=>{
  if(stepActual <= 2){
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

  

  if (props.currentStep !== 1) {
    window.jQuery(($)=>{

      $('.parent-box').addClass('move-right');
     
     
      setTimeout(function(){
        return null;
        
        },5000)

      
    })  
    
    
  
  
  }else{
    window.jQuery(($)=>{
      $('.parent-box').addClass('move-right');
     
     
    })  
    


  }

  return (
    
   <div className="container-fluid">
  <div className="row">
    <div className="col-sm-12 col-md-12 col-md-offset-4 col-lg-12 col-lg-offset-3">
      {/* <!-- Offset --> */}
      <div className="form-step-wrap">
      <div id="toph" className="row">
          <div className="col-md-2 col-sm-2 col-xs-2"><img className="img-responsive closeb-t" src={closebt}/></div>
          <div className="col-md-8 col-sm-8 col-xs-8"></div>
          <div className="col-md-2 col-sm-2 col-xs-2" align="center"></div>
      </div>
       
      <div id="step-1" className="slider-step first-step step" data-next-step="step-2">
            <div className="row tall">
            <div className="col-md-4 none-xs none-xs">

            </div>

              <div className="col-xs-12 col-sm-12  form-questions col-md-4 ">
                <div className="row">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}} >Bienvenido de nuevo</h5>
                <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>Usuario</p>
                <input
                className="form-control transparent-input1"
                type="text"
                />
                </div>
                <div className="separador">
                <a href="http://localhost:3000/register" className="list-group-item list-group-item-action" style={{textAlign: 'center', color: 'white', fontFamily: "Saira"}}>Olvide mi usuario/contraseña</a>
                </div>
               
                
                <button type="button" className=" btn-success btns " onClick={_next_step} style={{fontFamily: "Saira"}}>Siguiente</button>
              </div>

              <div className="col-md-4 none-xs none-xs">

              </div>
              {/* <!-- /Form Questions --> */}
            </div>
            {/* <!-- /Row --> */}
          
          </div>
             {/* <!-- Upper Text --> */}

             <div id="step-2" className="slider-step step last" data-back-to="step-1">
             <div className="row tall">
            <div className="col-md-4 none-xs none-xs">

            </div>

              <div className="col-xs-12 col-sm-12  form-questions col-md-4 ">
                <div className="row">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center', fontFamily: "Saira"}} >Bienvenido de nuevo</h5>
                <p className="text-step" style={{textAlign: 'center', fontFamily: "Saira"}}>Contraseña</p>
                <input
                className="form-control transparent-input1"
                type="password"
                />
                </div>
                <div className="separador">
               
                </div>
                <button type="button" className=" btn-success btns " onClick={login} style={{fontFamily: "Saira"}}>Ingresar</button>
                
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
  {/* <li>
  {stepActual >= 2 && (   
       
         <a id="back-home-buy-process" className="btn-backx" onClick={_back_step}><img className="" src={backbt}/></a>

         
     )}
 </li> */}

      {/* <li>
          {stepActual <= 2 && (   
            
       
             <a id="next-home-buy-process" className="btn-nextx" onClick={_next_step}><img className="img-responsive " src={nextbt}/></a>
           
         
         )}
      </li> */}

       {/* <li className="sig-text">
         {stepActual > 1 && stepActual < 2 && (   
          
       
       <h2 style={{fontFamily: "Saira"}}>Siguiente</h2>
      
  
         )}
      </li> */}

      {/* <li className="sig-text">
         {stepActual == 1 && (   
           
       
            <h2 style={{fontFamily: "Saira"}}>Empecemos</h2>
           
        
         )}
      </li>   */}
        
         {/* {stepActual == 2 && (<li className="finish-text btn-primary" ><h2 style={{fontFamily: "Saira"}}>Finalizar</h2></li>)} */}
         {/* {stepActual == 2 && (<li className="finish-btn"><h2><button type="button" className="finalizarbt" onClick={register}>-></button></h2></li>)} */}


  </ul>
  
  </div>
  </div>
  


  );
};

export default Wizard  ;