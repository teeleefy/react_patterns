import NavBar from "./NavBar"
import rainbowDog from "./assets/rainbow-dog.webp"
import "./Home.css";


function Home() {
  return (
    <div className="Home">
        <NavBar/>
        <img  src={rainbowDog}></img> 

    </div>
  );
}

export default Home;