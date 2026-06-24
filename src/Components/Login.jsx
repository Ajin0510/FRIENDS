import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {


  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [submit,setSubmit]=useState("");
  const navigate=useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    setSubmit(email);

    if (email==="") {
      alert("please enter email");
      return;
      
    }
       if (password==="") {
      alert("please enter password");
      return;
      
    }
    alert("success");
    navigate("/registration");
    
  }
  return (
    <div>

    
      
     
        <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <h2>email and pwd correct{submit}</h2>
</form>




      
    </div>
  )
}
