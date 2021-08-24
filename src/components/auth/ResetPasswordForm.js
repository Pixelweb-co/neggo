import axios from 'axios'
import React, { useState } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { register, errors, handleSubmit } = useForm()
  const [authError, setAuthError] = useState(null)
  const [success, setSuccess] = useState(null)
  const translate = useSelector((state) => state.translate)

  function headersData() {
    return window
      .decodeURIComponent(window.location.search)
      .slice(1)
      .split('&')
      .map((p) => p.split('='))
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
  }

  const onSubmit = (data) => {
    data.password_confirmation = data.password

    axios
      .put('/auth/password', data, { headers: headersData() })
      .then((response) => {
        setSuccess(true)
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
      <div className="sign_form">
        {!success ? (
          <div>
            <h2>{translate.FORGOT_PASSWORD.TITLE}</h2>
            <div>
              <div className="error-message">
                {authError && authError.join(',')}
              </div>
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="ui focus mt-15">
                  <div className="ui left icon input swdh95">
                    <input
                      className="prompt"
                      type="password"
                      name="password"
                      id="password"
                      maxLength="20"
                      placeholder={translate.RESET_PASSWORD.PLACEHOLDER_PASS}
                      ref={register({
                        required: translate.GENERAL.REQUIRED,
                        maxLength: 20,
                        minLength: {
                          value: 6,
                          message: 'Use 6 characters or more for your password.'
                        }
                      })}
                    />
                    <i className="uil uil-envelope icon icon2"></i>
                  </div>
                  <div className="error-message">
                    <ErrorMessage as="span" errors={errors} name="password" />
                  </div>
                </div>
                <button className="login-btn" type="submit">
                  Submit
                </button>
              </form>
              <p className="mb-0 mt-30">
                {translate.GENERAL.HAVE_ACCOUNT}
                <Link to="/login">{translate.GENERAL.SIGN_IN}</Link>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3>{translate.RESET_PASSWORD.SUCCESS}</h3>
            <Link
              to="/login"
              className="btn-block btn-custom btn-custom-primary mt-30"
            >
              {translate.GENERAL.SIGN_IN}
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}
