import React from 'react';
import { Link } from 'react-router-dom';

const FoodMenu = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-8 gap-5 text-black text-[20px]'>
                <Link to="/breakfast">Breakfast</Link>
                <Link to="/lunch">Lunch</Link>
                <Link to="/dinner">Dinner</Link>
                <p></p>

            </div>
        </div>
    );
};

export default FoodMenu;
