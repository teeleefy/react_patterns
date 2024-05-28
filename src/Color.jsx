import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './Color.css';

function Color({colors, setBackgroundColor}){
    const {name} = useParams();
    const color = colors.find(color => color.name === name);
    let navigate = useNavigate();

    useEffect(function checkColorName(){
        if(!color){
            navigate('/colors');
            }}, [color, navigate])
    

    if(!color){
        return null;
    }



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