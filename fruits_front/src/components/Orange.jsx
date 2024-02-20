import orange from "../images/orange.jpg";
import "./fruit.css";
import { Link } from "react-router-dom";


export default function Orange() {
  return (
    <>
      <div className="fruit or">
       <div className="title">
        <span>ORANGE</span>
        <p>fruit</p>
       </div>
       <div className="image">
         <img src={orange} alt="orange" />
       </div>
       <Link to="orange"><button>Seek</button></Link>
      </div>
    </>
  )
}
