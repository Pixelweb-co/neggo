
import Navbar from '../common/navbar'

 
 

export default function PageLayout(props) {
  return (

<div className="page-wrapper">

    <Navbar/>

    <div key="xx2" >{props.children}</div>


</div>
 
    )
}