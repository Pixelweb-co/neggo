import React from 'react'
import AuthManager from '../../helpers/AuthManager'
import { NavLink,useHistory } from "react-router-dom";
export default function Navbar() {
  let history = useHistory()
  const logout = () =>{
  
      AuthManager.logout()
      history.push('/login')
  
  }
  



    return (
       
<nav className="navbar navbar-expand-lg navbar-dark  ftco-navbar-light" id="ftco-navbar">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container">
                  <a href="/" className="navbar-brand">
                  {/* <img src="assets/images/companyLogo.png" alt="me" width="150" height="80" />  */}
                     
                  </a>
              </div> 
          </nav>
        </header>
        <div className="container d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          
          {/* {!AuthManager.hasLogeedin() && (
          <>  
          <p className="button-custom order-lg-last mb-0 pl-2"><a href="/register-medical" className="btn btn-secondary py-2 px-3">Work with us!</a></p>
          <p className="button-custom order-lg-last mb-0 pl-2"><a href="/login" className="btn btn-primary py-2 px-3">Login</a></p>
          </>
          )} */}

          {AuthManager.hasLogeedin() && (
          <>  
          <p className="button-custom order-lg-last mb-0 pl-2"><a href="/dashboard" className="btn btn-primary py-2 px-3">Dashboard</a></p>
          <p className="button-custom order-lg-last mb-0 pl-2"><button onClick={()=>{logout()}} className="btn btn-primary py-2 px-3">Cerrar sesion</button></p>
          </>
          )}






          {/* <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a href="/" className="nav-link pl-0">Home</a></li>
                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="/doctor" className="nav-link">Psychologist</a></li>
                <li className="nav-item"><a href="/department" className="nav-link">Departments</a></li>
                <li className="nav-item"><a href="/pricing" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </div> */}
        </div>
    </nav>
    )
}
