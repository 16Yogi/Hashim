import React from 'react'
import './Analysis.scss'

export default function Analysis() {
  return (
    <>
       <div className='container-fluid' id="analysis-c-f">
           <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col' id="analysis-item">
                            {/* <img src="" alt=""></img> */}
                            <img src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='col' id="analysis-item">
                            <h3>Analytics</h3>
                            <p>Highlight specific services or products that are unique to your business here. It can be your flagship product, or a service that you've pioneered. Give it room to shine here.</p>
                            <a href="/"><button className='btn btn-info'>request a demo</button></a>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </>
    )
}
