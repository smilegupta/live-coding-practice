import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid mx-5">
          <div className="d-flex px-3">
            <div className="row w-100">
              <div className="col-md-7 col-xs-12 d-flex">
              <Link to="/">
              <span className="navbar-brand my-2">
                  <img
                    alt="flipkartlogo"
                    height="24"
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
                  />
                </span>
                </Link>
                
                <form style={{ flex: "auto" }}>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search for products, brands and more"
                      aria-label="Search"
                    />
                    <span
                      className="input-group-text"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <i className="las la-search la-flip-horizontal"></i>
                    </span>
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-xs-12 offset-md-1 d-flex justify-content-end">
                <button type="button" className="btn btn-light mx-3">
                  {" "}
                  <span className="mx-5"> Login </span>
                </button>
                {/* <span
                  className="mx-3 d-flex my-auto"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  {" "}
                  More{" "}
                  <i
                    className="las la-angle-down my-auto"
                    style={{ fontSize: "16px" }}
                  ></i>{" "}
                </span> */}
                <Link to="/cart">
                <span
                  className="mx-3 d-flex my-2 cursor-pointer"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  {" "}
                  <i
                    className="las la-shopping-cart my-auto"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  Cart{" "}
                </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
