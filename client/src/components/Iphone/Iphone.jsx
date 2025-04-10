import { useEffect, useState } from "react";
import { Link } from "react-router";

const Iphone = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2025/iphones")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch(() => console.log("ERROR: unable to fetch!!"));
  }, []);

  let flip = true;

  return (
    <>
      <section className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5 pt-5">
            <h1 className="font-weight-bold">Iphones</h1>
            <p className="mb-5">The best for the brightest</p>
          </div>
        </div>
        <div className="row">
          {product?.map((products) => {
            const productPage = `/iphone/${products.Product_id}`;
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip;
            } else {
              flip = !flip;
            }

            return (
              <div key={products.Product_url} className="col-12 mb-5">
                <div className="row align-items-center">
                  <div
                    className={`col-sm-12 col-md-6 order-md-${order1} text-center text-md-start`}
                  >
                    <h2 className="font-weight-bold">
                      {products.Product_name}
                    </h2>
                    <p>{products.product_brief_description}</p>
                    <p className="text-dark">
                      Starting at ${products.Starting_price}
                    </p>
                    <p className="text-muted">{products.Price_range}</p>

                    <div className="links-wrapper mt-3">
                      <Link to={productPage}>
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`col-sm-12 col-md-6 order-md-${order2} text-center`}
                  >
                    <img
                      src={products.product_img}
                      alt={products.Product_name}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Iphone;
