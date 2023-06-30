import './navbar.css'
import logo from './favicon_io/android-chrome-512x512.png'
import { Link } from 'react-router-dom'
import {  useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios";

const Navbar = () => {



  const { id: admin } = useParams();
   const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData= async()=>{
     const {data} = await axios.get('https://fakestoreapi.com/users/1') 
    setItems(data)
    
   };
   fetchData() 
  }, [])
  
   
  return (
    <nav className='nav'>
      <div className='nav_container'>
      <Link  to ='./'><img src={logo} className='nav_logo' alt='Fashiongrill'/></Link>
      <Link to ='./' style={{ textDecoration: 'none' }} > <p className='nav_title'> Fashion Grill</p></Link>
      <Link className='nav_admin' to={ {pathname:`/admin/password/${items.id}`} } ><p className='admin_p'>Admin</p></Link>
      </div>
      </nav>
  )
}
export default Navbar