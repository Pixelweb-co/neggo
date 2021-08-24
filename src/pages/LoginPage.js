import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/layout';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form'
import LoginComponent from '../components/auth/LoginForm'



export default function Login() {

  return (

    <Layout>
      
     <LoginComponent/>
    
    </Layout>
 
    )
}
