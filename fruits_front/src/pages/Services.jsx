import React, { useEffect, useState } from 'react';
import { Form, redirect } from "react-router-dom";
import "./PageAll.css";

export default function Services() {
  const [rev, setRevs] = useState([]);

  // useEffect(() => {
  //   const fetchRev = async() => {
  //     try {
  //       const res = await fetch("http://localhost:9001/api/reviews");
  //       const dat = await res.json();
  //       console.log(dat);
  //       setRevs(dat);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchRev();
  // })

  async function uptRev(id) {
    try {
      await fetch(`http://localhost:9001/api/reviews${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
    } catch(error) {
      console.log(error)
    }
  }

  async function delRev(id) {
    try {
      await fetch(`http://localhost:9001/api/reviews${id}`, {
        method: "DELETE",
        headers: {
          "Content=Type": "application/json"
        } 
      }) 
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className="se">
      <h1>Have any suggestions?</h1>
      <h2>Write to us</h2>
      <Form action="/services" method="POST">
       <label htmlFor="rev">Write your review here</label>
       <textarea id="rev" name="review" rows={5} cols={16} placeholder="review"/><br />
       <label htmlFor="em">Input your email here</label>
       <input type="text" id="em" name="email" placeholder="email"/>
       <button>Send</button>
      </Form>
      <p>Our reviewers remain anonymous</p>
    </div>
    </>
  )
}

export const actionReview = async({request}) => {
  const formData = await request.formData();

  const got = {
    review: formData.get("review"),
    email: formData.get("email")
  }

  console.log(got);

  try {
    const req = await fetch("http://localhost:9001/api/reviews", {
      method: "POST",
      body: JSON.stringify(got),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const res = await req.json();
    console.log("results",res)
  } catch(err) {
    console.log(err);
  }

  return redirect("/products");
}