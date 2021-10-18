import Dashboard from '../components/layout/adminLayout'
export default function DashboardPage(props) {
    return (

        <Dashboard>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6"><h2>Créditos</h2></div>
                        <div className="col-md-6"><button className="btn btn-primary" onClick={()=>{window.location.href="/solicitud_credito"}}>Solicitar Crédito</button></div>

                    </div>


            </div>
        </Dashboard>

    )
}
