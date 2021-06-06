import {useState} from 'react'
import Accordion from './Accoridan/Accordian'
import {brandList} from "../dummyData"

const FilterSection = () => {
    let [flitersValues, setFilterValues] = useState([])
    return (
        <div>
          <div className="row">
              <div className="col-6"> 
                <h6> Filters </h6>
              </div>
              <div className="col-6 text-end"> 
                <h6> Clear All </h6>
              </div>
          </div>
          <Accordion  displayHeading="Size" filterArray={["men", "women"]} flitersValues={flitersValues} setFilterValues={setFilterValues} />
          <Accordion  displayHeading="Brand" filterArray={["S", "M", "L", "XL"]} flitersValues={flitersValues} setFilterValues={setFilterValues} />
          <Accordion  displayHeading="Ideal For" filterArray={brandList} flitersValues={flitersValues} setFilterValues={setFilterValues} />
        </div>
    )
}

export default FilterSection
