import "./password.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";



let schema = object({
  name: string().required(),
  password: string().required(),
});

const Password = () => {
  const {
    register,
    handleSubmit,
     
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [url, setUrl] = useState("");


const {name} =useParams()
  
useEffect(() => {
  const fetchData = async () =>{
    const {data} = await axios.get(`https://fakestoreapi.com/users/1`);
    setUrl(data);
   
  }

   fetchData();
}, []) 

   const submitValue = async (data) => {
     
 
console.log(data)
   
  
   
  
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
      <h1 className="cart_p">LOG IN</h1>
      <form className="cart_form" onSubmit={handleSubmit(submitValue)}>
        <div className="cart_form2">
          <label>User name</label>{" "}
          <input
            type="text"
           
            {...register("name")}
          ></input>
          <p style={{ color: "red" }}>{errors.name?.message}</p>
          <label>Password</label>{" "}
          <input
            type="text"
             
            {...register("password")}
          ></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
          <Link to ={`../../admin/${url.email}`}>
          <button
            className="cart_button"
            type="submit"
            onMouseOver={changeBackground}
            onMouseLeave={changeBackground2}
          >
            SUBMIT
          </button>
          </Link>
        </div>
      </form>
    </>
  );
};
export default Password;
