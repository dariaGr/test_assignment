import React from "react";
import "./index.css";

class Position extends React.Component {
	render() {
		const { profession, salary, experience, conditions } = this.props;

		return (
			<div className="position">
				<div className="position__top">
					<p className="position__pos">{profession}</p>
					<p className="position__change">Изменить</p>
				</div>
				<div className="position__bottom">
					<div className="position__row">
						<p className="position__left">Ожидаемая зарплата</p>
						<p className="position__right">{salary}</p>
					</div>
					<div className="position__row">
						<p className="position__left">Опыт работы</p>
						<p className="position__right">{experience}</p>
					</div>
					<div className="position__row">
						<p className="position__left">Условия</p>
						<p className="position__right">{conditions}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Position;
