import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

const Step4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
     <h5 className="text-step">Cúal es tu correo electrónico?</h5>
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Correo@correo.com.co"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step4;