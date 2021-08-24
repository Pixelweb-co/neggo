import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEdit, faPaperclip, faCheck } from '@fortawesome/free-solid-svg-icons'
import "react-step-progress-bar/styles.css";
import { ProgressBar ,Step } from "react-step-progress-bar";

export default function StepLayout(props) {
    

  

    return (
        <div className="row justify-content-center mt-0">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center p-0 mt-3 mb-2 msform">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2><strong>Registrese como médico.</strong></h2>
                <p>Llene todos los campos para registrarse.</p>
                <div className="row">
                    <div className="col-md-12 mx-0">
                  
                    <ProgressBar
  filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
  percent={((props.actualStep*25))}
>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        <span className="wizard_icon">
        <FontAwesomeIcon icon={faUser} />
        </span>

      </div>
    )}
  </Step>
 
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
       <span className="wizard_icon">
        <FontAwesomeIcon icon={faEdit} />
        </span>
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
       <span className="wizard_icon">
        <FontAwesomeIcon icon={faPaperclip} />
        </span>
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
         <span className="wizard_icon">
        <FontAwesomeIcon icon={faCheck} />
        </span>
      </div>
    )}
  </Step>
</ProgressBar>

<br/><br/>

                            {/* <!-- progressbar --> */}
                            {/* <ul id="progressbar">
                                <li className={(props.actualStep ===  1 ? "active" : "")} id="account"><FontAwesomeIcon icon={faUser} /><br/><strong> Account</strong></li>
                                <li className={(props.actualStep ===  2 ? "active" : "")}  id="personal"><strong>Personal</strong></li>
                                <li className={(props.actualStep ===  3 ? "active" : "")}  id="payment"><strong>Payment</strong></li>
                                <li className={(props.actualStep ===  4 ? "active" : "")} id="confirm"><strong>Finish</strong></li>
                            </ul>  */}
                            {/* <!-- fieldsets --> */}
                           
                           


                                <div className="form-card">
                                    
                                   
                                    {props.children}


                                </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
