import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import "./Breadcrumbs.css";

Breadcrumbs.propTypes = {
    
};

function Breadcrumbs(props) {
	const {product, productImages, handleAddToCartClick} = props;
	const [activeImagePosition, setActiveImagePosition] = useState(0);
	const handleClick = (number) => {
		setActiveImagePosition(number)
	}
	const [itemQuantity, setItemQuantity] = useState(1);
	const handleIncreClick = () => {
		setItemQuantity(itemQuantity + 1);
	}
	const handleDecreClick = () => {
		if(itemQuantity === 1) return;
		setItemQuantity(itemQuantity - 1);
	}
    return (
        <div>
                <div className="container single_product_container">
		<div className="row">
			<div className="col">

				{/* <!-- Breadcrumbs --> */}

				<div className="breadcrumbs d-flex flex-row align-items-center">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="categories.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Product</a></li>
						<li className="active"><i className="fa fa-angle-right" aria-hidden="true"></i>{product.name}</li>
					</ul>
				</div>

			</div>
		</div>

		<div className="row">
			<div className="col-lg-7">
				<div className="single_product_pics">
					<div className="row">
						<div className="col-lg-3 thumbnails_col order-lg-1 order-2">
							<div className="single_product_thumbnails">
								<ul>
									<li onClick={() => handleClick(0)} className={activeImagePosition === 0 ? 'active' : ''}><img src={productImages[0]} alt=""></img></li>
									<li onClick={() => handleClick(1)} className={activeImagePosition === 1 ? 'active' : ''}><img src={productImages[1]} alt=""></img></li>
									<li onClick={() => handleClick(2)} className={activeImagePosition === 2 ? 'active' : ''}><img src={productImages[2]} alt=""></img></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-9 image_col order-lg-2 order-1">
							<div className="single_product_image">
								<div className="single_product_image_background"><img style={{width:'100%'}} src={productImages[activeImagePosition]} alt=""></img></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-5">
				<div className="product_details">
					<div className="product_details_title">
						<h2>{product.name}</h2>
						<p>{product.shortDescription}</p>
					</div>
					<div className="free_delivery d-flex flex-row align-items-center justify-content-center">
						<span className="ti-truck"></span><span>free delivery</span>
					</div>
					<div className="original_price">
						{product.salePrice !== product.originalPrice ? (<span>${product.originalPrice}</span>) : ''	}
					</div>
					<div className="product_price">
						<NumberFormat value={product.salePrice} displayType='text' thousandSeparator={true} /> VND
                    </div>
					<ul className="star_rating">
						<li><i className="fa fa-star" aria-hidden="true"></i></li>
						<li><i className="fa fa-star" aria-hidden="true"></i></li>
						<li><i className="fa fa-star" aria-hidden="true"></i></li>
						<li><i className="fa fa-star" aria-hidden="true"></i></li>
						<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
					</ul>
					<div className="product_color">
						<span>Select Color:</span>
						<ul>
							<li style={{background: '#e54e5d'}}></li>
							<li style={{background: '#252525'}}></li>
							<li style={{background: '#60b3f3'}}></li>
						</ul>
					</div>
					<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
						<span>Quantity:</span>
						<div className="quantity_selector">
							<span onClick={() => handleDecreClick()} className="minus"><i className="fa fa-minus" aria-hidden="true"></i></span>
							<span id="quantity_value">{itemQuantity}</span>
							<span onClick={() => handleIncreClick()} className="plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
						</div>
						<div className="red_button" style={{marginLeft:'2rem'}} onClick={() => handleAddToCartClick(product, itemQuantity)}>add to cart</div>
						<div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
					</div>
				</div>
			</div>
		</div>

	</div>
            </div>
    );
}

export default Breadcrumbs;