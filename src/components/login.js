
import Layout from '../components/layout/layout';
import axios from 'axios';
import md5 from 'md5';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'





export default function Login() {
  return (

    <Layout>
      
    <div className="container d-flex justify-content-center">
      <div className="col-md-7 pb-3 col-lg-6 ml-auto d-flex justify-content-center">
          <div className="row">
          <h1>Login Form</h1>
              <div className="input-group col-lg-12 mb-4">
    <input id="userName" type="text" name="userName" placeholder="User Name" className="form-control bg-white border-md"/>
              </div>
              <div className="input-group col-lg-12 mb-4">
         <input id="password" type="password" name="password" placeholder="Password" className="form-control bg-white border-md"/>
              </div>
              <div className="form-group col-lg-12 mx-auto mb-0">
                  <button type="submit" className="btn btn-primary btn-block py-2 rounded-pill">
                      <span className="font-weight-bold">Login</span>
                  </button>
              </div>
          </div>
      </div>
    </div>
    
    
    </Layout>
 
    )
}
