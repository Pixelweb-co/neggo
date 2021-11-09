import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import closebt from '../../assets/img/close.png';
// import grafik from '../../assets/img/grafik.jpg';
// import iconNeggo from '../../assets/images/neggo_logo.png'


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



          //   <Modal
          //   {...props}
          //   size="md"
          //   aria-labelledby="contained-modal-title-vcenter"
          //   centered
          // >
          //   <Modal.Header>
          //     <img className="img-responsive closeb-t modalclose" src={closebt}/>
          //   </Modal.Header>
          //   <Modal.Body>
          //   <div className="row">
          //    <div className="col-md-6">
          //   <p style={{color: "#4C809B", fontSize:'Saira'}}>Numero de crédito</p>
          //   <p style={{color: "#808080", fontSize:'Saira'}}>Estado de crédito</p>
          //   <p style={{color: "#808080", fontSize:'Saira'}}>Pago minimo</p>
          //   <p style={{color: "#808080", fontSize:'Saira'}}>Fecha del vencimiento</p>

          //    </div>

          //    <div className="col-md-6" >
          //     <p style={{color: "#72C67D", fontSize:'Saira'}}>03540840</p>
          //     <p style={{color: "#72C67D", fontSize:'Saira'}}>AL DIA</p>
          //     <p style={{color: "#FFC700", fontSize:'Saira'}}>$000.000</p>
          //     <p style={{color: "#808080", fontSize:'Saira'}}>DD/MM/AAAA</p>

          //    </div>

          //    </div>
          //    <div style={{textAlign: 'center'}}><Button className="btn-verdee mb-5" onClick={props.onHide}>Pagar cuota</Button></div>
             
          //   </Modal.Body>
           
          // </Modal>




  //         <Modal
  //         {...props}
  //         size="md"
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //       >
  //         <Modal.Header>
  //           <img className="img-responsive closeb-t modalclose" src={closebt}/>
  //         </Modal.Header>
  //         <Modal.Body>
  //         <div class="container">
  //          <div class="row justify-content-center">
  //            <div class="col-4">
  //            <b style={{color: "#4C809B", fontSize:'Saira'}}>Numero de crédito</b>
  //            </div>
  //            <div class="col-4">
  //            <b style={{color: "#72C67D", fontSize:'Saira'}}>03540840</b>
  //         </div>
  //      </div>

  //       <div className="row justify-content-end">
  //       <div className="col-8">
  //         <b style={{ color: '#72C67D', fontSize:'36px', marginLeft: '-100px'}}>PAGO APROBADO</b>
  //       </div>
  //     </div>

  //     <div className="row justify-content-center">
  //       <div className="col-4">
  //       <b style={{color: "#4C809B", fontSize:'Saira'}}>Numero de transacción</b>
  //       </div>
  //       <div className="col-4">
  //       <b style={{color: "#1EA3FA", fontSize:'Saira'}}>02498403</b>
  //       </div>
  //     </div>
  //     <div className="row justify-content-center">
  //       <div className="col-4">
  //       <p style={{color: "#BBBBBB", fontSize:'Saira'}}>Fecha del pago</p>
  //       </div>
  //       <div className="col-4">
  //       <p style={{color: "#BBBBBB", fontSize:'Saira'}}>DD/MM/AAAA</p>
  //       </div>
  //    </div>
  //  </div>
  //    <div style={{textAlign: 'center'}}><Button className="btn-verdee mb-5" onClick={props.onHide}>Pagar cuota</Button></div>
  //     </Modal.Body>
  //        </Modal>



      <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header>
        <img className="img-responsive closeb-t modalclose" src={closebt}/>
      </Modal.Header>
      <Modal.Body>
      <div className="container">
       <div className="row justify-content-center">
         <div className="col-4">
         <b style={{color: "#4C809B", marginLeft: '2px'}}>Numero de crédito</b>
         </div>
         <div className="col-4">
         <b style={{color: "#72C67D", fontSize:'Saira'}}>054E65XL</b>
      </div>
      </div>
      
      <div className="row justify-content-end">
      <div className="col-8">
      <b style={{color: '#F1416C', fontSize:'36px', marginLeft: '-100px'}}>PAGO RECHAZADO</b>
      </div>
      </div>

      <div className="row justify-content-end">
      <div className="col-8">
      <p style={{marginTop: '20px', color: "#4C809B", fontSize:'Saira'}}>Motivo</p>
      </div>
      </div>

      <div className="row justify-content-end">
      <div className="col-8">
      <p style={{ marginLeft: '-68px'}}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>
      </div>
      </div>
     
      </Modal.Body>
      </Modal>
      
              );
          
      }

export default modal;