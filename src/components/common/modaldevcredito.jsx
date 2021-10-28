import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import closebt from '../../assets/img/close.png';
import grafik from '../../assets/img/grafik.jpg';

const modal = (props) => {
        return (
          //   <Modal
          //   {...props}
          //   size="lg"
          //   aria-labelledby="contained-modal-title-vcenter"
          //   centered
          // >
          //   <Modal.Header>
          //     <Modal.Title id="contained-modal-title-vcenter " className="">
          //       Actualización de datos
          //     </Modal.Title>
          //     <img className="img-responsive closeb-t modalclose" src={closebt}/>
          //   </Modal.Header>
          //   <Modal.Body>
          //   <div className="row">
          //    <div className="col-md-6" >
          //    <div className="form-group">
          //         <label className="label_cred_m">Nombres</label>
          //          <input className="form-control transparent-inputcredit" type="text"/>
          //     </div>
          //     <div className="form-group">
          //         <label className="label_cred_m">Número de cédula</label>
          //          <input className="form-control transparent-inputcredit" type="text"/>
          //     </div>
          //     <div className="form-group">
          //         <label className="label_cred_m">Fecha y lugar de expedicion</label>
          //          <input className="form-control transparent-inputcredit" type="date"/>
          //     </div>
          //    </div>
          //    <div className="col-md-6" >
          //    <div className="form-group">
          //         <label className="label_cred_m">Apellidos</label>
          //          <input className="form-control transparent-inputcredit" type="text"/>
          //     </div>
          //     <div className="form-group">
          //         <label className="label_cred_m">Tipo de documento</label>
          //          <input className="form-control transparent-inputcredit" type="text"/>
          //     </div>
          //     <div className="form-group">
          //         <label className="label_cred_m">Fecha de nacimiento</label>
          //          <input className="form-control transparent-inputcredit" type="text"/>
          //     </div>
          //    </div>
          //    </div>
          //       <div className="row" style={{backgroundColor: '#CCCCCC', paddingTop: '5px'}}>
          //           <div className="col-6">
          //           <Form.Group className="mb-3 transparent-inputcreditt" controlId="formBasicCheckbox">
          //            <Form.Check type="checkbox" label="Tratamiento de datos" />
          //           </Form.Group>
          //           </div>

          //           <div className="col-6">
          //           <Form.Group className="mb-3 transparent-inputcreditt" controlId="formBasicCheckbox">
          //            <Form.Check type="checkbox" label="Terminos y condiciones" />
          //           </Form.Group>
          //           </div>

          //       </div>
          //   </Modal.Body>
          //   <Modal.Footer>
          //     <Button className="btn-verde" onClick={props.onHide}>Guardar</Button>
          //   </Modal.Footer>
          // </Modal>

          <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter " className="modal-invoice">
              <p>Crédito <br/>
              Numero de crédito 03540840
              </p>
              
            </Modal.Title>
            <img className="img-responsive closeb-t modalcloseInvoice" src={closebt}/>
          </Modal.Header>
          <Modal.Body>
          <div className="row">
           <div className="col-md-4 columInvoice" >
           <p>Valor del desembolso  $000.000</p> 
           <p>Deuda a la fecha  $000.000</p> 
           <p>Estado de crédito  AL DÍA</p>
         
           </div>

           <div className="col-md-4 columInvoice" >
           <p>Pago minimo   $000.000</p> 
           <p>Próximo pago  DD/MM/AAAA</p> 
           <p>Fecha del desembolso DD/MM/AAAA</p> 
           <p>Fecha del vencimiento DD/MM/AAAA</p> 
           </div>


           <div className="col-md-4 columInvoice" >
           <p>Seguro   $2.000</p>
           <p>Iva  $3.000</p>
           <p>Tasa de interés  12 E.A</p>
           <p>Tasa de mora 30 E.M.</p>
           </div>
           </div>

            <h4 className="text-center" style={{fontFamily: "Saira", color: 'black'}}>Información de Crédito</h4>

           <div className="row">
           <div className="col-md-4 columInvoice">
           <p>Dias de pago  DD</p> 
           <p>Último pago  DD/MM/AAAA</p> 
           <p>Fecha de vencimiento  DD/MM/AAAA</p> 
           </div>

           <div className="col-md-4 columInvoice" >
           <p>Tiempo del crédito  DD</p> 
           <p>Cuotas paga  DD</p> 
           <p>Días de mora DD</p>
           </div>


           <div className="col-md-4 columInvoice" >
           <img  className="img-responsive1 " src={grafik}/>
           </div>
           </div>

           <h4 className="text-center" style={{fontFamily: "Saira", color: 'black'}}>Historico de pagos</h4>

           <div className="row">
           <div className="col-md-6" >
           <h5 className="text-start" style={{fontFamily: "Saira", color: 'black'}}>Fecha del pago</h5>
           
           <h5 className="text-end" style={{fontFamily: "Saira", color: 'black'}}>Valor del desembolso</h5>
           </div>

           <div className="col-md-6" >
           <h5 className="text-start" style={{fontFamily: "Saira", color: 'black'}}>Fecha del pago</h5>
           <h5 className="text-end" style={{fontFamily: "Saira", color: 'black'}}>Valor del desembolso</h5>
            </div>
           </div>

          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-verdeinvoice" onClick={props.onHide}>Imprimir</Button>
          </Modal.Footer>
        </Modal>
        );
    
}

export default modal;