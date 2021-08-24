
import Navbar from '../common/navbar'
import Footer from '../common/footer'
 
 

export default function PageLayout(props) {
  return (

<div className="page-wrapper">

    <Navbar/>

    <div key="xx2" className="row" >
    <div className="col-md-3 hide-xs"></div>
    
    <div className="col-md-6 col-xs-12">{props.children}</div>
    
    <div className="col-md-3 hide-xs"></div>
    
    </div>


    
    <Footer/>

</div>
 
    )
}