import apple from "../images/apple.jpg";
import "./fruit.css";
import { Link } from "react-router-dom";

export default function Apple() {
  return (
    <>
      <div className="fruit ap">
       <div className="title">
        <span>APPLE</span>
        <p>fruit</p>
       </div>
       <div className="image">
         <img src={apple} alt="apple" />
       </div>
       <Link to="apple" ><button>Seek</button></Link>
      </div>
    </>
  )
}
