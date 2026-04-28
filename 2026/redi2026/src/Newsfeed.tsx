import { useState } from "react";
import { useAddProductMutation, useNewsItemsQuery, type NewsItem } from "./queries/useNewsItems";

const NewsCard = ({ item }: { item: NewsItem }) => (
    <li className="rounded overflow-hidden">
        <img src={`https://picsum.photos/seed/${item._id}/400/200`} alt={item.title} className="w-full object-cover h-40" />
        <div className="p-3">
            <strong className="text-sm">{item.title}</strong>
        </div>
    </li>
);

const AddProductForm = () => {
    const [title, setTitle] = useState("");
    const { mutate, isPending, isSuccess, data } = useAddProductMutation();

    const handleSubmit = (_e: React.FormEvent) => {
        mutate(title);
        setTitle("");
    }

    return (
        <div className="p-6 flex gap-2 items-center">
            <input
                className="border px-3 py-1 rounded text-sm"
                placeholder="Product title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                onClick={handleSubmit}
                disabled={isPending}
            >
                {isPending ? "Adding..." : "Add Product"}
            </button>
        </div>
    );
};

export const Newsfeed = () => {
    const { newsItems, isLoading, isError } = useNewsItemsQuery();
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong.</p>;

    return (
        <div>
            <AddProductForm />
            <ul className="grid grid-cols-3 gap-4 p-6">
                {newsItems.map(item => <NewsCard key={item._id} item={item} />)}
            </ul>
        </div>
    );
};