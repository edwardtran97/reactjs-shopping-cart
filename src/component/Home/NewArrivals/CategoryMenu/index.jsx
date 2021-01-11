import React from "react";

CategoryMenu.propTypes = {
};


function CategoryMenu(props) {
  const {Categories , ActiveCategoryId, handleCategoryClick } = props;

  return (
    <div>
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  {Categories.map((category) => {
                    const isActive =
                      "grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked";
                    const isAdjective =
                      "grid_sorting_button button d-flex flex-column justify-content-center align-items-center";

                    return (
                      <li
                        onClick = {() => handleCategoryClick(category)}
                        key={category.id}
                        className={
                          category.id === ActiveCategoryId
                            ? isActive
                            : isAdjective
                        }
                        
                      >
                        {category.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
              }

export default CategoryMenu;
