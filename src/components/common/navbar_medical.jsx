import React from 'react'
import AuthManager from '../../helpers/AuthManager'
import { Link,  useHistory, useLocation, Redirect } from 'react-router-dom'


export default function navbar_medical() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let history = useHistory()
  const logout = () => {
    AuthManager.logout()
    history.push('/login')
  } 

  return (
       
<nav className="navbar navbar-expand-lg navbar-dark  ftco-navbar-light" id="ftco-navbar">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container">
                  <a href="/" className="navbar-brand">
                  <img src="/images/companyLogo.png" alt="me" width="150" height="80" /> 
                     
                  </a>
              </div> 
          </nav>
        </header>
        <div className="container d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          <p className="button-custom order-lg-last mb-0 pl-2"><a onClick={logout} className="btn btn-primary py-2 px-3">Logout</a></p>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a href="/" className="nav-link pl-0">Home</a></li>
                <li className="nav-item"><a href="/about" className="nav-link">My profile</a></li>
               
            </ul>
          </div>
        </div>
    </nav>
    )
}
