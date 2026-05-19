"use client";
import { useEffect } from "react";


async function fetchSomething() {

    const response = await fetch("/api");
    const data = await response.json();
    console.log("API response:", data);
    // return data;

}


export default function RediPage() {

    useEffect(() => {
        console.log("Redi page loaded");

        fetchSomething();

    }, []);


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Redi Page</h1>
            <p>This is the Redi page. You can add products and see them in the newsfeed.</p>
        </div>
    );
}