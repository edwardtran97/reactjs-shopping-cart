import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Description from "./Description";
import Information from "./Information";
import Review from "./Review";
import './Tabs.css';

Tabs.propTypes = {};

function Tabs(props) {
  const { match, product } = props;

  return (
    <div>
      <div className="tabs_section_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tabs_container">
                <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                    <li className="tab" data-active-tab="tab_1">
                    <NavLink
                        exact
                        to={{
                            pathname:`${match.url}/description`,
                            product: product
                            // productDescription : productDescription,
                        }}
                        className="tab"
                        activeClassName="active"
                    ><span>Description</span>
                    </NavLink>
                        </li>
                    <li className="tab" data-active-tab="tab_2">
                    <NavLink
                        to={`${match.url}/information`}
                        className="tab"
                        activeClassName="active"
                    ><span>Additional Information </span>
                    </NavLink>
                        </li>
                    <li className="tab" data-active-tab="tab_3">
                    <NavLink
                        to={`${match.url}/reviews`}
                        className="tab"
                        activeClassName="active"
                    ><span> Reviews </span>
                    </NavLink>   
                        </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
      <Switch>
        <Route
          path="/products/:productId/description"
          component={Description}
        />
        <Route
          path="/products/:productId/information"
          component={Information}
        />
        <Route path="/products/:productId/reviews" component={Review} />

        <Redirect
          from="/products/:productId"
          to="/products/:productId/reviews"
        />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default Tabs;
