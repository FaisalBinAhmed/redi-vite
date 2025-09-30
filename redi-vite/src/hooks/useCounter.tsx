import React, { useState } from "react";

// export const useCounter = () => {
// 	const [counter, setCounter] = useState(0);

// 	const increment = () => setCounter((prev) => prev + 1);
// 	const decrement = () => setCounter((prev) => prev - 1);

// 	return {
// 		counter,
// 		increment,
// 		decrement,
// 	};
// };

type CounterContextType = {
	counter: number;
	increment: () => void;
	decrement: () => void;
};

const counterContext = React.createContext<CounterContextType | undefined>(
	undefined,
);

export const useCounter = () => {
	const context = React.useContext(counterContext);
	if (!context) {
		throw new Error("useCounter must be used within a CounterProvider");
	}
	return context;
};

export const CounterProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [counter, setCounter] = useState(0);

	const increment = () => setCounter((prev) => prev + 1);
	const decrement = () => setCounter((prev) => prev - 1);

	return (
		<counterContext.Provider value={{ counter, increment, decrement }}>
			{children}
		</counterContext.Provider>
	);
};
