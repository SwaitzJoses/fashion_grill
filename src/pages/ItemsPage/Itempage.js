// import data from './../../assets/data/data'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {AiOutlineStar, AiFillStar,  } from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import './itemPage.css'




const Itempage = () => {
    const {id:_id}    = useParams()
    // const item = data.find(itemVal => itemVal._id === id )
    // console.log(item)

const [data1, setData1] = useState([]);

    useEffect(() => {
      const fetchData = async () =>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${_id}`);
        setData1(data);
      }
    
       fetchData();
    }, [_id])
console.log(data1.rating)



  return (
    <>
    <div className='itemPage_container'>  
    <div  className='itemPage_container2'>
    <p>{data1.title}</p>
    <p>${data1.price}</p>
   
     <img
      src={data1.image} 
      className="itemPage_image"
      alt="yum"
    />


    
    {/* <div>
              {data1.rating.rate >= 1 ? (
                <AiFillStar />
              ) : data1.rating.rate >= 0.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {data1.rating.rate >= 2 ? (
                <AiFillStar />
              ) :data1.rating.rate >= 1.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {data1.rating.rate >= 3 ? (
                <AiFillStar />
              ) :data1.rating.rate >= 2.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {data1.rating.rate >= 4 ? (
                <AiFillStar />
              ) : data1.rating.rate >= 3.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {data1.rating.rate >= 5 ? (
                <AiFillStar />
              ) : data1.rating.rate >= 4.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              <span>Reviews {data1.rating.count}</span>
            </div> */}
            <div>{data1.category}</div>
            <div className="item_description">{data1.description}</div>
</div></div>
</>
  )
}
export default Itempage