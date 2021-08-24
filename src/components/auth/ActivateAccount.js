import axios from 'axios'
import React, { useState,useRef } from 'react'
import AuthManager from '../../helpers/AuthManager'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";

import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props)  {


  const [success, setSuccess] = useState(null)
  const translate = useSelector((state) => state.translate)
  let query = useQuery();
  const token = query.get("token")

  

  let history = useHistory()
  
axios
      .post('/api/auth/activate_account', {token:token })
      .then((response) => {

        console.log("act", response)
        if (response.data.result === 'success') {
          setSuccess(true)
        } else {
          setSuccess(false)
        }
      })
      .catch((error) => {
        if (error.response) {
          //console.log(error.response.data)
         
        }
      })
  

 
  return (
    <React.Fragment>
      <div className="sign_form">
        <h2>Healty Mind</h2>
        <p>Activate You Account Now</p>

        {success ? (
          <h4 className="success">Account has been active now!</h4>
        ) : (
          <h4 className="error">Account activation error.</h4>
       
        )}
        <p className="mb-0 mt-30 hvsng145">
          
          <Link to="/login">Login</Link>
        </p>
      </div>
    </React.Fragment>
  )
}
