import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
     <h5 className="text-step">Cuales son tus apellidos?</h5>
      <FormGroup>
        <Input
          type="text"
          name="pr_segapellido"
          id="pr_segapellido"
          placeholder="Primero y segundo apellido"
          value={props.password} // Prop: The password input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step3;