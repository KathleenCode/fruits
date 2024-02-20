import watermelon from "../images/watermelon.jpg";
import "./fruit.css";
import { Link } from "react-router-dom";

export default function Watermelon() {
  return (
    <>
      <div className="fruit wa">
       <div className="title">
        <span>WATERMELON</span>
        <p>fruit</p>
       </div>
       <div className="image">
         <img src={watermelon} alt="watermelon" />
       </div>
       <Link to="watermelon"><button>Seek</button></Link>
      </div>
    </>
  )
}
