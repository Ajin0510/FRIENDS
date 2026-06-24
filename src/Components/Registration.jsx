import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


export default function Registration() {
    const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  function logout() {
    navigate("/login");


    
  }


  return (
    <div>

        <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
    <button type="submit" className="btn btn-primary" onClick={logout}>Logout</button>
  </div>
</form>








    <div>
      <input
  type={showPassword ? "text" : "password"}
  className="form-control"
  id="inputPassword4"
/>

      <button
  type="button"
  className="btn btn-secondary mt-2"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? "Hide" : "Show"}
</button>
    </div>



      
    </div>
  )
}
