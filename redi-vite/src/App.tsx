import { useEffect, useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
	const [count, setCount] = useState(0);
	const [info, setInfo] = useState("dummy info");

	useEffect(() => {
		if (count > 10) {
			setInfo("Count is greater than 10");
		}
	}, [count]);

	return (
		<div className="card">
			<button type="button" onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
			<p>{info}</p>
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
			{count === 5 && <Todolist />}
		</div>
	);
}

export default App;