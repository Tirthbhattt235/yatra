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
                <p>Subscribe to our newsletter for getting latest updates related to Indian Heriatage and Cultural</p>
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
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Contact US</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Terms of service</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Privacy policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Popular Places in Gujarat</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Somanath Mandir</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Dwarka</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Girnar</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Abu Ambaji</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link href="#">Takhteswar</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  GEC Bhavnagar <br /><br />
                  <strong>Phone:</strong> +91 8141843122<br />
                  <strong>Email:</strong> contact@culturalpioneers.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Cultural Pioneers</h3>
                <p>We provides interactive experiences of Indian festivals and monuments with detailed exhibitions and virtual tours. It also offers a platform for learning traditional arts and crafts, with tutorials and historical information, making Indian culture easy to explore for everyone</p>
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
