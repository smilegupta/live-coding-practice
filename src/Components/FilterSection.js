import {useContext} from 'react'
import Accordion from './Accoridan/Accordian'
import {brandList} from "../dummyData"
import {FilterContext} from "../context/filterContext"

const FilterSection = () => {
  const {flitersValues, setFlitersValues} = useContext(FilterContext)
    return (
        <div>
          <div className="row">
              <div className="col-6"> 
                <h6> Filters </h6>
              </div>
              {/* <div className="col-6 text-end"> 
                <h6> Clear All </h6>
              </div> */}
          </div>
          <Accordion  displayHeading="Ideal For" filterArray={["men", "women"]} flitersValues={flitersValues} setFlitersValues={setFlitersValues}/>
          <Accordion  displayHeading="Sizes" filterArray={["S", "M", "L", "XL"]} flitersValues={flitersValues} setFlitersValues={setFlitersValues}/>
          <Accordion  displayHeading="Brand" filterArray={brandList} flitersValues={flitersValues} setFlitersValues={setFlitersValues}/>
        </div>
    )
}

export default FilterSection
