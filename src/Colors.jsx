import { Link, useNavigate } from "react-router-dom";
import "./Colors.css";


function Colors({colors, setBackgroundColor, baseColor}) {
  const renderLinks = () => {
    return(
        <>
        {colors.map(col =>
          {let color = col.rgb;
            return (<Link  style={ {color} } className="Colors-link" to={`/colors/${col.name}`}>{col.name}</Link>)
        })}
        </>
    )
  }

    setBackgroundColor(baseColor)

  


    return (
      <div className="Colors">
        <Link to="/" className="NavBar-link">Go Back Home</Link>
        <Link className="Colors-link" to='/colors/new'>Add a New Color</Link>
        <h1>Colors are cool!</h1>
        
        {renderLinks()}
      </div>
    );
  }
  
  export default Colors;