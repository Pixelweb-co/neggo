import axios from 'axios'
import React, { useState } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import env from "react-dotenv";

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  const { register, handleSubmit,setValue, watch,getValues,triggerValidation, formState: { errors } } = useForm();
  const [authError, setAuthError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [tsuccess, setTsuccess] = useState(null)
  const [showForm, setshowForm] = useState(false)
  const translate = useSelector((state) => state.translate)

  axios.defaults.baseURL = process.env.REACT_APP_API_URL

  const onSubmit = (data) => {
    data.redirect_url = `${window.location.origin}/reset-password`
    axios.defaults.headers.common = {}
    axios
      .post('/api/auth/forgot-password', data, {'Content-Type': 'application/json; charset=utf-8'})
      .then((response) => {

        if(response.data.result=='success'){
        console.log(response)
        setSuccess(true)
        setTsuccess(response.data.message)
        setshowForm(true) 
        }else{
          setSuccess(false)
          setTsuccess(response.data.message) 
          setshowForm(true)

        } 
      
      })
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      triggerValidation()
    }
  }

  return (
    <React.Fragment>
      <div className="forgot_form">
        <h2>Forgot Password?</h2>
        {!success && (
          <div align="center">
            <div className="error-message danger">
              {authError && authError.join(',')}
            </div>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className="ui focus mt-15 ">
                <div className="ui left icon input swdh95">
                  <input
                    className="prompt form-control"
                    type="text"
                    name="email"
                    id="email" 
                    maxLength="40"
                    onKeyPress={(e) => handleKeyPress(e)}
                    placeholder="Type your email addresses"
                    {...register('email',{
                      required: "Email required",
                      maxLength: 40,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Email format invalid"
                      }
                    })}
                  />
                  <i className="uil uil-envelope icon icon2"></i>
                </div>
                <div className="error-message">
                {errors.email && <span className="error-message">El email es requerido</span>}
                </div>
              </div>
              <button className="login-btn btn  btn-secondary" type="submit">
                  Send my new password
              </button>
            </form>
            <p className="mb-0 mt-30">
              Go to login
              <Link to="/login"> Login</Link>
            </p>
          </div>
        )}

        {showForm && (
          <div align="center " className={"alert "+(success ? ('alert-success'):('alert-dange'))}>
          <h4 className="success">
            {/* We sent you and email with the instructions. */}
            {tsuccess}
          </h4>
            {success && (<Link to="/login">Login</Link>)}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
