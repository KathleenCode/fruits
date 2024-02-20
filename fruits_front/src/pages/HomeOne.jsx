import React from 'react'
import { useLoaderData, Link } from 'react-router-dom';
import "./PageAll.css";

export default function HomeOne() {
    const data = useLoaderData();
    console.log(data);

  return (
    <>
     <div className="home">
        {data.map((dat, i) => (
            <Link key={i} to={dat.id.toString()}>
              <p>{dat.email}</p>
            </Link>
        ))}
     </div>
    </>
  )
}
