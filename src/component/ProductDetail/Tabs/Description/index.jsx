import React from 'react';

Description.propTypes = {
    
};

function Description(props) {
    const {location} = props;
    const descriptionHtml = location.product.description
    const setInnerHtml = {__html: descriptionHtml}

    return (
        <div className="container">
                {/* <!-- Tab Description --> */}

            <div id="tab_1" className="tab_container active">
                <div className="row">
                    <div className="col desc_col">
                        <div className="tab_title">
                            <h4>Description</h4>
                        </div>
                        <div dangerouslySetInnerHTML={setInnerHtml} />
                        

                    </div>
                </div>
            </div>
            </div>
    );
}

export default Description;