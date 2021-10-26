import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import closebt from '../../assets/img/close.png';

const modal = (props) => {
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
            <Modal.Body>
            <div className="row">
             <div className="col-md-6" >
             <div className="form-group">
                  <label className="label_cred_m">Nombres</label>
                   <input className="form-control transparent-inputcredit" type="text"/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Número de cédula</label>
                   <input className="form-control transparent-inputcredit" type="text"/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Fecha y lugar de expedicion</label>
                   <input className="form-control transparent-inputcredit" type="date"/>
              </div>
             </div>
             <div className="col-md-6" >
             <div className="form-group">
                  <label className="label_cred_m">Apellidos</label>
                   <input className="form-control transparent-inputcredit" type="text"/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Tipo de documento</label>
                   <input className="form-control transparent-inputcredit" type="text"/>
              </div>
              <div className="form-group">
                  <label className="label_cred_m">Fecha de nacimiento</label>
                   <input className="form-control transparent-inputcredit" type="text"/>
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
              <Button className="btn-verde" onClick={props.onHide}>Guardar</Button>
            </Modal.Footer>
          </Modal>
        );
    
}

export default modal;