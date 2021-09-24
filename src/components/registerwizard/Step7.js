import React from "react";


const Step7 = props => {
  if (props.currentStep !== 7) {
    return null;
  }

  return (
    
    <div className="step">
      <h3>Genial!!</h3>
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
  );
};

export default Step7;