import { Modal, Button, Form } from 'react-bootstrap';
import closebt from '../../assets/img/close.png';
import React, { useEffect, useState } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import axios from 'axios'

const Modal_user = (props) => {

  const { register, errors, handleSubmit } = useForm()


  const onSubmit = data =>{
    
axios.defaults.baseURL = process.env.REACT_APP_API_URL

    axios
      .put('/api/users/'+window.localStorage.getItem('userId'), data)
      .then((response) => {
      
        if(response.data.result="sucess"){

        // if (response.data.user_data.approved === '0') {
        //   setAuthError([`Your account hasn't been approved.`])
        // } else {
        //   AuthManager.setToken(response.headers, response.data.user_data)
        //   history.push('/dashboard/')
        // }
        

       

      }else{
        
      }


      })
      .catch((error) => {
        if (error.response) {
          //console.log(error.response.data)
       
        }
      })
 

  }

        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter " className="">
                Actualización de datos
              </Modal.Title>
              <img className="img-responsive closeb-t modalclose" src={closebt}/>
            </Modal.Header>
             <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
           
            <div className="row">
             <div className="col-md-6" >
             <div className="form-group">
                  <label className="label_cred_m">Nombres</label>
                   <input className="form-control transparent-inputcredit" defaultValue={JSON.parse(window.localStorage.getItem('user')).names} type="text" {...register('names')}/>
              </div>
               
              <div className="form-group">
                  <label className="label_cred_m">Número de cédula</label>
                   <input className="form-control transparent-inputcredit" type="text" defaultValue={JSON.parse(window.localStorage.getItem('user')).documento_identidad}  {...register('documento_identidad')}/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Fecha de expedicion</label>
                   <input className="form-control transparent-inputcredit" type="date" {...register('fecha_expedicion')}/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Fecha de expedicion</label>
                   <input className="form-control transparent-inputcredit" type="date" {...register('lugar_expedicion')}/>
              </div>
             </div>
             <div className="col-md-6" >
             <div className="form-group">
                  <label className="label_cred_m">Apellidos</label>
                   <input className="form-control transparent-inputcredit" type="text" defaultValue={JSON.parse(window.localStorage.getItem('user')).lastname} {...register('lastname')}/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Tipo de documento</label>
                   <input className="form-control transparent-inputcredit" type="text" {...register('fecha_expedicion')}/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Fecha de nacimiento</label>
                   <input className="form-control transparent-inputcredit" type="date" {...register('fecha_nace')}/>
              </div>
             </div>
             </div>
                <div className="row" style={{backgroundColor: '#CCCCCC', paddingTop: '5px'}}>
                    <div className="col-6">
                    <Form.Group className="mb-3 transparent-inputcreditt" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Tratamiento de datos" />
                    </Form.Group>
                    </div>

                    <div className="col-6">
                    <Form.Group className="mb-3 transparent-inputcreditt" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Terminos y condiciones" />
                    </Form.Group>
                    </div>

                </div>
               
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-verde" type="submit" >Guardar</Button>
            </Modal.Footer>
             </form>
          </Modal>

        );
    
}

export default Modal_user;