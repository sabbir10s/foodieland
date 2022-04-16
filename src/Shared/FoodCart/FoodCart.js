import React from 'react';

const FoodCart = ({ food }) => {
    const { name, img, price } = food;
    return (
        <div >
            <div>
                <img className='w-[150px]' src={img} alt="" />
                <h1>{name}</h1>
                <h1>{price}</h1>
            </div>
        </div>
    );
};

export default FoodCart;