import React from 'react';

Information.propTypes = {
    
};

function Information(props) {
    return (
        <div>
            <div className="container">
                {/* <!-- Tab Additional Info --> */}

            <div>
                <div className="row">
                    <div className="col additional_info_col">
                        <div className="tab_title additional_info_title">
                            <h4>Additional Information</h4>
                        </div>
                        <p>COLOR:<span>Gold, Red</span></p>
                        <p>SIZE:<span>L,M,XL</span></p>
                    </div>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Information;