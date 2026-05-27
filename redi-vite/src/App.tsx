// import { useEffect, useState } from "react";
import "./App.css";
// import { Todolist } from "./Todolist";
import Footer from "./Footer";
import { useCounter } from "./hooks/useCounter";
import UseExamples from "./UseExamples";

function App() {
	// const [count, setCount] = useState(0);
	// const [info, setInfo] = useState("dummy info");

	// useEffect(() => {
	// 	if (count > 10) {
	// 		setInfo("Count is greater than 10");
	// 	}
	// }, [count]);

	// const { counter, increment } = useCounter();

	return (
		<div className="card">
			{/* <button type="button" onClick={increment}>
				count is {counter}
			</button> */}
			{/* <p>{info}</p> */}
			{/* {counter === 5 && <Todolist />} */}
			{/* <Todolist /> */}
			<UseExamples />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
