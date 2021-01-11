import React from "react";
import './Footer.css';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div>
      <div className="benefit">
        <div className="container">
          <div className="row benefit_row">
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-truck" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>free shipping</h6>
                  <p>Suffered Alteration in Some Form</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-money" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>cach on delivery</h6>
                  <p>The Internet Tend To Repeat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-undo" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>45 days return</h6>
                  <p>Making it Look Like Readable</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="benefit_content">
                  <h6>opening all week</h6>
                  <p>8AM - 09PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
						<ul className="footer_nav">
							<li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
							<li><a href="https://www.facebook.com/great1994a" target="blank">FAQs</a></li>
							<li><a href="https://www.facebook.com/great1994a" target="blank">Contact us</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
						<ul>
							<li><i className="fa fa-facebook" aria-hidden="true"></i></li>
							<li><i className="fa fa-twitter" aria-hidden="true"></i></li>
							<li><i className="fa fa-instagram" aria-hidden="true"></i></li>
							<li><i className="fa fa-skype" aria-hidden="true"></i></li>
							<li><i className="fa fa-pinterest" aria-hidden="true"></i></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="footer_nav_container">
						<div className="cr">©2018 All Rights Reserverd. This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by Colorlib</div>
					</div>
				</div>
			</div>
		</div>
	</footer>

    </div>
  );
}

export default Footer;
