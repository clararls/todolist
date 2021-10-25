import React, { useState } from "react";

//create your first component
const Home = () => {
	const [Task, setTask] = useState("");
	const [List, setList] = useState([]);
	const delTask = index => {
		let setInput = List.filter((Task, i) => i !== index);
		setList(setInput);
	};
	const addTask = e => {
		if (e.keyCode === 13) {
			setTask(Task);
			let listTask = List.concat({ label: Task, done: false });
			setList(listTask);
			setTask("");
		}
	};
	return (
		<div className="text-center mt-3">
			<h1>Todo List</h1>
			<input
				type="text"
				value={Task}
				placeholder="What needs to be done?"
				onChange={e => setTask(e.target.value)}
				onKeyUp={addTask}
			/>
			<div id="listbar">
				{List.map((todo, i) => (
					<>
						<div>
							{todo.label}
							<button
								className="btn btn-danger"
								id="delete"
								onClick={() => delTask(i)}>
								<i
									className="fas fa-trash-alt"
									aria-hidden="true"></i>
							</button>
						</div>
					</>
				))}
				<div className="row">
					<div className="col mx-auto">
						<div className="list-group">
							{List.length == 0 ? (
								<div className="list-group-item">
									Add your task...
								</div>
							) : (
								""
							)}
							<li
								id="last"
								className="list-group text-muted text-start counter">
								{List.length} Items left
							</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
