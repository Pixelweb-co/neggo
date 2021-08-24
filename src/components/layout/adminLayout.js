import React, { useEffect, useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem, Collapse, Button, CardBody, Card} from 'reactstrap';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEdit, faPaperclip, faCheck, faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink,useHistory } from "react-router-dom";
import AuthManager from '../../helpers/AuthManager'
import { useDispatch, useSelector } from 'react-redux'
import { store,setUserData } from '../../reducers/index'
import Footer from '../common/footer'
import env from "react-dotenv";

export default function AdminLayout(props) {

  const dispatch = useDispatch()
  // const [loading, setLoading] = useState(null)
  let history = useHistory()

  const userData = useSelector((store) => store.user)

  useEffect(() => {
    // setLoading(true)
    // //console.log('dashboar props', props)
    // axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT
    getUserData()
  }, [])

  function getUserData() {

axios.defaults.baseURL = env.API_URL
    AuthManager.hasToken()
    const userId = window.localStorage.getItem('userId')
    if (userId) {
      axios
        .get(`/api/users/${userId}`)
        .then((response) => {
          dispatch(setUserData(response.data))
          
          // setLoading(false)
        })
        .catch((error) => {
          dispatch(setUserData(error))
       //   history.push('/login')
        })
    } else {
    //  history.push('/login')
    }
  }


  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

const logout = () =>{

    AuthManager.logout()
    history.push('/login')

}



    return (
    <div className="admin_panel">
        <div className="row">
        
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Healty mind</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <FontAwesomeIcon icon={faHome} />
  
<div className="pull-right">
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
       <img className="img-responsive " src={userData.foto && userData.foto}/> {userData && userData.primer_nombre} {userData && userData.primer_apellido}
      </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem divider />
        <DropdownItem>Logout</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
</div>

  </div>
</nav>
        
        </div>
        <div className="row ">
            <div className="col-2 sidebar-color">
                
                <div className="navbar_container">
                
                    
    <nav id="sidebar">


        <div class="sidebar-header">
            <h3>Dashboard</h3>
        </div>
    
    <div className="container-fluid">
    <ListGroup>
      <ListGroupItem></ListGroupItem>
      <ListGroupItem><NavLink to="/dashboard"><FontAwesomeIcon icon={faHome} /> Home</NavLink></ListGroupItem>
      <ListGroupItem><NavLink to="/miprofile"><FontAwesomeIcon icon={faUser} /> Mi profile</NavLink></ListGroupItem>
      <ListGroupItem><button type="button" className="btn btn-link" onClick={()=>{logout()}}><FontAwesomeIcon icon={faHome} /> Logout</button> </ListGroupItem>
      
    </ListGroup>

    </div>
        
    </nav>

{/* <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>Boton Sidebar</span>
            </button> 

        </div>
    </nav>
</div> */}
                    


                </div>
            
            
            
            
            </div>

             <div className="col-10">
                
             
             <div className="row">


             {props.children}



             </div>
             
             
             </div>


        </div>

        <div className="row footer">
        <Footer/>
        </div>

        </div>
    )
}
