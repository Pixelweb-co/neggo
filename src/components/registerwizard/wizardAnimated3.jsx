import React, { useEffect } from 'react'


const Wizard = props => {


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
    
   <div className="">
  <div className="row ">
    <div className="col-sm-12 col-md-12 col-md-offset-4 col-lg-12 col-lg-offset-3">
      {/* <!-- Offset --> */}
      <div className="form-step-wrap">
      <div id="toph" className="row">
          <div className="col-md-2 col-sm-2 col-xs-2 ">X</div>
          <div className="col-md-8 col-sm-8 col-xs-8"></div>
          <div className="col-md-2 col-sm-2 col-xs-2" align="center"><h3>1</h3></div>
      </div>
          <div id="step1box" className="slider-step first-step step " data-next-step="step-mortgage-balance">
            <div className="row tall step1">

              <div className="col-xs-12 form-questions">
                <div className="row">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center'}} >Recupera tu cuenta</h5>
                <p className="text-step" style={{ textAlign: 'center'}}>Escribe tu número de celular o correo electrónico</p>
                <input
                className="form-control"
                type="text"
                />
                </div>

              </div>
              {/* <!-- /Form Questions --> */}
            </div>
            {/* <!-- /Row --> */}
            <div className="row">

              <div className="col-xs-12 border">
                <input type='button' value='Continue' tabindex="3" className="btn-next btn-success form-control" />
              </div>
            </div>
          </div>
          {/* <!-- Upper Text --> */}
          <div id="step-mortgage-balance" className="slider-step step sig" data-next-step="step-home-value" data-back-to="step1box">
            <div className="row step2">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white', textAlign: 'center'}} >Recupera tu cuenta</h5>
                <p className="text-step" style={{ textAlign: 'center'}}>Escribe el código de validación que te hemos enviado</p>
                <input
                className="form-control"
                type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <input type='button' value='Continue' tabindex="5" className="btn-success form-control btn-next" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a className="btn-back">back</a>
              </div>
            </div>
          </div>

          <div id="step-home-value" className="slider-step step sig" data-next-step="step-email-rate" data-back-to="step-mortgage-balance">

            <div className="row step3">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white', textAlign: 'center'}} >Recupera tu cuenta</h5>
                <p className="text-step" style={{ textAlign: 'center'}}>Válida el código que te hemos enviado</p>
                <input
                className="form-control"
                type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <input id="next-home-value" type='button' value='Continue' tabindex="7" className="btn-success form-control btn-next" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a id="back-home-value" className="btn-back">back</a>
              </div>
            </div>
          </div>
    
          <div id="step-email-rate" className="slider-step step sig" data-next-step="step-telefono-buy-process" data-back-to="step-home-value">
          
            <div className="row step4">
              <div className="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white', textAlign: 'center'}} >Recupera tu cuenta</h5>
                <p className="text-step" style={{textAlign: 'center'}}>Escribe tu nueva clave de acceso</p>
                <input
                className="form-control"
                type="email"
                />
                <p className="text-step" style={{textAlign: 'center'}}>Escribe nuevamente la nueva clave</p>
                <input
                className="form-control"
                type="email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <input id="next-interest-rate" type='button' value='Continue' tabindex="9" className="btn-success form-control btn-next" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <a id="back-interest-rate" className="btn-back">back</a>
              </div>
            </div>
          </div>
         
          <div id="step-telefono-buy-process" className="slider-step step sig" data-next-step="step-password-process" data-back-to="step-email-rate">
         
          <div className="row step5">
            <div className="col-xs-12 ">
            <h5 className="text-step" style={{color: 'white', textAlign: 'center'}}>Inicia sesion o crea tu cuenta</h5>
            <button type="button" className="btn btn-success" >Iniciar sesión</button><br/><br/>
            <button type="button" className="btn btn-primary">Crea tu cuenta</button>

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

        {/* <div id="step-password-process" className="slider-step step sig" data-next-step="step-end-process" data-back-to="step-telefono-buy-process">
         
         <div className="row step6">
           <div className="col-xs-12 ">
           <h5 className="text-step" style={{color: 'white'}}>Escribe tu clave de acceso</h5>
           <p className="text-step">4 digitos numéricos</p>
               <input
               className="form-control"
               placeholder="####"
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
       </div> */}

       {/* <div id="step-end-process" className="slider-step step last" data-back-to="step-password-process">
         
         <div className="row step7">
           <div className="col-xs-12 ">
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
         <div className="row">
           <div className="col-xs-12">
             <input id="next-home-buy-process" type='button' value='Continue' tabindex="15" className="btn-success form-control btn-next" />
           </div>
         </div>
         <div className="row">
           <div className="col-xs-12">
             <a id="back-home-buy-process" className="btn-back">back</a>
           </div>
         </div>
       </div> */}

        <div className="clear"></div>
      </div>
     
    </div>
  </div></div>
  


  );
};

export default Wizard  ;