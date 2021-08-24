
import Navbar from '../common/navbar'
import Footer from '../common/footer'
 
 

export default function PageLayout(props) {
  return (

<div className="page-wrapper">

    <Navbar/>

    <div key="xx2" >{props.children}</div>


    
    <Footer/>

</div>
 
    )
}