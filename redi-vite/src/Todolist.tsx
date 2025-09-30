import { useCallback, useEffect, useMemo, useState } from "react";

type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export const Todolist = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const fetchTodos = useCallback(async () => {
		const todosFromApi = await fetch(
			"https://jsonplaceholder.typicode.com/todos",
		);
		const todosJson: Todo[] = await todosFromApi.json();
		setTodos(todosJson);
	}, []);

	useEffect(() => {
		fetchTodos();
	}, []); // it doesnt depends on anything, so it runs only once

	useEffect(() => {
		console.log("fetchTodos reference changed");
	}, [fetchTodos]); // it runs when todos change

	const totalTodoChars = useMemo(
		() => todos.reduce((acc, todo) => acc + todo.title.length, 0),
		[todos],
	);
	// console.log("Total characters in todo titles:", totalTodoChars);

	return (
		<div>
			<p>Total characters in todo titles: {totalTodoChars}</p>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};
