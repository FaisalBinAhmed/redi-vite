import { useCounter } from "./hooks/useCounter";

const Footer: React.FC = () => {
	const { counter, increment, decrement } = useCounter();

	return (
		<footer style={{ padding: "1rem", textAlign: "center" }}>
			<div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
				<span>Count: {counter}</span>
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
