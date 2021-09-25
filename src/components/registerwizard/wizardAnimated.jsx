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
    
   <div class="">
  <div class="row">
    <div class="col-sm-12 col-md-12 col-md-offset-4 col-lg-12 col-lg-offset-3">
      {/* <!-- Offset --> */}
      <div class="form-step-wrap">
          <div id="step1box" class="slider-step first-step step" data-next-step="step-mortgage-balance">
            <div class="row tall">

              <div class="col-xs-12 form-questions">
                <div class="row">
                <p className="text-step" >Estamos contentos que quieras hacer parte de nuestra familia Neggo y por ello, queremos conocerte mejor,
                  a continuacion te vamos hacer algunas preguntas para que podamos reconocerte en nuestra plataforma...
                 </p>
                <p className="text-step">Son tan solo 5 preguntas :D</p>    
                <p className="text-step">Si en algun punto no quieres continuar con el proceso de registro puedes hacerlo con la tecla esc</p>
                </div>

              </div>
              {/* <!-- /Form Questions --> */}
            </div>
            {/* <!-- /Row --> */}
            <div class="row">

              <div class="col-xs-12 border">
                <input type='button' value='Continue' tabindex="3" class="btn-next btn-success form-control" />
              </div>
            </div>
          </div>
          {/* <!-- Upper Text --> */}
          <div id="step-mortgage-balance" class="slider-step step" data-next-step="step-home-value" data-back-to="step1box">
            <div class="row">
              <div class="col-xs-12  ">
              <h5 style={{color: 'white'}} >Cuales son tus nombres?</h5>
                <input
                className="form-control"
                placeholder="Primero y segundo nombre"
                type="text"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input type='button' value='Continue' tabindex="5" class="btn-success form-control btn-next" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a class="btn-back">back</a>
              </div>
            </div>
          </div>

          <div id="step-home-value" class="slider-step step" data-next-step="step-interest-rate" data-back-to="step-mortgage-balance">

            <div class="row">
              <div class="col-xs-12  ">
              <h5 style={{color: 'white'}}>Cuales son tus apellidos?</h5>
                <input
                className="form-control"
                placeholder="Primero y segundo apellido"
                type="text"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input id="next-home-value" type='button' value='Continue' tabindex="7" class="btn-success form-control btn-next" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a id="back-home-value" class="btn-back">back</a>
              </div>
            </div>
          </div>
    
          <div id="step-interest-rate" class="slider-step step" data-next-step="step-home-buy-process" data-back-to="step-home-value">
          
            <div class="row">
              <div class="col-xs-12  ">
              <h5 style={{color: 'white'}}>Cual es tu correo electrónico?</h5>
                <input
                className="form-control"
                placeholder="Correo@correo.com.co"
                type="email"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input id="next-interest-rate" type='button' value='Continue' tabindex="9" class="btn-success form-control btn-next" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <a id="back-interest-rate" class="btn-back">back</a>
              </div>
            </div>
          </div>
         
          <div id="step-home-buy-process" class="slider-step step" >
         
          <div class="row">
            <div class="col-xs-12 ">
            <h5 style={{color: 'white'}}>Un numero de contacto?</h5>
            <p>Ten en cuenta que este será tu usuario.</p>
                <input
                className="form-control"
                placeholder="+57 300 000 000"
                type="number"
                />

            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <input id="next-home-buy-process" type='button' value='Continue' tabindex="11" class="btn-success form-control btn-next" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <a id="back-home-buy-process" class="btn-back">back</a>
            </div>
          </div>
        </div>

        <div id="step-home-buy-process" class="slider-step step" data-next-step="step-home-key" >
         
         <div class="row">
           <div class="col-xs-12 ">
           <h5 style={{color: 'white'}}>Escribe tu clave de acceso</h5>
           <p>4 digitos numéricos</p>
               <input
               className="form-control"
               placeholder="####"
               type="number"
               />

           </div>
         </div>
         <div class="row">
           <div class="col-xs-12">
             <input id="next-home-buy-process" type='button' value='Continue' tabindex="11" class="btn-success form-control btn-next" />
           </div>
         </div>
         <div class="row">
           <div class="col-xs-12">
             <a id="back-home-buy-process" class="btn-back">back</a>
           </div>
         </div>
       </div>

       <div id="step-home-buy-process" class="slider-step step" data-next-step="step-home-ok">
         
         <div class="row">
           <div class="col-xs-12 ">
           <h3 style={{color: 'white'}}>Genial!!</h3>
           <p className="text-step">
            Para terminar, acepta nuestras condiciones de servicio y privacidad
          </p>
         <input
          type="checkbox" 
          name="checkbox1"     
        />
     <span>Acepto terminos y condiciones de Neggo</span>
     <br/>
     <input
        type="checkbox" 
        name="checkbox2"     
      />
     <span>Acepto el trataminto de datos personales</span>
     
      <p className="text-step mov">Sabemos que no eres un robot, pero por si acaso...</p>    
      <p>captcha</p>
           </div>
         </div>
         <div class="row">
           <div class="col-xs-12">
             <input id="next-home-buy-process" type='button' value='Continue' tabindex="15" class="btn-success form-control btn-next" />
           </div>
         </div>
         <div class="row">
           <div class="col-xs-12">
             <a id="back-home-buy-process" class="btn-back">back</a>
           </div>
         </div>
       </div>

        <div class="clear"></div>
      </div>
     
    </div>
  </div></div>
  


  );
};

export default Wizard  ;