import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardBody,
  CardText,
  CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";



class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      pr_segnombre: "",
      pr_segapellido: "",
      email: "",
      numbertel: "",
      num_token: "",
      
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }


  

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    const { pr_segnombre, pr_segapellido, email, numbertel, num_token } = this.state;
    alert(`Your registration detail: \n 
      Primer y segundo nombre: ${pr_segnombre} \n 
      Primer y segundo apellido: ${pr_segapellido} \n
      Email: ${email} \n
      Numero contacto: ${numbertel} \n
      Clave de acceso: ${num_token}`)
        
      

  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;
console.log(currentStep)
    // If the current step is 1 or 2, then add one on "next" button click
    
    currentStep += 1;
    //currentStep = currentStep >= 1 ? 2   : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    //currentStep = currentStep <= 2 ? 3 : currentStep - 1;
    currentStep -= 1
    this.setState({
      currentStep: currentStep
    });
  }



  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Atras
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 7) {
      return (
        <Button color="primary float-left" onClick={this._next}>
          Siguiente
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 6) {
      return <Button color="primary float-right">Finalizar</Button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card  style={{backgroundColor: '#004B72' }}>
            <CardBody className="cards" style={{backgroundColor: '#004B72', color: 'white' }}>
              <CardText />
             {this.state.currentStep == 1 && (
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
               
              />
             )}

              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                pr_segnombre={this.state.pr_segnombre}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                pr_segapellido={this.state.pr_segapellido}
              />
                <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                numbertel={this.state.numbertel}
              />
                  <Step5
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.numbertel}
              />
                  <Step6
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                num_token={this.state.num_token}
              />
                 <Step7
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                num_token={this.state.num_token}
              />
            </CardBody>
            <CardFooter style={{backgroundColor: '#004B72', color: 'white', textAlign: 'left'}}> 
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;