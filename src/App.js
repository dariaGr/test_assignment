import React from "react";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Position from "./components/Position";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "Андрей Снигирёв",
			profession: "UX/UI designer",
			responses: 0,
			views: 0,
			salary: "35 000 руб.",
			experience: "9 месяцев",
			conditions: "Полная занятость, удалённая работа",
		};
	}

	render() {
		const { name, profession, responses, views, salary, experience, conditions } = this.state;

		return (
			<div>
				<Header />
				<div className="main">
					<Profile name={name} profession={profession} responses={responses} views={views} />
					<Position profession={profession} salary={salary} experience={experience} conditions={conditions} />
				</div>
			</div>
		);
	}
}

export default App;
