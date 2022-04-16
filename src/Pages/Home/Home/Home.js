import React, { useEffect, useState } from 'react';
import FoodCart from '../../../Shared/FoodCart/FoodCart';
import Banner from '../Banner/Banner';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    const handleBreakfast = () => {
        const breakfast = meals.filter(breakfast => breakfast.category === 'breakfast');
        setFoods(breakfast)
    }
    const handleLunch = () => {
        const lunch = meals.filter(lunch => lunch.category === 'lunch');
        setFoods(lunch)
    }
    const handleDinner = () => {
        const dinner = meals.filter(dinner => dinner.category === 'dinner');
        setFoods(dinner)
    }
    return (
        <div>
            <Banner />
            <div className='flex items-center justify-center my-8 gap-5 text-black text-[20px]'>
                <button onClick={handleBreakfast}>Breakfast</button>
                <button onClick={handleLunch}>Lunch</button>
                <button onClick={handleDinner} >Dinner</button>

            </div>
            <div className='grid grid-cols-3 justify-items-center'>
                {
                    foods.map(food => <FoodCart food={food} key={food.id} />)
                }
            </div>

        </div>
    );
};

export default Home