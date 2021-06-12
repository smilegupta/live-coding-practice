/* eslint-disable react-hooks/exhaustive-deps */
import { productsList } from "../dummyData";
import {
  useState,
  useContext,
  useEffect
} from "react";
import {FilterContext} from "../context/filterContext"
import { getFilteredData} from "../utils/getFilterData"
import { toast } from "react-toastify";
toast.configure();

const ProductsList = () => {
  // State Varaibles
  const [productList, setProductList] = useState(productsList);
  const {flitersValues} = useContext(FilterContext)
  
  let data = [...productList];
  
  useEffect(() => {
    return () => {
      data = getFilteredData(flitersValues, productsList)
      setProductList(data)
      
    }
  }, [flitersValues])

  const AddToCart = (data) => {
     if(localStorage.getItem('cart') == null){
      localStorage.setItem('cart', '[]')
    }
    var dataCart = JSON.parse(localStorage.getItem('cart'))
    var product = data
    product['amount'] = 1

    if (dataCart.length === 0 || !dataCart.find((p) => p.title === product.title)) {
      dataCart.push(product)
      localStorage.setItem('cart', JSON.stringify(dataCart))
    } else if (dataCart.find((p) => p.title === product.title)) {
      product['amount'] += dataCart.find((p) => p.title === product.title).amount
      dataCart.splice(
        dataCart.findIndex((p) => p.title === product.title),
        1,
        product
      )
      localStorage.setItem('cart', JSON.stringify(dataCart))
    }

    const message = "Bingo! Item added to cart.";
    toast.success(message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // if(localStorage.getItem('live-coding') == null){
    //   localStorage.setItem('live-coding', '[]')
    // }

    // let old_data = JSON.parse(localStorage.getItem('live-coding'));
    // old_data.push(data)
    // localStorage.setItem('live-coding', JSON.stringify(old_data))
    // const message = "Bingo! Item added to cart.";
    // toast.success(message, {
    //   position: "top-right",
    //   autoClose: 0,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
  }
 
  const sortHighToLow = (a, b) => {
    if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    } else {
      return 0;
    }
  };
  return (
    <div>
      <h5> Clothing and Accessories </h5>
      <h6>
        {" "}
        Sort By{" "}
        <span className="text-muted mx-3 cursor-pointer" onClick={() => {
              const temp = productList.sort(sortHighToLow).reverse()
              setProductList([...temp]);
          }}>
          {" "}
          Price - Low to High{" "}
        </span>{" "}
        <span
          className="text-muted mx-3 cursor-pointer"
          onClick={() => {
              const temp = productList.sort(sortHighToLow)
              setProductList([...temp]);
          }}
        >
          {" "}
          Price - High to Low{" "}
        </span>{" "}
      </h6>
      <div className="row">
        {data && data.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2" key={product.itemId}>
            <div className="card h-100">
              <img
                src={product.imageURL}
                className="card-img-top"
                alt={product.title}
                height="350px"
              />
              <div className="card-body">
                <h6 className="card-title text-muted mb-0">
                  {product.brand}{" "}
                  {product.flipkartAssured && (
                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                      alt="flipkart assured"
                      className="w-25 p-1"
                      style={{ marginTop: "-3px" }}
                    />
                  )}{" "}
                </h6>
                <p className="card-text overflow-text"> <strong> {product.title} </strong></p>
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
                <strong className="text-muted"> Size: </strong>{" "}
                {product.size.join(",")}
                <br />
                <button className="btn btn-primary mt-2" onClick={() => AddToCart(product)}> Add to cart </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
