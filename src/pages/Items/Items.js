// import chicken from './../../assets/images/1.jpg'

import "./item.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";



const Items = ({ item }) => {







  return (
    <>
      <section className="item_flex_container">
        <div className="item_container">
          <Link className="item_link" to={`/item/${item.id}`}>
            <p className="item_title">{item.title}</p>
            <p>${item.price}</p>

            <img src={item.image} className="item_image" alt="yum" />
            <div>
              {item.rating.rate >= 1 ? (
                <AiFillStar />
              ) : item.rating.rate >= 0.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {item.rating.rate >= 2 ? (
                <AiFillStar />
              ) : item.rating.rate >= 1.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {item.rating.rate >= 3 ? (
                <AiFillStar />
              ) : item.rating.rate >= 2.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {item.rating.rate >= 4 ? (
                <AiFillStar />
              ) : item.rating.rate >= 3.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              {item.rating.rate >= 5 ? (
                <AiFillStar />
              ) : item.rating.rate >= 4.5 ? (
                <BsStarHalf />
              ) : (
                <AiOutlineStar />
              )}
              <span> Reviews {item.rating.count}</span>
            </div>
            <div>{item.category}</div>
            <div className="item_description">{item.description}</div>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Items;
