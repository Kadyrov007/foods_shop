import React from 'react';

import Slider from "react-slick";

const SliderAuto = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div className="w-96 ">
            <div>
                <Slider {...settings}>
                    <div>
                        <h1>
                            1
                        </h1>
                    </div>
                    <div>
                        <h1>
                            2
                        </h1>
                    </div>
                    <div>
                        <h1>
                            3
                        </h1>
                    </div>



                </Slider>
            </div>
        </div>
    );
};

export default SliderAuto;


