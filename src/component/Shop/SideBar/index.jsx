import { Slider } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import React, { useState } from "react";
import './Sidebar.css';
import NumberFormat from "react-number-format";

SideBar.propTypes = {
}
function SideBar(props) {
  const {Categories, ActiveCategoryId, handleCategoryClick, handleFilterClick} = props;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000000);

  const handleFilterChange = (min, max) => {
    setMaxValue(max[1]);
    setMinValue(max[0]);
  }
  return (
    <div>
      <div>
        <div className="sidebar">
          <div className="sidebar_section">
            <div className="sidebar_title">
              <h5>Product Category</h5>
            </div>
            <ul className="sidebar_categories">
              {Categories.map((category) => {
                return (
                  <li
                    key={category.id}
                    className={
                      category.id === ActiveCategoryId ? "active" : ""
                    }
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sidebar_section">
            <div className="sidebar_title">
              <h5>Filter by Price</h5>
            </div>
            <div>
              <Typography id="range-slider" gutterBottom>
                Price range
              </Typography>
              <Slider
                min={0}
                max={10000000}
                defaultValue={[0, 10000000]}
                onChange={(min, max) => handleFilterChange(min, max)}
                aria-labelledby="range-slider"
              />
            </div>
            <div>
              <p>Min Price : </p>
              <NumberFormat value={minValue} displayType='text' thousandSeparator={true} />
               VND
              <p>Max Price : </p>
              <NumberFormat value={maxValue} displayType='text' thousandSeparator={true} />
               VND
            </div>
            <div
              onClick={() => handleFilterClick(minValue, maxValue)}
              className="filter_button"
            >
              <span>filter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
