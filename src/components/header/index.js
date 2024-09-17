import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function index() {
  return (
    <div>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <h1><a href="index.html">Cultural Pioneers</a></h1>
            {/* <a href="index.html"><Image src="src" alt="alt" width src="assets/img/logo.png" alt="" className="img-fluid" /> </a> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="active" href="index.html">Home</a></li>
              <li><a href="services.html">Popular Places</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="portfolio.html">Foods</a></li>
              <li><a href="contact.html">Login</a></li>
              <li><a href="contact.html">Register</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  )
}
