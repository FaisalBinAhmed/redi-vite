

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// this id here is temporary and rate limited, so if you run out of requests, generate a new one at https://crudcrud.com/ and replace it here
const CRUDCRUD_ID = "a86fa55a29c3493ba062f362fc930767";

export const BASE_URL = `https://crudcrud.com/api/${CRUDCRUD_ID}/products`;

export type NewsItem = {
    _id: string;
    title: string;
};

const fetchNewsItems = async (): Promise<NewsItem[]> => {
    const res = await fetch(BASE_URL);
    return res.json();
};

export const useNewsItemsQuery = (key?:string) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["newsItems", key],
        queryFn: fetchNewsItems,
        retry: 10,
    });

    return { newsItems: data ?? [], isLoading, isError };
};

export const useAddProductMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addProduct,
        onSuccess: (newProduct) => {
            queryClient.invalidateQueries({ queryKey: ["newsItems"]})
        },
    });
};
const addProduct = async (title: string): Promise<NewsItem> => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    return res.json();
};