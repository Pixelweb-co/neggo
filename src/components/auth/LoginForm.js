import axios from 'axios'
import React, { useState } from 'react'
import AuthManager from '../../helpers/AuthManager'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import env from "react-dotenv";



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { register, errors, handleSubmit } = useForm()
  const [authError, setAuthError] = useState(null)
  const isLoading = useSelector((state) => state.loading)
  
  

  let history = useHistory()
  //console.log('entry to login form')

  const onChange = (value) => {
    //console.log("Captcha value:", value);
  }

  const responseGoogle = (response) => {
    //console.log(response);
  }
 
  const callbackLinkedIn = (error, code, redirectUri) => {
    if (error) {
      // signin failed
    } else {
      // Obtain authorization token from linkedin api
      // see https://developer.linkedin.com/docs/oauth2 for more info
    }
  };


  const onSubmit = (data) => {


axios.defaults.baseURL = env.REACT_APP_API_URL

    axios
      .post('/api/auth/login', data)
      .then((response) => {
      
        if(response.data.user_data){

        // if (response.data.user_data.approved === '0') {
        //   setAuthError([`Your account hasn't been approved.`])
        // } else {
        //   AuthManager.setToken(response.headers, response.data.user_data)
        //   history.push('/dashboard/')
        // }
          alert(7)

        AuthManager.setToken(response.headers, response.data.user_data)
        history.push('/')

      }else{
        setAuthError([response.data.message])
      }


      })
      .catch((error) => {
        if (error.response) {
          //console.log(error.response.data)
          setAuthError(error.response.data.errors)
        }
      })
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
    }
  }

  return (
    <React.Fragment> 

<div className="col-md-7 pb-3 col-lg-6 ml-auto  justify-content-center">
       <h1 className=" justify-content-center">Login</h1>
      
       <div>
         <div className="error-message danger">
         {authError && authError.join(',')}
         </div>

         <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
           <div className="ui focus mt-15">
             <div className="form-group">
             
               
               <input
                 className="prompt form-control bg-white border-md"
                 type="text"
                 name="email"
                 id="email"
                 onKeyUp={(e) => handleKeyPress(e.target.value)}
                 maxLength="40"
                 placeholder="Input you email"
                 {...register('email',{
                   required: "Required",
                   maxLength: 40
                 })}
               />
               <i className="uil uil-email icon icon2"></i>
             </div>
             <div className="error-message">
             {/* {errors.email && <span>This field is required</span>} */}
             </div>
           </div>

           <div className="ui focus mt-15">
             <div className="form-group">
               <input
                 className="prompt form-control bg-white border-md"
                 type="password"
                 name="password"
                 id="password"
                 onKeyUp={(e) => handleKeyPress(e.target.value)}
                 maxLength="20"
                 placeholder="Input you password"
                 {...register('password',{
                   required: "Required",
                   maxLength: 20,
                   minLength: {
                     value: 6,
                     message: 'Use 6 characters or more for your password.'
                   }
                 })}
               />
               <i className="uil uil-user-circle icon icon2"></i>
             </div>
             <div className="error-message">
             {/* {errors.password && <span>This field is required</span>} */}
             </div>
           </div>
           
           <div className="ui focus mt-15 captcha_container">

               {/* <ReCAPTCHA
                 sitekey="Your client site key"
                 onChange={onChange}
             /> */}
               </div>
           <button className="login-btn  btn btn-primary btn-block py-2 rounded-pill" type="submit">
             LOGIN
           </button>
           <p className="mb-0 mt-30 hvsng145">
              New user?
          <Link to="/register">Register</Link>
        </p>

        <p className="mb-0 mt-30 hvsng145">
              Loose Password?
          <Link to="/forgot_password">Reset password</Link>
        </p>
         </form>
       </div>
    
     </div>

     
    </React.Fragment>
  )
}
