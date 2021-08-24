import WizardForm from '../components/auth/registerMedWizard/wizardForm'
import Layout from '../components/layout/layout'

export default function RegisterPage() {
    return (
           
          <Layout>
            <div className="container">
           <div className="row  ">
                
                <div className="col-md-12 col-xs-12 mb-10">

                <WizardForm/>
                
                </div>
           </div> 
           </div>
            
          
          
           </Layout> 
        )
}
