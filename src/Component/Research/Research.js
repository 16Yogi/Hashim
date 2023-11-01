import React from 'react'
import './Research.scss'

export default function Research() {
  return (
    <>
       <div className='container-fluid' id="research-c-f">
           <div className='container' id="research-container">
               <div className='row'>
                   <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='col'>
                            <h3>Research & Planning</h3>
                        </div>
                   </div>
                   <div className='col-lg-8 col-md-6 col-sm-12'>
                        <div className='col' id="research-item">
                            <img src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
                        </div>
                        <div className='col' id="research-item">
                            <p>Highlight specific services or products that are unique to your business here. It can be your flagship product, or a service that you've pioneered. Give it room to shine here.</p>
                            <a href='/'><button className='btn btn-info'>read our case studies</button></a>
                        </div>
                   </div>
               </div>
           </div>
       </div>
    </>
  )
}
