import axios from "axios";
import axiosInstance from "../../axiosConfic/instance";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // <div>ProductDetails<br></br>
    //     Details:{id}
    // </div>
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} />
    </div>
  );
}
