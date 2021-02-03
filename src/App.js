import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import { TweenMax, Power3 } from "gsap";
import "./App.css";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

	useEffect(() => {
		TweenMax.to(logoItem, 0.8, {
		opacity: 1,
		y: -20,
		ease: Power3.easeOut,
    }
  )
		TweenMax.to(textItem, 0.8, {
		opacity: 1,
		y: -20,
      ease: Power3.easeOut,
      delay: .5
    }
  )
  
  }, []);

	console.log(logoItem);
	return (
    <div className="App">
      <balls />
			<header className="App-header" alt="logo">
				<img
					ref={(el) => {
						logoItem = el;
					}}
					src={logo}
					className="App-Logo"
					alt="logo"
				/>
				<p ref={el => {textItem = el}}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://react.js.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
