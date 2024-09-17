import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" /> {/* Corrected input */}
                  <input type="submit" value="Subscribe" /> {/* Corrected input */}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Home</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">About us</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Services</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Terms of service</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Privacy policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Web Design</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Web Development</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Product Management</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Marketing</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Graphic Design</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Cultural Pioneers</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Cultural Pioneers</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  )
}
