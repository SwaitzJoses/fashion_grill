import "./delete.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date, InferType } from "yup";

let schema = object({
  id: string().required(),

  createdOn: date().default(() => new Date()),
});

const Delete = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { id: _id } = useParams();

  const [data2, setData2] = useState("");

  const submitValue = (data) => {
    console.log(data);
    setData2("ITEM DELETED");
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
    <><h1 className="cart_p">DELETE ITEM</h1>
      <form className="cart_form" onSubmit={handleSubmit(submitValue)}>
        <div className="cart_form2">
          <label>Product ID</label>{" "}
          <input
            type="text"
            // onChange={onChangeHandler}
            {...register("id")}
          ></input>
          <p style={{ color: "red" }}>{errors.id?.message}</p>
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

      <h1 className="cart_p">{data2}</h1>
    </>
  );
};
export default Delete;
