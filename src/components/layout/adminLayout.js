import React, { useEffect, useState } from 'react'
import Headerb from '../dashboard/header'
import avatar from '../../assets/images/path6190avatarL.png';
import AuthManager from '../../helpers/AuthManager'
import { NavLink,useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import { useMediaQuery } from 'react-responsive'

import {
    Icon,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react';

  import iconHome from '../../assets/images/icon_finanzas.png'
  import iconCreditos from '../../assets/images/icon_creditos.png'
  import iconProductos from '../../assets/images/icon_productos.png'
  import iconSeguridad from '../../assets/images/icon_seguridad.png'
  import iconConfig from '../../assets/images/icon_config.png'
 


export default function AdminLayout(props) {
    const [visible, setVisible] = useState(false)
    let history = useHistory()
    const location = useLocation();
    console.log(location.pathname);
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    })

    useEffect(() => {
      
     

      if(!isDesktopOrLaptop){
        setVisible(false)

      }else{
        setVisible(true)

      }


    }, [])


    const showMobilemenu = () => {
    
      if(visible ){
      setVisible(false)
      }else{
        setVisible(true)  
       } 
    }

    const logout = () =>{

      AuthManager.logout()
      history.push('/login')
  
  }

    return (
        <div>
        <Headerb visibleMenu={showMobilemenu}/>
            

      
          <Sidebar.Pushable as={Segment} className="mainLayout">
          

          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            animation="uncover"
            direction="left"
            inverted
            
            vertical
            visible={visible}
            width='thin'
          >
          <div align="center" className="user_data_l">

          <h2>Mi Cuenta</h2>

          <img src={avatar}/>

          <h3>Hola</h3>

          </div>
          
            
            <Menu.Item as='a' href="/mis_finanzas">
              <img className='item_menu' src={iconHome}/>
              <span>Mis Finanzas</span> 
            </Menu.Item>
            <Menu.Item as='a' href="/creditos">
            <img className='item_menu2' src={iconCreditos}/>
              <span> Créditos</span>
            </Menu.Item>
            <Menu.Item as='a' href="/solicitudes_credito">
            <img className='item_menu2' src={iconCreditos}/>
              <span>Solicitudes</span>
            </Menu.Item>
            <Menu.Item as='a' href="/productos">
            <img className='item_menu2' src={iconProductos}/>
               <span>Productos</span>
            </Menu.Item>
            <Menu.Item as='a' href="/miprofile  ">
            <img className='item_menu2' src={iconSeguridad}/>
               <span>Seguridad</span>
            </Menu.Item>

            <Menu.Item as='a' href="#" onClick={()=>{logout()}}>
            <img className='item_menuConfig' src={iconConfig}/>
               <span>Configuración</span>
            </Menu.Item>


            
          </Sidebar>

          <Sidebar.Pusher className={location.pathname == '/solicitud_credito' ? 'creditosBg':''}>
            <Segment basic  >
              {props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
    )
}
