/* eslint-disable react-hooks/exhaustive-deps */
import { productsList } from "../dummyData";
import {
  useState,
  useContext,
  useEffect,
  useMemo
} from "react";
import {FilterContext} from "../context/filterContext"
import { getFilteredData} from "../utils/getFilterData"

const ProductsList = () => {
  // State Varaibles
  const [productList, setProductList] = useState(productsList);
  const {flitersValues} = useContext(FilterContext)
  
  let data = productList;
  
  data = useMemo(() => {
    console.log('flitersValues: ', flitersValues);

  return getFilteredData(flitersValues,productList)
}, [flitersValues,productList])

  useEffect(() => {
    setProductList(data)
  }, [flitersValues])

 

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
          <div className="col-md-3 col-xs-12 mb-2" key={product.itemId}>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
