import { createRef, useRef, useState } from "react";
import "../styles/Home.css";

import { BsFillBackspaceFill } from "react-icons/bs";

import { Map } from "@googlemaps/react-wrapper";

import { analytics } from "./Database";

import { collection, addDoc } from "firebase/firestore";





const locations = {
	1: {
		name: "Burger King",
		address: "420 Gamer Blvd",
		rating: 4.2,
		incidents: 1723,
		reviews: {
			1: {
				title: "I hate burgerking",
				author: "John Doe",
				score: 4,
				content: "I don't like their chicken nuggets. Nuff said.",
			},
			2: {
				title: "mean food",
				author: "Jane Doe",
				score: 3,
				content: "the food looked at me funny",
			},
		},
	},
};




function Location(props) {
	return (
		<div className="location" onClick={() => {props.function(props.id)}}>
			<div className="location-name-wrapper">
				<h2 className="location-name">{props.name}</h2>
				<h3 className="location-address">{props.address}</h3>
			</div>
			<div className="location-rating-wrapper">
				<h2 className="location-rating">{props.rating}</h2>
				<h3 className="location-incidents">{props.incidents} incidents</h3>
			</div>
		</div>
	);
}

function Review(props) {
	return (
		<div className="review">
			{/* <h2 className="review-name">{props.name}</h2>
            <h2 className="review-score">{props.score}</h2>
            <p className="review-content">{props.content}</p>  */}

			<div className="review-title-wrapper">
				<h2 className="review-score">{props.score}</h2>
				<h2 className="review-name">{props.title}</h2>
			</div>
			<h3 className="review-author">{props.author}</h3>
			<div className="review-content">{props.content}</div>
		</div>
	);
}

function Home() {
	const [location, setLocation] = useState(1);
	function updateLocation(location) {
		setLocation(location);
        updateNavbarState("reviews");
	}
	const [navbarState, setNavbarState] = useState("locations");
	const sidebar_wrapper = createRef();
	const locationRef = createRef();
	const reviewRef = createRef();
	function updateNavbarState(navbar) {
		setNavbarState(navbar);
		if (
			sidebar_wrapper.current != null &&
			locationRef.current != null &&
			reviewRef.current != null
		) {
            if (navbarState === "locations") {
                reviewRef.current.scrollIntoView();
            } else {
                locationRef.current.scrollIntoView();
            }
		}
	}

    console.log(analytics.toJSON)

	return (
		<div id="wrapper">
			<div id="sidebar-wrapper" ref={sidebar_wrapper}>
				<div id="sidebar-locations" ref={locationRef}>
					{Object.keys(locations).map((key, index) => (
						<Location
                            key={key}
							id={key}
							name={locations[key].name}
							address={locations[key].address}
							rating={locations[key].rating}
							incidents={locations[key].incidents}
                            function={updateLocation}
						/>
					))}
				</div>
				<div id="sidebar-reviews" ref={reviewRef}>
                    <div id="sidebar-reviews-backbutton-container">
                        <button id="sidebar-reviews-backbutton" onClick={() => {updateNavbarState("locations")}}>
                            <BsFillBackspaceFill />
                        </button>
                    </div>
					{Object.keys(locations[location].reviews).map((key, index) => (
						<Review
							key={key}
							title={locations[location].title}
							author={locations[location].author}
							score={locations[location].score}
							content={locations[location].content}
						/>
					))}
				</div>
			</div>

			<div id="map">
				<Map apiKey="" defaultCenter={{ lat: 43.0848, long: 77.6715 }}/>
			</div>
		</div>
	);
}

export default Home;
