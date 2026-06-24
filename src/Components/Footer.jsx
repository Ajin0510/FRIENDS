import React from 'react'

export default function Footer() {
  return (
    <div>

        <div className='container-fluid bg-success ' style={{padding:10}}>

            <div className='row' style={{marginTop:100}}>

                <div className='col-3'>
                    <img src='jki.png' style={{width:200,height:150}}></img>

                </div>

                <div className='col-3'>
                    <h6>Quick links</h6>
                    <p style={{marginTop:30}}><a  href="#" className='link-underline link-underline-opacity-0 'style={{color:'black'}} >Link opacity 10</a></p>
<p><a  href="#">Link opacity 25</a></p>
<p><a  href="#">Link opacity 50</a></p>
<p><a  href="#">Link opacity 75</a></p>
<p><a  href="#">Link opacity 100</a></p>

                </div>

                <div className='col-3'>
                    <h6>Our Services</h6>
                    <p style={{marginTop:30}}><a  href="#">Link opacity 10</a></p>
<p><a  href="#">Link opacity 25</a></p>
<p><a  href="#">Link opacity 50</a></p>
<p><a  href="#">Link opacity 75</a></p>
<p><a  href="#">Link opacity 100</a></p>

                </div>

                <div className='col-3'>
                    <h6>Get In Touch</h6>
                    <p style={{marginTop:30}}>P.O. Box 76023, Office 35, Building 2304,Block: 428, Road 2830, Al Seef, Bahrain</p>

                </div>


            </div>

        </div>
      
    </div>
  )
}
