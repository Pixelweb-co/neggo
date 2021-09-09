import React, { useEffect, useState } from 'react'
import Headerb from '../dashboard/header'
import avatar from '../../assets/images/path6190avatarL.png';
import { NavLink,useHistory } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { useMediaQuery } from 'react-responsive'

import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react';

export default function AdminLayout(props) {
    const [visible, setVisible] = useState(false)
    
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
          
            <Menu.Item as='a' href="/">
              <Icon name='home' />
              
              Inicio
            </Menu.Item>
            <Menu.Item as='a' href="/mis_finanzas">
              <Icon name='money' />
              Mis Finanzas
            </Menu.Item>
            <Menu.Item as='a' href="/creditos">
              <Icon name='money' />
              Créditos
            </Menu.Item>
            <Menu.Item as='a' href="/miprofile  ">
              <Icon name='user' />
              Mis datos
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              {props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
    )
}
