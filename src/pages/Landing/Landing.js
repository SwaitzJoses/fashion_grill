import {useEffect, useState} from 'react';
import Items from "../Items/Items";
import "./landing.css";
// import items from "../../assets/data/data";
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
 
 

import axios from 'axios';
 

const Landing = () => {

 

  const [items2, setItems2] = useState([]);
  

  useEffect(() => {
    const fetchData= async()=>{
     const {data} = await axios.get(`https://fakestoreapi.com/products`) 
    setItems2(data)
   };
   fetchData() 
  }, [])
  
 
 

//Pagination


  return (
   <>
    
      <p className="landing_menu">Hot in store</p> 
      <section className="landing_container">
       
          {items2.map((item) => (
            <Items key={item.id} item={item} />

          ))}
        
      </section>
 

    
  
       
      
    </>
  );
};
export default Landing;
 