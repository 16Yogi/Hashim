import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <>
        <div className='container-fluid' id="footer-c-f">
            <div className='container' id="footer-c">
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="footer-item">
                        <div className='col'>
                            <h4>Phone</h4>
                            <p>+91-7566367384</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="footer-item">
                        <div className='col'>
                            <h4>Email</h4>
                            <p>yogendrameravis@gmail.com</p>
                        </div>
                    </div> <div className='col-lg-4 col-md-4 col-sm-12' id="footer-item">
                        <div className='col'>
                            <h4>Social Media</h4>
                            <div className='col row'>
                                <p><a href="https://www.facebook.com/yogendra.meravi.7" target='blank'><i class="fa-brands fa-facebook-f"></i></a></p>
                                <p><a href="https://instagram.com/yogi._yogendra?igshid=MzMyNGUyNmU2YQ==" target='blank'><i class="fa-brands fa-instagram"></i></a></p>
                                <p><a href="https://x.com/A_YogiYogendra?t=LXR1SjQRfJaATMbaDlacIQ&s=09" target='blank'><i class="fa-brands fa-x-twitter"></i></a></p>
                                <p><a href="https://www.linkedin.com/in/yogendra-meravi-84333b226" target='blank'><i class="fa-brands fa-linkedin-in"></i></a></p>
                                <p><a href="https://github.com/16Yogi" target='blank'><i class="fa-brands fa-github"></i></a></p>
                            </div>
                            <p>All Rights Reserved Copyrights - 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </>
  )
}
