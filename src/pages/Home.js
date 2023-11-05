import "../styles/Home.css";

function Location(props) {
    return (
        <div className="location">
            <div className="location-name-wrapper">
                <h2 className="location-name">props.name</h2>
                <h3 className="location-address">props.address</h3>
            </div>
            <div className="location-rating-wrapper">
                <div className="location-rating">props.rating</div>
                <div className="location-incidents">props.incidents</div>
            </div>
        </div>
    )
}

function Review() {
    return (
        <div className="review">

        </div>
    )
}

function Home() {
	return (
		<div id="wrapper">
            <Location name="Burger King" address="420 Gamer Blvd" rating="4.2" incidents=""/>
            <div id="map"></div>
		</div>
	);
}

export default Home;