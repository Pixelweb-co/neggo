import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/layoutForm';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form'
import ForgotpassComponent from '../components/registerwizard/forgotPass'



export default function Login() {

  return (

    <Layout>
      
     <ForgotpassComponent/>
    
    </Layout>
 
    )
}
