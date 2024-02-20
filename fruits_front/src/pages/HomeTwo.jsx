import React from 'react'
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import "./PageAll.css";

export default function HomeTwo() {
    const params = useParams();
    const data = useLoaderData();
    // console.log(data);

  return (
    <>
        <div>
            <Link to="/" className="holm"><FaArrowLeft /> Back</Link>
            <div className="hom">
                <span>{params.idh}</span>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.body}</p>
            </div>
        </div>
    </>
  )
}
