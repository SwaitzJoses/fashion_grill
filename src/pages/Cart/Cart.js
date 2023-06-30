import "./cart.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date, InferType } from "yup";

 

let schema = object({
  title: string().required(),
  price: number().required().positive().integer(),
  description: string().required(),
  category: string().required(),
  createdOn: date().default(() => new Date()),
});

const Cart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { id: _id } = useParams();
 
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [data2, setData2] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc");
  const [category, setCategory] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.post(
  //       'https://fakestoreapi.com/products/',
  //       {
  //         title,
  //         price,
  //         description,
  //         image,
  //         category,
  //       }
  //     );
  //     setItems(data);
  //   };
  //   fetchData();
  // }, [title, price, description, image, category]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onChangeHandlerPrice = (e) => {
    e.preventDefault();

    setPrice(e.target.value);
  };
  const onChangeHandlerDes = (e) => {
    e.preventDefault();

    setDescription(e.target.value);
  };
  const onChangeHandlerCat = (e) => {
    e.preventDefault();

    setCategory(e.target.value);
  };

  const submitValue = (data) => {
    console.log(data);
    setData2("ITEM ADDED");
  };


  

  function changeBackground(e) {
    e.target.style.background = "black";
    e.target.style.color = "orange";
  }

  function changeBackground2(e) {
    e.target.style.background = "orange";
    e.target.style.color = "black";
  }

  return (
    <>
    <h1 className="cart_p">ADD ITEM</h1>
      <form className="cart_form" onSubmit={handleSubmit(submitValue)}>
        <div className="cart_form2">
          <label>Title</label>{" "}
          <input
            type="text"
            onChange={onChangeHandler}
            {...register("title")}
          ></input>
          <p style={{ color: "red" }}>{errors.title?.message}</p>
          <label>Price</label>{" "}
          <input
            type="text"
            onChange={onChangeHandlerPrice}
            {...register("price")}
          ></input>
          <p style={{ color: "red" }}>{errors.price?.message}</p>
          <label>Description</label>{" "}
          <input
            type="text"
            onChange={onChangeHandlerDes}
            {...register("description")}
          ></input>
          <p style={{ color: "red" }}>{errors.description?.message}</p>
          <label>Category</label>{" "}
          <input
            type="text"
            onChange={onChangeHandlerCat}
            {...register("category")}
          ></input>
          <p style={{ color: "red" }}>{errors.category?.message}</p>
          <button
            className="cart_button"
            type="submit"
            onMouseOver={changeBackground}
            onMouseLeave={changeBackground2}
          >
            SUBMIT
          </button>
        </div>
      </form>
      {/* <img className='cart_img' src={image} alt="so bad" /> */}
      {/* <p>title {title}</p>
        <p>price ${price}</p>
        <p>description {description}</p>
        <p>category {category}</p> */}

      <h1 className="cart_p">{data2}</h1>
    </>
  );
};
export default Cart;
