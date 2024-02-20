import banana from "../images/banana.jpg";
import "./fruit.css";
import { Link } from "react-router-dom";

export default function Banana() {
  return (
    <>
      <div className="fruit ba">
       <div className="title">
        <span>BANANA</span>
        <p>fruit</p>
       </div>
       <div className="image">
         <img src={banana} alt="banana" />
       </div>
       <Link to="banana"><button>Seek</button></Link>
      </div>
    </>
  )
}
