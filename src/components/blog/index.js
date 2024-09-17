import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Section, { Blog } from "./index.style";
export default function index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/data/home.json");
        const jsonData = await response.json();
        setData(jsonData.foods);
        console.log(jsonData.foods[0])
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (

    <>
      {
        data ?
          <>
            <Section className="d-flex element-container  flex-row  column-gap-4 row-gap-4 flex-wrap justify-content-center align-items-center">
              {data.map((item,) => (
                  <Blog className=" col-3 overflow-hidden" key={item.id}>
                  
                  <div className="img-container overflow-hidden border-r-4">
                    <Image src={item.image} alt="hi " height={400} width={400} className="object-contain w-100 border-r-4"></Image>
                  </div>
                  <h1 className="title m-0 mt-2 mb-2 ">
                  {item.title}
                  </h1>
                  <p className="text m-0 mt-2 mb-2">
                  {item.description}
                  </p>
                  <Link href={item.slug} className="m-0 mt-2 mb-2">
                  <span>
                    read more
                  </span>
                  </Link>
                </Blog>
                

              ))}


            </Section>
          </>
          : null}
    </>

  )
}
