import React from "react";
import FilterSection from "./FilterSection";
import ProductsList from "./ProductsList";

const PageContent = () => {
  return (
    <div className="row mt-3 mx-2">
      <div className="col-md-2 col-xs-12"> <FilterSection /> </div>

      <div className="col-md-10 col-xs-12"> <ProductsList /> </div>
    </div>
  );
};

export default PageContent;
