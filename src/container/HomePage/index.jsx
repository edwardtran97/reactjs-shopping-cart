import React from 'react';
import Banner from '../../component/Home/Banner';
import DealOfTheWeek from '../../component/Home/DealOfTheWeek';
import NewArrivals from '../../component/Home/NewArrivals';
import Slider from '../../component/Home/Slider';

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        <div>
            <Slider />
            <Banner />
            <NewArrivals />
            <DealOfTheWeek />
        </div>
    );
}

export default HomePage;