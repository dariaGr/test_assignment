import React from "react";
import "./index.css";
import Avatar from "../../img/avatar.png";

class Profile extends React.Component {
	render() {
		const { name, profession, responses, views } = this.props;

		return (
			<div className="profile">
				<div className="profile__content">
					<img src={Avatar} alt="" />
					<p className="profile__name">{name}</p>
					<p className="profile__position">{profession}</p>
					<div className="profile__row">
						<div className="profile__column">
							<p className="profile__count">{responses}</p>
							<p className="profile__text">отклики</p>
						</div>
						<div className="profile__column">
							<p className="profile__count">{views}</p>
							<p className="profile__text">просмотры</p>
						</div>
					</div>
					<button type="button">Редактировать профиль</button>
				</div>
			</div>
		);
	}
}

export default Profile;
