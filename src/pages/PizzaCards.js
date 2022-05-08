import React from 'react';
import {Link} from "react-router-dom";

const PizzaCards = ({el}) => {

    return (
        <div className="col-3 my-4" key={el.id}>
            <div>
                <Link to={`/pizza-details/${el.id}`}>
                    {/*<img src={image} alt=""*/}
                    {/*/>*/}
                </Link>
            </div>
        </div>
    );
};

export default PizzaCards;