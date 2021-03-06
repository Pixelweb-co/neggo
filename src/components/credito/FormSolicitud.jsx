import React, { useEffect, useState } from 'react'
import TarjetaIcon from '../../assets/images/tarjeta.png'; 
import Vineta1 from '../../assets/images/vineta1.png';
import Icon_arrow from '../../assets/images/icon_arrow.png' 
import NumberFormat from "react-number-format";
import axios from 'axios';
import Modal from '../../components/common/modal'

function FormSolicitud() {
    const [total, setTotal] = useState(0)
    const [monto,setMonto] = useState(0)
    const [iva,setIva] = useState(0)
    const [tecnologia_v,setTecValue]=useState(0)
    const [seguro, setSeguro]=useState(0)
    const [config_data,setConfigData]=useState(null)
    const [modalShow, setModalShow] = React.useState(false);
    const [tipo_creditos, SetTipoCreditos] = useState([]);
    const [plazo,setPlazo]=useState('1')
    const [tipo,setTipo]=useState('1')

//calcular total
    const calculate = e => {    
        console.log(config_data)
        if(parseInt(e.target.value) > 0){
        setMonto(e.target.value)
        setSeguro(config_data.v_seguro)
        setTecValue(config_data.v_administracion)
        const total_iva = (parseInt(e.target.value) +  parseInt(config_data.v_seguro)  +  parseInt(config_data.v_administracion) ) * parseInt(config_data.iva_p) / 100
        setIva(total_iva)
        setTotal(parseInt(e.target.value) +  parseInt(config_data.v_seguro)  +  parseInt(config_data.v_administracion)  + total_iva)


        }    

    }

    const prepararSolicitud = async () =>{

            
            setModalShow(false)

        const solicitud_credito = {
            cliente: window.localStorage.getItem('userId'),
            monto:monto,
            total:total,
            iva:iva,
            seguro:seguro,
            tecnologia_v:tecnologia_v,
            plazo:plazo,
            tipo_creditos:tipo_creditos,
            tipo:tipo
        }

        console.log("sol",solicitud_credito)

        
        axios.defaults.baseURL = process.env.REACT_APP_API_URL
    
        await axios
        .post('/api/creditos', solicitud_credito)
        .then((response) => {
    
          console.log("response api",response)
         
            
    
    
        })
        .catch((error) => {
          if (error.response) {
           
                return false
          }
        })


    }

    const get_config_credito = async() => {
        var formc = new FormData();
      
        formc.append('modulo','credito')
       
         axios.defaults.baseURL = process.env.REACT_APP_API_URL
    
        await axios
        .post('/api/config/get_config', formc)
        .then((response) => {
    
          console.log("response api")
         
       
            setConfigData(response.data)   
            
      
    
    
        })
        .catch((error) => {
          if (error.response) {
           
                return false
          }
        })


    }

     const get_tipos_credito = async() => {
       
       
         axios.defaults.baseURL = process.env.REACT_APP_API_URL
    
        await axios
        .get('/api/tipo_creditos')
        .then((response) => {
    
          console.log("response t api")
         
       
            SetTipoCreditos(response.data)   
            
      
    
    
        })
        .catch((error) => {
          if (error.response) {
           
                return false
          }
        })


    }
    
    
  useEffect(()=>{
    get_config_credito();
    get_tipos_credito();
  
  },[]);

    return (
        <div className="container" >
            <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onCreate={()=>{prepararSolicitud(true)}}
            />
                    <div className="row ">
                    <div className="form_container_c">
                        <div className="header_form" align="right"><h1>Solicitud de Cr??dito</h1></div>
                        <div className="card shadow">
                        <div className="row">
                            <div className="col-md-6 izq_form ">
                                <div className="tarjeta_contanier">

                                    <img src={TarjetaIcon} className="tarjeta_img"/>

                                </div>

                                <div className="form_inputs">

                                    <div className="form-group">
                                        <label className="label_cred">Monto a solicitar</label>
                                        <input className="form-control transparent-inputcredit" type="number" name="monto" onKeyUp={(e)=>{calculate(e)}}/>
                                    </div>

                                    <div className="form-group sl">
                                        <label className="label_cred">Tiempo de prestamo</label>
                                       <select className="form-control transparent-inputcredit" onChange={(e)=>{setPlazo(e.target.value)}}>
                                           <option value="1">1 MES</option> 
                                           <option value="3">3 MESES</option>   
                                           <option value="6">6 MESES</option>   
                                           <option value="12">12 MESES</option>   
                                           <option value="18">18 MESES</option>  
                                           <option value="24">24 MESES</option>     
                                       </select>
                                       <img src={Icon_arrow} className="iconarrow"/>
                                    </div>

                                     <div className="form-group sl">
                                        <label className="label_cred">Tipo de cr??dito</label>
                                       <select className="form-control transparent-inputcredit" onChange={(e)=>{setTipo(e.target.value)}}>
                                           <option value="">Seleccione</option>  
                                           {tipo_creditos && tipo_creditos.map((item,index)=>{
                                           
                                           
                                           return(<option value={item.id}>{item.nombre}</option>) 
                                           
                                           })} 
                                       </select>
                                       <img src={Icon_arrow} className="iconarrow"/>
                                    </div>
                                    


                                </div>


                            </div>
                            <div className="col-md-6 der_form">
                                <div className="vineta1">
                                    <img src={Vineta1}/>
                                </div>
                                
                                <div className="item_c">
                                <h3>Valor de el cr??dito</h3>  
                                <h2>$ {monto >0 ? (<NumberFormat value={monto} displayType={'text'} decimalSeparator={'.'} thousandSeparator={true} />) :('000.000')}</h2>            
                                </div>

                                <div className="item_c">
                                <h3>Seguro</h3>  
                                 <h2>$ {seguro >0 ? (<NumberFormat value={seguro} displayType={'text'} decimalSeparator={'.'} thousandSeparator={true} />) :('000.000')}</h2>            
                                          
                                </div>

                                <div className="item_c">
                                <h3>Iva</h3>  
                                <h2>$ {iva >0 ? (<NumberFormat value={iva} displayType={'text'} decimalSeparator={'.'} thousandSeparator={true} />) :('000.000')}</h2>            
                                
                                </div>

                                <div className="item_c">
                                <h3>T??cnologia</h3>  
                                <h2>$ {tecnologia_v >0 ? (<NumberFormat value={tecnologia_v} displayType={'text'} decimalSeparator={'.'} thousandSeparator={true} />) :('000.000')}</h2>            
                                         
                                </div>

                                <div className="item_c endf">
                                <h3>Total a Pagar</h3>  
                                <h2>$ {total >0 ? (<NumberFormat value={total} displayType={'text'} decimalSeparator={'.'} thousandSeparator={true} />) :('000.000')}</h2>            
                                           
                                </div>

                            </div>
                            </div>
                         

                        </div>
                        <div className="" align="right">

                         <button 
                         type="button" 
                         className=" btn-success btns1 pull-right" 
                         onClick={() => {setModalShow(true)}}
                         style={{fontFamily: "Saira"}}>Solicitar Credito</button>
              
                            </div>
                    </div>

                    </div>

            
            </div>
    )
}

export default FormSolicitud
