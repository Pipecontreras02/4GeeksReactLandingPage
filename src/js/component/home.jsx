import React from "react";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./cardgroup.js";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container ">
				<Jumbotron />
				<div className="row mb-4">
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
				</div>
			</div>
			<div className="container-fluid text-center bg-dark footer">
				<p className="text-secondary h-100 ">
					Copyright @ Felipe React Landing Page{" "}
				</p>
			</div>
		</div>
	);
};

export default Home;
