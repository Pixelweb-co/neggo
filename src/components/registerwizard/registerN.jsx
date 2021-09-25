import React, { useEffect, useState } from 'react'
import closebt from '../../assets/img/close.png'
import backbt from '../../assets/img/back.png'
import nextbt from '../../assets/img/next.png'
const Wizard = props => {
const [stepActual,setStep] = useState(1)

  useEffect(()=>{

  window.jQuery(($)=>{
    //Dynamic Next
  $(".btn-next").on("click", function(){
    var nextStep = $("#step-"+stepActual + $(this).parents(".slider-step").data("nextStep"));
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
          <div className="col-md-2 col-sm-2 col-xs-2"><img class="img-responsive closeb-t" src={closebt}/></div>
          <div className="col-md-8 col-sm-8 col-xs-8"></div>
          <div className="col-md-2 col-sm-2 col-xs-2" align="center"><h3 className="step-count">{stepActual}</h3></div>
      </div>
          <div id="step-1" className="slider-step first-step step" data-next-step="step-1">
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

          <div id="step-2" class="slider-step step sig" data-next-step="step-3" data-back-to="step-2">
            <div class="row step2">
              <div class="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white'}} >Cúales son tus nombres?</h5>

                <input
                className="form-control"
                placeholder="Primer y segundo nombre"
                type="text"
                />
              </div>
            </div>
            
          </div>

          <div id="step-3" className="slider-step step sig" data-next-step="step-2" data-back-to="step-4">


            <div class="row step3">
              <div class="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white'}}>Cúales son tus apellidos?</h5>

                <input
                className="form-control"
                placeholder="Primer y segundo apellido"
                type="text"
                />
              </div>
            </div>
            
          </div>
    
          <div id="step-4" className="slider-step step sig" data-next-step="step-5" data-back-to="step-3">
          

            <div class="row step4">
              <div class="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white'}}>Cúal es tu correo electrónico?</h5>

                <input
                className="form-control"
                placeholder="Correo@correo.com.co"
                type="email"
                />
              </div>
            </div>
           
          </div>
         
          <div id="step-5" className="slider-step step sig" data-next-step="step-6" data-back-to="step-4">
         

          <div class="row step5">
            <div class="col-xs-12 ">
            <h5 className="text-step" style={{color: 'white'}}>Un número de contacto?</h5>
            <p className="text-step">Ten en cuenta que este será tu usuario.</p>

                <input
                className="form-control"
                placeholder="+57 300 000 000"
                type="number"
                />

            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <input id="next-home-buy-process" type='button' value='Continue' tabindex="11" className="btn-success form-control btn-next" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <a id="back-home-buy-process" className="btn-back">back</a>
            </div>
          </div>
        </div>

        <div id="step-password-process" className="slider-step step sig" data-next-step="step-end-process" data-back-to="step-telefono-buy-process">
         

         <div class="row step6">
           <div class="col-xs-12 ">
           <h5 className="text-step" style={{color: 'white'}}>Escribe tu clave de acceso</h5>
           <p className="text-step">4 digitos numéricos</p>

               <input
               className="form-control"
               placeholder="####"
               type="number"
               />

           </div>
         </div>
         
       </div>

       <div id="step-end-process" className="slider-step step last" data-back-to="step-password-process">
         

         <div class="row step7">
           <div class="col-xs-12 ">
           <h3 className="text-step" style={{color: 'white'}}>Genial!!</h3>

           <p className="text-step">
            Para terminar, acepta nuestras condiciones de servicio y privacidad
          </p>
         <input
          type="checkbox" 
          name="checkbox1"     
        />
     <span className="text-step">Acepto terminos y condiciones de Neggo</span>
     <br/>
     <input
        type="checkbox" 
        name="checkbox2"     
      />
     <span className="text-step">Acepto el trataminto de datos personales</span>
     
      <p className="text-step mov">Sabemos que no eres un robot, pero por si acaso...</p>    
      <p>captcha</p>
           </div>
         </div>
        
       </div>

        <div className="clear"></div>
      </div>
     
    </div>
  </div>
  
  <div className="btn-c">
  <ul className="botones">
    <li>
{/*           
 <input id="next-home-buy-process" type='button' value='Continue' tabindex="11" className="btn-success form-control btn-next" />
           */}

           <a id="next-home-buy-process" className="btn-back"><img class="" src={backbt}/></a>

         </li>
         <li>
           
             <a id="back-home-buy-process" className=" btn-next"><img class="img-responsive " src={nextbt}/></a>
           
         </li>
  </ul>
  </div>
  </div>
  


  );
};

export default Wizard  ;