

import { set } from "date-fns";
// import Section from "./index.style";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Blog from "@/components/blog"
export default function Index() {
  

  const router = useRouter();
  const { slug } = router.query;  // Gets the slug from the URL
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return; // Skip if slug is not yet available

    const fetchCity = async () => {
      try {
        const response = await fetch('/assets/data/home.json');
        const jsonData = await response.json();
        const cityData = jsonData.cities.find(city => city.url === "/"+ slug);
        setCity(cityData);
        setLoading(false);
        console.log(cityData)
      } catch (error) {
        console.error('Error fetching city data:', error);
        setLoading(false);
      }
    };

    fetchCity();
  }, [slug]);

  return (
  <div>
    <Blog></Blog>
  </div>
  );
}
