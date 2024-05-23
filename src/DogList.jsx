import { Link } from "react-router-dom";
import './DogList.css'

function DogList({dogs}){
    const renderLinks = () => {
        return(
            <>
            {dogs.map(dog =>
                <Link  className="DogList-dog" to={`/dogs/${dog.name}`}>{dog.name}</Link>
            )}
            </>
        )
    }

    return(
        <div>
            <Link to="/" className="DogList-back">Go Back Home</Link>
            
            <h1>Check out these pups!</h1>
            {renderLinks()}
        </div>
    )
}

export default DogList;