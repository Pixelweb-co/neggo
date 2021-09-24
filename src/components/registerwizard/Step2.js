import React from "react";
import { FormGroup, Input } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <h5 className="text-step">Cuales son tus nombres?</h5>
      <FormGroup>
        <Input
          type="text"
          name="pr_segnombre"
          id="pr_segnombre"
          placeholder="Primero y segundo nombre"
          value={props.pr_segnombre} // Prop: The pr_segnombre input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step2;