import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import closebt from '../../assets/img/close.png';
import grafik from '../../assets/img/grafik.jpg';

const modal = (props) => {
        return (
       
          <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter " className="modal-invoice">
              <p style={{color: 'blue', marginLeft: '77%'}}>Crédito 
              
              </p>
              <p>Numero de crédito 03540840</p>
              
            </Modal.Title>
            <img className="img-responsive closeb-t modalcloseInvoice" src={closebt}/>
          </Modal.Header>
          <Modal.Body>
          <div className="row ">
           <div className="col-md-3 columInvoice" >
           <p>Valor del desembolso </p> 
           <p>Deuda a la fecha</p> 
           <p>Estado de crédito</p>
           </div>

           <div className="col-md-1 columInvoice" >
           <p style={{ color: '#B3DDB9' }}>$000.000</p> 
           <p style={{ color: '#FE8F8F' }}>$000.000</p> 
           <p style={{ fontSize: '11px', color: '#CEAEC9'}}>AL DIA</p>
           </div>

           <div className="col-md-3 columInvoice" >
           <p style={{ textAlign: 'center' }}>Pago minimo </p> 
           <p style={{ textAlign: 'center' }}>Proximo pago</p> 
           <p style={{ textAlign: 'center' }}>Fecha de desembolso</p>
           <p style={{ textAlign: 'center' }}>Fecha de vencimiento</p>
         
           </div>

           <div className="col-md-2 col-md-offset-4 columInvoice " >
           <p style={{ color: '#FED02E' }}>$000.000</p>
           <p>DD/MM/AAAA</p>
           <p>DD/MM/AAAA</p>
           <p>DD/MM/AAAA</p>
           </div>

           <div className="col-md-2 columInvoice" >
           <p>Seguro</p>
           <p>Iva</p>
           <p>Tasa de interés</p>
           <p>Tasa de mora </p>
           </div>

           <div className="col-md-1 columInvoice" >
           <p style={{ color: '#FED02E' }}>$2.000</p> 
           <p>$3.000</p> 
           <p>12E.A</p> 
           <p>30E.M</p> 
           </div>
           </div>

            <h4 className="text-center" style={{fontFamily: "Saira", color: 'black'}}>Información de Crédito</h4>

           <div className="row">
           <div className="col-md-3 columInvoice">
           <p>Dias de pago</p> 
           <p>Último pago</p> 
           <p>Fecha de vencimiento</p> 
           </div>

           <div className="col-md-2 columInvoice">
           <p style={{ color: '#FED02E' }}>DD</p> 
           <p>DD/MM/AAAA</p> 
           <p>DD/MM/AAAA</p> 
           </div>

           <div className="col-md-3 columInvoice" >
           <p>Tiempo del crédito</p> 
           <p>Cuotas paga</p> 
           <p>Días de mora</p>
           </div>

           <div className="col-md-2 columInvoice" >
           <p style={{ color: '#FED02E' }}>DD</p> 
           <p>DD</p> 
           <p>DD</p>
           </div>

           <div className="col-md-2 columInvoice" >
           <img  className="img-responsive1 " src={grafik}/>
           </div>
           </div>

           <h4 className="text-center" style={{fontFamily: "Saira", color: 'black'}}>Histórico de pagos</h4>

           <div className="row columInvoice">
        <div className="col-md-3">
        <h4 style={{color: 'black'}}>Fecha del pago </h4>
        <p className="vcredito-t">DD/MM/AAAA</p>
        <p className="vcredito-t">DD/MM/AAAA</p>
        <p className="vcredito-t">DD/MM/AAAA</p>
        </div>

        <div className="col-md-3">
        <h4 style={{color: 'black'}}>Valor del desembolso</h4>
        <p className="vcredito-t" style={{ color: '#B3DDB9' }}>$000.000</p>
        <p className="vcredito-t" style={{ color: '#B3DDB9' }}>$000.000</p>
        <p className="vcredito-t" style={{ color: '#B3DDB9' }}>$000.000</p>
        
        </div>

        <div className="col-md-3">
        <h4 style={{color: 'black'}}>Fecha del pago </h4>
        <p className="vcredito-t">DD/MM/AAAA</p>
        <p className="vcredito-t">DD/MM/AAAA</p>
        <p className="vcredito-t">DD/MM/AAAA</p>
        
        </div>

        <div className="col-md-3">
        <h4 style={{color: 'black'}}>Valor del desembolso</h4>
        <p className="vcredito-t" style={{ color: '#B3DDB9' }}>$000.000</p>
        <p className="vcredito-t" style={{ color: '#B3DDB9' }}>$000.000</p>
        <p className="vcredito-t" style={{ color: '#B3DDB9' }}>$000.000</p>
        
        </div>
        <div className="row justify-content-center"><img className='neggo_invoice' src={iconNeggo} /></div>
        </div>

        

      

          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-verdeinvoice" onClick={props.onHide}>Imprimir</Button>
          </Modal.Footer>
        </Modal>
        );
    
}

export default modal;