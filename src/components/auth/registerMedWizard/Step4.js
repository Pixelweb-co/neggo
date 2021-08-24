import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStore, useSelector } from 'react-redux'
import { store, setStep,setStepForm,fetchProgress,fetchSuccess } from '../../../reducers/index'

export default function Step4(props) {

    const saveProgress =  useSelector((store) => store.loading) 



    return (
       
           <div>
           
           {props.progress && props.progress === 1 ? (
           <div className="form-card">
                                    <h2 className="fs-title text-center">Creating your account please wait... !</h2> <br/><br/>
                                    <div className="row justify-content-center">
                                        <div className="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image"/> </div>
                                    </div> <br/><br/>
                                    <div className="row justify-content-center">
                                        <div className="col-7 text-center">
                                            <h5>Sending files...</h5>
                                        </div>
                                    </div>
                                </div>
           ):(<div className="form-card">
                                    <h2 className="fs-title text-center">Success !</h2> <br/><br/>
                                    <div className="row justify-content-center">
                                        <div className="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image"/> </div>
                                    </div> <br/><br/>
                                    <div className="row justify-content-center">
                                        <div className="col-7 text-center">
                                            <h5>You Have Successfully Signed Up</h5>
                                            {/* <Link to="/login">Go to Login</Link> */}
                                        </div>
                                    </div>
                                </div>
            )}
            
       </div>
    )
}
