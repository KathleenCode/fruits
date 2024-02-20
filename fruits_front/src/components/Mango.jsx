import mango from "../images/mango.jpg";
import "./fruit.css";
import { Link } from "react-router-dom";

export default function Mango() {
  return (
    <>
      <div className="fruit ma">
       <div className="title">
        <span>MANGO</span>
        <p>fruit</p>
       </div>
       <div className="image">
         <img src={mango} alt="mango" />
       </div>
       <Link to="mango"><button>Seek</button></Link>
      </div>
    </>
  )
}
