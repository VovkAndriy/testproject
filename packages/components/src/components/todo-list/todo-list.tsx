/** @format */

import * as React from "react";
import { Checkbox } from "@todcode/components";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
	const { todos, setTodos } = React.useContext<any>(TodosContext);

	const handleDelete = (id: number) => {
		// Fix an ability to delete task
	};

	const toggleCheck = (id: any) => {
		// Fix an ability to toggle task
	};

	const handleKeyUp = (e: any, id: any) => {
		if (e.keyCode === 13) {
			toggleCheck(id);
		}
	};

	return (
		<div className='todo-list'>
			<span className='todo-list-title'>Things to do:</span>
			{todos.length ? (
				<div className='todo-list-content'>
					{todos.map((todoItem: any) => (
						<Checkbox
							label={todoItem.label}
							checked={todoItem.checked}
							onClick={() => toggleCheck(todoItem.id)}
							onKeyUp={(e: any) => handleKeyUp(e, todoItem.id)}
							onDelete={() => handleDelete(todoItem.id)}
						/>
					))}
				</div>
			) : (
				<div className='no-todos'>Looks like you&apos;re absolutely free today!</div>
			)}
		</div>
	);
};
