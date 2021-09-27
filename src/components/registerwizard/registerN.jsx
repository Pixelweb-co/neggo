import React, { useEffect, useState } from 'react'
import closebt from '../../assets/img/close.png'
import backbt from '../../assets/img/back.png'
import nextbt from '../../assets/img/next.png'
const Wizard = props => {
const [stepActual,setStep] = useState(1)
const [error_v, setError_v] = useState(null)
  



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
                <p className="text-step" >Estamos contentos que quieras hacer parte de nuestra familia Neggo y por ello, queremos conocerte mejor,
                  a continuacion te vamos hacer algunas preguntas para que podamos reconocerte en nuestra plataforma...
                 </p>
                <p className="text-step">Son tan solo 5 preguntas :D</p>    
                <p className="text-step">Si en algún punto no quieres continuar con el proceso de registro puedes hacerlo con la tecla esc</p>
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
              <h5 className="text-step" style={{color: 'white'}} >Cúales son tus nombres?</h5>

                <input
                className="form-control"
                placeholder="Primer y segundo nombre"
                type="text"
                />
                <div className="error_g">{error_v}</div>
              </div>
            </div>
            
          </div>

          <div id="step-3" className="slider-step step sig" data-next-step="step-4" data-back-to="step-2">


            <div className="row step3">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white'}}>Cúales son tus apellidos?</h5>

                <input
                className="form-control"
                placeholder="Primer y segundo apellido"
                type="text"
                />
                <div className="error_g">{error_v}</div>
              </div>
            </div>
            
          </div>
    
          <div id="step-4" className="slider-step step sig" data-next-step="step-5" data-back-to="step-3">
          

            <div className="row step4">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white'}}>Cúal es tu correo electrónico?</h5>

                <input
                className="form-control"
                placeholder="Correo@correo.com.co"
                type="email"
                />
                <div className="error_g">{error_v}</div>
              </div>
            </div>
           
          </div>
         
          <div id="step-5" className="slider-step step sig" data-next-step="step-6" data-back-to="step-4">
         

          <div className="row step5">
            <div className="col-xs-12 ">
            <h5 className="text-step" style={{color: 'white'}}>Un número de contacto?</h5>
            <p className="text-step">Ten en cuenta que este será tu usuario.</p>

                <input
                className="form-control"
                placeholder="+57 300 000 000"
                type="number"
                />
              <div className="error_g">{error_v}</div>
            </div>
          </div>
       
        </div>

        <div id="step-6" className="slider-step step sig" data-next-step="step-7" data-back-to="step-5">
         

         <div className="row step6">
           <div className="col-xs-12 ">
           <h5 className="text-step" style={{color: 'white'}}>Escribe tu clave de acceso</h5>
           <p className="text-step">4 digitos numéricos</p>

               <input
               className="form-control"
               placeholder="####"
               type="number"
               />
              <div className="error_g">{error_v}</div>
           </div>
         </div>
         
       </div>

       <div id="step-7" className="slider-step step last" data-back-to="step-6">
         

         <div className="row step7">
           <div className="col-xs-12 ">
           <h3 className="text-step" style={{color: 'white'}}>Genial!!</h3>

     
           <p className="text-step">
            Para terminar, acepta nuestras condiciones de servicio y privacidad
          </p>
     
     <div className="terminos-input">
         <input
          type="checkbox" 
          name="checkbox1"
          className="form-control-c"     
        />
        
     <span className="text-step">Acepto terminos y condiciones de Neggo</span>
     <br/><br/>
    
     <input
        type="checkbox" 
        name="checkbox2"
        className="form-control-c"     
      />
     <span className="text-step">Acepto el trataminto de datos personales</span>
     </div>
     <div className="error_g">{error_v}</div>
      {/* <p className="text-step mov">Sabemos que no eres un robot, pero por si acaso...</p>    
      <p>captcha</p> */}
           </div>
         </div>
        
       </div>
        
        
        <div className="clear"></div>
        
      </div>
     
    </div>
  </div>
  
  <div className="btn-c">
  <ul className="botones">
      
  {stepActual >= 2 && (   
        <li>
         <a id="back-home-buy-process" className="btn-backx" onClick={_back_step}><img className="" src={backbt}/></a>

         </li>
     )}

   {stepActual == 7 && ( <li className="sig-text"></li>)}  
          {stepActual <= 6 && (   
            <li>
       
             <a id="next-home-buy-process" className="btn-nextx" onClick={_next_step}><img className="img-responsive " src={nextbt}/></a>
           
         </li>
         )}

         {stepActual > 1 && stepActual < 7 && (   
          <li className="sig-text">
       
       <h2>Siguiente</h2>
      
    </li>
         )}

         {stepActual == 1 && (   
            <li className="sig-text">
       
            <h2>Empecemos</h2>
           
         </li>
         )}
        
         {stepActual == 7 && (<li className="finish-text"><h2>Finalizar</h2></li>)}
         {stepActual == 7 && (<li className="finish-btn"><h2><button type="button" className="finalizarbt">-></button></h2></li>)}


  </ul>
  
  </div>
  </div>
  


  );
};

export default Wizard  ;