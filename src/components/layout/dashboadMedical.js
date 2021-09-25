
import Navbar from '../common/navbar_medical'

 
 

export default function DashboardMedical(props) {
  return (

<div className="page-wrapper">

    <Navbar/>

    <div key="xx2" >{props.children}</div>


    
    <Footer/>

</div>
 
    )
}