import React from 'react'
import Header from './Header'
import { useState } from 'react'


export default function Body() {

   const[count,setCount]= useState(null);
   const [name,setName]=useState("AJIN");
   const[inpu,setInpu]=useState("");
   const[display,setDisplay]=useState("");

   
   
  return (
    
    <div>

        <Header/>
        
        <div className='row'>
        <div className='col-12'>
            <img src='digital final.jpg' className='image img-fluid' ></img>

        </div></div>
        <div className='container-fluid'>

            <div className='row' style={{marginTop:50}}>
                <div className='col-6'>
                    <p style={{textAlign:'justify',padding:50}} className='border-end'>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.</p>
                </div>
                <div className='col-6'>
                    <p style={{textAlign:'justify',padding:50}}>Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                </div>

            </div>

        </div>


        <div className='row'>
            <div className='d-grid gap-2 col-md-12 col-12 g-0 '>
                <h2 className='text-center' style={{marginTop:25}}>Counter</h2>
           
  <button className="btn btn-primary" type="button" style={{padding:25,marginTop:25}} onClick={()=>setCount(count+5)}>click</button>
    <button className="btn btn-primary" type="button" style={{padding:25}} onClick={()=>{if(count>0){setCount(count-5)}}}>click</button>


    
    <h2 className='text-center'>Count:{count}</h2>

  
</div>

         

        </div>


        <div className='row' style={{marginTop:70}}>
            <h2 className='text-center'>Changing Values</h2>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-center" style={{marginTop:50}}>
  <button className="btn btn-primary me-md-2" type="button" onClick={()=>setName(name==="AJIN"?"GSPU":"AJIN")}>Change</button>         <h3 className='text-center'>My Name is:{name}</h3>


</div>
            <div className='col-md-12' style={{marginTop:70}}>
                <h2 className='text-center'>Input Values</h2>
                <input type='text' style={{marginLeft:860,marginTop:70}} placeholder='enter name' value={inpu} onChange={(e)=>setInpu(e.target.value)} />
              
                  <button className="btn btn-primary me-md-2" type="button" onClick={()=>setDisplay(inpu)}>Display</button>   
                   <h4 className='text-center'>my name is:{display}</h4>      


            </div>

        </div>
      
    </div>

    
  )
}
