import React from "react";
import "./index.css";
import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header__top">
					<div className="container">
						<div className="header__row">
							<div className="header__column">
								<a href="#">
									<img src={Logo} alt="" />
								</a>
								<p className="header__text">Мой профиль</p>
							</div>
							<div className="header__column">
								<a href="#">
									<img className="header__img" src={Avatar} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="header__bottom"></div>
			</div>
		);
	}
}

export default Header;
