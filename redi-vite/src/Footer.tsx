import { useState, useCallback } from "react";

const Footer: React.FC = () => {
	const [count, setCount] = useState(0);

	const increment = useCallback(() => setCount((c) => c + 1), []);
	const decrement = useCallback(() => setCount((c) => c - 1), []);

	return (
		<footer style={{ padding: "1rem", textAlign: "center" }}>
			<div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
				<button type="button" onClick={increment}>
					Increment
				</button>
				<button type="button" onClick={decrement}>
					Decrement
				</button>
			</div>
		</footer>
	);
};

export default Footer;
