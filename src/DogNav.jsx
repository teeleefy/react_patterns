import { Link } from "react-router-dom";
import "./NavBar.css";

function DogNav() {
  return (
    <nav className="DogNav">
      
      <Link to="/dogs/chip" className="DogNav-link">
        See more about Chip
      </Link>
      
    </nav>
  );
}

export default DogNav;