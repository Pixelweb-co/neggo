import React, { useEffect, useState } from 'react'
import Dashboard from '../components/layout/adminLayout'
import {Tabs, Tab, ProgressBar }  from 'react-bootstrap';
import iconCreditos from '../assets/images/tabCreditV.png';

export default function DashboardPage(props) {
    const [key, setKey] = useState('vijentes');
   
    return (

        <Dashboard>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6"><h2>Créditos</h2></div>
                        <div className="col-md-6"><button className="btnn btn-primary"  onClick={()=>{window.location.href="/solicitud_credito"}}>Solicitar Crédito</button></div>

                    </div>

                    <div className="row">
                    
                    <div className="container-cr">
                    
                    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="vijentes" title={<span><img className='tabimg' src={iconCreditos} />Créditos vigentes </span>}>
        
      <div className="row item-credito">
        <div className="col-md-1 item-c-1">
        <h4>Carro</h4>
        </div>

        <div className="col-md-1 item-c-2">
        <span className="vcredito-t">$000.000</span>
        
        </div>

        <div className="col-md-2 item-c-3">
        <span className="vcredito-t">Crédito N° 03540840</span>
        
        </div>

        <div className="col-md-2 item-c-4">
        <b>Progreso</b> <ProgressBar variant="warning" now={60} />
        
        </div>

        <div className="col-md-1 item-c-5">
        <button type="button" className="btn btn-success btn-cr">Pagar cuota</button>
        
        </div>

        <div className="col-md-1 item-c-6 btncredits">
        <button type="button" className="btn btn-crr">Ver mas <i class="fas fa-sort-down"></i></button>
        
        </div>
      
      </div>

      <div className="row item-credito">
        <div className="col-md-1 item-c-a">
        <h4>Universidad</h4>
        </div>

        <div className="col-md-1 item-c-2">
        <span className="vcredito-t">$000.000</span>
        
        </div>

        <div className="col-md-2 item-c-3">
        <span className="vcredito-t">Crédito N° 03540840</span>
        
        </div>

        <div className="col-md-2 item-c-4">
        <b>Progreso</b> <ProgressBar variant="success" now={40} />
        
        </div>

        <div className="col-md-1 item-c-5">
        <button type="button" className="btn btn-success btn-cr">Pagar cuota</button>
        
        </div>

        <div className="col-md-1 item-c-6 btncredits">
        <button type="button" className="btn btn-crr">Ver mas <i class="fas fa-sort-down"></i></button>
        
        </div>
      
      </div>

      <div className="row item-credito">
        <div className="col-md-1 item-c-b">
        <h4>Celular</h4>
        </div>

        <div className="col-md-1 item-c-2">
        <span className="vcredito-t">$000.000</span>
        
        </div>

        <div className="col-md-2 item-c-3">
        <span className="vcredito-t">Crédito N° 03540840</span>
        
        </div>

        <div className="col-md-2 item-c-4">
        <b>Progreso</b> <ProgressBar variant="success" now={0} />
        
        </div>

        <div className="col-md-1 item-c-5">
        <button type="button" className="btn btn-success btn-cr">Pagar cuota</button>
        
        </div>

        <div className="col-md-1 item-c-6 btncredits">
        <button type="button" className="btn btn-crr">Ver mas <i className="fas fa-sort-down"></i></button>
        
        </div>
      
      </div>

      </Tab>
      <Tab eventKey="cancelados" title={<span><img className='tabimg' src={iconCreditos} />Créditos cancelados </span>}>
      <div className="row item-credito">
        <div className="col-md-2 item-c-aa">
        <h4>Crédito N° #######</h4>
        </div>


        <div className="col-md-2 item-c-3">
        
        
        </div>

        <div className="col-md-2 item-c-4">
        <span className="vcredito-t">$000.000</span>
        
        </div>

        <div className="col-md-1 item-c-5">
        <button type="button" className="btn btn-success btn-cr">Generar paz y salvo</button>
        
        </div>

        <div className="col-md-1 item-c-6 btncredits">
        <button type="button" className="btn btn-crr">Ver mas <i class="fas fa-sort-down"></i></button>
        
        </div>
      
      </div>

      <div className="row item-credito">
        <div className="col-md-2 item-c-aa">
        <h4>Crédito N° #######</h4>
        </div>


        <div className="col-md-2 item-c-3">
        
        
        </div>

        <div className="col-md-2 item-c-4">
        <span className="vcredito-t">$000.000</span>
        
        </div>

        <div className="col-md-1 item-c-5">
        <button type="button" className="btn btn-success btn-cr">Generar paz y salvo</button>
        
        </div>

        <div className="col-md-1 item-c-6 btncredits">
        <button type="button" className="btn btn-crr">Ver mas <i class="fas fa-sort-down"></i></button>
        
        </div>
      
      </div>

      <div className="row item-credito">
        <div className="col-md-2 item-c-aa">
        <h4>Crédito N° #######</h4>
        </div>


        <div className="col-md-2 item-c-3">
        
        
        </div>

        <div className="col-md-2 item-c-4">
        <span className="vcredito-t">$000.000</span>
        
        </div>

        <div className="col-md-1 item-c-5">
        <button type="button" className="btn btn-success btn-cr">Generar paz y salvo</button>
        
        </div>

        <div className="col-md-1 item-c-6 btncredits">
        <button type="button" className="btn btn-crr">Ver mas <i class="fas fa-sort-down"></i></button>
        
        </div>
      
      </div>
      </Tab>
     
    </Tabs>
                    
                    </div>
                    
                    
                    </div>


            </div>
        </Dashboard>

    )
}
