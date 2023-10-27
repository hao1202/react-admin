import Single from "../../Components/Single";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
  // fetch data and send to single component
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  );
};

export default Product;
