import "../styles/Home.css";

function Location(props) {
    return (
        <div className="location">
            <div className="location-name-wrapper">
                <h2 className="location-name">props.name</h2>
                <h3 className="location-address">props.address</h3>
            </div>
            <div className="location-rating-wrapper">
                <h2 className="location-rating">props.rating</h2>
                <h3 className="location-incidents">props.incidents</h3>
            </div>
        </div>
    )
}

function Review(props) {
    return (
        <div className="review">
            {/* <h2 className="review-name">props.name</h2>
            <h2 className="review-score">props.score</h2>
            <p className="review-content">props.content</p>  */}

            <div className="review-title-wrapper">
                <h2 className="review-name">props.name</h2>
                <h3 className="review-author">props.author</h3>
            </div>
            <div className="review-score">props.score</div>
            <div className="review-content">props.content</div>
        </div>
    )
}

function Home() {
	return (
		<div id="wrapper">
            <div id="sidebar-wrapper">
                <div id="sidebar-locations">
                    <Location name="Burger King" address="420 Gamer Blvd" rating="4.2" incidents=""/>
                </div>
                <div id="sidebar-reviews">
                    <Review name="I hate burgerking" score={5.2} content="I don't like their chicken nuggets. Nuff said."/>
                </div>
            </div>
            
            <div id="map"></div>
		</div>
	);
}

export default Home;