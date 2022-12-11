import React from "react";
import { useNavigate } from "react-router-dom";

const ProductSummary = (props) => {
  const navigate = useNavigate()
  return (
    <div className="productSummary" onClick={() => navigate("detail:" + props.product.id)}>
      {props.product.name} - ${props.product.price}{" "}
      <span  onClick={() => navigate("detail:" + props.product.id)} className="productArrow"></span>
    </div>
  );
};

export default ProductSummary;
