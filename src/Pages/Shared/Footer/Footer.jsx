import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="logo">
                <Link to="/">Delicious Food<span>.</span></Link>
              </h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
                <li className="ftco-animate"><a href="#"><span className="fa fa-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="fa fa-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contact information</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon fa fa-map-marker"></span><span className="text">203 Fake St. Mountain View, San
                    Francisco, California, USA</span></li>
                  <li><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></li>
                  <li><span className="icon fa fa-paper-plane"></span><span
                    className="text">info@yourdomain.com</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Business Hours</h2>
              <div className="opening-hours">
                <h4>Opening Days:</h4>
                <p className="pl-3">
                  <span>Monday – Friday : 9am to 20 pm</span>
                  <br></br>
                  <span>Saturday : 9am to 17 pm</span>
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
              Copyright &copy;
              2023 All rights reserved |

            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer