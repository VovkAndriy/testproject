/** @format */

import React, { useState } from "react";

import { TodoForm, TodoList, TodoResults } from "@todcode/components";
import { TodosContext } from "@todcode/components/src/todo-context";

const todosTemplate = [
	{
		id: 0,
		label: "Fix an ability to display all tasks",
		checked: false,
	},
	{
		id: 1,
		label: "Fix a layout, checkboxes should be listed in a column",
		checked: false,
	},
	{
		id: 2,
		label: "Fix an ability to add a new task",
		checked: false,
	},
	{
		id: 3,
		label: "Fix an ability to toggle a task",
		checked: false,
	},
	{
		id: 4,
		label: "Fix an ability to delete a task",
		checked: false,
	},
	{
		id: 5,
		label: "Fix an ability to count completed tasks",
		checked: false,
	},
];

function App() {
	const [todos, setTodos] = React.useState([]);

	return (
		<div className='App'>
			<header className='App-header'>
				<TodosContext.Provider value={{ todos }}>
					<TodoList />
					<TodoResults />
					<TodoForm />
				</TodosContext.Provider>
			</header>
		</div>
	);
}

export default App;
