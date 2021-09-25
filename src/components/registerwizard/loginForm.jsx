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
       
      <div id="step1box" class="slider-step first-step step" data-next-step="step-mortgage-balance">
            <div class="row tall">
            <div className="col-md-4 none-xs none-xs">

            </div>

              <div class="col-xs-12 col-sm-12  form-questions col-md-4 ">
                <div class="row">
                <h5 className="text-step" style={{color: 'white', textAlign: 'center'}} >Bienvenido de nuevo</h5>
                <p className="text-step" style={{textAlign: 'center'}}>Usuario</p>
                <input
                className="form-control"
                type="text"
                />
                </div>
                <a href="#" class="list-group-item list-group-item-action" style={{textAlign: 'center', color: 'white'}}>Olvide mi usuario/contraseña</a>

              </div>

              <div className="col-md-4 none-xs none-xs">

              </div>
              {/* <!-- /Form Questions --> */}
            </div>
            {/* <!-- /Row --> */}
          
          </div>
             {/* <!-- Upper Text --> */}
             <div id="step-mortgage-balance" class="slider-step step last" data-next-step="step-home-value" data-back-to="step1box">
            <div class="row">
              <div class="col-xs-12  ">
              <h5 className="text-step" style={{color: 'white', textAlign: 'center'}} >Bienvenido de nuevo</h5>
              <p className="text-step" style={{textAlign: 'center'}}>Contraseña</p>
                <input
                className="form-control"
                type="text"
                />
                 <p className="text-step" style={{textAlign: 'center'}}>Comprobemos que eres tu...</p>
                 <p className="text-step" style={{textAlign: 'center'}}>Captcha</p>
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