import { Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react'
import './DogDetails.css';

function DogDetails({dogs}){
    const {name} = useParams();
    // const [dog, setDog] = useState({});
    let dog = dogs.find(dog => dog.name === name);
    
    // let navigate = useNavigate();
    // console.log(dog)
    // useEffect(function checkDogName(){
        
    //     let dogObj = dogs.find(dog => dog.name === name);
            // setDog(dogObj)
    //     if(dogObj === undefined){
    //     navigate('/dogs')
    // } 
    //         }, [dog])
    
    return(
        <>
        <Link to="/dogs" className="DogDetails-back">Go Back to all Dogs</Link>
        <h1>Details about {dog.name}</h1>
        <div className="DogDetails">
        <img className="DogDetails-img" src={dog.src}></img>
            
            <div id="facts">
               <h2>Age: {dog.age}</h2> 
            {dog.facts.map(fact=> (<p>{fact}</p>))}
            </div>
        </div>
        </>
    )
}

export default DogDetails;