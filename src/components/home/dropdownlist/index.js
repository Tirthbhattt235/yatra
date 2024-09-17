// import Section from "./index.style";
// import Link from "next/link";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import { Combobox } from "@headlessui/react";
// export default function index() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/assets/data/home.json");
//         const jsonData = await response.json();
//         setData(jsonData.dropdown);
       

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   const [selectedItem, setSelectedItem] = useState('');
//   const [query, setQuery] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const filteredItems =
//     query === ''
//       ? data
//       : data.filter((item) =>
//           item.toLowerCase().includes(query.toLowerCase())
//         );

//   const handleSelect = (item) => {
//     setSelectedItem(item);
//     setQuery('');
//     setIsOpen(false);
//   };



//   return (
//     <Section>
//       <div className="combobox-container">
//     <input
//       className="combobox-input"
//       type="text"
//       value={query}
//       onChange={(e) => {
//         setQuery(e.target.value);
//         setIsOpen(true);
//       }}
//       onClick={() => setIsOpen(!isOpen)}
//       placeholder="Select an item"
//     />
//     {isOpen && (
//       <ul className="combobox-options">
//         {filteredItems.length === 0 ? (
//           <li className="combobox-option">No results found</li>
//         ) : (
//           filteredItems.map((item, index) => (
//             <li
//               key={index}
//               className="combobox-option"
//               onClick={() => handleSelect(item)}
//             >
//               {item}
//             </li>
//           ))
//         )}
//       </ul>
//     )}
//   </div>

//     </Section>
  
    
//   )
// }

import Section from "./index.style";
import React, { useState, useEffect } from "react";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/data/home.json");
        const jsonData = await response.json();
        setData(jsonData.dropdown);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedItem, setSelectedItem] = useState('');
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredItems =
    query === ''
      ? data
      : data.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = (item) => {
    setSelectedItem(item.name);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <Section>
      <div className="combobox-container">
        <input
          className="combobox-input"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={selectedItem ? selectedItem:"Select an item"}
        />
        {isOpen && (
          <ul className="combobox-options">
            {filteredItems.length === 0 ? (
              <li className="combobox-option">No results found</li>
            ) : (
              filteredItems.map((item) => (
                <li
                  key={item.id}
                  className="combobox-option"
                  onClick={() => handleSelect(item)}
                >
                  {item.name}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </Section>
  );
}
