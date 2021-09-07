import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Slider() {

    const slideImages = [
        '/assets/images/bg_1.jpg',
        '/assets/images/bg_2.jpg'
      ];


    return (

      <h1>Neggo</h1>
       
            // <div className="slide-container">
            //   <Slide>
            //     <div className="each-slide">
            //       <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            //         <span>Sli</span>
            //       </div>
            //     </div>
            //     <div className="each-slide">
            //       <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            //         <span>Slide 2</span>
            //       </div>
            //     </div>
                
            //   </Slide>
            // </div>
          
    )
}
