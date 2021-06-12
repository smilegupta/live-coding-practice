import { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    var dataCart = JSON.parse(localStorage.getItem("cart"));
    if (dataCart) {
      setCartData([...dataCart]);
    }
  }, []);

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-9 col-xs-12 mb-2">
          <div className="card h-100 m-2">
            <div className="card-body">
              <h4> My Cart ({cartData.length}) </h4>
              <hr />
              {cartData.map((product) => (
                <div className="col-12 mb-3" key={product.itemId}>
                  <div className="row">
                    <div className="col-md-2">
                      {" "}
                      <img
                        src={product.imageURL}
                        className="w-100"
                        alt={product.title}
                      />{" "}
                      <button className="mt-2"> - </button>{" "}
                      <span className="mt-2"> {product.amount} </span>{" "}
                      <button className="mt-2"> + </button>
                    </div>

                    <div className="col-md-8">
                      <h6 className="card-text overflow-text">
                        {" "}
                        <strong> {product.title} </strong>
                        {product.flipkartAssured && (
                          <img
                            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                            alt="flipkart assured"
                            className="p-1"
                            width="75px"
                            style={{ marginTop: "-3px" }}
                          />
                        )}
                      </h6>
                      <h6>
                        <strong className="text-muted"> Size: </strong>{" "}
                        {product.size.join(",")}
                      </h6>
                      <h6>
                        {product.mrp === product.price ? (
                          `₹${product.mrp}`
                        ) : (
                          <span>
                            <span> {`₹${product.price}`} </span>{" "}
                            <s className="mx-1 text-muted">{`₹${product.mrp}`}</s>{" "}
                            <span style={{ color: "green" }}>
                              {" "}
                              {`${product.discount}% off`}{" "}
                            </span>
                          </span>
                        )}
                      </h6>
                      <div className="row mt-4">
                        <div className="col-3 cursor-pointer">
                          {" "}
                          <h5> Save For Later </h5>
                        </div>
                        <div className="col-3 cursor-pointer">
                          {" "}
                          <h5> Remove </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
              <div className="text-right d-flex justify-content-end">
                {" "}
                <hr />{" "}
                <button className="btn btn-primary"> Place Order </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-12 mb-2">
          <div className="card m-2">
            <div className="card-body text-muted">
              {" "}
              <h4> Price Details </h4> <hr />
              <h6>
                {" "}
                Price ({cartData.length} items): ₹
                {cartData.reduce((a, curr) => a + curr.mrp, 0)}{" "}
              </h6>
              <h6>
                {" "}
                Discount:{" "}
                <span style={{ color: "green" }}>
                  -₹
                  {cartData.reduce((a, curr) => a + (curr.mrp - curr.price), 0)}
                </span>{" "}
              </h6>
              <hr />
              <h5>
                {" "}
                Total Amount: ₹{cartData.reduce(
                  (a, curr) => a + curr.price,
                  0
                )}{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
      {console.log(cartData)}
    </div>
  );
};

export default Cart;
