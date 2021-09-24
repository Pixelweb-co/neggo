import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

const Step6 = props => {
  if (props.currentStep !== 6) {
    return null;
  }

  return (
    <>
     <h5 className="text-step">Escribe tu clave de acceso</h5>
     <p>4 digitos numéricos</p>
      <FormGroup>
        <Input
          type="number"
          name="number"
          id="number"
          placeholder="####"
          value={props.number} // Prop: The number input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step6;