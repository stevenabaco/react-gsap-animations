import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

const Balls = () => {

    let circle = useRef(null);
    let circleRed = useRef(null);
    let circleBlue = useRef(null);

    useEffect(() => {
        TweenMax.from(circle, 1, { opacity: 0, x:40, ease: Power3.easeOut, delay: .5})
        TweenMax.from(circleRed, 1, { opacity: 0, x:40, ease: Power3.easeOut, delay: 1})
        TweenMax.from(circleBlue, 1, { opacity: 0, x:40, ease: Power3.easeOut, delay: 1.5})
    },[])

    return (
        <div className="circle-container">
        <div 
        ref={target => circle = target}
        className="circle red"></div>    
        <div 
        ref={target => circleRed = target}
        className="circle blue"></div>    
        <div 
        ref={target => circleBlue = target}
        className="circle"></div>    
        </div>
    )
     
    }

export default Balls;

