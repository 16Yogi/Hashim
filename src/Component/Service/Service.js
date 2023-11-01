import React from 'react'
import './Service.scss'

export default function Service() {
  return (
    <>
       <div className='container-fluid' id="service-c-f">
            <div className='container' id="service-c">
                <h3>Our Service</h3>
                {/* <p>Share your services or product offerings here. Present them as simple headers that can lead out to their pages where you can expound on them further. You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages.</p> */}
                <p>We are providing services for web development, software development and App development for Android devices.</p>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12 p-5'>
                        <div className='col p-0' id="service-item-wrap">
                            <div className='col-12 p-0' id="ser-item">
                                <img src="https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
                            </div>
                            <div className='col-12' id="ser-itema">
                                {/* <h5>Research & Planning</h5> */}
                                <h5>Web Development</h5>
                                <a href="/"><button className='btn d-block mx-auto bg-info'>Learn More</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 p-5'>
                        <div className='col p-0' id="service-item-wrap">
                            <div className='col-12 p-0' id="ser-item">
                                <img src="https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
                            </div>
                            <div className='col-12' id="ser-itema">
                                {/* <h5>Content</h5> */}
                                <h5>Software Development</h5>
                                <a href="/"><button className='btn d-block mx-auto bg-info'>Learn More</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 p-5'>
                        <div className='col p-0' id="service-item-wrap">
                            <div className='col-12 p-0' id="ser-item">
                                <img src="https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
                            </div>
                            <div className='col-12' id="ser-itema">
                                {/* <h5>Analytics</h5> */}
                                <h5>Android Development</h5>
                                <a href="/"><button className='btn d-block mx-auto bg-info'>Learn More</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </>
    )
}
