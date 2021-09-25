import React from "react";


const Step1 = props => {
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
    
    <div className="step parent-box">
      <p className="text-step">Estamos contentos que quieras hacer parte de nuestra familia Neggo y por ello, queremos conocerte mejor,
        a continuacion te vamos hacer algunas preguntas para que podamos reconocerte en nuestra plataforma...
      </p>
      <p className="text-step">Son tan solo 5 preguntas :D</p>    
      <p className="text-step">Si en algun punto no quieres continuar con el proceso de registro puedes hacerlo con la tecla esc</p>
     
    </div>
  );
};

export default Step1;