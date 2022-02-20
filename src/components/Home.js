import React from 'react';
import img1 from '../images/food-1-300x235.png';
import img2 from '../images/food-10-300x236.png';
import img3 from '../images/food-11-300x234.png';
import img4 from '../images/food-12-300x247.png';

const collectFastFood = [
    {
        img: img1,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
]

const Home = () => {
    return (
        <div className='my-5'>
            <span className='fs-6 fst-italic text-capitalize text-warning'>Popular Dishes</span>
            <h2>POPULAR DISHES</h2>

            <div className="container row row-cols-1 row-cols-md-4 g-4 mx-auto my-3">
                {
                    collectFastFood.map(food =>
                        <div className="col">
                            <div className="card h-100">
                                <img src={food.img} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;