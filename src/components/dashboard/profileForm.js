import React, { useEffect, useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem, Collapse, Button, CardBody, Card} from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEdit, faPaperclip, faCheck, faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

import Step1 from '../auth/registerMedWizard/Step1';
import Step2 from '../auth/registerMedWizard/Step2';
import Step3 from '../auth/registerMedWizard/Step3'
import { store, setStep,setStepForm,fetchProgress,fetchSuccess } from '../../reducers/index'
import { useStore, useSelector } from 'react-redux'


export default function ProfileForm() {

    const user_data =  useSelector((store) => store.user)  

    const step1_form = {
    primer_nombre:user_data.primer_nombre,
    segundo_nombre:user_data.segundo_nombre,
    primer_apellido:user_data.primer_apellido,
    segundo_apellido: user_data.segundo_apellido,
    tipo_documento: user_data.tipo_documento,
    documento_identidad: user_data.documento_identidad,
    resumen_personal: user_data.resumen_personal,
     direccion: user_data.direccion,
     celular: user_data.celular,
     password: '',
     re_password: '',
     foto: user_data.foto,
     email: user_data.email
    }


    const prefiere_pacientes_decoded = JSON.parse(user_data.prefiere_pacientes)

    const step2_form = {
    costo_por_sesion: '', 
    permitir_llamada_paciente : 'SI',
    tiene_empresa: 'SI',
    prefiere_pacientes:prefiere_pacientes_decoded,
    permitir_email_paciente:user_data.permitir_email_paciente,
    costo_por_sesion: user_data.costo_por_sesion
    }


    const step3_form = {
        tarjeta_profesional:user_data.tarjeta_profesional,
        cedula: user_data.cedula,
        otros: user_data.otros

    }

    const update_wizard = () => {

    }


    return (
        <div className="container">
            <h2>Mi profile information</h2>

       <Step1 edit={true} updateWizard={update_wizard} getStore={step1_form} /> 
       <hr/>
       <Step2 edit={true} updateWizard={update_wizard} getStore={step2_form} />
       <hr/>
       <Step3 edit={true} updateWizard={update_wizard}   getStore={step3_form}/>
       <hr/>


        </div>
    )
}
