import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power1, Power3 } from "gsap";

const Balls = () => {
	let circle = useRef(null);
	let circleRed = useRef(null);
	let circleBlue = useRef(null);

    const [expanded, setExpanded] = useState(false)

    const handleExpand = () => {
        TweenMax.to(circleBlue, .8, { width: 200, height: 200, borderRadius: '5px', ease: Power1.easeOut });
        setExpanded(true);
    }
    
    const handleShrink = () => {
        TweenMax.to(circleBlue, .8, { width: 75, height: 75, borderRadius: '100%', ease: Power1.easeOut });
        setExpanded(false);
    }

	useEffect(() => {
		// TweenMax.from(circle, 1, { opacity: 0, x:40, ease: Power3.easeOut, delay: .5})
		// TweenMax.from(circleRed, 1, { opacity: 0, x:40, ease: Power3.easeOut, delay: 1})
		// TweenMax.from(circleBlue, 1, { opacity: 0, x:40, ease: Power3.easeOut, delay: 1.5})
		TweenMax.staggerFrom(
			[circle, circleBlue, circleRed],
			1,
			{ opacity: 0, x: 40, ease: Power1.easeOut },
			0.5
		);
	}, []);

	return (
		<div className="circle-container">
			<div ref={(target) => (circle = target)} className="circle"></div>
            <div onClick={expanded !== true ? handleExpand : handleShrink} ref={(target) => (circleBlue = target)} className="circle blue"></div>
			<div ref={(target) => (circleRed = target)} className="circle red"></div>
		</div>
	);
};

export default Balls;
