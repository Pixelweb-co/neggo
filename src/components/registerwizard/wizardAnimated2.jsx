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
                <h5 style={{color: 'white', textAlign: 'center'}} >Bienvenido de nuevo</h5>
                <p style={{textAlign: 'center'}}>Usuario</p>
                <input
                className="form-control"
                type="text"
                />
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
              <h5 style={{color: 'white', textAlign: 'center'}} >Bienvenido de nuevo</h5>
              <p style={{textAlign: 'center'}}>Contraseña</p>
                <input
                className="form-control"
                type="text"
                />
                 <p style={{textAlign: 'center'}}>Comprobemos que eres tu...</p>
                 <p style={{textAlign: 'center'}}>Captcha</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <input type='button' value='Continue' tabindex="5" class="btn-success form-control btn-next" />
              </div>
            </div>
            {/* <div class="row">
              <div class="col-xs-12">
                <a class="btn-back">back</a>
              </div>
            </div> */}
          </div>



       <div id="step-home-buy-process" class="slider-step step" data-next-step="step-home-ok">
         
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