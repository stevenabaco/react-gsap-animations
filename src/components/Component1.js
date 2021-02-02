import React from "react";
import { useSpring, animated } from "react-spring";

const c1Style = {
	background: "steelblue",
	color: "white",
	padding: "1.5rem",
};

export default function Component1() {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (
        <animated.div style={props}>

        </animated.div>
			{(props) => (
				<div style={props}>
					<div style={c1Style}>
						<h1>Component 1</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Recusandae, placeat assumenda. Est doloribus veniam laboriosam!
							Dolore fugit debitis voluptates itaque doloremque esse fugiat
							iusto repellendus explicabo. Cumque quibusdam laudantium fuga!
						</p>
					</div>
				</div>
			)}
	);
}
