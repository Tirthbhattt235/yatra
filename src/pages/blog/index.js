import React, { useState, useEffect, useRef } from "react";
import BlogPost from "@/components/blog/post/"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function index() {
  return (
    <>
      <Header />
      <BlogPost />
      <Footer />
    </>
  )
}
