import mango from "../images/mango.jpg";
import { Link } from "react-router-dom";
import "./PageAll.css";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function MangoPage() {
  return (
    <>
      <div className="aft ma">
        <Link to="/products"><FaArrowLeft /> Go to Products Page</Link>
        <img src={mango} alt="mango" />
        <div className="sp">
          <div>
           <span>MANGO</span>
           <p>fruit</p>
          </div>
          <div className="i"><FaRegHeart /></div>
        </div>
        <div className="gr">
          <div>
            <p>Serving</p>
            <p>6-9</p>
          </div>
          <div>
           <p>Fat</p>
           <p>5g</p>
          </div>
          <div>
            <p>Calorie</p>
            <p>3</p>
          </div>
        </div>
        <p className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Dicta ab, alias dignissimos iste beatae qui quis sed nihil 
            magni doloribus officiis, totam hic ipsa corporis et harum 
            quod exercitationem soluta.
        </p>
      </div>
    </>
  )
}
