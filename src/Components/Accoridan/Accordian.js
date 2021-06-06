/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordian.css";

function Accordion({ displayHeading, filterArray, flitersValues, setFilterValues }) {
  // State Variables
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef(null);

  const filterDataHandler = (input) => {
    if(flitersValues.includes(input)){

    } else {
        flitersValues.push(input)
    }
   
  }
  

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <span className="accordion__title">{displayHeading}</span>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="skills_list px-2">
          {filterArray.map((filters, idx) => (
            <div className="form-check" key={idx}>
              <input
                className="form-check-input font-12"
                type="checkbox"
                id={filters.replace(/ /g, "")}
                style={{ marginTop: "7px" }}
                value={filters} 
                checked={flitersValues.includes(filters)}
                onChange={() => filterDataHandler(filters)}
              />
              <label
                className="form-check-label font-12 text-break"
                htmlFor="defaultCheck1"
                style={{ color: "black" }}
              >
                {filters}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
