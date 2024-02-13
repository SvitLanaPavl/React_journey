import AirbnbImage from "../images/airbnb-nav.jpg";
export default function Navbar() {
    return (
        <nav>
            <img src={AirbnbImage} alt="AirBnb Nav Image" className="nav--logo"/>
        </nav>
    )
}