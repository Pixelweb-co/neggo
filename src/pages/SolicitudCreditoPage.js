import Dashboard from '../components/layout/adminLayout'

import '../styles/solicitud.css'

export default function DashboardPage(props) {
    return (

        <Dashboard>
      
            <div className="container" >
                    <div className="row ">
                    <div className="form_container_c">
                        <div className="header_form" align="right"><h1>Solicitud de Crédito</h1></div>
                        <div className="card shadow">
                        <div className="row">
                            <div className="col-md-6 izq_form ">a</div>
                            <div className="col-md-6 der_form">
                                <div className="item_c">
                                <h3>Valor de el crédito</h3>  
                                <h2>$ 000.000</h2>            
                                </div>

                                <div className="item_c">
                                <h3>Seguro</h3>  
                                <h2>$ 000.000</h2>            
                                </div>

                                <div className="item_c">
                                <h3>Iva</h3>  
                                <h2>$ 000.000</h2>            
                                </div>

                                <div className="item_c">
                                <h3>Técnologia</h3>  
                                <h2>$ 000.000</h2>            
                                </div>

                                <div className="item_c endf">
                                <h3>Técnologia</h3>  
                                <h2>$ 000.000</h2>            
                                </div>

                            </div>
                            </div>

                        </div>
                    </div>

                    </div>

            
            </div>
        </Dashboard>

    )
}
