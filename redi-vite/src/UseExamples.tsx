import { useCallback, useMemo, useState } from "react";

let previousProblemFn: (() => void) | null = null;
let previousSolutionFn: (() => void) | null = null;

function slowDouble(n: number, label: string) {
    const start = performance.now();
    console.log(`⏳ ${label}: slowDouble is running...`);
    for (let i = 0; i < 1_000_000_000; i++) { }
    const end = performance.now();
    console.log(`⏳ ${label}: slowDouble took ${(end - start).toFixed(2)} ms`);
    return n * 2;
}

function TheProblem() {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    console.log("❌ Problem: component re-rendering...");

    // const doubled = slowDouble(count, "Problem");

    // const doubled = useMemo(() => slowDouble(count, "Solution"), [count]);

    // const handleClick = () => {
    //     console.log("clicked");
    // };

    const handleClick = useCallback(
        () => {
            console.log("clicked");
        },
        [] // No dependencies, so the function is created only once
    );


    console.log("❌ Same as last render?", handleClick === previousProblemFn);
    previousProblemFn = handleClick;

    return (
        <div style={{ background: dark ? "#333" : "#fff", padding: 20 }}>
            <h2>The Problem</h2>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <button onClick={() => setDark(!dark)}>Toggle theme</button>
            {/* <p>Doubled (slow): {doubled}</p> */}
            <button onClick={handleClick}>Do something</button>
            {/* <TeextComponent handleClick={handleClick} /> */}
        </div>
    );
}

function TheSolution() {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    console.log("✅ Solution: component re-rendering...");

    const doubled = useMemo(() => slowDouble(count, "Solution"), [count]);

    useMemo(() => slowDouble(count, "Solution"), []);

    const handleClick = useCallback(() => {
        console.log("clicked");
    }, []);
    console.log("✅ Same as last render?", handleClick === previousSolutionFn);
    previousSolutionFn = handleClick;

    return (
        <div style={{ background: dark ? "#333" : "#fff", padding: 20 }}>
            <h2>The Solution</h2>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <button onClick={() => setDark(!dark)}>Toggle theme</button>
            <h5 style={{ color: "red" }}>Doubled (slow): {doubled}</h5>
            <button onClick={handleClick}>Do something</button>
        </div>
    );
}

export default function UseExamples() {
    return (
        <div>
            <TheProblem />
            <hr />
            {/* <TheSolution /> */}
        </div>
    );
}
