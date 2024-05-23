import { Link } from "react-router-dom";
import "./NavBar.css";
import { render } from "@testing-library/react";


function NavBar({dogs}) {
    const renderLinks = () => {
        return(
            <>
            {dogs.map(dog =>
                <Link to={`/dogs${dog.name}`}>{dog.name}</Link>
            )}
            </>
        )
    }
            



  return (
    <nav className="NavBar">
        {/* {renderLinks()} */}
      <Link to="/dogs" className="NavBar-link">
        Dog Finder
      </Link>
      <Link to="/colors" className="NavBar-link">
        Color Factory
      </Link>
      {/* <p>{dogs[0].name}</p> */}
    </nav>
  );
}

export default NavBar;