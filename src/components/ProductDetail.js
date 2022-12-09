import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

const ProductDetail = (props) => {
  const { productId } = useParams()
  const [product, setProduct] = useState({});
  // When this component loads, get the Product ID from the url parameter.
  // Then find the matching product from the productList prop, and assign it to product

  useEffect(() => {
    let myObject = props?.productList?.find(item => item.id == productId.split(":")[1]) || {}
    setProduct(myObject)
  }, [props?.productList, productId])

  return (
    <div>
      <hr />
      <h3>Title: {product?.name}</h3>
      <div>Price: ${product?.price}</div>
      <p>Description: {product?.description}</p>
      {product.quantity == 0 &&
        <h5 style={{ backgroundColor: "tomato", borderRadius: 100, margin: 20, padding: 10, color: "white" }}>Out oF Stock</h5>
      }
      <Link to="/products">
        Go Back
      </Link>
    </div>
  );
}

export default ProductDetail;
