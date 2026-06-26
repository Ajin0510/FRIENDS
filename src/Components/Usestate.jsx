import React from 'react'
import { useState } from 'react';
export default function Usestate() {

    const [name,setname]=useState("");
    const[displayname,setdisplayname]=useState("");
    const[increase,setincrease]=useState(0);
    const [color,setColor]=useState("black");
    const [light,setlight]=useState(false);
    const [show,setshow]=useState(false);
    

  return (
    <div >

        <div className='container-fluid bg-info '>
            <div className='row '>
                <div className='col-md-4'>

                </div>
                     <div className='col-md-4'>
                        <h2>Exercise 1: Display Input Value</h2>
                        <input type='text' placeholder='enter name' style={{marginTop:25}} value={name} onChange={(e)=>setname(e.target.value)}/>
                        <button onClick={()=>setdisplayname(name)}>submit</button>
                        <h3 style={{marginTop:10}}>Enter name was:{displayname}</h3>

                </div>     
                <div className='col-md-4'>

                </div>


            </div>


            <div className='row' style={{marginTop:150}}>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>
                         <h2>Exercise 2: Button Click Counter</h2>

                         <button style={{marginTop:25}} onClick={()=>setincrease(increase + 5)}>Increase</button>
                         <h4 style={{marginTop:10}}>Increased amount was:{increase}</h4>


                </div>
                <div className='col-md-4'>

                </div>

            </div>

               <div className='row' style={{marginTop:150}}>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>
                         <h2>Exercise 3: Increment & Decrement</h2>

                         <button style={{marginTop:25}} onClick={()=>setincrease(increase + 5)}>Increase</button>
                            <button style={{marginTop:25}} onClick={()=>{if(increase > 0){setincrease(increase - 5)}}}>Decrease</button>
                         <button style={{marginTop:25}} onClick={()=>setincrease(0)} >Reset</button>

                         <h4 style={{marginTop:10}}> Amount was:{increase}</h4>
                      


                </div>
                <div className='col-md-4'>

                </div>

            </div>


             <div className='row' style={{marginTop:150}}>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>
                         <h2>Exercise 4: Change Background Color</h2>

                         
<div
  style={{
    height: "200px",
    width: "300px",
    backgroundColor: color,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
  }}
>
  Hi
</div>

<button onClick={() => setColor("red")}>Red</button>
<button onClick={() => setColor("green")}>Green</button>
<button onClick={() => setColor("blue")}>Blue</button>

                </div>
                <div className='col-md-4'>

                </div>

            </div>



             <div className='row' style={{marginTop:150}}>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>
                         <h2>Exercise 5: Light/Dark Mode</h2>

                      <div style={{height:400,background:light? "black":"white"}}>

                       

                      </div> <button onClick={()=>setlight(!light)}>toggl</button>


                        


                </div>
                <div className='col-md-4'>

                </div>

            </div>

            <div className='row' style={{marginTop:150}}>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>
                         <h2 style={{marginBottom:50}}>Exercise 6: Show/Hide Password</h2>

                          <input
        type={show ? "text" : "password"}
        placeholder="Password"
      />

      <button onClick={() => setshow(!show)}>
        {show ? "Hide" : "show"}
      </button>


                        


                </div>
                <div className='col-md-4'>

                </div>

            </div>

            




            









            


        </div>
      
    </div>
  )
}
