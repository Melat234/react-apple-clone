import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageNotFound from "../PageNotFound/PageNotFound";

const SingleAppleProduct = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    fetch("http://localhost:2025/iphones")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.products
        let pro = singleProduct.filter(
          (products) => products.Product_id == productId
        );
        setProduct(pro);
      })
      .catch(() => console.log("ERROR: unable to fetch!!"));
  }, [productId]); 
console.log(product);
  if (product.length > 0) {
    return (
      <section className="container">
        {product?.map((product) => (
          <div key={product.Product_id} className="row justify-content-center">
  
            <div className="col-12 mt-5 pt-5 text-center">
              <h1 className="font-weight-bold">{product.Product_name}</h1>
              <p>{product.product_brief_description}</p>
            </div>

           
            <div className="row align-items-center text-center h-100 my-5">
              <div className="col-sm-12 col-md-6">
                <p className="text-black">
                  Starting at ${product.Starting_price}
                </p>
                <p className="text-muted">{product.Price_range}</p>
                <p>{product.product_description}</p>
              </div>
              <div className="col-sm-12 col-md-6">
                <img
                  src={product.product_img}
                  alt={product.Product_name}
                
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  } else {
    return <PageNotFound />;
  }
};

export default SingleAppleProduct;
