import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Color.css';

function Color({colors, setBackgroundColor}){
    const {name} = useParams();
    const color = colors.find(color => color.name === name);
    const h1Style = color.name === "black" ? "white" : "black";
    setBackgroundColor(color.rgb);
    return(
        <div className="Color">
        <Link to="/colors" className="Color-link">Go Back to all Colors</Link>
        <h1 className={h1Style}>Isn't {color.name} so beautiful??</h1>
        </div>
    )
}

export default Color;