import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import { TweenMax, Power3 } from "gsap";
import "./App.css";
import Balls from "./components/balls";

function App() {
	let app = useRef(null);
	let logoItem = useRef(null);
	let textItem = useRef(null);

	useEffect(() => {
		TweenMax.to(app, 0, {
			css: { visibility: "visible" },
		});
		TweenMax.to(logoItem, 1, {
			opacity: 1,
			y: -20,
			ease: Power3.easeOut,
		});
		TweenMax.to(textItem, 1, {
			opacity: 1,
			y: -20,
			ease: Power3.easeOut,
			delay: 2,
    });
	}, []);

	return (
		<div
			ref={(target) => {
				target = app = target;
			}}
			className="App"
		>
			<header className="App-header" alt="logo">
				<img
					ref={(el) => {
						logoItem = el;
					}}
					src={logo}
					className="App-Logo"
					alt="logo"
				/>
				<Balls />
				<p
					ref={(el) => {
						textItem = el;
					}}
				>
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
