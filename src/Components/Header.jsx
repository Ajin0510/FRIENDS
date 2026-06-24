import React from 'react'

export default function Header() {
  return (



    <div>
        <div className='container-fluid ' >
            <div className='row' >
                <div className='col-md-3 g-0 bg-success text-end p-3 col-12 text-center'>
                    <h6>+973 17008944,+973 33160433</h6>

                </div>
                <div className='col-md-6 g-0 bg-danger text-center text-white pt-3 col-12'>
                      <h6 className='ret'>P.O. Box 76023, Office 35, Building 2304, Block: 428, Road 2830, Al Seef, Bahrain</h6>

                </div>
                <div className='col-md-3 bg-warning text-center  pt-3 col-12'>
                    <h6>info@gspubahrain.com</h6>
                </div>

            </div>

            <div className='row bg-success'>

                 <div className='col-md-6 text-center '>
                    <img src='/jki.png' style={{width:200,height:100}}></img>

        </div>
                <div className='col-md-6 float-end'>
                <ul className="nav justify-content-center pt-5">
  <li className="nav-item">
    <a className="nav-link active link-light" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-light" href="#" >Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-light" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
</div>

            </div>

        </div>

        
       
      
    </div>
  )
}
