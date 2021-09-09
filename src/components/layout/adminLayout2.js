import React, { useEffect, useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem, Collapse, Button, CardBody, Card} from 'reactstrap';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEdit, faPaperclip, faCheck, faHome, faLandmark, faCreditCard, faTasks, faShieldAlt, faCog,  } from '@fortawesome/free-solid-svg-icons'
import { NavLink,useHistory } from "react-router-dom";
import AuthManager from '../../helpers/AuthManager'
import { useDispatch, useSelector } from 'react-redux'
import { store,setUserData } from '../../reducers/index'
import Footer from '../common/footer'
import env from "react-dotenv";
import Sidebar from './adminLayout'

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
           
       
        <div className="row ">
           <div className="col-2">

           <Sidebar/>
           </div>

             <div className="col-10 ">
                
             
             <div className="row ">


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
