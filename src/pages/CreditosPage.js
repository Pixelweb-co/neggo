import React, { useEffect, useState } from 'react'
import Dashboard from '../components/layout/adminLayout'
import {Tabs, Tab}  from 'react-bootstrap';

export default function DashboardPage(props) {
    const [key, setKey] = useState('vijentes');
   
    return (

        <Dashboard>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6"><h2>Créditos</h2></div>
                        <div className="col-md-6"><button className="btn btn-primary" onClick={()=>{window.location.href="/solicitud_credito"}}>Solicitar Crédito</button></div>

                    </div>

                    <div className="row">
                    
                    <div className="container">
                    
                    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="vijentes" title="Vijentes">
        
      <div className="row item-credito">
        <div className="col-md-1 item-c-1">
        
        <h4>Carro</h4>
        
        </div>

        <div className="col-md-1 item-c-2">
        
        
        </div>

        <div className="col-md-2 item-c-3">
        
        
        </div>

        <div className="col-md-2 item-c-4">
        
        
        </div>

        <div className="col-md-1 item-c-5">
        
        
        </div>

        <div className="col-md-1 item-c-6">
        
        
        </div>
      
      </div>




      </Tab>
      <Tab eventKey="cancelados" title="Cancelados">
       ss
      </Tab>
     
    </Tabs>
                    
                    </div>
                    
                    
                    </div>


            </div>
        </Dashboard>

    )
}
