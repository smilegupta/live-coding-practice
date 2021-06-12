import { useEffect, useState } from "react";
import { toast } from "react-toastify";
toast.configure();

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [saveLaterData, setSaveLaterData] = useState([]);

  useEffect(() => {
    fetchData();
    fetchSaveLaterData();
  }, []);

  const fetchData = () => {
    var dataCart = JSON.parse(localStorage.getItem("cart"));
    if (dataCart) {
      setCartData([...dataCart]);
    }
  };

  const fetchSaveLaterData = () => {
    var saveLater = JSON.parse(localStorage.getItem("save"));
    if (saveLater) {
      setSaveLaterData([...saveLater]);
    }
  };

  const increasingValue = (data) => {
    var dataCart = JSON.parse(localStorage.getItem("cart"));
    if (dataCart.find((p) => p.title === data.title)) {
      data["amount"] = dataCart.find((p) => p.title === data.title).amount + 1;
      dataCart.splice(
        dataCart.findIndex((p) => p.title === data.title),
        1,
        data
      );
      console.log(dataCart);
      localStorage.setItem("cart", JSON.stringify(dataCart));
    }
    fetchData();
  };

  const decreaingingValue = (data) => {
    var dataCart = JSON.parse(localStorage.getItem("cart"));
    if (dataCart.find((p) => p.title === data.title)) {
      data["amount"] = dataCart.find((p) => p.title === data.title).amount - 1;
      dataCart.splice(
        dataCart.findIndex((p) => p.title === data.title),
        1,
        data
      );
      console.log(dataCart);
      localStorage.setItem("cart", JSON.stringify(dataCart));
    }
    fetchData();
  };

  const removeElement = (data) => {
    const items = cartData.filter((item) => item.itemId !== data.itemId);
    console.log(items);
    localStorage.setItem("cart", JSON.stringify(items));
    fetchData();
    const message = "Item has been successfully removed from cart";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const removeElementFromSaveLater = (data) => {
    const items = saveLaterData.filter((item) => item.itemId !== data.itemId);
    console.log(items);
    localStorage.setItem("save", JSON.stringify(items));
    fetchSaveLaterData();
    const message = "Item has been successfully removed from Save Later List";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const addToCart = (data) => {
    const items = saveLaterData.filter((item) => item.itemId === data.itemId);
    var dataCart = JSON.parse(localStorage.getItem("cart"));
    dataCart.push(...items);
    localStorage.setItem("cart", JSON.stringify(dataCart));
    fetchData();
    const itemsToKeep = saveLaterData.filter(
      (item) => item.itemId !== data.itemId
    );
    localStorage.setItem("save", JSON.stringify(itemsToKeep));
    fetchSaveLaterData();
    const message = "Item has been added to Cart";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const saveLater = (data) => {
    if (localStorage.getItem("save") == null) {
      localStorage.setItem("save", "[]");
    }
    const items = cartData.filter((item) => item.itemId === data.itemId);
    localStorage.setItem("save", JSON.stringify(items));
    const itemsToKeep = cartData.filter((item) => item.itemId !== data.itemId);
    localStorage.setItem("cart", JSON.stringify(itemsToKeep));
    fetchSaveLaterData();
    fetchData();
    const message = "Item has been added to Save to Later List";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-9 col-xs-12 mb-4">
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
                      <button
                        className="mt-2"
                        onClick={() => decreaingingValue(product)}
                      >
                        {" "}
                        -{" "}
                      </button>{" "}
                      <span className="mt-2"> {product.amount} </span>{" "}
                      <button
                        className="mt-2"
                        onClick={() => increasingValue(product)}
                      >
                        {" "}
                        +{" "}
                      </button>
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
                        <div
                          className="col-3 cursor-pointer"
                          onClick={() => saveLater(product)}
                        >
                          {" "}
                          <h5> Save For Later </h5>
                        </div>
                        <div
                          className="col-3 cursor-pointer"
                          onClick={() => removeElement(product)}
                        >
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
        <div className="col-md-9 col-xs-12 mb-2">
          <div className="card h-100 m-2">
            <div className="card-body">
              <h4> Save For Later ({saveLaterData.length}) </h4>
              <hr />
              {saveLaterData.map((product) => (
                <div className="col-12 mb-3" key={product.itemId}>
                  <div className="row">
                    <div className="col-md-2">
                      {" "}
                      <img
                        src={product.imageURL}
                        className="w-100"
                        alt={product.title}
                      />{" "}
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
                        <div
                          className="col-3 cursor-pointer"
                          onClick={() => addToCart(product)}
                        >
                          {" "}
                          <h5> Add to Cart </h5>
                        </div>
                        <div
                          className="col-3 cursor-pointer"
                          onClick={() => removeElementFromSaveLater(product)}
                        >
                          {" "}
                          <h5> Remove </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
