import React from "react";
import { FormGroup, Input, Button } from "reactstrap";

const Step5 = props => {
  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <>
     <h5 className="text-step">Un numero de contacto?</h5>
     <p>Ten en cuenta que este será tu usuario.</p>
      <FormGroup>
        <Input
          type="number"
          name="numbertel"
          id="numbertel"
          placeholder="+57 300 000 000"
          value={props.numbertel} // Prop: The numbertel input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step5;