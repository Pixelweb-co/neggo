import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/layout';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from 'react-hook-form'
import ActivateComponent from '../components/auth/ActivateAccount'



export default function ActivateAccountPage() {

  return (

    <Layout>
      
     <ActivateComponent/>
    
    </Layout>
 
    )
}
