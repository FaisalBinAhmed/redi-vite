import { useState } from "react";
import { useNewsItemsQuery } from "./queries/useNewsItems";



export const ProductFeed = () => {

    const [key, setKey] = useState<number>(0);

    const { newsItems, isLoading, isError } = useNewsItemsQuery(key.toString());


    console.log("News items:", newsItems);

    return (
        <div>
            <h1>Product Feed</h1>
            <p>This is the product feed.</p>
            <button className="p-2 bg-green-500 rounded text-white" onClick={() => setKey(k => k + 1)}>{key}</button>
        </div>
    );
}