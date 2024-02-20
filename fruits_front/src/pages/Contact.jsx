import { Form, redirect } from "react-router-dom";
import "./PageAll.css";

export default function Contact() {
  return (
    <>
    <div className="contact">
     <p>Want to reach out to us ?</p> 
     <p>Contact Us Below</p>

     <Form action="/login" method="POST" >
         <label htmlFor="name" >Name</label>
         <input type="text" id="name" name="name" />
         <label htmlFor="email" >E-mail</label>
         <input type="text" id="email" name="email" />
         <label htmlFor="password" >Password</label>
         <input type="password" id="password" name="password" />
         <button>Submit</button>
     </Form>
    </div>
    </>
  )
}

export async function loginAction({request}) {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(name, email, password);

    const a = [];

    const client = {
      name,
      email,
      password
    }

    const c = a.push(client);
    localStorage.setItem("clients", JSON.stringify([...a, a]));

    return redirect("/");
}
